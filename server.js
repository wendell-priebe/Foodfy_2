const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

nunjucks.configure('views',{
    express:server,
    noCache:true,
    autoescape:false
})

server
    .use(express.static('public'))
    .set('view engine','njk')
// paginas do server
    .get('/',function(req,res){
        return res.render('index')
    })
    .get('/about',function(req,res){
        return res.render('about')
    })
    .get('/recipes',function(req,res){
        return res.render('recipes')
    })
// porta do server
    .listen(5500,function(){
        console.log('server is runnig door:5500')
    })