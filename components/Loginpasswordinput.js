import * as React from "react";
import { Text, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { Input, Icon } from "@ui-kitten/components";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Loginpasswordinput = () => {
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const renderIcon = (props) => (
    <TouchableOpacity
      onPress={() => setShowPassword(!showPassword)}>
      <Image
        style={styles.visibilityIcon}
        resizeMode="cover"
        source={showPassword ? require("../assets/1-system-iconsshowhide1.png") : require("../assets/1-system-iconsshowhide2.png")}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.input}>
      <View style={[styles.label, styles.labelFlexBox]}>
        <Text style={styles.label1}>รหัสผ่าน</Text>
      </View>
      <Input
        style={styles.input1}
        placeholder="รหัสผ่าน"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
        accessoryRight={renderIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  labelFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  label1: {
    fontSize: FontSize.selectorS4Regular_size,
    lineHeight: 24,
    fontFamily: FontFamily.selectorS6Regular,
    color: Color.descriptiveTextColourTextNormal700,
    textAlign: "left",
  },
  label: {
    alignItems: "center",
  },
  input1: {
    backgroundColor: Color.gray00,
    marginTop: 4,
  },
  input: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  visibilityIcon: {
    width: 18,
    height: 18,
  },
});

export default Loginpasswordinput;
