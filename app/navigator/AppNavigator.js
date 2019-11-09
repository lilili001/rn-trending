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

import WelcomePage from '../page/welcome'
import HomePage from '../page/home'

import BottomTabNavigator from './HomeBottonNavigator'

//导航分两part , 首页之前 首页之后
const InitNavigator = createStackNavigator({
    WelcomePage:{
        screen:WelcomePage,
        navigationOptions:{
            header:null //隐藏头部
        }
    }
});

const MainNavigator = createStackNavigator({
    BottomTabNavigator:{
        screen:BottomTabNavigator,
        navigationOptions: {

        }
    },
    HomePage:{
        screen:HomePage,
        navigationOptions:{
            header:null
        }
    },
});

//通过switchNavigator 来区分两part
export default createAppContainer(createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator
}, {
    navigationOptions:{
        header:null
    }
}))