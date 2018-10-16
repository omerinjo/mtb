import { createStore, applyMiddleware,compose  } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import AllReducers from './allreducers'

const midleWare = applyMiddleware(thunk,logger)

const store = createStore(AllReducers , midleWare)

export default store