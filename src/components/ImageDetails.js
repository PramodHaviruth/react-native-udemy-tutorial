import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const ImageDetails = props => {
  return (
    <View>
      <Image
        style={{ width: "100%", height: 200, resizeMode: "stretch" }}
        source={{
          uri:
            "https://4.bp.blogspot.com/-krdeTqQLML8/Wyf2oV7eedI/AAAAAAAABpI/OZ759swV7L8wWtt2pwBXIgp6aPz33r01gCLcBGAs/s400/fist%2Bapp.jpg"
        }}
      />
      <Text>
        {props.data.title} -> price ${props.data.price}
      </Text>
    </View>
  );
};

export default ImageDetails;
