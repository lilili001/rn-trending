import React from 'react'
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

import FavoritePage from '../page/favorite'
import MyPage from '../page/my'
import PopularPage from '../page/popular'
import TrendingPage from '../page/trending'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'

import TopNavigator from './TopNavigator'

const HomeBottomNavigator = createBottomTabNavigator({
    PopularPage:{
        screen:TopNavigator,
        navigationOptions:{
            tabBarLabel:'最热',
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
            tabBarLabel:'最热',
            tabBarIcon:({tintColor})=><MaterialIcon name="favorite" size={26} style={{color:tintColor}}/>
        }
    },
    MyPage:{
        screen:MyPage,
        navigationOptions:{
            tabBarLabel:'最热',
            tabBarIcon:({tintColor})=><Entypo name="user" size={26} style={{color:tintColor}}/>
        }
    }
});

//如果要插入到页面中就需要用 createAppContainer
export default createAppContainer(HomeBottomNavigator)