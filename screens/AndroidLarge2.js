import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LabelAboveHintNone from "../components/LabelAboveHintNone";
import Property1Default2 from "../components/Property1Default2";
import Property1Default1 from "../components/Property1Default1";
import Property1Default from "../components/Property1Default";
import FormContainer from "../components/FormContainer";
import SmallSizeTrueStyleSolid from "../components/SmallSizeTrueStyleSolid";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import{ ImagesAssets } from '../assets/ImagesAssets';



// import iconStatus11 from '../assets/icon-status11.png';
// import notificationIcon from "../assets/iconsnotification.png";
// import iconshome11 from '../assets/1-system-iconshome11.png';
// import iconshome21 from '../assets/1-system-iconshome21.png';

const AndroidLarge2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge2}>
      <View style={styles.frameParent}>
        <View style={styles.parent}>
          <Text style={styles.text}>กรอกข้อมูลแปลง</Text>
          <View style={styles.parentSpaceBlock}>
            <LabelAboveHintNone
              soilTypeLabel="พันธุ์ข้าว"
              //dimensionLabel={require("../assets/icon-status11.png")}
              //dimensionLabel={iconStatus11 }
              //imageLabel={require("../assets/1-system-iconshome11.png")}
              //imageLabel={iconshome11 }
              placeholderText="พันธุ์ข้าว"
              labelAboveHintNonePosition="unset"
              labelAboveHintNoneWidth="unset"
              labelAboveHintNoneAlignSelf="stretch"
              labelAboveHintNoneMarginTop="unset"
            />
            <LabelAboveHintNone
              soilTypeLabel="จำนวนพื้นที่"
             //dimensionLabel={require("../assets/icon-status11.png")}
             //dimensionLabel={iconStatus11 }
              //imageLabel={require("../assets/1-system-iconshome21.png")}
              //imageLabel={iconshome21 }
              placeholderText="จำนวนพื้นที่"
              labelAboveHintNonePosition="unset"
              labelAboveHintNoneWidth="unset"
              labelAboveHintNoneAlignSelf="stretch"
              labelAboveHintNoneMarginTop={8}
            />
            <Property1Default2
              //dimensionLabel={require("../assets/icon-status11.png")}
             //dimensionLabel={iconStatus11 }
             //imageLabel={require("../assets/1-system-iconshome21.png")}
             //imageLabel={iconshome21 }
              property1DefaultPosition="unset"
              property1DefaultAlignSelf="stretch"
              property1DefaultMarginTop={8}
              inputWidth="unset"
              inputAlignSelf="stretch"
            />
            <Property1Default1
              //dimensionLabel={require("../assets/icon-status11.png")}
            // dimensionLabel={iconStatus11 }
             //imageLabel={require("../assets/1-system-iconshome21.png")}
            // imageLabel={iconshome21 }
              property1DefaultPosition="unset"
              property1DefaultAlignSelf="stretch"
              property1DefaultMarginTop={8}
              inputWidth="unset"
              inputAlignSelf="stretch"
            />
            <Property1Default
              //dimensionLabel={require("../assets/icon-status11.png")}
            // dimensionLabel={iconStatus11 }
             //imageLabel={require("../assets/1-system-iconshome21.png")}
             //imageLabel={iconshome21 }
              property1DefaultPosition="unset"
              property1DefaultAlignSelf="stretch"
              property1DefaultMarginTop={8}
              inputWidth="unset"
              inputAlignSelf="stretch"
            />
            <FormContainer />
          </View>
        </View>
        <View style={[styles.buttonParent, styles.parentSpaceBlock]}>
          <SmallSizeTrueStyleSolid
            button="ยกเลิก"
            showText
            smallSizeTrueStyleSolidPosition="unset"
            smallSizeTrueStyleSolidBackgroundColor="#e4defe"
            smallSizeTrueStyleSolidFlex={1}
            smallSizeTrueStyleSolidHeight={44}
            smallSizeTrueStyleSolidMarginLeft="unset"
            buttonFontWeight="600"
            buttonFontFamily="IBMPlexSansThai-SemiBold"
            buttonColor="#6448ce"
            onButtonPress={() => navigation.navigate("AndroidLarge1")}
          />
          <SmallSizeTrueStyleSolid
            button="สร้างแปลง"
            showText
            smallSizeTrueStyleSolidPosition="unset"
            smallSizeTrueStyleSolidBackgroundColor="#7a5af8"
            smallSizeTrueStyleSolidFlex={1}
            smallSizeTrueStyleSolidHeight={44}
            smallSizeTrueStyleSolidMarginLeft={8}
            buttonFontWeight="600"
            buttonFontFamily="IBMPlexSansThai-SemiBold"
            buttonColor="#fff"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.bodyBH3SemiBold_size,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.selectorS6SemiBold,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
  },
  parent: {
    borderRadius: Border.br_5xs,
    height: 670,
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
    backgroundColor: Color.gray00,
  },
  buttonParent: {
    flexDirection: "row",
    paddingTop: 38,
  },
  frameParent: {
    position: "absolute",
    top: 31,
    left: 0,
    width: 360,
    height: 523,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
  },
  androidLarge2: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.gray00,
  },
});

export default AndroidLarge2;
