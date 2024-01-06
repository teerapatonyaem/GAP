import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Screen14 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.view, styles.viewLayout]}>
      <View style={[styles.inner, styles.tabsSpaceBlock]}>
        <View style={styles.frameParent}>
          <View style={styles.frameParent}>
            <View style={styles.frameContainer}>
              <View style={styles.avatarParent}>
                <View style={styles.avatar}>
                  <Image
                    style={[styles.circle40invisibleIcon, styles.viewLayout]}
                    resizeMode="cover"
                    source={require("../assets/circle40invisible.png")}
                  />
                </View>
                <View style={styles.parent}>
                  <Text style={[styles.text, styles.textTypo]}>สวัสดี</Text>
                  <Text style={[styles.text, styles.textTypo]}>เกษตรกร</Text>
                </View>
              </View>
              <View style={styles.systemIconssettingParent}>
                <Image
                  style={styles.systemLayout}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconssetting.png")}
                />
                <Image
                  style={[styles.systemIconsnotification, styles.systemLayout]}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconsnotification1.png")}
                />
              </View>
            </View>
            <Pressable
              style={styles.systemIconsaddCircleParent}
              onPress={() => navigation.navigate("Screen13")}
            >
              <Image
                style={styles.systemLayout}
                resizeMode="cover"
                source={require("../assets/1-system-iconsaddcircle.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>เพิ่มแปลง</Text>
            </Pressable>
          </View>
          <View style={styles.frameWrapper}>
            <View style={styles.frameParent}>
              <Text style={styles.text3}>จัดการแปลง</Text>
              <View style={styles.frameView}>
                <View style={styles.parentFlexBox}>
                  <Image
                    style={styles.systemIconsaddLayout}
                    resizeMode="cover"
                    source={require("../assets/iconixtolinearplant21.png")}
                  />
                  <Text style={[styles.text4, styles.text4Typo]}>แผนปลูก</Text>
                </View>
                <View
                  style={[
                    styles.basilIconssolidsolidcommunParent,
                    styles.parentFlexBox,
                  ]}
                >
                  <Image
                    style={styles.systemIconsaddLayout}
                    resizeMode="cover"
                    source={require("../assets/basil-iconssolidsolidcommunicationuser.png")}
                  />
                  <Text style={[styles.text4, styles.text4Typo]}>สมาชิก</Text>
                </View>
              </View>
              <View style={styles.frameView}>
                <View style={styles.parentFlexBox}>
                  <Image
                    style={styles.systemIconsaddLayout}
                    resizeMode="cover"
                    source={require("../assets/basil-iconsoutlineoutlinefilesclipboardalt.png")}
                  />
                  <Text style={[styles.text4, styles.text4Typo]}>สำรวจ</Text>
                </View>
                <View
                  style={[
                    styles.basilIconssolidsolidcommunParent,
                    styles.parentFlexBox,
                  ]}
                >
                  <Image
                    style={styles.systemIconsaddLayout}
                    resizeMode="cover"
                    source={require("../assets/basil-iconsoutlineoutlinefilesfiledownload.png")}
                  />
                  <Text style={[styles.text4, styles.text4Typo]}>GAP</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.tabbar, styles.tabsSpaceBlock]}>
        <View style={[styles.tabs, styles.tabsSpaceBlock]}>
          <Pressable
            style={[styles.layout, styles.viewFlexBox]}
            onPress={() => navigation.navigate("Screen6")}
          >
            <View style={styles.tabbarTab}>
              <Image
                style={styles.menuIcon}
                resizeMode="cover"
                source={require("../assets/menu-icon7.png")}
              />
              <Text style={[styles.label, styles.text4Typo]}>รับ-จ่าย</Text>
            </View>
          </Pressable>
          <Pressable
            style={[styles.layout, styles.viewFlexBox]}
            onPress={() => navigation.navigate("Frame")}
          >
            <View style={styles.tabbarTab}>
              <Image
                style={styles.menuIcon}
                resizeMode="cover"
                source={require("../assets/menu-icon8.png")}
              />
              <Text style={[styles.label, styles.text4Typo]}>สถานนะ</Text>
            </View>
          </Pressable>
          <View style={[styles.layout, styles.viewFlexBox]}>
            <View style={styles.tabbarTab2}>
              <Pressable
                style={styles.menuIcon2}
                onPress={() => navigation.navigate("Screen1")}
              >
                <Image
                  style={[styles.systemIconsadd, styles.systemIconsaddLayout]}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconsadd.png")}
                />
                <Image
                  style={styles.alertOnTabbarIcon}
                  resizeMode="cover"
                  source={require("../assets/alert-on-tabbar1.png")}
                />
              </Pressable>
            </View>
          </View>
          <Pressable
            style={[styles.layout, styles.viewFlexBox]}
            onPress={() => navigation.navigate("Screen4")}
          >
            <View style={styles.tabbarTab}>
              <Image
                style={styles.menuIcon}
                resizeMode="cover"
                source={require("../assets/menu-icon9.png")}
              />
              <Text style={[styles.label, styles.text4Typo]}>รู้ข้าว</Text>
            </View>
          </Pressable>
          <Pressable
            style={[styles.layout, styles.viewFlexBox]}
            onPress={() => navigation.navigate("Screen2")}
          >
            <View style={styles.tabbarTab}>
              <Image
                style={styles.menuIcon}
                resizeMode="cover"
                source={require("../assets/menu-icon10.png")}
              />
              <Text style={[styles.label, styles.text4Typo]}>โปรไฟล์</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.ioshomeindicator}>
          <View style={styles.iosHomeindicatorTheme}>
            <View style={styles.homeIndicator} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewLayout: {
    width: "100%",
    overflow: "hidden",
  },
  tabsSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  textTypo: {
    fontFamily: FontFamily.labelLB4Regular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
  },
  systemLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  text4Typo: {
    marginTop: 4,
    textAlign: "center",
    fontSize: FontSize.bodyB6Regular_size,
    fontFamily: FontFamily.labelLB4Regular,
  },
  parentFlexBox: {
    padding: Padding.p_5xs,
    backgroundColor: Color.success50,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flex: 1,
  },
  viewFlexBox: {
    flex: 1,
    justifyContent: "center",
  },
  systemIconsaddLayout: {
    height: 32,
    width: 32,
  },
  circle40invisibleIcon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_4981xl,
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  avatar: {
    width: 40,
    height: 40,
  },
  text: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
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
  frameContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  text2: {
    color: Color.gray300,
    textAlign: "left",
  },
  systemIconsaddCircleParent: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_base,
    marginTop: 16,
    backgroundColor: Color.success50,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    alignSelf: "stretch",
  },
  text3: {
    fontSize: FontSize.labelLB4Regular_size,
    fontWeight: "600",
    fontFamily: FontFamily.buttonBT5SemiBold,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    alignSelf: "stretch",
  },
  text4: {
    color: Color.labelColorLightPrimary,
    alignSelf: "stretch",
  },
  basilIconssolidsolidcommunParent: {
    marginLeft: 16,
  },
  frameView: {
    paddingHorizontal: 0,
    marginTop: 8,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  frameWrapper: {
    marginTop: 32,
    alignSelf: "stretch",
  },
  inner: {
    width: 412,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
  },
  menuIcon: {
    width: 28,
    height: 28,
  },
  label: {
    lineHeight: 14,
    color: Color.descriptiveTextColourTextLighter400,
  },
  tabbarTab: {
    alignItems: "center",
  },
  layout: {
    alignItems: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  systemIconsadd: {
    zIndex: 0,
    overflow: "hidden",
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
  tabs: {
    height: 56,
    paddingVertical: 0,
    flexDirection: "row",
    alignSelf: "stretch",
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
    width: 375,
    height: 34,
    display: "none",
    alignItems: "center",
  },
  tabbar: {
    width: 414,
    marginTop: 223,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
});

export default Screen14;
