import React, { useContext, useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, View, Pressable, TextInput } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import SQLite from 'react-native-sqlite-storage';
import { Padding, Color, FontSize, Border, FontFamily } from '../GlobalStyles';
import SectionCard from '../components/SectionCard';
import ProfileForm1 from '../components/ProfileForm1';
import LogoutButton from '../components/LogoutButton'; 
import UserContext from '../components/UserContext';

// Initialize SQLite and create the table
const db = SQLite.openDatabase(
  {
    name: 'farmer.db',
    location: 'default',
  },
  () => {},
  error => {
    console.log('Error opening database:', error);
  }
);

const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS farmer (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        national_id TEXT,
        phone TEXT,
        email TEXT
      );`,
      [],
      () => {
        console.log('Table created successfully');
      },
      error => {
        console.log('Error creating table:', error);
      }
    );
  });
};

const updateUser = (name, national_id, phone, email) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO farmer (name, national_id, phone, email) VALUES (?, ?, ?, ?);`,
        [name, national_id, phone, email],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            resolve(true);
          } else {
            resolve(false);
          }
        },
        error => {
          reject(error);
        }
      );
    });
  });
};

const UploadButton = ({ onFileSelected }) => {
  const handlePress = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorCode) {
        console.log("ImagePicker Error:", response.errorMessage);
      } else {
        const file = response.assets[0];
        if (onFileSelected) {
          onFileSelected(file);
        }
      }
    });
  };

  return (
    <Pressable style={styles.uploadWrapper} onPress={handlePress}>
      <Text style={styles.uploadText}>Upload</Text>
    </Pressable>
  );
};

