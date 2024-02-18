import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import StateDefault1 from "./StateDefault1";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeTextfield = ({
  systemIconsHome,
  text,
  systemIconsHome1,
  typeTextfieldPosition,
  typeTextfieldMarginTop,
  typeTextfieldFlexDirection,
  typeTextfieldBorderRadius,
  textfieldAlignSelf,
  textfieldFlex,
}) => {
  const typeTextfieldStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeTextfieldPosition),
      ...getStyleValue("marginTop", typeTextfieldMarginTop),
      ...getStyleValue("flexDirection", typeTextfieldFlexDirection),
      ...getStyleValue("borderRadius", typeTextfieldBorderRadius),
    };
  }, [
    typeTextfieldPosition,
    typeTextfieldMarginTop,
    typeTextfieldFlexDirection,
    typeTextfieldBorderRadius,
  ]);

  const stateDefault1Style = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", textfieldAlignSelf),
      ...getStyleValue("flex", textfieldFlex),
    };
  }, [textfieldAlignSelf, textfieldFlex]);

  return (
    <View style={[styles.typetextfield, typeTextfieldStyle]}>
      <StateDefault1
        systemIconsHome={require("../assets/1-system-iconshome2.png")}
        text="Placeholder"
        showIcon={false}
        stateDefaultPosition="unset"
        stateDefaultAlignSelf="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  typetextfield: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
});

export default TypeTextfield;
