{
  class Car {
    constructor(brand, color, maxSpeed, chassisNumber) {
      // Ini properti, nilainya diambil dari argumen constructor
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      // default property
      this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
    }
  }

  // object
  const car1 = new Car("Toyota", "Black", 5000);
  const car2 = new Car("Honda", "Navy", 3000);
  const car3 = new Car("Daihatsu", "Red", 4000);

  console.log(car1);
  console.log(car2);
  console.log(car3);
}

{
  // getter dan setter

  class Car {
    constructor(brand, color, maxSpeed, chassisNumber) {
      // Ini properti, nilainya diambil dari argumen constructor
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      // default property
      this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
    }

    get chassisNumber() {
      return this._chassisNumber;
    }

    set chassisNumber(chassisNumber) {
      console.log("You are not allowed to change the chassis number");
    }

    // method
    drive() {
      console.log(`${this.brand} ${this.color} is driving.`);
    }
  }

  // object
  const car1 = new Car("Toyota", "Black", 5000);

  console.log(car1.chassisNumber);
  car1.chassisNumber = "BMW 5";
  console.log(car1.chassisNumber);
  car1.drive();
}
