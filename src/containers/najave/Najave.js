import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Header from '../header/Header';
import PanelButton from '../../components/PanelButton'

class Najave extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Najave"
          onPress={() => { this.props.navigation.openDrawer() }}
        />
        <View style={styles.btnContainer}>
          <PanelButton
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('Voznje')}
            //image={source = (require('../../media/map.png'))}
            titleStyle={styles.titleStyle}
            text="Vožnje" />
          <PanelButton
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('Takmicenja')}
            //image={source = (require('../../media/map.png'))}
            titleStyle={styles.titleStyle}
            text="Takmičenja"
          />
        </View>
        <View style={styles.btnContainer}>
          <PanelButton
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('Dogadzaji')}
            //image={source = (require('../../media/map.png'))}
            titleStyle={styles.titleStyle}
            text="Dogadzaji"
          />
          <PanelButton
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('OstaleNajave')}
            //image={source = (require('../../media/map.png'))}
            titleStyle={styles.titleStyle}
            text="Ostale najave"
          />
        </View>
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
    height: 280,
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
  },
});
export default Najave