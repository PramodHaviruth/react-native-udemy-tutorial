import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const Fruits = [
    { name: "Apple", key: "1", age: 32 },
    { name: "Banana", key: "2", age: 30 },
    { name: "Mango", key: "3", age: 28 },
    { name: "Berry", key: "4", age: 40 },
    { name: "Grape", key: "5", age: 27 },
    { name: "Pineapple", key: "6", age: 50 },
    { name: "Stawberry", key: "7", age: 26 },
    { name: "Orange", key: "8", age: 10 },
    { name: "Clementine", key: "9", age: 25 }
  ];

  return (
    <FlatList
      data={Fruits}
      renderItem={({ item }) => {
        return (
          <Text style={{ marginVertical: 50, marginHorizontal: 30 }}>
            {item.name} -> {item.age}
          </Text>
        );
      }}
    />
  );
};

export default ListScreen;
