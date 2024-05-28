import React, { useState, useEffect } from "react";
import { Text, StyleSheet, Image, View, TextInput } from "react-native";
import { RadioButton } from 'react-native-paper';
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Weed = ({ onWeedDataChange }) => {
  const [checked, setChecked] = useState('น้อย');
  const [text, setText] = useState('');

  useEffect(() => {
    if (onWeedDataChange) {
      onWeedDataChange({ weed: text, amount: checked });
    }
  }, [text, checked]);

  return (
    <View style={styles.frameParent}>
      <View style={[styles.inputParent, styles.inputParentSpaceBlock]}>
        <View style={styles.input}>
          <View style={styles.label}>
            <Text style={styles.label1}>วัชพืช</Text>
            <Image
              style={styles.iconStatus}
              resizeMode="cover"
              source={require("../assets/icon-status.png")}
            />
          </View>
          <View style={styles.input1}>
            <View style={[styles.textfield, styles.swapItemFlexBox]}>
              <Image
                style={[styles.systemIconshome, styles.selectionTypeLayout]}
                resizeMode="cover"
                source={require("../assets/1-system-iconshome1.png")}
              />
              <TextInput
                style={[styles.text, styles.textTypo]}
                placeholder="วัชพืช"
                value={text}
                onChangeText={setText}
              />
            </View>
          </View>
        </View>
        <View style={styles.component41}>
          <Text style={styles.text1}>ปริมาณ</Text>
          <View style={styles.label}>
            <View style={styles.parent}>
              <Text style={[styles.text2, styles.text2Layout]}>น้อย</Text>
              <View style={styles.selectionControl}>
                <RadioButton
                  value="น้อย"
                  status={checked === 'น้อย' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('น้อย')}
                  color={Color.primaryColourPrimary}
                />
              </View>
            </View>
            <View style={styles.group}>
              <Text style={[styles.text2, styles.text2Layout]}>กลาง</Text>
              <View style={styles.selectionControl}>
                <RadioButton
                  value="กลาง"
                  status={checked === 'กลาง' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('กลาง')}
                  color={Color.primaryColourPrimary}
                />
              </View>
            </View>
            <View style={styles.group}>
              <Text style={[styles.text2, styles.text2Layout]}>มาก</Text>
              <View style={styles.selectionControl}>
                <RadioButton
                  value="มาก"
                  status={checked === 'มาก' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('มาก')}
                  color={Color.primaryColourPrimary}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputParentSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    alignItems: "center",
    alignSelf: "stretch",
  },
  swapItemFlexBox: {
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    alignItems: "center",
  },
  selectionTypeLayout: {
    height: 24,
    width: 24,
  },
  textTypo: {
    lineHeight: 24,
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.labelLB4Regular,
    fontSize: FontSize.labelLB4Regular_size,
  },
  text2Layout: {
    lineHeight: 18,
    fontFamily: FontFamily.labelLB4Regular,
  },
  radioPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  label1: {
    lineHeight: 20,
    textAlign: "left",
    color: Color.descriptiveTextColourTextNormal700,
    fontFamily: FontFamily.labelLB4Regular,
    fontSize: FontSize.labelLB4Regular_size,
    flex: 1,
  },
  iconStatus: {
    marginLeft: 8,
    display: "none",
    height: 20,
    width: 20,
  },
  label: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  systemIconshome: {
    overflow: "hidden",
    display: "none",
  },
  text: {
    color: Color.disableDefaultOnDisableDefault,
    flex: 1,
  },
  textfield: {
    borderColor: Color.colorGainsboro_100,
    paddingHorizontal: Padding.p_base,
    borderStyle: "solid",
    borderWidth: 1,
    flex: 1,
    backgroundColor: Color.primaryColourOnPrimary,
    borderRadius: Border.br_5xs,
  },
  input1: {
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  input: {
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  text1: {
    lineHeight: 22,
    textAlign: "right",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.buttonSmall_size,
    fontFamily: FontFamily.labelLB4Regular,
    alignSelf: "stretch",
  },
  text2: {
    fontSize: FontSize.bodyB6Regular_size,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  circle: {
    top: 2,
    left: 2,
    borderRadius: Border.br_81xl,
    borderColor: Color.colorLightgray,
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
    height: 20,
    width: 20,
    backgroundColor: Color.primaryColourOnPrimary,
  },
  radioErrorState: {
    overflow: "hidden",
  },
  checkbox: {
    display: "none",
    color: Color.descriptiveTextColourTextNormal700,
  },
  selectionControl: {
    flexDirection: "row",
  },
  parent: {
    alignItems: "center",
  },
  group: {
    marginLeft: 32,
    alignItems: "center",
  },
  component41: {
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  inputParent: {
    height: 80,
    flexDirection: "row",
  },
  swapComponent: {
    color: Color.primaryColourPrimary,
    fontSize: FontSize.buttonSmall_size,
    textAlign: "left",
  },
  swapItem: {
    backgroundColor: Color.brightLightGreen200,
    borderStyle: "dashed",
    borderColor: Color.colorRoyalblue,
    borderRadius: 0.001,
    paddingHorizontal: Padding.p_102xl,
    overflow: "hidden",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  cardswapComponent: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
  },
  frameParent: {
    shadowColor: "rgba(181, 201, 235, 0.15)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    alignItems: "center",
    backgroundColor: Color.primaryColourOnPrimary,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
});

export default Weed;
