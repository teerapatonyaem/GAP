import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const FormContainer1 = () => {
  return (
    <View style={styles.iconixtolinearplant2}>
      <Image
        style={styles.iconixtolinearplant21}
        resizeMode="cover"
        source={require("../assets/iconixtolinearplant21.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconixtolinearplant21: {
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
  iconixtolinearplant2: {
    width: 32,
    height: 32,
  },
});

export default FormContainer1;
