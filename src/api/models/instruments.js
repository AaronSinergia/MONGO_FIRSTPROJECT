const mongoose = require('mongoose');

const instrumentSchema = new mongoose.Schema(
  {
    trademark: { type: String, required: true },
    type: { type: String, required: true },
    strings: { type: Number, required: true },
    seller: { type: String, required: true },
  },
  {
    timestamps: true, // pinta en que hora se obtiene la info

    collection: 'instruments', // informativo }
  }
); // primer objeto es como van  a ser esos datos y se van a pintar y el, segundo opciones de ese dato

//                         info  schema  nombre coleción
const Instrument = mongoose.model(
  'instruments',
  instrumentSchema,
  'instruments'
);

module.exports = Instrument;
