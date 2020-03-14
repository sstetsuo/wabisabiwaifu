const { Waifu } = require('./index.js');

const seedWaifus = (quantity) => {
  const line = [];
  for (let i = 0; i < quantity; i += 1) {
    line.push(new Waifu({
      name: 'Lisette',
      age: 22,
      height: 167,
      weight: 54,
      hairstyle: 'face framing swept bangs with a tight bun',
      skintone: 'pale',
      cupsize: 'B',
      attribute: 'replicant',
      disposition: 'subservient',
      vice: 'smokes',
    }));
  }
  return line;
};

module.exports = {
  seedWaifus,
};
