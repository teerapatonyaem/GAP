import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CardContainer from "./CardContainer";
import LabelAboveHintNone from "./LabelAboveHintNone";
import Property1Default1 from "./Property1Default1";
import Property1Default2 from "./Property1Default2";
import Property1Default3 from "./Property1Default3";
import SmallSizeTrueStyleOutline from "./SmallSizeTrueStyleOutline";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const Modal2 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.modal, styles.modalFlexBox]}>
      <View style={styles.frameParent}>
        <View style={styles.iconixtolineararrowLeft1Parent}>
          <Image
            style={styles.iconixtolineararrowLeft1}
            resizeMode="cover"
            source={require("../assets/iconixtolineararrowleft1.png")}
          />
          <Text style={styles.text}>กรอกข้อมูลแปลง</Text>
        </View>
        <View style={styles.parentSpaceBlock}>
          <CardContainer
            otherItemsSoilType="พันธุ์ข้าว"
            itemCode={require("../assets/icon-status.png")}
            transactionButtonText="พันธุ์ข้าว"
            dimensionCode={require("../assets/1-system-iconscollapseexpand.png")}
            propAlignSelf="stretch"
            propWidth="unset"
            propMarginTop="unset"
            propAlignSelf1="stretch"
            propPosition="unset"
            propHeight="unset"
            propPosition1="relative"
            propWidth1={24}
            propHeight1={24}
            propOverflow="hidden"
            propMarginLeft={8}
            propRight="unset"
            propBottom="unset"
          />
          <LabelAboveHintNone
            label="จำนวนพื้นที่"
            iconStatus={require("../assets/icon-status.png")}
            systemIconsHome={require("../assets/1-system-iconshome.png")}
            text="จำนวนพื้นที่"
            labelAboveHintNonePosition="unset"
            labelAboveHintNoneMarginTop={16}
          />
          <Property1Default1
            iconStatus={require("../assets/icon-status.png")}
            property1DefaultPosition="unset"
            property1DefaultAlignSelf="stretch"
            property1DefaultMarginTop={16}
            inputWidth="unset"
            inputAlignSelf="stretch"
          />
          <Property1Default2
            iconStatus={require("../assets/icon-status.png")}
            property1DefaultPosition="unset"
            property1DefaultAlignSelf="stretch"
            property1DefaultMarginTop={16}
            inputWidth="unset"
            inputAlignSelf="stretch"
          />
          <Property1Default3
            iconStatus={require("../assets/icon-status.png")}
            property1DefaultPosition="unset"
            property1DefaultAlignSelf="stretch"
            property1DefaultMarginTop={16}
            inputWidth="unset"
            inputAlignSelf="stretch"
          />
          <CardContainer
            otherItemsSoilType="สถานที่แปลง"
            itemCode={require("../assets/icon-status.png")}
            transactionButtonText="สถานที่แปลง"
            dimensionCode={require("../assets/icons--strech.png")}
            propAlignSelf="stretch"
            propWidth="unset"
            propMarginTop={16}
            propAlignSelf1="unset"
            propPosition="relative"
            propHeight={64}
            propPosition1="absolute"
            propWidth1={20}
            propHeight1={20}
            propOverflow="unset"
            propMarginLeft="unset"
            propRight={0}
            propBottom={0}
          />
        </View>
        <View style={[styles.buttonParent, styles.parentSpaceBlock]}>
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
            onButtonPress={() => navigation.navigate("Home")}
          />
          <SmallSizeTrueStyleOutline
            button="สร้างแปลง"
            showText
            smallSizeTrueStyleOutlinePosition="unset"
            smallSizeTrueStyleOutlineBorderRadius={32}
            smallSizeTrueStyleOutlineBorderStyle="unset"
            smallSizeTrueStyleOutlineBorderColor="unset"
            smallSizeTrueStyleOutlinePaddingHorizontal="unset"
            smallSizeTrueStyleOutlineAlignSelf="unset"
            smallSizeTrueStyleOutlineBackgroundColor="#03290e"
            smallSizeTrueStyleOutlineMarginTop="unset"
            smallSizeTrueStyleOutlineMarginLeft={16}
            smallSizeTrueStyleOutlineBottom="unset"
            smallSizeTrueStyleOutlineLeft="unset"
            smallSizeTrueStyleOutlineWidth={182}
            buttonFontSize={17}
            buttonFontFamily="Poppins-Medium"
            buttonColor="#fff"
            onButtonPress={() => navigation.navigate("Modal3")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  parentSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  iconixtolineararrowLeft1: {
    width: 24,
    height: 24,
  },
  text: {
    flex: 1,
    fontSize: FontSize.titleT3SemiBold_size,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.palanquinSemiBold,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
  },
  iconixtolineararrowLeft1Parent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  buttonParent: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    borderRadius: Border.br_base,
    backgroundColor: Color.surfaceColourWhiteSurface,
    width: 398,
    padding: Padding.p_base,
    alignItems: "center",
  },
  modal: {
    backgroundColor: Color.colorDarkslategray_100,
    width: 412,
    height: 712,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Modal2;
