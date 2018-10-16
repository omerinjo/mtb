import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Header from '../../../components/HeaderBackOption';

class SviIzvjestaji extends Component {
  render() {
    return (
      <View>
          <Header
        onPress={()=> this.props.navigation.navigate('Izvještaji Sa Vožnje')}
          title={'Svi Izvještaji'}
        />
        <Text> SviIzvjestaji </Text>
      </View>
    )
  }
}

export default SviIzvjestaji