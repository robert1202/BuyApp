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
        this.state = {
            location: 'unknown',
            lastPosition: 'unknown',
        };
    }


    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>回去</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.getCurrentPosition.bind(this)}>
                    <Text>开始定位</Text>
                </TouchableOpacity>

                <Text>location: {this.state.location}</Text>
                <Text>lastPosition: {this.state.lastPosition}</Text>
            </View>
        );
    }

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();
        }
    }

    getCurrentPosition(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var initialPosition = JSON.stringify(position);
                this.setState({ location: initialPosition })
            },
            (error) => alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );


        this.watchID = navigator.geolocation.watchPosition((position) => {
            var lastPosition = JSON.stringify(position);
            this.setState({lastPosition:lastPosition});
        });
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
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