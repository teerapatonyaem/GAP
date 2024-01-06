import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.view, styles.viewBg]}>
      <View style={[styles.frameParent, styles.textfieldSpaceBlock]}>
        <View
          style={[styles.basilIconsoutlineoutlinegeParent, styles.labelFlexBox]}
        >
          <Pressable
            style={styles.systemIconshomeLayout}
            onPress={() => navigation.navigate("Screen11")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/basil-iconsoutlineoutlinegeneralhome1.png")}
            />
          </Pressable>
          <Text style={[styles.text, styles.textTypo]}>วิเคราะห์ดิน</Text>
        </View>
        <View style={styles.inputSpaceBlock}>
          <View style={[styles.label, styles.labelFlexBox]}>
            <Text style={[styles.label1, styles.text1Typo]}>
              กรอกข้อมูล PH ของดิน
            </Text>
            <Image
              style={styles.iconStatus}
              resizeMode="cover"
              source={require("../assets/icon-status.png")}
            />
          </View>
          <View style={[styles.input1, styles.labelFlexBox]}>
            <View style={[styles.textfield, styles.textfieldSpaceBlock]}>
              <Image
                style={[styles.systemIconshome, styles.systemIconshomeLayout]}
                resizeMode="cover"
                source={require("../assets/1-system-iconshome1.png")}
              />
              <Text style={[styles.text1, styles.text1Typo]}>
                ค่า PH ของดิน
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.inputParent, styles.inputSpaceBlock]}>
          <View style={styles.input2}>
            <View style={[styles.label, styles.labelFlexBox]}>
              <Text style={[styles.label1, styles.text1Typo]}>ไนโตรเจน</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status2.png")}
              />
            </View>
            <View style={[styles.input1, styles.labelFlexBox]}>
              <View style={[styles.textfield, styles.textfieldSpaceBlock]}>
                <Image
                  style={[styles.systemIconshome, styles.systemIconshomeLayout]}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome1.png")}
                />
                <Text style={[styles.text1, styles.text1Typo]}>N</Text>
              </View>
            </View>
          </View>
          <View style={styles.input4}>
            <View style={[styles.label, styles.labelFlexBox]}>
              <Text style={[styles.label1, styles.text1Typo]}>ฟอสฟอรัส</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status4.png")}
              />
            </View>
            <View style={[styles.input1, styles.labelFlexBox]}>
              <View style={[styles.textfield, styles.textfieldSpaceBlock]}>
                <Image
                  style={[styles.systemIconshome, styles.systemIconshomeLayout]}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome3.png")}
                />
                <Text style={[styles.text1, styles.text1Typo]}>{`P `}</Text>
              </View>
            </View>
          </View>
          <View style={styles.input4}>
            <View style={[styles.label, styles.labelFlexBox]}>
              <Text style={[styles.label1, styles.text1Typo]}>
                โปรเเตสเซียม
              </Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status.png")}
              />
            </View>
            <View style={[styles.input1, styles.labelFlexBox]}>
              <View style={[styles.textfield, styles.textfieldSpaceBlock]}>
                <Image
                  style={[styles.systemIconshome, styles.systemIconshomeLayout]}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome4.png")}
                />
                <Text style={[styles.text1, styles.text1Typo]}>K</Text>
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.buttonWrapper, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("Screen10")}
        >
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Text style={[styles.button1, styles.textTypo]}>
              เริ่มการวิเคราะห์ดิน
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBg: {
    backgroundColor: Color.surfaceColourWhiteSurface,
    flex: 1,
  },
  textfieldSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  labelFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
    flex: 1,
  },
  text1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.labelLB4Regular,
    fontSize: FontSize.labelLB4Regular_size,
    flex: 1,
  },
  systemIconshomeLayout: {
    height: 24,
    width: 24,
  },
  inputSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: FontSize.titleT4SemiBold_size,
    lineHeight: 28,
    color: Color.labelColorLightPrimary,
  },
  basilIconsoutlineoutlinegeParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  label1: {
    lineHeight: 20,
    color: Color.descriptiveTextColourTextNormal700,
  },
  iconStatus: {
    width: 20,
    height: 20,
    marginLeft: 8,
    display: "none",
  },
  label: {
    flexDirection: "row",
  },
  systemIconshome: {
    display: "none",
    overflow: "hidden",
  },
  text1: {
    lineHeight: 24,
    color: Color.descriptiveTextColourTextLighter400,
    marginLeft: 8,
  },
  textfield: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.disableDefaultDisableDefault,
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    flex: 1,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  input1: {
    marginTop: 4,
    flexDirection: "row",
  },
  input2: {
    flex: 1,
  },
  input4: {
    marginLeft: 4,
    flex: 1,
  },
  inputParent: {
    padding: Padding.p_5xs,
    opacity: 0.8,
    flexDirection: "row",
  },
  button1: {
    fontSize: FontSize.buttonBT5SemiBold_size,
    textTransform: "capitalize",
    color: Color.surfaceColourWhiteSurface,
  },
  button: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.primary500,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    flex: 1,
  },
  buttonWrapper: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  frameParent: {
    position: "absolute",
    marginLeft: -206,
    top: 0,
    left: "50%",
    width: 412,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
  },
  view: {
    height: 732,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Frame2;
