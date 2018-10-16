import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import Header from '../header/Header';

class BicikliOprema extends Component {
  render() {
    return (
      <View>
          <Header
          title="Bicikli i Oprema"
          onPress={() => { this.props.navigation.openDrawer() }}
        />
      </View>
    )
  }
}
export default BicikliOprema
const styles = StyleSheet.create({})
