import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const RegisterComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registerParent}>
      <Text style={styles.register}>Register</Text>
      <View style={styles.input}>
        <View style={styles.label}>
          <Text style={[styles.label1, styles.textTypo]}>
            บัตรประจำตัวประชาชน
          </Text>
          <Image
            style={styles.systemIconsinfo}
            resizeMode="cover"
            source={require("../assets/1-system-iconsinfo.png")}
          />
        </View>
        <View style={styles.input1}>
          <View style={styles.passwordBorder}>
            <Image
              style={[styles.systemIconshome, styles.systemLayout]}
              resizeMode="cover"
              source={require("../assets/1-system-iconshome.png")}
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
            source={require("../assets/1-system-iconsinfo.png")}
          />
        </View>
        <View style={styles.input1}>
          <View style={styles.passwordBorder}>
            <Image
              style={[styles.systemIconshome, styles.systemLayout]}
              resizeMode="cover"
              source={require("../assets/1-system-iconshome.png")}
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
            source={require("../assets/1-system-iconsinfo.png")}
          />
        </View>
        <View style={styles.input1}>
          <View style={[styles.password, styles.passwordBorder]}>
            <View style={styles.container}>
              <Image
                style={styles.containerLayout}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.containerItem, styles.containerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.containerItem, styles.containerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.containerItem, styles.containerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.containerItem, styles.containerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.containerItem, styles.containerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.containerItem, styles.containerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.containerItem, styles.containerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.containerItem, styles.containerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.containerItem, styles.containerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.containerItem, styles.containerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.containerItem, styles.containerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
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
      <View style={styles.input}>
        <View style={styles.label}>
          <Text style={[styles.label1, styles.textTypo]}>ยืนยันรหัสผ่าน</Text>
          <Image
            style={styles.systemIconsinfo}
            resizeMode="cover"
            source={require("../assets/1-system-iconsinfo.png")}
          />
        </View>
        <View style={styles.input1}>
          <View style={[styles.password, styles.passwordBorder]}>
            <View style={styles.container}>
              <Image
                style={styles.containerLayout}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.containerItem, styles.containerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.containerItem, styles.containerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.containerItem, styles.containerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.containerItem, styles.containerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.containerItem, styles.containerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.containerItem, styles.containerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.containerItem, styles.containerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.containerItem, styles.containerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.containerItem, styles.containerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.containerItem, styles.containerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.containerItem, styles.containerLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
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
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Text style={[styles.button1, styles.buttonTypo]}>Login</Text>
        </View>
        <Pressable
          style={[styles.button2, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.button3, styles.buttonTypo]}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyB5Regular,
    lineHeight: 24,
    fontSize: FontSize.selectorS4Regular_size,
  },
  systemLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  passwordBorder: {
    paddingVertical: Padding.p_3xs,
    borderWidth: 1,
    borderColor: Color.disableDefaultDisableDefault,
    backgroundColor: Color.baseColourWhite,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
  },
  containerLayout: {
    height: 6,
    width: 6,
  },
  buttonFlexBox: {
    paddingHorizontal: Padding.p_21xl,
    height: 44,
    borderRadius: Border.br_13xl,
    justifyContent: "center",
    paddingVertical: Padding.p_3xs,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonTypo: {
    fontSize: FontSize.buttonRegular_size,
    fontFamily: FontFamily.buttonSmall,
    fontWeight: "500",
    textTransform: "capitalize",
    textAlign: "left",
  },
  register: {
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
  systemIconshome: {
    display: "none",
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
    flex: 1,
    flexDirection: "row",
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
    color: Color.brightLightGreen900,
  },
  button: {
    borderColor: Color.colorDarkslategray_100,
    borderWidth: 1.5,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_21xl,
    height: 44,
    borderRadius: Border.br_13xl,
  },
  button3: {
    color: Color.baseColourWhite,
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
});

export default RegisterComponent;
