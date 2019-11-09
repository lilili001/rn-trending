/**
 * Created by miyaye on 2019/11/9.
 */
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigator from '../navigator/BottomNavigator'
class HomePage extends Component {
    render() {
        return <BottomNavigator/>
    }
}

export default HomePage;

const styles = StyleSheet.create({
    container:{

    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10
    }
})