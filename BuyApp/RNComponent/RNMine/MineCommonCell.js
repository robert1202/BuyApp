/**
 * Created by fly on 2017/3/21.
 */

import React, { Component ,PropTypes} from 'react';

import {
    View,
    StyleSheet,
    Text,
    Image,
    AlertIOS,
    TouchableOpacity,
} from 'react-native';


export default class MineCommoneCell extends React.Component {

    static defaultProps = {
        iconName: '',
        titleStr: '',
        rightTitle: '',
        rightIconName: '',
    };

    static propTypes = {
        mineEvetn: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            isSwitch: false,
        };
    }

    onPressCell() {
        this.props.mineEvent();
    }

    render() {
        return (
            <TouchableOpacity onPress={this.onPressCell.bind(this)} >
                <View style={styles.cellStyle}>
                    <View style={styles.leftViewStyle}>
                        <Image source={{url: this.props.iconName,scale: 2}} style={styles.iconImgStyle}/>
                        <Text style={styles.titleStyle}>{this.props.titleStr}</Text>
                    </View>
                    <View style={styles.rightViewStyle}>
                        {this.renderRightView()}
                        {/*箭头*/}
                        <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8, height:13, marginRight:8, marginLeft:5}}/>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    renderRightView(){
        if (this.props.rightIconName.length == 0){//不返回图片
            return (
                <Text style={styles.subTitleStyle}>{this.props.rightTitle}</Text>
            )
        }else{
            return(
                <Image source={{uri: this.props.rightIconName}}  style={{width:24, height:13}}/>
            )
        }
    }
}

const styles = StyleSheet.create({
    cellStyle: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'white',
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5,
        justifyContent:'space-between',
    },

    iconImgStyle:{
        width: 32,
        height: 32,
        borderRadius: 16,
    },

    leftViewStyle: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    rightViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },

    arrowImgStyle: {
        width: 8,
        height: 13,
    },

    titleStyle: {
        marginLeft: 8,
    },

    subTitleStyle: {
        marginRight: 8,
        color:"gray"
    },
});

// 输出组件类
module.exports = MineCommoneCell;