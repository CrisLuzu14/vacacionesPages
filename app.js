<<<<<<< HEAD
const morgan = require('morgan');
const exphbs = require('express-handlebars');
=======

//import libreries
>>>>>>> dev/soriano
const path = require('path');
const express= require('express');//importa la libreria express
const amdinRoute= require('./routes/admin')
const empleadosRoute=require('./routes/empleados')
const solicitudRoute=require('./routes/solicitudVacaciones')
const mongoose = require('mongoose')


const app =express();//llamas al metodo express
<<<<<<< HEAD
const homeRoute= require('./hola.js/home')
const vacacionesRoute=require('./hola.js/vacaciones');
const { use } = require('./hola.js/home');
app.use(express.urlencoded({extended:true})) //sirve para poder tomar los argumentos del get o post
app.use(homeRoute)
app.use(vacacionesRoute)
app.use(morgan)('dev');
app.use(express.urlencoded({extend: false}))
app.use((req,res,next)=>{
    
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
=======

//connection DataBase MongoDB
const mongooseUrl='mongodb+srv://TalentHuman:TalentHuman@vacaciones.qspdv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongooseUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
mongoose.connection.on('connected',()=>{//MUESTRA MENSAJE SI CONNECCTION FUE OK
    console.log('mongoose connect')
})
//SETTING
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//ROUTES
app.use(express.urlencoded({extended:true})) //sirve para poder tomar los argumentos del get o post
app.use(amdinRoute)
app.use(empleadosRoute)
app.use(solicitudRoute)

//PAGE NOT FOUND
app.use((req,res,next)=>{
    res.status(400).render('404')
    //res.status(404).sendFile(path.join(__dirname,'views','404.html'))
>>>>>>> dev/soriano
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
