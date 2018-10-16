import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native'
import { withNavigation } from 'react-navigation';

const Header = (props) => {

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#087ca7"
        barStyle="light-content"
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={props.onPress}  >
          <View style={styles.btn}></View>
          <View style={styles.btn}></View>
          <View style={styles.btn}></View>
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>

        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity onPress={()=> props.navigation.navigate('MTB')} >
          <Image source={require('../../media/home.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 10,
    height: 50,
    borderBottomColor: '#1B4965',
    borderBottomWidth: 2,
    backgroundColor: '#087ca7',
    paddingBottom: 4,
    paddingTop: 2,
  },
  btnContainer: {
    display: 'flex',
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center'
  },
  btn: {
    backgroundColor: 'white',
    height: 2,
    marginTop: 6,
    marginLeft: 10,
    width: 30,
    elevation: 5,
  },
  titleContainer: {
    display: 'flex',
    flex: 5,
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    color:'white'
  },
  icon: {
    justifyContent: 'center',
    flex: 1
  }

});

export default withNavigation(Header)


