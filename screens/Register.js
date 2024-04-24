// import * as React from "react";
// import { Text, StyleSheet, Image, View, Pressable } from "react-native";
// import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";
// import { useNavigation } from "@react-navigation/native";
// const Register = () => {
//   const navigation = useNavigation();
//   return (
//     <View style={styles.register}>
//       <View style={styles.registerParent}>
//         <Text style={styles.register1}>Register</Text>
//         <View style={styles.input}>
//           <View style={styles.label}>
//             <Text style={[styles.label1, styles.textTypo]}>
//               บัตรประจำตัวประชาชน
//             </Text>
//             <Image
//               style={styles.systemIconsinfo}
//               resizeMode="cover"
//               source={require("../assets/1-system-iconsinfo2.png")}
//             />
//           </View>
//           <View style={styles.input1}>
//             <View style={styles.passwordBorder}>
//               <Image
//                 style={styles.systemLayout}
//                 resizeMode="cover"
//                 source={require("../assets/1-system-iconshome1.png")}
//               />
//               <Text style={[styles.text, styles.textTypo]}>
//                 บัตรประจำตัวประชาชน
//               </Text>
//             </View>
//           </View>
//         </View>
//         <View style={styles.input}>
//           <View style={styles.label}>
//             <Text style={[styles.label1, styles.textTypo]}>ชื่อบัญชี</Text>
//             <Image
//               style={styles.systemIconsinfo}
//               resizeMode="cover"
//               source={require("../assets/1-system-iconsinfo2.png")}
//             />
//           </View>
//           <View style={styles.input1}>
//             <View style={styles.passwordBorder}>
//               <Image
//                 style={styles.systemLayout}
//                 resizeMode="cover"
//                 source={require("../assets/1-system-iconshome1.png")}
//               />
//               <Text style={[styles.text, styles.textTypo]}>ชื่อบัญชี</Text>
//             </View>
//           </View>
//         </View>
//         <View style={styles.input}>
//           <View style={styles.label}>
//             <Text style={[styles.label1, styles.textTypo]}>รหัสผ่าน</Text>
//             <Image
//               style={styles.systemIconsinfo}
//               resizeMode="cover"
//               source={require("../assets/1-system-iconsinfo2.png")}
//             />
//           </View>
//           <View style={styles.input1}>
//             <View style={[styles.password, styles.passwordBorder]}>
//               <View style={styles.container}>
                
                
//               </View>
//               <Image
//                 style={[styles.systemIconsshowhide, styles.systemLayout]}
//                 resizeMode="cover"
//                 source={require("../assets/1-system-iconsshowhide.png")}
//               />
//             </View>
//           </View>
//         </View>
//         <View style={styles.input}>
//           <View style={styles.label}>
//             <Text style={[styles.label1, styles.textTypo]}>ยืนยันรหัสผ่าน</Text>
//             <Image
//               style={styles.systemIconsinfo}
//               resizeMode="cover"
//               source={require("../assets/1-system-iconsinfo2.png")}
//             />
//           </View>
//           <View style={styles.input1}>
//             <View style={[styles.password, styles.passwordBorder]}>
//               <View style={styles.container}>
//                 <Image
//                   style={styles.containerLayout}
//                   resizeMode="cover"
//                   source={require("../assets/ellipse-1.png")}
//                 />
                
               
//               </View>
//               <Image
//                 style={[styles.systemIconsshowhide, styles.systemLayout]}
//                 resizeMode="cover"
//                 source={require("../assets/1-system-iconsshowhide.png")}
//               />
//             </View>
//           </View>
//         </View>
//         <Text style={styles.text2}>ลืมรหัสผ่าน</Text>
//         <View style={styles.buttonParent}>
//           <Pressable style={[styles.button, styles.buttonFlexBox]}>
//             <Text style={[styles.button7, styles.buttonTypo]}>Login</Text>
//           </Pressable>
//           <Pressable
//             style={[styles.button2, styles.buttonFlexBox]}
//             onClick={() => {}}
//           >
//              <Pressable
//     style={styles.button}
//     onPress={() => navigation.navigate("Login")}
//   >
//     <Text style={styles.button1}>Register</Text>
//   </Pressable>
//           </Pressable>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   textTypo: {
//     textAlign: "left",
//     fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
//     lineHeight: 24,
//     fontSize: FontSize.bodyRegular400_size,
//   },
//   passwordBorder: {
//     paddingVertical: Padding.p_3xs,
//     borderWidth: 1,
//     borderColor: Color.colorGainsboro_100,
//     borderRadius: Border.br_5xs,
//     borderStyle: "solid",
//     flexDirection: "row",
//     paddingHorizontal: Padding.p_base,
//     flex: 1,
//     backgroundColor: Color.gray00,
//   },
//   containerLayout: {
//     height: 6,
//     width: 6,
//   },
//   systemLayout: {
//     height: 24,
//     width: 24,
//     display: "none",
//     overflow: "hidden",
//   },
//   buttonFlexBox: {
//     paddingHorizontal: Padding.p_21xl,
//     height: 44,
//     borderRadius: Border.br_13xl,
//     justifyContent: "center",
//     paddingVertical: Padding.p_3xs,
//     flexDirection: "row",
//     alignItems: "center",
//     flex: 1,
//   },
//   buttonTypo: {
//     fontSize: FontSize.buttonRegular_size,
//     fontFamily: FontFamily.buttonSmall,
//     fontWeight: "500",
//     textTransform: "capitalize",
//     textAlign: "left",
//   },
//   register1: {
//     fontSize: FontSize.heading03_size,
//     letterSpacing: -0.6,
//     lineHeight: 48,
//     fontWeight: "600",
//     fontFamily: FontFamily.heading03,
//     color: Color.gray900,
//     textAlign: "center",
//     alignSelf: "stretch",
//   },
//   label1: {
//     color: Color.descriptiveTextColourTextNormal700,
//   },
//   systemIconsinfo: {
//     width: 18,
//     height: 18,
//     marginLeft: 4,
//     display: "none",
//     overflow: "hidden",
//   },
//   label: {
//     flexDirection: "row",
//     alignSelf: "stretch",
//     alignItems: "center",
//   },
//   text: {
//     color: Color.disableDefaultOnDisableDefault,
//     marginLeft: 8,
//     flex: 1,
//   },
//   input1: {
//     marginTop: 4,
//     flexDirection: "row",
//     alignSelf: "stretch",
//   },
//   input: {
//     marginTop: 16,
//     alignSelf: "stretch",
//   },
//   containerItem: {
//     marginLeft: 4,
//   },
//   container: {
//     paddingHorizontal: 0,
//     paddingVertical: Padding.p_4xs,
//     display: "none",
//     flexDirection: "row",
//     flex: 1,
//   },
//   systemIconsshowhide: {
//     marginLeft: 8,
//   },
//   password: {
//     alignSelf: "stretch",
//   },
//   text2: {
//     fontSize: FontSize.bodySmalls300_size,
//     color: Color.labelColorLightPrimary,
//     textAlign: "right",
//     fontFamily: FontFamily.buttonSmall,
//     fontWeight: "500",
//     textTransform: "capitalize",
//     marginTop: 16,
//     alignSelf: "stretch",
//   },
//   button1: {
//     color: "white",
//     width: 80,
//     textAlign: "center",
//     top:10,
//   },
//   button7: {
//     color: Color.colorDarkslategray_200,
   
