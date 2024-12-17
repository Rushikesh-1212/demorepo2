const express = require('express')
const app = express()

app.get("/",(req, resp)=>{
    resp.send('Express application is started ')
})

app.listen(4000, '0.0.0.0',()=>{
    console.log('server started at port number 4000')
})