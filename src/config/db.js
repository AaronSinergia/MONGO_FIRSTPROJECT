require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('LA BBDD SI FUNCIONA CORRECTAMENTE');
  } catch (error) {
    console.log('¡LA BBDD NO FUNCIONA!');
  }
};

module.exports = { connectDB };
