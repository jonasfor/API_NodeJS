const mongoose = require('../database');

const localSchema = new mongoose.Schema({
  id: {
    type: Number,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    require: true,
    select: false,

  },

  name: {
    type: String,
    require: true,
  },

  address:{
    type: String,
    require: true,
  },
});

const local = mongoose.model('local', localSchema);
module.exports = local;
