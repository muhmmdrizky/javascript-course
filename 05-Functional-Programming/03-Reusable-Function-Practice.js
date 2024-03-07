{
  // ---------- FILTER ---------- //

  // Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
  function fiveAndGreaterOnly(arr) {
    return arr.filter((number) => number >= 5);
  }
  // test
  console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

  // Given an array of numbers, return a new array that only includes the even numbers.
  function evensOnly(arr) {
    return arr.filter((number) => number % 2 === 0);
  }
  console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

  // Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
  function fiveCharactersOrFewerOnly(arr) {
    return arr.filter((char) => char.length <= 5);
  }
  // test
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

  // Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
  function peopleWhoBelongToTheIlluminati(arr) {
    return arr.filter((people) => (people.member ? true : false));
  }
  // test
  console.log(
    peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true },
    ])
  );
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]

  //Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
  function ofAge(arr) {
    return arr.filter((people) => people.age > 18);
  }
  // test
  console.log(
    ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 },
    ])
  );
  // =>
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]
}

{
  // ---------- MAP ---------- //
}
// Make an array of numbers that are doubles of the first array
function doubleNumbers(arr) {
  return arr.map((a) => a * 2);
}
console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// Take an array of numbers and make them strings
function stringItUp(arr) {
  return arr.map((b) => b.toString());
}
console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// Capitalize each of an array of names
function capitalizeNames(arr) {
  return arr.map((c) => c.toUpperCase());
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// Make an array of strings of the names
function namesOnly(arr) {
  return arr.map((d) => d.name);
}

console.log(
  namesOnly([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
