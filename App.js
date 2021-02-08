import React, {useEffect, useState} from "react";
import {Content} from 'native-base';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import {Ionicons} from '@expo/vector-icons';
import MenuCard from "./components/MenuCard";
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
        return (<Content style={styles.mainBackground}>
            <MenuCard/>
            <MenuCard/>
            <MenuCard/>
            <MenuCard/>
            <MenuCard/>
        </Content>)
    }
}

const styles = StyleSheet.create({
        mainBackground: {
            backgroundColor: '#F5E7F0'
        }
    }
)