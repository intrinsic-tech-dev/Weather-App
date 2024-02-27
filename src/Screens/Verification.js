import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import { COLORS, SIZES, FONTS, images } from "../Constants";
import { CustomButtonBG } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Verification = ({ navigation }) => {

  return (
    <View style={{ padding: 10, flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar barStyle="light-content" />
      <View style={{ height: SIZES.height > 700 ? "100%" : "95%", margin: 10 }}>
        <KeyboardAwareScrollView style={{ paddingTop: "20%" }}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.largeTitle,
                lineHeight: 45,
                marginBottom: 10,
                fontWeight: "700",
                marginVertical: 50,
              }}
            >
              OTP Verification!
            </Text>
            <Text
              style={{
                marginTop: 10,
                marginVertical: 2,
                color: "#3B3B3B",
                marginBottom: 40,
              }}
            >
              Enter the code that recieve via your Email, so that we can help
              you to set your new password.
            </Text>
          </View>

          {/* ============================= EMAIL ADDRESS ============================= */}
          {/* <Text style={{ marginTop: 10, marginBottom: 10 }}>
            Enter your Username
          </Text> */}
          {/* <View
            style={{
              marginVertical:10,
              height: 58,
              borderWidth: 1,
              padding: 15,
              borderColor: COLORS.gray3,
              borderRadius: 30,
              marginBottom: 10,
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
          </View> */}
          <View style={styles.otpContainer}>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                // ref={firstInput}
                // onChangeText={(text) => {
                //   setOtp({ ...otp, 1: text });
                //   text && secondInput.current.focus();
                // }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                // ref={secondInput}
                // onChangeText={(text) => {
                //   setOtp({ ...otp, 2: text });
                //   text
                //     ? thirdInput.current.focus()
                //     : firstInput.current.focus();
                // }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                // ref={thirdInput}
                // onChangeText={(text) => {
                //   setOtp({ ...otp, 3: text });
                //   text
                //     ? fourthInput.current.focus()
                //     : secondInput.current.focus();
                // }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                // ref={fourthInput}
                // onChangeText={(text) => {
                //   setOtp({ ...otp, 4: text });
                //   !text && thirdInput.current.focus();
                // }}
              />
            </View>
          </View>

          {/* ============================= PASSWORD ============================= */}
          {/* <Text style={{ marginTop: 10, marginBottom: 10 }}>
            Enter your Password
          </Text> */}

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {/* <TouchableOpacity
            onPress={() => navigation.navigate("SignUpScreen")}>
              <Text style={{ margin: 10, fontWeight: "600" }}>
                Forgot Password
              </Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
            >
              <Text style={{ margin: 10, fontWeight: "600" }}></Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
            <CustomButtonBG
              buttonText="Submit"
              buttonContainerStyle={{
                paddingVertical: 15,
                borderRadius: 40,
                width: 200,
              }}
              onPress={() => navigation.navigate("NewPassword")}
              colors={[COLORS.darkBlack, COLORS.darkBlack]}
            />
            {/* <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
            ><Text style={{ margin: 50}}>Don't have an account?</Text>
            <Text style={{ margin: 10, fontWeight: "500" , color:"blue" , paddingLeft: 80}}>Sign Up</Text>
            </TouchableOpacity> */}
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    lineHeight: 20 * 1.4,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    lineHeight: 20 * 1.4,
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  content: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  phoneNumberText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
  },
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  otpBox: {
    borderRadius: 5,
    borderWidth: 0.5,
  },
  otpText: {
    fontSize: 25,
    padding: 0,
    textAlign: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  signinButton: {
    borderRadius: 8,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
  },
});

export default Verification;
