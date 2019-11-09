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

import Detail from "../../app/page/detail";
import FlatList from '../../app/page/flatList'
import SectionList from '../../app/page/sectionList'

import Page1 from '../../app/page/page1'
import Page2 from '../../app/page/page2'
import Page3 from '../../app/page/page3'
import Page4 from '../../app/page/page4'
import Page5 from '../../app/page/page5'


import drawerNavigator from './drawerNavigator'
import topNavigator from './topNavigator'
import tabNavigator from './tabNavigator'

export default MainNavigator = createStackNavigator({
    //tab 放在 stack 中,可以保证 navigate 到二级页面时隐藏底部 tabbar
    Tab: {
        screen: tabNavigator,
        navigationOptions: {
            header: null
        }
    },
    Detail:{
        screen: Detail,
        navigationOptions: {
            title: '详情',
        }
    },
    Page1:{
        screen:Page1,
        //navigationOptions 定义每个页面的导航数据 这里是动态的方式
        navigationOptions:({navigation})=>({title:`页面`})
    },
    Page2:{
        screen:Page2,
        //navigationOptions 定义每个页面的导航数据 这里是静态的方式
        navigationOptions:({navigation})=>({title:`This is page2`})
    },
    Page3:{
        screen:Page3,
        //navigationOptions 定义每个页面的导航数据 这里是静态的方式
        navigationOptions:(props)=>{
            const {navigation} = props;
            const {state,setParams} = navigation;
            const {params} = state;
            return {
                title: params.title || 'This is page3',
                headerRight:(<Button
                    title={params.mode == 'edit' ? '保存' : '编辑'}
                    onPress={()=>setParams({mode:params.mode =='edit' ? '' : 'edit' })}
                />)
            }
        }
    },
    Page4:{
        screen:Page4,
        //navigationOptions 定义每个页面的导航数据 这里是静态的方式
        navigationOptions:({navigation})=>({title:`This is page4`})
    },
    Page5:{
        screen:Page5,
        //navigationOptions 定义每个页面的导航数据 这里是静态的方式
        navigationOptions:({navigation})=>({title:`This is page5`})
    },
    Top:{
        screen:topNavigator,
        navigationOptions:({navigation})=>({title:`This top navigator page`})
    },
    DrawerNav:{
        screen:drawerNavigator,
        navigationOptions:({navigation})=>({title:`This drawer navigator page`})
    },
    FlatListDemo:{
        screen:FlatList,
        navigationOptions:({navigation})=>({title:`This flatList page`})
    },
    SectionListDemo:{
        screen:SectionList,
        navigationOptions:({navigation})=>({title:`This sectionList page`})
    },
}, {
    headerMode: 'screen',
    defaultNavigationOptions: {
        headerBackTitle: null,
        headerTitleStyle: {
            color: 'white',
        },
        headerBackTitleStyle: {
            color: 'white'
        },
        headerStyle: {
            backgroundColor: '#37426A',
            headerTransparent: true,
            borderBottomWidth: 0,
            borderBottomColor: 'transparent',
        },
        headerTintColor: 'white',
        gesturesEnabled: true,
    }
});