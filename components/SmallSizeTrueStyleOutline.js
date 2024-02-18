import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SmallSizeTrueStyleOutline = ({
  button,
  showText = true,
  smallSizeTrueStyleOutlinePosition,
  smallSizeTrueStyleOutlineBorderRadius,
  smallSizeTrueStyleOutlineBorderStyle,
  smallSizeTrueStyleOutlineBorderColor,
  smallSizeTrueStyleOutlineBorderWidth,
  smallSizeTrueStyleOutlinePaddingHorizontal,
  smallSizeTrueStyleOutlineAlignSelf,
  smallSizeTrueStyleOutlineBackgroundColor,
  smallSizeTrueStyleOutlineMarginTop,
  smallSizeTrueStyleOutlineFlex,
  smallSizeTrueStyleOutlineMarginLeft,
  smallSizeTrueStyleOutlineBottom,
  smallSizeTrueStyleOutlineLeft,
  smallSizeTrueStyleOutlineWidth,
  buttonFontSize,
  buttonFontFamily,
  buttonColor,
  onButtonPress,
}) => {
  const smallSizeTrueStyleOutlineStyle = useMemo(() => {
    return {
      ...getStyleValue("position", smallSizeTrueStyleOutlinePosition),
      ...getStyleValue("borderRadius", smallSizeTrueStyleOutlineBorderRadius),
      ...getStyleValue("borderStyle", smallSizeTrueStyleOutlineBorderStyle),
      ...getStyleValue("borderColor", smallSizeTrueStyleOutlineBorderColor),
      ...getStyleValue("borderWidth", smallSizeTrueStyleOutlineBorderWidth),
      ...getStyleValue(
        "paddingHorizontal",
        smallSizeTrueStyleOutlinePaddingHorizontal
      ),
      ...getStyleValue("alignSelf", smallSizeTrueStyleOutlineAlignSelf),
      ...getStyleValue(
        "backgroundColor",
        smallSizeTrueStyleOutlineBackgroundColor
      ),
      ...getStyleValue("marginTop", smallSizeTrueStyleOutlineMarginTop),
      ...getStyleValue("flex", smallSizeTrueStyleOutlineFlex),
      ...getStyleValue("marginLeft", smallSizeTrueStyleOutlineMarginLeft),
      ...getStyleValue("bottom", smallSizeTrueStyleOutlineBottom),
      ...getStyleValue("left", smallSizeTrueStyleOutlineLeft),
      ...getStyleValue("width", smallSizeTrueStyleOutlineWidth),
    };
  }, [
    smallSizeTrueStyleOutlinePosition,
    smallSizeTrueStyleOutlineBorderRadius,
    smallSizeTrueStyleOutlineBorderStyle,
    smallSizeTrueStyleOutlineBorderColor,
    smallSizeTrueStyleOutlineBorderWidth,
    smallSizeTrueStyleOutlinePaddingHorizontal,
    smallSizeTrueStyleOutlineAlignSelf,
    smallSizeTrueStyleOutlineBackgroundColor,
    smallSizeTrueStyleOutlineMarginTop,
    smallSizeTrueStyleOutlineFlex,
    smallSizeTrueStyleOutlineMarginLeft,
    smallSizeTrueStyleOutlineBottom,
    smallSizeTrueStyleOutlineLeft,
    smallSizeTrueStyleOutlineWidth,
  ]);

  const buttonStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", buttonFontSize),
      ...getStyleValue("fontFamily", buttonFontFamily),
      ...getStyleValue("color", buttonColor),
    };
  }, [buttonFontSize, buttonFontFamily, buttonColor]);

  return (
    <View
      style={[styles.smallSizetrueStyleoutline, smallSizeTrueStyleOutlineStyle]}
      onPress={onButtonPress}
    >
      {showText && <Text style={[styles.button, buttonStyle]}>{button}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: FontSize.bodySmalls300_size,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.buttonSmall1,
    color: Color.primary500,
    textAlign: "left",
  },
  smallSizetrueStyleoutline: {
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    borderColor: Color.primary500,
    borderWidth: 1.5,
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
  },
});

export default SmallSizeTrueStyleOutline;
