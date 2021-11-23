// Big O: loop
// What is the TC? -> linear
var countChars = function(str){
    var count = 0; //one operation
    for(var i = 0; i < str.length; i++) {
        count++; //five operation
    }
    return count; //one operation
};
console.log(countChars("dance"));
countChars("walk");


// Big O: property lookup (length)
// What is the TC? -> constant time algorithm
var countChars = function(str){
    return str.length;
};
console.log(countChars("dance"));
countChars("walk");

// How much more work would it take to get the length of 1 million char string?
// constant time algorithm:
// which means if our streamlines was 1 million, it wouldn't be any slower than if it was just one.


// Big O: push, shift and unshift
// What is the TC? -> 
var myList = ["hello", "hola"];
myList.push("bonjour"); //constant
myList.unshift(); //linear
myList.shift(); //linear

//calculate the time complexity for the native methods above (separately)