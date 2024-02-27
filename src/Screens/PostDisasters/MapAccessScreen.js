import * as React from "react";
import MapView, { Circle, Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Location from "expo-location";
import { CustomButtonBG } from "../../components";
import { COLORS } from "../../Constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MapAccessScreen = ({navigation}) => {
  const [pin, setPin] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });

  const [location, setLocation] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={{ ...styles.map }}
        initialRegion={{
          latitude: 6.91505,
          longitude: 79.97266,
          latitudeDelta: 0.0043,
          longitudeDelta: 0.0034,
        }}
        showsUserLocation={true}
      >
        <Marker
          coordinate={pin}
          title="Selected Location"
          draggable={true}
          onDragStart={(e) => {
            console.log("Drag Start", e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => {
            console.log("Drag End", e.nativeEvent.coordinate);

            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        />
        <Circle center={pin} radius={100} />
      </MapView>
      <CustomButtonBG
        buttonText="Countinue"
        buttonContainerStyle={{
          paddingVertical: 20,
          borderRadius: 15,
          width: 200,
          marginTop:30
        }}
        colors={[COLORS.darkBlack, COLORS.darkBlack]}
        onPress={() => {
          navigation.navigate("ImageUpload");
        }}
      />
    </View>
  );
};

export default MapAccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  map: {
    width: windowWidth,
    height: windowHeight - 300,
  },
});
