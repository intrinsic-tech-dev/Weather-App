import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { icons } from "../Constants";
import { AuthContext } from "../components/context";

const ProfileScreen = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Image
          style={{ width: 200, height: 200, borderRadius: 30 }}
          source={{
            uri: "https://learn.microsoft.com/answers/storage/attachments/209536-360-f-364211147-1qglvxv1tcq0ohz3fawufrtonzz8nq3e.jpg",
          }}
        />
        <Text style={{ fontSize: 30, fontWeight: "500", margin: 20 }}>
          Theebanraj U.
        </Text>
      </View>
      <View
        style={{
          borderWidth: 2,
          margin: 10,
          borderRadius: 5,
          borderColor: "#8f8d8d",
        }}
      >
        <TouchableOpacity style={styles.listView_locakout}>
          <Text style={{ fontSize: 17, marginTop: 3 }}>Edit Profile</Text>
          <Text style={{ fontSize: 17, marginTop: 3 }}></Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderWidth: 2,
          margin: 10,
          borderRadius: 5,
          borderColor: "#8f8d8d",
        }}
      >
        <TouchableOpacity
          style={styles.listView}
          onPress={() => {
            navigation.navigate("ImageUpload");
          }}
        >
          <Text style={{ fontSize: 17, marginTop: 3 }}>About Us</Text>
          <Image
            source={icons.greater_than}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listView}>
          <Text style={{ fontSize: 17, marginTop: 3 }}>Contact Us</Text>
          <Image
            source={icons.greater_than}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => signOut()} style={styles.listView_locakout}>
          <Text style={{ fontSize: 17, marginTop: 3 }}>Log Out</Text>
          <Image
            source={icons.greater_than}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 30,
  },
  listView: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#8f8d8d",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listView_locakout: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
