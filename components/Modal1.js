import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Image, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { saveGeneralTask } from "../components/database"; 
import UserContext from "../components/UserContext";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
  name: 'general.db', 
  location: 'default',   
});

const Modal1 = ({ onClose }) => {
  const navigation = useNavigation();
  const { user } = useContext(UserContext); // ใช้ useContext เพื่อดึงข้อมูลผู้ใช้

  const [job, setJob] = useState('');
  const [quantity, setQuantity] = useState('');
  const [cost, setCost] = useState('');
  const [costDetails, setCostDetails] = useState('');
  const [additional, setAdditional] = useState('');

  const handleSave = () => {
    if (user) {
      saveGeneralTask(job, quantity, cost, costDetails, additional, user.id); 
      navigation.navigate("Modal3");
    } else {
      console.error("User not found");
    }
  };

  return (
    <View style={styles.modal}>
      <View style={[styles.component7, styles.parentSpaceBlock]}>
        <View style={styles.input1FlexBox}>
          <View style={[styles.tabs, styles.tabsFlexBox]}>
            <Text style={[styles.active, styles.activeTypo]}>ทั่วไป</Text>
          </View>
          <View style={[styles.tabs1, styles.tabsFlexBox]}>
            <Pressable onPress={() => navigation.navigate("FertilizerModal", { job, quantity, cost, costDetails, additional })}>
              <Text style={styles.textTypo}>ปุ๋ย</Text>
            </Pressable>
          </View>
          <View style={[styles.tabs1, styles.tabsFlexBox]}>
            <Pressable onPress={() => navigation.navigate("ChemicalsModal",{ job, quantity, cost, costDetails, additional })}>
              <Text style={styles.textTypo}>สารเคมี</Text>
            </Pressable>
          </View>
          <View style={[styles.tabs1, styles.tabsFlexBox]}>
            <Pressable onPress={() => navigation.navigate("ExpensesModal")}>
              <Text style={[styles.activeTypo]}>ค่าใช้จ่าย</Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.parent, styles.parentSpaceBlock]}>
          <Text style={styles.text}>การจัดการทั่วไปภายในแปลง</Text>
          <View style={styles.input}>
            <View style={styles.input1FlexBox}>
              <Text style={[styles.label1, styles.text1Typo]}>งานที่ปฏิบัติ</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status1.png")}
              />
            </View>
            <View style={[styles.input1, styles.input1FlexBox]}>
              <TextInput
                style={styles.textfield}
                value={job}
                onChangeText={setJob}
                placeholder="ระบุงานที่ปฏิบัติ"
              />
            </View>
          </View>
          <View style={styles.input}>
            <View style={styles.input1FlexBox}>
              <Text style={[styles.label1, styles.text1Typo]}>ปริมาณ</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status1.png")}
              />
            </View>
            <View style={[styles.input1, styles.input1FlexBox]}>
              <TextInput
                style={styles.textfield}
                value={quantity}
                onChangeText={setQuantity}
                placeholder="ระบุปริมาณ"
              />
            </View>
          </View>
          <View style={styles.input}>
            <View style={styles.input1FlexBox}>
              <Text style={[styles.label1, styles.text1Typo]}>ค่าใช้จ่าย</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status1.png")}
              />
            </View>
            <View style={[styles.input1, styles.input1FlexBox]}>
              <TextInput
                style={styles.textfield}
                value={cost}
                onChangeText={setCost}
                placeholder="ระบุค่าใช้จ่าย"
              />
            </View>
          </View>
          <View style={styles.input}>
            <View style={styles.input1FlexBox}>
              <Text style={[styles.label1, styles.text1Typo]}>รายละเอียดค่าใช้จ่าย</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status1.png")}
              />
            </View>
            <View style={[styles.input1, styles.input1FlexBox]}>
              <TextInput
                style={styles.textfield}
                value={costDetails}
                onChangeText={setCostDetails}
                placeholder="ระบุรายละเอียดค่าใช้จ่าย"
              />
            </View>
          </View>
          <View style={styles.input}>
            <View style={styles.input1FlexBox}>
              <Text style={[styles.label1, styles.text1Typo]}>เพิ่มเติม</Text>
              <Image
                style={styles.iconStatus}
                resizeMode="cover"
                source={require("../assets/icon-status1.png")}
              />
            </View>
            <View style={[styles.input1, styles.input1FlexBox]}>
              <TextInput
                style={styles.textfield}
                value={additional}
                onChangeText={setAdditional}
                placeholder="ระบุเพิ่มเติม"
              />
            </View>
          </View>
          <View style={[styles.buttonParent, styles.textfieldSpaceBlock]}>
            <Pressable
              style={[styles.button, styles.buttonLayout]}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={[styles.button1, styles.buttonTypo]}>ยกเลิก</Text>
            </Pressable>
            
            <Pressable
              style={[styles.button2, styles.buttonLayout]}
              onPress={handleSave}
            >
              <Text style={[styles.button3, styles.buttonTypo, { color: "white" }]}>บันทึก</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentSpaceBlock: {
    padding: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.gray00,
    alignItems: "center",
  },
  tabsFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_base,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  activeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyXXL400,
    fontSize: FontSize.bodyRegular400_size,
    lineHeight: 24,
  },
  text1Typo: {
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
    textAlign: "left",
    fontSize: FontSize.bodyRegular400_size,
    flex: 1,
  },
  input1FlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  textfieldSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonLayout: {
    paddingHorizontal: Padding.p_21xl,
    height: 44,
    width: 182,
    borderRadius: Border.br_13xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTypo: {
    fontFamily: FontFamily.buttonSmall,
    fontWeight: "500",
    textTransform: "capitalize",
    fontSize: FontSize.buttonRegular_size,
    textAlign: "left",
  },
  active: {
    color: Color.primary500,
  },
  tabs: {
    backgroundColor: Color.gray00,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_base,
  },
  normal: {
    color: Color.gray500,
  },
  tabs1: {
    marginLeft: 8,
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.selectorS6SemiBold,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.bodyRegular400_size,
    alignSelf: "stretch",
  },
  label1: {
    lineHeight: 20,
    color: Color.descriptiveTextColourTextNormal700,
  },
  iconStatus: {
    width: 20,
    height: 20,
    display: "none",
    marginLeft: 8,
  },
  systemIconshome: {
    width: 24,
    height: 24,
    overflow: "hidden",
    display: "none",
  },
  text1: {
    color: Color.disableDefaultOnDisableDefault,
    marginLeft: 8,
    lineHeight: 24,
    fontFamily: FontFamily.inputTextFieldPlaceholderIN4Regular,
  },
  textfield: {
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    borderStyle: "solid",
    flex: 1,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.gray00,
    borderRadius: Border.br_5xs,
  },
  input1: {
    marginTop: 4,
  },
  input: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  parent: {
    shadowColor: "rgba(181, 201, 235, 0.15)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    width: 380,
    marginTop: 8,
  },
  button1: {
    color: Color.brightLightGreen900,
  },
  button: {
    borderColor: Color.colorDarkslategray_200,
    borderWidth: 1.5,
    borderStyle: "solid",
  },
  button3: {
    color: Color.gray00,
  },
  button2: {
    backgroundColor: Color.walledGarden1000,
    marginLeft: 16,
  },
  buttonParent: {
    width: 366,
    marginTop: 8,
    justifyContent: "center",
  },
  component7: {
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "white",
    width: 412,
    height: 712,
    maxWidth: "100%",
    maxHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Modal1;
