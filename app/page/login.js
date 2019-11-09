
import React, {Component} from 'react';
import { Text, View } from 'react-native';


class Login extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#FFBE9E' }}>
                <Text style={{fontSize:26}} onPress={() => this.props.navigation.navigate('Password')}>Login!</Text>
            </View>
        );
    }
}

export default Login;