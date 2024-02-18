import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const GAPCertifyMemberdetail = () => {
  return (
    <View style={styles.view}>
      <View style={styles.foodfarmerParent}>
        <Image
          style={styles.foodfarmerIcon}
          resizeMode="cover"
          source={require("../assets/2-foodfarmer1.png")}
        />
        <Text style={styles.text}>หัวหน้า</Text>
      </View>
      <View style={[styles.frameParent, styles.parentSpaceBlock]}>
        <View style={styles.foodfarmerParent}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer2.png")}
          />
          <Text style={styles.text}>เลขา</Text>
        </View>
        <View style={styles.frameViewSpaceBlock}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer2.png")}
          />
          <Text style={styles.text}>บัญชี</Text>
        </View>
        <View style={[styles.frameView, styles.frameViewSpaceBlock]}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer2.png")}
          />
          <Text style={styles.text}>เลขา</Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.parentSpaceBlock]}>
        <View style={styles.foodfarmerParent1}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer2.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
        <View style={styles.foodfarmerParent2}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer2.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
        <View style={styles.foodfarmerParent2}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer2.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
        <View style={styles.foodfarmerParent2}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer2.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.parentSpaceBlock]}>
        <View style={styles.foodfarmerParent1}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer2.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
        <View style={styles.foodfarmerParent2}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer2.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
        <View style={styles.foodfarmerParent2}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer2.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
        <View style={styles.foodfarmerParent2}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer2.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.parentSpaceBlock]}>
        <View style={styles.foodfarmerParent1}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer2.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
        <View style={styles.foodfarmerParent2}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer2.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
        <View style={styles.foodfarmerParent2}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer2.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
        <View style={styles.foodfarmerParent2}>
          <Image
            style={styles.foodfarmerIcon}
            resizeMode="cover"
            source={require("../assets/2-foodfarmer2.png")}
          />
          <Text style={styles.text}>สมาชิก</Text>
        </View>
      </View>
      <View style={[styles.inputParent, styles.parentSpaceBlock]}>
        <View style={styles.input}>
          <View style={styles.label}>
            <Text style={[styles.label1, styles.label1Typo]}>จำนวนสมาชิก</Text>
            <Image
              style={[styles.systemIconsinfo, styles.systemCommon]}
              resizeMode="cover"
              source={require("../assets/1-system-iconsinfo2.png")}
            />
          </View>
          <View style={styles.input1}>
            <View style={styles.textfield}>
              <Image
                style={[styles.systemIconshome, styles.systemCommon]}
                resizeMode="cover"
                source={require("../assets/1-system-iconshome2.png")}
              />
              <Text style={[styles.text16, styles.text16SpaceBlock]}>
                16 คน
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.text16SpaceBlock}>
          <View style={styles.label}>
            <Text style={[styles.label1, styles.label1Typo]}>จำนวนพื้นที่</Text>
            <Image
              style={[styles.systemIconsinfo, styles.systemCommon]}
              resizeMode="cover"
              source={require("../assets/1-system-iconsinfo2.png")}
            />
          </View>
          <View style={styles.input1}>
            <View style={styles.textfield}>
              <Image
                style={[styles.systemIconshome, styles.systemCommon]}
                resizeMode="cover"
                source={require("../assets/1-system-iconshome2.png")}
              />
              <Text style={[styles.text16, styles.text16SpaceBlock]}>
                100 ไร่
              </Text>
            </View>
          </View>
        </View>
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
  label1Typo: {
    fontFamily: FontFamily.bodyB5Regular,
    lineHeight: 24,
    fontSize: FontSize.bodyRegular400_size,
    textAlign: "left",
  },
  systemCommon: {
    display: "none",
    overflow: "hidden",
  },
  text16SpaceBlock: {
    marginLeft: 8,
    flex: 1,
  },
  foodfarmerIcon: {
    width: 44,
    height: 44,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.buttonBT3SemiBold_size,
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
  label1: {
    color: Color.descriptiveTextColourTextNormal700,
  },
  systemIconsinfo: {
    width: 18,
    height: 18,
    marginLeft: 4,
  },
  label: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  systemIconshome: {
    width: 24,
    height: 24,
  },
  text16: {
    color: Color.neutralColourOnBaseBG800,
    fontFamily: FontFamily.bodyB5Regular,
    lineHeight: 24,
    fontSize: FontSize.bodyRegular400_size,
    textAlign: "left",
  },
  textfield: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.gray00,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
    flex: 1,
    flexDirection: "row",
  },
  input1: {
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  input: {
    flex: 1,
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

export default GAPCertifyMemberdetail;
