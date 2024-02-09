const {
  postInstruments,
  getInstruments,
} = require('../controllers/instruments');
const Instrument = require('../models/instruments');

const instrumentRoutes = require('express').Router();

instrumentRoutes.post('/', postInstruments);
instrumentRoutes.post('/', getInstruments);

module.exports = instrumentRoutes;
1;
