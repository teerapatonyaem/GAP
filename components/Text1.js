import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Text1 = () => {
  return <Text style={styles.text}>1329-1401</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.selectorS6SemiBold_size,
    fontFamily: FontFamily.interRegular,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
  },
});

export default Text1;
