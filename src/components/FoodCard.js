import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  icons,
  images,
  theme,
  COLORS,
  SIZES,
  FONTS,
  dummyData,
} from "../Constants";

const FoodCard = ({ containerStyle, categoryItem, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginTop: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray2,
      }}
      onPress={onPress}
    >
      {/* Image */}
      <Image
        source={categoryItem.image}
        resizeMode="cover"
        style={{ width: 100, height: 100, borderRadius: SIZES.radius }}
      />

      {/* Details */}
      <View style={{ width: "65%", paddingHorizontal: 20 }}>
        <Text style={{ flex: 1, ...FONTS.h2 }}>{categoryItem.name}</Text>

        {/* Serving */}
        <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
          {categoryItem.duration} | {categoryItem.serving} Serving
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;
