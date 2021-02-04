import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {View, StyleSheet, Text} from 'react-native';
import ToggleButton from './components/ToggleButton'
import reducer from './reducers/reducers'
import SelectMenuView from './components/SelectMenuView/index'

const store = createStore(reducer);

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
            <SelectMenuView />
          </Provider>
        );
    }

}


