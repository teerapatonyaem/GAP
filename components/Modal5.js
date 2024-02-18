import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormContainer1 from "./FormContainer1";
import LabelAboveHintNone from "./LabelAboveHintNone";
import SmallSizeTrueStyleOutline from "./SmallSizeTrueStyleOutline";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Modal5 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.modal}>
      <View style={styles.frameParent}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>เพิ่มสมาชิก</Text>
        </View>
        <View style={styles.parentFlexBox}>
          <FormContainer1 />
          <View style={styles.inputParent}>
            <LabelAboveHintNone
              label="ชื่อสมาชิก"
              iconStatus={require("../assets/icon-status.png")}
              systemIconsHome={require("../assets/1-system-iconshome1.png")}
              text="ชื่อสมาชิก"
              labelAboveHintNonePosition="unset"
              labelAboveHintNoneMarginTop="unset"
            />
            <LabelAboveHintNone
              label="ตำแหน่ง"
              iconStatus={require("../assets/icon-status.png")}
              systemIconsHome={require("../assets/1-system-iconshome1.png")}
              text="ตำแหน่ง"
              labelAboveHintNonePosition="unset"
              labelAboveHintNoneMarginTop={8}
            />
          </View>
        </View>
        <View style={[styles.buttonParent, styles.parentFlexBox]}>
          <SmallSizeTrueStyleOutline
            button="ยกเลิก"
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
            smallSizeTrueStyleOutlineMarginLeft="unset"
            smallSizeTrueStyleOutlineBottom="unset"
            smallSizeTrueStyleOutlineLeft="unset"
            smallSizeTrueStyleOutlineWidth={182}
            buttonFontSize={17}
            buttonFontFamily="Poppins-Medium"
            buttonColor="#126622"
            onButtonPress={() => navigation.navigate("Member")}
          />
          <SmallSizeTrueStyleOutline
            button="เพิ่มสมาชิก"
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
            smallSizeTrueStyleOutlineMarginLeft={8}
            smallSizeTrueStyleOutlineBottom="unset"
            smallSizeTrueStyleOutlineLeft="unset"
            smallSizeTrueStyleOutlineWidth="unset"
            buttonFontSize={17}
            buttonFontFamily="Poppins-Medium"
            buttonColor="#fff"
            onButtonPress={() => navigation.navigate("Member")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    marginTop: 8,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.bodyBH3SemiBold_size,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.titleT3SemiBold,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    flex: 1,
  },
  wrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  inputParent: {
    marginLeft: 8,
    flex: 1,
    alignItems: "center",
  },
  buttonParent: {
    justifyContent: "center",
  },
  frameParent: {
    borderRadius: Border.br_base,
    backgroundColor: Color.surfaceColourWhiteSurface,
    padding: Padding.p_base,
    width: 412,
  },
  modal: {
    backgroundColor: Color.colorDarkslategray_100,
    height: 712,
    maxWidth: "100%",
    maxHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
    width: 412,
  },
});

export default Modal5;
