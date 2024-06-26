import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  Image
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import SQLite from 'react-native-sqlite-storage';
import UserContext from '../components/UserContext';

const Modal2 = () => {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);
  const [selectedValue1, setSelectedValue1] = useState('');
  const [selectedValue2, setSelectedValue2] = useState('');
  const [selectedValue3, setSelectedValue3] = useState('');
  const [selectedValue4, setSelectedValue4] = useState('');
  const [area, setArea] = useState('');
  const [landLocation, setLandLocation] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [db, setDb] = useState(null);

  useEffect(() => {
    const openDatabase = async () => {
      try {
        const database = await SQLite.openDatabase({ name: 'plot.db', location: 'default' });
        setDb(database);
        console.log('Plot database opened');
        await createPlotTable(database);
      } catch (error) {
        console.log('Failed to open database:', error);
      }
    };

    const createPlotTable = async (database) => {
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS plot (
          plot_id INTEGER PRIMARY KEY AUTOINCREMENT,
          rice_variety TEXT,
          area REAL,
          planting_date DATE,
          planting_method TEXT,
          soil_type TEXT,
          water_source TEXT,
          location TEXT,
          user_id INTEGER
        );
      `;

      try {
        await database.executeSql(createTableQuery);
        console.log('Plot table created successfully');
      } catch (error) {
        console.error('Failed to create plot table:', error);
      }
    };

    openDatabase();
  }, []);

  const savePlotData = async (plotData) => {
    if (!db) {
      console.error('Database is not initialized');
      return;
    }

    const {
      rice_variety,
      area,
      planting_date,
      planting_method,
      soil_type,
      water_source,
      location,
      user_id,
    } = plotData;

    const query = `
      INSERT INTO plot (
        rice_variety, area, planting_date, planting_method, soil_type, water_source, location, user_id
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const params = [
      rice_variety,
      area,
      planting_date,
      planting_method,
      soil_type,
      water_source,
      location,
      user_id,
    ];

    try {
      const results = await db.executeSql(query, params);
      if (results[0].rowsAffected > 0) {
        console.log('Plot data saved successfully');
      } else {
        console.log('Failed to save plot data');
      }
    } catch (error) {
      console.error('Error inserting plot data:', error);
    }
  };

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const onCreatePlot = async () => {
    const plotData = {
      rice_variety: selectedValue1,
      area: parseFloat(area),
      planting_date: date.toISOString().split('T')[0],
      planting_method: selectedValue4,
      soil_type: selectedValue2,
      water_source: selectedValue3,
      location: landLocation,
      user_id: user.id
    };

    try {
      await savePlotData(plotData);
      navigation.navigate('Modal3');
    } catch (error) {
      console.error('Error creating plot:', error);
    }
  };

  return (
    <View style={styles.modal}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={styles.backIcon}
            source={require('../assets/iconixtolineararrowleft1.png')}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>กรอกข้อมูลแปลง</Text>
      </View>

      <View style={styles.content}>
        <Picker
          selectedValue={selectedValue1}
          onValueChange={setSelectedValue1}
          style={styles.picker}
        >
          <Picker.Item label="พันธุ์ข้าว" value="" />
          <Picker.Item label="กข 45" value="กข 45" />
          <Picker.Item label="พลายงาม" value="พลายงาม" />
          <Picker.Item label="เหลืองใหญ่ 48" value="เหลืองใหญ่ 48" />
          <Picker.Item label="ปราจีนบุรี 1" value="ปราจีนบุรี 1" />
          <Picker.Item label="ปราจีนบุรี 2" value="ปราจีนบุรี 2" />
        </Picker>

        <Text>จำนวนพื้นที่:</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          placeholder="กรอกจำนวนพื้นที่"
          value={area}
          onChangeText={setArea}
        />

        <Picker
          selectedValue={selectedValue2}
          onValueChange={setSelectedValue2}
          style={styles.picker}
        >
          <Picker.Item label="ชนิดของดิน" value="" />
          <Picker.Item label="ดินร่วน" value="ดินร่วน" />
          <Picker.Item label="ดินร่วนปนทราย" value="ดินร่วนปนทราย" />
          <Picker.Item label="ดินทราย" value="ดินทราย" />
          <Picker.Item label="ดินเหนียว" value="ดินเหนียว" />
        </Picker>

        <Picker
          selectedValue={selectedValue3}
          onValueChange={setSelectedValue3}
          style={styles.picker}
        >
          <Picker.Item label="แหล่งน้ำที่ใช้" value="" />
          <Picker.Item label="ชลประทาน" value="ชลประทาน" />
          <Picker.Item label="ธรรมชาติ" value="ธรรมชาติ" />
          <Picker.Item label="สระขุด" value="สระขุด" />
          <Picker.Item label="เขื่อน" value="เขื่อน" />
        </Picker>

        <Picker
          selectedValue={selectedValue4}
          onValueChange={setSelectedValue4}
          style={styles.picker}
        >
          <Picker.Item label="วิธีการปลูก" value="" />
          <Picker.Item label="หว่านน้ำตม" value="หว่านน้ำตม" />
          <Picker.Item label="หว่านแห้ง" value="หว่านแห้ง" />
          <Picker.Item label="ปักดำ" value="ปักดำ" />
          <Picker.Item label="โยนกล้า" value="โยนกล้า" />
        </Picker>

        <Text>วันที่ปลูก:</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowDatePicker(true)}
        >
          <Text>เลือกวันที่: {date.toLocaleDateString('th-TH')}</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onDateChange}
          />
        )}

        <TextInput
          style={styles.textInput}
          placeholder="สถานที่แปลง"
          value={landLocation}
          onChangeText={setLandLocation}
        />

        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.cancelButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.cancelButtonText}>ยกเลิก</Text>
          </Pressable>
          <Pressable
            style={styles.createButton}
            onPress={onCreatePlot}
          >
            <Text style={styles.createButtonText}>สร้างแปลง</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    marginTop: 16,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginVertical: 8,
  },
  datePickerButton: {
    height: 40,
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  createButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 8,
  },
  createButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cancelButton: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  cancelButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Modal2;
