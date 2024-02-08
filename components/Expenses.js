import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const Expenses = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameParent}>
      <View style={styles.basilIconsoutlineoutlinegeParent}>
        <Pressable
          style={styles.foodgrainsOfRiceIconLayout}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/basil-iconsoutlineoutlinegeneralhome.png")}
          />
        </Pressable>
        <Text style={styles.text}>รายจ่าย-รับ</Text>
      </View>
      <View style={[styles.percentageSummeryCard, styles.viewSpaceBlock]}>
        <View style={styles.content}>
          <View style={styles.textBodyInCard}>
            <Text style={styles.loremIpsum}>นาแปลงใหญ่สีเขียว</Text>
            <View style={styles.number}>
              <Text style={[styles.text1, styles.textTypo3]}>-฿5,760</Text>
              <View style={styles.percentage}>
                <Image
                  style={styles.systemIconsarrowSortSmall}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconsarrowsortsmall.png")}
                />
                <Text style={[styles.text2, styles.textTypo3]}>75%</Text>
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
      <View style={[styles.view, styles.viewSpaceBlock]}>
        <View style={[styles.parent, styles.groupShadowBox]}>
          <Text style={[styles.text3, styles.textTypo2]}>-฿18,600</Text>
          <Text style={[styles.text4, styles.textTypo2]}>รายจ่าย</Text>
        </View>
        <View style={[styles.group, styles.groupShadowBox]}>
          <Text style={styles.textTypo1}>฿7,620</Text>
          <Text style={[styles.text6, styles.textTypo1]}>รายรับ</Text>
        </View>
      </View>
      <View style={styles.viewSpaceBlock}>
        <View style={styles.basilIconsoutlineoutlinegeParent}>
          <View style={styles.frameView}>
            <View style={styles.wrapperShadowBox}>
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
              <Text style={[styles.text8, styles.textTypo]}>แครอท</Text>
            </View>
          </View>
          <Text style={[styles.text9, styles.textTypo2]}>-฿100</Text>
        </View>
        <View style={[styles.frameParent1, styles.frameParentFlexBox]}>
          <View style={[styles.frameParent2, styles.text9FlexBox]}>
            <View style={styles.wrapperShadowBox}>
              <Image
                style={[
                  styles.foodgrainsOfRiceIcon,
                  styles.foodgrainsOfRiceIconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/3-farmfertilizer.png")}
              />
            </View>
            <View style={styles.container}>
              <Text style={[styles.text7, styles.textTypo]}>ปุ๋ยเเละยา</Text>
              <Text style={[styles.text8, styles.textTypo]}>ปุ๋ยกระต่าย</Text>
            </View>
          </View>
          <Text style={[styles.text9, styles.textTypo2]}>-฿10,000</Text>
        </View>
        <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
          <View style={[styles.frameParent2, styles.text9FlexBox]}>
            <View style={styles.wrapperShadowBox}>
              <Image
                style={[
                  styles.foodgrainsOfRiceIcon,
                  styles.foodgrainsOfRiceIconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/2-foodfarmer2.png")}
              />
            </View>
            <View style={styles.container}>
              <Text style={[styles.text7, styles.textTypo]}>เเรงงาน</Text>
              <Text style={[styles.text8, styles.textTypo]}>ทั่วไป</Text>
            </View>
          </View>
          <Text style={[styles.text9, styles.textTypo2]}>-฿2,000</Text>
        </View>
        <View style={[styles.frameParent1, styles.frameParentFlexBox]}>
          <View style={[styles.frameParent2, styles.text9FlexBox]}>
            <View style={styles.wrapperShadowBox}>
              <Image
                style={[
                  styles.foodgrainsOfRiceIcon,
                  styles.foodgrainsOfRiceIconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/3-farmtractor.png")}
              />
            </View>
            <View style={styles.container}>
              <Text style={[styles.text7, styles.textTypo]}>ค่ารถจักร</Text>
              <Text style={[styles.text8, styles.textTypo]}>ปรับแต่งดิน</Text>
            </View>
          </View>
          <Text style={[styles.text9, styles.textTypo2]}>-฿6,500</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  textTypo3: {
    color: Color.errorColourError500,
    textAlign: "left",
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
  },
  labelTypo: {
    color: Color.descriptiveTextColourTextNormal700,
    width: 96,
    textAlign: "center",
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
    backgroundColor: Color.baseColourWhite,
    flex: 1,
    alignItems: "center",
  },
  textTypo2: {
    lineHeight: 18,
    fontSize: FontSize.bodySmalls300_size,
    color: Color.errorColourError500,
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
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
  frameParentFlexBox: {
    marginTop: 4,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text9FlexBox: {
    alignSelf: "stretch",
    flex: 1,
  },
  icon: {
    width: "100%",
    height: "100%",
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
  },
  systemIconsarrowSortSmall: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  text2: {
    lineHeight: 26,
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
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
    color: Color.descriptiveTextColourTextNormal700,
    lineHeight: 24,
    fontSize: FontSize.selectorS4Regular_size,
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
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: Color.baseColourWhite,
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  text3: {
    textAlign: "left",
  },
  text4: {
    marginTop: 8,
    textAlign: "left",
  },
  parent: {
    zIndex: 1,
  },
  text6: {
    marginTop: 8,
  },
  group: {
    marginLeft: -16,
    zIndex: 0,
  },
  view: {
    alignItems: "baseline",
    flexDirection: "row",
  },
  foodgrainsOfRiceIcon: {
    overflow: "hidden",
  },
  wrapperShadowBox: {
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
    backgroundColor: Color.baseColourWhite,
    flexDirection: "row",
    alignItems: "center",
  },
  text7: {
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
    lineHeight: 22,
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
    textAlign: "right",
    display: "flex",
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent2: {
    flex: 1,
    flexDirection: "row",
  },
  frameParent1: {
    alignItems: "center",
  },
  frameParent3: {
    alignItems: "flex-end",
  },
  frameParent: {
    width: 412,
    paddingHorizontal: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    zIndex: 0,
    alignItems: "center",
  },
});

export default Expenses;
