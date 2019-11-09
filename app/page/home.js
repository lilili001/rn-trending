
import React, {PureComponent} from 'react';
import { Text, View,Button } from 'react-native';
import {add, decrease} from "../redux/action";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        count:state.count
    };
}
function mapDispatchToProps(dispatch) {
    return{
        addCount:() => dispatch(add),
        decreaseCount:() => dispatch(decrease),
    }
}
//@connect(mapStateToProps, mapDispatchToProps)
class Home extends PureComponent {
    static navigationOptions:{
        title:'首页',
        headerBackTitle:'返回哈哈' //设置返回此页的返回按钮文案
    }
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }
    render() {
        let {count, addCount, decreaseCount} = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{fontSize:26}} onPress={() => this.props.navigation.navigate('Detail')}>Home, to Detail page!</Text>
                <Button title={"go page1"} onPress={()=>this.props.navigation.navigate('Page1',{name:'动态参数name'})}/>
                <Button title="go page2" onPress={()=>this.props.navigation.navigate('Page2')}/>
                <Button title="go page3" onPress={()=>this.props.navigation.navigate('Page3',{name:'devio'})}/>
                <Button title="go top" onPress={()=>this.props.navigation.navigate('Top',{name:'devio'})}/>
                <Button title="go drawer" onPress={()=>this.props.navigation.navigate('DrawerNav',{name:'devio'})}/>
                <Button title="go flatList" onPress={()=>this.props.navigation.navigate('FlatListDemo',{name:'devio'})}/>
                <Button title="go sectionList" onPress={()=>this.props.navigation.navigate('SectionListDemo',{name:'devio'})}/>
                <Text style={{fontSize:26, color:'red'}} onPress={() => addCount()}>ADD</Text>
                <Text style={{fontSize:26, color:'red'}}>{count}</Text>
                <Text style={{fontSize:26, color:'#459AFF'}} onPress={() => decreaseCount()}>DECREASE</Text>
            </View>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);