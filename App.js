import React, {useEffect} from "react";
import {Container, Text} from 'native-base';
import {StyleSheet} from "react-native";;
import * as Font from "expo-font";

export default function App() {
    useEffect(() => {
        const loadFont = async () =>
            await Font.loadAsync({
                Roboto: require("native-base/Fonts/Roboto.ttf"),
                Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            });
        loadFont();
    }, []);
    return (<Container>
        <Text>Open up App.js to start working on your app!</Text>
    </Container>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});