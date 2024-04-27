import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';

const UploadComponent = ({ label, onImageSelect }) => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      onImageSelect(result.uri);
    }
  };

  return (
    <View>
      <Text>{label}</Text>
      <Button title="Upload" onPress={pickImage} />
      {image && <Text>Uploaded: {image}</Text>}
    </View>
  );
};

export default UploadComponent;
