import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const IconixtolineararrowLeft = () => {
  return (
    <View style={styles.iconixtolineararrowLeft}>
      <Image
        style={styles.iconixtolineararrowLeft1}
        resizeMode="cover"
        source={require("../assets/iconixtolineararrowleft.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconixtolineararrowLeft1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconixtolineararrowLeft: {
    width: 24,
    height: 24,
  },
});

export default IconixtolineararrowLeft;
