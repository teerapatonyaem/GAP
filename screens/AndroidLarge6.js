import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text } from "react-native";
import Fieldbannerinfo from "../components/Fieldbannerinfo";
import Managefield2 from "../components/Managefield2";
import { Padding, Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const AndroidLarge6 = () => {
  return (
    <ScrollView
      style={[styles.androidLarge6, styles.androidLarge6Layout]}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.androidLarge6Content}
    >
      <View>
        <View style={styles.frameWrapper}>
          <View style={[styles.frameParent, styles.tabsSpaceBlock]}>
            <View style={styles.frameGroup}>
              <View style={styles.avatarParent}>
                <View style={styles.avatar}>
                  <Image
                    style={[
                      styles.circle40invisibleIcon,
                      styles.androidLarge6Layout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/circle40invisible.png")}
                  />
                </View>
                <View style={styles.parent}>
                  <Text style={styles.text}>สวัสดี</Text>
                  <Text style={styles.text}>เกษตรกร</Text>
                </View>
              </View>
              <View style={styles.systemIconssettingParent}>
                <Image
                  style={styles.systemLayout}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconssetting2.png")}
                />
                <Image
                  style={[styles.systemIconsnotification, styles.systemLayout]}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconsnotification2.png")}
                />
              </View>
            </View>
            <Fieldbannerinfo />
            <View style={styles.carousel}>
              <View style={styles.systemIconssettingParent}>
                <Image
                  style={styles.bulletIconLayout}
                  resizeMode="cover"
                  source={require("../assets/bullet2.png")}
                />
                <Image
                  style={[styles.bulletIcon1, styles.bulletIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/bullet31.png")}
                />
                <Image
                  style={[styles.bulletIcon1, styles.bulletIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/bullet31.png")}
                />
              </View>
            </View>
            <Managefield2 />
          </View>
        </View>
      </View>
      <View style={[styles.tabbar, styles.tabsSpaceBlock]}>
        <View style={[styles.tabs, styles.tabsLayout]}>
          <View style={styles.layout1}>
            <View style={styles.frameWrapper}>
              <Image
                style={styles.menuIcon}
                resizeMode="cover"
                source={require("../assets/menu-icon71.png")}
              />
              <Text style={styles.label}>รับ-จ่าย</Text>
            </View>
          </View>
          <View style={styles.layout1}>
            <View style={styles.frameWrapper}>
              <Image
                style={styles.menuIcon}
                resizeMode="cover"
                source={require("../assets/menu-icon81.png")}
              />
              <Text style={styles.label}>สถานนะ</Text>
            </View>
          </View>
          <View style={styles.layout1}>
            <View style={styles.tabbarTab2}>
              <View style={styles.menuIcon2}>
                <Image
                  style={styles.systemIconsadd}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconsadd2.png")}
                />
                <Image
                  style={[styles.alertOnTabbarIcon, styles.bulletIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/alert-on-tabbar11.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.layout1}>
            <View style={styles.frameWrapper}>
              <Image
                style={styles.menuIcon}
                resizeMode="cover"
                source={require("../assets/menu-icon17.png")}
              />
              <Text style={styles.label}>รู้ข้าว</Text>
            </View>
          </View>
          <View style={styles.layout1}>
            <View style={styles.frameWrapper}>
              <Image
                style={styles.menuIcon}
                resizeMode="cover"
                source={require("../assets/menu-icon101.png")}
              />
              <Text style={styles.label}>โปรไฟล์</Text>
            </View>
          </View>
        </View>
        <View style={[styles.ioshomeindicator, styles.tabsLayout]}>
          <View style={styles.iosHomeindicatorTheme}>
            <View style={styles.homeIndicator} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  androidLarge6Content: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  androidLarge6Layout: {
    maxWidth: "100%",
    width: "100%",
    overflow: "hidden",
  },
  tabsSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
  },
  systemLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  bulletIconLayout: {
    height: 8,
    width: 8,
  },
  tabsLayout: {
    width: 375,
    alignItems: "center",
  },
  circle40invisibleIcon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_4981xl,
    maxHeight: "100%",
    position: "absolute",
  },
  avatar: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: FontSize.size_smi,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
  },
  parent: {
    marginLeft: 8,
  },
  avatarParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  systemIconsnotification: {
    marginLeft: 8,
  },
  systemIconssettingParent: {
    flexDirection: "row",
  },
  frameGroup: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  bulletIcon1: {
    marginLeft: 6,
  },
  carousel: {
    paddingVertical: Padding.p_5xs,
    marginTop: 8,
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  frameParent: {
    width: 360,
    paddingVertical: 0,
  },
  frameWrapper: {
    alignItems: "center",
  },
  menuIcon: {
    width: 28,
    height: 28,
  },
  label: {
    fontSize: FontSize.bodyB6Regular_size,
    lineHeight: 14,
    color: Color.descriptiveTextColourTextLighter400,
    textAlign: "center",
    marginTop: 4,
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
  },
  layout1: {
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  systemIconsadd: {
    width: 32,
    height: 32,
    zIndex: 0,
    overflow: "hidden",
  },
  alertOnTabbarIcon: {
    top: -4,
    right: -4,
    borderRadius: Border.br_31xl,
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
  tabs: {
    height: 56,
    flexDirection: "row",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
    position: "absolute",
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
    marginTop: 300,
    width: 360,
    paddingVertical: 0,
    alignItems: "center",
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  androidLarge6: {
    flex: 1,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
});

export default AndroidLarge6;
