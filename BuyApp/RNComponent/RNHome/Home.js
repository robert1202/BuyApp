/**
 * Created by fly on 17/3/16.
 */

import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';


var HomeDetail = require('./HomeDetail')

export default class Home extends React.Component {

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: HomeDetail,
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>点我跳转</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.connectionSoceket}>
                    <Text>链接socket</Text>
                </TouchableOpacity>
            </View>
        );
    }

    connectionSoceket(){
        console.log('will connection ');

        var ws = new WebSocket('ws://grab.moxian.com/mo_grab/webSocketServer');

        ws.onopen = () => {
            // 建立连接
            ws.send('something');
        };

        ws.onmessage = (e) => {
            // 收到了消息
            console.log(e.data);
        };

        ws.onerror = (e) => {
            // 有错误发生
            console.log(e.message);
        };

        ws.onclose = (e) => {
            // 连接关闭
            console.log(e.code, e.reason);
        };
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
module.exports = Home;