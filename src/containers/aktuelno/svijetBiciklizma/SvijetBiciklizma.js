import React, { Component } from 'react';
import { Text, View,StyleSheet,ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchSvijetBiciklizma} from './Action'

import Header from '../../../components/HeaderBackOption';



class SvijetBiciklizma extends Component {
    state={
        indicator: true
    }
  
    componentDidMount(){
        this.props.fetchSvijetBiciklizma()
    }
   
    render() {
        return (
            <View style={styles.container}>
                <Header
                    title="Svijet Biciklizma"
                    onPress={()=> this.props.navigation.navigate('Aktuelno') }
                />
                <Text> SvijetBiciklizma</Text>
                <ActivityIndicator size="large" animating={this.state.indicator} color="black" />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        SvijetBiciklizma: state.SvijetBiciklizma
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchSvijetBiciklizma: fetchSvijetBiciklizma
    }, dispatch)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22506b',
    
      },
});
export default connect(mapStateToProps, matchDispatchToProps)(SvijetBiciklizma)