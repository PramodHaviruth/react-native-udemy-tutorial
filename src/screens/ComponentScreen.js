import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const ComponentScreen = () => {
  var data = {
    intro: "Getting started with React Native...!",
    name: "My Name is Pramod"
  };

  const [name, setName] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="words"
        autoCorrect={false}
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text style={styles.nameStyle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    margin: 15,
    borderWidth: 1,
    borderColor: "black"
  },
  nameStyle: {
    fontSize: 20,
    margin: 35,
    color: "blue"
  }
});

export default ComponentScreen;
