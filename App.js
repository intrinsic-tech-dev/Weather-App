import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainTabScreen from "./src/Navigation/MainTabScreen";
import { AuthContext } from "./src/components/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import LoadingScreen from "./src/Screens/LoadingScreen";
import RootStackScreen from "./src/Screens/RootStackScreen";

function App() {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (userName, password) => {
        let userToken;
        userToken = null;
        let username = "Admin"
        let response = "Admin"
        dispatch({
          type: "LOGIN",
          id: username,
          token: response,
        });

        // useEffect(() => {
        //   dispatch({
        //     type: "LOGIN",
        //     id: userName,
        //     token: userToken,
        //   });
        // });
      },
      signOut: async () => {
        try {
          await AsyncStorage.clear();
        } catch (e) {
          console.log(e);
        }
        dispatch({
          type: "LOGOUT",
        });
      },
      signUp: () => {
        setUserToken("qwertyuiopasdfghjkl");
        setIsLoading(false);
      },
    }),
    []
  );

  React.useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
      }
      dispatch({
        type: "LOGIN",
        token: userToken,
      });
    }, 1500);
  }, []);

  const SetTimerFunction = () => {
    setTimeout(async () => {
      console.log(
        "================================signOut================================"
      );
      try {
        await AsyncStorage.clear();
      } catch (e) {
        console.log(e);
      }
      dispatch({
        type: "LOGOUT",
      });
    }, 32400000);
  };

  if (loginState.isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <MainTabScreen />
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
