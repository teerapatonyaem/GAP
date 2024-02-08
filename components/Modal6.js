import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const Modal6 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.modal, styles.modalLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>เพิ่มสมาชิก</Text>
        </View>
        <View style={[styles.foodfarmerParent, styles.parentSpaceBlock]}>
          <View style={styles.foodfarmer}>
            <Image
              style={[styles.vectorIcon, styles.modalLayout]}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
          </View>
          <View style={styles.inputParent}>
            <View style={styles.input}>
              <View style={styles.label}>
                <Text style={[styles.label1, styles.text1Typo]}>
                  ชื่อสมาชิก
                </Text>
                <Image
                  style={styles.iconStatus}
                  resizeMode="cover"
                  source={require("../assets/icon-status.png")}
                />
              </View>
              <View style={styles.input1}>
                <View style={styles.textfield}>
                  <Image
                    style={styles.systemIconshome}
                    resizeMode="cover"
                    source={require("../assets/1-system-iconshome3.png")}
                  />
                  <Text style={[styles.text1, styles.text1Typo]}>
                    ชื่อสมาชิก
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.parentSpaceBlock}>
              <View style={styles.label}>
                <Text style={[styles.label1, styles.text1Typo]}>ตำแหน่ง</Text>
                <Image
                  style={styles.iconStatus}
                  resizeMode="cover"
                  source={require("../assets/icon-status.png")}
                />
              </View>
              <View style={styles.input1}>
                <View style={styles.textfield}>
                  <Image
                    style={styles.systemIconshome}
                    resizeMode="cover"
                    source={require("../assets/1-system-iconshome3.png")}
                  />
                  <Text style={[styles.text1, styles.text1Typo]}>ตำแหน่ง</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.buttonParent, styles.parentSpaceBlock]}>
          <Pressable
            style={[styles.button, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("Frame2")}
          >
            <Text style={[styles.button1, styles.buttonTypo]}>ยกเลิก</Text>
          </Pressable>
          <Pressable
            style={[styles.button2, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("Frame2")}
          >
            <Text style={[styles.button3, styles.buttonTypo]}>เพิ่มสมาชิก</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  parentSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  text1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyB5Regular,
    fontSize: FontSize.selectorS4Regular_size,
    flex: 1,
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
    alignSelf: "stretch",
    alignItems: "center",
  },
  vectorIcon: {
    position: "absolute",
    height: "75%",
    width: "62.53%",
    top: "12.5%",
    right: "18.67%",
    bottom: "12.5%",
    left: "18.8%",
    overflow: "hidden",
  },
  foodfarmer: {
    width: 83,
    height: 64,
    overflow: "hidden",
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
  label: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  systemIconshome: {
    width: 24,
    height: 24,
    display: "none",
    overflow: "hidden",
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
    paddingVertical: Padding.p_5xs,
    borderStyle: "solid",
    flex: 1,
    flexDirection: "row",
    backgroundColor: Color.baseColourWhite,
    alignItems: "center",
  },
  input1: {
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  input: {
    alignSelf: "stretch",
  },
  inputParent: {
    marginLeft: 8,
    flex: 1,
    alignItems: "center",
  },
  foodfarmerParent: {
    flexDirection: "row",
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
    backgroundColor: Color.baseColourWhite,
    width: 412,
  },
  modal: {
    backgroundColor: Color.colorDarkslategray_200,
    height: 712,
    justifyContent: "center",
    alignItems: "center",
    width: 412,
  },
});

export default Modal6;
