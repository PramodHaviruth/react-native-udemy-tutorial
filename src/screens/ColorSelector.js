import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import ColorMaker from "../components/ColorMaker";

const reducer = (state, action) => {
  switch (action.ChangeColor) {
    case "red":
      state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case "green":
      state.green + action.amount > 255 || state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case "blue":
      state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const ColorSelector = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <Text style={styles.introStyle}>Color Selector</Text>
      <ColorMaker
        color="red"
        moreColor={() => {
          dispatch({ ChangeColor: "red", amount: 10 });
        }}
        lessColor={() => {
          dispatch({ ChangeColor: "red", amount: -10 });
        }}
      />
      <ColorMaker
        color="green"
        moreColor={() => {
          dispatch({ ChangeColor: "green", amount: 10 });
        }}
        lessColor={() => {
          dispatch({ ChangeColor: "green", amount: -10 });
        }}
      />
      <ColorMaker
        color="blue"
        moreColor={() => {
          dispatch({ ChangeColor: "blue", amount: 10 });
        }}
        lessColor={() => {
          dispatch({ ChangeColor: "blue", amount: -10 });
        }}
      />

      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`
        }}
      ></View>
      <Text>{`rgb(${state.red},${state.green},${state.blue})`}</Text>
    </View>
  );
};

const genRGB = color => {
  const [red, green, blue] = color;

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

export default ColorSelector;
