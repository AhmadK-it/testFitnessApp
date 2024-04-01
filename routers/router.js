const express = require('express')
const Router = express.Router()

const exercises = [
    'squats',
    'something',
    'something else',
    'last element', 
    'do not push it too far', 
    'one more and the server will return no data'
]
const instructions = [
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam modi eius quaerat.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus et! Quod aperiam vitae officia distinctio.',
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam consectetur minus ipsum incidunt voluptas non! Iure ab ipsum nostrum nulla.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus et! Quod aperiam vitae officia distinctio.',
    'Lorem ipsum dolor sit amet.'
]

const muscle = [
    'muscle1',
    'muscle2',
    'muscle3',
    'muscle4',
    'muscle5',
    'muscle6'
]

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
        "statusCode": res.status(403),
        "message": "test get",
        "error": false,
        "data":'stop using me | This is old | contact dev team plz'
        
    })

})
.post((req,res)=>{
    res.json({
        "statusCode": res.status(403),
        "message": "test post",
        "error": false,
        "data":'stop using me | This is old | contact dev team plz'
    })

})


Router
.route('/exercises/list')
.get((req,res)=>{
    res.json({
        "statusCode": 201,
        "message": "test get",
        "error": false,
        "data":[
            {
                "name":"Group1",
                "exercises":[
                    {
                        'name':exercises[0],
                        'id': 1
                    },
                    {
                        'name': exercises[1],
                        'id': 2
                    }
            ]}
            ,
            {
                "name":"Group2",
                "exercises":[
                    {
                        'name':exercises[0],
                        'id': 1
                    },
                    {
                        'name':exercises[1],
                        'id': 2
                    }
                    ,
                    {
                        'name':exercises[2],
                        'id': 3
                    },
                    {
                        'name':exercises[3],
                        'id': 4
                    }
            ]},
            {
                "name":"Group3",
                "exercises":[
                    {
                        'name':exercises[2],
                        'id': 3
                    },
                    {
                        'name':exercises[5],
                        'id': 6
                    }
                    ,
                    {
                        'name':exercises[3],
                        'id': 4
                    }
            ]}
        ]
        
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
.route('/exercises/details/:id')
.get( (req,res)=>{
    try{
            console.log(req.params.id)
            const Id = req.params.id - 1
            res.json({
            "statusCode": 201,
            "message": 'mehtod get',
            "error": false,
            "data":{
                "id": Id, 
                "name": exercises[Id],
                "instructions": instructions[Id],
                "targetedMuscle": muscle[Id]
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
                "id": req.params.id, 
                "name": "squats",
                "instructions": "bla bla bla.",
                "targetedMuscle": "muscle "
        }
    })

})

Router
.route('/media')
.get( (req,res)=>{
    try{
        res.send('<img src="../public/assets/img1.jpg" alt="GYM img" >')
    }catch(e){
        console.log(e)
        res.json({
            'msg':"didn't working"
        })
    }
}
)
.post((req,res)=>{
    console.log(req)
    try{
        res.send('<img src="../img1.jpg" alt="GYM img" >')
    }catch(e){
        console.log(e)
        res.json({
            'msg':"didn't working"
        })
    }

})

module.exports = Router
