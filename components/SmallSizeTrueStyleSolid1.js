import React, { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SmallSizeTrueStyleSolid1 = ({
  button,
  showText = true,
  smallSizeTrueStyleSolidPosition,
  smallSizeTrueStyleSolidBorderRadius,
  smallSizeTrueStyleSolidBackgroundColor,
  smallSizeTrueStyleSolidPaddingHorizontal,
  smallSizeTrueStyleSolidMarginTop,
  buttonFontSize,
  buttonFontFamily,
  onButtonPress,
}) => {
  const smallSizeTrueStyleSolidStyle = useMemo(() => {
    return {
      ...getStyleValue("position", smallSizeTrueStyleSolidPosition),
      ...getStyleValue("borderRadius", smallSizeTrueStyleSolidBorderRadius),
      ...getStyleValue(
        "backgroundColor",
        smallSizeTrueStyleSolidBackgroundColor
      ),
      ...getStyleValue(
        "paddingHorizontal",
        smallSizeTrueStyleSolidPaddingHorizontal
      ),
      ...getStyleValue("marginTop", smallSizeTrueStyleSolidMarginTop),
    };
  }, [
    smallSizeTrueStyleSolidPosition,
    smallSizeTrueStyleSolidBorderRadius,
    smallSizeTrueStyleSolidBackgroundColor,
    smallSizeTrueStyleSolidPaddingHorizontal,
    smallSizeTrueStyleSolidMarginTop,
  ]);

  const button1Style = useMemo(() => {
    return {
      ...getStyleValue("fontSize", buttonFontSize),
      ...getStyleValue("fontFamily", buttonFontFamily),
    };
  }, [buttonFontSize, buttonFontFamily]);

  return (
    <View
      style={[styles.smallSizetrueStylesolid, smallSizeTrueStyleSolidStyle]}
      onPress={onButtonPress}
    >
      {showText && <Text style={[styles.button, button1Style]}>{button}</Text>}
      <Image
        style={styles.icons}
        resizeMode="cover"
        source={require("../assets/icons.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: FontSize.bodySmalls300_size,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.buttonSmall1,
    color: Color.surfaceColourWhiteSurface,
    textAlign: "left",
  },
  icons: {
    width: 18,
    height: 18,
    marginLeft: 8,
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

export default SmallSizeTrueStyleSolid1;
