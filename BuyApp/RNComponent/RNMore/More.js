/**
 * Created by fly on 17/3/16.
 */

import React from 'react';

import {
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView,
} from 'react-native';

var CommoneCell = require('./MoreCommonCell')

export default class More extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navViewStyle}>
                    <Text style={styles.navTitleStyle}>更多</Text>
                </View>
                <ScrollView>
                    <View style={{marginTop:10}}>
                        <CommoneCell titleStr = "扫一扫" />
                    </View>

                    <View style={{marginTop:10}}>
                        <CommoneCell titleStr = "省流量模式" isNeedSwitch = {true} />
                        <CommoneCell titleStr = "消息提醒" />
                        <CommoneCell titleStr = "邀请好友" />
                        <CommoneCell titleStr = "清空缓存" subTitleStr = "1.94M"/>

                    </View>

                    <View style={{marginTop:10}}>
                        <CommoneCell titleStr = "意见反馈" />
                        <CommoneCell titleStr = "问卷调查" />
                        <CommoneCell titleStr = "支付帮助" />
                        <CommoneCell titleStr = "网络诊断" />
                        <CommoneCell titleStr = "关于" />
                        <CommoneCell titleStr = "我要应聘" />

                    </View>


                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F0EFF5',
        flex: 1,
    },
    navViewStyle:{
        height: 64,
        backgroundColor:'#F7F7F9',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    navTitleStyle:{
        color: 'black',
        fontSize: 17,
        marginTop: 30,
        fontWeight: 'bold'
    },
});



// 输出组件类
module.exports = More;