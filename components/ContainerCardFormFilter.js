import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import LabelAboveHintNone1 from "./LabelAboveHintNone1";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ContainerCardFormFilter = ({ itemCode, itemDescription }) => {
  return (
    <View style={styles.view}>
      <View style={styles.foodfarmerParent}>
        <Image
          style={styles.foodfarmerIcon}
          resizeMode="cover"
          source={require("../assets/2-foodfarmer.png")}
        />
        <Text style={styles.text}>หัวหน้า</Text>
      </View>
      <View style={[styles.frameParent, styles.parentSpaceBlock]}>
        <View style={styles.foodfarmerParent}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer1.png")}
          />
          <Text style={styles.text}>เลขา</Text>
        </View>
        <View style={styles.frameViewSpaceBlock}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer1.png")}
          />
          <Text style={styles.text}>บัญชี</Text>
        </View>
        <View style={[styles.frameView, styles.frameViewSpaceBlock]}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer1.png")}
          />
          <Text style={styles.text}>เลขา</Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.parentSpaceBlock]}>
        <View style={styles.foodfarmerParent1}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer1.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
        <View style={styles.foodfarmerParent2}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer1.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
        <View style={styles.foodfarmerParent2}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer1.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
        <View style={styles.foodfarmerParent2}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer1.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.parentSpaceBlock]}>
        <View style={styles.foodfarmerParent1}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer1.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
        <View style={styles.foodfarmerParent2}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer1.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
        <View style={styles.foodfarmerParent2}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer1.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
        <View style={styles.foodfarmerParent2}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer1.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.parentSpaceBlock]}>
        <View style={styles.foodfarmerParent1}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer1.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
        <View style={styles.foodfarmerParent2}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer1.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
        <View style={styles.foodfarmerParent2}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer1.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
        <View style={styles.foodfarmerParent2}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer1.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
      </View>
      <View style={[styles.inputParent, styles.parentSpaceBlock]}>
        <LabelAboveHintNone1
          label="จำนวนสมาชิก"
          systemIconsInfo={require("../assets/1-system-iconsinfo.png")}
          systemIconsHome={require("../assets/1-system-iconshome1.png")}
          text="16 คน"
          showSystemIconsHome={false}
          labelAboveHintNonePosition="unset"
          labelAboveHintNoneMarginTop="unset"
          labelAboveHintNoneAlignSelf="unset"
          labelAboveHintNoneFlex={1}
          labelAboveHintNoneMarginLeft="unset"
          inputBackgroundColor="unset"
          textfieldBackgroundColor="#fff"
          textColor="#1d2939"
        />
        <LabelAboveHintNone1
          label="จำนวนพื้นที่"
          systemIconsInfo={require("../assets/1-system-iconsinfo.png")}
          systemIconsHome={require("../assets/1-system-iconshome1.png")}
          text="100 ไร่"
          showSystemIconsHome={false}
          labelAboveHintNonePosition="unset"
          labelAboveHintNoneMarginTop="unset"
          labelAboveHintNoneAlignSelf="unset"
          labelAboveHintNoneFlex={1}
          labelAboveHintNoneMarginLeft={8}
          inputBackgroundColor="unset"
          textfieldBackgroundColor="#fff"
          textColor="#1d2939"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentSpaceBlock: {
    marginTop: 31,
    flexDirection: "row",
  },
  frameViewSpaceBlock: {
    marginLeft: 32,
    alignItems: "center",
  },
  foodfarmerIcon: {
    width: 44,
    height: 44,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.bodyBH3SemiBold_size,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.titleT3SemiBold,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  foodfarmerParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameView: {
    justifyContent: "center",
  },
  frameParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  foodfarmerParent1: {
    alignItems: "flex-end",
  },
  foodfarmerParent2: {
    marginLeft: 36,
    alignItems: "flex-end",
  },
  inputParent: {
    alignSelf: "stretch",
  },
  view: {
    height: 587,
    marginTop: 8,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default ContainerCardFormFilter;
