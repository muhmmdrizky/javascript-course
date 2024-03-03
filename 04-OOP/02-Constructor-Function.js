{
  // Constructor function
  function Car(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }

  Car.prototype.drive = function () {
    console.log(`${this.brand} ${this.color} is driving.`);
  };

  Car.prototype.reverse = function () {
    console.log(`${this.brand} ${this.color} is reversing.`);
  };

  Car.prototype.turn = function () {
    console.log(`${this.brand} ${this.color} is turning.`);
  };

  // Membuat objek mobil dengan constructor function Car
  const car1 = new Car("Honda", "Black", 5000, "H-1");
  const car2 = new Car("Toyota", "White", 2000, "T-2");
  const car3 = new Car("Daihatsu", "Red", 4000, "D-1");

  console.log(car1);
  console.log(car1);
  console.log(car1);

  car1.drive();
  car2.drive();
  car3.drive();
}
