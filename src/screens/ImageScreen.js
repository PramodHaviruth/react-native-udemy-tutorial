import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  const data = [
    { key: "1", title: "Apple", imgUrl: "beach.jpg", price: 89 },
    { key: "2", title: "Mango", imgUrl: "forest.jpg", price: 23 },
    { key: "3", title: "Banana", imgUrl: "mountain.jpg", price: 34 },
    { key: "4", title: "Orange", imgUrl: "mountain.jpg", price: 67 },
    { key: "5", title: "Clementine", imgUrl: "mountain.jpg", price: 24 },
    { key: "6", title: "Berry", imgUrl: "mountain.jpg", price: 97 },
    { key: "7", title: "StrawBerry", imgUrl: "mountain.jpg", price: 3 },
    { key: "8", title: "Peach", imgUrl: "mountain.jpg", price: 56 }
  ];
  return (
    <View>
      <Text style={{ fontSize: 45 }}>Images Screen</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <ImageDetails data={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
