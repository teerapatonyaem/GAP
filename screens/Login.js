import * as React from "react";
import { StyleSheet, View } from "react-native";
import LoginComponent from "../components/LoginComponent";
import { Color } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={styles.login}>
      <LoginComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    backgroundColor: Color.baseColourWhite,
    flex: 1,
    width: "100%",
    height: 712,
    overflow: "hidden",
  },
});

export default Login;
