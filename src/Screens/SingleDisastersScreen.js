import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  StatusBar
} from "react-native";
import { Dimensions } from "react-native";
import { icons, COLORS } from "../Constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function HomeScreen({ navigation, route }) {
  const windowWidth = Dimensions.get("window").width;

  const [selectedDisaster, setSelectedDisasters] = useState(null);

  useEffect(() => {
    let { DisasterInfo } = route.params;
    setSelectedDisasters(DisasterInfo);
  });

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View showsVerticalScrollIndicator={false}>
        <View>
          <Image
            source={{
              uri: selectedDisaster?.image,
            }}
            style={{
              width: windowWidth - 20,
              height: 200,
              margin: 10,
              borderRadius: 10,
            }}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Text style={styles.mainHeading}>{selectedDisaster?.name}</Text>
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
              <Text style={{ marginLeft: 5, fontWeight: "700", fontSize: 17 }}>
                {selectedDisaster?.rating}
              </Text>
              <Text
                style={{
                  marginLeft: 4,
                  margin: 1,
                  fontWeight: "300",
                  fontSize: 16,
                }}
              >
                ({selectedDisaster?.reviews} Reviews)
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.SubHeading}>Description</Text>
            <Text style={styles.content}>{selectedDisaster?.description}</Text>
          </View>
          <View>
            <Text style={{ ...styles.SubHeading }}>Review (1045)</Text>
            {selectedDisaster?.client_review
              ? selectedDisaster?.client_review.map((item) => (
                  <View
                    style={{ flexDirection: "row", marginTop: 15 }}
                    key={item.id}
                  >
                    <View>
                      <Image
                        source={{
                          uri: item.image,
                        }}
                        style={{ width: 50, height: 50, borderRadius: 10 }}
                      />
                    </View>
                    <View style={{ marginLeft: 15 }}>
                      <Text
                        style={{
                          ...styles.SubHeading,
                          marginTop: -4,
                          marginBottom: -5,
                        }}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          ...styles.content,
                          marginRight: 60,
                          textAlign: "justify",
                        }}
                      >
                        {item.comment}
                      </Text>
                    </View>
                  </View>
                ))
              : null}
          </View>
          <View style={{ marginTop: 20 }}>
            <View
              style={{
                height: 40,
                borderWidth: 1,
                padding: 12,
                borderColor: COLORS.gray3,
                backgroundColor: COLORS.gray3,
                borderRadius: 15,
                marginBottom: 15,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                style={{
                  color: "#717171",
                  fontSize: 17,
                  fontWeight: "400",
                }}
                placeholder="Write a comment..."
                placeholderTextColor="#717171"
                autoCapitalize="none"
              />
              <Image style={{ width: 18, height: 18, marginTop:-2 }} source={icons.send} />
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainHeading: {
    fontSize: 25,
    fontWeight: "500",
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
