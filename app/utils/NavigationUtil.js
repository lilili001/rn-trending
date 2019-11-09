/**
 * Created by miyaye on 2019/11/9.
 */
import React, {Component} from 'react';

class NavigationUtil{
    static resetToHomePage(props){
        const {navigation} = props;
        navigation.navigate('Main')
    }
}
export default NavigationUtil;
