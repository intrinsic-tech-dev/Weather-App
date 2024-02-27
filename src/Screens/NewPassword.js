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

const NewPassword = ({ navigation }) => {
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

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={{padding: 10, flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar barStyle="light-content" />
      <View style={{ height: SIZES.height > 700 ? "100%" : "95%", margin: 10 }}>
        <KeyboardAwareScrollView style={{ paddingTop: "35%" }}>
          <View style={{ flex: 1}}>
            <Text
              style={{
                // width: "80%",
                color: COLORS.black,
                ...FONTS.largeTitle,
                lineHeight: 45,
                marginBottom: 15,
                fontWeight: "700",
              }}
            >
              Type your new password!🤙
            </Text>
          </View>

          {/* ============================= EMAIL ADDRESS ============================= */}
          {/* <Text style={{ marginTop: 10, marginBottom: 10 }}>
            Enter your Username
          </Text> */}
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
            Enter your Password
          </Text> */}
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
              style={{ fontSize: 16, color: COLORS.gray3 }}
              placeholder="Confirm Password"
              autoCapitalize="none"
              placeholderTextColor="#717171"
              secureTextEntry={data.secureTextEntry1 ? true : false}
              onChangeText={(val) => textInputChangepassword(val)}
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
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
          </View>
          <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
            <CustomButtonBG
              buttonText="Submit"
              buttonContainerStyle={{
                paddingVertical: 18,
                borderRadius: 40,
                width: 200,
              }}
              onPress={() => navigation.navigate("SignInScreen")}
              colors={[COLORS.darkBlack, COLORS.darkBlack]}
            />
            
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default NewPassword;
