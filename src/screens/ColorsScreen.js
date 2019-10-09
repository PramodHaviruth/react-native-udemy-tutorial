import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Text style={styles.introStyle}>Color Screen</Text>
      <Button
        title="Add Color to Screen"
        onPress={() => {
          setColors([...colors, randomRGB()]);
          console.log(colors);
        }}
      />

      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{ height: 100, width: 100, backgroundColor: item }}
            ></View>
          );
        }}
      />
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({
  introStyle: {
    fontSize: 45,
    color: "red"
  },
  nameStyle: {
    fontSize: 20,
    color: "blue"
  }
});

export default ColorScreen;
