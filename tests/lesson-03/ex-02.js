// chieu cao cua toi 171
const height = 171;
const lastTwoDigits = height % 100;

const idealWeight = lastTwoDigits * 9 / 10;
const maximumWeight = lastTwoDigits;
const minimumWeight = lastTwoDigits * 8 / 10;

console.log(idealWeight, maximumWeight, minimumWeight) //63.9 71 56.8