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

// Get all
const getInstruments = async (req, res, next) => {
  try {
    const allInstrumentss = await Instrument.find();

    return res.status(200).json(allInstrumentss);
  } catch (error) {
    return res.status(400).json('Ha fallado la petición');
  }
};

// Get one instrument by id
const getInsByID = async (req, res, next) => {
  const getInsById = req.params.id;
  try {
    const allInstrumentss = await Instrument.findById(getInsById);

    if (allInstrumentss) {
      return res.status(200).json(allInstrumentss);
    } else {
      return res.status(404).json('Ha fallado la petición por ID');
    }
  } catch (error) {
    return res.status(500).json('Ha fallado la petición');
  }
};

// Get one instrument and modify then
const getAndModifyInstrument = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newInstrument = new Instrument(req.body);
    newInstrument._id = id;

    const instrumentUpdated = await Instrument.findByIdAndUpdate(
      id,
      newInstrument,
      { new: true }
    );
    return res.status(200).json(instrumentUpdated);
  } catch (error) {
    return res.status(400).json('Ha fallado la petición');
  }
};

const deleteInstrument = async (req, res, next) => {
  try {
    const { id } = req.params;
    const instrumentDeleted = await Instrument.findByIdAndDelete(id);

    return res.status(200).json(instrumentDeleted);
  } catch (error) {
    return res.status(400).json('Ha fallado la petición');
  }
};

module.exports = {
  postInstruments,
  getInstruments,
  getInsByID,
  getAndModifyInstrument,
  deleteInstrument,
};
