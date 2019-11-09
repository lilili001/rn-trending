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

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import Page4 from '../../app/page/page4'
import Page5 from '../../app/page/page5'
export default  drawerNavigator = createDrawerNavigator({
    Page4:{
        screen:Page4,
        navigationOptions:{
            drawerLabel:'Page4',
            drawerIcon:({tintColor})=><MaterialIcon name="drafts" size={24} style={{color:tintColor}}/>
        }
    },
    Page5:{
        screen:Page5,
        navigationOptions:{
            drawerLabel:'Page5',
            drawerIcon:({tintColor})=><MaterialIcon name="move-to-inbox" size={24} style={{color:tintColor}}/>
        }
    }
},{
    initialRouteName:'Page4',
    contentOptions:{
        activeTintColor:'#e91e63'
    },
    contentComponent:(props)=>(<ScrollView style={{background:'#e91',flex:1}}>
        <SafeAreaView forceInset={{top:'always',horizontal:'never'}}>
            <DrawerItems {...props}></DrawerItems>
        </SafeAreaView>
    </ScrollView>)
})