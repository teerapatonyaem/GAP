import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import IconixtolinearcheckboxCheck from "../components/IconixtolinearcheckboxCheck";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Modal3 = () => {
  return (
    <View style={styles.modal}>
      <IconixtolinearcheckboxCheck
        iconixtolinearcheckboxChe={require("../assets/iconixtolinearcheckboxchecked1.png")}
        iconixtolinearcheckboxCheWidth={160}
        iconixtolinearcheckboxCheHeight={160}
      />
      <Text style={styles.text}>สำเร็จ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: Color.surfaceColourWhiteSurface,
    flex: 1,
    width: "100%",
    height: 712,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Modal3;
