import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const FormContainer2 = () => {
  return (
    <View style={styles.iconixtolinearplant2}>
      <View style={[styles.iconixtolinearplant21, styles.iconPosition]}>
        <Image
          style={[styles.icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  icon: {
    height: "83.13%",
    width: "63.75%",
    top: "8.44%",
    right: "17.81%",
    bottom: "8.44%",
    left: "18.44%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconixtolinearplant21: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  iconixtolinearplant2: {
    width: 32,
    height: 32,
  },
});

export default FormContainer2;
