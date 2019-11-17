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

import {connect} from 'react-redux'

import FavoritePage from '../page/favorite'
import MyPage from '../page/my'
import PopularPage from '../page/popular'
import TrendingPage from '../page/trending'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
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

 class DynamicBottomNavigator extends Component{
    constructor(props, context)
    {
        super(props, context);
        console.disableYellowBox = true;
    }
    _tabNavigator(){
        if(this.Tabs) {
            return this.Tabs;
        }
        //动态导航器
        const {PopularPage:Popular,TrendingPage:Trending,FavoritePage:Favorite,MyPage:My} = HomeBottomNavigator;
        const tabs = {Popular,Trending,Favorite,My};
        //Popular.navigationOptions.tabBarLabel = 'Hot';
        return this.Tabs = createAppContainer(createBottomTabNavigator(tabs,{
            tabBarComponent:props=><TabBarComponent themeColor={this.props.themeColor} {...props}/>
            }
        ))
    }
    render(){
        const Tab = this._tabNavigator();
        return <Tab/>
    }
}
const mapStateToProps = (state)=> {
     console.log('接受到的state:',state)
     return {
         themeColor:state.theme.themeColor
     }
}
export default connect(mapStateToProps)(DynamicBottomNavigator)

class TabBarComponent extends Component{
    render(){
        return <BottomTabBar {...this.props} activeTintColor={this.props.themeColor}/>
    }
}