//const path= require('path')
const express = require('express')
//const rootDir = require('../util/path')
const Usuarios=require('../model/usuariosModel')
const router=express.Router()
let user=null;
router.post('/empleados',async (req,res,next)=>{//el métod use recibe 3 paramatros req,res,next
    //para enviar información al servidor usamos la función send()
    //res.sendFile(path.join(__dirname,'../','views','add-product.html')) 
    console.log(req.body.user)
    user=req.body.user
    let pass=req.body.pass
        if(user==='stalin') {
            if(pass==='123') {
               const usuarios =await Usuarios.find()
                console.log(usuarios)
                res.render('menu',{'usuario':user})
                //res.sendFile(path.join(rootDir,'views','add-vacaciones.html')) 
            }else{
                res.redirect('/')
            }
        }else{
            res.redirect('/')
        }
   
} )
router.get('/empleados2',(req,res,next)=>{
                res.render('menu',{'usuario':user})   
} )
 
module.exports=router