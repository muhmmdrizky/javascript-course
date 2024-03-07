// Some
// Menghasilkan nilai boolean
// Nilai yang dihasilkan didasarkan pada pernyataan apakah ada setidaknya satu
// dari deretan nilai dalam array tersebut lolos berdasarkan kriteria yang kita tuliskan dalam callback function.
const arr = [2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.some((a) => a % 2 === 0);
console.log(result); // true karena di antara nilai di atas ada yang genap
