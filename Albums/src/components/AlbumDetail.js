/**
 * Created by joelacedo on 19/06/2017.
 */
"use strict";

import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {

    return (
        <Card>
            <CardSection>
                <Text>{props.album.title}</Text>
            </CardSection>
            <CardSection>
                <Text>{props.album.title}</Text>
            </CardSection>
        </Card>
    );
};

export default AlbumDetail;