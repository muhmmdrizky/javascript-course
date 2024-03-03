const car = {
  // properties
  brand: "Avanza",
  color: "Black",
  maxSpeed: 300,
  chassisNumber: "F-2",
  drive: () => {
    console.log("Driving");
  },
  reverse: () => {
    console.log("Reversing");
  },
  turn: () => {
    console.log("Turning");
  },
};

console.log(car.brand);
console.log(car.color);
console.log(car.maxSpeed);
console.log(car.chassisNumber);
car.drive();
car.reverse();
car.turn();
