import React, { useContext, useEffect, useState } from 'react';
import {Image,StyleSheet,Text,View,ScrollView,Pressable,ImageBackground} from "react-native";
import { useNavigation,useFocusEffect } from "@react-navigation/native";
import FormSection from "../components/FormSection";
import ProfileForm1 from "../components/ProfileForm1";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";
import UserContext from "../components/UserContext";
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
  name: 'plot.db', 
  location: 'default',   
});

const Home = () => {
  const navigation = useNavigation();
  const [plots, setPlots] = useState([]); 
  const { user } = useContext(UserContext); 

  const fetchPlotData = async () => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT plot_id, rice_variety, area, planting_date FROM plot WHERE user_id = ? ORDER BY plot_id DESC', 
          [user.id],
          (tx, results) => {
            const rows = results.rows;
            const plotData = [];
            for (let i = 0; i < rows.length; i++) {
              plotData.push(rows.item(i));
            }
            setPlots(plotData); 
          },
          (error) => {
            console.error('Error fetching data:', error);
          }
        );
      });
    } catch (error) {
      console.error('Transaction error:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchPlotData();
    }, [user.id])
  );

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
      >
        {/* Greeting Section */}
        <View style={styles.greetingContainer}>
          <View style={styles.greetingInner}>
            <View style={styles.avatarSection}>
              <Image
                style={styles.avatar}
                resizeMode="cover"
                source={require("../assets/avatar.png")}
              />
              <View style={styles.greetingText}>
                <Text style={[styles.greeting, styles.greetingFont]}>
                  สวัสดี
                </Text>
                <Text style={[styles.greeting2, styles.greetingFont]}>
                  {user?.username} (ID: {user?.id}) (national_id: {user?.national_id})
                </Text>
              </View>
            </View>
            <Image
              style={styles.notificationIcon}
              resizeMode="cover"
              source={require("../assets/iconixtolinearnotificationunread.png")}
            />
          </View>
        </View>

        {/* Pressable Section */}
        <View style={styles.centeredContainer}>
          <Pressable
            style={styles.pressable}
            onPress={() => navigation.navigate("Modal2")}
          >
            <View style={styles.imageContainer}>
              <Image
                style={styles.backgroundImage}
                resizeMode="cover"
                source={require("../assets/grass-landscape-field-vector-png-images-nature-landscape-vector-with-green-field-grass-trees-blue-sky-and-clouds-suitable-for-background-or-illustration-nature-clipart-day-landscape-png-image-for-free-download-1.png")}
              />
              <View style={styles.iconContainer}>
                {plots.length === 0 ? (
                  <View style={styles.noPlotContainer}>
                    <Image
                      style={styles.icon}
                      resizeMode="cover"
                      source={require('../assets/iconixtolinearaddsquare.png')}
                    />
                    <View style={styles.textWrapper}>
                      <Text style={styles.createPlotText}>สร้างแปลง</Text>
                    </View>
                  </View>
                ) : (
                  plots.map((plot, index) => (
                    <View key={index} style={styles.plotContainer}>
                      <Text style={styles.plotText}>พันธุ์ข้าว: {plot.rice_variety}</Text>
                      <Text style={styles.plotText}>จำนวนพื้นที่: {plot.area} ไร่</Text>
                      <Text style={styles.plotText}>วันที่ปลูก: {plot.planting_date}</Text>
                      <Pressable 
                        style={styles.detailsButton} 
                        onPress={() => navigation.navigate('Plot', { plotId: plot.plot_id })}
                      >
                        <Text style={styles.detailsButtonText}>รายละเอียดแปลง</Text>
                      </Pressable>
                    </View>
                  ))
                )}
              </View>
            </View>
          </Pressable>
        </View>

        {/* Form Section */}
        <FormSection
          onFramePressablePress={() => navigation.navigate("PlotSurvey")}
          onFramePressablePress1={() => navigation.navigate("Member")}
          onFramePressablePress2={() => navigation.navigate("RiceInfo")}
          onFramePressablePress3={() => navigation.navigate("GAPCertify")}
        />

        {/* Image Background Section */}
        <ImageBackground
          style={styles.gapImage}
          resizeMode="cover"
          source={require("../assets/gap1.png")}
        />
      </ScrollView>

      {/* Profile Form */}
      <ProfileForm1
        imageAltText={require("../assets/menu-icon.png")}
        menuIcon1={require("../assets/menu-icon2.png")}
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
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: Padding.p_base,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 70,
  },
  greetingContainer: {
    paddingTop: Padding.p_9xl,
    justifyContent: "center",
    alignItems: "center",
  },
  greetingInner: {
    width: 412,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  avatarSection: {
    flexDirection: "row",
    justifyContent: "center",
  },
  avatar: {
    width: 48,
    height: 48,
  },
  greetingText: {
    marginLeft: 24,
  },
  greetingFont: {
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.iBMPlexSansThaiMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.bodyB4Regular_size,
  },
  greeting: {
    alignSelf: "stretch",
    textAlign: "left",
  },
  greeting2: {
    textAlign: "center",
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  pressable: {
    paddingHorizontal: Padding.p_base,
  },
  imageContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_base,
  },
  backgroundImage: {
    width: 307,
    height: 307,
    borderRadius: Border.br_base,
  },
  iconContainer: {
    position: "absolute",
    top: 230,
    zIndex: 1,
    width: 275,
    height: 91,
    backgroundColor: Color.surfaceColourWhiteSurface,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_base,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
  },
  icon: {
    width: 48,
    height: 48,
  },
  textWrapper: {
    marginTop: 8,
  },
  createPlotText: {
    fontSize: FontSize.titleT3SemiBold_size,
    fontFamily: FontFamily.athitiSemiBold,
    color: Color.advertisingGreen1000,
    textAlign: "center",
  },
  gapImage: {
    borderRadius: Border.br_5xs,
    width: 316,
    height: 210,
    marginVertical: 16,
  },
});

export default Home;
