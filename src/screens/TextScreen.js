import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>Please Enter Your Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      {name.length > 0 && <Text>Welcome to this humble app, dear {name}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
