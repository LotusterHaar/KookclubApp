import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View, Switch, LogBox} from 'react-native';
import {Content, Card, CardItem, Text, Button, Icon, Left, Body, Right} from 'native-base';
import TriStateToggleSwitch from 'rn-tri-toggle-switch'

export default function MenuCard(props) {

    let choicesProp = [
        {
            choiceCode: 'No',
            choiceText: 'Ik eet niet mee'
        },
        {
            choiceCode: 'Yes',
            choiceText: 'Ik eet mee'
        },

    ]

    const [ choices, setChoices] = useState(choicesProp);
    const [ choice, setChoice] = useState();




    const determineStateStyle = (value) => {
        let style;
        switch(value){

            case false:
                style = styles.noColor;
                break
            case true:
                style = styles.yesColor;
                break;
            case 'Open':
                style = styles.openColor;
                break;
            default:
                style = styles.openColor;
                break;

        }
        return style;
    }

    const toggleSwitch = () =>{ (setChoice(!choice));};

    return (
        <Content>
            <Card style={styles.marginSides}>
                <CardItem style={styles.zeroPadding}>
                    <View style={[styles.dateText, determineStateStyle(choice)]}>
                        <Text style={[styles.textColor, styles.header]}>{props.day}</Text>
                        <Text style={styles.textColor}>04</Text>
                        <Text style={styles.textColor} note>feb</Text>
                    </View>
                    <Body>
                        <CardItem body>
                            <Body>
                                <CardItem bordered style={styles.textContainer}>
                                    <Text header style={styles.header}>Biefstuk met aardappeltjes</Text>
                                    <Text note>Met boontjes, worteltjes en champignonroomsaus
                                    </Text>
                                </CardItem>
                                <CardItem style={styles.switchContainer}>

                                    <TriStateToggleSwitch
                                        name={props.day}
                                        width = {200}
                                        selectedNoneBgColor={'#5b5258'}
                                        selectedRightBgColor="green"
                                        selectedLeftBgColor={'#b11414'}
                                        fontColor={'#fff'}
                                        fontSize={13}
                                        circleBgColor={'white'}
                                        choices={choicesProp}
                                        value={choice}
                                        onChange={toggleSwitch}/>
                                </CardItem>
                            </Body>
                        </CardItem>
                    </Body>
                </CardItem>

            </Card>
        </Content>
    );
}

const styles = StyleSheet.create({
    yesColor: {
        backgroundColor: 'green'
    },
    noColor: {
        backgroundColor: '#b11414'
    },
    openColor:{
        backgroundColor:  '#5b5258'
    },
    cardHeader: {
        color: "black",
        fontWeight: 'bold',
        flexWrap: 'wrap',
        width: '90%'
    },
    dateText: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 0,
        marginBottom: 0,
        height: '100%',
        borderBottomLeftRadius: 2,
        borderTopLeftRadius: 2,
        width: '29%'

    },
    flexEnd: {
        justifyContent: 'flex-end',
        marginRight: 20
    },
    textColor: {
        color: 'white',
        paddingLeft: 5,
        paddingRight: 5
    },
    textColorBlack: {
        color: 'black',
        justifyContent: 'flex-end'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 15,
        textDecorationLine: 'underline',
        flexWrap: 'wrap'
    },
    marginSides: {
        marginRight: 20,
        marginBottom: 5,
        marginTop: 5,
        marginLeft: 20,

    },
    zeroPadding: {
        flexDirection: 'row',
        paddingLeft: 0,
        paddingRight: 5,
        paddingTop: 0,
        paddingBottom: 0,
        justifyContent: 'space-between',
        marginTop: 0,
        marginBottom: 0,
        width: '100%',
    },
    textContainer: {
        flexDirection: 'column',
        paddingLeft: 0,
        paddingRight: 5,
        paddingTop: 0,
        justifyContent: 'space-between',
        marginTop: 0,
        marginBottom: 0,
        width: '100%',
    },
    switchContainer:{
        flexDirection: 'column',
        paddingLeft: 0,
        paddingRight: 5,
        paddingBottom: 0,
        justifyContent: 'space-between',
        marginTop: 0,
        marginBottom: 0,
        width: '100%',
    },

})
