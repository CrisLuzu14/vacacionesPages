const path= require('path')
const express = require('express')
const rootDir = require('../util/path')

const router=express.Router()
let user=null;
router.post('/vacaciones-solicitud',(req,res,next)=>{//el métod use recibe 3 paramatros req,res,next
    //para enviar información al servidor usamos la función send()
    //res.sendFile(path.join(__dirname,'../','views','add-product.html')) 
    console.log(req.body.user)
    user=req.body.user
    let pass=req.body.pass
        if(user==='stalin') {
            if(pass==='123') {
                res.sendFile(path.join(rootDir,'views','add-vacaciones.html')) 
            }
        }else{
            res.redirect('/')
        }
   
} )
router.get('/vacaciones',(req,res,next)=>{
    // obtengo los argumentos de la url
    if(user!=null){
        res.sendFile(path.join(rootDir,'views','vacaciones.html'))
    }else{
        res.redirect('/')
    }
})
router.get('/encargo',(req,res,next)=>{
    // obtengo los argumentos de la url
    if(user!=null){
        res.sendFile(path.join(rootDir,'views','encargo.html'))
    }else{
        res.redirect('/')
    }
    
})
router.get('/ingreso',(req,res,next)=>{
    // obtengo los argumentos de la url
    if(user!=null){
        res.sendFile(path.join(rootDir,'views','ingreso.html'))
    }else{
        res.redirect('/')
    }
   
})
router.get('/nombramiento',(req,res,next)=>{
    // obtengo los argumentos de la url
    if(user!=null){
        res.sendFile(path.join(rootDir,'views','nombramiento.html'))
    }else{
        res.redirect('/')
    }
    
})
router.get('/subrogacion',(req,res,next)=>{
    // obtengo los argumentos de la url
    if(user!=null){
        res.sendFile(path.join(rootDir,'views','subrogacion.html'))
    }else{
        res.redirect('/')
    }
   
})

 
module.exports=router