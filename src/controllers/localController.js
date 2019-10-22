const express = require('express');
const local = require('../models/local');
const router = express.Router();

router.post('/premises', async (req, res) => {
  try {
    const loc = await res.json({local: req.body });
    return loc;

  }catch(err){

    return res.status(400).send({ error: "Registration failed" });

  }
});

module.exports = app => app.use('/v1', router);
