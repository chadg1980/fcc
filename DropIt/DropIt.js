/*
Free Code Camp Drop it
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.
*/
function dropElements(arr, func) {
  // Drop them elements.
  //For the return array, take the array as input, start where k left off and go to the end.
  //Pushing elements onto the new array. 
  function notDropped(thisArr, first, length){
     var newArr = [];
     for(var j = first; j < length; j++){
        newArr.push(thisArr[j]);
     }
     return newArr;
  }
 //i for iteration
  var i = 0;
  //k for counting where to start the new array
  var k = 0;
  //empty array for when there is nothing to return 
  var emp = [];
  //loop through elements seeking the true element, breaking when found.
  for(i; i < arr.length; i++){
        if(func(arr[i])){
            break;
        }
        k++;

  }
  if(k == arr.length){
    return emp;
  }
  

  return notDropped(arr, k, arr.length);
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3; })     + " return [3, 4]");
console.log(dropElements([0, 1, 0, 1], function(n) {return n ===1; }) + " return [1, 0, 1]") ;
console.log(dropElements([1, 2, 3], function(n) {return n > 0; })     + " return [1, 2, 3]");
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5; })  + " return []");
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3; })  + " return [7, 4]");
console.log(dropElements([1, 2, 3, 4, 9, 2], function(n) {return n > 2; })  + " return [3, 9, 2]");
