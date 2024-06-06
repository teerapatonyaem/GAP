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
    <View style={styles.container}>
      <ScrollView
        style={styles.expense}
        contentContainerStyle={styles.expenseScrollViewContent}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.headerContainer}>
          <Pressable
            style={styles.basilIconsoutlineoutlinege}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/basil-iconsoutlineoutlinegeneralhome1.png")}
            />
          </Pressable>
          <Text style={styles.text}>รายรับ-รายจ่าย</Text>
        </View>
        
        <IncomeForm /> 
        
        <View style={styles.frameGroup}>
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
          />
          <FormContainer
            productImageId={require("../assets/2-foodfarmer2.png")}
            plantSeedImageUrl="เเรงงาน"
            productDescription="ทั่วไป"
            priceReduction="-฿2,000"
          />
          <FormContainer
            productImageId={require("../assets/3-farmtractor.png")}
            plantSeedImageUrl="ค่ารถจักร"
            productDescription="ปรับแต่งดิน"
            priceReduction="-฿6,500"
          />
        </View>
      </ScrollView>
      
      <ProfileForm1
        onLayoutPress={() => navigation.navigate("Expense")}
        onLayoutPress1={() => navigation.navigate("Status1")}
        onLayoutPress2={() => navigation.navigate("Modal1")}
        onLayoutPress3={() => navigation.navigate("RiceInfo")}
        onLayoutPress4={() => navigation.navigate("Proofile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between", // Ensures the ProfileForm1 stays at the bottom
  },
  expense: {
    flex: 1, // Allowing ScrollView to take all available space
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  expenseScrollViewContent: {
    paddingTop: 28,
    paddingBottom: 60, // To ensure some space at the bottom if necessary
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  basilIconsoutlineoutlinege: {
    width: 24,
    height: 24,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: FontSize.bodyBH3SemiBold_size,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.titleT3SemiBold,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    marginLeft: 8,
  },
  frameGroup: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    marginTop: 8,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
});

export default Expense;
