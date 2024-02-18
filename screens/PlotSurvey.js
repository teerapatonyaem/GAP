import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionCard1 from "../components/SectionCard1";
import SmallSizeTrueStyleOutline from "../components/SmallSizeTrueStyleOutline";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const PlotSurvey = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.plotsurvey}>
      <View style={styles.frameParent}>
        <View style={styles.basilIconsoutlineoutlinegeParent}>
          <Pressable
            style={styles.basilIconsoutlineoutlinege}
            onPress={() => navigation.navigate("HomeDetail")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/basil-iconsoutlineoutlinegeneralhome1.png")}
            />
          </Pressable>
          <Text style={styles.text}>สำรวจแปลง</Text>
        </View>
        <SectionCard1 stepNumber="ครั้งที่  1" />
        <SectionCard1 stepNumber="ครั้งที่  2" />
      </View>
      <SmallSizeTrueStyleOutline
        button="เริ่มการสำรวจแปลง"
        showText
        smallSizeTrueStyleOutlinePosition="absolute"
        smallSizeTrueStyleOutlineBorderRadius={32}
        smallSizeTrueStyleOutlineBorderStyle="unset"
        smallSizeTrueStyleOutlineBorderColor="unset"
        smallSizeTrueStyleOutlinePaddingHorizontal="unset"
        smallSizeTrueStyleOutlineAlignSelf="unset"
        smallSizeTrueStyleOutlineBackgroundColor="#03290e"
        smallSizeTrueStyleOutlineMarginTop="unset"
        smallSizeTrueStyleOutlineMarginLeft={-190}
        smallSizeTrueStyleOutlineBottom={6}
        smallSizeTrueStyleOutlineLeft="50%"
        smallSizeTrueStyleOutlineWidth={380}
        buttonFontSize={17}
        buttonFontFamily="Poppins-Medium"
        buttonColor="#fff"
        onButtonPress={() => navigation.navigate("AddPlotInformation")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
  },
  basilIconsoutlineoutlinege: {
    width: 24,
    height: 24,
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
  basilIconsoutlineoutlinegeParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  frameParent: {
    position: "absolute",
    marginLeft: -206,
    top: 0,
    left: "50%",
    width: 412,
    height: 594,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_9xl,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
  },
  plotsurvey: {
    backgroundColor: Color.surfaceColourWhiteSurface,
    height: 732,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default PlotSurvey;
