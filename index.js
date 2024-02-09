require('dotenv').config();
const express = require('express');

const app = express();

connectDB();

app.use(express.json());

app.listen(3000, () => {
  console.log('SERVIDOR DESPLEGADO en http://localhost:3000');
});
