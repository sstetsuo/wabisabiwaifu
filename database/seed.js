const { Waifu } = require('./index.js');
const {
  names,
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

const seedWaifus = (quantity) => {
  const line = [];
  for (let i = 0; i < quantity; i += 1) {
    line.push(new Waifu({
      name: generateRandomFrom(names),
      age: generateRandomNum(18, 40),
      height: generateRandomNum(152, 180),
      weight: generateRandomNum(49, 80),
      hairstyle: `${generateRandomFrom(hairstyleFront)} with ${generateRandomFrom(hairstyleBack)}`,
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
