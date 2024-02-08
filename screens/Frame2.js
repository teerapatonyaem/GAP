import * as React from "react";
import { StyleSheet, View } from "react-native";
import MemberTree from "../components/MemberTree";
import { Color } from "../GlobalStyles";

const Frame2 = () => {
  return (
    <View style={styles.view}>
      <MemberTree />
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

export default Frame2;
