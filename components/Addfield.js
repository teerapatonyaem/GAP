import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Addfield = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.systemIconsaddCircleParent}>
      <Pressable
        style={styles.systemIconsaddCircle}
        onPress={() => navigation.navigate("AndroidLarge2")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/1-system-iconsaddcircle.png")}
        />
      </Pressable>
      <Text style={styles.text}>เพิ่มแปลง</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  systemIconsaddCircle: {
    width: 24,
    height: 24,
  },
  text: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    color: Color.gray300,
    textAlign: "left",
  },
  systemIconsaddCircleParent: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.success50,
    width: 328,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_base,
    marginTop: 16,
  },
});

export default Addfield;
