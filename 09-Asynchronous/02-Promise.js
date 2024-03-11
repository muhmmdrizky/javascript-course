// Promise itu janju
// Resolve -> ketika janji ditepati
// Rejected -> ketika janji tidak ditepati
{
  let promise = new Promise(function (resolve, rejected) {
    // coding here
    let result = true;
    result ? resolve("Sukses") : rejected("Gagal");
  });

  // promise.then(
  //   (result) => console.log(`Ini adalah resolve: ${result}`),
  //   (error) => console.log(`Ini adalah rejected: ${error}`)
  // );

  promise.then((result) => console.log(`Ini adalah resolve: ${result}`)).catch((error) => console.log(`Ini adalah rejected: ${error}`));
}

{
  // Chainder Promise
  let promise = new Promise(function (resolve, rejected) {
    resolve(5);
  });

  promise
    .then((result) => {
      console.log(result);
      return result * 2;
    })
    .then((result) => {
      console.log(result);
      return result * 5;
    });
}
