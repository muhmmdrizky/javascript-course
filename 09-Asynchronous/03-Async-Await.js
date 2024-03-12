async function getData() {
  let totalClassA = new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve(30);
    }, 2000);
  });

  let totalClassB = new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve(50);
    }, 2000);
  });

  let total = (await totalClassA) + (await totalClassB);
  console.log(total);
}

getData();
