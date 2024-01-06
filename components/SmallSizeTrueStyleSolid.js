import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SmallSizeTrueStyleSolid = ({
  button,
  showText = true,
  smallSizeTrueStyleSolidPosition,
  smallSizeTrueStyleSolidBackgroundColor,
  smallSizeTrueStyleSolidFlex,
  smallSizeTrueStyleSolidHeight,
  smallSizeTrueStyleSolidMarginLeft,
  buttonFontWeight,
  buttonFontFamily,
  buttonColor,
  onButtonPress,
}) => {
  const smallSizeTrueStyleSolidStyle = useMemo(() => {
    return {
      ...getStyleValue("position", smallSizeTrueStyleSolidPosition),
      ...getStyleValue(
        "backgroundColor",
        smallSizeTrueStyleSolidBackgroundColor
      ),
      ...getStyleValue("flex", smallSizeTrueStyleSolidFlex),
      ...getStyleValue("height", smallSizeTrueStyleSolidHeight),
      ...getStyleValue("marginLeft", smallSizeTrueStyleSolidMarginLeft),
    };
  }, [
    smallSizeTrueStyleSolidPosition,
    smallSizeTrueStyleSolidBackgroundColor,
    smallSizeTrueStyleSolidFlex,
    smallSizeTrueStyleSolidHeight,
    smallSizeTrueStyleSolidMarginLeft,
  ]);

  const buttonStyle = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", buttonFontWeight),
      ...getStyleValue("fontFamily", buttonFontFamily),
      ...getStyleValue("color", buttonColor),
    };
  }, [buttonFontWeight, buttonFontFamily, buttonColor]);

  return (
    <View
      style={[styles.smallSizetrueStylesolid, smallSizeTrueStyleSolidStyle]}
      onPress={onButtonPress}
    >
      {showText && <Text style={[styles.button, buttonStyle]}>{button}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: FontSize.buttonSmall_size,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.buttonSmall,
    color: Color.gray00,
    textAlign: "left",
  },
  smallSizetrueStylesolid: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.primary500,
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
  },
});

export default SmallSizeTrueStyleSolid;
