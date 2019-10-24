const mongoose = require('../database/index');

const stationSchema = new mongoose.Schema({

  serial: {
    type: String,
    require: true, 
  },
  premise_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Local',
    require: true,
   
  },
  name:{
    type: String,
    require: true,
  },
  
});



const station = mongoose.model('station', stationSchema, 'stations  ');
module.exports = station;
