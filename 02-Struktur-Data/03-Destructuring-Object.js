// Desctructuring Object

const profile = {
  firstName: "Rony",
  lastName: "Parulian",
  age: 22,
  address: {
    country: "Indonesia",
    city: "Jakarta",
  },
};

const { firstName, lastName, age, address } = profile;
console.log(firstName, lastName, age, address);

const product = {
  name: "Iphone",
  brand: "Apple",
  price: 10000000,
};

// Default Value
const { name, brand, price, color = "Black" } = product;
console.log(color);

// Assigning to Different Local Variable Names
const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;
console.log(localFirstName, localLastName, localAge);
