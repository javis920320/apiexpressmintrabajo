const mongoose = require('mongoose');

const funcionarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellidos: {
    type: String,
    required: true
  },
  identificacion: {
    type: String,
    required: true,
    unique: true
  },
  cargo: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  extension: {
    type: String,
    required: false
  },
  estado: {
    type: String,
    enum: ['activo', 'inactivo'],
    default: 'activo'
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  }
});

const Funcionario = mongoose.model('Funcionario', funcionarioSchema);

module.exports = Funcionario;
