import React, {useEffect} from "react";
import {Container, Text, Content} from 'native-base';
import {StyleSheet} from "react-native";;
import * as Font from "expo-font";
import { Ionicons } from '@expo/vector-icons';
import MenuCard from "./components/MenuCard";

export default function App() {
    useEffect(() => {
        (async () => await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        }))();
    }, [])
    return  (<Content>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
    </Content>)
}

