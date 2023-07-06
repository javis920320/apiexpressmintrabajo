const mongoose = require('mongoose');

const equipoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    enum: ['computadora', 'teléfono'],
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  },
  numeroSerie: {
    type: String,
    required: true,
    unique: true
  },
  descripcion: {
    type: String
  },
  fechaCompra: {
    type: Date,
    required: true
  },
  precioCompra: {
    type: Number,
    required: true
  },
  estado: {
    type: String,
    enum: ['disponible', 'prestado', 'reparación'],
    default: 'disponible'
  },
  funcionario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Funcionario'
  }
});

const Equipo = mongoose.model('Equipo', equipoSchema);

module.exports = Equipo;
