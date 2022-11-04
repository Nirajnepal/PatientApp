import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import { globalStyles } from "../../styles/global";

export default function Home(){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Patient Details Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    titleText: {
        fontSize: 18,
    }
})

