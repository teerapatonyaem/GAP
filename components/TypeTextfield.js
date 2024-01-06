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
  typeTextfieldPosition,
  typeTextfieldMarginTop,
}) => {
  const typeTextfieldStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeTextfieldPosition),
      ...getStyleValue("marginTop", typeTextfieldMarginTop),
    };
  }, [typeTextfieldPosition, typeTextfieldMarginTop]);

  return (
    <View style={[styles.typetextfield, typeTextfieldStyle]}>
      <StateDefault1
        systemIconsHome={require("../assets/1-system-iconshome.png")}
        text="Placeholder"
        showIcon={false}
        stateDefaultPosition="unset"
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
