/**
 * Created by fly on 17/3/22.
 */
import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Image,
    Text,
    Navigator,
} from 'react-native';

var Main = require('./Main');


export default class LanuchImage extends React.Component {

    render() {
        return (
            <Image source={{uri: 'LaunchImage',scale: 2}} style={styles.launchImageStyle}/>

        );
    }

    componentDidMount() {
        // 定时: 隔2s切换到Main
        this.timer = setTimeout(() => {
                console.log('把一个定时器的引用挂在this上');
                this.props.navigator.replace({
                    component: Main,
                });
            }, 2000);
    }
    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }
}

const styles = StyleSheet.create({
    launchImageStyle: {
        flex: 1,
    },
});

// 输出组件类
module.exports = LanuchImage;
