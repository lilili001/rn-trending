/**
 * Created by miyaye on 2019/11/9.
 */
import React, {Component} from 'react';
import { StyleSheet,Button, Text, View } from 'react-native';
import TopNavigator from '../navigator/TopNavigator'
import NavigationUtil from "../utils/NavigationUtil";
class PopularPage extends Component {
    render() {
        const {navigation} = this.props
        return (
            <View style={styles.container}>
                <TopNavigator/>
                <Button title={"修改主题"} onPress={()=>navigation.setParams({
                    name:'alice',
                    theme:{
                        tintColor:'green',
                        updateTime:Date.now()
                    }
                })}></Button>
            </View>
        );
    }
}

export default PopularPage;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30
    }
})