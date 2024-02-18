import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LabelAboveHintNone1 from "../components/LabelAboveHintNone1";
import PasswordInputContainer1 from "../components/PasswordInputContainer1";
import SmallSizeTrueStyleOutline from "../components/SmallSizeTrueStyleOutline";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.register}>
      <View style={styles.registerParent}>
        <Text style={styles.register1}>Register</Text>
        <LabelAboveHintNone1
          label="บัตรประจำตัวประชาชน"
          systemIconsInfo={require("../assets/1-system-iconsinfo.png")}
          systemIconsHome={require("../assets/1-system-iconshome.png")}
          text="บัตรประจำตัวประชาชน"
          showSystemIconsHome={false}
          labelAboveHintNonePosition="unset"
          labelAboveHintNoneMarginTop={16}
          labelAboveHintNoneAlignSelf="stretch"
          labelAboveHintNoneMarginLeft="unset"
          inputBackgroundColor="unset"
          textfieldBackgroundColor="#fff"
          textColor="#98a2b3"
        />
        <LabelAboveHintNone1
          label="ชื่อบัญชี"
          systemIconsInfo={require("../assets/1-system-iconsinfo.png")}
          systemIconsHome={require("../assets/1-system-iconshome.png")}
          text="ชื่อบัญชี"
          showSystemIconsHome={false}
          labelAboveHintNonePosition="unset"
          labelAboveHintNoneMarginTop={16}
          labelAboveHintNoneAlignSelf="stretch"
          labelAboveHintNoneMarginLeft="unset"
          inputBackgroundColor="unset"
          textfieldBackgroundColor="#fff"
          textColor="#98a2b3"
        />
        <PasswordInputContainer1
          passwordFieldLabel="รหัสผ่าน"
          showContainer={false}
          ellipseIcon
          showEllipseIcon
          ellipseIconVisible
          ellipseIconVisible1
          ellipseIconVisible2
          ellipseIconVisible3
          ellipseIconVisible4
          ellipseIconVisible5
          ellipseIconVisible6
          ellipseIconVisible7
          ellipseIconVisible8
          ellipseIconVisible9
        />
        <PasswordInputContainer1
          passwordFieldLabel="ยืนยันรหัสผ่าน"
          showContainer={false}
          ellipseIcon
          showEllipseIcon
          ellipseIconVisible
          ellipseIconVisible1
          ellipseIconVisible2
          ellipseIconVisible3
          ellipseIconVisible4
          ellipseIconVisible5
          ellipseIconVisible6
          ellipseIconVisible7
          ellipseIconVisible8
          ellipseIconVisible9
        />
        <Text style={[styles.text, styles.textSpaceBlock]}>ลืมรหัสผ่าน</Text>
        <View style={[styles.buttonParent, styles.textSpaceBlock]}>
          <SmallSizeTrueStyleOutline
            button="Login"
            showText
            smallSizeTrueStyleOutlinePosition="unset"
            smallSizeTrueStyleOutlineBorderRadius={32}
            smallSizeTrueStyleOutlineBorderStyle="solid"
            smallSizeTrueStyleOutlineBorderColor="#093311"
            smallSizeTrueStyleOutlineBorderWidth={1.5}
            smallSizeTrueStyleOutlinePaddingHorizontal="unset"
            smallSizeTrueStyleOutlineAlignSelf="unset"
            smallSizeTrueStyleOutlineBackgroundColor="unset"
            smallSizeTrueStyleOutlineMarginTop="unset"
            smallSizeTrueStyleOutlineFlex={1}
            smallSizeTrueStyleOutlineMarginLeft="unset"
            smallSizeTrueStyleOutlineBottom="unset"
            smallSizeTrueStyleOutlineLeft="unset"
            smallSizeTrueStyleOutlineWidth="unset"
            buttonFontSize={17}
            buttonFontFamily="Poppins-Medium"
            buttonColor="#126622"
          />
          <SmallSizeTrueStyleOutline
            button="Register"
            showText
            smallSizeTrueStyleOutlinePosition="unset"
            smallSizeTrueStyleOutlineBorderRadius={32}
            smallSizeTrueStyleOutlineBorderStyle="unset"
            smallSizeTrueStyleOutlineBorderColor="unset"
            smallSizeTrueStyleOutlinePaddingHorizontal="unset"
            smallSizeTrueStyleOutlineAlignSelf="unset"
            smallSizeTrueStyleOutlineBackgroundColor="#03290e"
            smallSizeTrueStyleOutlineMarginTop="unset"
            smallSizeTrueStyleOutlineFlex={1}
            smallSizeTrueStyleOutlineMarginLeft={16}
            smallSizeTrueStyleOutlineBottom="unset"
            smallSizeTrueStyleOutlineLeft="unset"
            smallSizeTrueStyleOutlineWidth="unset"
            buttonFontSize={17}
            buttonFontFamily="Poppins-Medium"
            buttonColor="#fff"
            onButtonPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
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
  text: {
    fontSize: FontSize.bodySmalls300_size,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.buttonSmall,
    color: Color.labelColorLightPrimary,
    textAlign: "right",
  },
  buttonParent: {
    flexDirection: "row",
    justifyContent: "center",
  },
  registerParent: {
    position: "absolute",
    marginLeft: -206,
    top: 0,
    left: "50%",
    width: 412,
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_9xl,
  },
  register: {
    backgroundColor: Color.surfaceColourWhiteSurface,
    flex: 1,
    width: "100%",
    height: 712,
    overflow: "hidden",
  },
});

export default Register;
