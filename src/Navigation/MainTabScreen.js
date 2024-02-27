import * as React from "react";
import { View, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { icons, COLORS } from "../Constants";

import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import DisastersScreen from "../Screens/DisastersScreen";
import SubscriptionsScreen from "../Screens/Subscriptions/SubscriptionsScreen";
import PostDisastersScreen from "../Screens/PostDisasters/PostDisastersScreen";
import SingleDisastersScreen from "../Screens/SingleDisastersScreen";
import SingleSubscriptionScreen from "../Screens/Subscriptions/SingleSubscriptionScreen";
import AddFeedback from "../Screens/Subscriptions/AddFeedbackScreen";
import SubscribePlace from "../Screens/Subscriptions/SubscribePlaceScreen";
import ShowFeedbacks from "../Screens/ShowFeedbacks";
import ImageUploadScreen from "../Screens/PostDisasters/ImageUploadScreen";
import MapAccessScreen from "../Screens/PostDisasters/MapAccessScreen";
import DisasterDetailsScreen from "../Screens/PostDisasters/DisasterDetailsScreen";
import ConfirmationScreen from "../Screens/PostDisasters/ConfirmationScreen";

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: COLORS.darkBlack,
      }}
    >
      <Tab.Screen
        name=" "
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={focused ? icons.home2 : icons.home}
                resizeMode="contain"
                style={{
                  width: 25,
                  // top: Platform.OS === "ios" ? 10 : 0,
                  height: 25,
                  tintColor: focused ? COLORS.darkBlack : COLORS.gray,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="    "
        component={DisastersStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={focused ? icons.cloudy2 : icons.cloudy}
                resizeMode="contain"
                style={{
                  width: 30,
                  // top: Platform.OS === "ios" ? 10 : 0,
                  height: 30,
                  tintColor: focused ? COLORS.darkBlack : COLORS.gray,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="        "
        component={PostDisastersStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={icons.more}
                resizeMode="contain"
                style={{
                  width: 25,
                  // top: Platform.OS === "ios" ? 10 : 0,
                  height: 25,
                  tintColor: focused ? COLORS.darkBlack : COLORS.gray,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="   "
        component={SubscriptionsStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={focused ? icons.notification2 : icons.notification}
                resizeMode="contain"
                style={{
                  width: 25,
                  // top: Platform.OS === "ios" ? 10 : 0,
                  height: 25,
                  tintColor: focused ? COLORS.darkBlack : COLORS.gray,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="  "
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={focused ? icons.user2 : icons.user}
                resizeMode="contain"
                style={{
                  width: 25,
                  // top: Platform.OS === "ios" ? 10 : 0,
                  height: 25,
                  tintColor: focused ? COLORS.darkBlack : COLORS.gray,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.white,
      },
      headerTitleStyle: {
        title: true,
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Dark Sky",
      }}
    />
  </HomeStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <SearchStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.white,
      },
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <SearchStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: "My Account",
      }}
    />
  </SearchStack.Navigator>
);


const DisastersStackScreen = ({ navigation }) => (
  <SearchStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.white,
      },
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <SearchStack.Screen
      name="Disasters"
      component={DisastersScreen}
      options={{
        title: "Disasters",
      }}
    />
    <HomeStack.Screen
      name="SingleDisastersScreen"
      component={SingleDisastersScreen}
      options={({ route }) => ({
        title: route.params.DisasterName,
        headerBackTitleVisible: false,
      })}
    />
  </SearchStack.Navigator>
);

const SubscriptionsStackScreen = ({ navigation }) => (
  <SearchStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.white,
      },
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <SearchStack.Screen
      name="Subscriptions"
      component={SubscriptionsScreen}
      options={{
        title: "Subscriptions",
        headerBackTitleVisible: false,
      }}
    />
    <SearchStack.Screen
      name="SingleSubscriptionScreen"
      component={SingleSubscriptionScreen}
      options={{
        title: "Subscription",
        headerBackTitleVisible: false,
      }}
    />
    <SearchStack.Screen
      name="AddFeedback"
      component={AddFeedback}
      options={{
        title: "Feedback",
        headerBackTitleVisible: false,
      }}
    />
    <SearchStack.Screen
      name="SubscribePlace"
      component={SubscribePlace}
      options={{
        title: "Places",
        headerBackTitleVisible: false,
      }}
    />
    <SearchStack.Screen
      name="ShowFeedbacks"
      component={ShowFeedbacks}
      options={{
        title: "All Feedbacks",
        headerBackTitleVisible: false,
      }}
    />
  </SearchStack.Navigator>
);

const PostDisastersStackScreen = ({ navigation }) => (
  <SearchStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.white,
      },
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <SearchStack.Screen
      name="New Disasters"
      component={PostDisastersScreen}
      options={{
        title: "New Disasters",
      }}
    />
    <SearchStack.Screen
      name="PickupTheLocation"
      component={MapAccessScreen}
      options={{
        title: "Pickup the Location",
        headerBackTitleVisible: false,
      }}
    />
    <SearchStack.Screen
      name="ImageUpload"
      component={ImageUploadScreen}
      options={{
        title: "Image Upload",
        headerBackTitleVisible: false,
      }}
    />
    <SearchStack.Screen
      name="DisasterDetails"
      component={DisasterDetailsScreen}
      options={({ route }) => ({
        title: route.params.DisasterName,
        headerBackTitleVisible: false,
      })}
    />
    <SearchStack.Screen
      name="ConfirmationScreen"
      component={ConfirmationScreen}
      options={{
        title: "Confirmation",
        headerBackTitleVisible: false,
      }}
    />
  </SearchStack.Navigator>
);
