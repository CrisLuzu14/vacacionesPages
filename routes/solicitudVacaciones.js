//const path= require('path')
const express = require('express')
//const rootDir = require('../util/path')

const router=express.Router()
let user=null;
router.get('/solicitud_vacaciones/:iduser',(req,res,next)=>{//el métod use recibe 3 paramatros req,res,next
    //para enviar información al servidor usamos la función send()
    //res.sendFile(path.join(__dirname,'../','views','add-product.html')) 
    console.log(req.params.iduser)
    user=req.params.iduser
        if(user==='stalin') {
                res.render('vacaciones',{'usuario':user})
                //res.sendFile(path.join(rootDir,'views','add-vacaciones.html')) 
        }else{
            res.redirect('/')
        }
   
} )
 
module.exports=router