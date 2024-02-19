import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, Pressable } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";
import CardContainer from "./CardContainer";
import LabelAboveHintNone from "./LabelAboveHintNone";
import Property1Default1 from "./Property1Default1";
import Property1Default2 from "./Property1Default2";
import Property1Default3 from "./Property1Default3";
import SmallSizeTrueStyleOutline from "./SmallSizeTrueStyleOutline";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";
//import Modal3 from "./screens/Modal3";

const Modal2 = ({ onClose }) => {
  const navigation = useNavigation();
  const [selectedValue1, setSelectedValue1] = useState(null);
  const [selectedValue2, setSelectedValue2] = useState(null);
  const [selectedValue3, setSelectedValue3] = useState(null);
  const [selectedValue4, setSelectedValue4] = useState(null);
  const [area, setArea] = useState("");
  const [landLocation, setLandLocation] = useState("");


  
  return (
    <View style={[styles.modal, styles.modalFlexBox]}>
      <View style={styles.frameParent}>
        <View style={styles.iconixtolineararrowLeft1Parent}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
  <Image
    style={styles.iconixtolineararrowLeft1}
    resizeMode="cover"
    source={require("../assets/iconixtolineararrowleft1.png")}
  />
</TouchableOpacity>
          <Text style={styles.text}>กรอกข้อมูลแปลง</Text>
        </View>
        <View style={styles.parentSpaceBlock}>
          <Picker
            selectedValue={selectedValue1}
            style={{ height: 50, width: 370 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
          >
            <Picker.Item label="พันธ์ุข้าว" value="" />
            <Picker.Item label="กข 45" value="กข 45" />
            <Picker.Item label="พลายงาม" value="พลายงาม" />
            <Picker.Item label="เหลืองใหญ่ 48" value="เหลืองใหญ่ 48" />
            <Picker.Item label="ปราจีนบุรี 1" value="ปราจีนบุรี 1" />
            <Picker.Item label="ปราจีนบุรี 2" value="ปราจีนบุรี 2" />
          </Picker>

          <Text>จำนวนพื้นที่:</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setArea(text)}
            value={area}
            keyboardType="numeric"
            placeholder="กรอกจำนวนพื้นที่"
          />

          <Picker
            selectedValue={selectedValue2}
            style={{ height: 50, width: 370 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
          >
            <Picker.Item label="ชนิดของดิน" value="" />
            <Picker.Item label="ดินร่วน" value="ดินร่วน" />
            <Picker.Item label="ดินร่วนปนทราย" value="ดินร่วนปนทราย" />
            <Picker.Item label="ดินทราย" value="ดินทราย" />
            <Picker.Item label="ดินเหนียว" value="ดินเหนียว" />
          </Picker>

          <Picker
            selectedValue={selectedValue3}
            style={{ height: 50, width: 370 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}
          >
            <Picker.Item label="แหล่งน้ำที่ใช้" value="" />
            <Picker.Item label="ชลประทาน" value="ชลประทาน" />
            <Picker.Item label="ธรรมชาติ" value="ธรรมชาติ" />
            <Picker.Item label="สระขุด" value="สระขุด" />
            <Picker.Item label="เขื่อน" value="เขื่อน" />
          </Picker>

          <Picker
            selectedValue={selectedValue4}
            style={{ height: 50, width: 370 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue4(itemValue)}
          >
            <Picker.Item label="วิธีการปลูก" value="" />
            <Picker.Item label="หว่านน้ำตม" value="หว่านน้ำตม" />
            <Picker.Item label="หว่านแห้ง" value="หว่านแห้ง" />
            <Picker.Item label="ปักดำ" value="ปักดำ" />
            <Picker.Item label="โยนกล้า" value="โยนกล้า" />
          </Picker>

          <TextInput
  style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 8, paddingHorizontal: 10 }}
  onChangeText={text => setLandLocation(text)}
  value={landLocation}
  placeholder="สถานที่แปลง"
/>
        </View>
        <View style={[styles.buttonParent, styles.parentSpaceBlock]}>
        <Pressable
      style={styles.button3}
      onPress={() => navigation.navigate("Home")}
    >
      <Text style={styles.button4}>ยกเลิก</Text>
     
    </Pressable>
          <Pressable
      style={styles.button}
      onPress={() => navigation.navigate("Modal3")}
    >
      <Text style={styles.button1}>สร้างแปลง</Text>
     
    </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.walledGarden1000,
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    marginTop: 16,
  },
  button1: {
    fontSize: FontSize.buttonRegular_size,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.buttonSmall1,
    color: "white",
    textAlign: "left",
  },
  button3: {
    borderRadius: Border.br_13xl,
    backgroundColor: 'white', 
    borderColor: 'black', 
    borderWidth: 1, 
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    marginTop: 16,
}
,
button4: {
  fontSize: FontSize.buttonRegular_size,
  textTransform: "capitalize",
  fontWeight: "500",
  fontFamily: FontFamily.buttonSmall1,
  color: "ิblack",
  textAlign: "left",
},
  parentSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
    borderColor: 'gray',
  },
  iconixtolineararrowLeft1: {
    width: 24,
    height: 24,
  },
  text: {
    flex: 1,
    fontSize: FontSize.titleT3SemiBold_size,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.palanquinSemiBold,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
  },
  iconixtolineararrowLeft1Parent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  buttonParent: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    borderRadius: Border.br_base,
    backgroundColor: Color.surfaceColourWhiteSurface,
    width: 398,
    padding: Padding.p_base,
    alignItems: "center",
  },
  modal: {
    backgroundColor: Color.colorDarkslategray_100,
    width: 412,
    height: 712,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Modal2;
