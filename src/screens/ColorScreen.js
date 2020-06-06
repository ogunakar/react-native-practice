import React, { useState } from "react";
import { StyleSheet, Button, View, FlatList } from "react-native";

const ColorScreen = () => {
  const [color, setColor] = useState([]);
  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          setColor([...color, RandomColor()]);
        }}
      />

      <FlatList
        data={color}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item,
              }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

const RandomColor = () => {
  const Red = Math.floor(Math.random() * 256);
  const Green = Math.floor(Math.random() * 256);
  const Blue = Math.floor(Math.random() * 256);
  return `rgb(${Red}, ${Green}, ${Blue})`;
};
export default ColorScreen;
