import React, {useEffect, useState} from "react";
import {Content, Container, Text} from 'native-base';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import {Ionicons} from '@expo/vector-icons';
import MenuCard from "./components/MenuCard";
import AppBar from "./components/AppBar"
import TimeHeader from "./components/TimeHeader";
import {StyleSheet, LogBox} from "react-native";
import moment from "moment";


export default function App() {

    const [isReady, setReady] = useState(false);
    const [checkedAll, setCheckedAll] = useState();

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

    useEffect(() => {
    }, [checkedAll])





    const onCheckBoxPress = (checked) =>{
        setCheckedAll(checked)
       console.log('checkedALl', checkedAll)
    }

    if (!isReady) {
        return (
            <AppLoading/>
        )
    } else {
        return (
            <Container style={styles.mainBackground}>
                <AppBar/>
                <TimeHeader defaultChecked={checkedAll} onCheckBoxPressCallBack={onCheckBoxPress}/>
                <Content>
                    <MenuCard day="Maandag" selectAll={checkedAll}/>
                    <MenuCard day="Dinsdag" selectAll={checkedAll}/>
                    <MenuCard day="Woensdag" selectAll={checkedAll}/>
                    <MenuCard day="Woensdag" selectAll={checkedAll}/>
                    <MenuCard day="Donderdag" selectAll={checkedAll}/>
                    <MenuCard day="Vrijdag" selectAll={checkedAll}/>
                </Content>
            </Container>)
    }
}

const styles = StyleSheet.create({
        mainBackground: {
            //backgroundColor: '#e9e1f8',
            backgroundColor: '#c6d4c6'
        }
    }
)