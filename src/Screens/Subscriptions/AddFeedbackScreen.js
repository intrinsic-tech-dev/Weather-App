import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import { COLORS, icons, FONTS } from "../../Constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { CustomButtonBG } from "../../components";
import {
  RadioButton,
  Modal,
  Portal,
  Text,
  Button,
  Provider,
} from "react-native-paper";

export default function AddFeedback({ navigation }) {
  const [checked, setChecked] = React.useState("first");

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView style={{ paddingTop: "20%" }}>
        <View
          style={{
            flex: 1,
            paddingRight: 5,
            margin: 1,
            marginVertical: 1,
            top: 1,
          }}
        >
          <Text
            style={{
              // width: "80%",
              color: COLORS.black,
              ...FONTS.largeTitle,
              lineHeight: 45,
              marginVertical: 1,
              fontWeight: "700",
              marginBottom: 20,
            }}
          >
            We will look for your Feedback! 😊
          </Text>
        </View>
        <View
          style={{
            marginLeft: "1%",
            marginTop: 10,
            borderWidth: 1,
            padding: 8,
            borderColor: COLORS.gray3,
            borderRadius: 30,
            marginBottom: 20,
          }}
        >
          <TextInput
            style={{
              color: "#717171",
              fontSize: 17,
              lineHeight: 22,
              fontWeight: "400",
            }}
            placeholder="Enter Your Name"
            placeholderTextColor="#717171"
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
        </View>

        <Text style={{ fontSize: 15, marginLeft: "5%", marginTop: 5 }}>
          {"Select your gender"}
        </Text>
        <View
          style={{
            marginLeft: "5%",
            flexDirection: "row",
            alignSelf: "auto",
            alignItems: "center",
          }}
        >
          <RadioButton
            value="first"
            style={{ width: 30, height: 30 }}
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text style={{ fontSize: 14, marginTop: 6 }}>{"Male"}</Text>
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text style={{ fontSize: 14, marginTop: 6 }}>{"Female"}</Text>
          <RadioButton
            value="third"
            status={checked === "third" ? "checked" : "unchecked"}
            onPress={() => setChecked("third")}
          />
          <Text style={{ fontSize: 14, marginTop: 6 }}>{"Other"}</Text>
        </View>
        <View>
          <View
            style={{
              marginLeft: "1%",
              marginTop: 15,
              borderWidth: 1,
              padding: 8,
              borderColor: COLORS.gray3,
              borderRadius: 30,
              marginBottom: 15,
            }}
          >
            <TextInput
              style={{
                color: "#717171",
                fontSize: 17,
                lineHeight: 22,
                keyboardType: Number,
                fontWeight: "400",
              }}
              placeholder="Enter Your Age"
              placeholderTextColor="#717171"
              autoCapitalize="none"
              keyboardType="number-pad"
              onChangeText={(val) => textInputChange(val)}
            />
          </View>
          <Text style={{ fontSize: 15, marginTop: 3, textAlign: "center" }}>
            {"please rate us"}
          </Text>
        </View>
        <View
          style={{ fontSize: 15, flexDirection: "row", alignSelf: "center" }}
        >
          <Image style={{ width: 20, height: 20 }} source={icons.star} />
          <Image
            style={{ width: 20, height: 20, marginLeft: "3%" }}
            source={icons.star}
          />
          <Image
            style={{ width: 20, height: 20, marginLeft: "3%" }}
            source={icons.star}
          />
          <Image
            style={{ width: 20, height: 20, marginLeft: "3%" }}
            source={icons.star}
          />
          <Image
            style={{ width: 20, height: 20, marginLeft: "3%" }}
            source={icons.star}
          />
        </View>
        <View>
          <View
            style={{
              marginLeft: "1%",
              marginTop: 10,
              borderWidth: 1,
              padding: 8,
              borderColor: COLORS.gray3,
              borderRadius: 30,
              marginBottom: 15,
            }}
          >
            <TextInput
              style={{
                color: "#717171",
                fontSize: 17,
                lineHeight: 22,
                fontWeight: "400",
              }}
              placeholder="Enter Your Feedback"
              placeholderTextColor="#717171"
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
          </View>
        </View>
        <View style={{ flex: 1, alignItems: "center", marginTop: 15 }}>
          <CustomButtonBG
            buttonText="Submit"
            buttonContainerStyle={{
              paddingVertical: 20,
              borderRadius: 30,
              width: 200,
            }}
            colors={[COLORS.darkBlack, COLORS.darkBlack]}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ShowFeedbacks")}>
          <Text
            style={{
              margin: 1,
              fontWeight: "500",
              color: "blue",
              paddingVertical: 20,
              paddingLeft: 130,
            }}
          >
            View Feedback
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    marginTop: -30,
  },
  input: {
    height: 40,
    margin: 4,
    borderWidth: 1,
    padding: 5,
    marginLeft: "5%",
    marginRight: "5%",
  },
});
