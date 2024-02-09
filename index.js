require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db.js');

connectDB();

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log('SERVIDOR DESPLEGADO en http://localhost:3000');
});
