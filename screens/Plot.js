import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1Frame1 from "../components/Property1Frame1";
import SectionForm2 from "../components/SectionForm2";
import SectionCardForm from "../components/SectionCardForm";
import Property1Default from "../components/Property1Default";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Plot = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.plot}>
      <View style={styles.frameParent}>
        <View style={styles.iconixtolineararrowLeft1Parent}>
          <Pressable
            style={styles.iconixtolineararrowLeft1}
            onPress={() => navigation.navigate("HomeDetail")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/iconixtolineararrowleft1.png")}
            />
          </Pressable>
          <Text style={styles.text}>แปลงของฉัน</Text>
        </View>
        <View style={styles.removebgPreview1Parent}>
          <Image
            style={styles.removebgPreview1Icon}
            resizeMode="cover"
            source={require("../assets/-20240110-224716276removebgpreview-1.png")}
          />
          <View style={styles.parent}>
            <Text style={[styles.text1, styles.textFlexBox]}>
              นาแปลงใหญ่ ใบเขียว
            </Text>
            <Text style={styles.textTypo}>กข 16 จำนวน 12 ไร่</Text>
            <Text
              style={[styles.text3, styles.textTypo]}
            >{`10/04/2024 - 15/09/2024 `}</Text>
          </View>
        </View>
        <Property1Frame1
          component5={require("../assets/component-5.png")}
          property1Frame1000001566Position="unset"
          property1Frame1000001566AlignSelf="stretch"
          property1Frame1000001566MarginTop={8}
        />
        <SectionForm2 />
        <SectionCardForm />
        <Property1Default
          property1DefaultPosition="unset"
          property1DefaultMarginTop={8}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textTypo: {
    fontFamily: FontFamily.heading03,
    lineHeight: 20,
    fontSize: FontSize.bodySmalls300_size,
    color: Color.advertisingGreen1000,
    marginTop: 8,
    textAlign: "center",
    fontWeight: "600",
    alignSelf: "stretch",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconixtolineararrowLeft1: {
    width: 24,
    height: 24,
  },
  text: {
    lineHeight: 28,
    fontFamily: FontFamily.palanquinSemiBold,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.titleT3SemiBold_size,
    flex: 1,
  },
  iconixtolineararrowLeft1Parent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  removebgPreview1Icon: {
    width: 59,
    height: 84,
  },
  text1: {
    letterSpacing: -0.2,
    lineHeight: 32,
    fontFamily: FontFamily.athitiSemiBold,
    color: Color.advertisingGreen1000,
    display: "flex",
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.titleT3SemiBold_size,
    alignSelf: "stretch",
  },
  text3: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  parent: {
    marginLeft: 8,
    alignSelf: "stretch",
    flex: 1,
  },
  removebgPreview1Parent: {
    borderRadius: Border.br_base,
    backgroundColor: Color.walledGarden200,
    shadowColor: "rgba(122, 90, 248, 0.24)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    height: 91,
    paddingVertical: Padding.p_5xs,
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_base,
  },
  frameParent: {
    position: "absolute",
    marginLeft: -206,
    top: 0,
    left: "50%",
    width: 412,
    height: 781,
    alignItems: "flex-end",
    paddingVertical: Padding.p_9xl,
    paddingHorizontal: Padding.p_base,
  },
  plot: {
    backgroundColor: Color.surfaceColourWhiteSurface,
    height: 841,
    width: "100%",
    flex: 1,
  },
});

export default Plot;
