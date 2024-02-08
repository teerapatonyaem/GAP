import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const RiceInformationPDF = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameParent}>
      <View style={styles.frameGroup}>
        <View style={styles.iconixtolinearreturnKeyParent}>
          <Pressable
            style={styles.iconixtolinearreturnKeyLayout}
            onPress={() => navigation.navigate("Screen5")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/iconixtolinearreturnkey.png")}
            />
          </Pressable>
          <Text style={styles.text}>องค์ความรู้เรื่องข้าว</Text>
        </View>
        <Image
          style={styles.image16Icon}
          resizeMode="cover"
          source={require("../assets/image-16.png")}
        />
      </View>
      <View style={styles.topCommandOnPreview}>
        <Text style={styles.text1}>Page 1 of 100</Text>
        <Image
          style={[styles.dividerIcon, styles.dividerIconSpaceBlock]}
          resizeMode="cover"
          source={require("../assets/divider.png")}
        />
        <Image
          style={[
            styles.systemIconszoomInZoomOut,
            styles.dividerIconSpaceBlock,
          ]}
          resizeMode="cover"
          source={require("../assets/1-system-iconszoom-in-zoom-out.png")}
        />
        <Image
          style={[
            styles.systemIconszoomInZoomOut,
            styles.dividerIconSpaceBlock,
          ]}
          resizeMode="cover"
          source={require("../assets/1-system-iconsfullscreen.png")}
        />
        <Image
          style={[
            styles.systemIconszoomInZoomOut,
            styles.dividerIconSpaceBlock,
          ]}
          resizeMode="cover"
          source={require("../assets/1-system-iconszoom-in-zoom-out1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dividerIconSpaceBlock: {
    marginLeft: 16,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconixtolinearreturnKeyLayout: {
    height: 24,
    width: 24,
  },
  text: {
    flex: 1,
    fontSize: FontSize.buttonBT3SemiBold_size,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.titleT3SemiBold,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
  },
  iconixtolinearreturnKeyParent: {
    width: 328,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  image16Icon: {
    height: 470,
    marginTop: 30,
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
    alignSelf: "stretch",
  },
  frameGroup: {
    alignSelf: "stretch",
  },
  text1: {
    fontSize: FontSize.selectorS4Regular_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyB5Regular,
    color: Color.baseColourBase500,
    textAlign: "left",
  },
  dividerIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    marginLeft: 16,
    width: "100%",
    alignSelf: "stretch",
  },
  systemIconszoomInZoomOut: {
    height: 24,
    width: 24,
  },
  topCommandOnPreview: {
    borderRadius: Border.br_980xl,
    backgroundColor: Color.baseColourWhite,
    shadowColor: "rgba(59, 89, 152, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    paddingVertical: Padding.p_5xs,
    marginTop: 8,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
  },
  frameParent: {
    width: 412,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
});

export default RiceInformationPDF;
