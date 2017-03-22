/**
 * Created by fly on 2017/3/22.
 */
'use strict';

import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

export default class ShopDetail extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text>ShopDetail</Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});



// 输出组件类
module.exports = ShopDetail;