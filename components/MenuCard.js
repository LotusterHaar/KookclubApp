import React from 'react';
import {Image, StyleSheet, View, Switch} from 'react-native';
import {Content, Card, CardItem, Text, Button, Icon, Left, Body, Right} from 'native-base';

export default function MenuCard() {
    return (
        <Content>
            <Card style={styles.marginSides}>
                <CardItem style={styles.zeroPadding}>
                    <View style={styles.dateText}>
                        <Text style={[styles.textColor, styles.header]}>Maandag</Text>
                        <Text style={styles.textColor}>04</Text>
                        <Text style={styles.textColor} note>feb</Text>
                    </View>
                    <Body>
                    <CardItem body>
                        <Body>
                            <CardItem header bordered style={styles.zeroPadding}>
                                <Text style={styles.cardHeader}>Biefstuk met aardappeltjes</Text>
                                <Switch value={false}/>
                            </CardItem>
                            <CardItem style={styles.zeroPadding}>
                                <Text note>Met boontjes, worteltjes en champignonroomsaus
                                </Text>
                                <Text style={[styles.textColorBlack]}>Ja
                                </Text>

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
        backgroundColor: 'green',
        marginTop: 0,
        marginBottom: 0,
        height: '100%',
        borderBottomLeftRadius: 2,
        borderTopLeftRadius: 2,

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

})
