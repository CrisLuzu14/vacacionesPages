const path = require('path');
const express= require('express');//importa la libreria express
const app =express();//llamas al metodo express
const formRoute= require('./routes/form')
const vacacionesRoute=require('./routes/vacaciones')
app.use(express.urlencoded({extended:true})) //sirve para poder tomar los argumentos del get o post
app.use(formRoute)
app.use(vacacionesRoute)
app.use((req,res,next)=>{
   
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
app.listen(3000)//de esta manera queda mas simple y ya no se necesita utilizar el require('http')
// npm init -f
// npm install --save express
// npm install --save-dev nodemon
// agregar script package.json "start":"nodemon app.js"
// pasos crear Server
// importar librería express const express= require('express');
// metodo que esta pendiendo cuando se llama al servidor app.listen(3000) va al final
// llamar al método const app =express();
// si se necesita para tomar los argumentos app.use(express.urlencoded({extended:true}))
// gestionar rutas app.use('/ruta',(req,res,next)=>{})
// next() funciona para dar paso al siguiente método que sigue en el código
// obtener argumentos req.body req.body.nombreDelArgumento
// redireccionar paginas o ruts con res.redirect('/nombreRutas')
// para enviar la respuesta del server se usa send()  res.send('<h1>hello from server nodejs!</h1>') 
