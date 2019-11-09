/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Welcome from './app/page/welcome'
import AppNavigator from './app/navigator/AppNavigator'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
