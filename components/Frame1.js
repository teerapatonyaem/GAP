import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import SurveyPlot from "./SurveyPlot";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Frame1 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <SurveyPlot />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Screen2")}
      >
        <Text style={styles.button1}>เริ่มการสำรวจแปลง</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button1: {
    fontSize: FontSize.buttonRegular_size,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.buttonSmall,
    color: Color.baseColourWhite,
    textAlign: "left",
  },
  button: {
    position: "absolute",
    marginLeft: -190,
    bottom: 6,
    left: "50%",
    borderRadius: Border.br_13xl,
    backgroundColor: Color.walledGarden1000,
    width: 380,
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_21xl,
    paddingVertical: Padding.p_3xs,
  },
  view: {
    backgroundColor: Color.baseColourWhite,
    width: 412,
    height: 732,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Frame1;
