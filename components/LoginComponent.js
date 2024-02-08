import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const LoginComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginParent}>
      <Text style={styles.login}>Login</Text>
      <View style={styles.input}>
        <View style={[styles.label, styles.labelFlexBox]}>
          <Text style={[styles.label1, styles.textTypo]}>ชื่อบัญชี</Text>
          <Image
            style={styles.systemIconsinfo}
            resizeMode="cover"
            source={require("../assets/1-system-iconsinfo.png")}
          />
        </View>
        <View style={styles.input1}>
          <View style={[styles.textfield, styles.buttonSpaceBlock]}>
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
        <View style={[styles.label, styles.labelFlexBox]}>
          <Text style={[styles.label1, styles.textTypo]}>รหัสผ่าน</Text>
          <Image
            style={styles.systemIconsinfo}
            resizeMode="cover"
            source={require("../assets/1-system-iconsinfo.png")}
          />
        </View>
        <View style={styles.input1}>
          <View style={[styles.password, styles.buttonSpaceBlock]}>
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
      <Text style={styles.text1}>ลืมรหัสผ่าน</Text>
      <Pressable
        style={[styles.button, styles.buttonSpaceBlock]}
        onPress={() => navigation.navigate("L1")}
      >
        <Text style={[styles.button1, styles.text2Typo]}>Login</Text>
      </Pressable>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={[styles.text2, styles.text2Typo]}>สมัครสมาชิก</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  labelFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyB5Regular,
    lineHeight: 24,
    fontSize: FontSize.selectorS4Regular_size,
  },
  buttonSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  systemLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  containerLayout: {
    height: 6,
    width: 6,
  },
  text2Typo: {
    fontSize: FontSize.buttonRegular_size,
    fontFamily: FontFamily.buttonSmall,
    fontWeight: "500",
    textTransform: "capitalize",
    textAlign: "left",
  },
  login: {
    fontSize: FontSize.heading03_size,
    letterSpacing: -0.6,
    lineHeight: 48,
    fontWeight: "600",
    fontFamily: FontFamily.heading03,
    textAlign: "center",
    color: Color.gray900,
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
  },
  systemIconshome: {
    display: "none",
  },
  text: {
    color: Color.disableDefaultOnDisableDefault,
    marginLeft: 8,
    flex: 1,
  },
  textfield: {
    borderWidth: 1,
    borderColor: Color.disableDefaultDisableDefault,
    borderStyle: "solid",
    backgroundColor: Color.baseColourWhite,
    borderRadius: Border.br_5xs,
    paddingVertical: Padding.p_3xs,
    flex: 1,
    paddingHorizontal: Padding.p_base,
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
    borderWidth: 1,
    borderColor: Color.disableDefaultDisableDefault,
    borderStyle: "solid",
    backgroundColor: Color.baseColourWhite,
    borderRadius: Border.br_5xs,
    paddingVertical: Padding.p_3xs,
    flex: 1,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
  },
  text1: {
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
    color: Color.baseColourWhite,
  },
  button: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.walledGarden1000,
    height: 44,
    justifyContent: "center",
    paddingHorizontal: Padding.p_21xl,
    marginTop: 16,
    alignSelf: "stretch",
    alignItems: "center",
  },
  text2: {
    color: Color.gray900,
  },
  pressable: {
    marginTop: 16,
  },
  loginParent: {
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

export default LoginComponent;
