const express = require('express');
const station = require('../models/station');
const router = express.Router();

router.post('/station',(req, res) => {
  try {
    var data = new station(req.body)
    station.findOne({"name" :  req.body.name}, {_id: false, name: true}, (err, obj) => {
      if(obj){
        return res.status(409).send({ error: "station already exist" });
      }
      if(!obj){
        data.save()
        const sta =  res.json(data) 
      }     
    })
       
  }catch(err){

    return res.status(400).send({ error: "Registration failed" });

  }
});


router.get('/station',(req, res) => {
  try {
    station.find((err, obj) => {
      
      const loc =  res.json({entries: obj}) 
      
    })
  }catch(err){

    return res.status(400).send({ error: "Registration failed" });

  }
});

module.exports = app => app.use('/v1', router);