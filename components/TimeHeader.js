import React, {Component} from 'react';
import {Image, StyleSheet, View, Switch} from 'react-native';
import {Container, Badge, Text, Header, Body, Right, CheckBox, Button, Icon, Title, Subtitle} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

export default function TimeHeader() {
    return (
        <Header style={styles.headerBackground}>
            <Grid >
                <Col size={40}>
                    <Row><Title style={styles.blackColor}>Tijd over 2:24:25</Title>
                    </Row>
                    <Row>
                        <Subtitle style={styles.blackColor}>Inschrijven tot 21 feb</Subtitle>
                    </Row>
                </Col>
                <Col size={5} style={styles.centerItem}>
                    <Icon type="AntDesign" name='clockcircle'/>
                </Col>
                <Col size={30}>
                    <Body  style={styles.selectAll}>
                        <Text style={{fontSize: 12}}>Selecteer alles</Text>
                        <CheckBox checked={true} color="green" style={{alignSelf:'center'}}/>
                    </Body>
                </Col>
            </Grid>
        </Header>
    );
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
        selectAll:{
            flexDirection: 'column',
            alignItems:'center'
        }
    }
)