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
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
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
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
          </Picker>

          <Picker
            selectedValue={selectedValue3}
            style={{ height: 50, width: 370 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}
          >
            <Picker.Item label="แหล่งน้ำที่ใช้" value="" />
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
          </Picker>

          <Picker
            selectedValue={selectedValue4}
            style={{ height: 50, width: 370 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue4(itemValue)}
          >
            <Picker.Item label="วิธีการปลูก" value="" />
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
          </Picker>

          <TextInput
  style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 8, paddingHorizontal: 10 }}
  onChangeText={text => setLandLocation(text)}
  value={landLocation}
  placeholder="สถานที่แปลง"
/>
        </View>
        <View style={[styles.buttonParent, styles.parentSpaceBlock]}>
          <SmallSizeTrueStyleOutline
            button="ยกเลิก"
            showText
            smallSizeTrueStyleOutlinePosition="unset"
            smallSizeTrueStyleOutlineBorderRadius={32}
            smallSizeTrueStyleOutlineBorderStyle="solid"
            smallSizeTrueStyleOutlineBorderColor="#093311"
            smallSizeTrueStyleOutlineBorderWidth={1.5}
            smallSizeTrueStyleOutlinePaddingHorizontal="unset"
            smallSizeTrueStyleOutlineAlignSelf="unset"
            smallSizeTrueStyleOutlineBackgroundColor="unset"
            smallSizeTrueStyleOutlineMarginTop="unset"
            smallSizeTrueStyleOutlineMarginLeft="unset"
            smallSizeTrueStyleOutlineBottom="unset"
            smallSizeTrueStyleOutlineLeft="unset"
            smallSizeTrueStyleOutlineWidth={182}
            buttonFontSize={17}
            buttonFontFamily="Poppins-Medium"
            buttonColor="#126622"
            onButtonPress={() => navigation.navigate("Home")}
          />
          <SmallSizeTrueStyleOutline
            button="สร้างแปลง"
            showText
            smallSizeTrueStyleOutlinePosition="unset"
            smallSizeTrueStyleOutlineBorderRadius={32}
            smallSizeTrueStyleOutlineBorderStyle="unset"
            smallSizeTrueStyleOutlineBorderColor="unset"
            smallSizeTrueStyleOutlinePaddingHorizontal="unset"
            smallSizeTrueStyleOutlineAlignSelf="unset"
            smallSizeTrueStyleOutlineBackgroundColor="#03290e"
            smallSizeTrueStyleOutlineMarginTop="unset"
            smallSizeTrueStyleOutlineMarginLeft={16}
            smallSizeTrueStyleOutlineBottom="unset"
            smallSizeTrueStyleOutlineLeft="unset"
            smallSizeTrueStyleOutlineWidth={182}
            buttonFontSize={17}
            buttonFontFamily="Poppins-Medium"
            buttonColor="#fff"
            onButtonPress={() => navigation.navigate("Modal3")}
          />
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
