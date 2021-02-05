import React from 'react';
import {Text } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'

// implemented with Text and Button as children
export default function MenuCard() {
    return(
    <Card>
        <Card.Title>HELLO WORLD</Card.Title>
        <Card.Divider/>
        <Card.Image source={{uri:'https://picsum.photos/700'}}>
            <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
                icon={<Icon name='code' color='#ffffff'/>}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW'/>
        </Card.Image>
    </Card>
    )
}