"use strict";

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => (
    <Header headerText={'Album'} />
);

AppRegistry.registerComponent('Albums', () => App);
