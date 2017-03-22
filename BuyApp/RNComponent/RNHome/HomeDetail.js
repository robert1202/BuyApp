/**
 * Created by fly on 17/3/16.
 */


import React from 'react';

import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';


export default class HomeDetail extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>回去</Text>
                </TouchableOpacity>
            </View>
        );
    }

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();
        }
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
module.exports = HomeDetail;