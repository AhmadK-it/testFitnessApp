const express = require('express')
const Router = express.Router()

Router
.route('/')
.get((req,res)=>{
    res.json({
        "statusCode": 201,
        "message": 'this is root ! nothing to show',
        "error": false,
        "data":{
            'msg':'this is root ! nothing to show '
        }
    })
})
.post((req,res)=>{
    res.json({
        "statusCode": 201,
        "message": 'this is root ! nothing to show',
        "error": false,
        "data":{
            'msg':'this is root ! nothing to show '
        }
    })

})

Router
.route('/login')
.get((req,res)=>{
    console.log(req)
    res.json({
        "statusCode": 201,
        "message": 'method get',
        "error": false,
        "data":{
            'username': req.body?.email,
            'password': req.body?.password
        }
    })

})
.post((req,res)=>{
    console.log(req)
    res.json({
        "statusCode": 201,
        "message": 'method post',
        "error": false,
        "data":{
            'username': req.body?.email,
            'password': req.body?.password
        }
    })

})

Router
.route('/live')
.get((req,res)=>{
    res.json({
        "statusCode": 201,
        "message": "test get",
        "error": false,
        "data":{
            "name":"test",
            "exercises":[
                {
                    'name':"ex1"
                },
                {
                    'name':"ex2"
                }
            ]
        }
    })

})
.post((req,res)=>{
    res.json({
        "statusCode": 201,
        "message": "test post",
        "error": false,
        "data":{
            "name":"test",
            "exercises":[
                {
                    'name':"ex1"
                },
                {
                    'name':"ex2"
                }
            ]
        }
    })

})

Router
.route('/regester')
.get( (req,res)=>{
    try{
            console.log(req)
            res.json({
            "statusCode": 201,
            "message": 'mehtod get',
            "error": false,
            "data":{
                'username': req.body?.username,
                'password': req.body?.password,
                'email': req.body?.email,
            }
        })
    }catch(e){
        console.log(e)
        res.json({
            'msg':'WTF'
        })
    }
}
)
.post((req,res)=>{
    console.log(req)
    res.json({
        "statusCode": 201,
        "message": 'method post',
        "error": false,
        "data":{
            'username': req.body?.username,
            'password': req.body?.password,
            'email': req.body?.email
        }
    })

})

module.exports = Router