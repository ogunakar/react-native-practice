import React, { useReducer } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "change_increase":
      return { ...state, count: state.count + action.payload };
    case "change_decrease":
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};
const CounterScreen = () => {
  //state === {count:0};
  //action === {type: change_increase || change_decrease, payload: 1 ||-1
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="increase"
        onPress={() => dispatch({ type: "change_increase", payload: 1 })}
      />
      <Button
        title="decrease"
        onPress={() => dispatch({ type: "change_decrease", payload: -1 })}
      />
      <Text> Current Count: {state.count} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
