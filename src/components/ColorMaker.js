import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorSelector = props => {
  return (
    <View>
      <Text style={{ color: props.color }}>{props.color}</Text>
      <Button title={"More" + props.color} onPress={props.moreColor} />

      <Button title={"Less" + props.color} onPress={props.lessColor} />
    </View>
  );
};

export default ColorSelector;
