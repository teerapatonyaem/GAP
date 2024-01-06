import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Fieldform = () => {
  return (
    <View style={styles.parent}>
      <Text style={styles.text}>กรอกข้อมูลแปลง</Text>
      <View style={styles.inputParent}>
        <View style={styles.input}>
          <View style={styles.label}>
            <Text style={styles.label1}>พันธุ์ข้าว</Text>
            <Image
              style={styles.iconStatus}
              resizeMode="cover"
              source={require("../assets/icon-status1.png")}
            />
          </View>
          <View style={[styles.input1, styles.inputSpaceBlock]}>
            <View style={[styles.textfield, styles.dropdownBorder]}>
              <Image
                style={[styles.systemIconshome, styles.systemLayout]}
                resizeMode="cover"
                source={require("../assets/1-system-iconshome1.png")}
              />
              <Text style={[styles.text1, styles.textTypo]}>พันธุ์ข้าว</Text>
            </View>
          </View>
        </View>
        <View style={styles.inputParent}>
          <View style={styles.label}>
            <Text style={styles.label1}>จำนวนพื้นที่</Text>
            <Image
              style={styles.iconStatus}
              resizeMode="cover"
              source={require("../assets/icon-status1.png")}
            />
          </View>
          <View style={[styles.input1, styles.inputSpaceBlock]}>
            <View style={[styles.textfield, styles.dropdownBorder]}>
              <Image
                style={[styles.systemIconshome, styles.systemLayout]}
                resizeMode="cover"
                source={require("../assets/1-system-iconshome1.png")}
              />
              <Text style={[styles.text1, styles.textTypo]}>จำนวนพื้นที่</Text>
            </View>
          </View>
        </View>
        <View style={styles.inputParent}>
          <View style={styles.input}>
            <View style={styles.label}>
              <Text style={styles.label1}>ชนิดของดิน</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status1.png")}
              />
            </View>
            <View style={[styles.input1, styles.inputSpaceBlock]}>
              <View style={[styles.dropdown, styles.dropdownBorder]}>
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
        <View style={styles.inputParent}>
          <View style={styles.input}>
            <View style={styles.label}>
              <Text style={styles.label1}>แหล่งน้ำที่ใช้</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status1.png")}
              />
            </View>
            <View style={[styles.input1, styles.inputSpaceBlock]}>
              <View style={[styles.dropdown, styles.dropdownBorder]}>
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
        <View style={styles.inputParent}>
          <View style={styles.input}>
            <View style={styles.label}>
              <Text style={styles.label1}>วิธีการปลูก</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status1.png")}
              />
            </View>
            <View style={[styles.input1, styles.inputSpaceBlock]}>
              <View style={[styles.dropdown, styles.dropdownBorder]}>
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
        <View style={styles.inputParent}>
          <View style={styles.label}>
            <Text style={styles.label1}>สถานที่แปลง</Text>
            <Image
              style={styles.iconStatus}
              resizeMode="cover"
              source={require("../assets/icon-status1.png")}
            />
          </View>
          <View style={[styles.input11, styles.inputSpaceBlock]}>
            <View style={[styles.datepicker, styles.dropdownBorder]}>
              <Text style={styles.textTypo}>สถานที่แปลง</Text>
              <Image
                style={[styles.systemIconscollapseExpand, styles.systemLayout]}
                resizeMode="cover"
                source={require("../assets/1-system-iconslocation.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputSpaceBlock: {
    marginTop: 4,
    alignSelf: "stretch",
  },
  dropdownBorder: {
    paddingHorizontal: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    flexDirection: "row",
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    backgroundColor: Color.surfaceColourWhiteSurface,
    borderRadius: Border.br_5xs,
  },
  systemLayout: {
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  textTypo: {
    color: Color.descriptiveTextColourTextLighter400,
    lineHeight: 24,
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    fontSize: FontSize.inputTextFieldPlaceholderIN4Regular_size,
    flex: 1,
    textAlign: "left",
  },
  text: {
    fontSize: FontSize.bodyBH3SemiBold_size,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.selectorS6SemiBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
  label1: {
    lineHeight: 20,
    color: Color.descriptiveTextColourTextNormal700,
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    fontSize: FontSize.inputTextFieldPlaceholderIN4Regular_size,
    flex: 1,
    textAlign: "left",
  },
  iconStatus: {
    width: 20,
    height: 20,
    marginLeft: 8,
    display: "none",
  },
  label: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  systemIconshome: {
    display: "none",
  },
  text1: {
    marginLeft: 8,
  },
  textfield: {
    flex: 1,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
  },
  input1: {
    flexDirection: "row",
  },
  input: {
    alignSelf: "stretch",
  },
  inputParent: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  systemIconscollapseExpand: {
    marginLeft: 8,
  },
  dropdown: {
    flex: 1,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  datepicker: {
    alignSelf: "stretch",
  },
  input11: {
    borderRadius: Border.br_5xs,
    marginTop: 4,
  },
  parent: {
    height: 670,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    backgroundColor: Color.surfaceColourWhiteSurface,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
});

export default Fieldform;
