import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const IncomeForm = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.groupShadowBox}>
        <Text style={[styles.text, styles.textTypo1]}>-฿100</Text>
        <Text style={[styles.text1, styles.textFlexBox]}>รายจ่าย</Text>
      </View>
      <View style={[styles.group, styles.groupShadowBox]}>
        <Text style={[styles.text2, styles.textTypo]}>฿100</Text>
        <Text style={[styles.text3, styles.textTypo]}>รายรับ</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    color: Color.errorColourError500,
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.bodySmalls300_size,
  },
  textFlexBox: {
    textAlign: "left",
    marginTop: 8,
  },
  groupShadowBox: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#e6e8ec",
    backgroundColor: Color.surfaceColourWhiteSurface,
    borderRadius: Border.br_5xs,
    flex: 1,
    alignSelf: "stretch",
  },
  textTypo: {
    color: Color.secondaryColourOnSecondaryCont,
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.bodySmalls300_size,
  },
  text: {
    textAlign: "center",
  },
  text1: {
    color: Color.errorColourError500,
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.bodySmalls300_size,
  },
  text2: {
    textAlign: "center",
  },
  text3: {
    textAlign: "left",
    marginTop: 8,
  },
  group: {
    marginLeft: 8,
  },
  frameParent: {
    flexDirection: "row",
    marginTop: 8,
    alignSelf: "stretch",
  },
});

export default IncomeForm;
