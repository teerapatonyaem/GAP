import * as React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionCard from "../components/SectionCard";
import ProfileForm1 from "../components/ProfileForm1";
import { Padding, Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const Proofile = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.proofile}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.proofileScrollViewContent}
    >
      <View style={styles.proofileInner}>
        <View style={styles.frameParent}>
          <SectionCard />
          <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
            <View style={styles.parent}>
              <Text style={[styles.text, styles.textTypo]}>ชื่อ - นามสกุล</Text>
              <Text style={[styles.text1, styles.textSpaceBlock]}>
                นายเกษตรกร มั่งมี
              </Text>
              <Text style={[styles.text2, styles.textSpaceBlock]}>
                เลขที่บัตรประจำตัวประชาชน
              </Text>
              <Text style={[styles.text1, styles.textSpaceBlock]}>
                113610905008-3
              </Text>
            </View>
            <View style={styles.frameContainer}>
              <View style={styles.parent}>
                <Text style={[styles.text4, styles.textTypo]}>
                  สำเนาทะเบียนบ้าน
                </Text>
                <View
                  style={[styles.attachFileParent, styles.uploadWrapperFlexBox]}
                >
                  <Text style={styles.text1Typo}>Attach file</Text>
                  <View
                    style={[styles.uploadWrapper, styles.uploadWrapperFlexBox]}
                  >
                    <Text style={[styles.upload, styles.textTypo]}>Upload</Text>
                  </View>
                </View>
              </View>
              <View style={styles.textSpaceBlock}>
                <Text style={[styles.text4, styles.textTypo]}>
                  สำเนาบัตรประชาชน
                </Text>
                <View
                  style={[styles.attachFileParent, styles.uploadWrapperFlexBox]}
                >
                  <Text style={styles.text1Typo}>Attach file</Text>
                  <View
                    style={[styles.uploadWrapper, styles.uploadWrapperFlexBox]}
                  >
                    <Text style={[styles.upload, styles.textTypo]}>Upload</Text>
                  </View>
                </View>
              </View>
              <View style={styles.textSpaceBlock}>
                <Text style={[styles.text6, styles.textTypo]}>
                  การจดทะเบียนนิติบุคคล
                </Text>
                <View
                  style={[styles.attachFileParent, styles.uploadWrapperFlexBox]}
                >
                  <Text style={styles.text1Typo}>Attach file</Text>
                  <View
                    style={[styles.uploadWrapper, styles.uploadWrapperFlexBox]}
                  >
                    <Text style={[styles.upload, styles.textTypo]}>Upload</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ProfileForm1
        propMarginTop={68}
        onLayoutPress={() => navigation.navigate("Expense")}
        onLayoutPress1={() => navigation.navigate("Status1")}
        onLayoutPress2={() => navigation.navigate("Modal1")}
        onLayoutPress3={() => navigation.navigate("RiceInfo")}
        onLayoutPress4={() => navigation.navigate("Proofile")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  proofileScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameGroupSpaceBlock: {
    padding: Padding.p_5xs,
    alignSelf: "stretch",
  },
  textTypo: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.bodyB4Regular_size,
  },
  textSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  uploadWrapperFlexBox: {
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    alignItems: "center",
  },
  text: {
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.bodyB4Regular_size,
    lineHeight: 28,
    alignSelf: "stretch",
  },
  text1: {
    fontFamily: FontFamily.bodyB4Regular,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    lineHeight: 28,
    fontSize: FontSize.bodyB4Regular_size,
  },
  text2: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.bodyB4Regular_size,
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
    lineHeight: 28,
  },
  parent: {
    alignSelf: "stretch",
  },
  text4: {
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.bodyB4Regular_size,
    lineHeight: 28,
  },
  text1Typo: {
    fontFamily: FontFamily.bodyB4Regular,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    lineHeight: 28,
    fontSize: FontSize.bodyB4Regular_size,
  },
  upload: {
    fontWeight: "500",
    fontFamily: FontFamily.iBMPlexSansThaiMedium,
    lineHeight: 28,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.bodyB4Regular_size,
  },
  uploadWrapper: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    justifyContent: "center",
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  attachFileParent: {
    backgroundColor: Color.gray50,
    justifyContent: "space-between",
    padding: Padding.p_5xs,
    alignSelf: "stretch",
  },
  text6: {
    lineHeight: 24,
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: "600",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.bodyB4Regular_size,
  },
  frameContainer: {
    marginTop: 24,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameGroup: {
    backgroundColor: "#9feaa7",
    marginTop: 32,
    borderRadius: Border.br_5xs,
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  proofileInner: {
    width: 412,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_9xl,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
  },
  proofile: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
});

export default Proofile;
