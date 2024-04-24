// creating a array
var userName = ["Mahad", "Ali", "zeeshan", "Admin", "Usman"];
// using ForEach loop on array
userName.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hello ".concat(oneuser, " would you like to see astatus report?"));
    }
    else
        [
            console.log("Hello ".concat(oneuser, " thankyou for logging in again."))
        ];
});
