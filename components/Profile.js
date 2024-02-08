import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Border, Padding, FontSize, Color } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.inner}>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={styles.avatarParent}>
            <Image
              style={styles.avatarIcon}
              resizeMode="cover"
              source={require("../assets/avatar1.png")}
            />
            <Text style={[styles.text, styles.textTypo1]}>นายเกษตรกร</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textTypo1]}>แก้ไขโปรไฟล์</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
          <View style={styles.parent}>
            <Text style={[styles.text2, styles.textTypo]}>ชื่อ - นามสกุล</Text>
            <Text style={[styles.text3, styles.textSpaceBlock]}>
              นายเกษตรกร มั่งมี
            </Text>
            <Text style={[styles.text4, styles.textSpaceBlock]}>
              เลขที่บัตรประจำตัวประชาชน
            </Text>
            <Text style={[styles.text3, styles.textSpaceBlock]}>
              113610905008-3
            </Text>
          </View>
          <View style={styles.frameView}>
            <View style={styles.parent}>
              <Text style={[styles.text6, styles.textTypo]}>
                สำเนาทะเบียนบ้าน
              </Text>
              <View
                style={[styles.attachFileParent, styles.frameContainerFlexBox]}
              >
                <Text style={styles.text3Typo}>Attach file</Text>
                <View style={[styles.uploadWrapper, styles.wrapperFlexBox]}>
                  <Text style={[styles.upload, styles.textTypo]}>Upload</Text>
                </View>
              </View>
            </View>
            <View style={styles.textSpaceBlock}>
              <Text style={[styles.text6, styles.textTypo]}>
                สำเนาบัตรประชาชน
              </Text>
              <View
                style={[styles.attachFileParent, styles.frameContainerFlexBox]}
              >
                <Text style={styles.text3Typo}>Attach file</Text>
                <View style={[styles.uploadWrapper, styles.wrapperFlexBox]}>
                  <Text style={[styles.upload, styles.textTypo]}>Upload</Text>
                </View>
              </View>
            </View>
            <View style={styles.textSpaceBlock}>
              <Text style={[styles.text8, styles.textTypo]}>
                การจดทะเบียนนิติบุคคล
              </Text>
              <View
                style={[styles.attachFileParent, styles.frameContainerFlexBox]}
              >
                <Text style={styles.text3Typo}>Attach file</Text>
                <View style={[styles.uploadWrapper, styles.wrapperFlexBox]}>
                  <Text style={[styles.upload, styles.textTypo]}>Upload</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
  },
  wrapperFlexBox: {
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  frameContainerFlexBox: {
    padding: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  textTypo: {
    fontSize: FontSize.selectorS4Regular_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  textSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  avatarIcon: {
    width: 64,
    height: 64,
  },
  text: {
    fontSize: FontSize.buttonBT3SemiBold_size,
    marginLeft: 9,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    lineHeight: 28,
  },
  avatarParent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  text1: {
    fontSize: FontSize.bodySmalls300_size,
    textTransform: "capitalize",
    color: Color.baseColourWhite,
  },
  wrapper: {
    backgroundColor: Color.walledGarden900,
    marginLeft: 28,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
  },
  frameGroup: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  text2: {
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
    fontSize: FontSize.selectorS4Regular_size,
    lineHeight: 28,
    alignSelf: "stretch",
  },
  text3: {
    fontFamily: FontFamily.bodyB5Regular,
    fontSize: FontSize.selectorS4Regular_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    lineHeight: 28,
  },
  text4: {
    fontSize: FontSize.selectorS4Regular_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
    lineHeight: 28,
  },
  parent: {
    alignSelf: "stretch",
  },
  text6: {
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
    fontSize: FontSize.selectorS4Regular_size,
    lineHeight: 28,
  },
  text3Typo: {
    fontFamily: FontFamily.bodyB5Regular,
    fontSize: FontSize.selectorS4Regular_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    lineHeight: 28,
  },
  upload: {
    fontWeight: "500",
    fontFamily: FontFamily.iBMPlexSansThaiMedium,
    lineHeight: 28,
  },
  uploadWrapper: {
    backgroundColor: Color.baseColourWhite,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
  },
  attachFileParent: {
    backgroundColor: Color.gray50,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text8: {
    lineHeight: 24,
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
    fontSize: FontSize.selectorS4Regular_size,
  },
  frameView: {
    marginTop: 24,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameContainer: {
    backgroundColor: Color.walledGarden200,
    opacity: 0.8,
    marginTop: 32,
    justifyContent: "center",
  },
  frameParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  inner: {
    width: 412,
    paddingTop: Padding.p_9xl,
    paddingBottom: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
});

export default Profile;