//   },
//   button: {
//     borderColor: Color.colorDarkslategray_200,
//     borderWidth: 1.5,
//     borderStyle: "solid",
//     paddingHorizontal: Padding.p_21xl,
//     height: 44,
//     borderRadius: Border.br_13xl,
//   },
//   button3: {
//     color: Color.gray00,
//   },
//   button2: {
//     backgroundColor: Color.walledGarden1000,
//     marginLeft: 16,
//   },
//   buttonParent: {
//     justifyContent: "center",
//     flexDirection: "row",
//     marginTop: 16,
//     alignSelf: "stretch",
//   },
//   registerParent: {
//     position: "absolute",
//     marginLeft: -206,
//     top: 0,
//     left: "50%",
//     width: 412,
//     paddingVertical: Padding.p_9xl,
//     paddingHorizontal: Padding.p_base,
//     alignItems: "center",
//   },
//   register: {
//     width: "100%",
//     height: 712,
//     overflow: "hidden",
//     flex: 1,
//     backgroundColor: Color.gray00,
//   },
// });

// export default Register;

import React, { useState } from 'react';
import { Text, TextInput, View, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontSize, FontFamily, Color, Border, Padding } from '../GlobalStyles';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [nationalId, setNationalId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = 
useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // ส่งข้อมูลไปยัง backend เพื่อดำเนินการลงทะเบียน
    // ถ้า backend ยืนยันว่าการลงทะเบียนสำเร็จ:
    navigation.navigate('Login'); // นำทางไปยังหน้า "Login"
    
    // ถ้าเกิดข้อผิดพลาด, คุณอาจต้องแสดงข้อความเตือนให้ผู้ใช้ทราบ
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        placeholder="National ID"
        value={nationalId}
        onChangeText={setNationalId}
        style={styles.input}
      />
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        value
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />

      {/* ปุ่ม Register */}
      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>

      {/* ปุ่มย้อนกลับไปที่หน้า "Login" */}
      <Pressable
        style={styles.backButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.blackText}>Back to Login</Text>
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
  input: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
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

export default RegisterScreen;
