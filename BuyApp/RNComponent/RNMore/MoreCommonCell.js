/**
 * Created by fly on 17/3/17.
 */

import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Switch,
} from 'react-native';

export default class MoreCommoneCell extends React.Component {

    static defaultProps = {
        titleStr: '',
        subTitleStr: '',
        isNeedSwitch: false,
    }
    static propTypes = {
        titleStr: React.PropTypes.string,
        subTitleStr: React.PropTypes.string,
        isNeedSwitch: React.PropTypes.bool,
    }

    constructor(props) {
        super(props);
        this.state = {
            isSwitch: false,
        };
    }

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'MoreCommoneCell',
                component: MoreCommoneCell,
            })
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={this._pressButton.bind(this)} >
                <View style={styles.cellStyle}>
                    <View  style={styles.leftViewStyle}>
                        <Text>{this.props.titleStr}</Text>
                    </View>
                    {this.renderRightView(this.props.isNeedSwitch,this.props.subTitleStr)}
                </View>
            </TouchableOpacity>
        );
    }

    renderRightView(isNeedSwitch, subtitle){
        if (isNeedSwitch){
            return(
                <View style={styles.rightViewStyle}>
                    <Text style={styles.subTitleStyle}>{subtitle}</Text>
                    <Switch value={this.state.isSwitch} style={styles.switchStyle}
                            onValueChange={()=>{this.setState({isSwitch: !this.state.isSwitch})}}/>

                    <Image source={{uri:'icon_cell_rightArrow', scale: 2}} style={styles.arrowImgStyle}/>
                </View>
            )
        }else {
            return(
                <View style={styles.rightViewStyle}>
                    <Text style={styles.subTitleStyle}>{subtitle}</Text>
                    <Image source={{uri:'icon_cell_rightArrow', scale: 2}} style={styles.arrowImgStyle}/>
                </View>
            )
        }

    }
}

const styles = StyleSheet.create({
    cellStyle: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor:'white',
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5,
    },

    leftViewStyle: {
        marginLeft: 10,
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

    switchStyle: {
        marginRight: 8,
    },

    subTitleStyle: {
        marginRight: 8,
    },
});

// 输出组件类
module.exports = MoreCommoneCell;