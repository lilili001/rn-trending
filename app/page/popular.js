/**
 * Created by miyaye on 2019/11/9.
 */
import React, {Component} from 'react';
import { StyleSheet,Button, Text, View } from 'react-native';
import TopNavigator from '../navigator/TopNavigator'
import {connect} from 'react-redux'
class PopularPage extends Component {
    render() {
        const {navigation} = this.props
        return (
            <View style={styles.container}>
                <TopNavigator/>
                <Button title={"修改主题"} onPress={()=> this.props.dispatch({type:'themeChange',themeColor:'#21'})}></Button>
            </View>
        );
    }
}

export default connect()(PopularPage);

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30
    }
})