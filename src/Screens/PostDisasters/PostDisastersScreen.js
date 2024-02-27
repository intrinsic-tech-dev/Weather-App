import React from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { COLORS, dummyDisasters } from "../../Constants";

export default function PostDisastersScreen({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {dummyDisasters.disastersList?.map((item) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: COLORS.gray3,
              justifyContent: "space-between",
              borderRadius: 10,
              padding: 10,
              marginBottom: 10,
              paddingLeft: 30,
              paddingRight: 30,
            }}
            onPress={() => {
              navigation.navigate("DisasterDetails", {
                DisasterName: item.disaster,
                DisasterInfo: item,
              });
            }}
            key={item.id}
          >
            <View style={{ justifyContent: "center" }}>
              <Text style={{ fontSize: 30 }}>{item.disaster}</Text>
            </View>
            <View>
              <Image
                style={{ width: 100, height: 100, borderRadius: 10 }}
                source={{uri:item.image}}
              />
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
    margin: 10,
  },
});
