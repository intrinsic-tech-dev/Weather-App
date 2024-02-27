import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { icons, subscriptionDummyData } from "../../Constants";
import { Dimensions } from "react-native";

export default function SubscriptionsScreen({ navigation }) {
  const windowWidth = Dimensions.get("window").width;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: "row", justifyContent:"space-between", margin: 10}}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AddFeedback");
            }}
          >
            <Image style={{ width: 30, height: 30 }} source={icons.feedback} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SubscribePlace");
            }}
          >
            <Image style={{ width: 30, height: 30 }} source={icons.add} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {subscriptionDummyData.subscriptionDetails.map((item) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginTop: 3,
              marginBottom: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
            key={item.id}
            onPress={() => {
              navigation.navigate("SingleSubscriptionScreen");
            }}
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
                <Image style={{ width: 20, height: 20 }} source={icons.rain2} />
              </View>
              <Text style={{ fontSize: 20 }}>{item.place}</Text>
              <Text style={{ fontSize: 16 }}>{item.name}</Text>
              <Text style={{ fontWeight: "300" }}>{item.date}</Text>
              <Text style={{ fontWeight: "300" }}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
