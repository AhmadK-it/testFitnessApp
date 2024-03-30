const express = require('express')
const app = express()
const router = require('./routers/router.js')
const port = process.env.PORT || 3000
app.use(router)


app.listen(port,()=>{
  console.log(`server is runing on port : ${port} `)
})
