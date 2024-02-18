import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import StateDefault from "./StateDefault";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeTextArea = ({
  text,
  iconsStrech,
  typeTextAreaPosition,
  typeTextAreaMarginTop,
  textAreaPosition,
  textAreaAlignSelf,
  textHeight,
  iconsStrechPosition,
  iconsStrechRight,
  iconsStrechBottom,
  iconsStrechWidth,
  iconsStrechHeight,
  iconsStrechOverflow,
  iconsStrechMarginLeft,
}) => {
  const typeTextAreaStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeTextAreaPosition),
      ...getStyleValue("marginTop", typeTextAreaMarginTop),
    };
  }, [typeTextAreaPosition, typeTextAreaMarginTop]);

  const stateDefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", textAreaPosition),
      ...getStyleValue("alignSelf", textAreaAlignSelf),
    };
  }, [textAreaPosition, textAreaAlignSelf]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("height", textHeight),
    };
  }, [textHeight]);

  const iconsStrechStyle = useMemo(() => {
    return {
      ...getStyleValue("position", iconsStrechPosition),
      ...getStyleValue("right", iconsStrechRight),
      ...getStyleValue("bottom", iconsStrechBottom),
      ...getStyleValue("width", iconsStrechWidth),
      ...getStyleValue("height", iconsStrechHeight),
      ...getStyleValue("overflow", iconsStrechOverflow),
      ...getStyleValue("marginLeft", iconsStrechMarginLeft),
    };
  }, [
    iconsStrechPosition,
    iconsStrechRight,
    iconsStrechBottom,
    iconsStrechWidth,
    iconsStrechHeight,
    iconsStrechOverflow,
    iconsStrechMarginLeft,
  ]);

  return (
    <View style={[styles.typetextArea, typeTextAreaStyle]}>
      <StateDefault text="Placeholder" textAlignSelf="unset" textHeight={64} />
    </View>
  );
};

const styles = StyleSheet.create({
  typetextArea: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
});

export default TypeTextArea;
