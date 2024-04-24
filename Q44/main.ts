// Define a function with a rest parameter that accepts items arguments representing our sandwich

function makeSandwich(...items: string[] ){
  console.log(`Making a sandwich with the following items: \n`)

  items.forEach(singleitem => console.log("-" + singleitem));

  console.log(`\n Now enjoy sandwich`);
}

// Call the funcion 3 times with 3 diffrent numbers of arguments
makeSandwich("Chicken", "cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Mayo", "Egg", "cheese", "chicken", "lettuce", "tomato")