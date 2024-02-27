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
import { icons, subscriptionDummyData } from "../Constants";
import { Avatar } from 'react-native-paper';
import { Dimensions } from "react-native";

export default function ShowFeedbacks({ navigation }) {
  const windowWidth = Dimensions.get("window").width;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {subscriptionDummyData.subscriptionDetails.map((item) => (
          <TouchableOpacity
            style={{ flexDirection: "row", marginTop: 3, marginBottom: 20, alignItems: "center", justifyContent: "center", }}
            key={item.id}
          >

            <View>
            <Avatar.Image size={100} source={{uri: item.profileImg,}} />
            </View>
            <View style={{ marginRight: 10, marginLeft: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: windowWidth - 150,
                }}
              >
                <View>
                <Text style={{ fontSize: 16 }}>{item.personName}</Text>
                <Text style={{ fontWeight: "325" }}>{item.description}</Text>
                </View>
              </View>
              <View style={{ fontSize: 15, flexDirection: 'row', alignSelf: "center", }}>
                <Image style={{ width: 20, height: 20 }} source={icons.star} />
                <Image style={{ width: 20, height: 20, marginLeft: "3%" }} source={icons.star} />
                <Image style={{ width: 20, height: 20, marginLeft: "3%" }} source={icons.star} />
                <Image style={{ width: 20, height: 20, marginLeft: "3%" }} source={icons.star} />
                <Image style={{ width: 20, height: 20, marginLeft: "3%" }} source={icons.star} />
              </View>
                <View>
                  <Image style={{ width: 40, height: 40, marginLeft: "3%", alignSelf: "center" }} source={icons.like} />
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});