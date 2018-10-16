import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../header/Header';
import PanelButton from '../../components/PanelButton'
import IzvjestajiComponent from '../../components/IzvjestajiSaVoznji'

class IzvjestajiSaVoznji extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    title="Izvještaji sa vožnji"
                    onPress={() => this.props.navigation.openDrawer()}
                />
              <IzvjestajiComponent   
              onPress={()=> this.props.navigation.navigate('SviIzvjestaji')}
                  izvjestajTitle={'Svi izvjestaji'}
              />
                <IzvjestajiComponent   
              onPress={()=> this.props.navigation.navigate('Dolomiti2011')}
                  izvjestajTitle={'Dolomiti2011'}
              />
                <IzvjestajiComponent   
              onPress={()=> this.props.navigation.navigate('LagoDiGarda2010')}
                  izvjestajTitle={'Lago di garda 2010'}
              />
                <IzvjestajiComponent   
              onPress={()=> this.props.navigation.navigate('Makedonija2012')}
                  izvjestajTitle={'Makedonija 2012'}
              />
                <IzvjestajiComponent   
              onPress={()=> this.props.navigation.navigate('EpicBalcak2012')}
                  izvjestajTitle={'Epic balcan 2012'}
              />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22506b',
    },
    btn: {
        height: 180,
        width: 150,
        backgroundColor: '#17BEBB',
        margin: 10,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default IzvjestajiSaVoznji