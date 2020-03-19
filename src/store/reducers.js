import { combineReducers } from 'redux'
import { reducer as todoListReducer } from '../todolist/store/index'

const reducers = combineReducers({
  todoListReducer
})

export default reducers