const mongoose= require('mongoose')

const UsuariosSchema = new mongoose.Schema({
   folio: String,
   norden: String,
   sucursal: String,
   cpago: String,
   fpedido: String,
})