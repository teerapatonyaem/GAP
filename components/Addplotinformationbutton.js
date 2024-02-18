import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Addplotinformationbutton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonParent}>
      <View style={[styles.button, styles.buttonLayout]}>
        <Text style={[styles.button1, styles.buttonTypo]}>ยกเลิก</Text>
      </View>
      <Pressable
        style={[styles.button2, styles.buttonLayout]}
        onPress={() => navigation.navigate("PlotSurvey")}
      >
        <Text style={[styles.button3, styles.buttonTypo]}>เสร็จสิ้น</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_21xl,
    height: 44,
    width: 182,
    borderRadius: Border.br_13xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonTypo: {
    textAlign: "left",
    fontFamily: FontFamily.buttonSmall,
    fontWeight: "500",
    textTransform: "capitalize",
    fontSize: FontSize.buttonRegular_size,
  },
  button1: {
    color: Color.brightLightGreen900,
  },
  button: {
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    borderWidth: 1.5,
  },
  button3: {
    color: "white",
  },
  button2: {
    backgroundColor: Color.walledGarden1000,
    marginLeft: 16,
    
  },
  buttonParent: {
    width: 412,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Addplotinformationbutton;
