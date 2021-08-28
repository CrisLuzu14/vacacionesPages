const mongoose= require('mongoose')

const UsuariosSchema = new mongoose.Schema({
   nombres: String,
   apellidos: String,
   cedula: {
      type:String,
      require:true
   },
   correo: String,
   proceso: String,
   subproceso:String,
   puesto:String,
   lugarTrabajo:String,
   remuneracionM:Double,
   estado:{
      type:String,
      default:'1',
   },
   idUsuario:Object,
   idSolicitud:Object

})
