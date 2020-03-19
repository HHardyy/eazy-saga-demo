const express = require('express')

const app = express()
const router = express.Router()
const port = 9090

router.get('/getlist', (req,res) => {
  res.json({
    data:{
      list: [
        '早8点开晨会，分配今天的任务',
        '早9点和项目经理开需求沟通会',
        '开始写代码'
      ]
    }
  })
  res.end()
})

app.use(router)

app.listen(port, ()=> {
  console.log('service start at localhost'+port)
})