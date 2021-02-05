import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import MenuAppBar from './components/MenuAppBar/index'
import SelectMenuView from './components/SelectMenuView/index'


export default function App() {

    return (
        <PaperProvider theme={theme}>
            <MenuAppBar />
        <SelectMenuView/>
        </PaperProvider>
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
