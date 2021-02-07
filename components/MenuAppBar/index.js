import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Icon, withBadge, Text} from 'react-native-elements'
import {SafeAreaView} from 'react-native';

const MessagesBadge = withBadge(5)(Icon)

class MyDecoratedIcon extends React.Component {


    render() {
        return (
            <MessagesBadge
                type="ionicon"
                name="notifications"
                color="white"
                size={30}
            />

        );
    }
}

class MyTitleWithSubtitle extends React.Component {
    render() {
        return (
            <View style={styles.appBarTitle}>
                <Text h4 style={styles.white}>Kookclub</Text>
                <Text style={styles.white}>Aanmelden</Text>
            </View>
        )

    }
}

class RightComponentHeader extends React.Component {
    render() {
        return (
            <View style={styles.icons}>
                <MyDecoratedIcon/>
                <Icon color="transparent" name="account-circle"/>
                <Icon color="white" size={30} name="account-circle"/>
                <Icon color="transparent" name="account-circle"/>
            </View>
        );
    }
}

export default function MenuAppBar() {

    const _jumpToMenu = () => {
        alert('Jump to menu');
    }

    const _account = () => {
        alert('Show account');
    }

    return (
        <SafeAreaView>
            <Header leftComponent={<Icon color="white" name="menu" size={30}/>}
                    centerComponent={<MyTitleWithSubtitle/>}
                    rightComponent={<RightComponentHeader/>}
                    rightContainerStyle={{alignContent: "space-between"}}/>
        </SafeAreaView>
)
}


const styles = StyleSheet.create({
    appBarTitle: {
        alignItems: 'center',
        color: 'white',
    },
    white: {
        color: 'white'
    },
    icons: {
        flexDirection: 'row',
        alignContent: 'space-between',
        flexWrap: 'nowrap'
    },
})