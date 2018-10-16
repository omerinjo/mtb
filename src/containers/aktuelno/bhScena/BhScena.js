import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import Header from '../../../components/HeaderBackOption';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBhScena } from './Action';

class BhScena extends Component {
    state = {
        indicator: true
    }
    componentDidMount() {
        this.props.fetchBhScena()
    }
    componentWillReceiveProps(nextProps) {

        console.log("bhscena component ", nextProps.BhScena)
    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    title="BH Scena"
                    onPress={() => this.props.navigation.navigate('Aktuelno')}
                />
                <ActivityIndicator size="large" animating={this.state.indicator} color="black" />
                <Text> BhScena </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        BhScena: state.BhscenaReducer
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchBhScena: fetchBhScena
    }, dispatch)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22506b',

    },
});

export default connect(mapStateToProps, matchDispatchToProps)(BhScena)