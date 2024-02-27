import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import { COLORS, SIZES, FONTS } from "../Constants";
import { CustomButtonBG } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthContext } from "../components/context";
import Feather from "react-native-vector-icons/Feather";

const SignInScreen = ({ navigation }) => {
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

  const handlePasswordChange = (val) => {
    if (val.length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const loginHandle = (email, password) => {
    signIn(email, password);
  };

  return (
    <KeyboardAwareScrollView
      style={{ padding: 10, flex: 1, backgroundColor: COLORS.white }}
    >
      <StatusBar barStyle="light-content" />
      <View style={{ height: SIZES.height > 700 ? "100%" : "95%", margin: 10 }}>
        <View style={{ paddingTop: "20%" }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.largeTitle,
                lineHeight: 45,
                marginBottom: 50,
                fontWeight: "700",
              }}
            >
              Welcome back! Glad to see you, Again!
            </Text>
          </View>

          <View
            style={{
              height: 58,
              borderWidth: 1,
              padding: 12,
              borderColor: COLORS.gray3,
              borderRadius: 30,
              marginBottom: 15,
              flexDirection: "row",
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

          <View
            style={{
              height: 58,
              borderWidth: 1,
              padding: 12,
              borderColor: COLORS.gray3,
              borderRadius: 30,
              marginBottom: 15,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              style={{
                color: "#717171",
                fontSize: 17,
                lineHeight: 22,
                fontWeight: "400",
              }}
              placeholder="Password"
              placeholderTextColor="#717171"
              autoCapitalize="none"
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={updateSecureTextEntry}
                style={{ top: 4 }}
              >
                {data.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </TouchableOpacity>
              {data.isValidPassword ? (
                <Feather
                  name="check-circle"
                  style={{
                    color: COLORS.darkBlack,
                    marginLeft: 15,
                    top: 4,
                  }}
                  size={20}
                />
              ) : null}
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text style={{ marginTop: 10,marginLeft:5,marginBottom:20, fontWeight: "600" }}>
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
            <CustomButtonBG
              buttonText="LOGIN"
              buttonContainerStyle={{
                paddingVertical: 18,
                borderRadius: 40,
                width: 200,
              }}
              onPress={() => {
                loginHandle(data.email, data.password);
              }}
              colors={[COLORS.darkBlack, COLORS.darkBlack]}
            />
            <Text style={{ marginVertical: 15 }}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
            >
              <Text
                style={{
                  margin: 1,
                  fontWeight: "500",
                  color: "blue",
                  paddingLeft: 0,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignInScreen;
