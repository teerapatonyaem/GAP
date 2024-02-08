import * as React from "react";
import { StyleSheet, View } from "react-native";
import L1page from "../components/L1page";
import { Color } from "../GlobalStyles";

const L = () => {
  return (
    <View style={styles.l1}>
      <L1page />
    </View>
  );
};

const styles = StyleSheet.create({
  l1: {
    backgroundColor: Color.baseColourWhite,
    flex: 1,
    width: "100%",
    height: 712,
    overflow: "hidden",
  },
});

export default L;
