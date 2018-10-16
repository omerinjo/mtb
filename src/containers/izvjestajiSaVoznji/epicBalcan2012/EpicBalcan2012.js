import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Header from '../../../components/HeaderBackOption';

 class EpicBalcan2012 extends Component {
  render() {
    return (
      <View>
          <Header
          onPress={()=> this.props.navigation.navigate('Izvještaji Sa Vožnje')}
          title={'Epic Balcan 2012'}
        />
        <Text> EpicBalcan2012 </Text>
      </View>
    )
  }
}

export default EpicBalcan2012