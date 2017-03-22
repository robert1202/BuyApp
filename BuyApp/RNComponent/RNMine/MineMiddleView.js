/**
 * Created by fly on 2017/3/21.
 */

'use strict';

import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    AlertIOS,
} from 'react-native';

var middleData = require('./MiddleData.json')

class MineMiddleView extends Component {

    render() {
        return (
            <View style={styles.container}>
                {this.renderAllItem()}
            </View>
        );
    }

    renderAllItem(){
        var itemList = [];
        for (var i = 0; i < middleData.length; i++ ){
            var data = middleData[i]
            itemList.push(
                <TouchableOpacity key = {i} onPress = {this.onPressItem.bind(this)} >
                    <InnerView iconName={data.iconName} subTitle={data.title}/>
                </TouchableOpacity>
            )
        }
        return itemList
    }

    onPressItem(){
        AlertIOS.alert("onPressItem");

    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent:'space-around'
    },
});

module.exports = MineMiddleView

class InnerView extends Component {

    static defaultProps = {
        iconName: "",
        subTitle: "",
    };

    render() {
        return (
            <View style={innerStyles.container}>
                <Image source={{url: this.props.iconName,scale: 2}} style={innerStyles.iconImgStyle}/>
                <Text>{this.props.subTitle}</Text>
            </View>
        );
    }
}

const innerStyles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems:'center',
        width:70,
        height:70,
    },
    iconImgStyle:{
        width: 40,
        height: 30,
    },
});
