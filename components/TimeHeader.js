import React, {Component, useState} from 'react';
import {Image, StyleSheet, View, Switch} from 'react-native';
import {Container, Badge, Text, Header, Body, Right, CheckBox, Button, Icon, Title, Subtitle} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';



export default function TimeHeader(props) {
    const [isSelected, setSelection] = useState(true);

    const onCheckBoxPress = () =>{
        setSelection(!isSelected)
        props.onCheckBoxPressCallBack(!isSelected)
    }


    return (
        <Header style={styles.headerBackground}>
            <Grid>
                <Col size={50}>
                    <Row><Title style={styles.blackColor}>Tijd over 2:24:25</Title>
                    </Row>
                    <Row>
                        <Subtitle style={styles.blackColor}>Inschrijven tot 21 feb</Subtitle>
                    </Row>
                </Col>
                <Col size={5} style={styles.centerItem}>
                    <Icon type="AntDesign" name='clockcircle'/>
                </Col>
                <Col size={40} style={styles.columnSelectAll}>
                    <View style={styles.columnSelectAll}>
                        <Text style={styles.checkboxText}>selecteer alles</Text>
                        <CheckBox
                            checked={isSelected}
                            onPress={onCheckBoxPress}
                            color="green"
                            style={{alignSelf: 'center'}}
                        />
                    </View>
                </Col>
            </Grid>
        </Header>
    )
}

const styles = StyleSheet.create({
        headerBackground: {
            backgroundColor: '#f0ad4e',
        },
        blackColor: {
            color: 'black',
        },
        centerItem: {
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
        columnSelectAll: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        checkboxText: {
            fontSize: 14,
            textAlign: 'center',
            alignSelf: 'center',
        }
    }
)