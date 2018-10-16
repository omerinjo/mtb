import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import PanelButton from '../../components/PanelButton'
import Header from '../header/Header';

class Aktuelno extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    title="Aktuelno"
                    onPress={() => { this.props.navigation.openDrawer() }}
                />
                <View style={styles.btnContainer}>
                    <PanelButton
                        style={styles.btn}
                        onPress={() => { this.props.navigation.navigate('SveVijesti') }}
                        // image={source = (require('../../media/map.png'))}
                        // imageStyle={styles.imageStyle}
                        titleStyle={styles.titleStyle}
                        text="Sve Vijesti"
                    />
                    <PanelButton
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate('BhScena')}
                        titleStyle={styles.titleStyle}
                        text="BH Scena"
                    />
                </View>
                <View style={styles.btnContainer}>
                    <PanelButton
                        style={styles.btn}
                        onPress={() =>  this.props.navigation.navigate('SvijetBiciklizma')}
                        // image={source = (require('../../media/shopping-cart.png'))}
                        // imageStyle={styles.imageStyle}
                        titleStyle={styles.titleStyle}
                        text="Svijet Biciklizma"
                    />
                    <PanelButton
                        style={styles.btn}
                        onPress={() => {  this.props.navigation.navigate('VijestiIzSporta')}}
                        titleStyle={styles.titleStyle}
                        text="Vijesti Iz Sporta"
                    />
                </View>
                <View style={styles.btnContainer}>
                    <PanelButton
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate('PonudaUProdavnicama')}
                        titleStyle={styles.titleStyle}
                        text="Ponuda U Prodavnicama"
                    />
                    <PanelButton
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate('Region')}
                        //  image={source = (require('../../media/diary.png'))}
                        // imageStyle={styles.imageStyle}
                        titleStyle={styles.titleStyle}
                        text="Region"
                    />
                </View>
            </View>
        );
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
        elevation: 10
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleStyle: {
        fontSize: 15,
    }
});



export default Aktuelno 