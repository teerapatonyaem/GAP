import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontSize, FontFamily, Color, Border, Padding } from '../GlobalStyles';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [nationalId, setNationalId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // ส่งข้อมูลไปยัง backend เพื่อดำเนินการลงทะเบียน
    navigation.navigate('Login'); // นำทางไปยังหน้า "Login"
  };

  const renderPasswordIcon = (isVisible, toggleVisibility) => (
    <TouchableOpacity onPress={toggleVisibility} style={styles.iconWrapper}>
      <Image
        source={
          isVisible
            ? require('../assets/1-system-iconsshowhide1.png')
            : require('../assets/1-system-iconsshowhide2.png')
        }
        style={styles.visibilityIcon}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="รหัสประจำตัวประชาชน"
          value={nationalId}
          onChangeText={setNationalId}
          style={[styles.input]} // ขอบสีเทาอ่อน
        />
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="ชื่อบัญชี"
          value={username}
          onChangeText={setUsername}
          style={[styles.input]} // ขอบสีเทาอ่อน
        />
      </View>

      <View style={styles.inputWrapper}>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="รหัสผ่าน"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={styles.passwordInput}
          />
          {renderPasswordIcon(showPassword, () => setShowPassword(!showPassword))}
        </View>
      </View>

      <View style={styles.inputWrapper}>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="ยืนยันรหัสผ่าน"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            style={styles.passwordInput}
          />
          {renderPasswordIcon(
            showConfirmPassword,
            () => setShowConfirmPassword(!showConfirmPassword)
          )}
        </View>
      </View>

      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>

      <Pressable
        style={styles.backButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.blackText}>Login</Text>
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
  inputWrapper: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd', // ขอบสีเทาอ่อน
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc', // ขอบสีเทา
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
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 16,
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
  backButton: {
    alignSelf: 'stretch',
    borderRadius: Border.br_13xl,
    backgroundColor: Color.gray600,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Padding.p_21xl,
    paddingVertical: Padding.p_3xs,
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: FontSize.buttonRegular_size,
    fontWeight: '500',
    fontFamily: FontFamily.buttonSmall,
    color: 'white',
  },
  blackText: {
    fontSize: FontSize.buttonRegular_size,
    fontWeight: '500',
    fontFamily: FontFamily.buttonSmall,
    color: 'black',
  },
});

export default RegisterScreen
