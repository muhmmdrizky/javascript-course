// Bedanya Map dan Object adalah di Map keynya bisa semua tipe data
const capital = new Map([
  ["Jakarta", "Indonesia"],
  ["Kuala Lumpur", "Malaysia"],
  ["London", "England"],
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("Tokyo", "Japan");
console.log(capital);
console.log(capital.get("Tokyo"));
