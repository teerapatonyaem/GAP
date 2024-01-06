import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Screen5 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.scrollview}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.basilIconsoutlineoutlinegeParent}>
          <Pressable
            style={styles.foodgrainsOfRiceIconLayout}
            onPress={() => navigation.navigate("Screen11")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/basil-iconsoutlineoutlinegeneralhome.png")}
            />
          </Pressable>
          <Text style={styles.text}>รายจ่าย-รับ</Text>
        </View>
        <View style={styles.percentageSummeryCard}>
          <View style={styles.content}>
            <View style={styles.textBodyInCard}>
              <Text style={styles.loremIpsum}>นาแปลงใหญ่สีเขียว</Text>
              <View style={styles.number}>
                <Text style={[styles.text1, styles.textClr]}>-฿5,760</Text>
                <View style={styles.percentage}>
                  <Image
                    style={styles.systemIconsarrowSortSmall}
                    resizeMode="cover"
                    source={require("../assets/1-system-iconsarrowsortsmall1.png")}
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
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={styles.progressCircleItem}
                resizeMode="cover"
                source={require("../assets/ellipse-21.png")}
              />
              <Text style={[styles.percent, styles.labelTypo]}>75%</Text>
            </View>
            <Text style={[styles.label, styles.labelTypo]}>75%</Text>
          </View>
        </View>
        <View style={styles.view}>
          <Pressable
            style={styles.groupShadowBox}
            onPress={() => navigation.navigate("Screen6")}
          >
            <Text style={[styles.text3, styles.textTypo2]}>-฿18,600</Text>
            <Text style={[styles.text4, styles.textTypo2]}>รายจ่าย</Text>
          </Pressable>
          <View style={[styles.group, styles.groupShadowBox]}>
            <Text style={styles.textTypo1}>฿7,620</Text>
            <Text style={[styles.text6, styles.textTypo1]}>รายรับ</Text>
          </View>
        </View>
        <View style={styles.chartPieParent}>
          <Image
            style={styles.chartPieIcon}
            resizeMode="cover"
            source={require("../assets/chart-pie1.png")}
          />
          <View
            style={[
              styles.foodgrainsOfRiceWrapper,
              styles.foodgrainsWrapperShadowBox,
            ]}
          >
            <Image
              style={[
                styles.foodgrainsOfRiceIcon,
                styles.foodgrainsOfRiceIconLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/2-foodgrainsofrice.png")}
            />
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textClr: {
    color: Color.errorColourError500,
    textAlign: "left",
  },
  labelTypo: {
    color: Color.descriptiveTextColourTextNormal700,
    width: 96,
    textAlign: "center",
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
  },
  textTypo2: {
    lineHeight: 18,
    fontSize: FontSize.buttonBT5SemiBold_size,
    fontFamily: FontFamily.buttonBT5SemiBold,
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
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  textTypo1: {
    color: Color.secondaryColourOnSecondaryCont,
    lineHeight: 18,
    fontSize: FontSize.buttonBT5SemiBold_size,
    textAlign: "left",
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
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
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  foodgrainsOfRiceIconLayout: {
    height: 24,
    width: 24,
  },
  textTypo: {
    lineHeight: 22,
    fontSize: FontSize.buttonBT5SemiBold_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    alignSelf: "stretch",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  text: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
    lineHeight: 28,
    fontSize: FontSize.titleT4SemiBold_size,
    flex: 1,
  },
  basilIconsoutlineoutlinegeParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  loremIpsum: {
    color: Color.descriptiveTextColourTextLight500,
    textAlign: "left",
    fontFamily: FontFamily.labelLB4Regular,
    lineHeight: 24,
    fontSize: FontSize.labelLB4Regular_size,
    alignSelf: "stretch",
  },
  text1: {
    fontSize: FontSize.displayD5SemiBold_size,
    lineHeight: 32,
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
  },
  systemIconsarrowSortSmall: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  text2: {
    lineHeight: 26,
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
    fontSize: FontSize.titleT4SemiBold_size,
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
    fontSize: FontSize.labelLB4Regular_size,
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
    fontSize: FontSize.titleT4SemiBold_size,
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
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.surfaceColourWhiteSurface,
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
  chartPieIcon: {
    width: 133,
    height: 133,
    zIndex: 0,
  },
  foodgrainsOfRiceIcon: {
    overflow: "hidden",
  },
  foodgrainsOfRiceWrapper: {
    top: 57,
    left: 232,
    zIndex: 1,
    position: "absolute",
  },
  chartPieParent: {
    flexWrap: "wrap",
    padding: Padding.p_13xl,
    marginTop: 8,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  text7: {
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
  },
  text8: {
    fontFamily: FontFamily.labelLB4Regular,
    lineHeight: 22,
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
    width: 412,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
  },
  scrollview: {
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
});

export default Screen5;
