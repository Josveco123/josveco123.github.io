const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const datosSchema = new Schema({
  email: String,
  clave: String,
  whatsapp: Number,
  razonSocial: String,
  ciudad: String,
});

const Datos = mongoose.model('Datos', datosSchema);

module.exports = Datos;