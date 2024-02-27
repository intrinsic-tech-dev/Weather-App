import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { icons, dummyData } from "../Constants";
import { Dimensions } from "react-native";

export default function DisastersScreen({ navigation }) {
  const windowWidth = Dimensions.get("window").width;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {dummyData.disastersDetails.map((item) => (
          <TouchableOpacity
            style={{ flexDirection: "row", marginTop: 3, marginBottom: 20 }}
            key={item.id}
            onPress={() => {
              navigation.navigate("SingleDisastersScreen", {
                DisasterName: item.name,
                DisasterInfo: item,
              });
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
                <Image style={{ width: 20, height: 20 }} source={icons.heart} />
              </View>
              <Text style={{ fontSize: 20 }}>{item.name}</Text>
              <Text style={{ fontSize: 16 }}>{item.location}</Text>
              <Text style={{ fontWeight: "200" }}>{item.date}</Text>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 2,
                }}
              >
                <Image style={{ width: 18, height: 18 }} source={icons.star} />
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{ marginLeft: 5, fontWeight: "700", fontSize: 18 }}
                  >
                    {item.rating}
                  </Text>
                  <Text
                    style={{
                      marginLeft: 4,
                      margin: 1,
                      fontWeight: "300",
                      fontSize: 17,
                    }}
                  >
                    ({item.reviews} Reviews)
                  </Text>
                </View>
              </View>
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
    marginLeft: 10,
    marginRight: 10,
  },
});
