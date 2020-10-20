const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const generateRandomFrom = (arr) => {
  const val = arr[generateRandomNum(0, arr.length - 1)];
  return val;
};

module.exports = {
  generateRandomNum,
  generateRandomFrom,
};
