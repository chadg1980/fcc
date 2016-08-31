/*
Free Code Camp Drop it
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.
*/
function dropElements(arr, func) {
  //this more succinct solution I learned from Ragase282
  //What I learned was why func(arr[0]) was 0 when I was putting arr[i] and not getting the correct result, 
  //Now I understand each time the array is shifted, the integer at position 0 is changed! 
  //Now I know and knowing is half the battle. 
  var i = 0;
  //loop through elements seeking the true element, breaking when found. Shifting the elements when not found.
  for(i; i < arr.length; i++){
    if(func(arr[0])){
        break;
    }
    else{
        arr.shift();
    }
  }
  return arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3; })     + " return [3, 4]");
console.log(dropElements([0, 1, 0, 1], function(n) {return n ===1; }) + " return [1, 0, 1]") ;
console.log(dropElements([1, 2, 3], function(n) {return n > 0; })     + " return [1, 2, 3]");
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5; })  + " return []");
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3; })  + " return [7, 4]");
console.log(dropElements([1, 2, 3, 4, 9, 2], function(n) {return n > 2; })  + " return [3, 9, 2]");
