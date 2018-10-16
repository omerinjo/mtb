import React, { Component } from 'react';
import { Text, View, StyleSheet,ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPonudaUProdavnicama } from './Actions'

import Header from '../../../components/HeaderBackOption';


class PonudaUProdavnicama extends Component {
    state={
        indicator: true
    }

    componentDidMount() {
    this.props.fetchPonudaUProdavnicama()
    }

    componentWillReceiveProps(nextProps) {
        console.log(" novi propovu u ponudi i provacnici ", nextProps.Ponuda)
    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    title="Ponude"
                    onPress={() => this.props.navigation.navigate('Aktuelno')}
                />
                <Text> Ponuda u Prodavnicama</Text>
                <ActivityIndicator size="large" animating={this.state.indicator} color="black" />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Ponuda: state.PonudaUProdavnicama
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchPonudaUProdavnicama: fetchPonudaUProdavnicama
    }, dispatch)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22506b',

    },
});
export default connect(mapStateToProps, matchDispatchToProps)(PonudaUProdavnicama)