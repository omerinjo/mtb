import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import PanelButton from '../../components/PanelButton'
import Header from '../header/Header';



class AppPanel extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Header
          title="MTB-Panel"
          navigation = {this.props.navigation}
          onPress={() => { this.props.navigation.openDrawer() }}
        />
        <View style={styles.btnContainer}>
          <PanelButton
            style={styles.btn}
            onPress={() => { console.log("drawnaviato ") }}
            image={source = (require('../../media/map.png'))}
            imageStyle={styles.imageStyle}
            titleStyle={styles.titleStyle}
            text="Staze"
          />
          <PanelButton
            style={styles.btn}
            onPress={() => { this.props.navigation.navigate('Korisno') }}
            titleStyle={styles.titleStyle}
            text="Najave"
          />
        </View>
        <View style={styles.btnContainer}>
          <PanelButton
            style={styles.btn}
            onPress={() => { this.props.navigation.navigate('Prodavnica') }}
            image={source = (require('../../media/shopping-cart.png'))}
            imageStyle={styles.imageStyle}
            titleStyle={styles.titleStyle}
            text="Prodavnice"
          />
          <PanelButton
            style={styles.btn}
            onPress={() => { this.props.navigation.navigate('Izvjestaji') }}
            titleStyle={styles.titleStyle}
            text="Izvješaji"
          />
        </View>
        <View style={styles.btnContainer}>
          <PanelButton
            style={styles.btn}
            onPress={() => { console.log("radi") }}
            titleStyle={styles.titleStyle}
            text="Forum"
          />
          <PanelButton
            style={styles.btn}
            onPress={() => { console.log("radi") }}
            image={source = (require('../../media/diary.png'))}
            imageStyle={styles.imageStyle}
            titleStyle={styles.titleStyle}
            text="Savjeti"
          />
        </View>
      </View>
    );
  }
}

export default AppPanel

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
  },
  imageStyle: {
    width: 100,
    height: 80
  },
  titleStyle: {
    fontSize: 20,
    color:'white'
  }
});