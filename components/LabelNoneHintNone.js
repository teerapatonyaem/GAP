import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import TypeTextfield from "./TypeTextfield";
import { Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const LabelNoneHintNone = ({
  systemIconsHome,
  text,
  systemIconsHome1,
  labelNoneHintNonePosition,
  labelNoneHintNoneAlignSelf,
  labelNoneHintNoneMarginTop,
  inputFlexDirection,
  inputBorderRadius,
  textfieldFlex,
}) => {
  const labelNoneHintNoneStyle = useMemo(() => {
    return {
      ...getStyleValue("position", labelNoneHintNonePosition),
      ...getStyleValue("alignSelf", labelNoneHintNoneAlignSelf),
      ...getStyleValue("marginTop", labelNoneHintNoneMarginTop),
    };
  }, [
    labelNoneHintNonePosition,
    labelNoneHintNoneAlignSelf,
    labelNoneHintNoneMarginTop,
  ]);

  const typeTextfieldStyle = useMemo(() => {
    return {
      ...getStyleValue("flexDirection", inputFlexDirection),
      ...getStyleValue("borderRadius", inputBorderRadius),
    };
  }, [inputFlexDirection, inputBorderRadius]);

  const stateDefault1Style = useMemo(() => {
    return {
      ...getStyleValue("flex", textfieldFlex),
    };
  }, [textfieldFlex]);

  return (
    <View style={[styles.labelnoneHintnone, labelNoneHintNoneStyle]}>
      <TypeTextfield
        systemIconsHome={require("../assets/1-system-iconshome2.png")}
        text="Placeholder"
        systemIconsHome1={false}
        typeTextfieldPosition="unset"
        typeTextfieldMarginTop="unset"
        typeTextfieldFlexDirection="row"
        textfieldAlignSelf="stretch"
        textfieldFlex={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  labelnoneHintnone: {
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
});

export default LabelNoneHintNone;
