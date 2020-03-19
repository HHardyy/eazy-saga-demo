import { takeEvery, put } from 'redux-saga/effects'
import { SAGAGETLIST } from '../todolist/store/actionTypes'
import { getlistAction } from '../todolist/store/actionCreators'
import axios from 'axios'
// generator
function* saga(){
  yield takeEvery(SAGAGETLIST, getlist)
}

function* getlist(){
  const res = yield axios.get('http://localhost:9090/api/getlist')
  let action = getlistAction(res.data.data.list)
  yield put(action)
}

export default saga