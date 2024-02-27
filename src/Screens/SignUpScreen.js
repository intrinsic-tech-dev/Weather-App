import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import { COLORS, SIZES, FONTS } from "../Constants";
import { CustomButtonBG } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthContext } from "../components/context";
import axios from "axios";
import Feather from "react-native-vector-icons/Feather";

const SignUpScreen = ({ navigation }) => {

  const [data, setData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidEmail: false,
    isValidPassword: false,
    isValidConfirmPassword: false,
    secureTextEntry1: false,
    secureTextEntry2: true,
  });

  const textInputChangepassword = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry1 = () => {
    setData({
      ...data,
      secureTextEntry1: !data.secureTextEntry1,
    });
  };

  return (
    <KeyboardAwareScrollView style={{ padding: 10, flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar barStyle="light-content" />
      <View style={{ height: SIZES.height > 700 ? "100%" : "95%", margin: 10 }}>
        <View style={{ paddingTop: "20%" }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.largeTitle,
                lineHeight: 45,
                marginBottom: 20,
                fontWeight: "600",
              }}
            >
              Hello! Register to get Started
            </Text>
          </View>

          {/* ============================= NAME ============================= */}
          {/* <Text style={{ marginTop: 10, marginBottom: 10 }}>
            Enter your Name
          </Text> */}
          <View
            style={{
              height: 50,
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
              placeholder="Username"
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

          {/* ============================= AGE ============================= */}
          {/* <Text style={{ marginTop: 10, marginBottom: 10 }}>
            Enter your Age
          </Text> */}
          <View
            style={{
              height: 50,
              borderWidth: 1,
              padding: 10,
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
              placeholder="Email"
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

          {/* ============================= Phone Number ============================= */}
          {/* <Text style={{ marginTop: 10, marginBottom: 10 }}>
            Enter your Phone Number
          </Text> */}
          <View
            style={{
              height: 50,
              borderWidth: 1,
              padding: 10,
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

          {/* ============================= PASSWORD ============================= */}
          {/* <Text style={{ marginTop: 10, marginBottom: 10 }}>
            Enter Your Password
          </Text> */}
          <View
            style={{
              height: 50,
              borderWidth: 1,
              padding: 10,
              borderColor: COLORS.gray3,
              borderRadius: 30,
              marginBottom: 15,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              style={{ fontSize: 16, color: COLORS.gray3 }}
              placeholder="Confirm Password"
              autoCapitalize="none"
              placeholderTextColor="#717171"
              secureTextEntry={data.secureTextEntry1 ? true : false}
              onChangeText={(val) => textInputChangepassword(val)}
            />
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={updateSecureTextEntry1}
                style={{ top: 4 }}
              >
                {data.secureTextEntry1 ? (
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
          {/* <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity>
              <Text style={{ margin: 10, fontWeight: "600" }}
              onPress={() => navigation.navigate("SignInScreen")}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View> */}
          <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
            <CustomButtonBG
              buttonText="Sign Up"
              buttonContainerStyle={{
                paddingVertical: 18,
                borderRadius: 40,
                width: 200,
              }}
              colors={[COLORS.darkBlack, COLORS.darkBlack]}
            />
            <Text style={{marginVertical: 15 }}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignInScreen")}
            >
              <Text
                style={{
                  margin: 1,
                  fontWeight: "500",
                  color: "blue",
                  paddingLeft: 1,
                }}
              >
                Login now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  paragraph: {
    marginTop: -5,
    marginBottom: -5,
    color: COLORS.gray2,
  },
});
