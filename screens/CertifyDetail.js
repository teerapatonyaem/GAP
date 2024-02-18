import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LabelAboveHintNone1 from "../components/LabelAboveHintNone1";
import ContainerCardFormFilter from "../components/ContainerCardFormFilter";
import InternalControlSystemSection from "../components/InternalControlSystemSection";
import { FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const CertifyDetail = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.certifydetail}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.certifyDetailScrollViewContent}
    >
      <View style={styles.certifydetailInner}>
        <View style={styles.frameParent}>
          <View
            style={[styles.iconixtosolidcloseParent, styles.containerFlexBox]}
          >
            <Pressable
              style={styles.iconixtosolidclose}
              onPress={() => navigation.navigate("Status1")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/iconixtosolidclose.png")}
              />
            </Pressable>
            <Text style={styles.gap}>ข้อมูลยื่นขอรับรอง GAP</Text>
          </View>
          <Text style={[styles.text, styles.textSpaceBlock]}>
            ข้อมูลทั่วไปเกี่ยวกับกลุ่มที่ขอการรับรอง
          </Text>
          <LabelAboveHintNone1
            label="ชื่อกลุ่ม"
            systemIconsInfo={require("../assets/1-system-iconsinfo.png")}
            systemIconsHome={require("../assets/1-system-iconshome3.png")}
            text="นาแปลงใหญ่สีเขียว"
            showSystemIconsHome={false}
            labelAboveHintNonePosition="unset"
            labelAboveHintNoneMarginTop={8}
            labelAboveHintNoneAlignSelf="stretch"
            labelAboveHintNoneMarginLeft="unset"
            inputBackgroundColor="unset"
            textfieldBackgroundColor="#f2f4f7"
            textColor="#98a2b3"
          />
          <LabelAboveHintNone1
            label="ที่อยู่"
            systemIconsInfo={require("../assets/1-system-iconsinfo.png")}
            systemIconsHome={require("../assets/1-system-iconshome3.png")}
            text={`บ้านบุฝ้าย
อำเภอประจันตคาม
จังหวัดปราจีนบุุรี`}
            showSystemIconsHome={false}
            labelAboveHintNonePosition="unset"
            labelAboveHintNoneMarginTop={8}
            labelAboveHintNoneAlignSelf="stretch"
            labelAboveHintNoneMarginLeft="unset"
            inputBackgroundColor="unset"
            textfieldBackgroundColor="#f2f4f7"
            textColor="#98a2b3"
          />
          <LabelAboveHintNone1
            label="ชื่อประธาน"
            systemIconsInfo={require("../assets/1-system-iconsinfo.png")}
            systemIconsHome={require("../assets/1-system-iconshome3.png")}
            text="นายสุรศักดิ์ หนูด้วง"
            showSystemIconsHome={false}
            labelAboveHintNonePosition="unset"
            labelAboveHintNoneMarginTop={8}
            labelAboveHintNoneAlignSelf="stretch"
            labelAboveHintNoneMarginLeft="unset"
            inputBackgroundColor="unset"
            textfieldBackgroundColor="#f2f4f7"
            textColor="#98a2b3"
          />
          <LabelAboveHintNone1
            label="เลขประจำตัวประชาชน"
            systemIconsInfo={require("../assets/1-system-iconsinfo.png")}
            systemIconsHome={require("../assets/1-system-iconshome3.png")}
            text="1930500255741"
            showSystemIconsHome={false}
            labelAboveHintNonePosition="unset"
            labelAboveHintNoneMarginTop={8}
            labelAboveHintNoneAlignSelf="stretch"
            labelAboveHintNoneMarginLeft="unset"
            inputBackgroundColor="unset"
            textfieldBackgroundColor="#f2f4f7"
            textColor="#98a2b3"
          />
          <LabelAboveHintNone1
            label="ที่อยู่(ประธาน)"
            systemIconsInfo={require("../assets/1-system-iconsinfo.png")}
            systemIconsHome={require("../assets/1-system-iconshome3.png")}
            text={`บ้านบุฝ้าย
อำเภอประจันตคาม
จังหวัดปราจีนบุุรี`}
            showSystemIconsHome={false}
            labelAboveHintNonePosition="unset"
            labelAboveHintNoneMarginTop={8}
            labelAboveHintNoneAlignSelf="stretch"
            labelAboveHintNoneMarginLeft="unset"
            inputBackgroundColor="unset"
            textfieldBackgroundColor="#f2f4f7"
            textColor="#98a2b3"
          />
          <Text style={[styles.text, styles.textSpaceBlock]}>
            รายละเอียดของกลุ่ม
          </Text>
          <LabelAboveHintNone1
            label="ชนิดพืช"
            systemIconsInfo={require("../assets/1-system-iconsinfo.png")}
            systemIconsHome={require("../assets/1-system-iconshome3.png")}
            text="ข้าว กข16"
            showSystemIconsHome={false}
            labelAboveHintNonePosition="unset"
            labelAboveHintNoneMarginTop={8}
            labelAboveHintNoneAlignSelf="stretch"
            labelAboveHintNoneMarginLeft="unset"
            inputBackgroundColor="unset"
            textfieldBackgroundColor="#f2f4f7"
            textColor="#98a2b3"
          />
          <ContainerCardFormFilter
            itemCode={require("../assets/1-system-iconshome.png")}
            itemDescription={require("../assets/1-system-iconshome.png")}
          />
          <InternalControlSystemSection />
          <View style={styles.textSpaceBlock}>
            <Text style={[styles.text2, styles.textTypo]}>
              บุคคลที่สามารถติดต่อได้ (ควรเป็นบุคคลที่เข้าใจระบบของกลุ่ม/องค์กร)
            </Text>
            <View style={styles.textSpaceBlock}>
              <View
                style={[
                  styles.iconixtosolidcloseParent,
                  styles.containerFlexBox,
                ]}
              >
                <Text style={styles.textTypo}>ชื่อ สุรศักดิ์ หนูด้วง</Text>
                <Text style={styles.text4}>ตำแหน่ง ประธาน</Text>
              </View>
              <View style={[styles.container, styles.containerSpaceBlock]}>
                <Text style={styles.textTypo}>โทรศัพท 095-1574463</Text>
                <Text style={styles.text4}>โทรสาร</Text>
              </View>
              <Text
                style={[
                  styles.eMailSurasakjak0604gmailco,
                  styles.containerSpaceBlock,
                ]}
              >
                E-mail surasakjak0604@gmail.com
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  certifyDetailScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  containerFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.bodyB4Regular_size,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.bodyB4Regular,
    lineHeight: 24,
  },
  containerSpaceBlock: {
    marginTop: 11,
    alignSelf: "stretch",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconixtosolidclose: {
    width: 24,
    height: 24,
  },
  gap: {
    fontSize: FontSize.titleT3SemiBold_size,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.bodyB4Regular,
    lineHeight: 24,
    flex: 1,
  },
  iconixtosolidcloseParent: {
    alignSelf: "stretch",
  },
  text: {
    textAlign: "left",
    fontSize: FontSize.bodyB4Regular_size,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.bodyB4Regular,
    lineHeight: 24,
  },
  text2: {
    alignSelf: "stretch",
  },
  text4: {
    fontSize: FontSize.bodyB4Regular_size,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.bodyB4Regular,
    lineHeight: 24,
    flex: 1,
  },
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  eMailSurasakjak0604gmailco: {
    textAlign: "left",
    fontSize: FontSize.bodyB4Regular_size,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.bodyB4Regular,
    lineHeight: 24,
  },
  frameParent: {
    width: 412,
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
  },
  certifydetailInner: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xl,
  },
  certifydetail: {
    backgroundColor: Color.surfaceColourWhiteSurface,
    maxWidth: "100%",
    width: "100%",
    flex: 1,
  },
});

export default CertifyDetail;
