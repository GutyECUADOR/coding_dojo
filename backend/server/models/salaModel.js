const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const salaSchema = new Schema({
    titulo:  String,
    descripcion: String,
    usuarios: String,
    isready: Boolean,
    fechaHoraInicio: Number
  });

module.exports = mongoose.model('sala', salaSchema);