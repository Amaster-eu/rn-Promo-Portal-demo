import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#dfdfdf",
        padding: 4,
    },
    text: {
        fontSize: 24,
    },
});

const ViewScreen = () => (
    <View style={styles.view}>
        <Text style={styles.text}>View is work!</Text>
    </View>
);
export default ViewScreen;