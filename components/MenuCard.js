import React from 'react';
import { Image } from 'react-native';
import {Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default function MenuCard () {
    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{uri: 'https://www.zorgalsthuis.nl/images/logo.jpg'}} />
                    <Body>
                        <Text>Biefstuk met aardappeltjes</Text>
                        <Text note>Met worteltjes en champignongroomsaus</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={{uri: 'https://i.insider.com/5d0bc2a0e3ecba03841d82d2?width=960&format=jpeg'}} style={{height: 100, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
                <Left>
                    <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>12 Likes</Text>
                    </Button>
                </Left>
                <Body>
                    <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>4 Comments</Text>
                    </Button>
                </Body>
                <Right>
                    <Text>11h ago</Text>
                </Right>
            </CardItem>
        </Card>
    );
}