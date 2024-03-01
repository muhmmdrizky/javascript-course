// Function declaration
{
  function greetings(name, language) {
    if (language === "indonesia") {
      console.log(`Halo, ${name}, Selamat Pagi.`);
    } else if (language === "inggris") {
      console.log(`Hello, ${name}, Good Morning.`);
    }
  }
  greetings("Rizky", "indonesia");
}

{
  // return value
  function multiply(a, b) {
    return a * b;
  }
  let result = multiply(5, 6);
  console.log(result);
}

// function expression
{
  const greetings = function (name, language) {
    if (language === "indonesia") {
      console.log(`Halo, ${name}, Selamat Pagi.`);
    } else if (language === "inggris") {
      console.log(`Hello, ${name}, Good Morning.`);
    }
  };
  console.log(greetings("Rony", "inggris"));
}
