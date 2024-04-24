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
// inform that only two guest invited for dinner 
console.log("unfortunately , the new dinner table went arrived on time, so i can only invite you two guest to dinner with me ");
// suing while loop to remove guest from the array
while (guestList.length > 2) {
    var removeguest = guestList.pop();
    console.log("sorry ".concat(removeguest, " I cant invite you to dinner"));
}
// sending  a invitation to the last two guest on the list 
console.log("Invitation to the last 2 guest");
guestList.forEach(function (lasttwo) { return console.log(" Lucky ".concat(lasttwo, " you are still invited to dinner")); });
// removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty list", guestList);
