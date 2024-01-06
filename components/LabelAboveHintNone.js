import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import TypeTextfield from "./TypeTextfield";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const LabelAboveHintNone = ({
  soilTypeLabel,
  dimensionLabel,
  imageLabel,
  placeholderText,
  labelAboveHintNonePosition,
  labelAboveHintNoneWidth,
  labelAboveHintNoneAlignSelf,
  labelAboveHintNoneMarginTop,
}) => {
  const labelAboveHintNoneStyle = useMemo(() => {
    return {
      ...getStyleValue("position", labelAboveHintNonePosition),
      ...getStyleValue("width", labelAboveHintNoneWidth),
      ...getStyleValue("alignSelf", labelAboveHintNoneAlignSelf),
      ...getStyleValue("marginTop", labelAboveHintNoneMarginTop),
    };
  }, [
    labelAboveHintNonePosition,
    labelAboveHintNoneWidth,
    labelAboveHintNoneAlignSelf,
    labelAboveHintNoneMarginTop,
  ]);

  return (
    <View style={[styles.labelaboveHintnone, labelAboveHintNoneStyle]}>
      <View style={styles.label}>
        <Text style={styles.label1}>{soilTypeLabel}</Text>
        <Image
          style={styles.iconStatus}
          resizeMode="cover"
          source={dimensionLabel}
        />
      </View>
      <TypeTextfield
        systemIconsHome={require("../assets/1-system-iconshome.png")}
        text="Placeholder"
        typeTextfieldPosition="unset"
        typeTextfieldMarginTop={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label1: {
    flex: 1,
    fontSize: FontSize.inputTextFieldPlaceholderIN4Regular_size,
    lineHeight: 20,
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    color: Color.descriptiveTextColourTextNormal700,
    textAlign: "left",
  },
  iconStatus: {
    width: 20,
    height: 20,
    display: "none",
    marginLeft: 8,
  },
  label: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  labelaboveHintnone: {
    width: 224,
  },
});

export default LabelAboveHintNone;
