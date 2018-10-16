import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Header from '../../../components/HeaderBackOption';

class LagoDiGarda2010 extends Component {
  render() {
    return (
      <View>
         <Header
        onPress={()=> this.props.navigation.navigate('Izvještaji Sa Vožnje')}
          title={'Lagodigarda 2010'}
        />
        <Text> LagoDiGarda2010 </Text>
      </View>
    )
  }
}

export default LagoDiGarda2010