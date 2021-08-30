//const path= require('path')
const express = require('express')
//const rootDir = require('../util/path')

const router=express.Router()
let user=null;
router.post('/empleados',(req,res,next)=>{//el métod use recibe 3 paramatros req,res,next
    //para enviar información al servidor usamos la función send()
    //res.sendFile(path.join(__dirname,'../','views','add-product.html')) 
    console.log(req.body.user)
    user=req.body.user
    let pass=req.body.pass
        if(user==='stalin') {
            if(pass==='123') {
                res.render('empleados',{'usuario':user})
                //res.sendFile(path.join(rootDir,'views','add-vacaciones.html')) 
            }else{
                res.redirect('/')
            }
        }else{
            res.redirect('/')
        }
   
} )
 
module.exports=router