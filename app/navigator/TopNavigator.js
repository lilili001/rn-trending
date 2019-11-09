import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
/**
 * Created by miyaye on 2019/11/9.
 */
import {
createMaterialTopTabNavigator,
createBottomTabNavigator,
createAppContainer,
createStackNavigator,
createSwitchNavigator,
createDrawerNavigator,
DrawerItems
} from 'react-navigation';

import PopularTab from '../page/populars/PopularTab'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'

 //动态生成导航
var tabNames = ['java','php','html5','vue','react','react-native'];
const tabs = {};
tabNames.forEach((item,index)=>{
    tabs[`tab${index}`] = {
        screen:props => <PopularTab {...props} tabLabel={item}/>,
        navigationOptions:{
            title:item
        }
    }
});

const topNavConfig = {
    tabBarOptions:{
        tabStyle:{
            minWidth:50,
            marginTop:30
        },
        upperCaseLabel:false,
        scrollEnabled:true,//滑动切换tab,
        style:{
            backgroundColor:'#5fbef4'
        },
        indicatorStyle:{
            height:2,
            backgroundColor:'#ffffff'
        },
        labelStyle:{
            fontSize:13,
            marginTop:6,
            marginBottom:6
        }
    }
};

//如果要插入到页面中就需要用 createAppContainer
export default createAppContainer(createMaterialTopTabNavigator(tabs,topNavConfig));

