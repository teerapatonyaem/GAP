import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Farm1 from "./Farm1";
import Fram2 from "./Fram2";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Exfarm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameParent}>
      <View style={styles.basilIconsoutlineoutlinegeParent}>
        <Pressable
          style={styles.basilIconsoutlineoutlinege}
          onPress={() => navigation.navigate("Screen11")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/basil-iconsoutlineoutlinegeneralhome.png")}
          />
        </Pressable>
        <Text style={styles.text}>สำรวจแปลง</Text>
      </View>
      <Farm1 />
      <Fram2 />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  basilIconsoutlineoutlinege: {
    width: 24,
    height: 24,
  },
  text: {
    flex: 1,
    fontSize: FontSize.titleT4SemiBold_size,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.buttonBT5SemiBold,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
  },
  basilIconsoutlineoutlinegeParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  frameParent: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 412,
    height: 594,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
  },
});

export default Exfarm;
