/**
 * Created by miyaye on 2019/11/9.
 */
import React, {Component} from 'react';
import {View,Button,ScrollView,SafeAreaView} from 'react-native';
import {
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator,
    createDrawerNavigator,
    DrawerItems
} from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons'

import Home from "../../app/page/home";
import Setting from "../../app/page/setting";
import Page1 from '../../app/page/page1'

export default tabNavigator = createBottomTabNavigator({
    Page1:{
        screen:Page1,
        navigationOptions:{
            tabBarLabel:'最热',
            tabBarIcon: ({tintColor,focused})=><Icon name={'ios-home'} size={26} style={{color:tintColor}}/>
        }
    },
    Home:{
        //每个 tab 都是一个 stack,目的是可以单独控制 header
        screen:createStackNavigator({
            Home:{
                screen:Home,
                navigationOptions:{
                    header:null,
                }
            }
        }),
        navigationOptions:() => ({
            tabBarLabel:'Home',
        })
    },
    Setting:{
        screen:createStackNavigator({
            Setting:{
                screen:Setting,
                navigationOptions:{
                    header:null,
                }
            }
        }),
        navigationOptions:() => ({
            tabBarLabel:'Setting',
        })
    },

}, {
    initialRouteName:'Home',
    swipeEnabled: false,
    animationEnabled: false,
    backBehavior:'none',
    tabBarOptions: {
        inactiveTintColor: '#808080',
        activeTintColor: '#e9ab62',
        labelStyle: {
            fontSize: 12,
            paddingTop: 3,
            paddingBottom: 2
        },
        style: {
            paddingTop: 4
        }
    }
});