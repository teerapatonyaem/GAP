import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const FormSection1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameParent}>
      <View style={styles.parentFlexBox}>
        <Pressable
          style={styles.basilIconsoutlineoutlinege}
          onPress={() => navigation.navigate("HomeDetail")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/basil-iconsoutlineoutlinegeneralhome.png")}
          />
        </Pressable>
        <Text style={[styles.gap, styles.gapSpaceBlock]}>
          เอกสารการยื่น GAP
        </Text>
      </View>
      <View style={styles.parent}>
        <Text style={styles.text}>ยื่นสำเร็จ</Text>
        <Pressable
          style={[styles.systemIconstaskDocumentParent, styles.parentFlexBox]}
          onPress={() => navigation.navigate("CertifyDetail")}
        >
          <Image
            style={styles.systemIconstaskDocument}
            resizeMode="cover"
            source={require("../assets/1-system-iconstask-document.png")}
          />
          <Text style={[styles.gap45Container, styles.gapSpaceBlock]}>
            <Text style={styles.gap45}>{`การยื่นขอรับรอง GAP ข้าว กข45
`}</Text>
            <Text style={styles.text1}>{`โดย นายสุรศักดิ์ หนูด้วง
กลุ่ม นาแปลงใหญ่สีเขียว`}</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gapSpaceBlock: {
    marginLeft: 8,
    fontFamily: FontFamily.bodyB4Regular,
    lineHeight: 24,
  },
  parentFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  basilIconsoutlineoutlinege: {
    width: 24,
    height: 24,
  },
  gap: {
    fontSize: FontSize.titleT3SemiBold_size,
    textAlign: "center",
    width: 328,
    color: Color.labelColorLightPrimary,
  },
  text: {
    fontSize: FontSize.bodySmalls300_size,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.titleT3SemiBold,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    alignSelf: "stretch",
  },
  systemIconstaskDocument: {
    width: 44,
    height: 44,
    overflow: "hidden",
  },
  gap45: {
    color: Color.labelColorLightPrimary,
  },
  text1: {
    color: Color.colorGray_200,
  },
  gap45Container: {
    flex: 1,
    fontSize: FontSize.selectorS6SemiBold_size,
    textAlign: "left",
  },
  systemIconstaskDocumentParent: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.surfaceColourWhiteSurface,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    justifyContent: "center",
    padding: Padding.p_5xs,
    marginTop: 4,
    alignItems: "center",
  },
  parent: {
    marginTop: 8,
    alignSelf: "stretch",
    alignItems: "center",
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

export default FormSection1;
