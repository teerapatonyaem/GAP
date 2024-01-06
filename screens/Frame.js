import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, FontSize, Border } from "../GlobalStyles";

const Frame = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <View style={styles.frameParent}>
        <View style={styles.basilIconsoutlineoutlinegeParent}>
          <Pressable
            style={styles.frontNumberIconLayout}
            onPress={() => navigation.navigate("Screen11")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/basil-iconsoutlineoutlinegeneralhome1.png")}
            />
          </Pressable>
          <Text style={[styles.gap, styles.gapTypo]}>
            สถานะการยื่นขอรับรอง GAP
          </Text>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.stepFlexBox1}>
            <View style={styles.stepCircle}>
              <View style={[styles.stepCircleCiColor, styles.stepFlexBox]}>
                <Image
                  style={[styles.frontNumberIcon, styles.frontNumberIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/front-number2.png")}
                />
              </View>
            </View>
            <Text style={[styles.text, styles.gapTypo]}>ส่งสำเร็จ</Text>
          </View>
          <View style={[styles.stepCircleGroup, styles.stepFlexBox1]}>
            <View style={styles.stepCircle}>
              <View style={[styles.stepCircleDisableColor, styles.stepFlexBox]}>
                <Image
                  style={[styles.frontNumberIcon, styles.frontNumberIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/front-number3.png")}
                />
              </View>
            </View>
            <Text style={[styles.text, styles.gapTypo]}>รับข้อมูล</Text>
          </View>
          <View style={[styles.stepCircleGroup, styles.stepFlexBox1]}>
            <View style={styles.stepCircle}>
              <View style={[styles.stepCircleDisableColor, styles.stepFlexBox]}>
                <Image
                  style={[styles.frontNumberIcon, styles.frontNumberIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/front-number4.png")}
                />
              </View>
            </View>
            <Text style={[styles.text, styles.gapTypo]}>ลงพื้นที่</Text>
          </View>
          <View style={[styles.stepCircleGroup, styles.stepFlexBox1]}>
            <View style={styles.stepCircle}>
              <View style={[styles.stepCircleDisableColor, styles.stepFlexBox]}>
                <Image
                  style={[styles.frontNumberIcon, styles.frontNumberIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/front-number5.png")}
                />
              </View>
            </View>
            <Text style={[styles.text, styles.gapTypo]}>รออนุมัติ</Text>
          </View>
          <View style={[styles.stepCircleGroup, styles.stepFlexBox1]}>
            <View style={styles.stepCircle}>
              <View style={[styles.stepCircleDisableColor, styles.stepFlexBox]}>
                <Image
                  style={[styles.frontNumberIcon, styles.frontNumberIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/front-number6.png")}
                />
              </View>
            </View>
            <Text style={[styles.text, styles.gapTypo]}>อนุมัติ</Text>
          </View>
        </View>
        <View
          style={[styles.systemIconstaskDocumentParent, styles.stepFlexBox]}
        >
          <Image
            style={styles.systemIconstaskDocument}
            resizeMode="cover"
            source={require("../assets/1-system-iconstask-document.png")}
          />
          <Text style={styles.gap16Container}>
            <Text style={styles.gap16}>{`การยื่นขอรับรอง GAP ข้าว กข16
`}</Text>
            <Text style={styles.text5}>{`โดย นายสุรศักดิ์ หนูด้วง
กลุ่ม นาแปลงใหญ่สีเขียว`}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gapTypo: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.labelLB4Regular,
    lineHeight: 24,
  },
  stepFlexBox: {
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    padding: Padding.p_5xs,
    flexDirection: "row",
    alignItems: "center",
  },
  frontNumberIconLayout: {
    height: 24,
    width: 24,
  },
  stepFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  gap: {
    fontSize: FontSize.titleT3SemiBold_size,
    width: 328,
    marginLeft: 8,
  },
  basilIconsoutlineoutlinegeParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frontNumberIcon: {
    overflow: "hidden",
  },
  stepCircleCiColor: {
    backgroundColor: Color.primaryColourPrimary,
    borderColor: Color.disableDefaultDisableDefault,
    borderRadius: Border.br_981xl,
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
  },
  stepCircle: {
    flexDirection: "row",
  },
  text: {
    fontSize: FontSize.labelLB4Regular_size,
    marginTop: 8,
  },
  stepCircleDisableColor: {
    backgroundColor: Color.disableDefaultDisableDefault,
    borderColor: Color.disableDefaultDisableDefault,
    borderRadius: Border.br_981xl,
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
  },
  stepCircleGroup: {
    marginLeft: 8,
  },
  frameGroup: {
    marginTop: 8,
    padding: Padding.p_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  systemIconstaskDocument: {
    width: 44,
    height: 44,
    overflow: "hidden",
  },
  gap16: {
    color: Color.labelColorLightPrimary,
  },
  text5: {
    color: "#918f8f",
  },
  gap16Container: {
    fontSize: FontSize.bodyB6Regular_size,
    textAlign: "left",
    marginLeft: 8,
    fontFamily: FontFamily.labelLB4Regular,
    lineHeight: 24,
    flex: 1,
  },
  systemIconstaskDocumentParent: {
    borderRadius: Border.br_5xs,
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 8,
    alignSelf: "stretch",
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  frameParent: {
    position: "absolute",
    marginLeft: -206,
    top: 0,
    left: "50%",
    width: 412,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
  },
  view: {
    height: 732,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
});

export default Frame;
