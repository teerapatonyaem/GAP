import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import LabelDefault from "./LabelDefault";
import TypeTextfield1 from "./TypeTextfield1";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const LabelAboveHintNone1 = ({
  label,
  systemIconsInfo,
  systemIconsHome,
  text,
  showSystemIconsHome,
  labelAboveHintNonePosition,
  labelAboveHintNoneMarginTop,
  labelAboveHintNoneAlignSelf,
  labelAboveHintNoneFlex,
  labelAboveHintNoneMarginLeft,
  inputBackgroundColor,
  textfieldBackgroundColor,
  textColor,
}) => {
  const labelAboveHintNone1Style = useMemo(() => {
    return {
      ...getStyleValue("position", labelAboveHintNonePosition),
      ...getStyleValue("marginTop", labelAboveHintNoneMarginTop),
      ...getStyleValue("alignSelf", labelAboveHintNoneAlignSelf),
      ...getStyleValue("flex", labelAboveHintNoneFlex),
      ...getStyleValue("marginLeft", labelAboveHintNoneMarginLeft),
    };
  }, [
    labelAboveHintNonePosition,
    labelAboveHintNoneMarginTop,
    labelAboveHintNoneAlignSelf,
    labelAboveHintNoneFlex,
    labelAboveHintNoneMarginLeft,
  ]);

  const typeTextfield1Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", inputBackgroundColor),
    };
  }, [inputBackgroundColor]);

  const stateDisableStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", textfieldBackgroundColor),
    };
  }, [textfieldBackgroundColor]);

  const text1Style = useMemo(() => {
    return {
      ...getStyleValue("color", textColor),
    };
  }, [textColor]);

  return (
    <View style={[styles.labelaboveHintnone, labelAboveHintNone1Style]}>
      <LabelDefault
        textLabel="Label"
        systemIconsInfo={require("../assets/1-system-iconsinfo1.png")}
        showInfoIcon={false}
        labelDefaultPosition="unset"
        labelDefaultAlignSelf="stretch"
      />
      <TypeTextfield1
        systemIconsHome={require("../assets/1-system-iconshome2.png")}
        text="Placeholder"
        systemIconsHome1={false}
        typeTextfieldPosition="unset"
        typeTextfieldMarginTop={4}
        typeTextfieldBackgroundColor="unset"
        textfieldBackgroundColor="#fff"
        textColor="#98a2b3"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  labelaboveHintnone: {
    alignSelf: "stretch",
  },
});

export default LabelAboveHintNone1;
