import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import TypeCheckbox from "./TypeCheckbox";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SelectionControl = ({
  label = "Checkbox",
  showLabel = true,
  selectionControlPosition,
  checkboxStateTop,
  checkboxStateLeft,
  checkboxStateWidth,
  checkboxStateHeight,
  checkboxStateRight,
  checkboxStateBottom,
  rectangleBorderRadius,
}) => {
  const selectionControlStyle = useMemo(() => {
    return {
      ...getStyleValue("position", selectionControlPosition),
    };
  }, [selectionControlPosition]);

  const typeUncheckedStateDefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("top", checkboxStateTop),
      ...getStyleValue("left", checkboxStateLeft),
      ...getStyleValue("width", checkboxStateWidth),
      ...getStyleValue("height", checkboxStateHeight),
      ...getStyleValue("right", checkboxStateRight),
      ...getStyleValue("bottom", checkboxStateBottom),
    };
  }, [
    checkboxStateTop,
    checkboxStateLeft,
    checkboxStateWidth,
    checkboxStateHeight,
    checkboxStateRight,
    checkboxStateBottom,
  ]);

  const rectangleStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", rectangleBorderRadius),
    };
  }, [rectangleBorderRadius]);

  return (
    <View style={[styles.selectionControl, selectionControlStyle]}>
      <TypeCheckbox
        checkboxStateWidth={24}
        checkboxStateHeight={24}
        checkboxStateRight="unset"
        checkboxStateBottom="unset"
        rectangleBorderRadius={6}
      />
      {showLabel && <Text style={styles.checkbox}>{label}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    fontSize: FontSize.bodyB4Regular_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyB4Regular,
    color: Color.descriptiveTextColourTextNormal700,
    textAlign: "left",
    marginLeft: 8,
  },
  selectionControl: {
    flexDirection: "row",
  },
});

export default SelectionControl;