const Profile = () => {
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState({ nationalId: false, name: false, phone: false, email: false });
  const [newUserData, setNewUserData] = useState({
    national_id: user?.national_id || '',
    name: user?.name || '',
    phone: user?.phone || '',
    email: user?.email || '',
  });

  useEffect(() => {
    createTable();
  }, []);

  const handleFileSelected = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', {
        uri: file.uri,
        type: file.type,
        name: file.fileName,
      });

      const response = await axios.post(
        'https://your-backend-endpoint.com/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleSave = async (field) => {
    console.log(`Saving field ${field} with value ${newUserData[field]}`);
    const updatedUser = { ...user, [field]: newUserData[field] };
    setUser(updatedUser);
    setIsEditing({ ...isEditing, [field]: false });
    console.log('User data updated:', updatedUser);

    try {
      await updateUser(newUserData.name, newUserData.national_id, newUserData.phone, newUserData.email);
      console.log('User data saved to database');
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.profileInner}>
          <SectionCard />
          
          {/* Information Section */}
          <View style={styles.infoSection}>
            <View style={styles.sectionSpacing}>
              <Text style={styles.headerText}>ชื่อ - นามสกุล</Text>
              {isEditing.name ? (
                <View style={styles.editSection}>
                  <TextInput
                    style={styles.input}
                    value={newUserData.name}
                    onChangeText={(text) => setNewUserData({ ...newUserData, name: text })}
                    placeholder="Enter new name"
                  />
                  <Pressable style={styles.saveButton} onPress={() => handleSave('name')}>
                    <Text style={styles.saveButtonText}>Save</Text>
                  </Pressable>
                </View>
              ) : (
                <View style={styles.displaySection}>
                  <Text style={styles.regularText}>{user?.name}</Text>
                  <Pressable style={styles.editButton} onPress={() => setIsEditing({ ...isEditing, name: true })}>
                    <Text style={styles.editButtonText}>แก้ไข</Text>
                  </Pressable>
                </View>
              )}
            </View>

            <View style={styles.sectionSpacing}>
              <Text style={styles.headerText}>เลขที่บัตรประจำตัวประชาชน</Text>
              {isEditing.national_id ? (
                <View style={styles.editSection}>
                  <TextInput
                    style={styles.input}
                    value={newUserData.national_id}
                    onChangeText={(text) => setNewUserData({ ...newUserData,national_id: text })}
                    placeholder="Enter new national ID"
                  />
                  <Pressable style={styles.saveButton} onPress={() => handleSave('national_id')}>
                    <Text style={styles.saveButtonText}>Save</Text>
                  </Pressable>
                </View>
              ) : (
                <View style={styles.displaySection}>
                  <Text style={styles.regularText}>{user?.national_id}</Text>
                  <Pressable style={styles.editButton} onPress={() => setIsEditing({ ...isEditing, national_id: true })}>
                    <Text style={styles.editButtonText}>แก้ไข</Text>
                  </Pressable>
                </View>
              )}
            </View>

            <View style={styles.sectionSpacing}>
              <Text style={styles.headerText}>เบอร์โทร</Text>
              {isEditing.phone ? (
                <View style={styles.editSection}>
                  <TextInput
                    style={styles.input}
                    value={newUserData.phone}
                    onChangeText={(text) => setNewUserData({ ...newUserData, phone: text })}
                    placeholder="Enter new phone number"
                  />
                  <Pressable style={styles.saveButton} onPress={() => handleSave('phone')}>
                    <Text style={styles.saveButtonText}>Save</Text>
                  </Pressable>
                </View>
              ) : (
                <View style={styles.displaySection}>
                  <Text style={styles.regularText}>{user?.phone}</Text>
                  <Pressable style={styles.editButton} onPress={() => setIsEditing({ ...isEditing, phone: true })}>
                    <Text style={styles.editButtonText}>แก้ไข</Text>
                  </Pressable>
                </View>
              )}
            </View>

            <View style={styles.sectionSpacing}>
              <Text style={styles.headerText}>อีเมล</Text>
              {isEditing.email ? (
                <View style={styles.editSection}>
                  <TextInput
                    style={styles.input}
                    value={newUserData.email}
                    onChangeText={(text) => setNewUserData({ ...newUserData, email: text })}
                    placeholder="Enter new email"
                  />
                  <Pressable style={styles.saveButton} onPress={() => handleSave('email')}>
                    <Text style={styles.saveButtonText}>Save</Text>
                  </Pressable>
                </View>
              ) : (
                <View style={styles.displaySection}>
                  <Text style={styles.regularText}>{user?.email}</Text>
                  <Pressable style={styles.editButton} onPress={() => setIsEditing({ ...isEditing, email: true })}>
                    <Text style={styles.editButtonText}>แก้ไข</Text>
                  </Pressable>
                </View>
              )}
            </View>
          </View>
          
          {/* Upload Sections */}
          <View style={styles.uploadSection}>
            <Text style={styles.headerText}>สำเนาทะเบียนบ้าน</Text>
            <UploadButton onFileSelected={handleFileSelected} />
          </View>

          <View style={styles.uploadSection}>
            <Text style={styles.headerText}>สำเนาบัตรประชาชน</Text>
            <UploadButton onFileSelected={handleFileSelected} />
          </View>

          <View style={styles.uploadSection}>
            <Text style={styles.headerText}>การจดทะเบียนนิติบุคคล</Text>
            <UploadButton onFileSelected={handleFileSelected} />
          </View>

          {/* Navigation Sections */}
          <View style={styles.clearUsersSection}>
            <Pressable
              style={styles.clearUsersButton}
              onPress={() => navigation.navigate('ClearUsersComponent')}
            >
              <Text style={styles.clearUsersText}>Clear All Users</Text>
            </Pressable>
          </View>

          <View style={styles.logoutSection}>
            <LogoutButton />
          </View>

        </View>
      </ScrollView>

      <ProfileForm1
       onLayoutPress={() => navigation.navigate("Expense")}
       onLayoutPress1={() => navigation.navigate("Status1")}
       onLayoutPress2={() => navigation.navigate("Modal1")}
       onLayoutPress3={() => navigation.navigate("RiceInfo")}
       onLayoutPress4={() => navigation.navigate("Proofile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: Padding.p_base,
    paddingBottom: 100,
  },
  profileInner: {
    flex: 1,
  },
  infoSection: {
    marginBottom: 20,
    backgroundColor: Color.gray50,
    padding: Padding.p_5xs,
    borderRadius: Border.br_5xs,
  },
  uploadSection: {
    marginTop: 20,
    padding: Padding.p_5xs,
    backgroundColor: Color.gray50,
    borderRadius: Border.br_5xs,
  },
  sectionSpacing: {
    marginBottom: 10, // Add spacing between fields
  },
  text: {
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: '600',
    fontSize: FontSize.bodyB4Regular_size,
    color: Color.labelColorLightPrimary,
  },
  headerText: {
    textAlign: 'left',
    lineHeight: 28,
  },
  regularText: {
    textAlign: 'left',
    marginTop: 8,
    lineHeight: 28,
  },
  uploadWrapper: {
    padding: Padding.p_3xs,
    alignItems: 'center',
    backgroundColor: Color.surfaceColourWhiteSurface,
    borderRadius: Border.br_5xs,
  },
  uploadText: {
    fontFamily: FontFamily.iBMPlexSansThaiMedium,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.bodyB4Regular_size,
  },
  clearUsersSection: {
    marginTop: 20,
    alignItems: 'center',
  },
  clearUsersButton: {
    backgroundColor: 'red',
    padding: Padding.p_5xs,
    borderRadius: Border.br_5xs,
  },
  clearUsersText: {
    color: 'white',
    fontSize: FontSize.bodyB4Regular_size,
  },
  logoutSection: {
    marginTop: 20,
    alignItems: 'center',
  },
  editSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  displaySection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    padding: Padding.p_3xs,
    borderColor: Color.borderColorLightPrimary,
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    marginRight: Padding.p_5xs,
  },
  saveButton: {
    padding: Padding.p_3xs,
    backgroundColor: Color.primary,
    borderRadius: Border.br_5xs,
  },
  saveButtonText: {
    color: Color.black,
  },
  editButton: {
    padding: Padding.p_3xs,
    backgroundColor: Color.primary,
    borderRadius: Border.br_5xs,
  },
  editButtonText: {
    color: Color.black,
  },
});

export default Profile;
