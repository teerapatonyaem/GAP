import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const GAPStatusBottombar = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.tabbar, styles.tabbarPosition]}>
      <View style={[styles.tabs, styles.tabsLayout]}>
        <Pressable
          style={styles.layout}
          onPress={() => navigation.navigate("Screen4")}
        >
          <View style={styles.tabbarTab}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/menu-icon.png")}
            />
            <Text style={styles.label}>รับ-จ่าย</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.layout}
          onPress={() => navigation.navigate("Frame")}
        >
          <View style={styles.tabbarTab}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/menu-icon1.png")}
            />
            <Text style={styles.label}>สถานนะ</Text>
          </View>
        </Pressable>
        <View style={styles.layout}>
          <View style={styles.tabbarTab2}>
            <View style={styles.menuIcon2}>
              <Image
                style={styles.systemIconsadd}
                resizeMode="cover"
                source={require("../assets/1-system-iconsadd.png")}
              />
              <Image
                style={styles.alertOnTabbarIcon}
                resizeMode="cover"
                source={require("../assets/alert-on-tabbar.png")}
              />
            </View>
          </View>
        </View>
        <Pressable
          style={styles.layout}
          onPress={() => navigation.navigate("Screen5")}
        >
          <View style={styles.tabbarTab}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/menu-icon3.png")}
            />
            <Text style={styles.label}>รู้ข้าว</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.layout}
          onPress={() => navigation.navigate("Screen7")}
        >
          <View style={styles.tabbarTab}>
            <View style={styles.menuIcon2}>
              <Image
                style={[styles.farmerIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/farmer.png")}
              />
              <Image
                style={styles.alertOnTabbarIcon}
                resizeMode="cover"
                source={require("../assets/alert-on-tabbar1.png")}
              />
            </View>
            <Text style={styles.label}>โปรไฟล์</Text>
          </View>
        </Pressable>
      </View>
      <View style={[styles.ioshomeindicator, styles.tabsLayout]}>
        <View style={styles.iosHomeindicatorTheme}>
          <View style={[styles.homeIndicator, styles.tabbarPosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabbarPosition: {
    left: "50%",
    position: "absolute",
  },
  tabsLayout: {
    width: 375,
    alignItems: "center",
  },
  iconLayout: {
    height: 28,
    width: 28,
  },
  label: {
    fontSize: FontSize.selectorS6SemiBold_size,
    lineHeight: 14,
    fontFamily: FontFamily.bodyB5Regular,
    color: Color.walledGarden1000,
    textAlign: "center",
    marginTop: 4,
  },
  tabbarTab: {
    alignItems: "center",
  },
  layout: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },
  systemIconsadd: {
    width: 32,
    height: 32,
    overflow: "hidden",
    zIndex: 0,
  },
  alertOnTabbarIcon: {
    top: -4,
    right: -4,
    borderRadius: Border.br_31xl,
    width: 8,
    height: 8,
    zIndex: 1,
    display: "none",
    position: "absolute",
  },
  menuIcon2: {
    flexDirection: "row",
  },
  tabbarTab2: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  farmerIcon: {
    zIndex: 0,
  },
  tabs: {
    height: 56,
    paddingVertical: 0,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
  },
  iosHomeindicatorTheme: {
    width: 390,
    height: 34,
  },
  ioshomeindicator: {
    height: 34,
    display: "none",
  },
  tabbar: {
    marginLeft: -206,
    bottom: 0,
    borderRadius: Border.br_base,
    backgroundColor: Color.baseColourWhite,
    shadowColor: "rgba(15, 172, 31, 0.24)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    width: 412,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
});

export default GAPStatusBottombar;
