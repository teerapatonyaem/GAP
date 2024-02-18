import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const SectionCard = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frameParent, styles.parentFlexBox]}>
      <View style={[styles.avatarParent, styles.parentFlexBox]}>
        <Image
          style={styles.avatarIcon}
          resizeMode="cover"
          source={require("../assets/avatar1.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>นายเกษตรกร</Text>
      </View>
      <View
        style={[styles.basilIconsoutlineoutlinegeParent, styles.parentFlexBox]}
      >
        <Pressable
          style={styles.basilIconsoutlineoutlinege}
          onPress={() => navigation.navigate("HomeDetail")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/basil-iconsoutlineoutlinegeneralhome.png")}
          />
        </Pressable>
        <View style={[styles.wrapper, styles.parentFlexBox]}>
          <Text style={[styles.text1, styles.textTypo]}>แก้ไขโปรไฟล์</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
  },
  avatarIcon: {
    width: 64,
    height: 64,
  },
  text: {
    fontSize: FontSize.bodyBH3SemiBold_size,
    lineHeight: 28,
    color: Color.labelColorLightPrimary,
    marginLeft: 9,
  },
  avatarParent: {
    flex: 1,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  basilIconsoutlineoutlinege: {
    width: 24,
    height: 24,
  },
  text1: {
    fontSize: FontSize.bodySmalls300_size,
    textTransform: "capitalize",
    color: Color.surfaceColourWhiteSurface,
  },
  wrapper: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorLimegreen,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    marginLeft: 8,
  },
  basilIconsoutlineoutlinegeParent: {
    marginLeft: 28,
  },
  frameParent: {
    alignSelf: "stretch",
  },
});

export default SectionCard;
