// import * as React from "react";
// import { Text, StyleSheet, Image, View, TextInput, Pressable } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import LabelAboveHintNone1 from "../components/LabelAboveHintNone1";
// import PasswordInputContainer1 from "../components/PasswordInputContainer1";
// import SmallSizeTrueStyleOutline from "../components/SmallSizeTrueStyleOutline";
// import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

// const Register = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.register}>
//       <View style={styles.registerParent}>
//         <Text style={styles.register1}>Register</Text>
//         <View style={styles.input}>
//           <View style={[styles.label, styles.labelFlexBox]}>
//             <Text style={styles.label1}>บัตรประจำตัวประชาชน</Text>
//             <Image
//               style={styles.systemIconsinfo}
//               resizeMode="cover"
//               source={require("../assets/1-system-iconsinfo.png")}
//             />
//           </View>
//           <TextInput
//             style={styles.input}
//             placeholder="บัตรประจำตัวประชาชน"
//             placeholderTextColor={Color.gray400}
//             keyboardType="numeric"
//             maxLength={13}
//           />
//           <View style={styles.input}>
//       <View style={[styles.label, styles.labelFlexBox2]}>
//         <Text style={styles.label1}>ชื่อบัญชี</Text>
//         <Image
//           style={styles.systemIconsinfo}
//           resizeMode="cover"
//           source={require("../assets/1-system-iconsinfo.png")}
//         />
//       </View>
//       <TextInput
//         style={styles.input2}
//         placeholder="ชื่อบัญชี"
//         placeholderTextColor={Color.gray400}
//       />
//     </View>
//         </View>
//       </View>
//     </View>
    
//   );
// };

// const styles = StyleSheet.create({
//   textSpaceBlock: {
//     marginTop: 16,
//     alignSelf: "stretch",
//   },
//   register1: {
//     fontSize: FontSize.heading03_size,
//     letterSpacing: -0.6,
//     lineHeight: 48,
//     fontWeight: "600",
//     fontFamily: FontFamily.heading03,
//     color: Color.gray900,
//   top:-100,
//   textAlign: "center",
//     alignSelf: "stretch",
//   },
//   text: {
//     fontSize: FontSize.bodySmalls300_size,
//     textTransform: "capitalize",
//     fontWeight: "500",
//     fontFamily: FontFamily.buttonSmall,
//     color: Color.labelColorLightPrimary,
//     textAlign: "right",
//   },
//   buttonParent: {
//     flexDirection: "row",
//     justifyContent: "center",
//   },
//   registerParent: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: Padding.p_base,
//     paddingVertical: Padding.p_9xl,
//   },
//   register: {
//     backgroundColor: Color.surfaceColourWhiteSurface,
//     flex: 1,
//     width: "100%",
//     height: 712,
//     overflow: "hidden",
//   },
//   labelFlexBox: {
//     flexDirection: "row",
//     alignSelf: "stretch",
//     top:-120,
//   textAlign: "center",
//   },
//   labelFlexBox2: {
//     flexDirection: "row",
//     alignSelf: "stretch",
//     top:-20,
//   textAlign: "center",
//   },
//   label1: {
//     fontSize: FontSize.selectorS4Regular_size,
//     lineHeight: 24,
//     fontFamily: FontFamily.selectorS6Regular,
//     color: Color.descriptiveTextColourTextNormal700,
//     textAlign: "left",
//   },
//   systemIconsinfo: {
//     width: 18,
//     height: 18,
//     overflow: "hidden",
//     display: "none",
//     marginLeft: 4,
//   },
//   label: {
//     alignItems: "center",
//   },
//   input1: {
//     backgroundColor: Color.gray00,
//     marginTop: 4,
//   },
//   input2: {
//     marginTop: 16,
//     alignSelf: "stretch",
//     top:0,
  
//   },
//   input: {
//     marginTop: 16,
//     alignSelf: "stretch",
//     top:-110,
  
//   },
  
// });

