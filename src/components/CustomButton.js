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
      <TouchableOpacity 
      onPress={onPress}
      style={{ 
        backgroundColor: COLORS.white,
        borderWidth:1,
        borderColor: COLORS.darkBlack,
        marginBottom:21,
        marginTop:21,
        paddingVertical: 18,
        borderRadius: 6
      }}>
          <Text
            style={{ textAlign: "center", color: COLORS.darkBlack, fontSize:17, fontWeight: "700", lineHeight: 22 }}
          >
            {buttonText}
          </Text>
    </TouchableOpacity>
    );
};

export default CustomButton;
