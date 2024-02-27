import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { CustomButtonBG } from "../../components";
import { COLORS } from "../../Constants";

const DisasterDetailsScreen = ({ navigation, route }) => {
  const [selectedDisaster, setSelectedDisasters] = useState(null);

  useEffect(() => {
    let { DisasterInfo } = route.params;
    setSelectedDisasters(DisasterInfo);
  });

  const windowWidth = Dimensions.get("window").width;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            source={{uri: selectedDisaster?.image}}
            style={{
              width: windowWidth - 20,
              height: 200,
              margin: 10,
              borderRadius: 10,
            }}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Text style={styles.mainHeading}>{selectedDisaster?.disaster}</Text>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.SubHeading}>Description</Text>
            <Text style={styles.content}>{selectedDisaster?.description}</Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
          <CustomButtonBG
            buttonText="Countinue"
            buttonContainerStyle={{
              paddingVertical: 20,
              borderRadius: 15,
              width: 200,
              marginTop: 30,
            }}
            colors={[COLORS.darkBlack, COLORS.darkBlack]}
            onPress={() => {
              navigation.navigate("PickupTheLocation");
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DisasterDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainHeading: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
  },
  SubHeading: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 5,
  },
  content: {
    marginTop: 5,
    fontWeight: "300",
    marginBottom: 5,
  },
});
