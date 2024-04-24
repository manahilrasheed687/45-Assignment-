// Creating a array with 5 values
var userNames = ["Mahad", "Ali", "Zeeshan", "Admin", "usman"];
// Remove all values from our array Now our array is empty 
userNames = [];
// If statment for chjecking length of our array is empty?
if (userNames.length === 0) {
    console.log("Your array in empty We need to find some users!");
}
else {
    // If array in not empty use Foreach loop on array
    userNames.forEach(function (oneuser) {
        if (oneuser === "Admin") {
            console.log("Hello ".concat(oneuser, " would you like to see astatus report?"));
        }
        else
            [
                console.log("Hello ".concat(oneuser, " thankyou for logging in again."))
            ];
    });
}
