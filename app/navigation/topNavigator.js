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

import Page1 from '../../app/page/page1'
import Page2 from '../../app/page/page2'
import Page3 from '../../app/page/page3'
import Page4 from '../../app/page/page4'
import Page5 from '../../app/page/page5'

export default topNavigator = createMaterialTopTabNavigator({
    Page1:{
        screen:Page1,
        navigationOptions:{tabBarLabel:'All'}
    },
    Page2:{
        screen:Page2,
        navigationOptions:{tabBarLabel:'ios'}
    },
    Page3:{
        screen:Page3,
        navigationOptions:{tabBarLabel:'android'}
    },
    Page4:{
        screen:Page4,
        navigationOptions:{tabBarLabel:'react'}
    },
    Page5:{
        screen:Page5,
        navigationOptions:{tabBarLabel:'devio'}
    }
},{
    tabBarOptions:{
        tabStyle:{minWidth:50},
        upperCaseLabel:false,
        scrollEnabled:true,//滑动切换tab,
        style:{
            backgroundColor:'#678'
        },
        indicatorStyle:{
            height:2,
            backgroundColor:'white'
        },
        labelStyle:{
            fontSize:13,
            marginTop:6,
            marginBottom:6
        }
    }
});