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
                <Button title="点击我" onPress={()=>NavigationUtil.goPage('DetailPage',{name:'动态参数name'})}/>
                <Button title="fetch 使用" onPress={()=>NavigationUtil.goPage('FetchDemo')}></Button>
            </View>
        );
    }
}

export default PopularTab;
