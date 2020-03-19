import React from 'react'
import Todolist from './todolist/index'
import { Provider } from 'react-redux'
import store from './store/index'

function App(){
  return (
    <Provider store={store}>
    <h1>app title</h1>
      <Todolist />
    </Provider>
  )
}

export default App