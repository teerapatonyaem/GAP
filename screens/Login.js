import React, { useState, useContext } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import { useNavigation } from '@react-navigation/native';
import { FontSize, FontFamily, Color, Padding, Border } from '../GlobalStyles';
import UserContext from '../components/UserContext'; // นำเข้า UserContext

const db = SQLite.openDatabase({
  name: 'MyDatabase.db',
  location: 'default',
});

const Login = () => {
  const [accountName, setAccountName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const { setUsername } = useContext(UserContext); // ใช้ useContext เพื่อเข้าถึง setUsername

  const handleLogin = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Users WHERE username = ? AND password = ?',
        [accountName, password],
        (tx, results) => {
          if (results.rows.length > 0) {
            setUsername(accountName); // บันทึกชื่อผู้ใช้ใน UserContext
            navigation.navigate('Home'); // นำทางไปยังหน้า Home
          } else {
            alert('Invalid username or password');
          }
        },
        error => {
          console.error('Error querying database', error);
        }
      );
    });
  };

  const renderPasswordIcon = () => (
    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
      <Image
        style={styles.visibilityIcon}
        resizeMode="cover"
        source={
          showPassword
            ? require('../assets/1-system-iconsshowhide1.png')
            : require('../assets/1-system-iconsshowhide2.png')
        }
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="ชื่อบัญชี"
          value={accountName}
          onChangeText={setAccountName}
        />
      </View>

      <View style={styles.inputWrapper}>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="รหัสผ่าน"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          {renderPasswordIcon()}
        </View>
      </View>

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Pressable
        style={styles.registerPressable}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.registerText}>สมัครสมาชิก</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingRight: 8,
  },
  passwordInput: {
    flex: 1,
    padding: 8,
  },
  visibilityIcon: {
    width: 24,
    height: 24,
  },
  button: {
    alignSelf: 'stretch',
    borderRadius: Border.br_13xl,
    backgroundColor: Color.walledGarden1000,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Padding.p_21xl,
    paddingVertical: Padding.p_3xs,
    marginVertical: 16,
  },
  buttonText: {
    fontSize: FontSize.buttonRegular_size,
    fontWeight: '500',
    fontFamily: FontFamily.buttonSmall,
    color: 'white',
  },
  registerPressable: {
    marginTop: 16,
    alignSelf: 'stretch',
  },
  registerText: {
    fontSize: FontSize.buttonRegular_size,
    fontWeight: '500',
    fontFamily: FontFamily.buttonSmall,
    color: Color.labelColorLightPrimary,
    textAlign: 'center',
  },
});

export default Login;
