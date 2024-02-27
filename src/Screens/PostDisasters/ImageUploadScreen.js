import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import CustomButtonBG from "../../components/CustomButtonBG";
import { COLORS } from "../../Constants";

let result = null;
let imagebase64value = null;

const windowWidth = Dimensions.get("window").width - 30;

const ImageUploadScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [upload, setUpload] = useState(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 2,
    });

    imagebase64value = `data:image/jpeg;base64,` + result;
    console.log(imagebase64value);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView>
      {image && (
        <View style={{ marginTop: 20 }}>
          <View style={styles.container}>
            <Image
              source={{ uri: image }}
              style={{
                width: windowWidth,
                height: windowWidth,
                borderRadius: 30,
              }}
            />
          </View>
        </View>
      )}
      {!image ? (
        <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
          <CustomButtonBG
            buttonText="Take an Image"
            buttonContainerStyle={{
              paddingVertical: 20,
              borderRadius: 15,
              width: 200,
            }}
            onPress={pickImage}
            colors={[COLORS.darkBlack, COLORS.darkBlack]}
          />
        </View>
      ) : (
        <>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 20,
            }}
          >
            <CustomButtonBG
              buttonText="Remove Image"
              buttonContainerStyle={{
                paddingVertical: 20,
                borderRadius: 15,
                width: 150,
              }}
              onPress={() => setImage(null)}
              colors={[COLORS.darkBlack, COLORS.darkBlack]}
            />
            <CustomButtonBG
              buttonText="Upload Image"
              buttonContainerStyle={{
                paddingVertical: 20,
                borderRadius: 15,
                width: 150,
              }}
              onPress={() => (
                alert("Your Image has been successfully uploaded..."),
                setUpload(true)
              )}
              colors={[COLORS.darkBlack, COLORS.darkBlack]}
            />
          </View>
          {upload ? (
            <>
              <TextInput
                style={styles.input}
                placeholder="Comments"
              />
              <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
                <CustomButtonBG
                  buttonText="Share"
                  buttonContainerStyle={{
                    paddingVertical: 20,
                    borderRadius: 15,
                    width: 150,
                  }}
                  onPress={() => {
                    navigation.navigate("ConfirmationScreen");
                  }}
                  colors={[COLORS.darkBlack, COLORS.darkBlack]}
                />
              </View>
            </>
          ) : null}
        </>
      )}
    </ScrollView>
  );
};

export default ImageUploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 20,
    borderBottomWidth: 1,
  },
});
