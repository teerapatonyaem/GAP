import * as React from "react";
import { View, Image, StyleSheet, Text,Pressable  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Addfield = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.systemIconsaddCircleParent}>
      <View style={styles.systemIconsaddCircle}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector5.png")}
        />
      </View>
      <Pressable onPress={() => navigation.navigate("AndroidLarge2")}>
      <Text style={styles.text}>เพิ่มแปลง</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    height: "83.33%",
    width: "83.33%",
    top: "8.33%",
    right: "8.33%",
    bottom: "8.33%",
    left: "8.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  systemIconsaddCircle: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.iBMPlexSansThaiRegular,
    color: Color.colorDimgray,
    textAlign: "left",
  },
  systemIconsaddCircleParent: {
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.success50,
    alignItems: "center", 
    justifyContent: "center", 
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_base,
    marginTop: 8,
  },
});

export default Addfield;
