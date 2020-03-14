/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/wftodo', { useNewUrlParser: true, useUnifiedTopology: true });

const waifuSchema = mongoose.Schema({
  name: String,
  age: Number,
  height: Number,
  weight: Number,
  hairstyle: String,
  skintone: String,
  cupsize: String,
  disposition: String,
  attribute: String,
  vice: String,
});

const Waifu = mongoose.model('Waifu', waifuSchema);

const save = (document, next) => {
  document.save((err) => {
    if (err) {
      console.error(err);
    } else {
      next();
    }
  });
};

const findWaifus = (options, next) => {
  Waifu.find(options, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      next(docs);
    }
  });
};

module.exports = {
  Waifu,
  save,
  findWaifus,
};
