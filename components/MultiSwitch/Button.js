/* Switch Button Component class
 */
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import styles from './styles';

import { Icon } from 'native-base';
const getIcon = (type, active) => {
    let icn;
    switch (type) {
        case 'Open':
            icn = active
                ? {name: 'sign-out-alt', color:'purple' }
                : {name: 'sign-out-alt', color:'grey' };
            break;
        case 'In Progress':
            icn = active
                ? {name: 'spinner', color:'purple' }
                : {name: 'spinner', color:'black' };
            break;
        case 'Complete':
            icn = active
                ? {name: 'utensils', color:'green' }
                : {name: 'utensils', color:'black' };
            break;

    }
    return icn;
};

const Button = props => {

    return (
        <View>
            <TouchableOpacity
                onPress={props.onPress}
                style={styles.buttonStyle}
            >
                <Icon type= "FontAwesome" name={getIcon(props.type, props.active).name} style={{color: getIcon(props.type, props.active).color}} />


            </TouchableOpacity>
        </View>
    );
};



export default Button;