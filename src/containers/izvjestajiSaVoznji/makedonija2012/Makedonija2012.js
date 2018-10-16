import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Header from '../../../components/HeaderBackOption';

class Makedonija2012 extends Component {
  render() {
    return (
      <View>
         <Header
        onPress={()=> this.props.navigation.navigate('Izvještaji Sa Vožnje')}
          title={'Makedonija 2012'}
        />
        <Text> Makedonija 2012 </Text>
      </View>
    )
  }
}

export default  Makedonija2012