import React, { Component } from 'react';
import { connect } from 'react-redux'
import TodolistUI from './ui'
import axios from 'axios'

class Todolist extends Component {
  componentDidMount(){
    axios.get('localhost:9090/api/getlist')
    .then(res => {
      console.log(res)
    })
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