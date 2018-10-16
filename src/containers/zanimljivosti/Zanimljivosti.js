import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import Header from '../header/Header';
class Zanimljivosti extends Component {
  render() {
    return (
      <View>
            <Header
          title="Zanimljivosti"
          onPress={() => { this.props.navigation.openDrawer() }}
        />
      </View>
    )
  }
}

export default  Zanimljivosti
const styles = StyleSheet.create({})
