// arrow function expression
// dengan parameter
const sayHello = (name) => {
  console.log(`Hello, ${name}.`);
};
sayHello("Rizky");

// tanpa parameter
const sapa = () => {
  console.log("Hallow");
};

sapa();

// fungsi satu baris
const sapaNama = (namaLengkap) => console.log(`Hallo, ${namaLengkap}.`);
sapaNama("Abdul Ahmad");

// return value satu baris ga usah pakai keyword return
const sum = (a, b) => a * b;
console.log(sum(5, 5));
