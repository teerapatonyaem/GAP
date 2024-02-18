import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import Erroroff from "./Erroroff";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeUncheckedStateDefault = ({
  typeUncheckedStateDefaultPosition,
  typeUncheckedStateDefaultTop,
  typeUncheckedStateDefaultLeft,
  typeUncheckedStateDefaultWidth,
  typeUncheckedStateDefaultHeight,
}) => {
  const typeUncheckedStateDefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeUncheckedStateDefaultPosition),
      ...getStyleValue("top", typeUncheckedStateDefaultTop),
      ...getStyleValue("left", typeUncheckedStateDefaultLeft),
      ...getStyleValue("width", typeUncheckedStateDefaultWidth),
      ...getStyleValue("height", typeUncheckedStateDefaultHeight),
    };
  }, [
    typeUncheckedStateDefaultPosition,
    typeUncheckedStateDefaultTop,
    typeUncheckedStateDefaultLeft,
    typeUncheckedStateDefaultWidth,
    typeUncheckedStateDefaultHeight,
  ]);

  return (
    <View
      style={[styles.typeuncheckedStatedefault, typeUncheckedStateDefaultStyle]}
    >
      <Erroroff
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
  typeuncheckedStatedefault: {
    width: 24,
    height: 24,
  },
});

export default TypeUncheckedStateDefault;
