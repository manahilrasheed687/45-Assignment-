var personName = "Manahil Rasheed";
console.log(personName.toLowerCase());
console.log(personName.toLocaleUpperCase());
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
