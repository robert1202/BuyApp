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
    TouchableOpacity,
} from 'react-native';

export default class ClassName extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity>
                <View>
                    <Image/>
                    <View>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                        <Image/>
                        <Text></Text>
                        <Image/>
                        <Text></Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    contentViewStyle:{

    },

    mainPicStyle:{

    },
});



// 输出组件类
module.exports = ClassName;