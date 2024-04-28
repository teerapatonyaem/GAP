import React from 'react';
import { ScrollView, Text, StyleSheet, View, Pressable } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Padding, Color, FontSize, Border, FontFamily } from '../GlobalStyles';
import SectionCard from '../components/SectionCard';
import ProfileForm1 from '../components/ProfileForm1';
import LogoutButton from '../components/LogoutButton'; 

// ปุ่มอัปโหลดไฟล์
const UploadButton = ({ onFileSelected }) => {
  const handlePress = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorCode) {
        console.log("ImagePicker Error:", response.errorMessage);
      } else {
        const file = response.assets[0];
        if (onFileSelected) {
          onFileSelected(file);
        }
      }
    });
  };

  return (
    <Pressable style={styles.uploadWrapper} onPress={handlePress}>
      <Text style={styles.uploadText}>Upload</Text>
    </Pressable>
  );
};

const Profile = () => {
  const navigation = useNavigation();

  const handleFileSelected = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', {
        uri: file.uri,
        type: file.type,
        name: file.fileName,
      });

      const response = await axios.post(
        'https://your-backend-endpoint.com/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.profileInner}>
          <SectionCard />
          
          {/* Information Section */}
          <View style={styles.infoSection}>
            <Text style={styles.headerText}>ชื่อ - นามสกุล</Text>
            <Text style={styles.regularText}>นายเกษตรกร มั่งมี</Text>
            <Text style={styles.headerText}>เลขที่บัตรประจำตัวประชาชน</Text>
            <Text style={styles.regularText}>113610905008-3</Text>
          </View>
          
          {/* Upload Sections */}
          <View style={styles.uploadSection}>
            <Text style={styles.headerText}>สำเนาทะเบียนบ้าน</Text>
            <UploadButton onFileSelected={handleFileSelected} />
          </View>

          <View style={styles.uploadSection}>
            <Text style={styles.headerText}>สำเนาบัตรประชาชน</Text>
            <UploadButton onFileSelected={handleFileSelected} />
          </View>

          <View style={styles.uploadSection}>
            <Text style={styles.headerText}>การจดทะเบียนนิติบุคคล</Text>
            <UploadButton onFileSelected={handleFileSelected} />
          </View>

          {/* Navigation Sections */}
          <View style={styles.clearUsersSection}>
            <Pressable
              style={styles.clearUsersButton}
              onPress={() => navigation.navigate('ClearUsersComponent')}
            >
              <Text style={styles.clearUsersText}>Clear All Users</Text>
            </Pressable>
          </View>

          <View style={styles.logoutSection}>
            <LogoutButton />
          </View>

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
    backgroundColor: Color.surfaceColourWhiteSurface,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: Padding.p_base,
    paddingBottom: 100,
  },
  profileInner: {
    flex: 1,
  },
  infoSection: {
    marginBottom: 20,
    backgroundColor: Color.gray50,
    padding: Padding.p_5xs,
    borderRadius: Border.br_5xs,
  },
  uploadSection: {
    marginTop: 20,
    padding: Padding.p_5xs,
    backgroundColor: Color.gray50,
    borderRadius: Border.br_5xs,
  },
  text: {
    fontFamily: FontFamily.titleT3SemiBold,
    fontWeight: '600',
    fontSize: FontSize.bodyB4Regular_size,
    color: Color.labelColorLightPrimary,
  },
  headerText: {
    textAlign: 'left',
    lineHeight: 28,
  },
  regularText: {
    textAlign: 'left',
    marginTop: 8,
    lineHeight: 28,
  },
  uploadWrapper: {
    padding: Padding.p_3xs,
    alignItems: 'center',
    backgroundColor: Color.surfaceColourWhiteSurface,
    borderRadius: Border.br_5xs,
  },
  uploadText: {
    fontFamily: FontFamily.iBMPlexSansThaiMedium,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.bodyB4Regular_size,
  },
  clearUsersSection: {
    marginTop: 20,
    alignItems: 'center',
  },
  clearUsersButton: {
    backgroundColor: 'red',
    padding: Padding.p_5xs,
    borderRadius: Border.br_5xs,
  },
  clearUsersText: {
    color: 'white',
    fontSize: FontSize.bodyB4Regular_size,
  },
  logoutSection: {
    marginTop: 20,
    alignItems: 'center',
  },
  
});

export default Profile;
