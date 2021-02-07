import React, {useEffect} from "react";
import {Container, Text, Content} from 'native-base';
import {StyleSheet} from "react-native";;
import * as Font from "expo-font";
import MenuCard from "./components/MenuCard";

export default function App() {
    useEffect(() => {
        const loadFont = async () =>
            await Font.loadAsync({
                Roboto: require("native-base/Fonts/Roboto.ttf"),
                Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            });
        loadFont();
    }, []);
    return (<Content>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
    </Content>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});