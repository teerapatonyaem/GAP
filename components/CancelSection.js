import React, { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import SmallSizeTrueStyleOutline from "./SmallSizeTrueStyleOutline";
import { Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CancelSection = ({ actionButtonText, propMarginTop, onButtonPress }) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.buttonParent, frameView1Style]}>
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
      />
      <SmallSizeTrueStyleOutline
        button="เสร็จสิ้น"
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
        onButtonPress={() => navigation.navigate("PlotSurvey")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonParent: {
    width: 412,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    marginTop: 8,
  },
});

export default CancelSection;
