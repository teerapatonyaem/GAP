import * as React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PlantSection from "../components/PlantSection";
import CancelSection from "../components/CancelSection";
import { FontSize, FontFamily, Padding, Color } from "../GlobalStyles";

const AddPlotInformation = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.addplotinformation}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.addPlotInformationScrollViewContent}
    >
      <View style={styles.frameParent}>
        <PlantSection
          plantTypeOrDisease="พืชชนิดอื่น"
          otherPlantTypeOrDisease="พืชชนิดอื่น"
        />
        <View style={styles.textSpaceBlock}>
          <PlantSection
            plantTypeOrDisease="วัชพืช"
            otherPlantTypeOrDisease="วัชพืช"
            inputMarginTop="unset"
          />
          <PlantSection
            plantTypeOrDisease="โรคพืช"
            otherPlantTypeOrDisease="โรคพืช"
            inputMarginTop={8}
          />
          <PlantSection
            plantTypeOrDisease="แมลง"
            otherPlantTypeOrDisease="แมลง"
            inputMarginTop={8}
          />
        </View>
        <Text style={[styles.text, styles.textSpaceBlock]}>{`หมายเหตุ
ปริมาณน้อย = 1 ใน 4 / ไร่
ปริมาณปานกลาง = 2 ใน 4 / ไร่
ปริมาณมาก = 3 ใน 4 ขึ้นไป / ไร่`}</Text>
      </View>
      <CancelSection
        actionButtonText="เสร็จสิ้น"
        onButtonPress={() => navigation.navigate("PlotSurvey")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addPlotInformationScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.selectorS6SemiBold_size,
    lineHeight: 14,
    fontFamily: FontFamily.bodyB4Regular,
    color: "#ff0606",
    textAlign: "left",
  },
  frameParent: {
    width: 412,
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_9xl,
    paddingBottom: Padding.p_5xs,
  },
  addplotinformation: {
    backgroundColor: Color.surfaceColourWhiteSurface,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
});

export default AddPlotInformation;
