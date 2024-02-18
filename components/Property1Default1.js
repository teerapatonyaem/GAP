import React, { useMemo } from "react";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import CardContainer from "./CardContainer";
import { Picker } from '@react-native-picker/picker';

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default1 = ({
  iconStatus,
  property1DefaultPosition,
  property1DefaultAlignSelf,
  property1DefaultMarginTop,
  inputWidth,
  inputAlignSelf,
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("alignSelf", property1DefaultAlignSelf),
      ...getStyleValue("marginTop", property1DefaultMarginTop),
    };
  }, [
    property1DefaultPosition,
    property1DefaultAlignSelf,
    property1DefaultMarginTop,
  ]);

  const inputStyle = useMemo(() => {
    return {
      ...getStyleValue("width", inputWidth),
      ...getStyleValue("alignSelf", inputAlignSelf),
    };
  }, [inputWidth, inputAlignSelf]);

 

  return (
    <View>
      
      <Picker
  
  selectedValue={selectedValue}
  style={{ height: 50, width: 200 }}
  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
>
  <Picker.Item label="พันธ์ุข้าว" value="" /> 
  <Picker.Item label="0" value="0" />
  <Picker.Item label="1" value="1" />
  <Picker.Item label="2" value="2" />
  <Picker.Item label="3" value="3" />
</Picker>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Property1Default1;
