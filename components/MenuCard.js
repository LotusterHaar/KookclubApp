import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View, Switch, LogBox} from 'react-native';
import {Content, Card, CardItem, Text, Button, Icon, Left, Body, Right} from 'native-base';
import TriStateToggleSwitch from "./TriStateToggleSwitch/TriStateToggleSwitch";


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

    const [choice, setChoice] = useState();
    const [choiceStyle, setChoiceStyle] = useState();
    const [initialValue, setInitialValue] = useState();


    const determineStateStyleByProps = () => {
        if (props.selectAll === undefined) {
            setInitialValue(null)
            setChoiceStyle(styles.openColor)
        }
        else if (props.selectAll){
            setInitialValue("Yes")
            setChoiceStyle(styles.yesColor)
        }

        else{
            setInitialValue("No")
            setChoiceStyle(styles.noColor)
        }



    }

    const determineStateStyle = (value) => {
        console.log(props.selectAll)
        console.log('value:', value, props.selectAll)
        if (typeof props.selectAll !== 'boolean') // must be changed to someting like value === ' SELECTED_NONE'
            setChoiceStyle(styles.openColor)
        if (value === null || value === undefined)
            setChoiceStyle(styles.openColor)
        else if (value.choiceCode == 'Yes')
            setChoiceStyle(styles.yesColor)
        else if (value.choiceCode == 'No')
            setChoiceStyle(styles.noColor)
    }


    useEffect(() => {
        determineStateStyleByProps(props.selectAll)
        determineStateStyle(choice)
        toggleSwitch(props.selectAll)
    }, [props.selectAll])

    const toggleSwitch = (value) => {
        determineStateStyle(value)
        setChoice(value)
    };


    return (
        <Content>
            <Card style={styles.marginSides}>
                <CardItem style={styles.zeroPadding}>
                    <View style={[styles.dateText, choiceStyle]}>
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
                                        width={200}
                                        selectedNoneBgColor={'#483d8b'}
                                        selectedRightBgColor="green"
                                        selectedLeftBgColor={'#b11414'}
                                        fontColor={'#fff'}
                                        fontSize={13}
                                        circleBgColor={'white'}
                                        initialValue={initialValue}
                                        choices={choicesProp}
                                        onChange={(value) => toggleSwitch(value)}/>
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
    openColor: {
        backgroundColor: '#483d8b'
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
    switchContainer: {
        flexDirection: 'column',
        paddingLeft: 0,
        paddingRight: 5,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0,
    },

})
