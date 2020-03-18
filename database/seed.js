const { Waifu } = require('./index.js');
const {
  names,
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

const seedWaifus = (quantity) => {
  const line = [];
  for (let i = 0; i < quantity; i += 1) {
    line.push(new Waifu({
      name: generateRandomFrom(names),
      age: generateRandomNum(18, 40),
      height: toFeet(generateRandomNum(60, 72)), // need curve based probability
      weight: generateRandomNum(110, 160), // need curve based probability
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

module.exports = {
  seedWaifus,
};
