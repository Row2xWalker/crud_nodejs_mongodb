const express = require('express');
const db = require('./db');
const routes = require('./routes.js');

const app = express();
app.use(express.json());
app.use('/',routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});