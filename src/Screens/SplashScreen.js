import React, { useState, useEffect } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { images } from "../Constants";

const { width, height } = Dimensions.get("window");

const onBoardings = [
  {
    title: "Post the Climate change as Photo",
    img: images.simple,
  },
  {
    title: "Climate changes are available as a notification.",
    img: images.notification,
  },
  {
    title: "The user interface of this app is very simple.",
    img: images.post
  },
];

const SplashScreen = ({ navigation }) => {
  const [completed, setCompleted] = React.useState(true);

  const scrollX = new Animated.Value(0);

  React.useEffect(() => {
    scrollX.addListener(({ value }) => {
      if (Math.floor(value / width) === onBoardings.length - 1) {
        setCompleted(true);
      }
    });

    return () => scrollX.removeListener();
  }, []);

  const renderContent = () => {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {onBoardings.map((item, index) => (
          <View
            key={`img-${index}`}
            style={styles.imageAndTextContainer}
          >
            <View
              style={{
                flex: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={item.img}
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: "50%",
                }}
              />
            </View>
            <View
              style={{
                position: "absolute",
                bottom: "10%",
                left: 40,
                right: 40,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  color: "#777777",
                  textAlign: "center",
                }}
              >
                {item.title}
              </Text>

              <Text
                style={{
                  // ...FONTS.body3,
                  textAlign: "center",
                  marginTop: 30,
                  color: "#777777",
                }}
              >
                {item.description}
              </Text>
            </View>
            {/* Button */}
            {completed ? (
              <TouchableOpacity
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  width: 150,
                  height: 60,
                  paddingLeft: 20,
                  justifyContent: "center",
                  borderTopLeftRadius: 30,
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 0,
                  borderTopRightRadius: 0,
                  backgroundColor: "#000",
                }}
                onPress={() => navigation.navigate("SignInScreen")}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "700",
                    fontSize: 18,
                  }}
                >
                  Let's Go
                </Text>
              </TouchableOpacity>
            ) : (
              <Text></Text>
            )}
          </View>
        ))}
      </Animated.ScrollView>
    );
  };

  const renderDots = () => {
    const dotPosition = Animated.divide(scrollX, width);

    return (
      <View style={styles.dotsContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [8, 17, 8],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[styles.dot, { width: dotSize, height: dotSize }]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.dotsRootContainer}>{renderDots()}</View>
    </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  imageAndTextContainer: {
    width: width,
  },
  dotsRootContainer: {
    position: "absolute",
    bottom: height > 700 ? "20%" : "16%",
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24 / 2,
    marginBottom: 24 * 3,
    height: 24,
  },
  dot: {
    borderRadius: 12,
    backgroundColor: "#000",
    marginHorizontal: 12 / 2,
  },
});