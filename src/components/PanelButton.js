import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

const PanelButton = (props) => (
    <View>
        <TouchableOpacity
            style={props.style}
            onPress={props.onPress}
        >
            <Image
            source = {props.image}
            style={props.imageStyle}
             />
            <Text style={props.titleStyle}>{props.text}</Text>
        </TouchableOpacity>
    </View>
);


export default PanelButton;
