import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Header from '../../../components/HeaderBackOption'

class Voznje extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    onPress={() => this.props.navigation.navigate('Najave')}
                    title={'Vožnje'}
                />
                <Text> Voznje </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22506b',

    },
});

export default Voznje