import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const FieldList = () => {
  return (
    <View style={styles.removebgPreview1Parent}>
      <Image
        style={styles.removebgPreview1Icon}
        resizeMode="cover"
        source={require("../assets/-20240110-224716276removebgpreview-1.png")}
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
    marginTop: 8,
    fontFamily: FontFamily.heading03,
    lineHeight: 20,
    fontSize: FontSize.bodySmalls300_size,
    textAlign: "center",
    color: Color.advertisingGreen1000,
    fontWeight: "600",
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
    position: "absolute",
    top: 248,
    left: 17,
    borderRadius: Border.br_base,
    backgroundColor: Color.baseColourWhite,
    shadowColor: "rgba(122, 90, 248, 0.24)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    width: 275,
    height: 91,
    flexDirection: "row",
    padding: Padding.p_5xs,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FieldList;
