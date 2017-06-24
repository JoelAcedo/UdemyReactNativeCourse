
/**
 * Created by joelacedo on 23/06/2017.
 */
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, text }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles =  {

    textStyle: {
        alignSelf: 'center',
        color: '#0071ff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#0071ff',
        marginLeft: 5,
        marginRight: 5
    }
};

export { Button };