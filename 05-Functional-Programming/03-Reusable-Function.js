// filter
const fruits = ["Apple", "Mango", "Orange", "Grape", "Guava"];
const filteredFruits = fruits.filter(function (item) {
  return item.length > 5 ? true : false;
});
console.log(filteredFruits);

const students = [
  {
    name: "Muhammad Rizky",
    class: 10,
  },
  {
    name: "Mohammad Ahsan",
    class: 11,
  },
  {
    name: "Hendra Setiawan",
    class: 12,
  },
  {
    name: "Muhammad Rian Ardianto",
    class: 10,
  },
  {
    name: "Fajar Alfian",
    class: 11,
  },
  {
    name: "Jonatan Christie",
    class: 12,
  },
];
const filteredStudents = students.filter(function (std) {
  return std.class == 10 ? true : false;
});
console.log(filteredStudents);

// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
  return arr.filter((number) => number >= 5);
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
  return arr.filter((number) => number % 2 === 0);
}
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
