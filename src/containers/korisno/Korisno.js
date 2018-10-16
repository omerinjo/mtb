import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import Header from '../header/Header';

class Korisno extends Component {
  render() {
    return (
      <View>
        <Header
          title="Korisno"
          onPress={() => { this.props.navigation.openDrawer() }}
        />
      </View>
    )
  }
}

export default Korisno
const styles = StyleSheet.create({})
