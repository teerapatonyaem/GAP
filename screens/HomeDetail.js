import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const HomeDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homedetail}>
      <ScrollView
        style={styles.frameParent}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.frameGroup}>
          <View style={styles.frameWrapper}>
            <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
              <View style={styles.avatarParent}>
                <Image
                  style={styles.avatarIcon}
                  resizeMode="cover"
                  source={require("../assets/avatar.png")}
                />
                <View style={styles.parent}>
                  <Text style={styles.text}>สวัสดี</Text>
                  <Text style={styles.text1}>เกษตรกร</Text>
                </View>
              </View>
              <Image
                style={styles.iconixtolinearnotificationU}
                resizeMode="cover"
                source={require("../assets/iconixtolinearnotificationunread.png")}
              />
            </View>
          </View>
          <Pressable
            style={[styles.framePressable, styles.frameSpaceBlock]}
            onPress={() => navigation.navigate("Modal4")}
          >
            <View
              style={[
                styles.grassLandscapeFieldVectorPParent,
                styles.grassShadowBox,
              ]}
            >
              <Image
                style={styles.grassLandscapeFieldVectorP}
                resizeMode="cover"
                source={require("../assets/grass-landscape-field-vector-png-images-nature-landscape-vector-with-green-field-grass-trees-blue-sky-and-clouds-suitable-for-background-or-illustration-nature-clipart-day-landscape-png-image-for-free-download-1.png")}
              />
              <Pressable
                style={[styles.removebgPreview1Parent, styles.removebgPosition]}
                onPress={() => navigation.navigate("Plot")}
              >
                <Image
                  style={styles.removebgPreview1Icon}
                  resizeMode="cover"
                  source={require("../assets/-20240110-224716276removebgpreview-1.png")}
                />
                <View style={styles.group}>
                  <Text style={[styles.text2, styles.textFlexBox]}>
                    นาแปลงใหญ่ ใบเขียว
                  </Text>
                  <Text style={styles.textTypo}>กข 16 จำนวน 12 ไร่</Text>
                  <Text
                    style={[styles.text4, styles.textTypo]}
                  >{`10/04/2024 - 15/09/2024 `}</Text>
                </View>
              </Pressable>
            </View>
            <View
              style={[
                styles.grassLandscapeFieldVectorPGroup,
                styles.grassShadowBox,
              ]}
            >
              <Image
                style={styles.grassLandscapeFieldVectorP}
                resizeMode="cover"
                source={require("../assets/grass-landscape-field-vector-png-images-nature-landscape-vector-with-green-field-grass-trees-blue-sky-and-clouds-suitable-for-background-or-illustration-nature-clipart-day-landscape-png-image-for-free-download-1.png")}
              />
              <View
                style={[styles.removebgPreview1Group, styles.removebgPosition]}
              >
                <Image
                  style={styles.removebgPreview1Icon}
                  resizeMode="cover"
                  source={require("../assets/-20240110-224716276removebgpreview-1.png")}
                />
                <View style={styles.group}>
                  <Text style={[styles.text2, styles.textFlexBox]}>
                    นาแปลงใหญ่ ใบเขียว
                  </Text>
                  <Text style={styles.textTypo}>กข 16 จำนวน 12 ไร่</Text>
                  <Text
                    style={[styles.text4, styles.textTypo]}
                  >{`10/04/2024 - 15/09/2024 `}</Text>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
        <View style={[styles.frameView, styles.grassShadowBox]}>
          <Text style={styles.text8}>จัดการแปลง</Text>
          <View style={[styles.frameParent1, styles.parentWrapperSpaceBlock]}>
            <Pressable
              style={styles.frameParent2}
              onPress={() => navigation.navigate("PlotSurvey")}
            >
              <View
                style={[styles.image35Wrapper, styles.parentWrapperSpaceBlock]}
              >
                <Image
                  style={styles.image35Icon}
                  resizeMode="cover"
                  source={require("../assets/image-35.png")}
                />
              </View>
              <Text style={[styles.text9, styles.text9Typo]}>สำรวจ</Text>
            </Pressable>
            <Pressable
              style={styles.frameParent3}
              onPress={() => navigation.navigate("Member")}
            >
              <View
                style={[styles.image33Wrapper, styles.parentWrapperSpaceBlock]}
              >
                <Image
                  style={styles.image35Icon}
                  resizeMode="cover"
                  source={require("../assets/image-33.png")}
                />
              </View>
              <Text style={[styles.text9, styles.text9Typo]}>สมาชิก</Text>
            </Pressable>
            <Pressable
              style={styles.frameParent3}
              onPress={() => navigation.navigate("RiceInfo")}
            >
              <View
                style={[styles.image37Wrapper, styles.parentWrapperSpaceBlock]}
              >
                <Image
                  style={styles.image35Icon}
                  resizeMode="cover"
                  source={require("../assets/image-37.png")}
                />
              </View>
              <Text style={[styles.text9, styles.text9Typo]}>องค์ความรู้</Text>
            </Pressable>
            <Pressable
              style={styles.frameParent3}
              onPress={() => navigation.navigate("GAPCertify")}
            >
              <View
                style={[styles.image34Wrapper, styles.parentWrapperSpaceBlock]}
              >
                <Image
                  style={styles.image35Icon}
                  resizeMode="cover"
                  source={require("../assets/image-34.png")}
                />
              </View>
              <Text style={[styles.text9, styles.text9Typo]}>ยื่น GAP</Text>
            </Pressable>
          </View>
        </View>
        <ImageBackground
          style={styles.gap1Icon}
          resizeMode="cover"
          source={require("../assets/gap1.png")}
        />
      </ScrollView>
      <View style={styles.tabbar}>
        <View style={[styles.tabs, styles.tabsLayout]}>
          <Pressable
            style={styles.layout}
            onPress={() => navigation.navigate("Expense")}
          >
            <View style={styles.tabbarTab}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/menu-icon.png")}
              />
              <Text style={[styles.label, styles.text9Typo]}>รับ-จ่าย</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.layout}
            onPress={() => navigation.navigate("Status1")}
          >
            <View style={styles.tabbarTab}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/menu-icon1.png")}
              />
              <Text style={[styles.label, styles.text9Typo]}>เอกสาร</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.layout}
            onPress={() => navigation.navigate("Modal1")}
          >
            <View style={styles.tabbarTab2}>
              <View style={styles.menuIcon2}>
                <Image
                  style={styles.systemIconsadd}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconsadd.png")}
                />
                <Image
                  style={[styles.alertOnTabbarIcon, styles.removebgPosition]}
                  resizeMode="cover"
                  source={require("../assets/alert-on-tabbar.png")}
                />
              </View>
            </View>
          </Pressable>
          <Pressable
            style={styles.layout}
            onPress={() => navigation.navigate("RiceInfo")}
          >
            <View style={styles.tabbarTab}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/menu-icon2.png")}
              />
              <Text style={[styles.label, styles.text9Typo]}>รู้ข้าว</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.layout}
            onPress={() => navigation.navigate("Proofile")}
          >
            <View style={styles.tabbarTab}>
              <View style={styles.menuIcon2}>
                <Image
                  style={[styles.farmerIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/farmer.png")}
                />
                <Image
                  style={[styles.alertOnTabbarIcon, styles.removebgPosition]}
                  resizeMode="cover"
                  source={require("../assets/alert-on-tabbar1.png")}
                />
              </View>
              <Text style={[styles.label, styles.text9Typo]}>โปรไฟล์</Text>
            </View>
          </Pressable>
        </View>
        <View style={[styles.ioshomeindicator, styles.tabsLayout]}>
          <View style={styles.iosHomeindicatorTheme}>
            <View style={styles.homeIndicator} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  grassShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  removebgPosition: {
    zIndex: 1,
    position: "absolute",
  },
  textFlexBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textTypo: {
    fontFamily: FontFamily.heading03,
    lineHeight: 20,
    fontSize: FontSize.bodySmalls300_size,
    color: Color.advertisingGreen1000,
    fontWeight: "600",
    marginTop: 8,
    textAlign: "center",
    alignSelf: "stretch",
  },
  parentWrapperSpaceBlock: {
    padding: Padding.p_5xs,
    alignItems: "center",
  },
  text9Typo: {
    marginTop: 4,
    fontSize: FontSize.selectorS6SemiBold_size,
    textAlign: "center",
  },
  tabsLayout: {
    width: 375,
    alignItems: "center",
  },
  iconLayout: {
    height: 28,
    width: 28,
  },
  avatarIcon: {
    width: 48,
    height: 48,
  },
  text: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.bodyRegular400_size,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.iBMPlexSansThaiMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  text1: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.iBMPlexSansThaiMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.bodyRegular400_size,
  },
  parent: {
    marginLeft: 24,
  },
  avatarParent: {
    flexDirection: "row",
    justifyContent: "center",
  },
  iconixtolinearnotificationU: {
    width: 24,
    height: 24,
  },
  frameContainer: {
    justifyContent: "space-between",
    width: 412,
    alignItems: "center",
  },
  frameWrapper: {
    paddingTop: Padding.p_9xl,
    justifyContent: "center",
    alignItems: "center",
  },
  grassLandscapeFieldVectorP: {
    width: 307,
    height: 307,
    zIndex: 0,
    borderRadius: Border.br_base,
  },
  removebgPreview1Icon: {
    width: 59,
    height: 84,
  },
  text2: {
    fontSize: FontSize.titleT3SemiBold_size,
    letterSpacing: -0.2,
    lineHeight: 32,
    fontFamily: FontFamily.athitiSemiBold,
    color: Color.advertisingGreen1000,
    fontWeight: "600",
    display: "flex",
    textAlign: "center",
    alignSelf: "stretch",
  },
  text4: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  group: {
    marginLeft: 8,
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: "white", 
    borderRadius: Border.br_base,
    width: 275,
    height: 91,
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  removebgPreview1Parent: {
    padding: Padding.p_5xs,
    alignItems: "center",
    height: 91,
    width: 275,
    left: 17,
    top: 248,
    zIndex: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.gray00,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    flexDirection: "row",
    justifyContent: "center",
  },
  grassLandscapeFieldVectorPParent: {
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(152, 152, 152, 0.5)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  removebgPreview1Group: {
    padding: Padding.p_5xs,
    alignItems: "center",
    height: 91,
    width: 275,
    left: 17,
    top: 248,
    zIndex: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.gray00,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    flexDirection: "row",
    justifyContent: "center",
  },
  grassLandscapeFieldVectorPGroup: {
    marginLeft: 8,
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(152, 152, 152, 0.5)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  framePressable: {
    marginTop: 8,
    alignSelf: "stretch",
    flex: 1,
  },
  frameGroup: {
    height: 423,
    width: 412,
    alignItems: "center",
  },
  text8: {
    lineHeight: 22,
    fontFamily: FontFamily.selectorS6SemiBold,
    fontSize: FontSize.bodySmalls300_size,
    fontWeight: "600",
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  image35Icon: {
    width: 40,
    height: 40,
  },
  image35Wrapper: {
    borderRadius: Border.br_5xs,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.gray00,
    padding: Padding.p_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  text9: {
    lineHeight: 18,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.iBMPlexSansThaiMedium,
    fontWeight: "500",
    marginTop: 4,
    fontSize: FontSize.selectorS6SemiBold_size,
    alignSelf: "stretch",
  },
  frameParent2: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  image33Wrapper: {
    borderRadius: Border.br_5xs,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.gray00,
    padding: Padding.p_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  frameParent3: {
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  image37Wrapper: {
    borderRadius: Border.br_5xs,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.gray00,
    padding: Padding.p_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  image34Wrapper: {
    borderRadius: Border.br_5xs,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.gray00,
    padding: Padding.p_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  frameParent1: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
  },
  frameView: {
    shadowColor: "rgba(6, 28, 61, 0.08)",
    shadowRadius: 32,
    elevation: 32,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    marginTop: 8,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    width: 412,
  },
  gap1Icon: {
    width: 316,
    height: 210,
    borderRadius: Border.br_5xs,
    marginTop: 8,
  },
  frameParent: {
    maxWidth: 412,
    width: 412,
    overflow: "hidden",
    flex: 1,
  },
  label: {
    lineHeight: 14,
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    color: Color.walledGarden1000,
  },
  tabbarTab: {
    alignItems: "center",
  },
  layout: {
    alignItems: "flex-end",
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
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
    display: "none",
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
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
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
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    backgroundColor: Color.gray50,
    paddingVertical: Padding.p_5xs,
    marginTop: 8,
    paddingHorizontal: Padding.p_base,
    width: 412,
    alignItems: "center",
  },
  homedetail: {
    backgroundColor: Color.colorGray_100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default HomeDetail;
