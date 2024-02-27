import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Dimensions } from "react-native";
import { COLORS, icons, images } from "../Constants";

export default function HomeScreen() {
  const windowWidth = Dimensions.get("window").width;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 10 }}
            source={images.profile}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 20 }}>Theeban</Text>
            <Text style={{ fontSize: 18, marginTop: 10, fontWeight: "300" }}>
              Beijing
            </Text>
          </View>
        </View>
        <View style={{ fontSize: 20, marginTop: 20 }}>
          <Text style={{ fontSize: 28, fontWeight: "600" }}>
            Feels Like A good
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 28, fontWeight: "600" }}>
              time to ride a bike
            </Text>
            <Image
              style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                marginLeft: 40,
                marginTop: -20,
              }}
              source={icons.bicycle}
            />
          </View>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={{
              width: windowWidth,
              height: windowWidth,
              borderRadius: 10,
              position: "relative",
            }}
            source={images.home_main}
          />
          <View
            style={{
              position: "absolute",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: "white",
                marginLeft: -50,
                marginTop: -30,
              }}
            >
              Today’s Like
            </Text>
            <Text style={{ fontSize: 50, color: "white", marginLeft: -80 }}>
              25°
            </Text>
          </View>
        </View>
        <View style={{ ...styles.bottomCard, width: windowWidth - 20 }}>
          <Text>
            Clear conditions will continue fro the rest of the day. Wind gusts
            are up to 19 km/h.
          </Text>
          <View
            style={{
              borderBottomColor: COLORS.lightLime,
              borderBottomWidth: 1,
            }}
          />
          <ScrollView
            style={{ flexDirection: "row" }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={{ marginTop: 10, marginBottom: 10, marginRight: 15 }}>
              <Text style={{ marginLeft: 7, fontSize: 15 }}>Now</Text>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginTop: 10,
                  marginBottom: 10,
                }}
                source={icons.rain3}
              />
              <Text style={{ marginLeft: 7, fontSize: 15 }}>26°C</Text>
            </View>
            <View style={{ marginTop: 10, marginBottom: 10, marginRight: 15 }}>
              <Text style={{ marginLeft: 7, fontSize: 15 }}>8 PM</Text>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginTop: 10,
                  marginBottom: 10,
                }}
                source={icons.rain3}
              />
              <Text style={{ marginLeft: 7, fontSize: 15 }}>25°C</Text>
            </View>
            <View style={{ marginTop: 10, marginBottom: 10, marginRight: 15 }}>
              <Text style={{ marginLeft: 7, fontSize: 15 }}>9 PM</Text>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginTop: 10,
                  marginBottom: 10,
                }}
                source={icons.rain3}
              />
              <Text style={{ marginLeft: 7, fontSize: 15 }}>25°C</Text>
            </View>
            <View style={{ marginTop: 10, marginBottom: 10, marginRight: 15 }}>
              <Text style={{ marginLeft: 7, fontSize: 15 }}>10 PM</Text>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginTop: 10,
                  marginBottom: 10,
                }}
                source={icons.rain3}
              />
              <Text style={{ marginLeft: 7, fontSize: 15 }}>24°C</Text>
            </View>
            <View style={{ marginTop: 10, marginBottom: 10, marginRight: 15 }}>
              <Text style={{ marginLeft: 7, fontSize: 15 }}>11 PM</Text>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginTop: 10,
                  marginBottom: 10,
                }}
                source={icons.rain3}
              />
              <Text style={{ marginLeft: 7, fontSize: 15 }}>26°C</Text>
            </View>
            <View style={{ marginTop: 10, marginBottom: 10, marginRight: 15 }}>
              <Text style={{ marginLeft: 7, fontSize: 15 }}>12 PM</Text>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginTop: 10,
                  marginBottom: 10,
                }}
                source={icons.rain3}
              />
              <Text style={{ marginLeft: 7, fontSize: 15 }}>26°C</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  bottomCard: {
    bottom: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.gray3,
    padding: 10,
    backgroundColor: COLORS.gray3,
  },
});
