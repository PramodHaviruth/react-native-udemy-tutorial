import React, { useReducer } from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textStyle1}></View>
      <View style={styles.textStyle2}></View>
      <View style={styles.textStyle3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginVertical: 10,
    borderWidth: 3,
    borderColor: "red",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textStyle1: {
    paddingHorizontal: 5,
    borderWidth: 2,
    borderColor: "green",
    backgroundColor: "red",
    width: 100,
    height: 100,
    left: 0
  },
  textStyle2: {
    paddingHorizontal: 5,
    borderWidth: 2,
    borderColor: "blue",
    backgroundColor: "green",
    width: 100,
    height: 100,
    top: 100
  },
  textStyle3: {
    paddingHorizontal: 5,
    borderWidth: 2,
    borderColor: "red",
    backgroundColor: "blue",
    width: 100,
    height: 100,
    right: 0
  }
});

export default BoxScreen;
