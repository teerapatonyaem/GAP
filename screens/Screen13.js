import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Screen13 = () => {
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
          <Image
            style={styles.systemLayout}
            resizeMode="cover"
            source={require("../assets/basil-iconsoutlineoutlinegeneralhome1.png")}
          />
          <Text style={styles.text}>กรอกข้อมูลแปลง</Text>
        </View>
        <View style={styles.inputParent}>
          <View style={styles.input}>
            <View style={styles.label}>
              <Text style={styles.label1}>พันธุ์ข้าว</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status.png")}
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
          <View style={styles.input2}>
            <View style={styles.label}>
              <Text style={styles.label1}>จำนวนพื้นที่</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status.png")}
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
          <View style={styles.input2}>
            <View style={styles.input}>
              <View style={styles.label}>
                <Text style={styles.label1}>ชนิดของดิน</Text>
                <Image
                  style={styles.iconStatus}
                  resizeMode="cover"
                  source={require("../assets/icon-status.png")}
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
          <View style={styles.input2}>
            <View style={styles.input}>
              <View style={styles.label}>
                <Text style={styles.label1}>แหล่งน้ำที่ใช้</Text>
                <Image
                  style={styles.iconStatus}
                  resizeMode="cover"
                  source={require("../assets/icon-status.png")}
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
          <View style={styles.input2}>
            <View style={styles.input}>
              <View style={styles.label}>
                <Text style={styles.label1}>วิธีการปลูก</Text>
                <Image
                  style={styles.iconStatus}
                  resizeMode="cover"
                  source={require("../assets/icon-status.png")}
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
          <View style={styles.input2}>
            <View style={styles.label}>
              <Text style={styles.label1}>สถานที่แปลง</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status.png")}
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
      <View style={styles.buttonParent}>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("Screen14")}
        >
          <Text style={[styles.button1, styles.buttonTypo]}>ยกเลิก</Text>
        </Pressable>
        <Pressable
          style={[styles.button2, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("Screen12")}
        >
          <Text style={[styles.button3, styles.buttonTypo]}>สร้างแปลง</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputSpaceBlock: {
    marginTop: 4,
    alignSelf: "stretch",
  },
  dropdownBorder: {
    paddingVertical: Padding.p_5xs,
    borderWidth: 1,
    borderColor: Color.disableDefaultDisableDefault,
    borderStyle: "solid",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  systemLayout: {
    height: 24,
    width: 24,
  },
  textTypo: {
    color: Color.descriptiveTextColourTextLighter400,
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.labelLB4Regular,
    fontSize: FontSize.labelLB4Regular_size,
    flex: 1,
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    height: 44,
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  buttonTypo: {
    textTransform: "capitalize",
    fontSize: FontSize.buttonBT5SemiBold_size,
    textAlign: "left",
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
  },
  text: {
    fontSize: FontSize.titleT4SemiBold_size,
    lineHeight: 28,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
    flex: 1,
  },
  basilIconsoutlineoutlinegeParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 382,
  },
  label1: {
    lineHeight: 20,
    color: Color.descriptiveTextColourTextNormal700,
    textAlign: "left",
    fontFamily: FontFamily.labelLB4Regular,
    fontSize: FontSize.labelLB4Regular_size,
    flex: 1,
  },
  iconStatus: {
    width: 20,
    height: 20,
    marginLeft: 8,
    display: "none",
  },
  label: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  systemIconshome: {
    display: "none",
    overflow: "hidden",
  },
  text1: {
    marginLeft: 8,
  },
  textfield: {
    flex: 1,
  },
  input1: {
    flexDirection: "row",
  },
  input: {
    alignSelf: "stretch",
  },
  input2: {
    alignSelf: "stretch",
    marginTop: 8,
  },
  systemIconscollapseExpand: {
    marginLeft: 8,
    overflow: "hidden",
  },
  dropdown: {
    alignSelf: "stretch",
    flex: 1,
  },
  datepicker: {
    alignSelf: "stretch",
  },
  input11: {
    borderRadius: Border.br_5xs,
    marginTop: 4,
  },
  inputParent: {
    marginTop: 8,
    width: 382,
  },
  frameParent: {
    width: 412,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.surfaceColourWhiteSurface,
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
    marginTop: 148,
    flexDirection: "row",
    width: 382,
  },
  scrollview: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
});

export default Screen13;
