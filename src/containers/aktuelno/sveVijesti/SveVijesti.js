import React, { Component } from 'react';
import { Text, View,StyleSheet,ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchSveVijesti} from './Action'

import Header from '../../../components/HeaderBackOption';


class SveVijesti extends Component {
    state={
        indicator: true
    }

    componentDidMount(){
        this.props.fetchSveVijesti()
    }
    
    componentWillReceiveProps(nextPorps) {
        console.log("sve vijesti ", nextPorps.SveVijesti)
    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    title="Sve Vijesti"
                    onPress={()=> this.props.navigation.navigate('Aktuelno') }
                />
                <Text> SveVijesti</Text>
                <ActivityIndicator size="large" animating={this.state.indicator} color="black" />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        SveVijesti: state.SveVijesti
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchSveVijesti: fetchSveVijesti
    }, dispatch)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22506b',
    
      },
});
export default connect(mapStateToProps, matchDispatchToProps)(SveVijesti)