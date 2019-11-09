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
import DetailPage from '../page/detail'
import BottomTabNavigator from './BottomNavigator'

//主路由
const MainNavigator = createStackNavigator({
    HomePage:{
        screen:HomePage,
        navigationOptions:{
            header:null
        }
    },
    DetailPage:{
        screen:DetailPage,
    }
});

//通过switchNavigator 来区分两part
export default MainNavigator