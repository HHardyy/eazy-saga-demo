import axios from 'axios'
import { SAGAGETLIST, GETLIST } from './actionTypes'

// with saga
export const getTodolistWithSaga = () => ({
  type: SAGAGETLIST
})

export const getlistAction = (payload) => {
  return {
    type: GETLIST,
    payload
  }
}

export const getTodolist = () => {
  return dispatch => {
    axios.get('http://localhost:9090/api/getlist')
    .then(res => {
      let action = getlistAction(res.data.data.list)
      dispatch(action)
    })
  }
}