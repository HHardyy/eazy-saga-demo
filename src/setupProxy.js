// const proxy = require('http-proxy-middleware') // 0.x.x版本的引用方式， 现在这么使用会报proxy is not a function 
const { createProxyMiddleware } = require('http-proxy-middleware'); //1.0.0版本的引用方式

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({
    target:'http://localhost:9090',
    secure:false,
    changeOrigin: true,
    pathRewrite:{
      '^/api':'/api/getlist'
    }
  }))
}
