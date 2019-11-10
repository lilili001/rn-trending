/**
 * Created by miyaye on 2019/11/10.
 */
import {applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'

const middleware = [thunk];

/**
 * 创建store
 */
export default createStore(reducers,applyMiddleware(...middleware))