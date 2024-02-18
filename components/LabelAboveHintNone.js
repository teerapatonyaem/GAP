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
  label,
  iconStatus,
  systemIconsHome,
  text,
  labelAboveHintNonePosition,
  labelAboveHintNoneFlex,
  labelAboveHintNoneMarginTop,
}) => {
  const labelAboveHintNoneStyle = useMemo(() => {
    return {
      ...getStyleValue("position", labelAboveHintNonePosition),
      ...getStyleValue("flex", labelAboveHintNoneFlex),
      ...getStyleValue("marginTop", labelAboveHintNoneMarginTop),
    };
  }, [
    labelAboveHintNonePosition,
    labelAboveHintNoneFlex,
    labelAboveHintNoneMarginTop,
  ]);

  return (
    <View style={[styles.labelaboveHintnone, labelAboveHintNoneStyle]}>
      <View style={styles.label}>
        <Text style={styles.label1}>{label}</Text>
        <Image
          style={styles.iconStatus}
          resizeMode="cover"
          source={iconStatus}
        />
      </View>
      <TypeTextfield
        systemIconsHome={require("../assets/1-system-iconshome2.png")}
        text="Placeholder"
        systemIconsHome1={false}
        typeTextfieldPosition="unset"
        typeTextfieldMarginTop={4}
        typeTextfieldFlexDirection="row"
        textfieldAlignSelf="unset"
        textfieldFlex={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label1: {
    flex: 1,
    fontSize: FontSize.bodyB4Regular_size,
    lineHeight: 20,
    fontFamily: FontFamily.bodyB4Regular,
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
    alignSelf: "stretch",
    flex: 1,
  },
});

export default LabelAboveHintNone;
