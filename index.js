require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db.js');
const instrumentRoutes = require('./src/api/routes/instruments.js');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/v1/instruments', instrumentRoutes);

app.use('*', (req, res, next) => {
  return res.status(404).json('Rute not found');
});

app.listen(3000, () => {
  console.log('SERVIDOR DESPLEGADO en http://localhost:3000');
});
