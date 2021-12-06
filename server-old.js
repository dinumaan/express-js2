const express = require('express')

const app = express()

function m1 (req, res, next){
    console.log('pre middleware 1')
    next();
    console.log('post middleware 1')
}
function m2 (req, res, next){
    console.log('pre middleware 2')
    next();
    console.log('post middlware 2')
}
function m3 (req, res, next){
    console.log('pre middleware 3')
    next();
    console.log('post middleware 3')
}
function m4 (req, res, next){
    console.log('pre middleware 4')
    next();
    console.log('post middleware 4')
}
function m5 (req, res, next){
    console.log('pre middleware 5')
    next();
    console.log('post middleware 5')
}

app.get('/hello', m3, m2, (req, res) => {
    console.log("pre send")
    res.send("Hello World")
    console.log("post send")
})
app.listen(3000, ()=>{
    console.log("Server started")
})