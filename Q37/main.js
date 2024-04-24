// Making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love Typescript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
// calling a function with by default value
make_shirt();
// calling a function now with medium size and default message
make_shirt("Medium");
// calling a function now withsmall size and also diffrent print message
make_shirt("small", "I love javascript");
