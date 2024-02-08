import * as React from "react";
import { StyleSheet, View } from "react-native";
import GAPStatus from "../components/GAPStatus";
import GAPStatusBottombar from "../components/GAPStatusBottombar";
import { Color } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.view}>
      <GAPStatus />
      <GAPStatusBottombar />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.baseColourWhite,
    flex: 1,
    width: "100%",
    height: 732,
    overflow: "hidden",
  },
});

export default Frame;
