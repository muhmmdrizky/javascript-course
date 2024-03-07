const arr = [5, 4, 3, 2, 1];
const newArr = arr.map((a) => a * 2);
console.log(newArr);

{
  const users = [
    {
      name: "Rizky",
      username: "rizkyrizy",
      favColor: "Navy",
    },
    {
      name: "Ahsan",
      username: "ahsanahsan",
      favColor: "Blue",
    },
    {
      name: "Hendra",
      username: "hendrahendra",
      favColor: "Red",
    },
  ];

  const newUsers = users.map(function (user) {
    return {
      name: user.name,
      username: user.username,
    };
  });
  console.log(newUsers);
}

{
  const names = ["Ridwan", "Rony", "Raja"];
  const usersUpper = names.map(function (u) {
    return u.toUpperCase();
  });
  console.log(usersUpper);
}
