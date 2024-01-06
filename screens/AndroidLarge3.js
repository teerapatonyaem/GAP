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
import Climate from "../components/Climate";
import Fieldinfo from "../components/Fieldinfo";
import Latestworkinfo from "../components/Latestworkinfo";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const AndroidLarge3 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={[styles.androidLarge3, styles.dropdownBg]}
      horizontal={false}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.androidLarge3Content}
    >
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View
            style={[
              styles.basilIconsoutlineoutlinegeParent,
              styles.labelFlexBox,
            ]}
          >
            <Pressable
              style={styles.systemIconscollapseExpandLayout}
              onPress={() => navigation.navigate("AndroidLarge6")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/basil-iconsoutlineoutlinegeneralhome.png")}
              />
            </Pressable>
            <Text style={styles.text}>นาแปลงใหญ่สีเขียว</Text>
          </View>
          <Image
            style={styles.image31Icon}
            resizeMode="cover"
            source={require("../assets/image-3111.png")}
          />
          <Text style={[styles.text1, styles.textTypo]}>กข 16 12 ไร่</Text>
        </View>
        <Climate />
        <Fieldinfo />
        <Latestworkinfo />
        <View style={styles.input}>
          <View style={styles.input1}>
            <View style={styles.labelFlexBox}>
              <Text style={[styles.label1, styles.textTypo]}>รายการอื่นๆ</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status1.png")}
              />
            </View>
            <View style={[styles.input2, styles.labelFlexBox]}>
              <View style={[styles.dropdown, styles.labelFlexBox]}>
                <Text style={[styles.text2, styles.textTypo]}>
                  เลือกทำรายการ
                </Text>
                <Image
                  style={[
                    styles.systemIconscollapseExpand,
                    styles.systemIconscollapseExpandLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconscollapseexpand11.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  androidLarge3Content: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 31,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  dropdownBg: {
    backgroundColor: Color.surfaceColourWhiteSurface,
    flex: 1,
  },
  labelFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    fontSize: FontSize.inputTextFieldPlaceholderIN4Regular_size,
  },
  systemIconscollapseExpandLayout: {
    height: 24,
    width: 24,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: FontSize.headerH6SemiBold_size,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.bodyBH5SemiBold,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    flex: 1,
  },
  basilIconsoutlineoutlinegeParent: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  image31Icon: {
    borderRadius: Border.br_base,
    width: 132,
    height: 88,
    marginTop: 8,
  },
  text1: {
    lineHeight: 24,
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    fontSize: FontSize.inputTextFieldPlaceholderIN4Regular_size,
    marginTop: 8,
    color: Color.labelColorLightPrimary,
  },
  frameGroup: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
    alignSelf: "stretch",
    paddingVertical: 0,
  },
  label1: {
    lineHeight: 20,
    color: Color.descriptiveTextColourTextNormal700,
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    fontSize: FontSize.inputTextFieldPlaceholderIN4Regular_size,
    flex: 1,
  },
  iconStatus: {
    width: 20,
    height: 20,
    display: "none",
    marginLeft: 8,
  },
  text2: {
    color: Color.descriptiveTextColourTextLighter400,
    lineHeight: 24,
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    fontSize: FontSize.inputTextFieldPlaceholderIN4Regular_size,
    flex: 1,
  },
  systemIconscollapseExpand: {
    overflow: "hidden",
    marginLeft: 8,
  },
  dropdown: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    flex: 1,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  input2: {
    marginTop: 4,
  },
  input1: {
    width: 343,
  },
  input: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  frameParent: {
    width: 360,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
  },
  androidLarge3: {
    maxWidth: "100%",
    width: "100%",
    flex: 1,
  },
});

export default AndroidLarge3;
