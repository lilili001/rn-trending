/**
 * Created by miyaye on 2019/11/9.
 */
import React, {Component} from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';
import NavigationUtil from "../../utils/NavigationUtil";
class PopularTab extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <View>
                <Text>PopularTab</Text>
                <Button title="点击我" onPress={()=>this.props.navigation.navigate('DetailPage',{name:'动态参数name'})}/>
            </View>
        );
    }
}

export default PopularTab;
