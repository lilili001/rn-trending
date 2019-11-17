import React,{Component} from 'react'
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
DrawerItems,
BottomTabBar
} from 'react-navigation';

import FavoritePage from '../page/favorite'
import MyPage from '../page/my'
import PopularPage from '../page/popular'
import TrendingPage from '../page/trending'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import {connect} from 'react-redux'
import TopNavigator from './TopNavigator'

const HomeBottomNavigator = {
    PopularPage:{
        screen:TopNavigator,//这里可以是PopularPage 也可以是TopNavigator
        navigationOptions:{
            tabBarLabel:'流行',
            tabBarIcon:({tintColor})=><MaterialIcon name="whatshot" size={26} style={{color:tintColor}}/>
        }
    },
    TrendingPage:{
        screen:TrendingPage,
        navigationOptions:{
            tabBarLabel:'趋势',
            tabBarIcon:({tintColor})=><MaterialIcon name="trending-up" size={26} style={{color:tintColor}}/>
        }
    },
    FavoritePage:{
        screen:FavoritePage,
        navigationOptions:{
            tabBarLabel:'收藏',
            tabBarIcon:({tintColor})=><MaterialIcon name="favorite" size={26} style={{color:tintColor}}/>
        }
    },
    MyPage:{
        screen:MyPage,
        navigationOptions:{
            tabBarLabel:'我的',
            tabBarIcon:({tintColor})=><Entypo name="user" size={26} style={{color:tintColor}}/>
        }
    }
};

export default class DynamicBottomNavigator extends Component{
    constructor(props, context)
    {
        super(props, context);
    }
    _tabNavigator(){
        //动态导航器
        const {PopularPage:Popular,TrendingPage:Trending,FavoritePage:Favorite,MyPage:My} = HomeBottomNavigator;
        const tabs = {Popular,Trending,Favorite,My};
        //Popular.navigationOptions.tabBarLabel = 'Hot';
        return this.Tabs = createAppContainer(createBottomTabNavigator(tabs,{
            tabBarComponent:TabBarComponent
            }
        ))
    }
    render(){
        const Tab = this._tabNavigator();
        return <Tab/>
    }
}


class TabBarComponent extends Component{
    constructor(props, context) {
        super(props, context);
        console.disableYellowBox = true;
        this.theme={
            tintColor:props.activeTintColor,
            updateTime:new Date().getTime()
        }
    }
    render(){
        const {routes,index} = this.props.navigation.state;
        if(routes[index]['params']) {
            const {theme} = routes[index]['params'];
            //以最新的更新时间为主 防止被其他tab之前的修改覆盖掉
            if(theme && theme.updateTime > this.theme.updateTime){
                this.theme = theme;
            }
        }
        return <BottomTabBar {...this.props} activeTintColor={this.theme.tintColor || this.props.activeTintColor}/>
    }
}