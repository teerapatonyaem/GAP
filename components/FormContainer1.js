import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const FormContainer1 = () => {
  return (
    <View style={styles.foodfarmer}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    height: "75%",
    width: "62.53%",
    top: "12.5%",
    right: "18.67%",
    bottom: "12.5%",
    left: "18.8%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  foodfarmer: {
    width: 83,
    height: 64,
    overflow: "hidden",
  },
});

export default FormContainer1;
