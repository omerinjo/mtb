import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList,ActivityIndicator } from 'react-native'
import Header from '../header/Header'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProdavnicaComponent from '../../components/Prodavnice'

import { fetchProdavnica } from './Action'

class Prodavnica extends Component {

  state = {
    prodavnice: null,
    indicator: true,
  }

  componentDidMount() {
    this.props.fetchProdavnica()
  }

  componentWillReceiveProps(nextProps) {
    console.log("novi porpovi ", nextProps.Prodavnice.prodavnice)
    this.setState({
      indicator:nextProps.Prodavnice.indicator,
      prodavnice: nextProps.Prodavnice.prodavnice
    })
  }
  showProdavnice = ({ item, index }) => {
    if (this.state.prodavnice) {
      return <ProdavnicaComponent
        source={item.pictureUrl1}
        postTitle={item.postTitle}
      />

    }
  }


  render() {
    return (
      <View style={styles.container}>
        
        <Header
          title="Prodavnica"
          onPress={() => { this.props.navigation.openDrawer() }}
        />
        <ActivityIndicator size="large" animating={this.state.indicator} color="black" />
        <View style={styles.content}>
          <FlatList
            data={this.state.prodavnice}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.showProdavnice}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Prodavnice: state.ProdavnicaReducer
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchProdavnica: fetchProdavnica
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
export default connect(mapStateToProps, matchDispatchToProps)(Prodavnica)