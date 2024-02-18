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
import IncomeForm from "../components/IncomeForm";
import FormContainer from "../components/FormContainer";
import ProfileForm1 from "../components/ProfileForm1";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const Expense = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.expense}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.expenseScrollViewContent}
    >
      <View style={styles.frameParent}>
        <View
          style={[
            styles.basilIconsoutlineoutlinegeParent,
            styles.frameGroupFlexBox,
          ]}
        >
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
          <Text style={styles.text}>รายจ่าย-รับ</Text>
        </View>
        <IncomeForm />
        <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
          <FormContainer
            productImageId={require("../assets/2-foodgrainsofrice.png")}
            plantSeedImageUrl="เมล็ดพันธุ์พืช"
            productDescription="แครอท"
            priceReduction="-฿100"
          />
          <FormContainer
            productImageId={require("../assets/3-farmfertilizer.png")}
            plantSeedImageUrl="ปุ๋ยเเละยา"
            productDescription="ปุ๋ยกระต่าย"
            priceReduction="-฿10,000"
            propMarginTop={8}
            propWidth="unset"
            propAlignSelf="stretch"
            propFlex={1}
          />
          <FormContainer
            productImageId={require("../assets/2-foodfarmer2.png")}
            plantSeedImageUrl="เเรงงาน"
            productDescription="ทั่วไป"
            priceReduction="-฿2,000"
            propMarginTop={8}
            propWidth="unset"
            propAlignSelf="stretch"
            propFlex={1}
          />
          <FormContainer
            productImageId={require("../assets/3-farmtractor.png")}
            plantSeedImageUrl="ค่ารถจักร"
            productDescription="ปรับแต่งดิน"
            priceReduction="-฿6,500"
            propMarginTop={8}
            propWidth="unset"
            propAlignSelf="stretch"
            propFlex={1}
          />
        </View>
      </View>
      <ProfileForm1
        onLayoutPress={() => navigation.navigate("Expense")}
        onLayoutPress1={() => navigation.navigate("Status1")}
        onLayoutPress2={() => navigation.navigate("Modal1")}
        onLayoutPress3={() => navigation.navigate("RiceInfo")}
        onLayoutPress4={() => navigation.navigate("Proofile")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  expenseScrollViewContent: {
    flexDirection: "column",
    paddingTop: 28,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameGroupFlexBox: {
    justifyContent: "center",
    alignItems: "center",
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
    marginLeft: 8,
    flex: 1,
  },
  basilIconsoutlineoutlinegeParent: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameGroup: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    marginTop: 8,
    width: 380,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  frameParent: {
    shadowColor: "rgba(152, 152, 152, 0.5)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    height: 621,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    width: 380,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  expense: {
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
});

export default Expense;
