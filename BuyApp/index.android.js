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
    Navigator,
} from 'react-native';

var LaunchImage = require('./RNComponent/RNMain/LanuchImage');

export default class BuyApp extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name:'LanuchImage',component:LaunchImage}}
                configureScene={()=>{
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route,navigator) => {
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>;
                }}
            />
        );
    }
}

AppRegistry.registerComponent('BuyApp', () => BuyApp);
