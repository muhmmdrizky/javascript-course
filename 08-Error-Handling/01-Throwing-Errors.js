const json = '{"name": "Rony", age": 20}';

try {
  const user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("'name' is required");
  }

  errorCode;

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}
