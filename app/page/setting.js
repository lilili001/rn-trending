
import React, {Component} from 'react';
import { Text, View } from 'react-native';


class Setting extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#B7DEFF' }}>
                <Text style={{fontSize:26}}>Setting</Text>
                <Text style={{fontSize:26}}>Setting!</Text>
            </View>
        );
    }
}

export default Setting;