import React from "react";
import { View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        img={require("../../assets/forest.jpg")}
        score={9}
      />
      <ImageDetail
        title="Beach"
        img={require("../../assets/beach.jpg")}
        score={5}
      />
      <ImageDetail
        title="Mountain"
        img={require("../../assets/mountain.jpg")}
        score={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ImageScreen;
