import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {View, StyleSheet, Text} from 'react-native';
import Button from './components/ToggleButton'
import reducer from './reducers/reducers'
const store = createStore(reducer);

export default class App extends Component {



    render() {
        return (
            <Provider store={store}>
            <View style={styles}>
                <Text>Welkom bij de kookclub!</Text>
                <Button btnTitle="Maandag" />
                <Button btnTitle="Dinsdag" />
                <Button btnTitle="Woensdag" />
                <Button btnTitle="Donderdag"/>
                <Button btnTitle="Vrijdag" />
            </View>
          </Provider>
        );
    }

}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
