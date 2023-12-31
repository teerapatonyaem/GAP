import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const Fieldform = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameParent}>
      <View style={styles.frameGroup}>
        <View style={styles.basilIconsoutlineoutlinegeParent}>
          <Pressable
            style={styles.basilIconsoutlineoutlinege}
            onPress={() => navigation.navigate("AndroidLarge6")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/basil-iconsoutlineoutlinegeneralhome.png")}
            />
          </Pressable>
          <Text style={styles.text}>กรอกข้อมูลแปลง</Text>
        </View>
        <View style={styles.parentSpaceBlock}>
          <View style={styles.input}>
            <View style={styles.label}>
              <Text style={styles.label1}>พันธุ์ข้าว</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status2.png")}
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
          <View style={styles.parentSpaceBlock}>
            <View style={styles.label}>
              <Text style={styles.label1}>จำนวนพื้นที่</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status2.png")}
              />
            </View>
            <View style={[styles.input1, styles.inputSpaceBlock]}>
              <View style={[styles.textfield, styles.dropdownBorder]}>
                <Image
                  style={[styles.systemIconshome, styles.systemLayout]}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome1.png")}
                />
                <Text style={[styles.text1, styles.textTypo]}>
                  จำนวนพื้นที่
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.parentSpaceBlock}>
            <View style={styles.input}>
              <View style={styles.label}>
                <Text style={styles.label1}>ชนิดของดิน</Text>
                <Image
                  style={styles.iconStatus}
                  resizeMode="cover"
                  source={require("../assets/icon-status2.png")}
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
          <View style={styles.parentSpaceBlock}>
            <View style={styles.input}>
              <View style={styles.label}>
                <Text style={styles.label1}>แหล่งน้ำที่ใช้</Text>
                <Image
                  style={styles.iconStatus}
                  resizeMode="cover"
                  source={require("../assets/icon-status2.png")}
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
          <View style={styles.parentSpaceBlock}>
            <View style={styles.input}>
              <View style={styles.label}>
                <Text style={styles.label1}>วิธีการปลูก</Text>
                <Image
                  style={styles.iconStatus}
                  resizeMode="cover"
                  source={require("../assets/icon-status2.png")}
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
          <View style={styles.parentSpaceBlock}>
            <View style={styles.label}>
              <Text style={styles.label1}>สถานที่แปลง</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status2.png")}
              />
            </View>
            <View style={[styles.input11, styles.inputSpaceBlock]}>
              <View style={[styles.datepicker, styles.dropdownBorder]}>
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
      </View>
      <View style={[styles.buttonParent, styles.parentSpaceBlock]}>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Text style={[styles.button1, styles.buttonTypo]}>ยกเลิก</Text>
        </View>
        <Pressable
          style={[styles.button2, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("AndroidLarge3")}
        >
          <Text style={[styles.button3, styles.buttonTypo]}>สร้างแปลง</Text>
        </Pressable>
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
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    flexDirection: "row",
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    backgroundColor: Color.surfaceColourWhiteSurface,
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_base,
  },
  systemLayout: {
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  textTypo: {
    color: Color.descriptiveTextColourTextLighter400,
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    fontSize: FontSize.inputTextFieldPlaceholderIN4Regular_size,
    flex: 1,
  },
  parentSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    height: 44,
    borderRadius: Border.br_8xs,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonTypo: {
    textTransform: "capitalize",
    fontSize: FontSize.bodyB5Regular_size,
    textAlign: "left",
    fontFamily: FontFamily.bodyBH5SemiBold,
    fontWeight: "600",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  basilIconsoutlineoutlinege: {
    height: 24,
    width: 24,
  },
  text: {
    fontSize: FontSize.headerH6SemiBold_size,
    lineHeight: 28,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    fontFamily: FontFamily.bodyBH5SemiBold,
    fontWeight: "600",
    flex: 1,
  },
  basilIconsoutlineoutlinegeParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  label1: {
    lineHeight: 20,
    color: Color.descriptiveTextColourTextNormal700,
    textAlign: "left",
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    fontSize: FontSize.inputTextFieldPlaceholderIN4Regular_size,
    flex: 1,
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
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
  },
  input1: {
    flexDirection: "row",
  },
  input: {
    alignSelf: "stretch",
  },
  systemIconscollapseExpand: {
    marginLeft: 8,
  },
  dropdown: {
    flex: 1,
    borderColor: Color.colorGainsboro_100,
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
  frameGroup: {
    height: 670,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    backgroundColor: Color.surfaceColourWhiteSurface,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  button1: {
    color: Color.primary600,
  },
  button: {
    backgroundColor: Color.primary100,
  },
  button3: {
    color: Color.surfaceColourWhiteSurface,
  },
  button2: {
    backgroundColor: Color.primary500,
    marginLeft: 8,
  },
  buttonParent: {
    flexDirection: "row",
  },
  frameParent: {
    width: 360,
    height: 523,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
  },
});

export default Fieldform;
