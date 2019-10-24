const express = require('express');
const local = require('../models/local');
const router = express.Router();

router.post('/premises',(req, res) => {
  try {
    var data = new local(req.body)
    local.findOne({"name" :  req.body.name}, {_id: false, name: true}, (err, obj) => {
      if(obj){
        return res.status(409).send({ error: "Local already exist" });
      }
      if(!obj){
        data.save()
        const loc =  res.json(data) 
      }     
    })
       
  }catch(err){

    return res.status(400).send({ error: "Registration failed" });

  }
});


router.get('/premises',(req, res) => {
  try {
    local.find((err, obj) => {
      
      const loc =  res.json({entries: obj}) 
      
    })
  }catch(err){

    return res.status(400).send({ error: "Registration failed" });

  }
});

module.exports = app => app.use('/v1', router);