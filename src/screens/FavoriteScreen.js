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

const FavoriteScreen = () => (
    <View style={styles.view}>
        <Text style={styles.text}>Favorite is work!</Text>
    </View>
);
export default FavoriteScreen;