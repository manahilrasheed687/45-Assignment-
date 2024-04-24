
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name))
}

// function to make magicians great through .mag() it will modify array

function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`)
}


let magicians_names = ["Manahil", "Waqas", "Iqra"]

// calling make great function to modify magicains names 

 let great_magicians = make_great(magicians_names);

// call show magicains function that show modified list of maggicians

 show_magicians(great_magicians)