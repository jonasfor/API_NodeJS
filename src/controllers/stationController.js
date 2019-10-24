const express = require('express');
const station = require('../models/station');
const local = require('../models/local');
const router = express.Router();

router.post('/station',(req, res) => {
  try {
    var data = new station(req.body)
    station.findOne({"serial" :  req.body.serial}, {_id: false, name: true}, (err, obj) => {
      
      if(obj){
        return res.send({ error: "station already exist" });
      }
      else{  
        local.findOne({"_id" : req.body.premise_id}, (err, obj) => {
          
          if(obj){  
            data.save()
            const sta =  res.json(data) 
          }
          else{
            return res.send({ error: "Local id does not exist" });
          }
        })  
      }     
    })    
  }catch(err){

    return res.status(400).send({ error: "Registration failed" });

  }
});


router.get('/premises/:premise_id/station',(req, res) => {
  try {    
    station.find({ "premise_id" : req.params.premise_id }, (err, obj) => {
      if(!obj) {
        return res.send({ error: "Local not found" });
      }
      else {
        const loc =  res.json({entries: obj}) 
      }

      
    })
  }catch(err){

    return res.status(400).send({ error: "Registration failed" });

  }
});

module.exports = app => app.use('/v1', router);