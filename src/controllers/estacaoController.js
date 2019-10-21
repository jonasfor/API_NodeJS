const express = require('express');
const estacao = require('../models/estacao');
const router = express.Router();

router.post('/premisses', async (req, res) => {
  try {
    const est = await res.json({estacao: req.body });
    return est;

  }catch(err){

    return res.status(400).send({ error: "Registration failed" });

  }
});

module.exports = app => app.use('/v1', router);
