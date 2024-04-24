// Array of current user 
var current_Users = ["Usman", "Ali", "Areeba", "Zain", "Osama"];
// Array of nre users
var new_User = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"];
// loop through new_user to check for usernames avaibility
new_User.forEach(function (new_one_user) {
    // Making a condition for username already exits and save in our_condition variable
    var our_condition = current_Users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Diffent message using If_else statments
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
