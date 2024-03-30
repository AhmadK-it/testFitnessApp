const express = require('express')
const app = express()
const router = require('./routers/router.js')
const hostname = process.env.HOSTNAME || '127.0.0.1'
const port = process.env.PORT || 3000
app.use(router)


app.listen(port, hostname,()=>{
  console.log(`server is runing on : http://${hostname}:${port}/`)
})
