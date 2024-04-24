// Define the funstion to show magician name

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name))
}

// function to make magicians great through .mag() it will modify array

function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`)
}

// Define an array of magicians name 
let magicians_names = ["Manahil", "Waqas", "Iqra"]

// Making a copy of original array through, slice() function

let copy_magicians_names = magicians_names.slice()

// Modified the copied array to include "The great" with their names 
let  copy_great_magicians =  make_great(copy_magicians_names);

//show both arrays original and copied

// original
console.log("\nOriginal array")
show_magicians(magicians_names);


// copied
console.log("\nCopied array")
show_magicians(copy_great_magicians);

