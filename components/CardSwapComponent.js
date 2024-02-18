import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import SwapItem from "./SwapItem";
import { Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardSwapComponent = ({
  swapComponent,
  cardSwapComponentPosition,
  cardSwapComponentBackgroundColor,
  cardSwapComponentPaddingHorizontal,
  cardSwapComponentPaddingVertical,
  cardSwapComponentBorderBottomRightRadius,
  cardSwapComponentBorderBottomLeftRadius,
  swapItemBackgroundColor,
  swapItemWidth,
  swapItemAlignSelf,
}) => {
  const cardSwapComponentStyle = useMemo(() => {
    return {
      ...getStyleValue("position", cardSwapComponentPosition),
      ...getStyleValue("backgroundColor", cardSwapComponentBackgroundColor),
      ...getStyleValue("paddingHorizontal", cardSwapComponentPaddingHorizontal),
      ...getStyleValue("paddingVertical", cardSwapComponentPaddingVertical),
      ...getStyleValue(
        "borderBottomRightRadius",
        cardSwapComponentBorderBottomRightRadius
      ),
      ...getStyleValue(
        "borderBottomLeftRadius",
        cardSwapComponentBorderBottomLeftRadius
      ),
    };
  }, [
    cardSwapComponentPosition,
    cardSwapComponentBackgroundColor,
    cardSwapComponentPaddingHorizontal,
    cardSwapComponentPaddingVertical,
    cardSwapComponentBorderBottomRightRadius,
    cardSwapComponentBorderBottomLeftRadius,
  ]);

  const swapItemStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", swapItemBackgroundColor),
      ...getStyleValue("width", swapItemWidth),
      ...getStyleValue("alignSelf", swapItemAlignSelf),
    };
  }, [swapItemBackgroundColor, swapItemWidth, swapItemAlignSelf]);

  return (
    <View style={[styles.cardswapComponent, cardSwapComponentStyle]}>
      <SwapItem
        swapComponent="Swap Component"
        swapItemPosition="unset"
        swapItemBackgroundColor="#deedfe"
        swapItemWidth={311}
        swapItemAlignSelf="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardswapComponent: {
    backgroundColor: Color.surfaceColourWhiteSurface,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_9xs,
    alignSelf: "stretch",
  },
});

export default CardSwapComponent;
