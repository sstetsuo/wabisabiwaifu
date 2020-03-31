/* eslint-disable no-console */
const mongoose = require('mongoose');
const { Waifu, save, findWaifus } = require('./index.js');
const {
  names,
  eyeColor,
  hairColor,
  hairstyleFront,
  hairstyleBack,
  skintone,
  cupsize,
  attribute,
  disposition,
  vice,
  generateRandomNum,
  generateRandomFrom,
} = require('./pool.js');

// need relational pools for fewer contraditions

const toFeet = (inches) => {
  const numFeet = Math.floor(inches / 12);
  const remainingInches = inches % 12;

  return `${numFeet}'-${remainingInches}"`;
};

const randomWaifu = (quantity) => {
  const line = [];
  for (let i = 0; i < quantity; i += 1) {
    line.push(new Waifu({
      name: generateRandomFrom(names),
      age: generateRandomNum(18, 40),
      height: toFeet(generateRandomNum(60, 72)), // need curve based probability
      weight: generateRandomNum(110, 150), // need curve based probability
      eyeColor: generateRandomFrom(eyeColor),
      hairColor: generateRandomFrom(hairColor),
      hairstyle: `${generateRandomFrom(hairstyleFront)} and ${generateRandomFrom(hairstyleBack)}`,
      skintone: generateRandomFrom(skintone),
      cupsize: generateRandomFrom(cupsize),
      disposition: generateRandomFrom(disposition),
      attribute: generateRandomFrom(attribute),
      vice: generateRandomFrom(vice),
    }));
  }
  return line;
};

findWaifus({})
  .then((docs) => {
    const quantity = 1000 - docs.length;
    if (docs.length >= 0 && docs.length < 1000) {
      const data = randomWaifu(quantity);
      const saves = data.map((waifu) => save(waifu));
      Promise.all(saves)
        .then(() => {
          console.log(`Database is seeded with ${quantity} waifus`);
          mongoose.connection.close();
        });
    } else {
      console.log('Database contains sufficient seeded data');
      mongoose.connection.close();
    }
  });

module.exports = {
  randomWaifu,
};
