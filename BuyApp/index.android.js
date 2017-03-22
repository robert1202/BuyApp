/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

var Main = require('./RNComponent/RNMain/Main');

export default class BuyApp extends Component {
    render() {
        return (
            <Main/>
        );
    }
}

AppRegistry.registerComponent('BuyApp', () => BuyApp);
