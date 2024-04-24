// Define a function to create a car object with optional options\...
function creat_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Iniatialize a car object with manufacturer and model 
    var car = {
        manufacturer: manufacturer,
        mode1: model
    };
    // Add additional options to the car object 
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function to crate a car object 
var my_car = creat_car("Toyota", "Corolla", "color: Black", "Sunroof: true");
//print the variable to ensure all the information is stored correctly to the car object
console.log(my_car);
