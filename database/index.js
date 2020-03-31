/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/wabisabiwaifu', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB:wabisabiwaifu...');
});

const waifuSchema = mongoose.Schema({
  name: String,
  age: Number,
  height: String,
  weight: Number,
  eyeColor: String,
  hairColor: String,
  hairstyle: String,
  skintone: String,
  cupsize: String,
  disposition: String,
  attribute: String,
  vice: String,
});

const Waifu = mongoose.model('Waifu', waifuSchema);

const save = (document) => {
  document.save();
};

const findWaifus = (options) => {
  Waifu.find(options);
};

module.exports = {
  Waifu,
  save,
  findWaifus,
};
