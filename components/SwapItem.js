import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SwapItem = ({
  swapComponent,
  swapItemPosition,
  swapItemBackgroundColor,
  swapItemWidth,
  swapItemAlignSelf,
}) => {
  const swapItemStyle = useMemo(() => {
    return {
      ...getStyleValue("position", swapItemPosition),
      ...getStyleValue("backgroundColor", swapItemBackgroundColor),
      ...getStyleValue("width", swapItemWidth),
      ...getStyleValue("alignSelf", swapItemAlignSelf),
    };
  }, [
    swapItemPosition,
    swapItemBackgroundColor,
    swapItemWidth,
    swapItemAlignSelf,
  ]);

  return (
    <View style={[styles.swapItem, swapItemStyle]}>
      <Text style={styles.swapComponent}>{swapComponent}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  swapComponent: {
    fontSize: FontSize.bodySmalls300_size,
    lineHeight: 18,
    fontFamily: FontFamily.bodyB4Regular,
    color: Color.primaryColourPrimary,
    textAlign: "left",
  },
  swapItem: {
    backgroundColor: Color.primaryColourPrimaryCont,
    borderStyle: "dashed",
    borderColor: Color.colorRoyalblue,
    borderRadius: 0.001,
    borderWidth: 1,
    width: 311,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_102xl,
    paddingVertical: Padding.p_5xs,
  },
});

export default SwapItem;
