const mongoose = require('../database');

const estacaoSchema = new mongoose.Schema({
  serial: {
    type: String,
    require: true,
  },

  premise_id: {
    type: Number,
    unique: true,
    require: true,
  },

  name:{
    type: String,
    require: true,
  },
});

const estacao = mongoose.model('estacao', estacaoSchema);
module.exports = estacao;
