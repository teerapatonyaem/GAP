import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Loginbutton = () => {
  const navigation = useNavigation();

  return (
    <Pressable
    style={styles.button}
    onPress={() => navigation.navigate("Home")}
  >
    <Text style={styles.button1}>Login</Text>
  </Pressable>
  );
};

const styles = StyleSheet.create({
    button1: {
      fontSize: FontSize.buttonRegular_size,
      textTransform: "capitalize",
      fontWeight: "500",
      fontFamily: FontFamily.buttonSmall,
      color: "white", // กำหนดสีของตัวอักษรเป็นสีขาว
      textAlign: "left",
    },
  button: {
    alignSelf: "stretch",
    borderRadius: Border.br_13xl,
    backgroundColor: Color.walledGarden1000,
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_21xl,
    paddingVertical: Padding.p_3xs,
    marginTop: 16,
  },
});

export default Loginbutton;
