let guestList = ["Hamza","Manahil","Ayesha","Iqra"];

let dontCame = guestList[0];

console.log(dontCame, "Nai ah sakta");

guestList.splice(0, 0, "Amirr");

guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));