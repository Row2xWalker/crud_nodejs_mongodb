const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));