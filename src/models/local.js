const mongoose = require('../database/index');

const localSchema = new mongoose.Schema({

  name: {
    type: String,
    require: true, 
  },

  address:{
    type: String,
    require: true,
  },
  
});



const local = mongoose.model('Local', localSchema, 'locals');
module.exports = local;
