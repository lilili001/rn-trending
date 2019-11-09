/**
 * Created by miyaye on 2019/11/9.
 */
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopNavigator from '../navigator/TopNavigator'
class PopularPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TopNavigator/>
            </View>
        );
    }
}

export default PopularPage;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10
    }
})