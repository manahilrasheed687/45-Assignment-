// Define the funstion to show magician name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through .mag() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians name 
var magicians_names = ["Manahil", "Waqas", "Iqra"];
// Making a copy of original array through, slice() function
var copy_magicians_names = magicians_names.slice();
// Modified the copied array to include "The great" with their names 
var copy_great_magicians = make_great(copy_magicians_names);
//show both arrays original and copied
// original
console.log("\nOriginal array");
show_magicians(magicians_names);
// copied
console.log("\nCopied array");
show_magicians(copy_great_magicians);
