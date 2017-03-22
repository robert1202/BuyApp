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

var MineHeaderView = require('./MineHeaderView')
var MineMiddleView = require('./MineMiddleView')
var MineCommonCell = require('./MineCommonCell')

var MineDetail = require('./MineDetail');


export default class Mine extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>

                {this.renderNavigationView()}

                <ScrollView>
                    <View>
                        <MineHeaderView mineEvent={this.onPressResponse.bind(this)}/>
                        <MineCommonCell iconName = "collect"
                                        titleStr = "我的订单"
                                        rightTitle = "查看全部订单"
                                        mineEvent = {this.onPressResponse.bind(this)}/>
                        <MineMiddleView />
                    </View>

                    <View style={{marginTop:10}}>
                        <MineCommonCell iconName = "draft"
                                        titleStr = "钱包"
                                        rightTitle = "账户余额:￥100"
                                        mineEvent = {this.onPressResponse.bind(this)}/>

                        <MineCommonCell iconName = "like"
                                        titleStr = "抵用券"
                                        rightTitle = "0"
                                        mineEvent = {this.onPressResponse.bind(this)}/>
                    </View>

                    <View style={{marginTop:10}}>
                        <MineCommonCell iconName = "card"
                                        titleStr = "积分商场"
                                        mineEvent = {this.onPressResponse.bind(this)}/>
                    </View>

                    <View style={{marginTop:10}}>
                        <MineCommonCell iconName = "new_friend"
                                        titleStr = "今日推荐"
                                        rightIconName = "me_new"
                                        mineEvent = {this.onPressResponse.bind(this)}/>
                    </View>

                    <View style={{marginTop:10}}>
                        <MineCommonCell iconName = "pay"
                                        titleStr = "我要合作"
                                        rightTitle = "轻松开店,招财进宝"
                                        mineEvent = {this.onPressResponse.bind(this)}/>
                    </View>


                </ScrollView>
            </View>
        );
    }

    renderNavigationView(){
        return(
            <View style={styles.navViewStyle}>
                <Image source={{url: "icon_homepage_message",scale: 2}} style={styles.iconImgStyle}/>
                <Image source={{url: "icon_mine_setting",scale: 2}} style={styles.iconImgStyle}/>


                {/*<Text style={styles.navTitleStyle}>更多</Text>*/}
            </View>
        )
    }

    //action

    onPressResponse(){
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'MineDetail',
                component: MineDetail,
            })
        }
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F0EFF5',
        flex: 1,
    },
    navViewStyle:{
        height: 64,
        backgroundColor:'#F15935',
        borderBottomColor: '#B03416',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    navTitleStyle:{
        color: 'black',
        fontSize: 17,
        marginTop: 30,
        fontWeight: 'bold'
    },

    iconImgStyle:{
        width: 24,
        height: 24,
        margin: 12,
        marginTop: 24,
    },
});



// 输出组件类
module.exports = Mine;