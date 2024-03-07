// Reduce

const prices = [10, 30, 20, 40, 50];

const pricesReduced = prices.reduce(function (previeousValue, currentValue) {
  console.log(`${previeousValue} + ${currentValue}`);
  return previeousValue + currentValue;
}, 50);

console.log(pricesReduced);
