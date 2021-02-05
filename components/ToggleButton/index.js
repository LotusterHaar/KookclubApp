import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

export default function ToggleButton(props) {

    const [btnToggled, setBtnToggled] = useState(false);

    const onButtonToggle = () => {
        setBtnToggled(!btnToggled)
    };

    return (
        <TouchableOpacity onPress={onButtonToggle}
                          style={[
                              styles.buttonContainer,
                              btnToggled && styles.btnToggled
                          ]}>
            <Text style={styles.btnText}> {props.btnTitle} </Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: "center",
        padding: 16
    },
    buttonContainer: {
        elevation: 8,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 10,
        backgroundColor: "#d272bd"
    },
    btnToggled: {
        backgroundColor: "#b8b8b8",
    },
    btnText: {
        fontSize: 18,
        color: "#ffffff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});
