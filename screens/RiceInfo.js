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
import LabelNoneHintNone from "../components/LabelNoneHintNone";
import ProvinceCard from "../components/ProvinceCard";
import SectionCardFormFilter from "../components/SectionCardFormFilter";
import SectionForm from "../components/SectionForm";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const RiceInfo = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.riceinfo}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.riceInfoScrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.basilIconsoutlineoutlinegeParent}>
          <Pressable
            style={styles.basilIconsoutlineoutlinege}
            onPress={() => navigation.navigate("HomeDetail")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/basil-iconsoutlineoutlinegeneralhome1.png")}
            />
          </Pressable>
          <Text style={styles.text}>องค์ความรู้เรื่องข้าว</Text>
        </View>
        <LabelNoneHintNone
          systemIconsHome={require("../assets/1-system-iconssearch.png")}
          text="ค้นหา"
          systemIconsHome1
          labelNoneHintNonePosition="unset"
          labelNoneHintNoneAlignSelf="stretch"
          labelNoneHintNoneMarginTop={8}
          inputFlexDirection="column"
          inputBorderRadius={8}
        />
        <ProvinceCard />
        <SectionCardFormFilter />
        <SectionForm />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  riceInfoScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  basilIconsoutlineoutlinege: {
    width: 24,
    height: 24,
  },
  text: {
    fontSize: FontSize.bodyBH3SemiBold_size,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.titleT3SemiBold,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    flex: 1,
  },
  basilIconsoutlineoutlinegeParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  frameParent: {
    width: 412,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_9xl,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
  },
  riceinfo: {
    backgroundColor: Color.surfaceColourWhiteSurface,
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
    flex: 1,
  },
});

export default RiceInfo;
