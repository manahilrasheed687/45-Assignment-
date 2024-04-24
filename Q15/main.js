var guestList = ["Hamza", "Manahil", "Ayesha", "Iqra"];
var dontCame = guestList[0];
console.log(dontCame, "Nai ah sakta");
guestList.splice(0, 0, "Amirr");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me?")); });
