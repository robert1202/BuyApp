/**
 * Created by fly on 2017/3/21.
 */

'use strict';

import React, { Component ,PropTypes} from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    AlertIOS,
    TouchableOpacity,
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

class MineHeaderView extends Component {
    static propsTypes = {
        mineEvent: PropTypes.func
    };

    render() {
        return (
            <View style={styles.container}>
                {this.renderTopView()}
                {this.renderBottomView()}
            </View>
        );
    }

    renderTopView() {
        return(
            <View>
                <View style={styles.topContainerStyle}>
                    <View  style={styles.topContainerStyle}>
                        <Image
                            source={{uri: 'http://attend.m41s.com/static/images/moya.png'}}
                            style={{width:70, height:70,borderRadius:35,borderWidth:3,borderColor:'#F68367',marginLeft: 8}}/>

                        <Text style={{color:'white',fontSize:12, marginLeft: 8}}>BuyAPP</Text>
                        <Image
                            source={{uri: 'avatar_vip'}}
                            style={{width:17, height:17,marginLeft: 8}}/>
                    </View>
                    <Image
                        source={{uri: 'icon_cell_rightArrow'}}
                        style={{width:8, height:13,marginRight:8}}/>
                </View>

            </View>
        )
    }

    /**--下部分--**/
    renderBottomView(){
        return(
            <View style={styles.bottomViewStyle}>
                {this.renderBottomItem()}
            </View>
        )
    }

    renderBottomItem(){
        var viewList = [];
        var dataList = [{count:100,title:"兑换券"},{count:12,title:"评价"},{count:50,title:"收藏"}]
        for (var i = 0; i < dataList.length; i++){
            var data = dataList[i]
            viewList.push(
                <TouchableOpacity  key = {i} onPress={this.onPressItem.bind(this)}>
                    <View style={styles.bottomInnerViewStyle}>
                        <Text style={{color:'white',fontSize:12}}>{data.count}</Text>
                        <Text style={{color:'white',fontSize:12}}>{data.title}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return viewList
    }

    onPressItem(){
        this.props.mineEvent();
    }
}

const styles = StyleSheet.create({
    container:{
        height: 164,
        backgroundColor: '#FD4B20',
    },

    topContainerStyle: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop: 20,
    },

    bottomViewStyle:{
        backgroundColor: '#F68367',
        flexDirection:'row',
        justifyContent:'space-around',
        position:'absolute',
        bottom:0,

    },

    bottomInnerViewStyle:{
        width: (width / 3) + 1.5,
        height: 44,
        justifyContent:'center',
        alignItems:'center',

        borderColor: 'white',
        borderRightWidth: 1,
    },

});


module.exports = MineHeaderView;
