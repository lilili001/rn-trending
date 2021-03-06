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

import MainNavigator from './MainNavigation'

//导航分两part , 首页之前 首页之后
const InitNavigator = createStackNavigator({
    WelcomePage:{
        screen:WelcomePage,
        navigationOptions:{
            header:null //隐藏头部
        }
    }
});

//通过switchNavigator 来区分两part
export default createAppContainer(createSwitchNavigator(
    {
        Init: InitNavigator,
        Main: MainNavigator
    },
    {
        navigationOptions:{
            header:null
        }
    }
))