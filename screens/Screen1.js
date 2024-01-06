import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const Screen1 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.scrollview}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.groupShadowBox}>
          <Text style={styles.text}>การจัดการทั่วไปภายในแปลง</Text>
          <View style={styles.input}>
            <View style={styles.label}>
              <Text style={[styles.label1, styles.text1Typo]}>
                งานที่ปฏิบัติ
              </Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status.png")}
              />
            </View>
            <View style={styles.input1}>
              <View style={[styles.textfield, styles.textfieldSpaceBlock]}>
                <Image
                  style={styles.systemIconshome}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome1.png")}
                />
                <Text style={[styles.text1, styles.text1Typo]}>
                  งานที่ปฏิบัติ
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.input}>
            <View style={styles.label}>
              <Text style={[styles.label1, styles.text1Typo]}>ปริมาณ</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status.png")}
              />
            </View>
            <View style={styles.input1}>
              <View style={[styles.textfield, styles.textfieldSpaceBlock]}>
                <Image
                  style={styles.systemIconshome}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome2.png")}
                />
                <Text style={[styles.text1, styles.text1Typo]}>ปริมาณ</Text>
              </View>
            </View>
          </View>
          <View style={[styles.cardswapComponent, styles.textfieldSpaceBlock]}>
            <View style={styles.swapItem}>
              <Text style={styles.swapComponent}>เพิ่มช่องข้อมูล</Text>
            </View>
          </View>
        </View>
        <View style={[styles.group, styles.groupShadowBox]}>
          <Text style={styles.text}>การปฏิบัติงานในแปลง(ใส่ปุ๋ย)</Text>
          <View style={styles.input}>
            <View style={styles.label}>
              <Text style={[styles.label1, styles.text1Typo]}>
                งานที่ปฏิบัติ
              </Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status.png")}
              />
            </View>
            <View style={styles.input1}>
              <View style={[styles.textfield, styles.textfieldSpaceBlock]}>
                <Image
                  style={styles.systemIconshome}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome2.png")}
                />
                <Text style={[styles.text1, styles.text1Typo]}>
                  งานที่ปฏิบัติ
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.input}>
            <View style={styles.label}>
              <Text style={[styles.label1, styles.text1Typo]}>ปุ๋ยที่ใช้</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status.png")}
              />
            </View>
            <View style={styles.input1}>
              <View style={[styles.textfield, styles.textfieldSpaceBlock]}>
                <Image
                  style={styles.systemIconshome}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome2.png")}
                />
                <Text style={[styles.text1, styles.text1Typo]}>สูตรปุ๋ย</Text>
              </View>
            </View>
          </View>
          <View style={styles.input}>
            <View style={styles.label}>
              <Text style={[styles.label1, styles.text1Typo]}>อัตราการใช้</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status.png")}
              />
            </View>
            <View style={styles.input1}>
              <View style={[styles.textfield, styles.textfieldSpaceBlock]}>
                <Image
                  style={styles.systemIconshome}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome2.png")}
                />
                <Text style={[styles.text1, styles.text1Typo]}>
                  อัตราการใช้
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.cardswapComponent, styles.textfieldSpaceBlock]}>
            <View style={styles.swapItem}>
              <Text style={styles.swapComponent}>เพิ่มช่องข้อมูล</Text>
            </View>
          </View>
        </View>
        <View style={[styles.container, styles.groupShadowBox]}>
          <Text style={styles.text}>การปฏิบัติงานในแปลง(กำจัดศัตรูพืช)</Text>
          <View style={styles.input}>
            <View style={styles.label}>
              <Text style={[styles.label1, styles.text1Typo]}>
                งานที่ปฏิบัติ
              </Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status.png")}
              />
            </View>
            <View style={styles.input1}>
              <View style={[styles.textfield, styles.textfieldSpaceBlock]}>
                <Image
                  style={styles.systemIconshome}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome2.png")}
                />
                <Text style={[styles.text1, styles.text1Typo]}>
                  งานที่ปฏิบัติ
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.input}>
            <View style={styles.label}>
              <Text style={[styles.label1, styles.text1Typo]}>
                ชนิดศัตรูพืช
              </Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status.png")}
              />
            </View>
            <View style={styles.input1}>
              <View style={[styles.textfield, styles.textfieldSpaceBlock]}>
                <Image
                  style={styles.systemIconshome}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome2.png")}
                />
                <Text style={[styles.text1, styles.text1Typo]}>
                  ชนิดศัตรูพืช
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.input}>
            <View style={styles.label}>
              <Text style={[styles.label1, styles.text1Typo]}>
                สารเคมีที่ใช้
              </Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status.png")}
              />
            </View>
            <View style={styles.input1}>
              <View style={[styles.textfield, styles.textfieldSpaceBlock]}>
                <Image
                  style={styles.systemIconshome}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome1.png")}
                />
                <Text style={[styles.text1, styles.text1Typo]}>
                  สารเคมีที่ใช้
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.input}>
            <View style={styles.label}>
              <Text style={[styles.label1, styles.text1Typo]}>อัตราการใช้</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status.png")}
              />
            </View>
            <View style={styles.input1}>
              <View style={[styles.textfield, styles.textfieldSpaceBlock]}>
                <Image
                  style={styles.systemIconshome}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome1.png")}
                />
                <Text style={[styles.text1, styles.text1Typo]}>
                  อัตราการใช้
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.cardswapComponent, styles.textfieldSpaceBlock]}>
            <View style={styles.swapItem}>
              <Text style={styles.swapComponent}>เพิ่มช่องข้อมูล</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameView, styles.groupShadowBox]}>
          <Text style={styles.text}>ค่าใช้จ่ายภายในแปลง</Text>
          <View style={styles.input}>
            <View style={styles.label}>
              <Text style={[styles.label1, styles.text1Typo]}>
                ปัจจัยการจ่าย
              </Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status.png")}
              />
            </View>
            <View style={styles.input1}>
              <View style={[styles.textfield, styles.textfieldSpaceBlock]}>
                <Image
                  style={styles.systemIconshome}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome1.png")}
                />
                <Text style={[styles.text1, styles.text1Typo]}>
                  ปัจจัยการจ่าย
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.input}>
            <View style={styles.label}>
              <Text style={[styles.label1, styles.text1Typo]}>ปริมาณ</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status.png")}
              />
            </View>
            <View style={styles.input1}>
              <View style={[styles.textfield, styles.textfieldSpaceBlock]}>
                <Image
                  style={styles.systemIconshome}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome1.png")}
                />
                <Text style={[styles.text1, styles.text1Typo]}>ปริมาณ</Text>
              </View>
            </View>
          </View>
          <View style={styles.input}>
            <View style={styles.label}>
              <Text style={[styles.label1, styles.text1Typo]}>ค่าใช้จ่าย</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status.png")}
              />
            </View>
            <View style={styles.input1}>
              <View style={[styles.textfield, styles.textfieldSpaceBlock]}>
                <Image
                  style={styles.systemIconshome}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome1.png")}
                />
                <Text style={[styles.text1, styles.text1Typo]}>ค่าใช้จ่าย</Text>
              </View>
            </View>
          </View>
          <View style={[styles.cardswapComponent, styles.textfieldSpaceBlock]}>
            <View style={styles.swapItem}>
              <Text style={styles.swapComponent}>เพิ่มช่องข้อมูล</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonParent}>
          <Pressable
            style={[styles.button, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("Screen11")}
          >
            <Text style={[styles.button1, styles.buttonTypo]}>ยกเลิก</Text>
          </Pressable>
          <Pressable
            style={[styles.button2, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("Screen11")}
          >
            <Text style={[styles.button3, styles.buttonTypo]}>
              บันทึกข้อมูล
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text1Typo: {
    fontFamily: FontFamily.labelLB4Regular,
    textAlign: "left",
    fontSize: FontSize.labelLB4Regular_size,
    flex: 1,
  },
  textfieldSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
  },
  groupShadowBox: {
    padding: Padding.p_5xs,
    width: 380,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(181, 201, 235, 0.15)",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    height: 44,
    borderRadius: Border.br_8xs,
    justifyContent: "center",
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
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
    fontSize: FontSize.labelLB4Regular_size,
    lineHeight: 24,
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
    alignSelf: "stretch",
  },
  systemIconshome: {
    width: 24,
    height: 24,
    display: "none",
    overflow: "hidden",
  },
  text1: {
    color: Color.descriptiveTextColourTextLighter400,
    marginLeft: 8,
    lineHeight: 24,
    fontFamily: FontFamily.labelLB4Regular,
  },
  textfield: {
    borderStyle: "solid",
    borderColor: Color.disableDefaultDisableDefault,
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_base,
    flex: 1,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  input1: {
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  input: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  swapComponent: {
    lineHeight: 18,
    color: Color.primaryColourPrimary,
    fontSize: FontSize.buttonBT5SemiBold_size,
    fontFamily: FontFamily.labelLB4Regular,
    textAlign: "left",
  },
  swapItem: {
    backgroundColor: Color.colorLavender_100,
    borderStyle: "dashed",
    borderColor: Color.colorRoyalblue,
    borderRadius: 0.001,
    paddingHorizontal: Padding.p_102xl,
    justifyContent: "center",
    paddingVertical: Padding.p_5xs,
    borderWidth: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  cardswapComponent: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    paddingHorizontal: 0,
    marginTop: 8,
    alignSelf: "stretch",
  },
  group: {
    marginTop: 8,
  },
  container: {
    marginTop: 8,
  },
  frameView: {
    marginTop: 8,
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
    width: 382,
    flexDirection: "row",
    marginTop: 8,
  },
  frameParent: {
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  scrollview: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
});

export default Screen1;
