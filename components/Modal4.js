import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Modal4 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.modal}>
      <View style={[styles.frameParent, styles.textfieldBg]}>
        <View style={[styles.wrapper, styles.labelFlexBox]}>
          <Text style={styles.text}>วิเคราะห์ดิน</Text>
        </View>
        <View style={styles.inputParentSpaceBlock}>
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
                style={styles.systemIconshome}
                resizeMode="cover"
                source={require("../assets/1-system-iconshome.png")}
              />
              <Text style={[styles.text1, styles.text1Typo]}>
                ค่า PH ของดิน
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.inputParent, styles.textfieldSpaceBlock]}>
          <View style={styles.input2}>
            <View style={[styles.label, styles.labelFlexBox]}>
              <Text style={[styles.label1, styles.text1Typo]}>ไนโตรเจน</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status.png")}
              />
            </View>
            <View style={[styles.input1, styles.labelFlexBox]}>
              <View style={[styles.textfield, styles.textfieldSpaceBlock]}>
                <Image
                  style={styles.systemIconshome}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome.png")}
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
                source={require("../assets/icon-status.png")}
              />
            </View>
            <View style={[styles.input1, styles.labelFlexBox]}>
              <View style={[styles.textfield, styles.textfieldSpaceBlock]}>
                <Image
                  style={styles.systemIconshome}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome.png")}
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
                  style={styles.systemIconshome}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome.png")}
                />
                <Text style={[styles.text1, styles.text1Typo]}>K</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.buttonParent, styles.inputParentSpaceBlock]}>
          <Pressable
            style={[styles.button, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={[styles.button1, styles.buttonTypo]}>ยกเลิก</Text>
          </Pressable>
          <Pressable
            style={[styles.button2, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("Screen1")}
          >
            <Text style={[styles.button3, styles.buttonTypo]}>
              วิเคราะห์ดิน
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textfieldBg: {
    backgroundColor: Color.baseColourWhite,
    alignItems: "center",
  },
  labelFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  text1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyB5Regular,
    fontSize: FontSize.selectorS4Regular_size,
    flex: 1,
  },
  textfieldSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  inputParentSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_21xl,
    height: 44,
    borderRadius: Border.br_13xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTypo: {
    fontFamily: FontFamily.buttonSmall,
    fontWeight: "500",
    textTransform: "capitalize",
    fontSize: FontSize.buttonRegular_size,
    textAlign: "left",
  },
  text: {
    fontSize: FontSize.buttonBT3SemiBold_size,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.titleT3SemiBold,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    flex: 1,
  },
  wrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
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
    width: 24,
    height: 24,
    overflow: "hidden",
    display: "none",
  },
  text1: {
    lineHeight: 24,
    color: Color.disableDefaultOnDisableDefault,
    marginLeft: 8,
  },
  textfield: {
    borderRadius: Border.br_5xs,
    borderColor: Color.disableDefaultDisableDefault,
    borderWidth: 1,
    paddingHorizontal: Padding.p_base,
    borderStyle: "solid",
    flex: 1,
    backgroundColor: Color.baseColourWhite,
    alignItems: "center",
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
    paddingHorizontal: 0,
    opacity: 0.8,
    marginTop: 8,
    alignSelf: "stretch",
  },
  button1: {
    color: Color.brightLightGreen900,
  },
  button: {
    borderColor: Color.colorDarkslategray_100,
    borderWidth: 1.5,
    width: 182,
    borderStyle: "solid",
  },
  button3: {
    color: Color.baseColourWhite,
  },
  button2: {
    backgroundColor: Color.walledGarden1000,
    marginLeft: 8,
    flex: 1,
  },
  buttonParent: {
    flexDirection: "row",
    justifyContent: "center",
  },
  frameParent: {
    borderRadius: Border.br_base,
    padding: Padding.p_base,
    width: 412,
  },
  modal: {
    backgroundColor: Color.colorDarkslategray_200,
    height: 712,
    maxWidth: "100%",
    maxHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
    width: 412,
  },
});

export default Modal4;
