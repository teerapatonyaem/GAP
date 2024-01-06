import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import LabelAboveHintNone from "./LabelAboveHintNone";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default2 = ({
  iconStatus,
  systemIconsHome,
  property1DefaultPosition,
  property1DefaultAlignSelf,
  property1DefaultMarginTop,
  inputWidth,
  inputAlignSelf,
}) => {
  const property1Default2Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("alignSelf", property1DefaultAlignSelf),
      ...getStyleValue("marginTop", property1DefaultMarginTop),
    };
  }, [
    property1DefaultPosition,
    property1DefaultAlignSelf,
    property1DefaultMarginTop,
  ]);

  const labelAboveHintNoneStyle = useMemo(() => {
    return {
      ...getStyleValue("width", inputWidth),
      ...getStyleValue("alignSelf", inputAlignSelf),
    };
  }, [inputWidth, inputAlignSelf]);

  return (
    <View>
      <LabelAboveHintNone
        soilTypeLabel="ชนิดของดิน"
        //dimensionLabel={require("../assets/icon-status.png")}
        //imageLabel={require("../assets/1-system-iconshome.png")}
        placeholderText="Placeholder"
        labelAboveHintNonePosition="unset"
        labelAboveHintNoneWidth={224}
        labelAboveHintNoneAlignSelf="unset"
        labelAboveHintNoneMarginTop="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Property1Default2;
