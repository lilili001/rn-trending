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

import HomePage from '../page/home'
import DetailPage from '../page/detail'
import FetchDemo from '../page/fetchDemo'
import DataStoreDemo from '../page/dataStoreDemo'

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
    },
    FetchDemo:{
        screen:FetchDemo
    },
    DataStoreDemo:{
        screen:DataStoreDemo
    },
});

//通过switchNavigator 来区分两part
export default MainNavigator