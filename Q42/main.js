// DEfine the function to show magicians name 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through .mag() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_names = ["Manahil", "Waqas", "Iqra"];
// calling make great function to modify magicains names 
var great_magicians = make_great(magicians_names);
// call show magicains function that show modified list of maggicians
show_magicians(great_magicians);
