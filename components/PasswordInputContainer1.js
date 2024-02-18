import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import LabelDefault from "./LabelDefault";
import TypePassword from "./TypePassword";

const PasswordInputContainer1 = ({
  passwordFieldLabel,
  showContainer,
  ellipseIcon,
  showEllipseIcon,
  ellipseIconVisible,
  ellipseIconVisible1,
  ellipseIconVisible2,
  ellipseIconVisible3,
  ellipseIconVisible4,
  ellipseIconVisible5,
  ellipseIconVisible6,
  ellipseIconVisible7,
  ellipseIconVisible8,
  ellipseIconVisible9,
}) => {
  return (
    <View style={styles.input}>
      <LabelDefault
        textLabel="รหัสผ่าน"
        systemIconsInfo={require("../assets/1-system-iconsinfo.png")}
        showInfoIcon={false}
        labelDefaultPosition="unset"
        labelDefaultAlignSelf="stretch"
      />
      <TypePassword
        showContainer
        showEllipseIcon={false}
        ellipseIconVisible={false}
        ellipseIconVisible1={false}
        ellipseIconVisible2={false}
        ellipseIconVisible3={false}
        ellipseIconVisible4={false}
        ellipseIconVisible5={false}
        ellipseIconVisible6={false}
        ellipseIconVisible7={false}
        ellipseIconVisible8={false}
        ellipseIconVisible9={false}
        ellipseIconVisible10={false}
        showSystemIconsShowHide={false}
        typePasswordPosition="unset"
        typePasswordMarginTop={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    alignSelf: "stretch",
    marginTop: 16,
  },
});

export default PasswordInputContainer1;
