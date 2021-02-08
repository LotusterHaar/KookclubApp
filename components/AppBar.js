import React from 'react';
import {Image, StyleSheet, View, Switch} from 'react-native';
import { Badge, Text, Header, Left, Body, Right, Button, Icon, Title, Subtitle } from 'native-base';


export default function AppBar() {


    return (
                <Header style ={styles.headerBackground} >
                    <Left>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body style={styles.centerTitle}>
                        <Title>Kookclub</Title>
                        <Subtitle>Aanmelden</Subtitle>
                    </Body>
                    <Right>
                        <Icon  style= {{ color: "#fff" }} name="notifications" />
                        <Badge warning style={{ fontSize: 10, color: "#fff", lineHeight: 10 }}>
                            <Text>3</Text>
                        </Badge>
                        <Button transparent>
                            <Icon type="FontAwesome" name='user-circle' style = {{width:null, textAlign: 'center', fontSize: 30, marginBottom: -10}}/>
                        </Button>
                    </Right>
                </Header>
        );
}

const styles = StyleSheet.create({
        headerBackground: {
            backgroundColor: 'green'
        },
        centerTitle:{
            alignItems: 'center'
        }
    }
)