import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Padding, FontSize, Border } from "../GlobalStyles";

const GAPStatus = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameParent}>
      <View style={styles.basilIconsoutlineoutlinegeParent}>
        <Pressable
          style={styles.frontNumberIconLayout}
          onPress={() => navigation.navigate("Home")}
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
                source={require("../assets/front-number.png")}
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
                source={require("../assets/front-number1.png")}
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
                source={require("../assets/front-number2.png")}
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
                source={require("../assets/front-number3.png")}
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
                source={require("../assets/front-number4.png")}
              />
            </View>
          </View>
          <Text style={[styles.text, styles.gapTypo]}>อนุมัติ</Text>
        </View>
      </View>
      <View style={[styles.systemIconstaskDocumentParent, styles.stepFlexBox]}>
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
  );
};

const styles = StyleSheet.create({
  gapTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyB5Regular,
    lineHeight: 24,
    color: Color.labelColorLightPrimary,
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
    flex: 1,
    alignItems: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
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
    overflow: "hidden",
    borderColor: Color.disableDefaultDisableDefault,
    borderRadius: Border.br_981xl,
    borderWidth: 1,
    borderStyle: "solid",
  },
  stepCircle: {
    flexDirection: "row",
  },
  text: {
    fontSize: FontSize.selectorS4Regular_size,
    marginTop: 8,
  },
  stepCircleDisableColor: {
    backgroundColor: Color.disableDefaultDisableDefault,
    overflow: "hidden",
    borderColor: Color.disableDefaultDisableDefault,
    borderRadius: Border.br_981xl,
    borderWidth: 1,
    borderStyle: "solid",
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
    color: Color.colorGray_200,
  },
  gap16Container: {
    fontSize: FontSize.selectorS6SemiBold_size,
    textAlign: "left",
    flex: 1,
    marginLeft: 8,
    fontFamily: FontFamily.bodyB5Regular,
    lineHeight: 24,
  },
  systemIconstaskDocumentParent: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.baseColourWhite,
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 8,
    alignSelf: "stretch",
  },
  frameParent: {
    position: "absolute",
    marginLeft: -206,
    top: 0,
    left: "50%",
    width: 412,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_9xl,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
  },
});

export default GAPStatus;
