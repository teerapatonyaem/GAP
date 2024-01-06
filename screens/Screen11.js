import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Screen11 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={[styles.scrollview, styles.scrollviewLayout]}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      <View style={[styles.inner, styles.tabsSpaceBlock]}>
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View style={styles.avatarParent}>
              <View style={styles.avatar}>
                <Image
                  style={[
                    styles.circle40invisibleIcon,
                    styles.scrollviewLayout,
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
                source={require("../assets/1-system-iconssetting.png")}
              />
              <Image
                style={[styles.systemIconsnotification, styles.systemLayout]}
                resizeMode="cover"
                source={require("../assets/1-system-iconsnotification.png")}
              />
            </View>
          </View>
          <Pressable
            style={[styles.image31Parent, styles.parentSpaceBlock]}
            onPress={() => navigation.navigate("Screen12")}
          >
            <Image
              style={styles.image31Icon}
              resizeMode="cover"
              source={require("../assets/image-31.png")}
            />
            <View style={styles.parent}>
              <Text style={[styles.text2, styles.textTypo]}>
                นาแปลงใหญ่กลุ่มเขียว
              </Text>
              <View style={styles.frameContainer}>
                <View style={[styles.wrapper, styles.frameFlexBox]}>
                  <Text style={styles.text3}>12 ไร่ 1 งาน</Text>
                </View>
                <View style={[styles.container, styles.frameFlexBox]}>
                  <Text style={styles.text3}>ปลูก 15/11/2566</Text>
                </View>
                <View style={[styles.frame, styles.frameFlexBox]}>
                  <Text style={styles.text3}>เก็บ 15/11/2566</Text>
                </View>
              </View>
            </View>
          </Pressable>
          <View style={[styles.carousel, styles.tabsSpaceBlock]}>
            <View style={styles.systemIconssettingParent}>
              <Image
                style={styles.bulletIconLayout}
                resizeMode="cover"
                source={require("../assets/activeon-dark-modeoff.png")}
              />
              <Image
                style={[styles.bulletIcon1, styles.bulletIconLayout]}
                resizeMode="cover"
                source={require("../assets/activeoff-dark-modeoff.png")}
              />
              <Image
                style={[styles.bulletIcon1, styles.bulletIconLayout]}
                resizeMode="cover"
                source={require("../assets/activeoff-dark-modeoff.png")}
              />
            </View>
          </View>
          <View style={styles.frameView}>
            <Text style={[styles.text6, styles.textTypo]}>จัดการแปลง</Text>
            <View style={[styles.frameParent1, styles.layout1FlexBox]}>
              <Pressable
                style={styles.parentFlexBox}
                onPress={() => navigation.navigate("Frame2")}
              >
                <Image
                  style={styles.systemIconsaddLayout}
                  resizeMode="cover"
                  source={require("../assets/iconixtolinearplant21.png")}
                />
                <Text style={[styles.text7, styles.text7Typo]}>แผนปลูก</Text>
              </Pressable>
              <Pressable
                style={[
                  styles.basilIconssolidsolidcommunParent,
                  styles.parentFlexBox,
                ]}
                onPress={() => navigation.navigate("Frame1")}
              >
                <Image
                  style={styles.systemIconsaddLayout}
                  resizeMode="cover"
                  source={require("../assets/basil-iconssolidsolidcommunicationuser.png")}
                />
                <Text style={[styles.text7, styles.text7Typo]}>สมาชิก</Text>
              </Pressable>
            </View>
            <View style={[styles.frameParent1, styles.layout1FlexBox]}>
              <Pressable
                style={styles.parentFlexBox}
                onPress={() => navigation.navigate("Screen9")}
              >
                <Image
                  style={styles.systemIconsaddLayout}
                  resizeMode="cover"
                  source={require("../assets/basil-iconsoutlineoutlinefilesclipboardalt.png")}
                />
                <Text style={[styles.text7, styles.text7Typo]}>สำรวจ</Text>
              </Pressable>
              <Pressable
                style={[
                  styles.basilIconssolidsolidcommunParent,
                  styles.parentFlexBox,
                ]}
                onPress={() => navigation.navigate("Screen7")}
              >
                <Image
                  style={styles.systemIconsaddLayout}
                  resizeMode="cover"
                  source={require("../assets/basil-iconsoutlineoutlinefilesfiledownload.png")}
                />
                <Text style={[styles.text7, styles.text7Typo]}>GAP</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.tabbar, styles.tabsSpaceBlock]}>
        <View style={[styles.tabs, styles.tabsSpaceBlock]}>
          <Pressable
            style={[styles.layout1, styles.layout1FlexBox]}
            onPress={() => navigation.navigate("Screen6")}
          >
            <View style={styles.tabbarTab}>
              <Image
                style={styles.menuIcon}
                resizeMode="cover"
                source={require("../assets/menu-icon7.png")}
              />
              <Text style={[styles.label, styles.text7Typo]}>รับ-จ่าย</Text>
            </View>
          </Pressable>
          <Pressable
            style={[styles.layout1, styles.layout1FlexBox]}
            onPress={() => navigation.navigate("Frame")}
          >
            <View style={styles.tabbarTab}>
              <Image
                style={styles.menuIcon}
                resizeMode="cover"
                source={require("../assets/menu-icon8.png")}
              />
              <Text style={[styles.label, styles.text7Typo]}>สถานนะ</Text>
            </View>
          </Pressable>
          <View style={[styles.layout1, styles.layout1FlexBox]}>
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
                  style={[styles.alertOnTabbarIcon, styles.bulletIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/alert-on-tabbar1.png")}
                />
              </Pressable>
            </View>
          </View>
          <Pressable
            style={[styles.layout1, styles.layout1FlexBox]}
            onPress={() => navigation.navigate("Screen4")}
          >
            <View style={styles.tabbarTab}>
              <Image
                style={styles.menuIcon}
                resizeMode="cover"
                source={require("../assets/menu-icon9.png")}
              />
              <Text style={[styles.label, styles.text7Typo]}>รู้ข้าว</Text>
            </View>
          </Pressable>
          <Pressable
            style={[styles.layout1, styles.layout1FlexBox]}
            onPress={() => navigation.navigate("Screen2")}
          >
            <View style={styles.tabbarTab}>
              <Image
                style={styles.menuIcon}
                resizeMode="cover"
                source={require("../assets/menu-icon10.png")}
              />
              <Text style={[styles.label, styles.text7Typo]}>โปรไฟล์</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.ioshomeindicator}>
          <View style={styles.iosHomeindicatorTheme}>
            <View style={styles.homeIndicator} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  scrollviewLayout: {
    maxWidth: "100%",
    width: "100%",
    overflow: "hidden",
  },
  tabsSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  systemLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  parentSpaceBlock: {
    paddingHorizontal: 0,
    marginTop: 8,
    paddingVertical: Padding.p_5xs,
  },
  textTypo: {
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    alignSelf: "stretch",
  },
  frameFlexBox: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_sm,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  bulletIconLayout: {
    height: 8,
    width: 8,
  },
  layout1FlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text7Typo: {
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
    maxHeight: "100%",
    position: "absolute",
  },
  avatar: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.labelLB4Regular,
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
  frameGroup: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  image31Icon: {
    borderRadius: Border.br_base,
    width: 88,
    height: 58,
  },
  text2: {
    fontSize: FontSize.titleT4SemiBold_size,
    lineHeight: 26,
  },
  text3: {
    lineHeight: 18,
    fontSize: FontSize.bodyB6Regular_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.labelLB4Regular,
  },
  wrapper: {
    backgroundColor: Color.colorLavender_100,
  },
  container: {
    backgroundColor: Color.secondaryColourSecondaryCont,
    marginLeft: 8,
  },
  frame: {
    backgroundColor: Color.warningColourWarningContainer100,
    marginLeft: 8,
  },
  frameContainer: {
    flexWrap: "wrap",
    marginTop: 7,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  image31Parent: {
    shadowColor: "rgba(181, 201, 235, 0.15)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    marginTop: 8,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    paddingHorizontal: 0,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  bulletIcon1: {
    marginLeft: 6,
  },
  carousel: {
    marginTop: 8,
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
  },
  text6: {
    fontSize: FontSize.labelLB4Regular_size,
  },
  text7: {
    color: Color.labelColorLightPrimary,
    marginTop: 4,
    textAlign: "center",
    alignSelf: "stretch",
  },
  basilIconssolidsolidcommunParent: {
    marginLeft: 16,
  },
  frameParent1: {
    marginTop: 8,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
  },
  frameView: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  frameParent: {
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
  layout1: {
    alignItems: "flex-end",
    flex: 1,
  },
  systemIconsadd: {
    zIndex: 0,
    overflow: "hidden",
    width: 32,
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
    marginTop: 187,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  scrollview: {
    flex: 1,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
});

export default Screen11;
