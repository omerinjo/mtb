import React, { Component } from 'react';
import { Text, View, StyleSheet,ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVijestiIzSporta } from './Action';

import Header from '../../../components/HeaderBackOption';


class VijestiIzSporta extends Component {
    state = {
        indicator: true
    }

    componentDidMount() {
        this.props.fetchVijestiIzSporta()
    }

    componentWillReceiveProps(nextProps) {
        console.log("novi propovi iz svijeta biciklizma ", nextProps.VijestiIzSporta)
    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    title="Vijesti Iz Sporta"
                    onPress={() => this.props.navigation.navigate('Aktuelno')}
                />
                <Text> VijestiIzSporta</Text>
                <ActivityIndicator size="large" animating={this.state.indicator} color="black" />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        VijestiIzSporta: state.VijestiIzSportaReducer
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchVijestiIzSporta: fetchVijestiIzSporta
    }, dispatch)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22506b',

    },
});
export default connect(mapStateToProps, matchDispatchToProps)(VijestiIzSporta)