import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ToggleButton from "../ToggleButton/index";
import MenuCard from "../MenuCard/index"

export default function SelectMenuView() {

    return (

        <View>
            <MenuCard/>
            <Text>Welkom bij de kookclub!</Text>
            <ToggleButton btnTitle="Maandag"/>
            <ToggleButton btnTitle="Dinsdag"/>
            <ToggleButton btnTitle="Woensdag"/>
            <ToggleButton btnTitle="Donderdag"/>
            <ToggleButton btnTitle="Vrijdag"/>
        </View>
    );
}


const styles = StyleSheet.create({
    containerView: {
        margin: 0,
        padding: 0,
    },
});
