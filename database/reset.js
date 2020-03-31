/* eslint-disable no-console */
const mongoose = require('mongoose');
const { Waifu } = require('./index.js');

Waifu.deleteMany({})
  .then(() => {
    console.log('Database has been emptied of all waifus');
    mongoose.connection.close();
  });
