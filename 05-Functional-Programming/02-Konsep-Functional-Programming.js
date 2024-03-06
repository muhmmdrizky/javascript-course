// Pure function
const hitungLuasLingkaran = (jariJari) => {
  return 3.14 * (jariJari * jariJari);
};
console.log(hitungLuasLingkaran(5));

const createPersonWithAge = (age, person) => {
  return { ...person, age };
};

const person = {
  name: "Abdul",
};

const newPerson = createPersonWithAge(20, person);
console.log({ person, newPerson });

// Immutability
// Artinya sebuah object tidak boleh diubah setelah object tersebut dibuat
const names = ["Rojak", "Rojali", "Rohaye", "Rohana"];
const newNamesWithExcMark = names.map((name) => `${name}`);
console.log({ names, newNamesWithExcMark }); // array lama ga di-override, tapi bikin array baru

// Jika ingin mengubah nilai dari object
const user = {
  firstName: "Muhammad",
  lastName: "Rizki",
};

const createUserNewWithLastName = (newLastName, user) => {
  return { ...user, lastName: newLastName };
};

const newUser = createUserNewWithLastName("Rizky", user);
console.log(newUser);

// Rekursif
const countDown = (start) => {
  console.log(start);
  if (start > 0) countDown(start - 1);
};
countDown(10);
