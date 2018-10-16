import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StyleSheet, FlatList, Button } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchIzvjestajiSaVoznji } from './Action'

import Header from '../header/Header';
import Izvjestaj from '../../components/Izvjestaj';

class Izvjestaji extends Component {

  state = {
    indicator: true,
    izvjestaji: null,
    postDetails: null,
    hidePostDetails: true
  }

  componentDidMount() {
    this.props.fetchIzvjestajiSaVoznji()
  }

  componentWillReceiveProps(nextProps) { 
    console.log("izvjestaji ", nextProps)
    this.setState({
      indicator: nextProps.Izvjestaji.indicator,
      izvjestaji: nextProps.Izvjestaji.izvjestaji,
      postDetails: nextProps.Izvjestaji.post
    })
  }

  showIzvjestaje = ({ item, index }) => {
    if (this.state.izvjestaji) {
      return <Izvjestaj
        onPress={() => this.props.navigation.navigate('PostDetails',{slug: item.postSlug})}
        source={item.pictureUrl}
        authorName={item.authorName}
        postDate={item.postDate}
        postTitle={item.postTitle}
      />
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Izvjestaji Sa Vožnje"
          onPress={() => { this.props.navigation.openDrawer() }}
        />
         <ActivityIndicator size="large" animating={this.state.indicator} color="black" />
        <View style={styles.content} >
          <FlatList
            data={this.state.izvjestaji}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.showIzvjestaje}
          // onEndReached={this.handleRefresh}

          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Izvjestaji: state.IzvjestajiSaVoznjiReducer
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchIzvjestajiSaVoznji: fetchIzvjestajiSaVoznji,
  }, dispatch)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#087ca7',
    elevation: 15,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  }
});
export default connect(mapStateToProps, matchDispatchToProps)(Izvjestaji)
