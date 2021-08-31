//const path= require('path')
const express = require('express')
//const rootDir = require('../util/path')

const router=express.Router()
const Usuarios=require('../model/usuariosModel')
let user=null;
router.get('/solicitud_vacaciones/:id',async(req,res,next)=>{//el métod use recibe 3 paramatros req,res,next
    //para enviar información al servidor usamos la función send()
    //res.sendFile(path.join(__dirname,'../','views','add-product.html')) 
    
    let id=req.params.id
    const usu = await Usuarios.find({nombres:"stalin david"})
    console.log(usu)
    //user=req.params.iduser
                res.render('solicitud',{'usu':usu})
} )
 
module.exports=router