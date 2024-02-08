import * as React from "react";
import { StyleSheet, View } from "react-native";
import RegisterComponent from "../components/RegisterComponent";
import { Color } from "../GlobalStyles";

const Register = () => {
  return (
    <View style={styles.register}>
      <RegisterComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  register: {
    backgroundColor: Color.baseColourWhite,
    flex: 1,
    width: "100%",
    height: 712,
    overflow: "hidden",
  },
});

export default Register;
