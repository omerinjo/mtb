import React, { Component } from 'react';
import { Text, View,StyleSheet,ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchRegion} from './Action'

import Header from '../../../components/HeaderBackOption';


class Region extends Component {
    state={
        indicator:true
    }

    componentDidMount(){
        this.props.fetchRegion()
    }

    componentWillReceiveProps(nextProps) {
        console.log("novi propovi region" ,nextProps.Region)
    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    title="Region"
                    onPress={()=> this.props.navigation.navigate('Aktuelno') }
                />
                <Text> Region</Text>
                <ActivityIndicator size="large" animating={this.state.indicator} color="black" />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Region: state.Region
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchRegion: fetchRegion
    }, dispatch)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22506b',
    
      },
});
export default connect(mapStateToProps, matchDispatchToProps)(Region)
