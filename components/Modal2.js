import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Modal2 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.modal}>
      <View style={styles.frameParent}>
        <View
          style={[styles.iconixtolineararrowLeft1Parent, styles.labelFlexBox]}
        >
          <Image
            style={styles.iconixtolineararrowLeft1}
            resizeMode="cover"
            source={require("../assets/iconixtolineararrowleft1.png")}
          />
          <Text style={styles.text}>กรอกข้อมูลแปลง</Text>
        </View>
        <View style={styles.parentSpaceBlock}>
          <View style={styles.input}>
            <View style={styles.labelFlexBox}>
              <Text style={styles.label1}>พันธุ์ข้าว</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status.png")}
              />
            </View>
            <View style={styles.input1}>
              <View style={[styles.textfield, styles.dropdownSpaceBlock]}>
                <Image
                  style={[styles.systemIconshome, styles.systemLayout]}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome.png")}
                />
                <Text style={[styles.text1, styles.textTypo]}>พันธุ์ข้าว</Text>
              </View>
            </View>
          </View>
          <View style={styles.input2}>
            <View style={styles.labelFlexBox}>
              <Text style={styles.label1}>จำนวนพื้นที่</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status.png")}
              />
            </View>
            <View style={styles.input1}>
              <View style={[styles.textfield, styles.dropdownSpaceBlock]}>
                <Image
                  style={[styles.systemIconshome, styles.systemLayout]}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome.png")}
                />
                <Text style={[styles.text1, styles.textTypo]}>
                  จำนวนพื้นที่
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.input2}>
            <View style={styles.input}>
              <View style={styles.labelFlexBox}>
                <Text style={styles.label1}>ชนิดของดิน</Text>
                <Image
                  style={styles.iconStatus}
                  resizeMode="cover"
                  source={require("../assets/icon-status.png")}
                />
              </View>
              <View style={styles.input1}>
                <View style={[styles.dropdown, styles.dropdownSpaceBlock]}>
                  <Text style={styles.textTypo}>ชนิดของดิน</Text>
                  <Image
                    style={[
                      styles.systemIconscollapseExpand,
                      styles.systemLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/1-system-iconscollapseexpand.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.input2}>
            <View style={styles.input}>
              <View style={styles.labelFlexBox}>
                <Text style={styles.label1}>แหล่งน้ำที่ใช้</Text>
                <Image
                  style={styles.iconStatus}
                  resizeMode="cover"
                  source={require("../assets/icon-status.png")}
                />
              </View>
              <View style={styles.input1}>
                <View style={[styles.dropdown, styles.dropdownSpaceBlock]}>
                  <Text style={styles.textTypo}>แหล่งน้ำที่ใช้</Text>
                  <Image
                    style={[
                      styles.systemIconscollapseExpand,
                      styles.systemLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/1-system-iconscollapseexpand.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.input2}>
            <View style={styles.input}>
              <View style={styles.labelFlexBox}>
                <Text style={styles.label1}>วิธีการปลูก</Text>
                <Image
                  style={styles.iconStatus}
                  resizeMode="cover"
                  source={require("../assets/icon-status.png")}
                />
              </View>
              <View style={styles.input1}>
                <View style={[styles.dropdown, styles.dropdownSpaceBlock]}>
                  <Text style={styles.textTypo}>วิธีการปลูก</Text>
                  <Image
                    style={[
                      styles.systemIconscollapseExpand,
                      styles.systemLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/1-system-iconscollapseexpand.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.input2}>
            <View style={styles.labelFlexBox}>
              <Text style={styles.label1}>สถานที่แปลง</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status.png")}
              />
            </View>
            <View style={styles.input11}>
              <View style={[styles.datepicker, styles.dropdownSpaceBlock]}>
                <Text style={styles.textTypo}>สถานที่แปลง</Text>
                <Image
                  style={[
                    styles.systemIconscollapseExpand,
                    styles.systemLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconslocation.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.buttonParent, styles.dropdownSpaceBlock]}>
          <Pressable
            style={[styles.button, styles.buttonLayout]}
            onPress={() => navigation.navigate("L1")}
          >
            <Text style={[styles.button1, styles.buttonTypo]}>ยกเลิก</Text>
          </Pressable>
          <Pressable
            style={[styles.button2, styles.buttonLayout]}
            onPress={() => navigation.navigate("Modal3")}
          >
            <Text style={[styles.button3, styles.buttonTypo]}>สร้างแปลง</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  dropdownSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
  },
  systemLayout: {
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  textTypo: {
    color: Color.disableDefaultOnDisableDefault,
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.bodyB5Regular,
    fontSize: FontSize.selectorS4Regular_size,
    flex: 1,
  },
  buttonLayout: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_21xl,
    height: 44,
    width: 182,
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
  iconixtolineararrowLeft1: {
    height: 24,
    width: 24,
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
    textAlign: "left",
    fontFamily: FontFamily.bodyB5Regular,
    fontSize: FontSize.selectorS4Regular_size,
    flex: 1,
  },
  iconStatus: {
    width: 20,
    height: 20,
    marginLeft: 8,
    display: "none",
  },
  systemIconshome: {
    display: "none",
  },
  text1: {
    marginLeft: 8,
  },
  textfield: {
    borderWidth: 1,
    borderColor: Color.disableDefaultDisableDefault,
    paddingHorizontal: Padding.p_base,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.baseColourWhite,
    flex: 1,
  },
  input1: {
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  input: {
    alignSelf: "stretch",
  },
  input2: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  systemIconscollapseExpand: {
    marginLeft: 8,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: Color.disableDefaultDisableDefault,
    paddingHorizontal: Padding.p_base,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.baseColourWhite,
    flex: 1,
    alignSelf: "stretch",
  },
  datepicker: {
    borderWidth: 1,
    borderColor: Color.disableDefaultDisableDefault,
    paddingHorizontal: Padding.p_base,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.baseColourWhite,
    alignSelf: "stretch",
  },
  input11: {
    borderRadius: Border.br_5xs,
    marginTop: 4,
    alignSelf: "stretch",
  },
  parentSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  button1: {
    color: Color.brightLightGreen900,
  },
  button: {
    borderColor: Color.colorDarkslategray_100,
    borderWidth: 1.5,
    borderStyle: "solid",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_21xl,
    height: 44,
    width: 182,
    borderRadius: Border.br_13xl,
  },
  button3: {
    color: Color.baseColourWhite,
  },
  button2: {
    backgroundColor: Color.walledGarden1000,
    marginLeft: 16,
  },
  buttonParent: {
    marginTop: 8,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  frameParent: {
    borderRadius: Border.br_base,
    width: 398,
    padding: Padding.p_base,
    backgroundColor: Color.baseColourWhite,
    alignItems: "center",
  },
  modal: {
    backgroundColor: Color.colorDarkslategray_200,
    width: 412,
    height: 712,
    maxWidth: "100%",
    maxHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Modal2;
