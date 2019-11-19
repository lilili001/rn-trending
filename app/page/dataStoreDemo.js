/**
 * Created by miyaye on 2019/11/17.
 */
import React, {Component} from 'react';
import {StyleSheet,View,Text,Button,TextInput} from 'react-native'
import DataStore from '../extend/dao/DataStore'
class DataStoreDemo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showText:''
        }
        this.dataStore = new DataStore();
    }

    loadData(){
         var url = `https://api.github.com/search/repositories?q=${this.searchKey}`
         this.dataStore.fetchData(url).then(data=>{
             let showData = `初次数据加载时间：${new Date(data.timestamp)}\n${JSON.stringify(data.data)}`;
             this.setState({
                 showText: showData
             })
         }).catch(error => {
             error && console.log(error.toString());
         })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container_input}>
                    <TextInput style={styles.input} onChange={(text)=>{
                        this.searchKey = text
                    }}></TextInput>
                    <Button title="获取数据" onPress={()=>this.loadData()}></Button>
                </View>
                <Text>{this.state.showText}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        //flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5fcff'
    },
    input:{
        flex:1,
        height:30,
        borderColor:'#000',
        borderWidth:1,
        marginRight:10,
        borderStyle:"solid"
    },
    container_input:{
        flexDirection:'row',
        alignItems:'center'
    }
})

export default DataStoreDemo;
