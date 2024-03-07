// mengecheck apakah semua nilai dari sebuah array sesuai dengan kriteria yang didefinisikan

const scores = [70, 85, 90];
const minimumScore = 65;

const examPassed = scores.every((score) => score >= minimumScore);
console.log(examPassed);
