const toFeet = (inches) => {
  const numFeet = Math.floor(inches / 12);
  const remainingInches = inches % 12;

  return `${numFeet}'-${remainingInches}"`;
};

module.exports = toFeet;
