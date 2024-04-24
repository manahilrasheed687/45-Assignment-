// Define a function to create a car object with optional options\...

function creat_car(manufacturer, model, ...options){
    // Iniatialize a car object with manufacturer and model 
    let car = {
        manufacturer: manufacturer,
        mode1: model
    
    };

// Add additional options to the car object 
options.forEach(option => {
    let [key, value] = option.split (":")
    car[key.trim()] = value.trim();
});


return car;

}


// call the function to crate a car object 
let my_car = creat_car("Toyota","Corolla","color: Black", "Sunroof: true");

//print the variable to ensure all the information is stored correctly to the car object
console.log(my_car);