import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ToggleButton from "../ToggleButton";


export default function SelectMenuView() {

    return (
        <View style={styles.containerView}>
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
        flex: 1,
        backgroundColor: '#e0e7d6',
        alignItems: 'center',
    },
});
