import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet,Dimensions } from 'react-native'

const IzvjestajiSaVoznji = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image source={{ uri: props.source }} style={styles.image} />
      <Text style={styles.title}> {props.izvjestajTitle} </Text>
    </TouchableOpacity>
  )

}
const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderLeftColor: 'black',
    borderBottomRightRadius: 10,
    margin: 5,
  },
  image: {
    height: 200,
    width: Dimensions.get('window').width - 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'Arial, Helvetica, sans-serif',
  }
});

export default IzvjestajiSaVoznji