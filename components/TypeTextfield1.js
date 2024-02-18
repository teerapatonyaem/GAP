import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import StateDisable from "./StateDisable";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeTextfield1 = ({
  systemIconsHome,
  text,
  systemIconsHome1,
  typeTextfieldPosition,
  typeTextfieldMarginTop,
  typeTextfieldBackgroundColor,
  textfieldBackgroundColor,
  textColor,
}) => {
  const typeTextfield1Style = useMemo(() => {
    return {
      ...getStyleValue("position", typeTextfieldPosition),
      ...getStyleValue("marginTop", typeTextfieldMarginTop),
      ...getStyleValue("backgroundColor", typeTextfieldBackgroundColor),
    };
  }, [
    typeTextfieldPosition,
    typeTextfieldMarginTop,
    typeTextfieldBackgroundColor,
  ]);

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
    <View style={[styles.typetextfield, typeTextfield1Style]}>
      <StateDisable
        systemIconsHome={require("../assets/1-system-iconshome2.png")}
        text="Placeholder"
        showIcon={false}
        stateDisablePosition="unset"
        stateDisableBackgroundColor="#fff"
        textColor="#98a2b3"
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

export default TypeTextfield1;
