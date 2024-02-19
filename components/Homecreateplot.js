import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Homecreateplot = () => {
  return (
    <View style={[styles.iconixtolinearaddSquareParent, styles.textFlexBox1]}>
      <Image
        style={styles.iconixtolinearaddSquare}
        resizeMode="cover"
        source={require("../assets/iconixtolinearaddsquare1.png")}
      />
      <View style={[styles.wrapper, styles.textFlexBox]}>
        <Text style={[styles.text, styles.textFlexBox]}>สร้างแปลง</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
  },
  textFlexBox: {
    flex: 1,
    alignSelf: "stretch",
  },
  iconixtolinearaddSquare: {
    width: 48,
    height: 48,
  },
  text: {
    fontSize: FontSize.titleT3SemiBold_size,
    letterSpacing: -0.2,
    lineHeight: 32,
    fontWeight: "600",
    fontFamily: FontFamily.athitiSemiBold,
    color: Color.advertisingGreen1000,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    marginTop: 8,
  },
  iconixtolinearaddSquareParent: {
    position: "absolute",
    top: 248,
    left: 17,
    borderRadius: Border.br_base,
    backgroundColor: Color.gray00,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 275,
    height: 91,
    padding: Padding.p_5xs,
    zIndex: 1,
  },
});

export default Homecreateplot;
