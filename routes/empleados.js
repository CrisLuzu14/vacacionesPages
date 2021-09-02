//const path= require('path')
const express = require('express')
//const rootDir = require('../util/path')

const router=express.Router()
const Usuarios=require('../model/usuariosModel')
let user=null;
router.post('/empleados',async (req,res,next)=>{//el métod use recibe 3 paramatros req,res,next
    //para enviar información al servidor usamos la función send()
    //res.sendFile(path.join(__dirname,'../','views','add-product.html')) 
   
    console.log(req.body.user)

        const usu =await Usuarios.find()
        res.render('menu',{'usu':usu})

} )
router.get('/empleados2',async(req,res,next)=>{
    const usu =await Usuarios.find()
    //console.log(usu)
                res.render('menu',{'usu':usu})   
} )
router.get('/gestion-empleado',(req,res,next)=>{
    res.render('formEmpleado',)   
} )
router.get('/gestion-empleado/:id',async(req,res,next)=>{
    const id =req.params.id
    
    const usu =await Usuarios.find({_id:id})
    console.log(usu)
                res.render('formEmpleado',{'usu':usu})   
} )
router.get('/consulta',async(req,res,next)=>{
  
const usu =await Usuarios.find({})
                res.send(usu)
})
module.exports=router