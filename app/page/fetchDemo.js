/**
 * Created by miyaye on 2019/11/17.
 */
import React, {Component} from 'react';
import {StyleSheet,View,Text,Button,TextInput} from 'react-native'

class FetchDemo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showText:''
        }
    }

    loadData(){
        fetch(`https://api.github.com/search/repositories?q=${this.searchKey}`)
            .then(res=>{
                if(res.ok){
                    return res.text()
                }else{
                    throw new Error('Network response was not ok')
                }
            })
            .then(res=>{
                this.setState({showText:res})
            })
            .catch(err=>{
                this.setState({showText:err.toString()})
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

export default FetchDemo;
