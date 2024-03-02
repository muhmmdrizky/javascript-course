const user = {
  id: 55,
  firstName: "Hendra",
  lastName: "Setiawan",
};

// parameter pakai object
// destructuring dulu
function introduce({ firstName, lastName }) {
  console.log(`Hello, ${firstName} ${lastName}.`);
}

introduce(user);

// Default parameters
function exponentFormula(baseNumber, exponent = 2) {
  const result = baseNumber ** exponent;
  console.log(`${baseNumber} ^ ${exponent} = ${result}`);
}
exponentFormula(5, 5);

// rest parameter
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}
console.log(sum(5, 5, 5, 5));
