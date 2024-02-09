const Instrument = require('../models/instruments');

// Create

const postInstruments = async (req, res, next) => {
  try {
    const newInstruments = new Instrument(req.body);

    const instrumentSaved = await newInstruments.save();

    return res.status(201).json(instrumentSaved);
  } catch (error) {
    return res.status(400).json('Ha fallado la petición');
  }
};

// Read
const getInstruments = async (req, res, next) => {
  try {
    const allInstrumentss = await Instrument.find();

    return res.status(200).json(allInstrumentss);
  } catch (error) {
    return res.status(400).json('Ha fallado la petición');
  }
};

module.exports = { postInstruments, getInstruments };
