import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import { COLORS, SIZES, FONTS, images } from "../Constants";
import { CustomButtonBG } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthContext } from "../components/context";
import Feather from "react-native-vector-icons/Feather";

const ForgotPassword = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  const [data, setData] = React.useState({
    email: "",
    password: "",
    isvalidEmail: false,
    isValidPassword: false,
    secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length > 4) {
      setData({
        ...data,
        email: val,
        isvalidEmail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        isvalidEmail: false,
      });
    }
  };

  return (
    <View style={{ padding: 10, flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar barStyle="light-content" />
      <View style={{ height: SIZES.height > 700 ? "100%" : "95%", margin: 10 }}>
        <KeyboardAwareScrollView style={{ paddingTop: "20%" }}>
          <View style={{ flex: 1 }}>
            <Image
              resizeMode="cover"
              style={{
                width: "100%",
                height: "100%",
                paddingBottom: 100,
              }}
              source={images.password}
            />
            <Text
              style={{
                // width: "80%",
                color: COLORS.black,
                ...FONTS.largeTitle,
                lineHeight: 45,
                marginBottom: 10,
                fontWeight: "700",
                marginVertical: 50,
              }}
            >
              Forgot Password!
            </Text>
            <Text
              style={{
                marginTop: 10,
                marginVertical: 2,
                color: "#3B3B3B",
                marginBottom: 10,
              }}
            >
              Enter your email, so that we can help you to recover your
              password.
            </Text>
          </View>

          <View
            style={{
              marginVertical: 170,
              height: 58,
              borderWidth: 1,
              padding: 15,
              borderColor: COLORS.gray3,
              borderRadius: 30,
              marginBottom: 10,
            }}
          >
            <TextInput
              style={{
                color: "#717171",
                fontSize: 17,
                lineHeight: 22,
                fontWeight: "400",
              }}
              placeholder="Enter Your Email"
              placeholderTextColor="#717171"
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.isvalidEmail ? (
              <Feather
                name="check-circle"
                style={{ color: COLORS.darkBlack, top: 4 }}
                size={20}
              />
            ) : null}
          </View>
          <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
            <CustomButtonBG
              buttonText="Submit"
              buttonContainerStyle={{
                paddingVertical: 15,
                borderRadius: 40,
                width: 200,
              }}
              onPress={() => navigation.navigate("Verification")}
              colors={[COLORS.darkBlack, COLORS.darkBlack]}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default ForgotPassword;
