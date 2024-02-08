import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Modal3 = () => {
  return (
    <View style={styles.modal}>
      <Image
        style={styles.iconixtolinearcheckboxCheck}
        resizeMode="cover"
        source={require("../assets/iconixtolinearcheckboxchecked.png")}
      />
      <Text style={styles.text}>สำเร็จ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconixtolinearcheckboxCheck: {
    width: 160,
    height: 160,
  },
  text: {
    fontSize: FontSize.size_29xl,
    letterSpacing: -0.6,
    lineHeight: 32,
    fontWeight: "600",
    fontFamily: FontFamily.athitiSemiBold,
    color: Color.brightLightGreen800,
    textAlign: "center",
  },
  modal: {
    backgroundColor: Color.baseColourWhite,
    flex: 1,
    width: "100%",
    height: 712,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Modal3;
