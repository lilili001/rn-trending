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

import Pop1 from '../page/populars/pop1'
import Pop2 from '../page/populars/pop2'
import Pop3 from '../page/populars/pop3'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'

const TopNavigator = createMaterialTopTabNavigator({
    pop1:{
        screen:Pop1,
        navigationOptions:{
            title:'pop1'
        }
    },
    pop2:{
        screen:Pop2,
        navigationOptions:{
            title:'pop2'
        }
    },
    pop3:{
        screen:Pop3,
        navigationOptions:{
            title:'pop3'
        }
    }
});

//如果要插入到页面中就需要用 createAppContainer
export default createAppContainer(TopNavigator)