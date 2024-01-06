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
        <View style={[styles.frameGroup, styles.parent3FlexBox]}>
          <View
            style={[
              styles.basilIconsoutlineoutlinegeParent,
              styles.parentFlexBox,
            ]}
          >
            <Pressable
              style={[
                styles.basilIconsoutlineoutlinege,
                styles.systemIconscollapseExpandLayout,
              ]}
              onPress={() => navigation.navigate("Screen2")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/basil-iconsoutlineoutlinegeneralhome.png")}
              />
            </Pressable>
            <Text style={[styles.text, styles.textTypo1]}>
              นาแปลงใหญ่สีเขียว
            </Text>
          </View>
          <Image
            style={styles.image31Icon}
            resizeMode="cover"
            source={require("../assets/image-31.png")}
          />
          <Text style={[styles.text1, styles.textLayout1]}>กข 16 12 ไร่</Text>
        </View>
        <View style={[styles.view, styles.viewFlexBox]}>
          <View style={[styles.frameContainer, styles.viewFlexBox]}>
            <View style={styles.parent}>
              <Text style={[styles.text2, styles.textLayout]}>วันนี้</Text>
              <Text style={styles.text3}>30 พ.ย.</Text>
            </View>
            <Image
              style={styles.component5Icon}
              resizeMode="cover"
              source={require("../assets/component-51.png")}
            />
            <View style={styles.frameView}>
              <View style={styles.bithermometerHalfParent}>
                <Image
                  style={styles.bithermometerHalfIcon}
                  resizeMode="cover"
                  source={require("../assets/bithermometerhalf1.png")}
                />
                <Text style={[styles.text4, styles.textLayout]}>19°</Text>
              </View>
              <View style={styles.frameChild} />
              <View style={styles.bithermometerHighParent}>
                <Image
                  style={styles.bithermometerHalfIcon}
                  resizeMode="cover"
                  source={require("../assets/bithermometerhigh1.png")}
                />
                <Text style={[styles.text4, styles.textLayout]}>27°</Text>
              </View>
            </View>
            <View style={styles.component6}>
              <Text style={[styles.text6, styles.textLayout]}>แดดออก</Text>
            </View>
          </View>
        </View>
        <View style={[styles.group, styles.groupSpaceBlock]}>
          <Text style={[styles.text7, styles.textLayout1]}>ข้อมูลแปลง</Text>
          <View style={[styles.frameParent1, styles.parentFlexBox]}>
            <View style={styles.container}>
              <Text style={[styles.text8, styles.textLayout]}>พันธุ์ข้าว</Text>
              <Text
                style={[styles.text9, styles.textSpaceBlock]}
              >{`จำนวนพื้นที่ `}</Text>
              <Text style={[styles.text9, styles.textSpaceBlock]}>
                วันที่ปลูก
              </Text>
              <Text style={[styles.text9, styles.textSpaceBlock]}>
                วิธีการปลูก
              </Text>
              <Text style={[styles.text9, styles.textSpaceBlock]}>
                ชนิดของดิน
              </Text>
              <Text style={[styles.text9, styles.textSpaceBlock]}>
                แหล่งน้ำ
              </Text>
              <Text style={[styles.text9, styles.textSpaceBlock]}>
                สถานที่แปลง
              </Text>
            </View>
            <View style={styles.container}>
              <Text style={[styles.text15, styles.textTypo]}>กข 16</Text>
              <Text style={[styles.text16, styles.textTypo]}>12 ไร่</Text>
              <Text style={[styles.text16, styles.textTypo]}>12/05/2554</Text>
              <Text style={[styles.text16, styles.textTypo]}>หว่านน้ำตม</Text>
              <Text style={[styles.text16, styles.textTypo]}>
                ดินร่วนปนทราย
              </Text>
              <Text style={[styles.text16, styles.textTypo]}>ชลประทาน</Text>
              <Text style={[styles.text16, styles.textTypo]}>{`บ้านบุฝ้าย
อำเภอประจันตคาม
จังหวัดปราจีนบุุรี`}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.parent2, styles.groupShadowBox]}>
          <Text style={[styles.text22, styles.textLayout1]}>
            การปฏิบัติงานล่าสุด
          </Text>
          <View style={styles.frameParent2}>
            <View style={[styles.parent3, styles.parent3FlexBox]}>
              <Text style={[styles.text23, styles.textLayout1]}>เรื่อง</Text>
              <Text style={[styles.text24, styles.textLayout]}>ตัดหญ้า</Text>
              <Text style={[styles.text24, styles.textLayout]}>ใส่ปุ๋ย</Text>
              <Text style={[styles.text24, styles.textLayout]}>พ่นยา</Text>
            </View>
            <View style={[styles.parent3, styles.parent3FlexBox]}>
              <Text style={[styles.text23, styles.textLayout1]}>จำนวน</Text>
              <Text style={[styles.text24, styles.textLayout]}>2 ไร่</Text>
              <Text style={[styles.text24, styles.textLayout]}>4 ไร่</Text>
              <Text style={[styles.text24, styles.textLayout]}>4 ไร่</Text>
            </View>
            <View style={[styles.parent3, styles.parent3FlexBox]}>
              <Text style={[styles.text23, styles.textLayout1]}>
                ค่าใช้จ่าย
              </Text>
              <Text style={[styles.text24, styles.textLayout]}>100</Text>
              <Text style={[styles.text24, styles.textLayout]}>1500</Text>
              <Text style={[styles.text24, styles.textLayout]}>4500</Text>
            </View>
            <View style={[styles.parent3, styles.parent3FlexBox]}>
              <Text style={[styles.text23, styles.textLayout1]}>
                รายละเอียด
              </Text>
              <Text style={[styles.text24, styles.textLayout]}>
                นำมันเครื่อง
              </Text>
              <Text style={[styles.text24, styles.textLayout]}>15-15-15</Text>
              <Text style={[styles.text24, styles.textLayout]}>
                อีเขียนนาโน
              </Text>
            </View>
            <View style={[styles.parent3, styles.parent3FlexBox]}>
              <Text style={[styles.text23, styles.textLayout1]}>เพิ่มเติม</Text>
              <Text style={[styles.text24, styles.textLayout]}>หญ้าเยอะ</Text>
              <Text style={[styles.text24, styles.textLayout]}>เร่งราก</Text>
              <Text style={[styles.text24, styles.textLayout]}>เร่งผล</Text>
            </View>
          </View>
        </View>
        <View style={styles.input}>
          <View style={styles.input1}>
            <View style={styles.label}>
              <Text style={[styles.label1, styles.textTypo]}>รายการอื่นๆ</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status1.png")}
              />
            </View>
            <View style={styles.input2}>
              <View style={[styles.dropdown, styles.groupSpaceBlock]}>
                <Text style={[styles.text43, styles.textLayout1]}>
                  เลือกทำรายการ
                </Text>
                <Image
                  style={[
                    styles.systemIconscollapseExpand,
                    styles.systemIconscollapseExpandLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconscollapseexpand1.png")}
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
  scrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  parent3FlexBox: {
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  systemIconscollapseExpandLayout: {
    width: 24,
    height: 24,
  },
  textTypo1: {
    fontFamily: FontFamily.bodyBH5SemiBold,
    fontWeight: "600",
  },
  textLayout1: {
    lineHeight: 24,
    fontSize: FontSize.inputTextFieldPlaceholderIN4Regular_size,
  },
  viewFlexBox: {
    padding: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  textLayout: {
    lineHeight: 22,
    fontSize: FontSize.bodyB5Regular_size,
  },
  groupSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  textSpaceBlock: {
    marginTop: 6,
    lineHeight: 22,
    fontSize: FontSize.bodyB5Regular_size,
    alignSelf: "stretch",
  },
  textTypo: {
    color: Color.descriptiveTextColourTextNormal700,
    textAlign: "left",
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
  },
  groupShadowBox: {
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(181, 201, 235, 0.15)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    marginTop: 8,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  basilIconsoutlineoutlinege: {
    height: 24,
  },
  text: {
    fontSize: FontSize.bodyBH3SemiBold_size,
    lineHeight: 28,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    flex: 1,
  },
  basilIconsoutlineoutlinegeParent: {
    alignItems: "center",
  },
  image31Icon: {
    borderRadius: Border.br_base,
    width: 132,
    height: 88,
    marginTop: 8,
  },
  text1: {
    textAlign: "left",
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    marginTop: 8,
    color: Color.labelColorLightPrimary,
  },
  frameGroup: {
    paddingHorizontal: Padding.p_5xs,
    alignSelf: "stretch",
  },
  text2: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.bodyBH5SemiBold,
    fontWeight: "600",
  },
  text3: {
    fontSize: FontSize.bodyB6Regular_size,
    lineHeight: 18,
    textAlign: "left",
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    color: Color.labelColorLightPrimary,
  },
  parent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  component5Icon: {
    width: 33,
    height: 33,
    marginLeft: 8,
    overflow: "hidden",
  },
  bithermometerHalfIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  text4: {
    textAlign: "left",
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    color: Color.labelColorLightPrimary,
  },
  bithermometerHalfParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameChild: {
    backgroundColor: Color.colorGainsboro_200,
    width: 2,
    marginLeft: 6,
    height: 24,
  },
  bithermometerHighParent: {
    marginLeft: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  frameView: {
    marginLeft: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text6: {
    position: "absolute",
    top: "0%",
    left: "0%",
    display: "flex",
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  component6: {
    width: 85,
    height: 22,
    marginLeft: 8,
  },
  frameContainer: {
    borderRadius: Border.br_5xs,
    padding: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  view: {
    shadowColor: "rgba(59, 89, 152, 0.1)",
    shadowRadius: 15,
    elevation: 15,
    height: 56,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    padding: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    marginTop: 8,
    justifyContent: "center",
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  text7: {
    color: Color.baseColourBlack,
    textAlign: "center",
    fontFamily: FontFamily.bodyBH5SemiBold,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  text8: {
    textAlign: "left",
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    color: Color.labelColorLightPrimary,
    alignSelf: "stretch",
  },
  text9: {
    textAlign: "left",
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    color: Color.labelColorLightPrimary,
  },
  container: {
    flex: 1,
  },
  text15: {
    lineHeight: 22,
    fontSize: FontSize.bodyB5Regular_size,
    alignSelf: "stretch",
  },
  text16: {
    marginTop: 6,
    lineHeight: 22,
    fontSize: FontSize.bodyB5Regular_size,
    alignSelf: "stretch",
  },
  frameParent1: {
    marginTop: 8,
  },
  group: {
    height: 282,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(181, 201, 235, 0.15)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    marginTop: 8,
    justifyContent: "center",
  },
  text22: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.bodyBH5SemiBold,
    fontWeight: "600",
  },
  text23: {
    textAlign: "left",
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    color: Color.labelColorLightPrimary,
  },
  text24: {
    color: Color.baseColourBase500,
    textAlign: "left",
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    marginTop: 8,
  },
  parent3: {
    paddingHorizontal: Padding.p_9xs,
  },
  frameParent2: {
    marginTop: 8,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  parent2: {
    padding: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  label1: {
    lineHeight: 20,
    fontSize: FontSize.inputTextFieldPlaceholderIN4Regular_size,
    color: Color.descriptiveTextColourTextNormal700,
    flex: 1,
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
  text43: {
    color: Color.descriptiveTextColourTextLighter400,
    textAlign: "left",
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    flex: 1,
  },
  systemIconscollapseExpand: {
    marginLeft: 8,
    height: 24,
    overflow: "hidden",
  },
  dropdown: {
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    flexDirection: "row",
    flex: 1,
  },
  input2: {
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  input1: {
    alignSelf: "stretch",
  },
  input: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  frameParent: {
    width: 412,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  scrollview: {
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
});

export default Screen1;
