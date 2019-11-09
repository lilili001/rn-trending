/**
 * Created by miyaye on 2019/11/9.
 */
import React, {Component} from 'react';

class NavigationUtil{
    /**
     * 跳转到指定页面
     * @param params 要传递的参数
     * @param page 要跳转的页面名
     */
    static goPage(page,params){
        const {navigation} = NavigationUtil.navigation;
        if(!navigation) console.error('NavigationUtil.navigation can not be null');
        navigation.navigate(page,...params)
    }

    /**
     * 重置到首页
     * @param props
     */
    static resetToHomePage(props){
        const {navigation} = props;
        navigation.navigate('Main')
    }
}
export default NavigationUtil;
