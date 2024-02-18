import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionForm1 from "./SectionForm1";
import OnContainerOnImage from "./OnContainerOnImage";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ProvinceCard = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.frameParent}
      onPress={() => navigation.navigate("RiceInfoDetail")}
    >
      <View style={[styles.parent, styles.parentFlexBox]}>
        <Text style={[styles.text, styles.textFlexBox]}>
          ข้าวจังหวัดปราจีนบุรี
        </Text>
        <Text style={[styles.text1, styles.textFlexBox]}>อื่นๆ</Text>
      </View>
      <SectionForm1
        landManagementName="เหลืองใหญ่ 48"
        imageDescription={require("../assets/flaticonbook1.png")}
        landImageUrl="พลายงาม"
        imageThumbnailUrls={require("../assets/flaticonbook1.png")}
        cropName="ขาวบ้านนา 432"
        imageThumbnailUrls2={require("../assets/flaticonbook1.png")}
        landCode="กข 45"
      />
      <View style={[styles.frameGroup, styles.parentFlexBox]}>
        <View style={styles.flatIconbookParent}>
          <OnContainerOnImage
            onContainerOnImageOnConta={require("../assets/flaticonbook1.png")}
            onContainerOnIconOverflow="unset"
            onContainerOnIconWidth={80}
            onContainerOnIconAlignSelf="unset"
          />
          <View style={styles.wrapper}>
            <Text style={[styles.text1, styles.textFlexBox]}>ปราจีนบุรี 1</Text>
          </View>
        </View>
        <View style={styles.frameViewFlexBox}>
          <OnContainerOnImage
            onContainerOnImageOnConta={require("../assets/flaticonbook1.png")}
            onContainerOnIconOverflow="unset"
            onContainerOnIconWidth={80}
            onContainerOnIconAlignSelf="unset"
          />
          <View style={styles.wrapper}>
            <Text style={[styles.text1, styles.textFlexBox]}>ปราจีนบุรี 2</Text>
          </View>
        </View>
        <View style={styles.frameViewFlexBox}>
          <OnContainerOnImage
            onContainerOnImageOnConta={require("../assets/flaticonbook1.png")}
            onContainerOnIconOverflow="unset"
            onContainerOnIconWidth={80}
            onContainerOnIconAlignSelf="unset"
          />
          <View style={styles.wrapper}>
            <Text style={[styles.text1, styles.textFlexBox]}>อยุธยา 1</Text>
          </View>
        </View>
        <View style={[styles.frameView, styles.frameViewFlexBox]}>
          <OnContainerOnImage
            onContainerOnImageOnConta={require("../assets/flaticonbook2.png")}
            onContainerOnIconOverflow="unset"
            onContainerOnIconWidth={80}
            onContainerOnIconAlignSelf="unset"
          />
          <View style={styles.wrapper}>
            <Text style={[styles.text1, styles.textFlexBox]}>อยุธยา 1</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  frameViewFlexBox: {
    marginLeft: 8,
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: FontSize.bodySmalls300_size,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.titleT3SemiBold,
  },
  text1: {
    fontSize: FontSize.selectorS6SemiBold_size,
    lineHeight: 18,
    fontFamily: FontFamily.bodyB4Regular,
  },
  parent: {
    justifyContent: "space-between",
  },
  wrapper: {
    marginTop: 5,
  },
  flatIconbookParent: {
    alignItems: "center",
    flex: 1,
  },
  frameView: {
    opacity: 0,
  },
  frameGroup: {
    overflow: "hidden",
    justifyContent: "center",
    marginTop: 6,
  },
  frameParent: {
    marginTop: 8,
    alignSelf: "stretch",
  },
});

export default ProvinceCard;
