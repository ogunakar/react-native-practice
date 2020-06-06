import React from "react";
import {StyleSheet, Text, View} from "react-native";

const ComponentsScreen = () => {
    const yourName= "Bruh";

    return (
        <View>
            <Text style={styles.textStyle}>Getting Started with react native!</Text>
            <Text style={styles.subHeaderStyle}>My name is {yourName}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    },
});

export default ComponentsScreen;
