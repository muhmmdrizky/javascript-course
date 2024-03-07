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
