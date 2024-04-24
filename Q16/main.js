// creating a guest list array
var guestList = ["Hamza", "Ayesha", "Nameer", "Manahil"];
// Making variable for those guest who cant come 
var dontCame = guestList[0];
// print the name of guest who cant came
console.log(dontCame, "Nai ahh sakty han");
// add or remove values from guest list Array
guestList.splice(0, 1, "Amir");
// Message print for Bigger Table 
console.log("Good news ! We have found a Bigger Table for Dinner.");
// Adding a new guest at starting index of array
guestList.unshift("Ali");
//Adding a new value at ending index of array
guestList.push("zain");
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index array
guestList.splice(middleIndex, 0, "osama");
// print mess of updated list
console.log("Updated list of our guest");
// sending a invitation mess to our guest one by one with dears name
guestList.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to dinner with me")); });
