import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import Erroroff1 from "./Erroroff1";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeUnselectStateDefault = ({
  typeUnselectStateDefaultPosition,
  typeUnselectStateDefaultWidth,
  typeUnselectStateDefaultHeight,
  typeUnselectStateDefaultTop,
  typeUnselectStateDefaultRight,
  typeUnselectStateDefaultBottom,
  typeUnselectStateDefaultLeft,
}) => {
  const typeUnselectStateDefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeUnselectStateDefaultPosition),
      ...getStyleValue("width", typeUnselectStateDefaultWidth),
      ...getStyleValue("height", typeUnselectStateDefaultHeight),
      ...getStyleValue("top", typeUnselectStateDefaultTop),
      ...getStyleValue("right", typeUnselectStateDefaultRight),
      ...getStyleValue("bottom", typeUnselectStateDefaultBottom),
      ...getStyleValue("left", typeUnselectStateDefaultLeft),
    };
  }, [
    typeUnselectStateDefaultPosition,
    typeUnselectStateDefaultWidth,
    typeUnselectStateDefaultHeight,
    typeUnselectStateDefaultTop,
    typeUnselectStateDefaultRight,
    typeUnselectStateDefaultBottom,
    typeUnselectStateDefaultLeft,
  ]);

  return (
    <View
      style={[styles.typeunselectStatedefault, typeUnselectStateDefaultStyle]}
    >
      <Erroroff1
        erroroffPosition="absolute"
        erroroffWidth="100%"
        erroroffHeight="100%"
        erroroffTop="0%"
        erroroffRight="0%"
        erroroffBottom="0%"
        erroroffLeft="0%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  typeunselectStatedefault: {
    width: 24,
    height: 24,
  },
});

export default TypeUnselectStateDefault;
