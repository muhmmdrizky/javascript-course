async function getData() {
  let response = await fetch("https://api.restful-api.dev/objects");
  let data = await response.json();
  console.log(data);
}

getData();