// export default Register;
import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
const Register = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.register}>
      <View style={styles.registerParent}>
        <Text style={styles.register1}>Register</Text>
        <View style={styles.input}>
          <View style={styles.label}>
            <Text style={[styles.label1, styles.textTypo]}>
              บัตรประจำตัวประชาชน
            </Text>
            <Image
              style={styles.systemIconsinfo}
              resizeMode="cover"
              source={require("../assets/1-system-iconsinfo2.png")}
            />
          </View>
          <View style={styles.input1}>
            <View style={styles.passwordBorder}>
              <Image
                style={styles.systemLayout}
                resizeMode="cover"
                source={require("../assets/1-system-iconshome1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>
                บัตรประจำตัวประชาชน
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.input}>
          <View style={styles.label}>
            <Text style={[styles.label1, styles.textTypo]}>ชื่อบัญชี</Text>
            <Image
              style={styles.systemIconsinfo}
              resizeMode="cover"
              source={require("../assets/1-system-iconsinfo2.png")}
            />
          </View>
          <View style={styles.input1}>
            <View style={styles.passwordBorder}>
              <Image
                style={styles.systemLayout}
                resizeMode="cover"
                source={require("../assets/1-system-iconshome1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>ชื่อบัญชี</Text>
            </View>
          </View>
        </View>
        <View style={styles.input}>
          <View style={styles.label}>
            <Text style={[styles.label1, styles.textTypo]}>รหัสผ่าน</Text>
            <Image
              style={styles.systemIconsinfo}
              resizeMode="cover"
              source={require("../assets/1-system-iconsinfo2.png")}
            />
          </View>
          <View style={styles.input1}>
            <View style={[styles.password, styles.passwordBorder]}>
              <View style={styles.container}>
                
                
              </View>
              <Image
                style={[styles.systemIconsshowhide, styles.systemLayout]}
                resizeMode="cover"
                source={require("../assets/1-system-iconsshowhide.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.input}>
          <View style={styles.label}>
            <Text style={[styles.label1, styles.textTypo]}>ยืนยันรหัสผ่าน</Text>
            <Image
              style={styles.systemIconsinfo}
              resizeMode="cover"
              source={require("../assets/1-system-iconsinfo2.png")}
            />
          </View>
          <View style={styles.input1}>
            <View style={[styles.password, styles.passwordBorder]}>
              <View style={styles.container}>
                <Image
                  style={styles.containerLayout}
                  resizeMode="cover"
                  source={require("../assets/ellipse-1.png")}
                />
                
               
              </View>
              <Image
                style={[styles.systemIconsshowhide, styles.systemLayout]}
                resizeMode="cover"
                source={require("../assets/1-system-iconsshowhide.png")}
              />
            </View>
          </View>
        </View>
        <Text style={styles.text2}>ลืมรหัสผ่าน</Text>
        <View style={styles.buttonParent}>
          <Pressable style={[styles.button, styles.buttonFlexBox]}>
            <Text style={[styles.button7, styles.buttonTypo]}>Login</Text>
          </Pressable>
          <Pressable
            style={[styles.button2, styles.buttonFlexBox]}
            onClick={() => {}}
          >
             <Pressable
    style={styles.button}
    onPress={() => navigation.navigate("Login")}
  >
    <Text style={styles.button1}>Register</Text>
  </Pressable>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    lineHeight: 24,
    fontSize: FontSize.bodyRegular400_size,
  },
  passwordBorder: {
    paddingVertical: Padding.p_3xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    flex: 1,
    backgroundColor: Color.gray00,
  },
  containerLayout: {
    height: 6,
    width: 6,
  },
  systemLayout: {
    height: 24,
    width: 24,
    display: "none",
    overflow: "hidden",
  },
  buttonFlexBox: {
    paddingHorizontal: Padding.p_21xl,
    height: 44,
    borderRadius: Border.br_13xl,
    justifyContent: "center",
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  buttonTypo: {
    fontSize: FontSize.buttonRegular_size,
    fontFamily: FontFamily.buttonSmall,
    fontWeight: "500",
    textTransform: "capitalize",
    textAlign: "left",
  },
  register1: {
    fontSize: FontSize.heading03_size,
    letterSpacing: -0.6,
    lineHeight: 48,
    fontWeight: "600",
    fontFamily: FontFamily.heading03,
    color: Color.gray900,
    textAlign: "center",
    alignSelf: "stretch",
  },
  label1: {
    color: Color.descriptiveTextColourTextNormal700,
  },
  systemIconsinfo: {
    width: 18,
    height: 18,
    marginLeft: 4,
    display: "none",
    overflow: "hidden",
  },
  label: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  text: {
    color: Color.disableDefaultOnDisableDefault,
    marginLeft: 8,
    flex: 1,
  },
  input1: {
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  input: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  containerItem: {
    marginLeft: 4,
  },
  container: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_4xs,
    display: "none",
    flexDirection: "row",
    flex: 1,
  },
  systemIconsshowhide: {
    marginLeft: 8,
  },
  password: {
    alignSelf: "stretch",
  },
  text2: {
    fontSize: FontSize.bodySmalls300_size,
    color: Color.labelColorLightPrimary,
    textAlign: "right",
    fontFamily: FontFamily.buttonSmall,
    fontWeight: "500",
    textTransform: "capitalize",
    marginTop: 16,
    alignSelf: "stretch",
  },
  button1: {
    color: "white",
    width: 80,
    textAlign: "center",
    top:10,
  },
  button7: {
    color: Color.colorDarkslategray_200,
   
  },
  button: {
    borderColor: Color.colorDarkslategray_200,
    borderWidth: 1.5,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_21xl,
    height: 44,
    borderRadius: Border.br_13xl,
  },
  button3: {
    color: Color.gray00,
  },
  button2: {
    backgroundColor: Color.walledGarden1000,
    marginLeft: 16,
  },
  buttonParent: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 16,
    alignSelf: "stretch",
  },
  registerParent: {
    position: "absolute",
    marginLeft: -206,
    top: 0,
    left: "50%",
    width: 412,
    paddingVertical: Padding.p_9xl,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  register: {
    width: "100%",
    height: 712,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.gray00,
  },
});

export default Register;
