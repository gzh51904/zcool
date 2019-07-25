import {createStore} from 'redux';//引入redux

import reducer from './reducer';//引入修改state的逻辑文件

//创建store
let store = createStore(reducer);

export default store;