import React, { Component } from 'react';
import { connect } from 'react-redux'
import TodolistUI from './ui'
import { getTodolistWithSaga, getTodolist } from './store/actionCreators'

class Todolist extends Component {
  componentDidMount(){
    this.props.initAxiosList()
  }
  render(){
    const { inputValue, datalist, inputVal, addList, rmItemFromList } = this.props
    return (
      <TodolistUI 
        inputValue={inputValue}
        datalist={datalist}
        inputVal={inputVal}
        addList={addList}
        rmItemFromList={rmItemFromList}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue:state.todoListReducer.inputValue,
    datalist:state.todoListReducer.datalist
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initAxiosList(){
      // let action = getTodolist()
      // dispatch(action)

      // with saga
      let action = getTodolistWithSaga()
      dispatch(action)
    },
    inputVal(e){
      let action = {
        type: 'input',
        payload: e.target.value
      }
     dispatch(action)
    },
    addList(inputValue){
      let action = {
        type: 'add',
        payload: inputValue
      }
      dispatch(action)
    },
    rmItemFromList(item){
      let action = {
        type: 'remove',
        payload: item
      }
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Todolist)