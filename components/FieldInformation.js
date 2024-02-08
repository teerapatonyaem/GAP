import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const FieldInformation = () => {
  return (
    <View style={styles.removebgPreview1Parent}>
      <Image
        style={styles.removebgPreview1Icon}
        resizeMode="cover"
        source={require("../assets/-20240110-224716276removebgpreview-11.png")}
      />
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textFlexBox]}>
          นาแปลงใหญ่ ใบเขียว
        </Text>
        <Text style={styles.textTypo}>กข 16 จำนวน 12 ไร่</Text>
        <Text
          style={[styles.text2, styles.textTypo]}
        >{`10/04/2024 - 15/09/2024 `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    fontFamily: FontFamily.heading03,
    lineHeight: 20,
    fontSize: FontSize.bodySmalls300_size,
    textAlign: "center",
    color: Color.advertisingGreen1000,
    fontWeight: "600",
    marginTop: 8,
    alignSelf: "stretch",
  },
  removebgPreview1Icon: {
    width: 59,
    height: 84,
  },
  text: {
    fontSize: FontSize.titleT3SemiBold_size,
    letterSpacing: -0.2,
    lineHeight: 32,
    fontFamily: FontFamily.athitiSemiBold,
    textAlign: "center",
    color: Color.advertisingGreen1000,
    fontWeight: "600",
    display: "flex",
    alignSelf: "stretch",
  },
  text2: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  parent: {
    marginLeft: 8,
    flex: 1,
    alignSelf: "stretch",
  },
  removebgPreview1Parent: {
    borderRadius: Border.br_base,
    backgroundColor: Color.walledGarden200,
    shadowColor: "rgba(122, 90, 248, 0.24)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    height: 91,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default FieldInformation;
