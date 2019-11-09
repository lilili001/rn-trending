
import React, {Component} from 'react';
import { Text, View } from 'react-native';


class Detail extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{fontSize:26}} onPress={() => this.props.navigation.navigate('Login')}>Detail!</Text>
            </View>
        );
    }
}

export default Detail;