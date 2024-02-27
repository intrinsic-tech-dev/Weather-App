import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import ForgotPassword from "./ForgotPassword";
import Verification from "./Verification";
import NewPassword from "./NewPassword";


const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={{ headerShown: true }}
    />
    <RootStack.Screen
      name="SignInScreen"
      component={SignInScreen}
      options={{ headerShown: true }}
    />
    <RootStack.Screen
      name="SignUpScreen"
      component={SignUpScreen}
      options={{ headerShown: true }}
    />
    <RootStack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{ headerShown: true }}
    />
    <RootStack.Screen
      name="Verification"
      component={Verification}
      options={{ headerShown: true }}
    />
    <RootStack.Screen
      name="NewPassword"
      component={NewPassword}
      options={{ headerShown: true }}
    />
    

  </RootStack.Navigator>
);
export default RootStackScreen;
