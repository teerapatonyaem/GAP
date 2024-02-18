import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionCard2 from "../components/SectionCard2";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Member = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.member}>
      <View style={styles.frameParent}>
        <View
          style={[
            styles.basilIconsoutlineoutlinegeParent,
            styles.frameGroupFlexBox,
          ]}
        >
          <Pressable
            style={styles.systemIconseditLayout}
            onPress={() => navigation.navigate("HomeDetail")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/basil-iconsoutlineoutlinegeneralhome1.png")}
            />
          </Pressable>
          <Text style={[styles.text, styles.textTypo]}>ผังสมาชิก</Text>
        </View>
        <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
          <View style={styles.systemIconseditParent}>
            <Image
              style={[styles.systemIconsedit, styles.systemIconseditLayout]}
              resizeMode="cover"
              source={require("../assets/1-system-iconsedit.png")}
            />
            <Text style={styles.textTypo}>แก้ไข</Text>
          </View>
          <Pressable
            style={styles.systemIconsaddUserParent}
            onPress={() => navigation.navigate("Modal5")}
          >
            <Image
              style={[styles.systemIconsedit, styles.systemIconseditLayout]}
              resizeMode="cover"
              source={require("../assets/1-system-iconsadd-user.png")}
            />
            <Text style={styles.textTypo}>เพิ่ม</Text>
          </Pressable>
        </View>
        <SectionCard2 />
        <SectionCard2 />
        <SectionCard2 />
        <SectionCard2 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameGroupFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
    lineHeight: 28,
    fontSize: FontSize.bodyBH3SemiBold_size,
  },
  systemIconseditLayout: {
    height: 24,
    width: 24,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  text: {
    flex: 1,
  },
  basilIconsoutlineoutlinegeParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  systemIconsedit: {
    overflow: "hidden",
  },
  systemIconseditParent: {
    flexDirection: "row",
  },
  systemIconsaddUserParent: {
    marginLeft: 8,
    flexDirection: "row",
  },
  frameGroup: {
    justifyContent: "flex-end",
    padding: Padding.p_5xs,
    marginTop: 8,
    flexDirection: "row",
  },
  frameParent: {
    position: "absolute",
    marginLeft: -206,
    top: 0,
    left: "50%",
    width: 412,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_9xl,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
  },
  member: {
    backgroundColor: Color.surfaceColourWhiteSurface,
    height: 732,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Member;
