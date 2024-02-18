import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const GreenCardForm = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.frameParent}
      onPress={() => navigation.navigate("Modal2")}
    >
      <View style={styles.grassShadowBox}>
        <Image
          style={styles.grassLandscapeFieldVectorP}
          resizeMode="cover"
          source={require("../assets/grass-landscape-field-vector-png-images-nature-landscape-vector-with-green-field-grass-trees-blue-sky-and-clouds-suitable-for-background-or-illustration-nature-clipart-day-landscape-png-image-for-free-download-11.png")}
        />
        <Pressable
          style={styles.removebgShadowBox}
          onPress={() => navigation.navigate("Plot")}
        >
          <Image
            style={styles.removebgPreview1Icon}
            resizeMode="cover"
            source={require("../assets/-20240110-224716276removebgpreview-11.png")}
          />
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textFlexBox]}>
              นาแปลงใหญ่ ใบเขียว
            </Text>
            <Text style={styles.textTypo}>กข 16 จำนวน 12 ไร่</Text>
            <Text
              style={[styles.text2, styles.textTypo]}
            >{`10/04/2024 - 15/09/2024 `}</Text>
          </View>
        </Pressable>
      </View>
      <View
        style={[styles.grassLandscapeFieldVectorPGroup, styles.grassShadowBox]}
      >
        <Image
          style={styles.grassLandscapeFieldVectorP}
          resizeMode="cover"
          source={require("../assets/grass-landscape-field-vector-png-images-nature-landscape-vector-with-green-field-grass-trees-blue-sky-and-clouds-suitable-for-background-or-illustration-nature-clipart-day-landscape-png-image-for-free-download-11.png")}
        />
        <View style={styles.removebgShadowBox}>
          <Image
            style={styles.removebgPreview1Icon}
            resizeMode="cover"
            source={require("../assets/-20240110-224716276removebgpreview-11.png")}
          />
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textFlexBox]}>
              นาแปลงใหญ่ ใบเขียว
            </Text>
            <Text style={styles.textTypo}>กข 16 จำนวน 12 ไร่</Text>
            <Text
              style={[styles.text2, styles.textTypo]}
            >{`10/04/2024 - 15/09/2024 `}</Text>
          </View>
        </View>
      </View>
    </Pressable>
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
    textAlign: "center",
    color: Color.advertisingGreen1000,
    fontWeight: "600",
    marginTop: 8,
    alignSelf: "stretch",
  },
  grassShadowBox: {
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(152, 152, 152, 0.5)",
    flexDirection: "row",
  },
  grassLandscapeFieldVectorP: {
    width: 307,
    height: 307,
    zIndex: 0,
    borderRadius: Border.br_base,
  },
  removebgPreview1Icon: {
    width: 59,
    height: 84,
  },
  text: {
    fontSize: FontSize.titleT3SemiBold_size,
    letterSpacing: -0.2,
    lineHeight: 32,
    fontFamily: FontFamily.athitiSemiBold,
    textAlign: "center",
    color: Color.advertisingGreen1000,
    fontWeight: "600",
    display: "flex",
    alignSelf: "stretch",
  },
  text2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  parent: {
    marginLeft: 8,
    flex: 1,
    alignSelf: "stretch",
  },
  removebgShadowBox: {
    zIndex: 1,
    padding: Padding.p_5xs,
    height: 91,
    width: 275,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.surfaceColourWhiteSurface,
    left: 17,
    top: 248,
    position: "absolute",
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    flexDirection: "row",
  },
  grassLandscapeFieldVectorPGroup: {
    marginLeft: 8,
  },
  frameParent: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    marginTop: 8,
    flexDirection: "row",
    flex: 1,
    alignSelf: "stretch",
  },
});

export default GreenCardForm;
