import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import createSagaMiddleWare from 'redux-saga'
// redux-saga需要一个run函数，函数类型是generator
import saga from './sagas'

const sagaMiddleWare = createSagaMiddleWare()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancers = composeEnhancers(applyMiddleware(sagaMiddleWare))

const store = createStore(
  reducers,
  enhancers
)

// saga的run函数传参,run不能放在store引用saga中间件之前
sagaMiddleWare.run(saga)

export default store
















