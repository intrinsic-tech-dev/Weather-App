import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS } from "../Constants";

const CustomButton = ({
  buttonText,
  buttonContainerStyle,
  colors,
  onPress,
  disabled,
}) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
          style={{ ...buttonContainerStyle }}
        >
          <Text
            style={{ textAlign: "center", color: COLORS.white, fontSize:17, fontWeight: "700", lineHeight: 22 }}
          >
            {buttonText}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
};

export default CustomButton;
