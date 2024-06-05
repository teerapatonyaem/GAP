import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import UserContext from '../components/UserContext';

const GAPCertifycontactperson = () => {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.parent}>
      <Text style={[styles.text, styles.textTypo]}>
        บุคคลที่สามารถติดต่อได้ (ควรเป็นบุคคลที่เข้าใจระบบของกลุ่ม/องค์กร)
      </Text>
      <View style={styles.parent}>
        <View style={[styles.group, styles.groupFlexBox]}>
          <Text style={styles.textTypo}>ชื่อ {user?.name}</Text>
          <Text style={styles.text2}>ตำแหน่ง ประธาน</Text>
        </View>
        <View style={[styles.container, styles.containerSpaceBlock]}>
          <Text style={styles.textTypo}>โทรศัพท {user?.phone}</Text>
          <Text style={styles.text2}>โทรสาร</Text>
        </View>
        <Text
          style={[
            styles.eMailSurasakjak0604gmailco,
            styles.containerSpaceBlock,
          ]}
        >
          E-mail {user?.email}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.bodyB5Regular,
    lineHeight: 24,
    fontSize: FontSize.bodyRegular400_size,
  },
  groupFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  containerSpaceBlock: {
    marginTop: 11,
    alignSelf: "stretch",
  },
  text: {
    alignSelf: "stretch",
  },
  text2: {
    flex: 1,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.bodyB5Regular,
    lineHeight: 24,
    fontSize: FontSize.bodyRegular400_size,
  },
  group: {
    alignSelf: "stretch",
  },
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  eMailSurasakjak0604gmailco: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.bodyB5Regular,
    lineHeight: 24,
    fontSize: FontSize.bodyRegular400_size,
  },
  parent: {
    marginTop: 8,
    alignSelf: "stretch",
  },
});

export default GAPCertifycontactperson;
