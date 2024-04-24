// Making a function

function make_shirt (size: string = "Large", printMessage: string = "I love Typescript"){
  console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt`)
}


// calling a function with by default value
make_shirt();

// calling a function now with medium size and default message
make_shirt("Medium")

// calling a function now withsmall size and also diffrent print message
make_shirt("small","I love javascript")