import React, {Component} from 'react';
import {Appbar, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {Icon, withBadge} from 'react-native-elements'


@withBadge(5)
class MyDecoratedIcon extends React.Component {
    render() {
        return (
            <Icon color="white" type="ionicon" name="notifications"/>
        );
    }
}

export default function MenuAppBar() {

    const _jumpToMenu = () => {
        alert('Jump to menu');
    }

    const _account = () => {
        alert('Show account');
    }

    return (
        <Appbar.Header>
            <Appbar.Action icon="menu" onPress={_jumpToMenu}/>
            <Appbar.Content style={styles.appBarTitle} title={<Text style={styles.appBarTitle}>Kookclub</Text>}
                            subtitle={<Text style={styles.appBarTitle}>Inschrijven</Text>}/>
            <View style={styles.icons}>
                <MyDecoratedIcon/>
            </View>
            <Appbar.Action icon="account-circle" onPress={_account}/>


        </Appbar.Header>

    )
}


const styles = StyleSheet.create({
    appBarTitle: {
        alignItems: 'center',
        color: '#fffff',
    },
    white: {
        color: 'white'
    },
    icons: {
        marginRight: 30
    }


})