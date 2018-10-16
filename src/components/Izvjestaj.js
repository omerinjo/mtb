import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const Izvjestaj = (props) => { 
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <View>
                <Image source={{ uri: 'http://www.mtb.ba/wp-content/uploads/' + props.source }} style={styles.image} />
            </View>
            <View>
                <Text style={styles.headLine}>{props.postTitle}</Text>
                <Text style={styles.authorName}>{props.authorName}</Text>
                <Text style={styles.date}>{props.postDate}</Text>
            </View>
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
    headLine: {
        fontSize: 25,
        color:'white',
        fontFamily: 'Arial, Helvetica, sans-serif',
    },
    authorName: {
        fontSize: 17,
        color:'white'
    },
    date: {
        fontSize: 14,
        color:'white'
    }
});
export default Izvjestaj;
