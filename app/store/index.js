/**
 * Created by miyaye on 2019/11/10.
 */
import {applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'

/**
 * 自定义中间件
 * @param store
 */
const logger = store => next => action => {
    if(typeof action == 'function'){
        console.log('dispatching a function')
    }else{
        console.log('dispatching',action)
    }
    const result = next(action);
    console.log('nextState',store.getState());
    return result;
};

const middleware = [thunk,logger];

/**
 * 创建store
 */
export default createStore(reducers,applyMiddleware(...middleware))