import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';



export default class App extends Component {
    render() {
        return (
            <Text style={styles}>Hello, world!</Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
