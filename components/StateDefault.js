import React, { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateDefault = ({ text = "Placeholder", textAlignSelf, textHeight }) => {
  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", textAlignSelf),
      ...getStyleValue("height", textHeight),
    };
  }, [textAlignSelf, textHeight]);

  return (
    <View style={styles.statedefault}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
      <Image
        style={styles.iconsStrech}
        resizeMode="cover"
        source={require("../assets/icons--strech.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: "stretch",
    flex: 1,
    fontSize: FontSize.bodyB4Regular_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyB4Regular,
    color: Color.descriptiveTextColourTextLighter400,
    textAlign: "left",
    zIndex: 0,
  },
  iconsStrech: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 20,
    height: 20,
    zIndex: 1,
  },
  statedefault: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.surfaceColourWhiteSurface,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    flex: 1,
  },
});

export default StateDefault;
