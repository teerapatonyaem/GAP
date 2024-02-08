import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FieldInformation from "../components/FieldInformation";
import WeatherInformation from "../components/WeatherInformation";
import PlotInformation from "../components/PlotInformation";
import Lastwork from "../components/Lastwork";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Plot = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.plot, styles.plotBg]}>
      <View style={styles.frameParent}>
        <View
          style={[styles.iconixtolineararrowLeft1Parent, styles.labelFlexBox]}
        >
          <Pressable
            style={styles.iconixtolineararrowLeft1Layout}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/iconixtolineararrowleft1.png")}
            />
          </Pressable>
          <Text style={styles.text}>แปลงของฉัน</Text>
        </View>
        <FieldInformation />
        <WeatherInformation />
        <PlotInformation />
        <Lastwork />
        <View style={styles.input}>
          <View style={styles.input1}>
            <View style={styles.labelFlexBox}>
              <Text style={[styles.label1, styles.text1Typo]}>รายการอื่นๆ</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status.png")}
              />
            </View>
            <View style={[styles.input2, styles.labelFlexBox]}>
              <View style={[styles.dropdown, styles.labelFlexBox]}>
                <Text style={[styles.text1, styles.text1Typo]}>
                  เลือกทำรายการ
                </Text>
                <Image
                  style={[
                    styles.systemIconscollapseExpand,
                    styles.iconixtolineararrowLeft1Layout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconscollapseexpand.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  plotBg: {
    backgroundColor: Color.baseColourWhite,
    flex: 1,
  },
  labelFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyB5Regular,
    fontSize: FontSize.selectorS4Regular_size,
    flex: 1,
  },
  iconixtolineararrowLeft1Layout: {
    height: 24,
    width: 24,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: FontSize.titleT3SemiBold_size,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.palanquinSemiBold,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    flex: 1,
  },
  iconixtolineararrowLeft1Parent: {
    justifyContent: "space-between",
  },
  label1: {
    lineHeight: 20,
    color: Color.descriptiveTextColourTextNormal700,
  },
  iconStatus: {
    width: 20,
    height: 20,
    display: "none",
    marginLeft: 8,
  },
  text1: {
    lineHeight: 24,
    color: Color.disableDefaultOnDisableDefault,
  },
  systemIconscollapseExpand: {
    overflow: "hidden",
    marginLeft: 8,
  },
  dropdown: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.disableDefaultDisableDefault,
    borderWidth: 1,
    alignItems: "center",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flex: 1,
    backgroundColor: Color.baseColourWhite,
  },
  input2: {
    marginTop: 4,
  },
  input1: {
    alignSelf: "stretch",
  },
  input: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  frameParent: {
    position: "absolute",
    marginLeft: -206,
    top: 0,
    left: "50%",
    width: 412,
    height: 781,
    alignItems: "flex-end",
    paddingVertical: Padding.p_9xl,
    paddingHorizontal: Padding.p_base,
  },
  plot: {
    height: 841,
    width: "100%",
    flex: 1,
  },
});

export default Plot;
