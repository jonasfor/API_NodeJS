const mongoose = require('../database/index');

const stationSchema = new mongoose.Schema({
  _id : {
    type: Number,
  },
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

},{_id : false});

stationSchema.methods.toJSON = function() {
  var obj = this.toObject()
  delete obj._id
  return obj
}

const station = mongoose.model('station', stationSchema, 'stations  ');
module.exports = station;
