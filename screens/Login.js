import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import Loginaccountinput from "../components/Loginaccountinput";
import Loginpasswordinput from "../components/Loginpasswordinput";
import Loginbutton from "../components/Loginbutton";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={styles.loginParent}>
        <Text style={styles.login1}>Login</Text>
        <Loginaccountinput />
        <Loginpasswordinput />
        <Text style={styles.text}>ลืมรหัสผ่าน</Text>
        <Loginbutton />
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Register")}
        >
          <Text />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login1: {
    fontSize: FontSize.heading03_size,
    letterSpacing: -0.6,
    lineHeight: 48,
    fontWeight: "600",
    fontFamily: FontFamily.heading03,
    color: Color.gray900,
    textAlign: "center",
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.buttonSmall_size,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.buttonSmall,
    color: Color.labelColorLightPrimary,
    textAlign: "right",
    marginTop: 16,
    alignSelf: "stretch",
  },
  pressable: {
    marginTop: 16,
  },
  loginParent: {
    position: "absolute",
    marginLeft: -206,
    top: 0,
    left: "50%",
    width: 412,
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_9xl,
  },
  login: {
    backgroundColor: Color.gray00,
    flex: 1,
    width: "100%",
    height: 712,
    overflow: "hidden",
  },
});

export default Login;
