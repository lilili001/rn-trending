
import {createStackNavigator, createSwitchNavigator} from "react-navigation";
import Login from "../page/login";
import Password from "../page/password";


export const BACKGROUND_STACK_CONFIG_PARENT = {
    headerStyle:{ // 清除parent Header的底部线条
        backgroundColor:'transparent',
        borderBottomWidth:0,
        shadowOpacity: 0, // android
        elevation: 0 // android
    },
    headerTitleStyle:{
        color:'white'
    },
    headerTransparent:true
};

//登录验证的 stack
const AuthNavigator = createStackNavigator({
    Login:{
        screen:Login,
        navigationOptions:{
            BACKGROUND_STACK_CONFIG_PARENT,
            title:'Login',
        }
    },
    Password:{
        screen:Password,
        navigationOptions:{
            BACKGROUND_STACK_CONFIG_PARENT,
            title:'Password',
        }
    }
});
//已AuthNavigator为基础构建 switch navigator
export const AuthSwitch = createSwitchNavigator({
    AuthLogin:{
        screen:AuthNavigator,
    },
});