/**
 * Created by miyaye on 2019/9/28.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class Page5 extends Component<Props> {
    render() {
        return (
            <View style={[ style.container ]}>
                <Text style={[style.text]}>page5</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
        //display:'flex',//默认flex
        flex:1,//让内容撑满屏幕的高度 因为没有其他的兄弟容器 所以它可以独自占有屏幕的高度
        flexDirection:'row',//横向排列
        flexDirection:'column',//纵向排列
        justifyContent:'center',//三个一起排列在屏幕垂直方向正中间
        justifyContent:'space-between',//三个view均分 上中下 上下紧贴边缘 也不一定是上中下 根据flexDirection决定
        justifyContent:'space-around',//三个view均分 种种下 上下距离边缘有距离
        flexWrap: 'wrap',//当view 超出屏幕时 比如subbox height:200 的时候 把它包裹进来
        alignItems:'stretch',//默认平铺stretch 这时候如果给宽度就不可以了 不会平铺了  还有其他对齐方式: flex-start flex-end center 这种是根据内容来决定宽度的相当于css de inline
        backgroundColor:'#85CEF4',
        height:500

    }
});
