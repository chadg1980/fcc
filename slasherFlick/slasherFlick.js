
function slasher(arr, howMany){

    return arr.slice(howMany, arr.length);
}

console.log(slasher([1, 2, 3], 2));
console.log(slasher([1, 2, 3], 0));
console.log(slasher(["burgers", "fries", "shake"], 1));
console.log("end");