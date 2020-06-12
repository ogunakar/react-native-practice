import React from "react";
import { StyleSheet, View} from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parent}>
      <View style={styles.view1} />
      <View style={styles.view2Parent}>
        <View style={styles.view2} />
      </View>
      <View style={styles.view3} />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  view1: {
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "red",
    height: 50,
    width: 50,
  },
  view2: {
    borderWidth: 1,
    borderColor: "blue",
    backgroundColor: "blue",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  view2Parent: {
    height: 100,
    width: 100,
  },
  view3: {
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "green",
    height: 50,
    width: 50,
  },
});

export default BoxScreen;
