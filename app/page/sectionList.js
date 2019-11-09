/**
 * Created by miyaye on 2019/10/13.
 */
/**
 * Created by miyaye on 2019/10/5.
 */
import React, {Component} from 'react';
import {StyleSheet,Text,View,Button,SectionList,RefreshControl,ActivityIndicator} from 'react-native'
const CITY_NAMES = [{data:['北京','上海','广州'],title:'一线'},
    {data:['重庆','深圳','成都','武汉','杭州 '],title:'二三线'},
    {data:['洛阳','青岛','厦门','拉萨'],title:'二三线2'}
]
class SectionListDemo extends Component {
    constructor(props, context) {
        super(props, context);
    }
    state = {
        loading:false,
        data:CITY_NAMES
    }
    loadData(refreshing){
        if(refreshing) this.setState({loading:true});
        setTimeout(()=>{
            let dataArray = [];
            if(refreshing){
                for(let i=this.state.data.length-1;i>=0;i--){
                    dataArray.push(this.state.data[i])
                }
            }else{
                dataArray = this.state.data.concat(CITY_NAMES)
            }

            this.setState({data:dataArray,loading:false})
        },1000)
    }
    _renderItem(data){
        return <View style={style.item}>
            <Text style={style.text}>{data.item}</Text>
        </View>
    }
    getEndIndicator(){
        return <View style={{alignItems:"center"}}>
            <ActivityIndicator size="large" color="red" animating={true}></ActivityIndicator>
            <Text>正在加载</Text>
        </View>
    }
    _renderSectionHeader({section}){
        return <View style={style.sectionHeader}><Text style={style.sectionHeaderTitle}>{section.title}</Text></View>
    }
    render() {
        return (
            <View style={[style.container]}>
                <SectionList sections={this.state.data}
                          renderItem={(data)=>this._renderItem(data)}
                    // refreshing={this.state.loading}
                    // onRefresh={()=>{//下拉刷新
                    //     this.loadData()
                    // }}
                    //刷新控制 这个是用于自定义刷新样式 如果用这个 上面的refreshing和onRefresh不用
                          refreshControl={
                              <RefreshControl
                                  title="loading"
                                  colors="red"
                                  tintColor="red"
                                  refreshing={this.state.loading}
                                  onRefresh={()=> {//下拉刷新
                                      this.loadData(true)
                                  }}
                              />
                          }
                          ListFooterComponent={()=>this.getEndIndicator()}
                          onEndReached={()=>this.loadData()}
                          renderSectionHeader={(data)=>this._renderSectionHeader(data)}
                          ItemSepratorComponent={()=><View style={style.seprator}></View>}
                >
                </SectionList>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
        backgroundColor:'#fafafa',
        //display:'flex',//默认flex
        flex:1,//让内容撑满屏幕的高度 因为没有其他的兄弟容器 所以它可以独自占有屏幕的高度
        // flexDirection:'row',//横向排列
        // flexDirection:'column',//纵向排列
        // justifyContent:'center',//三个一起排列在屏幕垂直方向正中间
        // justifyContent:'space-between',//三个view均分 上中下 上下紧贴边缘 也不一定是上中下 根据flexDirection决定
        // justifyContent:'space-around',//三个view均分 种种下 上下距离边缘有距离
        // flexWrap: 'wrap',//当view 超出屏幕时 比如subbox height:200 的时候 把它包裹进来
        // alignItems:'stretch',//默认平铺stretch 这时候如果给宽度就不可以了 不会平铺了  还有其他对齐方式: flex-start flex-end center 这种是根据内容来决定宽度的相当于css de inline
        // backgroundColor:'#85CEF4',
        // height:500
    },
    item:{
        //backgroundColor:'#169',
        height:80,
        marginRight:15,
        marginLeft:15,
        marginBottom:15,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'black',
        fontSize:20
    },
    indicator:{
        color:'red'
    },
    sectionHeader:{
        height:50,
        backgroundColor:"#36993A",
        alignItems:'center',
        justifyContent:'center'
    },
    sectionHeaderTitle:{
        color:"#fff"
    },
    seprator:{
        height:1,
        backgroundColor:'gray',
        flex:1
    }
});

export default SectionListDemo;
