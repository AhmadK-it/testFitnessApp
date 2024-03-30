const express = require('express')
const app = express()
const router = require('./routers/router.js')

app.use(router)


app.listen(3000, '127.0.0.1',()=>{
  console.log('server is runing on : http://127.0.0.1:3000/')
})