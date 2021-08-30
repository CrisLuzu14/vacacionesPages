const mongoose= require('mongoose')

const UsuariosSchema = new mongoose.Schema({
   nombres: String,
   apellidos: String,
   cedula: String,
   correo: String,
   proceso: String,
   subproceso:String,
   puesto:String,
   lugarTrabajo:String,
   remuneracionM:String,
   estado:String,
   idUsuario:Object,
   idSolicitud:Object,

})

module.exports=mongoose.model('usuarios',UsuariosSchema)
