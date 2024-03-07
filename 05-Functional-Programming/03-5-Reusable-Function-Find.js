// Find
// mencari apakah di dalam deretan nilai terdapat nilai yang sesuai
// dengan kriteria yang kita definisikan pada callback function.

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

const findSpecificStudent = students.find((student) => student.name === "Abdul");
console.log(findSpecificStudent); // { name: 'Abdul', score: 70 }
