/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
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

import {AuthSwitch} from "./app/navigation/authNavigation";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {counter} from "./app/redux/reducer";

import MainNavigator from './app/navigation/MainNavigator'

const RootStack = createStackNavigator({
  Main:{
    screen:MainNavigator,
  },
  AuthModal:{
    screen:AuthSwitch,
  },

}, {
  mode: 'modal',
  headerMode: 'none',
});

export const AppNavigator = createSwitchNavigator({
  App: {
    screen:RootStack,
  },
});

const RootNavigator = createAppContainer(AppNavigator);
//创建 store
const store = createStore(counter);
export default class App extends Component {
  render(){
    return(
        <Provider store={store}>
          <View style={{ flex:1 }}>
            <RootNavigator/>
          </View>
        </Provider>
    )
  }
}


