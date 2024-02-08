import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FieldList from "./FieldList";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Home2background = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.frameParent}
      onPress={() => navigation.navigate("Plot")}
    >
      <View style={styles.grassLandscapeFieldVectorPParent}>
        <Image
          style={styles.grassLandscapeFieldVectorP}
          resizeMode="cover"
          source={require("../assets/grass-landscape-field-vector-png-images-nature-landscape-vector-with-green-field-grass-trees-blue-sky-and-clouds-suitable-for-background-or-illustration-nature-clipart-day-landscape-png-image-for-free-download-1.png")}
        />
        <FieldList />
      </View>
      <View style={styles.grassShadowBox}>
        <Image
          style={styles.grassLandscapeFieldVectorP}
          resizeMode="cover"
          source={require("../assets/grass-landscape-field-vector-png-images-nature-landscape-vector-with-green-field-grass-trees-blue-sky-and-clouds-suitable-for-background-or-illustration-nature-clipart-day-landscape-png-image-for-free-download-1.png")}
        />
        <View style={styles.removebgShadowBox}>
          <Image
            style={styles.removebgPreview1Icon}
            resizeMode="cover"
            source={require("../assets/-20240110-224716276removebgpreview-1.png")}
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
      <View style={styles.grassShadowBox}>
        <Image
          style={styles.grassLandscapeFieldVectorP}
          resizeMode="cover"
          source={require("../assets/grass-landscape-field-vector-png-images-nature-landscape-vector-with-green-field-grass-trees-blue-sky-and-clouds-suitable-for-background-or-illustration-nature-clipart-day-landscape-png-image-for-free-download-1.png")}
        />
        <View style={styles.removebgShadowBox}>
          <Image
            style={styles.removebgPreview1Icon}
            resizeMode="cover"
            source={require("../assets/-20240110-224716276removebgpreview-1.png")}
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textTypo: {
    fontFamily: FontFamily.heading03,
    lineHeight: 20,
    fontSize: FontSize.bodySmalls300_size,
    textAlign: "center",
    color: Color.advertisingGreen1000,
    fontWeight: "600",
    alignSelf: "stretch",
    marginTop: 8,
  },
  grassLandscapeFieldVectorP: {
    width: 307,
    height: 307,
    zIndex: 0,
    borderRadius: Border.br_base,
  },
  grassLandscapeFieldVectorPParent: {
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(152, 152, 152, 0.5)",
    justifyContent: "center",
    flexDirection: "row",
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(122, 90, 248, 0.24)",
    backgroundColor: Color.baseColourWhite,
    left: 17,
    top: 248,
    position: "absolute",
    borderRadius: Border.br_base,
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    justifyContent: "center",
    flexDirection: "row",
  },
  grassShadowBox: {
    marginLeft: 24,
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(152, 152, 152, 0.5)",
    justifyContent: "center",
    flexDirection: "row",
  },
  frameParent: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    marginTop: 8,
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default Home2background;
