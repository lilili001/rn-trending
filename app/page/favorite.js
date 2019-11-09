/**
 * Created by miyaye on 2019/11/9.
 */
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class FavoritePage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>FavoritePage</Text>
            </View>
        );
    }
}

export default FavoritePage;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5fcff'
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10
    }
})