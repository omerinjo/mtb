import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Header from '../../../components/HeaderBackOption';



class Dolomiti2011 extends Component {
  render() {
    return (
      <View>
        <Header
        onPress={()=> this.props.navigation.navigate('Izvještaji Sa Vožnje')}
          title={'Dolomiti 2011'}
        />
        <Text> Dolomiti2011 </Text>
      </View>
    )
  }
}

export default Dolomiti2011