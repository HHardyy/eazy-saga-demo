import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

const composeEnHancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancers = composeEnHancers(applyMiddleware(thunk))

const store = createStore(
  reducers,
  enhancers
  )

export default store