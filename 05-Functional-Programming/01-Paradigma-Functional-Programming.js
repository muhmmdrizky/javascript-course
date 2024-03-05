/*
      Functional Programming (FP) ditulis dengan gaya deklaratif, 
      fokus ke "what to solve" dibanding "how to solve".
    */

// Gaya Imperatif
{
  const names = ["Abdul", "Ahmad", "Rony", "Reza"];

  const newNamesWithExcMark = [];

  for (let i = 0; i < names.length; i++) {
    newNamesWithExcMark.push(`${names[i]}`);
  }

  console.log(newNamesWithExcMark);
}

// Gaya Deklaratif
{
  const names = ["Rizky", "Rendy", "Sammy", "Idris"];

  // Parameter name merupakan nilai dari setiap elemen dalam names
  const newNamesWithExcMark = names.map((name) => `${name}`);

  console.log(newNamesWithExcMark);
}
