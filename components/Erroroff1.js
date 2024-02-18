import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Erroroff1 = ({
  erroroffPosition,
  erroroffWidth,
  erroroffHeight,
  erroroffTop,
  erroroffRight,
  erroroffBottom,
  erroroffLeft,
}) => {
  const erroroff1Style = useMemo(() => {
    return {
      ...getStyleValue("position", erroroffPosition),
      ...getStyleValue("width", erroroffWidth),
      ...getStyleValue("height", erroroffHeight),
      ...getStyleValue("top", erroroffTop),
      ...getStyleValue("right", erroroffRight),
      ...getStyleValue("bottom", erroroffBottom),
      ...getStyleValue("left", erroroffLeft),
    };
  }, [
    erroroffPosition,
    erroroffWidth,
    erroroffHeight,
    erroroffTop,
    erroroffRight,
    erroroffBottom,
    erroroffLeft,
  ]);

  return (
    <View style={[styles.erroroff, erroroff1Style]}>
      <View style={styles.circle} />
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    position: "absolute",
    top: 2,
    left: 2,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.surfaceColourWhiteSurface,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    width: 20,
    height: 20,
  },
  erroroff: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default Erroroff1;
