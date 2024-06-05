import * as React from "react";
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import GAPCertifyGroupname from "../components/GAPCertifyGroupname";
import GAPCertifyaddress from "../components/GAPCertifyaddress";
import GAPCertifypresidentname from "../components/GAPCertifypresidentname";
import GAPCertifyNInumber from "../components/GAPCertifyNInumber";
import GAPCertifyPresidentaddress from "../components/GAPCertifyPresidentaddress";
import GAPCertifyPlanytype from "../components/GAPCertifyPlanytype";
import GAPCertifyMemberdetail from "../components/GAPCertifyMemberdetail";
import GAPcertifynote from "../components/GAPcertifynote";
import GAPCertifycontactperson from "../components/GAPCertifycontactperson";
import GAPCertifybutton from "../components/GAPCertifybutton";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const GAPCertify = () => {
  return (
    <ScrollView
      style={styles.gapcertify}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.gAPCertifyScrollViewContent}
    >
      <View style={styles.gapcertifyInner}>
        <View style={styles.frameParent}>
          <View style={styles.basilIconsoutlineoutlinegeParent}>
            <Image
              style={styles.basilIconsoutlineoutlinege}
              resizeMode="cover"
              source={require("../assets/basil-iconsoutlineoutlinegeneralhome1.png")}
            />
            <Text style={[styles.gap, styles.gapClr]}>
              ข้อมูลยื่นขอรับรอง GAP
            </Text>
          </View>
          <Text style={[styles.text, styles.gapClr]}>
            ข้อมูลทั่วไปเกี่ยวกับกลุ่มที่ขอการรับรอง
          </Text>
          <GAPCertifyGroupname />
          <GAPCertifyaddress />
          <GAPCertifypresidentname />
          <GAPCertifyNInumber />
          <GAPCertifyPresidentaddress />
          <Text style={[styles.text, styles.gapClr]}>รายละเอียดของกลุ่ม</Text>
          <GAPCertifyPlanytype />
          {/* <GAPCertifyMemberdetail /> */}
          <GAPcertifynote />
          <GAPCertifycontactperson />
        </View>
      </View>
      <GAPCertifybutton />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gAPCertifyScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  gapClr: {
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.bodyB5Regular,
    lineHeight: 24,
  },
  basilIconsoutlineoutlinege: {
    width: 24,
    height: 24,
  },
  gap: {
    fontSize: FontSize.titleT3SemiBold_size,
    textAlign: "center",
    flex: 1,
  },
  basilIconsoutlineoutlinegeParent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.bodyRegular400_size,
    textAlign: "left",
    marginTop: 8,
    alignSelf: "stretch",
  },
  frameParent: {
    width: 412,
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
  },
  gapcertifyInner: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xl,
  },
  gapcertify: {
    backgroundColor: Color.gray00,
    width: "100%",
    maxWidth: "100%",
    flex: 1,
  },
});

export default GAPCertify;
