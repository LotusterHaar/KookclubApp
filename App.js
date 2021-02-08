import React, {useEffect, useState} from "react";
import {Content, Container, Text} from 'native-base';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import {Ionicons} from '@expo/vector-icons';
import MenuCard from "./components/MenuCard";
import AppBar from "./components/AppBar"
import {StyleSheet} from "react-native";

export default function App() {

    const [isReady, setReady] = useState(false);

    useEffect(() => {
        (async () => {
            await Font.loadAsync({
                Roboto: require('native-base/Fonts/Roboto.ttf'),
                Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
                ...Ionicons.font,
            });
            setReady(true);
        })();
    }, [])

    if (!isReady) {
        return (
            <AppLoading/>
        )
    } else {
        return (<Container style={styles.mainBackground}>
            <AppBar/>


            <Content>
                <MenuCard yesOrNo = {false}/>
                <MenuCard yesOrNo = {true}/>
                <MenuCard yesOrNo = {true}/>
                <MenuCard yesOrNo = {false}/>
                <MenuCard yesOrNo = {true}/>
            </Content>
        </Container>)
    }
}

const styles = StyleSheet.create({
        mainBackground: {
            backgroundColor: '#f3ecf0'
        }
    }
)