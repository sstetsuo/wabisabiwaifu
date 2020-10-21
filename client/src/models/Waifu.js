const { generateRandomFrom, generateRandomNum } = require('../helpers/generateRandom');
const toFeet = require('../helpers/conversion');
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
} = require('../helpers/pool');

class Waifu {
  constructor() {
    this.name = generateRandomFrom(names);
    this.age = generateRandomNum(18, 40);
    this.height = toFeet(generateRandomNum(60, 72)); // need curve based probability
    this.weight = generateRandomNum(110, 150); // need curve based probability
    this.eyeColor = generateRandomFrom(eyeColor);
    this.hairColor = generateRandomFrom(hairColor);
    this.hairstyle = `${generateRandomFrom(hairstyleFront)} and ${generateRandomFrom(hairstyleBack)}`;
    this.skintone = generateRandomFrom(skintone);
    this.cupsize = generateRandomFrom(cupsize);
    this.disposition = generateRandomFrom(disposition);
    this.attribute = generateRandomFrom(attribute);
    this.vice = generateRandomFrom(vice);
  }
}

module.exports = Waifu;
