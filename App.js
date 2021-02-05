import React from 'react';
import {Provider} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import MenuAppBar from './components/MenuAppBar/index'
import SelectMenuView from './components/SelectMenuView/index'


export default function App() {

    return (
        <SafeAreaProvider>
            <MenuAppBar/>
            <SelectMenuView/>
        </SafeAreaProvider>
    );

}

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'green',
        accent: 'tomato',
    },
};
