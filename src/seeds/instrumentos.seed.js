const mongoose = require('mongoose');

const Instrument = require('../api/models/instruments');

const instruments = [
  {
    trademark: 'Fender',
    deliveryYear: 2021,
    model: 'Jazz Bass',
    seller: 'Thomann',
  },
  {
    trademark: 'Music Man',
    deliveryYear: 1980,
    model: 'Stringray',
    seller: 'Red Musik',
  },
  {
    trademark: 'Gibson',
    deliveryYear: 1975,
    model: 'Thunderbird',
    seller: 'Thomann',
  },
  {
    trademark: 'Fender',
    deliveryYear: 1962,
    model: 'Stratocaster',
    seller: 'Thomann',
  },
  {
    trademark: 'LTD',
    deliveryYear: 2002,
    model: 'EC-600',
    seller: 'Red Musik',
  },
];

const instrumentsDocuments = instruments.map((ins) => new Instrument(ins));

mongoose
  .connect(
    'mongodb+srv://aaronromeromusic:Rewenclow.1324657980@cluster0.otk092i.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(async () => {
    const allInstrument = await Instrument.find();

    if (allInstrument.length) {
      await Instrument.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Instrument.insertMany(instrumentsDocuments);
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());
