import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        style={styles.buttonDesign}
        title="Go To Components"
        onPress={() => {
          navigation.navigate("Component");
        }}
      />

      <Button
        style={styles.buttonDesign}
        title="Go To Lists"
        onPress={() => {
          navigation.navigate("List");
        }}
      />

      <Button
        style={styles.buttonDesign}
        title="Go To Image"
        onPress={() => {
          navigation.navigate("Image");
        }}
      />

      <Button
        style={styles.buttonDesign}
        title="Go To Counter"
        onPress={() => {
          navigation.navigate("Counter");
        }}
      />
      <Button
        style={styles.buttonDesign}
        title="Go To Color"
        onPress={() => {
          navigation.navigate("Color");
        }}
      />
      <Button
        style={styles.buttonDesign}
        title="Go To Color Selector"
        onPress={() => {
          navigation.navigate("ColorSelector");
        }}
      />

      <Button
        style={styles.buttonDesign}
        title="Go To Box Screen"
        onPress={() => {
          navigation.navigate("BoxScreen");
        }}
      />
      {/* <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("List");
          console.log("list Pressed");
        }}
      >
        <Text>Go To List</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttonDesign: {
    marginVertical: 30
  }
});

export default HomeScreen;
