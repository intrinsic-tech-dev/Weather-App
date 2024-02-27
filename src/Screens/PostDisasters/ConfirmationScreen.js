import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { images } from "../../Constants";
import CustomButtonBG from "../../components/CustomButtonBG";
import { COLORS } from "../../Constants";

const ConfirmationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={images.confirmation}
        style={{
          borderRadius: 70,
        }}
      />
      <Text style={{ fontSize: 20, margin: 20 }}>
        Confirm the Weather Incident
      </Text>
      <CustomButtonBG
        buttonText="Confirm & Share"
        buttonContainerStyle={{
          paddingVertical: 20,
          borderRadius: 15,
          margin: 20,
          width: 200,
        }}
        onPress={() => {
          navigation.navigate("New Disasters");
        }}
        colors={[COLORS.darkBlack, COLORS.darkBlack]}
      />
      <CustomButtonBG
        buttonText="Discard"
        buttonContainerStyle={{
          paddingVertical: 20,
          borderRadius: 15,
          width: 200,
        }}
        onPress={() => navigation.goBack()}
        colors={[COLORS.darkBlack, COLORS.darkBlack]}
      />
    </View>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
});
