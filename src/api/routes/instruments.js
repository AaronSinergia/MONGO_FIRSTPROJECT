const {
  postInstruments,
  getInstruments,
  getInsByID,
  getAndModifyInstrument,
  deleteInstrument,
} = require('../controllers/instruments');

const instrumentRoutes = require('express').Router();

instrumentRoutes.post('/', postInstruments);
instrumentRoutes.get('/', getInstruments);
instrumentRoutes.get('/:id', getInsByID);
instrumentRoutes.put('/:id', getAndModifyInstrument);
instrumentRoutes.delete('/:id', deleteInstrument);

module.exports = instrumentRoutes;
