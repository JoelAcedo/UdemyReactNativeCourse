/**
 * Created by joelacedo on 19/06/2017.
 */
"use strict";

import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {

    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        borderColor: '#eeeeee',
        padding: 5,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
};

export { CardSection };