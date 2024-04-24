// Define variables
let apple = "apple";
let upperCaseApple = "APPLE"
let  ten = 10;
let twenty = 20;
let fruits = ["Apple","Banana","Orange"]


// Test for equality and inequality with string 
console.log("Is apple is equal to apple");
console.log(apple == "apple")

console.log("Is apple is not equal to apple?");
console.log(apple != "apple");

// Test iusing lowercase function 
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase() == "apple");

console.log("\n Is APPLE is not equal to apple after converting to lowecase?");
console.log(upperCaseApple.toLowerCase() != "apple");

//Numerical tests using 
// equals to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);

// not equal to
console.log("\n Is ten is not equal to twenty");
console.log(ten != twenty);

// greater than
console.log("\n Is ten is greater than zero?");
console.log(ten > 0);


// Less than
console.log("\n Is twenty is less than 10?");
console.log(twenty > 10);


// greater than or equal to 
console.log("\n Is ten is greater than or equal to 5?");
console.log(ten >= 5);

// Less than or equal to
console.log("\ntwenty is less than or equal to 10");
console.log(twenty<= 10)  

// Test usign "and" & "or" operators
// using &&
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty  > 30);

// using || (OR)
console.log("\ntwenty is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);


// using || (OR)
console.log("\ntwenty is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 != 20);


// Test wheather an item is include in array 
console.log("\nIs orange include in my fruits array");
console.log(fruits.includes("Orange"));

// Not include
console.log("\nIs orange not include in my fruits array");
console.log(!fruits.includes("Orange"))
