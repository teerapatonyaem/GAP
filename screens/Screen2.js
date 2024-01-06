import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, Border, Padding, FontSize, Color } from "../GlobalStyles";

const Screen2 = () => {
  return (
    <ScrollView
      style={[styles.scrollview, styles.scrollviewLayout]}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      <View style={styles.inner}>
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View style={styles.avatarParent}>
              <View style={styles.avatar}>
                <Image
                  style={[
                    styles.circle64invisibleIcon,
                    styles.scrollviewLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/circle64invisible.png")}
                />
              </View>
              <Text style={[styles.text, styles.textTypo1]}>นายเกษตรกร</Text>
            </View>
            <View style={[styles.wrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.text1, styles.textTypo1]}>แก้ไขโปรไฟล์</Text>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.parent}>
              <Text style={[styles.text2, styles.textTypo]}>
                ชื่อ - นามสกุล
              </Text>
              <Text style={[styles.text3, styles.textSpaceBlock]}>
                นายเกษตรกร มั่งมี
              </Text>
              <Text style={[styles.text4, styles.textSpaceBlock]}>
                เลขที่บัตรประจำตัวประชาชน
              </Text>
              <Text style={[styles.text3, styles.textSpaceBlock]}>
                113610905008-3
              </Text>
            </View>
            <View style={styles.frameView}>
              <View style={styles.parent}>
                <Text style={[styles.text6, styles.textTypo]}>
                  สำเนาทะเบียนบ้าน
                </Text>
                <View
                  style={[
                    styles.attachFileParent,
                    styles.frameContainerFlexBox,
                  ]}
                >
                  <Text style={[styles.attachFile, styles.textTypo]}>
                    Attach file
                  </Text>
                  <View style={[styles.uploadWrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.upload, styles.textTypo]}>Upload</Text>
                  </View>
                </View>
              </View>
              <View style={styles.textSpaceBlock}>
                <Text style={[styles.text6, styles.textTypo]}>
                  สำเนาบัตรประชาชน
                </Text>
                <View
                  style={[
                    styles.attachFileParent,
                    styles.frameContainerFlexBox,
                  ]}
                >
                  <Text style={[styles.attachFile, styles.textTypo]}>
                    Attach file
                  </Text>
                  <View style={[styles.uploadWrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.upload, styles.textTypo]}>Upload</Text>
                  </View>
                </View>
              </View>
              <View style={styles.textSpaceBlock}>
                <Text style={[styles.text8, styles.textTypo]}>
                  การจดทะเบียนนิติบุคคล
                </Text>
                <View
                  style={[
                    styles.attachFileParent,
                    styles.frameContainerFlexBox,
                  ]}
                >
                  <Text style={[styles.attachFile, styles.textTypo]}>
                    Attach file
                  </Text>
                  <View style={[styles.uploadWrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.upload, styles.textTypo]}>Upload</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.tabbar}>
        <View style={styles.tabs}>
          <View style={styles.layout}>
            <View style={styles.tabbarTab}>
              <Image
                style={styles.menuIcon}
                resizeMode="cover"
                source={require("../assets/menu-icon7.png")}
              />
              <Text style={styles.label}>รับ-จ่าย</Text>
            </View>
          </View>
          <View style={styles.layout}>
            <View style={styles.tabbarTab}>
              <Image
                style={styles.menuIcon}
                resizeMode="cover"
                source={require("../assets/menu-icon8.png")}
              />
              <Text style={styles.label}>สถานนะ</Text>
            </View>
          </View>
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
                  source={require("../assets/alert-on-tabbar1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.layout}>
            <View style={styles.tabbarTab}>
              <Image
                style={styles.menuIcon}
                resizeMode="cover"
                source={require("../assets/menu-icon9.png")}
              />
              <Text style={styles.label}>รู้ข้าว</Text>
            </View>
          </View>
          <View style={styles.layout}>
            <View style={styles.tabbarTab}>
              <Image
                style={styles.menuIcon}
                resizeMode="cover"
                source={require("../assets/menu-icon10.png")}
              />
              <Text style={styles.label}>โปรไฟล์</Text>
            </View>
          </View>
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
    justifyContent: "center",
  },
  scrollviewLayout: {
    maxWidth: "100%",
    width: "100%",
    overflow: "hidden",
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
  },
  wrapperFlexBox: {
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  frameContainerFlexBox: {
    padding: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  textTypo: {
    fontSize: FontSize.labelLB4Regular_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  textSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  circle64invisibleIcon: {
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
    width: 64,
    height: 64,
  },
  text: {
    fontSize: FontSize.titleT4SemiBold_size,
    marginLeft: 9,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    lineHeight: 28,
  },
  avatarParent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  text1: {
    fontSize: FontSize.buttonBT5SemiBold_size,
    textTransform: "capitalize",
    color: Color.surfaceColourWhiteSurface,
  },
  wrapper: {
    backgroundColor: Color.primary500,
    marginLeft: 28,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
  },
  frameGroup: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  text2: {
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
    fontSize: FontSize.labelLB4Regular_size,
    lineHeight: 28,
    alignSelf: "stretch",
  },
  text3: {
    fontFamily: FontFamily.labelLB4Regular,
    fontSize: FontSize.labelLB4Regular_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    lineHeight: 28,
  },
  text4: {
    fontSize: FontSize.labelLB4Regular_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
    lineHeight: 28,
  },
  parent: {
    alignSelf: "stretch",
  },
  text6: {
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
    fontSize: FontSize.labelLB4Regular_size,
    lineHeight: 28,
  },
  attachFile: {
    fontFamily: FontFamily.labelLB4Regular,
    lineHeight: 28,
  },
  upload: {
    fontWeight: "500",
    fontFamily: FontFamily.iBMPlexSansThaiMedium,
    lineHeight: 28,
  },
  uploadWrapper: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  attachFileParent: {
    backgroundColor: Color.gray50,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text8: {
    lineHeight: 24,
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
    fontSize: FontSize.labelLB4Regular_size,
  },
  frameView: {
    marginTop: 24,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameContainer: {
    backgroundColor: Color.secondary50,
    opacity: 0.8,
    marginTop: 32,
    justifyContent: "center",
  },
  frameParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  inner: {
    width: 412,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
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
    fontFamily: FontFamily.labelLB4Regular,
  },
  tabbarTab: {
    alignItems: "center",
  },
  layout: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
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
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
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
    marginTop: 68,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  scrollview: {
    flex: 1,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
});

export default Screen2;
