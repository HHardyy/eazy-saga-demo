const express = require('express')

const app = express()
const router = express.Router()
const port = 9090

//设置跨域访问
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
}); 

router.get('/api/getlist', (req,res) => {
  console.log(req.query)
  res.json({
    data:{
      list: [
        '早8点开晨会，分配今天的任务',
        '早9点和项目经理开需求沟通会',
        '开始写代码',
        '王者上荣耀之后不用打了'
      ]
    }
  })
  res.end()
})

app.use(router)

app.listen(port, ()=> {
  console.log('service start at localhost'+port)
})