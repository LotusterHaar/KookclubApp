import React, {Component} from 'react';
import { connect } from 'react-redux';
import {TouchableOpacity,StyleSheet, Text} from 'react-native';

class Index extends Component {

    constructor(props) {
        super(props);

        this.state = {
            btnToggled: false,
        }
    }

    onButtonToggle = () => {
        this.setState({btnToggled: !this.state.btnToggled})
        console.log('toggle');
        console.log(this.state.btnToggled);
    };

    render() {
        console.log(this.props.btnTitle)
        return (
            <TouchableOpacity onPress={this.onButtonToggle}
                              style={[
                styles.buttonContainer,
                this.state.btnToggled && styles.btnToggled
            ]}>
                <Text style={styles.btnText}> {this.props.btnTitle} </Text>

            </TouchableOpacity>
        );
    }
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
        backgroundColor:"#d272bd"
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

function mapStateToProps(state) {
    const { title } = state;
    return {
        title
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);
