/**
 * Created by miyaye on 2019/11/9.
 */
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationUtil from '../utils/NavigationUtil'
class WelcomePage extends Component {
    componentDidMount(){
        this.timer = setTimeout(()=>{
            //跳转到首页
            NavigationUtil.resetToHomePage(this.props)
        },200)
    }
    componentWillUnmount(){
        //页面销毁时 清除定时器
        this.timer && clearTimeout(this.timer)
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>welcome page</Text>
            </View>
        );
    }
}


export default WelcomePage;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})