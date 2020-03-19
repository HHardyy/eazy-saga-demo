const initState = {
  inputValue: 'write something',
  datalist:[
    '早8点开晨会，分配今天的任务',
    '早9点和项目经理开需求沟通会',
    '开始写代码'
  ]
}

export default (state=initState, action) => {
  switch(action.type){
    case 'input':
      return {...state, inputValue: action.payload}
    case 'add':
      let _addlist = [...state.datalist]
      _addlist.unshift(action.payload)
      return {...state, datalist: _addlist}
    case 'remove':
      let _rmlist = [...state.datalist]
      if(_rmlist.indexOf(action.payload)>-1){
        _rmlist.splice(_rmlist.indexOf(action.payload), 1)
      }
      return {...state, datalist: _rmlist}  
    case 'clear':
      return {...state, inputValue:action.payload}
    default:
      return state
  }
}