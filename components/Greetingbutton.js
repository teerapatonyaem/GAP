import * as React from "react";
import { Pressable, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Greetingbutton = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate("Login")}
    >
      <Text style={styles.button1}>Get started</Text>
      <Image
        style={styles.icons}
        resizeMode="cover"
        source={require("../assets/icons.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button1: {
    fontSize: FontSize.buttonRegular_size,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.buttonSmall1,
    color: "white",
    textAlign: "left",
  },
  icons: {
    width: 18,
    height: 18,
    marginLeft: 8,
  },
  button: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.walledGarden1000,
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    marginTop: 16,
  },
});

export default Greetingbutton;
