'use strict';

import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';

import {
    StyleSheet,
    View,
    Image,
    Navigator,
} from 'react-native';

var Home = require('../RNHome/Home');
var Shop = require('../RNShop/Shop');
var Mine = require('../RNMine/Mine');
var More = require('../RNMore/More');

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab : 'home'
        };
    }

    //
    render() {
        return (
            <TabNavigator>
                {this.renderTabItem('首页','home','icon_tabbar_homepage','icon_tabbar_homepage_selected',Home)}
                {this.renderTabItem('商家','shop','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected',Shop)}
                {this.renderTabItem('我的','mine','icon_tabbar_mine','icon_tabbar_mine_selected',Mine)}
                {this.renderTabItem('更多','more','icon_tabbar_misc','icon_tabbar_misc_selected',More)}
            </TabNavigator>
        );
    }

    renderTabItem(title, selectedTab,normalImgName, selectedImgName,component,badgeText){
        return(
            <TabNavigator.Item
                selected={this.state.selectedTab == selectedTab}
                title={title}

                renderIcon={() => <Image source={{uri: normalImgName}} style={styles.itemIconStyle} />}
                renderSelectedIcon={() => <Image source={{uri: selectedImgName}} style={styles.itemIconStyle}/>}
                badgeText={badgeText}
                onPress={() => this.setState({ selectedTab: selectedTab })}>
                {this.renderNavigator('title',component)}

            </TabNavigator.Item>
        )
    }

    renderNavigator(defaultName,defaultComponent) {
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }} />
        );
    }
}

const styles = StyleSheet.create({
    itemIconStyle:{
        width: 24,
        height: 24,
    }
});

module.exports = Main;
