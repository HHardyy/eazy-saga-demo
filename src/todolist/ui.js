import React, { Fragment } from 'react'
import { Input, Button, List } from 'antd'

const TodolistUI = (props) => {
  return (
    <Fragment>
      <div style={{margin:'10px'}}>
      <Input 
      placeholder={props.inputValue} 
      style={{width:'250px', marginRight:'4px'}} 
      onInput={(e)=>{
        props.inputVal(e)
      }}></Input>
      <Button type="primary" onClick={()=>{
        props.addList(props.inputValue)
      }}>增加</Button>
      </div>
      
      <div style={{margin:'10px', width:'316px'}}>
        <List
          bordered
          dataSource={props.datalist}
          renderItem={item=>(
            <List.Item>
              {item} - <span style={{color:'green',cursor:'pointer'}} onClick={()=>{
                props.rmItemFromList(item)
              }}>x</span>
            </List.Item>
          )}
        />
      </div>
    </Fragment>
  )
}

export default TodolistUI