import React, {useState, useRef, useEffect} from "react";
import {
    Animated,
    Dimensions,
    PanResponder,
    View,
    Platform
} from "react-native";

import styles from "./styles";
import Button from "./Button";

const {width} = Dimensions.get("window");


export default function MultiSwitch(props) {
    const [currentStatus , duration, mainWidth, switcherWidth, thresholdDistance] = useState([props.currentStatus, 100, width - 30, width / 2.7, width - 8 - width / 2.4])
    const [position, setPosition] = useState(new Animated.Value(0))
    const [posValue, setPosValue] = useState(0)
    const [selectedPosition, setSelectedPosition] = useState(0)
    const [isParentScrollDisabled, setParentScrollDisabled] = useState(false)



    function usePanResponders(){
        useEffect(() => {
            moveInitialState();
        },[]);

        return React.useRef(PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {
                // disable parent scroll if slider is inside a scrollview
                if (!isParentScrollDisabled) {
                    props.disableScroll(false);
                    setParentScrollDisabled(true);
                }
            },

            onPanResponderMove: (evt, gestureState) => {
                if (!props.disableSwitch) {
                    let finalValue = gestureState._value + posValue;
                    if (finalValue >= 0 && finalValue <= thresholdDistance)

                        position.setValue(posValue + gestureState._value);
                    console.log(position)
                }
            },

            onPanResponderTerminationRequest: (evt, gestureState) => true,

            onPanResponderRelease: (evt, gestureState) => {
                if (!props.disableSwitch) {
                    console.log(gestureState)
                    let finalValue = gestureState._value + posValue;
                    setParentScrollDisabled(false);
                    props.disableScroll(true);
                    if (gestureState._value > 0) {
                        if (finalValue >= 0 && finalValue <= 30) {
                            notStartedSelected();
                        } else if (finalValue >= 30 && finalValue <= 121) {
                            inProgressSelected();
                        } else if (finalValue >= 121 && finalValue <= 280) {
                            if (gestureState._value > 0) {
                                completeSelected();
                            } else {
                                inProgressSelected();
                            }
                        }
                    } else {
                        if (finalValue >= 78 && finalValue <= 175) {
                            inProgressSelected();
                        } else if (finalValue >= -100 && finalValue <= 78) {
                            notStartedSelected();
                        } else {
                            completeSelected();
                        }
                    }
                }
            },

            onPanResponderTerminate: () => {
            },
            onShouldBlockNativeResponder: () => {
                // Returns whether this component should block native components from becoming the JS
                // responder. Returns true by default. Is currently only supported on android.
                return true;
            }
        })).current;


    }


    const notStartedSelected = () => {
        if (props.disableSwitch) return;
        Animated.timing(position, {
            toValue: Platform.OS === "ios" ? -2 : 0,
            duration: duration
        }).start();
        setTimeout(() => {
                setPosValue(Platform.OS === "ios" ? -2 : 0)
                setSelectedPosition(0)
        }, 100);
        props.onStatusChanged("Open");
    };

    const inProgressSelected = () => {
        if (props.disableSwitch) return;
        Animated.timing(position, {
            toValue: mainWidth / 2 - switcherWidth / 2,
            duration: duration
        }).start();
        setTimeout(() => {
                setPosValue(mainWidth / 2 - switcherWidth / 2),
                setSelectedPosition(1)
        }, 100);
        props.onStatusChanged("In Progress");
    };

    const completeSelected = () => {
        if (props.disableSwitch) return;
        Animated.timing(position, {
            toValue:
                Platform.OS === "ios"
                    ? mainWidth - switcherWidth
                    : mainWidth - switcherWidth - 2,
            duration: duration
        }).start();
        setTimeout(() => {
                setPosValue(
                    Platform.OS === "ios"
                        ? mainWidth - switcherWidth
                        : mainWidth - switcherWidth - 2)
                setSelectedPosition(2)

        }, 100);
        props.onStatusChanged("Complete");
    };

    const getStatus = () => {
        switch (selectedPosition) {
            case 0:
                return "Open";
            case 1:
                return "In Progress";
            case 2:
                return "Complete";
        }
    };

    const moveInitialState = () => {
        switch (currentStatus) {
            case "Open":
                notStartedSelected();
                console.log(position)
                break;
            case "In Progress":
                console.log(position)
                inProgressSelected();
                break;
            case "Complete":
                console.log(position)
                completeSelected();
                break;

        }
    };

    return (
        <View style={styles.container}>
            <Button type="Open" onPress={notStartedSelected}/>
            <Button type="In Progress" onPress={inProgressSelected}/>
            <Button type="Complete" onPress={completeSelected}/>
            <Animated.View
                {...usePanResponders().panHandlers}
                style={[
                    styles.switcher,
                    {
                        transform: [{translateX: position}]
                    }
                ]}
            >
                <View>
                    <Button type={getStatus()} active={true}/>
                </View>
            </Animated.View>
        </View>
    );
}
