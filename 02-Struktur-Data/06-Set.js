const numberSet = new Set([1, 2, 1, 3, 4, 5]);

console.log(numberSet); // ga ada duplikat data

// nambah data
numberSet.add(8);
console.log(numberSet);

// hapus data
numberSet.delete(2);
console.log(numberSet);
