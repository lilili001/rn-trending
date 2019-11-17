/**
 * Created by miyaye on 2019/11/9.
 */
import React, {Component} from 'react';
import { StyleSheet,Button, Text, View } from 'react-native';
import {connect} from 'react-redux'

class TrendingPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>TrendingPage</Text>
                <Button title={"修改主题"} onPress={()=> this.props.dispatch({type:'themeChange',themeColor:'orange'})}></Button>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onThemeChange : (themeColor)=> dispatch({type:'themeChange',themeColor})
})

export default connect()(TrendingPage);

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