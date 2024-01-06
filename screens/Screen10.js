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
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const Screen10 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.scrollview}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View
            style={[
              styles.basilIconsoutlineoutlinegeParent,
              styles.parentFlexBox,
            ]}
          >
            <Pressable
              style={styles.systemIconshomeLayout}
              onPress={() => navigation.navigate("Screen11")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/basil-iconsoutlineoutlinegeneralhome.png")}
              />
            </Pressable>
            <Text style={styles.text}>วิเคราะห์ดิน</Text>
          </View>
          <View style={styles.input}>
            <View style={styles.labelFlexBox}>
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
              <View style={styles.textfield}>
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
          <View style={[styles.inputParent, styles.parentFrameFlexBox]}>
            <View style={styles.input2}>
              <View style={styles.labelFlexBox}>
                <Text style={[styles.label1, styles.text1Typo]}>ไนโตรเจน</Text>
                <Image
                  style={styles.iconStatus}
                  resizeMode="cover"
                  source={require("../assets/icon-status2.png")}
                />
              </View>
              <View style={[styles.input1, styles.labelFlexBox]}>
                <View style={styles.textfield}>
                  <Image
                    style={[
                      styles.systemIconshome,
                      styles.systemIconshomeLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/1-system-iconshome1.png")}
                  />
                  <Text style={[styles.text1, styles.text1Typo]}>N</Text>
                </View>
              </View>
            </View>
            <View style={styles.input4}>
              <View style={styles.labelFlexBox}>
                <Text style={[styles.label1, styles.text1Typo]}>ฟอสฟอรัส</Text>
                <Image
                  style={styles.iconStatus}
                  resizeMode="cover"
                  source={require("../assets/icon-status3.png")}
                />
              </View>
              <View style={[styles.input1, styles.labelFlexBox]}>
                <View style={styles.textfield}>
                  <Image
                    style={[
                      styles.systemIconshome,
                      styles.systemIconshomeLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/1-system-iconshome3.png")}
                  />
                  <Text style={[styles.text1, styles.text1Typo]}>{`P `}</Text>
                </View>
              </View>
            </View>
            <View style={styles.input4}>
              <View style={styles.labelFlexBox}>
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
                <View style={styles.textfield}>
                  <Image
                    style={[
                      styles.systemIconshome,
                      styles.systemIconshomeLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/1-system-iconshome4.png")}
                  />
                  <Text style={[styles.text1, styles.text1Typo]}>K</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameContainer}>
          <View style={styles.frameView}>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={styles.textTypo1}>ข้าว</Text>
              <Text style={styles.textTypo}>อื่นๆ</Text>
            </View>
            <View style={[styles.frameParent1, styles.parentFrameFlexBox]}>
              <View style={styles.notosheafParentBorder}>
                <Image
                  style={styles.notosheafOfRiceIcon}
                  resizeMode="cover"
                  source={require("../assets/notosheafofrice.png")}
                />
                <View style={styles.wrapper}>
                  <Text style={styles.textTypo}>กข18</Text>
                </View>
              </View>
              <View
                style={[
                  styles.notosheafOfRiceGroup,
                  styles.notosheafParentBorder,
                ]}
              >
                <Image
                  style={styles.notosheafOfRiceIcon}
                  resizeMode="cover"
                  source={require("../assets/notosheafofrice.png")}
                />
                <View style={styles.wrapper}>
                  <Text style={styles.textTypo}>ปทุมธานี 60</Text>
                </View>
              </View>
              <View
                style={[
                  styles.notosheafOfRiceGroup,
                  styles.notosheafParentBorder,
                ]}
              >
                <Image
                  style={styles.notosheafOfRiceIcon}
                  resizeMode="cover"
                  source={require("../assets/notosheafofrice.png")}
                />
                <View style={styles.wrapper}>
                  <Text style={styles.textTypo}>พัทลุง 60</Text>
                </View>
              </View>
              <View
                style={[
                  styles.notosheafOfRiceGroup,
                  styles.notosheafParentBorder,
                ]}
              >
                <Image
                  style={styles.notosheafOfRiceIcon}
                  resizeMode="cover"
                  source={require("../assets/notosheafofrice.png")}
                />
                <View style={styles.wrapper}>
                  <Text style={styles.textTypo}>ขาวดอกมะลิ</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.input}>
            <View style={[styles.group, styles.parentFlexBox]}>
              <Text style={styles.textTypo1}>พืชหลังการเก็บเกี่ยว</Text>
              <Text style={styles.textTypo}>อื่นๆ</Text>
            </View>
            <View style={[styles.frameParent1, styles.parentFrameFlexBox]}>
              <View
                style={[
                  styles.gameIconsjellyBeansParent,
                  styles.notosheafParentBorder,
                ]}
              >
                <Image
                  style={styles.notosheafOfRiceIcon}
                  resizeMode="cover"
                  source={require("../assets/gameiconsjellybeans.png")}
                />
                <Text style={[styles.text13, styles.textTypo]}>ถั่วเขียว</Text>
              </View>
              <View
                style={[
                  styles.notoV1earOfCornParent,
                  styles.notosheafParentBorder,
                ]}
              >
                <Image
                  style={styles.notosheafOfRiceIcon}
                  resizeMode="cover"
                  source={require("../assets/notov1earofcorn.png")}
                />
                <Text style={[styles.text13, styles.textTypo]}>ข้าวโพด</Text>
              </View>
              <View
                style={[
                  styles.notoV1earOfCornParent,
                  styles.notosheafParentBorder,
                ]}
              >
                <Image
                  style={styles.image19Icon}
                  resizeMode="cover"
                  source={require("../assets/image-19.png")}
                />
                <Text style={[styles.text13, styles.textTypo]}>มันเทศ</Text>
              </View>
              <View
                style={[
                  styles.notoV1earOfCornParent,
                  styles.notosheafParentBorder,
                ]}
              >
                <Image
                  style={styles.image19Icon}
                  resizeMode="cover"
                  source={require("../assets/image-20.png")}
                />
                <Text style={[styles.text13, styles.textTypo]}>ตานตะวัน</Text>
              </View>
            </View>
            <View style={[styles.frameParent4, styles.frameParentLayout]}>
              <View style={[styles.group, styles.parentFlexBox]}>
                <Text style={styles.textTypo1}>ปุ๋ย</Text>
                <Text style={styles.textTypo}>อื่นๆ</Text>
              </View>
              <View style={[styles.frameParent5, styles.parentFrameFlexBox]}>
                <View style={styles.parentBorder}>
                  <Image
                    style={styles.image21Icon}
                    resizeMode="cover"
                    source={require("../assets/image-21.png")}
                  />
                  <Text style={[styles.text13, styles.textTypo]}>กระต่าย</Text>
                </View>
                <View style={[styles.image22Parent, styles.parentBorder]}>
                  <Image
                    style={styles.image22Icon}
                    resizeMode="cover"
                    source={require("../assets/image-22.png")}
                  />
                  <Text style={[styles.text13, styles.textTypo]}>ภูมรกต</Text>
                </View>
                <View style={[styles.image22Parent, styles.parentBorder]}>
                  <Image
                    style={styles.image23Icon}
                    resizeMode="cover"
                    source={require("../assets/image-23.png")}
                  />
                  <Text style={[styles.text13, styles.textTypo]}>ซอยล์เมต</Text>
                </View>
                <View style={[styles.image22Parent, styles.parentBorder]}>
                  <Image
                    style={styles.image23Icon}
                    resizeMode="cover"
                    source={require("../assets/image-24.png")}
                  />
                  <Text style={[styles.text13, styles.textTypo]}>ค้างคาว</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frameParent6, styles.frameParentLayout]}>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text23, styles.textTypo1]}>
                การปรับปุงดิน
              </Text>
              <Text style={styles.textTypo}>อื่นๆ</Text>
            </View>
            <View style={[styles.frameParent1, styles.parentFrameFlexBox]}>
              <View
                style={[
                  styles.gameIconsjellyBeansParent,
                  styles.notosheafParentBorder,
                ]}
              >
                <Image
                  style={styles.image25Icon}
                  resizeMode="cover"
                  source={require("../assets/image-25.png")}
                />
                <Text style={[styles.text13, styles.textTypo]}>ปุ๋ยหมัก</Text>
              </View>
              <View
                style={[
                  styles.notoV1earOfCornParent,
                  styles.notosheafParentBorder,
                ]}
              >
                <Image
                  style={styles.image26Icon}
                  resizeMode="cover"
                  source={require("../assets/image-26.png")}
                />
                <Text style={[styles.text13, styles.textTypo]}>ปุ๋ยคอก</Text>
              </View>
              <View
                style={[
                  styles.notoV1earOfCornParent,
                  styles.notosheafParentBorder,
                ]}
              >
                <Image
                  style={styles.image27Icon}
                  resizeMode="cover"
                  source={require("../assets/image-27.png")}
                />
                <Text style={[styles.text13, styles.textTypo]}>ปอเทียง</Text>
              </View>
              <View
                style={[
                  styles.notoV1earOfCornParent,
                  styles.notosheafParentBorder,
                ]}
              >
                <Image
                  style={styles.image28Icon}
                  resizeMode="cover"
                  source={require("../assets/image-28.png")}
                />
                <Text style={[styles.text13, styles.textTypo]}>
                  ปุ๋ยอินทรีย์
                </Text>
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
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.labelLB4Regular,
    fontSize: FontSize.labelLB4Regular_size,
    flex: 1,
  },
  labelFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  systemIconshomeLayout: {
    height: 24,
    width: 24,
  },
  parentFrameFlexBox: {
    padding: Padding.p_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  notosheafParentBorder: {
    borderColor: Color.colorLightgray,
    padding: Padding.p_5xs,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  textTypo: {
    lineHeight: 18,
    fontSize: FontSize.bodyB6Regular_size,
    textAlign: "left",
    fontFamily: FontFamily.labelLB4Regular,
    color: Color.labelColorLightPrimary,
  },
  frameParentLayout: {
    height: 126,
    alignSelf: "stretch",
  },
  parentBorder: {
    height: 86,
    borderColor: Color.colorLightgray,
    justifyContent: "center",
    padding: Padding.p_5xs,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flex: 1,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  textTypo1: {
    lineHeight: 22,
    fontSize: FontSize.buttonBT5SemiBold_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: FontSize.titleT4SemiBold_size,
    lineHeight: 28,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.buttonBT5SemiBold,
    fontWeight: "600",
    flex: 1,
  },
  basilIconsoutlineoutlinegeParent: {
    alignSelf: "stretch",
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
    borderColor: Color.disableDefaultDisableDefault,
    paddingVertical: Padding.p_5xs,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flex: 1,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  input1: {
    marginTop: 4,
  },
  input: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  input2: {
    flex: 1,
  },
  input4: {
    marginLeft: 4,
    flex: 1,
  },
  inputParent: {
    opacity: 0.8,
    marginTop: 8,
  },
  frameGroup: {
    alignSelf: "stretch",
  },
  parent: {
    alignSelf: "stretch",
  },
  notosheafOfRiceIcon: {
    width: 44,
    height: 44,
    overflow: "hidden",
  },
  wrapper: {
    marginTop: 8,
  },
  notosheafOfRiceGroup: {
    marginLeft: 8,
  },
  frameParent1: {
    marginTop: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  frameView: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  group: {
    width: 343,
  },
  text13: {
    marginTop: 8,
  },
  gameIconsjellyBeansParent: {
    justifyContent: "center",
  },
  notoV1earOfCornParent: {
    justifyContent: "center",
    marginLeft: 8,
  },
  image19Icon: {
    width: 45,
    height: 44,
  },
  image21Icon: {
    width: 38,
    height: 44,
  },
  image22Icon: {
    width: 31,
    height: 44,
  },
  image22Parent: {
    marginLeft: 8,
  },
  image23Icon: {
    width: 29,
    height: 44,
  },
  frameParent5: {
    marginTop: 2,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  frameParent4: {
    marginTop: 2,
  },
  text23: {
    flex: 1,
  },
  image25Icon: {
    width: 60,
    height: 44,
  },
  image26Icon: {
    width: 59,
    height: 44,
  },
  image27Icon: {
    width: 67,
    height: 44,
  },
  image28Icon: {
    width: 58,
    height: 44,
  },
  frameParent6: {
    alignItems: "flex-end",
    marginTop: 8,
  },
  frameContainer: {
    height: 522,
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

export default Screen10;
