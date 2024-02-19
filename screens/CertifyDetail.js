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
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const CertifyDetail = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.certifydetail}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.certifyDetailScrollViewContent}
    >
      <View style={styles.certifydetailInner}>
        <View style={styles.frameParent}>
          <View style={[styles.iconixtosolidcloseParent, styles.parentFlexBox]}>
            <Pressable
              style={styles.checkboxStateLayout}
              onPress={() => navigation.navigate("Status1")}
            >
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/iconixtosolidclose.png")}
              />
            </Pressable>
            <Text style={[styles.gap, styles.gapFlexBox]}>
              ข้อมูลยื่นขอรับรอง GAP
            </Text>
          </View>
          <Text style={[styles.text, styles.textSpaceBlock]}>
            ข้อมูลทั่วไปเกี่ยวกับกลุ่มที่ขอการรับรอง
          </Text>
          <View style={styles.textSpaceBlock}>
            <View style={styles.label}>
              <Text style={styles.label1Typo}>ชื่อกลุ่ม</Text>
              <Image
                style={styles.systemIconsinfo}
                resizeMode="cover"
                source={require("../assets/1-system-iconsinfo2.png")}
              />
            </View>
            <View style={styles.input1}>
              <View style={[styles.textfield, styles.textfieldBorder]}>
                <Image
                  style={[styles.systemIconshome, styles.checkboxStateLayout]}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome3.png")}
                />
                <Text style={[styles.text1, styles.textTypo]}>
                  นาแปลงใหญ่สีเขียว
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.textSpaceBlock}>
            <View style={styles.label}>
              <Text style={styles.label1Typo}>ที่อยู่</Text>
              <Image
                style={styles.systemIconsinfo}
                resizeMode="cover"
                source={require("../assets/1-system-iconsinfo2.png")}
              />
            </View>
            <View style={styles.input1}>
              <View style={[styles.textfield, styles.textfieldBorder]}>
                <Image
                  style={[styles.systemIconshome, styles.checkboxStateLayout]}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome3.png")}
                />
                <Text style={[styles.text1, styles.textTypo]}>{`บ้านบุฝ้าย
อำเภอประจันตคาม
จังหวัดปราจีนบุุรี`}</Text>
              </View>
            </View>
          </View>
          <View style={styles.textSpaceBlock}>
            <View style={styles.label}>
              <Text style={styles.label1Typo}>ชื่อประธาน</Text>
              <Image
                style={styles.systemIconsinfo}
                resizeMode="cover"
                source={require("../assets/1-system-iconsinfo2.png")}
              />
            </View>
            <View style={styles.input1}>
              <View style={[styles.textfield, styles.textfieldBorder]}>
                <Image
                  style={[styles.systemIconshome, styles.checkboxStateLayout]}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome3.png")}
                />
                <Text style={[styles.text1, styles.textTypo]}>
                  นายสุรศักดิ์ หนูด้วง
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.textSpaceBlock}>
            <View style={styles.label}>
              <Text style={styles.label1Typo}>เลขประจำตัวประชาชน</Text>
              <Image
                style={styles.systemIconsinfo}
                resizeMode="cover"
                source={require("../assets/1-system-iconsinfo2.png")}
              />
            </View>
            <View style={styles.input1}>
              <View style={[styles.textfield, styles.textfieldBorder]}>
                <Image
                  style={[styles.systemIconshome, styles.checkboxStateLayout]}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome3.png")}
                />
                <Text style={[styles.text1, styles.textTypo]}>
                  1930500255741
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.textSpaceBlock}>
            <View style={styles.label}>
              <Text style={styles.label1Typo}>ที่อยู่(ประธาน)</Text>
              <Image
                style={styles.systemIconsinfo}
                resizeMode="cover"
                source={require("../assets/1-system-iconsinfo2.png")}
              />
            </View>
            <View style={styles.input1}>
              <View style={[styles.textfield, styles.textfieldBorder]}>
                <Image
                  style={[styles.systemIconshome, styles.checkboxStateLayout]}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome3.png")}
                />
                <Text style={[styles.text1, styles.textTypo]}>{`บ้านบุฝ้าย
อำเภอประจันตคาม
จังหวัดปราจีนบุุรี`}</Text>
              </View>
            </View>
          </View>
          <Text style={[styles.text, styles.textSpaceBlock]}>
            รายละเอียดของกลุ่ม
          </Text>
          <View style={styles.textSpaceBlock}>
            <View style={styles.label}>
              <Text style={styles.label1Typo}>ชนิดพืช</Text>
              <Image
                style={styles.systemIconsinfo}
                resizeMode="cover"
                source={require("../assets/1-system-iconsinfo2.png")}
              />
            </View>
            <View style={styles.input1}>
              <View style={[styles.textfield, styles.textfieldBorder]}>
                <Image
                  style={[styles.systemIconshome, styles.checkboxStateLayout]}
                  resizeMode="cover"
                  source={require("../assets/1-system-iconshome3.png")}
                />
                <Text style={[styles.text1, styles.textTypo]}>ข้าว กข16</Text>
              </View>
            </View>
          </View>
          <View style={[styles.view, styles.textSpaceBlock]}>
            <View style={styles.foodfarmerParent}>
              <Image
                style={styles.foodfarmerIcon}
                resizeMode="cover"
                source={require("../assets/2-foodfarmer1.png")}
              />
              <Text style={styles.text8}>หัวหน้า</Text>
            </View>
            <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
              <View style={styles.foodfarmerParent}>
                <Image
                  style={styles.foodfarmerIcon}
                  resizeMode="cover"
                  source={require("../assets/2-foodfarmer2.png")}
                />
                <Text style={styles.text8}>เลขา</Text>
              </View>
              <View style={styles.frameViewSpaceBlock}>
                <Image
                  style={styles.foodfarmerIcon}
                  resizeMode="cover"
                  source={require("../assets/2-foodfarmer2.png")}
                />
                <Text style={styles.text8}>บัญชี</Text>
              </View>
              <View style={[styles.frameView, styles.frameViewSpaceBlock]}>
                <Image
                  style={styles.foodfarmerIcon}
                  resizeMode="cover"
                  source={require("../assets/2-foodfarmer2.png")}
                />
                <Text style={styles.text8}>เลขา</Text>
              </View>
            </View>
            <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
              <View style={styles.foodfarmerParent1}>
                <Image
                  style={styles.foodfarmerIcon}
                  resizeMode="cover"
                  source={require("../assets/2-foodfarmer2.png")}
                />
                <Text style={styles.text8}>สมาชิก</Text>
              </View>
              <View style={styles.foodfarmerParent2}>
                <Image
                  style={styles.foodfarmerIcon}
                  resizeMode="cover"
                  source={require("../assets/2-foodfarmer2.png")}
                />
                <Text style={styles.text8}>สมาชิก</Text>
              </View>
              <View style={styles.foodfarmerParent2}>
                <Image
                  style={styles.foodfarmerIcon}
                  resizeMode="cover"
                  source={require("../assets/2-foodfarmer2.png")}
                />
                <Text style={styles.text8}>สมาชิก</Text>
              </View>
              <View style={styles.foodfarmerParent2}>
                <Image
                  style={styles.foodfarmerIcon}
                  resizeMode="cover"
                  source={require("../assets/2-foodfarmer2.png")}
                />
                <Text style={styles.text8}>สมาชิก</Text>
              </View>
            </View>
            <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
              <View style={styles.foodfarmerParent1}>
                <Image
                  style={styles.foodfarmerIcon}
                  resizeMode="cover"
                  source={require("../assets/2-foodfarmer2.png")}
                />
                <Text style={styles.text8}>สมาชิก</Text>
              </View>
              <View style={styles.foodfarmerParent2}>
                <Image
                  style={styles.foodfarmerIcon}
                  resizeMode="cover"
                  source={require("../assets/2-foodfarmer2.png")}
                />
                <Text style={styles.text8}>สมาชิก</Text>
              </View>
              <View style={styles.foodfarmerParent2}>
                <Image
                  style={styles.foodfarmerIcon}
                  resizeMode="cover"
                  source={require("../assets/2-foodfarmer2.png")}
                />
                <Text style={styles.text8}>สมาชิก</Text>
              </View>
              <View style={styles.foodfarmerParent2}>
                <Image
                  style={styles.foodfarmerIcon}
                  resizeMode="cover"
                  source={require("../assets/2-foodfarmer2.png")}
                />
                <Text style={styles.text8}>สมาชิก</Text>
              </View>
            </View>
            <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
              <View style={styles.foodfarmerParent1}>
                <Image
                  style={styles.foodfarmerIcon}
                  resizeMode="cover"
                  source={require("../assets/2-foodfarmer2.png")}
                />
                <Text style={styles.text8}>สมาชิก</Text>
              </View>
              <View style={styles.foodfarmerParent2}>
                <Image
                  style={styles.foodfarmerIcon}
                  resizeMode="cover"
                  source={require("../assets/2-foodfarmer2.png")}
                />
                <Text style={styles.text8}>สมาชิก</Text>
              </View>
              <View style={styles.foodfarmerParent2}>
                <Image
                  style={styles.foodfarmerIcon}
                  resizeMode="cover"
                  source={require("../assets/2-foodfarmer2.png")}
                />
                <Text style={styles.text8}>สมาชิก</Text>
              </View>
              <View style={styles.foodfarmerParent2}>
                <Image
                  style={styles.foodfarmerIcon}
                  resizeMode="cover"
                  source={require("../assets/2-foodfarmer2.png")}
                />
                <Text style={styles.text8}>สมาชิก</Text>
              </View>
            </View>
            <View style={[styles.inputParent, styles.frameGroupSpaceBlock]}>
              <View style={styles.input12}>
                <View style={styles.label}>
                  <Text style={styles.label1Typo}>จำนวนสมาชิก</Text>
                  <Image
                    style={styles.systemIconsinfo}
                    resizeMode="cover"
                    source={require("../assets/1-system-iconsinfo2.png")}
                  />
                </View>
                <View style={styles.input1}>
                  <View style={[styles.textfield6, styles.textfieldBorder]}>
                    <Image
                      style={[
                        styles.systemIconshome,
                        styles.checkboxStateLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/1-system-iconshome1.png")}
                    />
                    <Text style={[styles.text24, styles.textTypo]}>16 คน</Text>
                  </View>
                </View>
              </View>
              <View style={styles.input14}>
                <View style={styles.label}>
                  <Text style={styles.label1Typo}>จำนวนพื้นที่</Text>
                  <Image
                    style={styles.systemIconsinfo}
                    resizeMode="cover"
                    source={require("../assets/1-system-iconsinfo2.png")}
                  />
                </View>
                <View style={styles.input1}>
                  <View style={[styles.textfield6, styles.textfieldBorder]}>
                    <Image
                      style={[
                        styles.systemIconshome,
                        styles.checkboxStateLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/1-system-iconshome1.png")}
                    />
                    <Text style={[styles.text24, styles.textTypo]}>
                      100 ไร่
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.parent, styles.textSpaceBlock]}>
            <Text style={[styles.text26, styles.textTypo]}>
              ระบบการควบคุมภายในที่มี
            </Text>
            <View style={[styles.group, styles.textSpaceBlock]}>
              <Text style={[styles.text27, styles.textTypo]}>
                สัญญา/ใบสมัคร/คำรับรอง และหลักเกณฑ์และเงื่อไขของกลุ่ม
              </Text>
              <View style={styles.selectionControl}>
                <View style={styles.checkboxStateLayout}>
                  <View
                    style={[styles.checkboxState, styles.checkboxStateLayout]}
                  >
                    <View
                      style={[styles.checkboxErrorState, styles.iconLayout]}
                    >
                      <View style={styles.rectangle} />
                    </View>
                  </View>
                </View>
                <Text style={[styles.checkbox, styles.label1Typo]}>
                  Checkbox
                </Text>
              </View>
            </View>
            <View style={[styles.container, styles.textSpaceBlock]}>
              <Text style={[styles.text28, styles.textTypo]}>
                การตรวจติดตามคุณภาพภายใน และการปฏิบัติแก้ไข
              </Text>
              <View style={styles.selectionControl}>
                <View style={styles.checkboxStateLayout}>
                  <View
                    style={[styles.checkboxState, styles.checkboxStateLayout]}
                  >
                    <View
                      style={[styles.checkboxErrorState, styles.iconLayout]}
                    >
                      <View style={styles.rectangle} />
                    </View>
                  </View>
                </View>
                <Text style={[styles.checkbox, styles.label1Typo]}>
                  Checkbox
                </Text>
              </View>
            </View>
            <View style={[styles.container, styles.textSpaceBlock]}>
              <Text style={[styles.text27, styles.textTypo]}>
                การจัดการขอร้องเรียน
              </Text>
              <View style={styles.selectionControl}>
                <View style={styles.checkboxStateLayout}>
                  <View
                    style={[styles.checkboxState, styles.checkboxStateLayout]}
                  >
                    <View
                      style={[styles.checkboxErrorState, styles.iconLayout]}
                    >
                      <View style={styles.rectangle} />
                    </View>
                  </View>
                </View>
                <Text style={[styles.checkbox, styles.label1Typo]}>
                  Checkbox
                </Text>
              </View>
            </View>
            <View style={[styles.container, styles.textSpaceBlock]}>
              <Text style={[styles.text27, styles.textTypo]}>
                การควบคุมเอกสาร และบันทึก
              </Text>
              <View style={styles.selectionControl}>
                <View style={styles.checkboxStateLayout}>
                  <View
                    style={[styles.checkboxState, styles.checkboxStateLayout]}
                  >
                    <View
                      style={[styles.checkboxErrorState, styles.iconLayout]}
                    >
                      <View style={styles.rectangle} />
                    </View>
                  </View>
                </View>
                <Text style={[styles.checkbox, styles.label1Typo]}>
                  Checkbox
                </Text>
              </View>
            </View>
            <View style={[styles.container, styles.textSpaceBlock]}>
              <Text style={[styles.text27, styles.textTypo]}>การฝึกอบรม</Text>
              <View style={styles.selectionControl}>
                <View style={styles.checkboxStateLayout}>
                  <View
                    style={[styles.checkboxState, styles.checkboxStateLayout]}
                  >
                    <View
                      style={[styles.checkboxErrorState, styles.iconLayout]}
                    >
                      <View style={styles.rectangle} />
                    </View>
                  </View>
                </View>
                <Text style={[styles.checkbox, styles.label1Typo]}>
                  Checkbox
                </Text>
              </View>
            </View>
            <View style={[styles.container, styles.textSpaceBlock]}>
              <Text
                style={[styles.text27, styles.textTypo]}
              >{`ระบบการตามสอบผลิตผล 
(Traceability of Produce)`}</Text>
              <View style={styles.selectionControl}>
                <View style={styles.checkboxStateLayout}>
                  <View
                    style={[styles.checkboxState, styles.checkboxStateLayout]}
                  >
                    <View
                      style={[styles.checkboxErrorState, styles.iconLayout]}
                    >
                      <View style={styles.rectangle} />
                    </View>
                  </View>
                </View>
                <Text style={[styles.checkbox, styles.label1Typo]}>
                  Checkbox
                </Text>
              </View>
            </View>
            <Text style={[styles.text, styles.textSpaceBlock]}>
              อื่นๆ โปรดระบุ
            </Text>
          </View>
          <View style={styles.textSpaceBlock}>
            <Text style={[styles.text26, styles.textTypo]}>
              บุคคลที่สามารถติดต่อได้ (ควรเป็นบุคคลที่เข้าใจระบบของกลุ่ม/องค์กร)
            </Text>
            <View style={styles.textSpaceBlock}>
              <View
                style={[styles.iconixtosolidcloseParent, styles.parentFlexBox]}
              >
                <Text style={[styles.text34, styles.textTypo]}>
                  ชื่อ สุรศักดิ์ หนูด้วง
                </Text>
                <Text style={[styles.text35, styles.textTypo]}>
                  ตำแหน่ง ประธาน
                </Text>
              </View>
              <View style={[styles.parent6, styles.parent6SpaceBlock]}>
                <Text style={[styles.text34, styles.textTypo]}>
                  โทรศัพท 095-1574463
                </Text>
                <Text style={[styles.text35, styles.textTypo]}>โทรสาร</Text>
              </View>
              <Text
                style={[
                  styles.eMailSurasakjak0604gmailco,
                  styles.parent6SpaceBlock,
                ]}
              >
                E-mail surasakjak0604@gmail.com
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  certifyDetailScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  gapFlexBox: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    flex: 1,
  },
  textSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  textfieldBorder: {
    paddingVertical: Padding.p_3xs,
    borderColor: Color.colorGainsboro_100,
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    flex: 1,
  },
  checkboxStateLayout: {
    height: 24,
    width: 24,
  },
  textTypo: {
    fontSize: FontSize.bodyRegular400_size,
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    lineHeight: 24,
  },
  frameGroupSpaceBlock: {
    marginTop: 31,
    flexDirection: "row",
  },
  frameViewSpaceBlock: {
    marginLeft: 32,
    alignItems: "center",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  label1Typo: {
    color: Color.descriptiveTextColourTextNormal700,
    textAlign: "left",
    fontSize: FontSize.bodyRegular400_size,
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    lineHeight: 24,
  },
  parent6SpaceBlock: {
    marginTop: 11,
    alignSelf: "stretch",
  },
  gap: {
    fontSize: FontSize.titleT3SemiBold_size,
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    lineHeight: 24,
    textAlign: "center",
  },
  iconixtosolidcloseParent: {
    alignSelf: "stretch",
  },
  text: {
    textAlign: "left",
    fontSize: FontSize.bodyRegular400_size,
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    lineHeight: 24,
    color: Color.labelColorLightPrimary,
  },
  systemIconsinfo: {
    width: 18,
    height: 18,
    marginLeft: 4,
    display: "none",
    overflow: "hidden",
  },
  label: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  systemIconshome: {
    display: "none",
    overflow: "hidden",
  },
  text1: {
    color: Color.disableDefaultOnDisableDefault,
    marginLeft: 8,
    textAlign: "left",
    flex: 1,
  },
  textfield: {
    backgroundColor: Color.disableLightDisableLight,
  },
  input1: {
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  foodfarmerIcon: {
    width: 44,
    height: 44,
    overflow: "hidden",
  },
  text8: {
    fontSize: FontSize.buttonBT3SemiBold_size,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.selectorS6SemiBold,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  foodfarmerParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameView: {
    justifyContent: "center",
  },
  frameGroup: {
    justifyContent: "center",
    alignItems: "center",
  },
  foodfarmerParent1: {
    alignItems: "flex-end",
  },
  foodfarmerParent2: {
    marginLeft: 36,
    alignItems: "flex-end",
  },
  text24: {
    color: Color.neutralColourOnBaseBG800,
    marginLeft: 8,
    textAlign: "left",
    flex: 1,
  },
  textfield6: {
    backgroundColor: Color.gray00,
    paddingVertical: Padding.p_3xs,
    borderColor: Color.colorGainsboro_100,
    borderRadius: Border.br_5xs,
  },
  input12: {
    flex: 1,
  },
  input14: {
    marginLeft: 8,
    flex: 1,
  },
  inputParent: {
    alignSelf: "stretch",
  },
  view: {
    height: 587,
    alignItems: "center",
  },
  text26: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.bodyRegular400_size,
    alignSelf: "stretch",
  },
  text27: {
    width: 396,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.bodyRegular400_size,
  },
  rectangle: {
    top: 2,
    left: 2,
    borderRadius: Border.br_7xs,
    borderColor: Color.colorLightgray,
    width: 20,
    height: 20,
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.gray00,
  },
  checkboxErrorState: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  checkboxState: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  checkbox: {
    marginLeft: 8,
    display: "none",
  },
  selectionControl: {
    flexDirection: "row",
  },
  group: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  text28: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.bodyRegular400_size,
    flex: 1,
  },
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  parent: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
  },
  text34: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.bodyRegular400_size,
  },
  text35: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    flex: 1,
  },
  parent6: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  eMailSurasakjak0604gmailco: {
    textAlign: "left",
    fontSize: FontSize.bodyRegular400_size,
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    lineHeight: 24,
    color: Color.labelColorLightPrimary,
  },
  frameParent: {
    width: 412,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  certifydetailInner: {
    paddingVertical: Padding.p_9xl,
    paddingHorizontal: 0,
  },
  certifydetail: {
    maxWidth: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: Color.gray00,
  },
});

export default CertifyDetail;
