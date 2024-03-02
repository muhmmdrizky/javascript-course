// variable scope
function multiply(num) {
  total = num * num; // karena ga dikasih  let atau const ototmatis jadi vaiabel global
  return total;
}

let total = 5; // ga akan dieksekusi karena udah didefinisikan di dalam function
let number = multiply(5);
console.log(number);
