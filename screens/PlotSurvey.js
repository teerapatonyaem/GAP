import * as React from "react";
import { Image, Button, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionCard1 from "../components/SectionCard1";
import SmallSizeTrueStyleOutline from "../components/SmallSizeTrueStyleOutline";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const PlotSurvey = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.topSection}>
          <Pressable
            style={styles.basilIconsoutlineoutlinege}
            onPress={() => navigation.navigate("HomeDetail")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/basil-iconsoutlineoutlinegeneralhome1.png")}
            />
          </Pressable>
          <Text style={styles.text}>สำรวจแปลง</Text>
        </View>
        <SectionCard1 stepNumber="ครั้งที่  1" />
        <SectionCard1 stepNumber="ครั้งที่  2" />
      </View>
      <View style={styles.bottomSection}>
        <Button
          title="เริ่มการสำรวจแปลง"
          onPress={() => navigation.navigate("AddPlotInformation")}
          color="#03290e"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  content: {
    flex: 1,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_9xl,
    paddingBottom: Padding.p_5xs,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    fontSize: FontSize.bodyBH3SemiBold_size,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.titleT3SemiBold,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    flex: 1,
  },
  basilIconsoutlineoutlinege: {
    width: 24,
    height: 24,
  },
  bottomSection: {
    paddingHorizontal: Padding.p_base,
    paddingBottom: Padding.p_base,
  },
});

export default PlotSurvey;
