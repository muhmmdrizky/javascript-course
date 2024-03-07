// Reduce

const prices = [10, 30, 20, 40, 50];

const pricesReduced = prices.reduce(function (previeousValue, currentValue) {
  console.log(`${previeousValue} + ${currentValue}`);
  return previeousValue + currentValue;
}, 50);

console.log(pricesReduced);

const students = [
  {
    name: "Abdul",
    score: 70,
  },
  {
    name: "Ahmad",
    score: 50,
  },
  {
    name: "Habibi",
    score: 60,
  },
  {
    name: "Fadil",
    score: 80,
  },
];
const totalScore = students.reduce((prev, curr) => prev + curr.score, 0);
console.log(`Total score: ${totalScore}`);

const avgScore = totalScore / students.length;
console.log(avgScore);
