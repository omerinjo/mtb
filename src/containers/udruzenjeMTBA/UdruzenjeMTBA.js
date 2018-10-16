import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import Header from '../header/Header';

class UdruzenjeMTBA extends Component {
  render() {
    return (
      <View>
        <Header
          title="Udruženje-MTBA"
          onPress={() => { this.props.navigation.openDrawer() }}
        />
      </View>
    )
  }
}
export default UdruzenjeMTBA
const styles = StyleSheet.create({})
