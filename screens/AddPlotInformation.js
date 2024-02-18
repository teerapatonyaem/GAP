import * as React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Otherplant from "../components/Otherplant";
import Weed from "../components/Weed";
import Plantdisease from "../components/Plantdisease";
import Insect from "../components/Insect";
import Addplotinformationbutton from "../components/Addplotinformationbutton";
import { FontSize, FontFamily, Padding, Color } from "../GlobalStyles";

const AddPlotInformation = () => {
  return (
    <ScrollView
      style={styles.addplotinformation}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.addPlotInformationScrollViewContent}
    >
      <View style={styles.frameParent}>
        <Otherplant />
        <View style={styles.textSpaceBlock}>
          <Weed />
          <Plantdisease />
          <Insect />
        </View>
        <Text style={[styles.text, styles.textSpaceBlock]}>{`หมายเหตุ
ปริมาณน้อย = 1 ใน 4 / ไร่
ปริมาณปานกลาง = 2 ใน 4 / ไร่
ปริมาณมาก = 3 ใน 4 ขึ้นไป / ไร่`}</Text>
      </View>
      <Addplotinformationbutton />
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
    fontSize: FontSize.bodyB6Regular_size,
    lineHeight: 14,
    fontFamily: FontFamily.labelLB4Regular,
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
    backgroundColor: Color.primaryColourOnPrimary,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
});

export default AddPlotInformation;
