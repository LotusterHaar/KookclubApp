import React, {Component, useState, useEffect} from 'react';
import {Image, StyleSheet, View, Switch, Animated, Text} from 'react-native';
import {Container, Badge, Header, Body, Right, CheckBox, Button, Icon, Title, Subtitle} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer'
import moment from 'moment'


export default function TimeHeader(props) {

    const addExtraMinutes = () => {
        let d = new Date()
        d.setHours(d.getHours(), d.getMinutes() + 5, 0, 0);
        return d;
    }
    const [isSelected, setSelection] = useState(false);

    const [countdownDate, setCountdownDate] = useState(addExtraMinutes().getTime());


    const [distanceToDate, setDistanceToDate] = useState(countdownDate - new Date().getTime());

    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });


    useEffect(() => {
        console.log(countdownDate)
        setInterval(() => setNewTime(), 1000);
    }, []);

    const setNewTime = () => {
        if (countdownDate) {
            const currentTime = new Date().getTime();

            const distanceToDate = countdownDate - currentTime;
            setDistanceToDate(distanceToDate)
            console.log('distance', distanceToDate)

            let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            let minutes = Math.floor(
                (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
            );
            let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

            const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            days = `${days}`;
            if (numbersToAddZeroTo.includes(hours)) {
                hours = `0${hours}`;
            } else if (numbersToAddZeroTo.includes(minutes)) {
                minutes = `0${minutes}`;
            } else if (numbersToAddZeroTo.includes(seconds)) {
                seconds = `0${seconds}`;
            }

            setState({days: days, hours: hours, minutes, seconds});
        }
    };

    const getTimeMinutes = (elapsedTime) => Math.floor(
        (elapsedTime  * 5/3* 0.00001),)

    const renderTime = (time) => {
        return (
            <Animated.Text style={{color: '#004777'}}>
                {time} min
            </Animated.Text>
        );
    };

    const onCheckBoxPress = () => {
        setSelection(!isSelected)
        props.onCheckBoxPressCallBack(!isSelected)
    }


    return (
        <Header style={styles.headerBackground}>
            <Grid>
                <Col size={35}>
                    <Row>
                        <Text> {state.days || '0'} : {state.hours || '00'} : {state.minutes || '00'} : {state.seconds || '00'}</Text></Row>
                    <Row>
                        <Subtitle style={styles.blackColor}>Inschrijven tot 21 feb</Subtitle></Row>

                </Col>
                <Col size={20}>
                    <CountdownCircleTimer
                        isPlaying
                        size={50}
                        duration={distanceToDate}
                        strokeWidth={4}
                        onFinish={() => console.log('finished ')}
                        colors={[
                            ['#004777', 0.4],
                            ['#07980c', 0.4],
                            ['#A30000', 0.2],
                        ]}
                    >
                        {({ elapsedTime }) =>
                            renderTime( getTimeMinutes( distanceToDate - elapsedTime))
                        }
                    </CountdownCircleTimer>

                </Col>
                <Col size={40}>
                    <Row>
                        <Subtitle style={styles.checkboxText}>selecteer alles</Subtitle>
                        <View style={styles.centerItem}>
                            <CheckBox
                                checked={isSelected}
                                onPress={onCheckBoxPress}
                                color="green"
                                styles={styles.checkbox}
                            />
                        </View>
                    </Row>
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
            fontSize: 11,
            textAlign: 'center',
            alignSelf: 'center',

        },
        centerItem: {
            justifyContent: 'center',
            alignSelf: 'center',
        },
        checkboxText: {
            color: 'black',
            marginLeft: 0,
            fontSize: 14,
            alignSelf: 'center',
            justifyContent: 'space-between',
        },
    }
)