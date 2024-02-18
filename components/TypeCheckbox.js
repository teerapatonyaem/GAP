import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import TypeUncheckedStateDefault from "./TypeUncheckedStateDefault";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeCheckbox = ({
  checkboxStateTop,
  checkboxStateLeft,
  checkboxStateWidth,
  checkboxStateHeight,
  checkboxStateRight,
  checkboxStateBottom,
  rectangleBorderRadius,
}) => {
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
    <View style={styles.typecheckbox}>
      <TypeUncheckedStateDefault
        typeUncheckedStateDefaultPosition="absolute"
        typeUncheckedStateDefaultTop={0}
        typeUncheckedStateDefaultLeft={0}
        typeUncheckedStateDefaultWidth={24}
        typeUncheckedStateDefaultHeight={24}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  typecheckbox: {
    width: 24,
    height: 24,
  },
});

export default TypeCheckbox;
