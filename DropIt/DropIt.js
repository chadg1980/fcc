function dropElements(arr, func) {
  // Drop them elements.
  
  function notDropped(thisArr, first, length){
     var newArr = [];
     for(var j = first; j < length; j++){
        newArr.push(thisArr[j]);
     }
     return newArr;
  }
 
  var i = 0;
  var k = 0;
  var emp = [];
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
