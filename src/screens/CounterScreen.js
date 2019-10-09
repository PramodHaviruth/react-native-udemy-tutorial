import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { ...state, counter: state.counter + action.payLoad };
    case "dec":
      return { ...state, counter: state.counter - action.payLoad };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Text style={styles.introStyle}>Counter Screen</Text>
      <Button
        title="Up"
        onPress={() => {
          // setCounter(counter + 1);
          dispatch({ type: "inc", payLoad: 1 });
        }}
      />
      <Button
        title="Down"
        onPress={() => {
          // setCounter(counter - 1);
          dispatch({ type: "dec", payLoad: 1 });
        }}
      />
      <Text>Counter Val {state.counter}</Text>
    </View>
  );
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

export default CounterScreen;
