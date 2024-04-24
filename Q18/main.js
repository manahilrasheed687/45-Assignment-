// print a array of countries and print its original order
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesToVisit = ["china", "Denmark", "Brazil", "Argentina"];
console.log("original order:", countriesToVisit);
// print the array in alphabatical order without modifyingt the actual array list
console.log("Alphabetical order:", __spreadArray([], countriesToVisit, true).sort());
//show that the array is stiil in its original order 
console.log("still in original order:", countriesToVisit);
// Print the array in reverse order without modifying the actual array list
console.log("Reverse order:", __spreadArray([], countriesToVisit, true).reverse());
//show that the array is stiil in its original order 
console.log("still in original order:", countriesToVisit);
// we have change gthe original array order Now
console.log("Original array reverse;", countriesToVisit.reverse());
// print the arrayu to show thatits back to original order
console.log("Back to original order:", countriesToVisit.reverse());
// print the array to show that its order has been changed in alphabatical order now 
console.log("sorted in alphabatical order:", countriesToVisit.sort());
// we have changed again the original array order now in reverse order again
