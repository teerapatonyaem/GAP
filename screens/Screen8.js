import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Screen8 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.scrollview}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      <View style={[styles.frameParent, styles.tabbarLayout]}>
        <View style={styles.basilIconsoutlineoutlinegeParent}>
          <Image
            style={styles.foodgrainsOfRiceIconLayout}
            resizeMode="cover"
            source={require("../assets/basil-iconsoutlineoutlinegeneralhome.png")}
          />
          <Text style={styles.text}>รายจ่าย-รับ</Text>
        </View>
        <View style={[styles.percentageSummeryCard, styles.tabbarShadowBox]}>
          <View style={styles.content}>
            <View style={styles.textBodyInCard}>
              <Text style={styles.loremIpsum}>นาแปลงใหญ่สีเขียว</Text>
              <View style={styles.number}>
                <Text style={[styles.text1, styles.textClr]}>-฿5,760</Text>
                <View style={styles.percentage}>
                  <Image
                    style={styles.systemIconsarrowSortSmall}
                    resizeMode="cover"
                    source={require("../assets/1-system-iconsarrowsortsmall.png")}
                  />
                  <Text style={[styles.text2, styles.textClr]}>75%</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.progressCircle}>
            <View style={styles.progressCircle1}>
              <Image
                style={styles.progressCircleChild}
                resizeMode="cover"
                source={require("../assets/ellipse-1.png")}
              />
              <Image
                style={styles.progressCircleItem}
                resizeMode="cover"
                source={require("../assets/ellipse-2.png")}
              />
              <Text style={[styles.percent, styles.labelTypo]}>75%</Text>
            </View>
            <Text style={[styles.label, styles.labelTypo]}>75%</Text>
          </View>
        </View>
        <View style={styles.view}>
          <Pressable
            style={styles.groupShadowBox}
            onPress={() => navigation.navigate("Screen4")}
          >
            <Text style={[styles.text3, styles.textTypo2]}>-฿18,600</Text>
            <Text style={[styles.text4, styles.textTypo2]}>รายจ่าย</Text>
          </Pressable>
          <View style={[styles.group, styles.groupShadowBox]}>
            <Text style={styles.textTypo1}>฿7,620</Text>
            <Text style={[styles.text6, styles.textTypo1]}>รายรับ</Text>
          </View>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.frameWrapper}>
            <View style={styles.basilIconsoutlineoutlinegeParent}>
              <View style={styles.frameView}>
                <View style={styles.foodgrainsWrapperShadowBox}>
                  <Image
                    style={[
                      styles.foodgrainsOfRiceIcon,
                      styles.foodgrainsOfRiceIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/2-foodgrainsofrice.png")}
                  />
                </View>
                <View style={styles.container}>
                  <Text style={[styles.text7, styles.textTypo]}>
                    เมล็ดพันธุ์พืช
                  </Text>
                  <Text style={[styles.text8, styles.textTypo]}>
                    แครอท 4 กก.
                  </Text>
                </View>
              </View>
              <Text style={[styles.text9, styles.textTypo2]}>฿400</Text>
            </View>
          </View>
          <View style={styles.frameWrapper1}>
            <View style={styles.basilIconsoutlineoutlinegeParent}>
              <View style={styles.frameView}>
                <View style={styles.foodgrainsWrapperShadowBox}>
                  <Image
                    style={[
                      styles.foodgrainsOfRiceIcon,
                      styles.foodgrainsOfRiceIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/2-foodgrainsofrice.png")}
                  />
                </View>
                <View style={styles.container}>
                  <Text style={[styles.text7, styles.textTypo]}>
                    เมล็ดพันธุ์พืช
                  </Text>
                  <Text style={[styles.text8, styles.textTypo]}>
                    แครอท 2 กก.
                  </Text>
                </View>
              </View>
              <Text style={[styles.text9, styles.textTypo2]}>฿320</Text>
            </View>
          </View>
          <View style={styles.frameWrapper1}>
            <View style={styles.basilIconsoutlineoutlinegeParent}>
              <View style={styles.frameView}>
                <View style={styles.foodgrainsWrapperShadowBox}>
                  <Image
                    style={[
                      styles.foodgrainsOfRiceIcon,
                      styles.foodgrainsOfRiceIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/2-foodgrainsofrice.png")}
                  />
                </View>
                <View style={styles.container}>
                  <Text style={[styles.text7, styles.textTypo]}>
                    เมล็ดพันธุ์พืช
                  </Text>
                  <Text style={[styles.text8, styles.textTypo]}>1แปลง</Text>
                </View>
              </View>
              <Text style={[styles.text9, styles.textTypo2]}>฿2,000</Text>
            </View>
          </View>
          <View style={styles.frameWrapper1}>
            <View style={styles.basilIconsoutlineoutlinegeParent}>
              <View style={styles.frameView}>
                <View style={styles.foodgrainsWrapperShadowBox}>
                  <Image
                    style={[
                      styles.foodgrainsOfRiceIcon,
                      styles.foodgrainsOfRiceIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/2-foodgrainsofrice.png")}
                  />
                </View>
                <View style={styles.container}>
                  <Text style={[styles.text7, styles.textTypo]}>
                    เมล็ดพันธุ์พืช
                  </Text>
                  <Text style={[styles.text8, styles.textTypo]}>2แปลง</Text>
                </View>
              </View>
              <Text style={[styles.text9, styles.textTypo2]}>฿4,500</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.tabbar, styles.tabbarPosition]}>
        <View style={[styles.tabs, styles.tabsLayout]}>
          <Pressable
            style={styles.layout}
            onPress={() => navigation.navigate("Screen8")}
          >
            <View style={styles.tabbarTab}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/menu-icon4.png")}
              />
              <Text style={styles.label1}>รับ-จ่าย</Text>
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
              <Text style={styles.label1}>สถานนะ</Text>
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
                  style={[styles.alertOnTabbarIcon, styles.tabbarPosition]}
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
              <Text style={styles.label1}>รู้ข้าว</Text>
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
                  style={[styles.alertOnTabbarIcon, styles.tabbarPosition]}
                  resizeMode="cover"
                  source={require("../assets/alert-on-tabbar1.png")}
                />
              </View>
              <Text style={styles.label1}>โปรไฟล์</Text>
            </View>
          </Pressable>
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
  scrollViewContent: {
    flexDirection: "column",
    paddingTop: 28,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tabbarLayout: {
    width: 412,
    paddingHorizontal: Padding.p_base,
  },
  tabbarShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    alignItems: "center",
    backgroundColor: Color.baseColourWhite,
  },
  textClr: {
    color: Color.errorColourError500,
    textAlign: "left",
  },
  labelTypo: {
    color: Color.descriptiveTextColourTextNormal700,
    width: 96,
    textAlign: "center",
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
  },
  textTypo2: {
    lineHeight: 18,
    fontSize: FontSize.bodySmalls300_size,
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
  },
  groupShadowBox: {
    padding: Padding.p_5xs,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(181, 201, 235, 0.15)",
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    alignItems: "center",
    flex: 1,
    backgroundColor: Color.baseColourWhite,
  },
  textTypo1: {
    color: Color.secondaryColourOnSecondaryCont,
    lineHeight: 18,
    fontSize: FontSize.bodySmalls300_size,
    textAlign: "left",
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
  },
  foodgrainsOfRiceIconLayout: {
    height: 24,
    width: 24,
  },
  textTypo: {
    lineHeight: 22,
    fontSize: FontSize.bodySmalls300_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    alignSelf: "stretch",
  },
  tabbarPosition: {
    zIndex: 1,
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
  text: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
    lineHeight: 28,
    fontSize: FontSize.buttonBT3SemiBold_size,
    flex: 1,
  },
  basilIconsoutlineoutlinegeParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  loremIpsum: {
    color: Color.baseColourBase500,
    textAlign: "left",
    fontFamily: FontFamily.bodyB5Regular,
    lineHeight: 24,
    fontSize: FontSize.selectorS4Regular_size,
    alignSelf: "stretch",
  },
  text1: {
    fontSize: FontSize.bodyXXL400_size,
    lineHeight: 32,
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
  },
  systemIconsarrowSortSmall: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  text2: {
    lineHeight: 26,
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
    fontSize: FontSize.buttonBT3SemiBold_size,
    color: Color.errorColourError500,
  },
  percentage: {
    marginLeft: 4,
    display: "none",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    flexDirection: "row",
    alignItems: "center",
  },
  textBodyInCard: {
    justifyContent: "center",
    flex: 1,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  progressCircleChild: {
    height: 80,
    width: 80,
    left: 8,
    top: 8,
    position: "absolute",
  },
  progressCircleItem: {
    borderRadius: Border.br_5xs,
    height: 80,
    width: 80,
    left: 8,
    top: 8,
    position: "absolute",
  },
  percent: {
    top: 36,
    left: 0,
    position: "absolute",
    lineHeight: 24,
    fontSize: FontSize.selectorS4Regular_size,
    color: Color.descriptiveTextColourTextNormal700,
  },
  progressCircle1: {
    height: 96,
    width: 96,
  },
  label: {
    display: "none",
    color: Color.descriptiveTextColourTextNormal700,
    lineHeight: 28,
    fontSize: FontSize.buttonBT3SemiBold_size,
  },
  progressCircle: {
    marginLeft: 8,
  },
  percentageSummeryCard: {
    borderRadius: Border.br_xs,
    shadowColor: "rgba(59, 89, 152, 0.1)",
    shadowRadius: 15,
    elevation: 15,
    paddingLeft: Padding.p_base,
    paddingRight: Padding.p_5xs,
    marginTop: 8,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text3: {
    color: Color.errorColourError500,
    textAlign: "left",
  },
  text4: {
    color: Color.errorColourError500,
    textAlign: "left",
    marginTop: 8,
  },
  text6: {
    marginTop: 8,
  },
  group: {
    marginLeft: -16,
  },
  view: {
    alignItems: "baseline",
    marginTop: 8,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  foodgrainsOfRiceIcon: {
    overflow: "hidden",
  },
  foodgrainsWrapperShadowBox: {
    borderRadius: Border.br_13xl,
    padding: Padding.p_5xs,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(181, 201, 235, 0.15)",
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.baseColourWhite,
  },
  text7: {
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
  },
  text8: {
    fontFamily: FontFamily.bodyB5Regular,
  },
  container: {
    marginLeft: 15,
    flex: 1,
  },
  frameView: {
    width: 140,
    flexDirection: "row",
  },
  text9: {
    color: Color.textLinkColourTextLinkSecondary,
    textAlign: "right",
    display: "flex",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  frameWrapper: {
    alignSelf: "stretch",
  },
  frameWrapper1: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  frameGroup: {
    marginTop: 8,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent: {
    paddingBottom: Padding.p_5xs,
    zIndex: 0,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  label1: {
    fontSize: FontSize.selectorS6SemiBold_size,
    lineHeight: 14,
    color: Color.walledGarden1000,
    marginTop: 4,
    fontFamily: FontFamily.bodyB5Regular,
    textAlign: "center",
  },
  tabbarTab: {
    alignItems: "center",
  },
  layout: {
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
    flexDirection: "row",
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
    bottom: 0,
    borderRadius: Border.br_base,
    shadowColor: "rgba(15, 172, 31, 0.24)",
    shadowRadius: 8,
    elevation: 8,
    paddingVertical: Padding.p_5xs,
    left: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    alignItems: "center",
    backgroundColor: Color.baseColourWhite,
    paddingHorizontal: Padding.p_base,
    width: 412,
  },
  scrollview: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.baseColourWhite,
  },
});

export default Screen8;
