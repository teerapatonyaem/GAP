import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import Otherplant from "../components/Otherplant";
import Weed from "../components/Weed";
import Plantdisease from "../components/Plantdisease";
import Insect from "../components/Insect";
import { useNavigation } from "@react-navigation/native";
import { openOtherPlantDatabase, saveOtherPlant, openWeedDatabase, saveWeed, openPlantDiseaseDatabase, savePlantDisease } from "../components/database";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";

const AddPlotInformation = () => {
  const navigation = useNavigation();
  const [otherPlantData, setOtherPlantData] = useState({ plantType: '', amount: '' });
  const [weedData, setWeedData] = useState({ weed: '', amount: '' });
  const [plantDiseaseData, setPlantDiseaseData] = useState({ disease: '', amount: '' });

  useEffect(() => {
    openOtherPlantDatabase();
    openWeedDatabase();
    openPlantDiseaseDatabase();
  }, []);

  const handleFinish = () => {
    const saveOtherPlantPromise = saveOtherPlant(otherPlantData.plantType, otherPlantData.amount);
    const saveWeedPromise = saveWeed(weedData.weed, weedData.amount);
    const savePlantDiseasePromise = savePlantDisease(plantDiseaseData.disease, plantDiseaseData.amount);

    Promise.all([saveOtherPlantPromise, saveWeedPromise, savePlantDiseasePromise])
      .then(() => {
        navigation.navigate("PlotSurvey");
      })
      .catch(error => {
        console.log("Error inserting data: ", error);
      });
  };

  const handlePlantDataChange = (data) => {
    setOtherPlantData(data);
  };

  const handleWeedDataChange = (data) => {
    setWeedData(data);
  };

  const handlePlantDiseaseDataChange = (data) => {
    setPlantDiseaseData(data);
  };

  return (
    <ScrollView
      style={styles.addplotinformation}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.addPlotInformationScrollViewContent}
    >
      <View style={styles.frameParent}>
        <Otherplant onPlantDataChange={handlePlantDataChange} />
        <View style={styles.textSpaceBlock}>
          <Weed onWeedDataChange={handleWeedDataChange} />
          <Plantdisease onPlantDiseaseDataChange={handlePlantDiseaseDataChange} />
          <Insect />
        </View>
        <Text style={[styles.text, styles.textSpaceBlock]}>{`หมายเหตุ
ปริมาณน้อย = 1 ใน 4 / ไร่
ปริมาณปานกลาง = 2 ใน 4 / ไร่
ปริมาณมาก = 3 ใน 4 ขึ้นไป / ไร่`}</Text>
      </View>
      <View style={styles.buttonParent}>
        <Pressable
          style={[styles.button, styles.buttonLayout]}
          onPress={() => navigation.navigate("PlotSurvey")}
        >
          <Text style={[styles.button1, styles.buttonTypo]}>ยกเลิก</Text>
        </Pressable>
        <Pressable
          style={[styles.button2, styles.buttonLayout]}
          onPress={handleFinish}
        >
          <Text style={[styles.button3, styles.buttonTypo]}>เสร็จสิ้น</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  addplotinformation: {
    flex: 1,
    backgroundColor: Color.white,
  },
  addPlotInformationScrollViewContent: {
    flexGrow: 1,
    padding: Padding.p_medium,
  },
  frameParent: {
    paddingHorizontal: Padding.p_large,
  },
  textSpaceBlock: {
    marginTop: Padding.p_small,
  },
  text: {
    fontSize: FontSize.size_medium,
    fontFamily: FontFamily.regular,
    color: Color.black,
  },
  buttonParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Padding.p_large,
  },
  button: {
    borderWidth: 1,
    borderColor: Color.grey,
    borderRadius: Border.br_medium,
    padding: Padding.p_small,
  },
  buttonLayout: {
    width: '48%',
  },
  button1: {
    color: Color.red,
    textAlign: 'center',
    fontFamily: FontFamily.bold,
  },
  button2: {
    backgroundColor: Color.primary,
  },
  button3: {
    textAlign: 'center',
    color: Color.white,
    fontFamily: FontFamily.bold,
  },
});

export default AddPlotInformation;
