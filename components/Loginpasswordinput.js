import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Input } from "@ui-kitten/components";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Loginpasswordinput = () => {
  return (
    <View style={styles.input}>
      <View style={[styles.label, styles.labelFlexBox]}>
        <Text style={styles.label1}>รหัสผ่าน</Text>
        <Image
          style={styles.systemIconsinfo}
          resizeMode="cover"
          source={require("../assets/1-system-iconsinfo.png")}
        />
      </View>
      <Input style={[styles.input1, styles.labelFlexBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  labelFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  label1: {
    fontSize: FontSize.selectorS4Regular_size,
    lineHeight: 24,
    fontFamily: FontFamily.selectorS6Regular,
    color: Color.descriptiveTextColourTextNormal700,
    textAlign: "left",
  },
  systemIconsinfo: {
    width: 18,
    height: 18,
    overflow: "hidden",
    display: "none",
    marginLeft: 4,
  },
  label: {
    alignItems: "center",
  },
  input1: {
    backgroundColor: Color.gray00,
    marginTop: 4,
  },
  input: {
    marginTop: 16,
    alignSelf: "stretch",
  },
});

export default Loginpasswordinput;
