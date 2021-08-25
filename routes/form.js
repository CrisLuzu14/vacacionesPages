const path= require('path')
const express = require('express')
const rootDir = require('../util/path')

const router=express.Router()

router.get('/add-vacaciones',(req,res,next)=>{//el métod use recibe 3 paramatros req,res,next
    //para enviar información al servidor usamos la función send()
    //res.sendFile(path.join(__dirname,'../','views','add-product.html')) 
    res.sendFile(path.join(rootDir,'views','add-vacaciones.html')) 
} )
router.post('/vacaciones',(req,res,next)=>{
    console.log(req.body)// obtengo los argumentos de la url
    res.redirect('/')
})

module.exports=router