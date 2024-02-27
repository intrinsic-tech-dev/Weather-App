import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { CustomButtonBG } from "../../components";
import { COLORS, icons, subscriptionDummyData } from "../../Constants";
import { Dimensions } from "react-native";

export default function SubscribePlace() {
  const windowWidth = Dimensions.get("window").width;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {subscriptionDummyData.subscriptionDetails.map((item) => (
          <View
            style={{
              flexDirection: "row",
              marginTop: 3,
              marginBottom: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
            key={item.id}
          >
            <View>
              <Image
                style={{ width: 100, height: 100, borderRadius: 10 }}
                source={{
                  uri: item.image,
                }}
              />
            </View>
            <View style={{ marginRight: 10, marginLeft: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: windowWidth - 150,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={icons.location}
                />
              </View>
              <View style={{ fontSize: 20, alignItems: "center" }}>
                <Text style={{ fontSize: 20, textAlign: "center" }}>
                  {item.place}
                </Text>
                <CustomButtonBG
                  buttonText="Subscribe"
                  buttonContainerStyle={{
                    paddingVertical: 10,
                    borderRadius: 6,
                    width: 150,
                    marginTop: 10,
                  }}
                  colors={[COLORS.black, COLORS.black]}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 2,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                  }}
                ></View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
