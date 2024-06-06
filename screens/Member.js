import { Image, StyleSheet, Pressable, Text, View, FlatList, Dimensions } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import SQLite from 'react-native-sqlite-storage';
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import React, { useEffect, useState } from "react";

// Function to open the database
const openMemberDatabase = async () => {
  try {
    const memberDb = await SQLite.openDatabase({ name: 'member.db', location: 'default' });
    await memberDb.executeSql(`CREATE TABLE IF NOT EXISTS Members (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      position TEXT
    );`);
    return memberDb;
  } catch (error) {
    console.log('Failed to open Member database:', error);
  }
};

// Function to fetch all members from the database
const fetchMembers = async (memberDb) => {
  try {
    const results = await memberDb.executeSql(`SELECT * FROM Members;`);
    const members = [];
    for (let i = 0; i < results[0].rows.length; i++) {
      members.push(results[0].rows.item(i));
    }
    return members;
  } catch (error) {
    console.log('Failed to fetch Members:', error);
    return [];
  }
};

// Function to delete a member from the database
const deleteMember = async (memberDb, memberId) => {
  try {
    await memberDb.executeSql(`DELETE FROM Members WHERE id = ?;`, [memberId]);
    console.log('Member deleted:', memberId);
  } catch (error) {
    console.log('Failed to delete Member:', error);
  }
};

const Member = () => {
  const navigation = useNavigation();
  const [members, setMembers] = useState([]);
  const isFocused = useIsFocused();

  // Open the database
  const [memberDb, setMemberDb] = useState(null);
  useEffect(() => {
    (async () => {
      const db = await openMemberDatabase();
      setMemberDb(db);
      if (db) {
        const members = await fetchMembers(db);
        setMembers(members);
      }
    })();
  }, []);

  // Refresh the members list when the screen is focused
  useEffect(() => {
    if (isFocused && memberDb) {
      (async () => {
        const members = await fetchMembers(memberDb);
        setMembers(members);
      })();
    }
  }, [isFocused, memberDb]);

  const handleDeleteMember = async (memberId) => {
    await deleteMember(memberDb, memberId);
    const updatedMembers = await fetchMembers(memberDb);
    setMembers(updatedMembers);
  };

  const renderMember = ({ item }) => (
    <View style={styles.memberItem}>
      <Image
        style={styles.memberIcon}
        resizeMode="cover"
        source={require("../assets/2-foodfarmer3.png")}
      />
      <Text style={styles.text3}>{item.name}</Text>
      <Text style={styles.text3}>{item.position}</Text>
      <Pressable onPress={() => handleDeleteMember(item.id)}>
        <Image
          style={styles.deleteIcon}
          resizeMode="cover"
          source={require("../assets/1-system-iconsdelete.png")}
        />
      </Pressable>
    </View>
  );

  return (
    <View style={styles.member}>
      <View style={styles.frameParent}>
        <View style={styles.basilIconsoutlineoutlinegeParent}>
          <Pressable
            style={styles.systemIconseditLayout}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/basil-iconsoutlineoutlinegeneralhome.png")}
            />
          </Pressable>
          <Text style={[styles.text, styles.textTypo]}>ผังสมาชิก</Text>
        </View>
        <View style={[styles.frameGroup, styles.frameFlexBox]}>
          <Pressable
            style={styles.systemIconsaddUserParent}
            onPress={() => navigation.navigate("Modal5", { onMemberAdded: fetchMembers })}
          >
            <Image
              style={[styles.systemIconsedit, styles.systemIconseditLayout]}
              resizeMode="cover"
              source={require("../assets/1-system-iconsadd-user.png")}
            />
            <Text style={styles.textTypo}>เพิ่ม</Text>
          </Pressable>
        </View>
        <FlatList
          data={members}
          renderItem={renderMember}
          keyExtractor={(item) => item.id.toString()}
          numColumns={4} // Display 4 items per row
          contentContainerStyle={styles.frameContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.selectorS6SemiBold,
    fontWeight: "600",
    lineHeight: 28,
    fontSize: FontSize.buttonBT3SemiBold_size,
  },
  frameFlexBox: {
    marginTop: 8,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  systemIconseditLayout: {
    height: 24,
    width: 24,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  text: {
    flex: 1,
  },
  basilIconsoutlineoutlinegeParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  systemIconsedit: {
    overflow: "hidden",
  },
  systemIconseditParent: {
    flexDirection: "row",
  },
  systemIconsaddUserParent: {
    marginLeft: 8,
    flexDirection: "row",
  },
  frameGroup: {
    justifyContent: "flex-end",
    padding: Padding.p_5xs,
  },
  foodfarmerIcon: {
    width: 44,
    height: 44,
    overflow: "hidden",
  },
  text3: {
    color: Color.colorDarkgray_100,
    textAlign: "left",
    fontFamily: FontFamily.selectorS6SemiBold,
    fontWeight: "600",
    lineHeight: 28,
    fontSize: FontSize.buttonBT3SemiBold_size,
  },
  foodfarmerParent: {
    alignItems: "center",
  },
  foodfarmerGroup: {
    marginLeft: 16,
    alignItems: "center",
  },
  frameContainer: {
    justifyContent: "center",
  },
  frameParent: {
    position: "absolute",
    marginLeft: -206,
    top: 0,
    left: "50%",
    width: 412,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_9xl,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
  },
  member: {
    backgroundColor: Color.gray00,
    height: 732,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  memberItem: {
    flexBasis: '23%', // Adjust the width to fit 4 items in a row with spacing
    alignItems: 'center',
    marginBottom: Padding.p_base,
  },
  memberIcon: {
    width: '70%',
    height: undefined,
    aspectRatio: 1,
    marginBottom: Padding.p_sm,
  },
  deleteIcon: {
    width: 20,
    height: 20,
    marginTop: 10,
  },
});

export default Member;
