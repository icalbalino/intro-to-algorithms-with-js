// var tracker = 0;
// var callMe = function() {
//   tracker++
//   if (tracker === 3) {
//       return console.log('loops!');
//   }
//   callMe('anytime');
// };
// callMe()


// looping with recursion**
// recursion is just a fancy loop, a loop but cooler
// const loopNTimes = (n) => {
//   console.log('n ===', n);
//   if (n <= 1) {
//       return console.log('complete');
//   }
//   return loopNTimes(n-1);
// };
// loopNTimes(3);


// factorial with loop
// function computeFactorial(num) {
//   var result = 1;
//   for(var i = 2; i <= num; i++) {
//     console.log(`result = ${result} * ${i} (${result * i})`);
//     result *= i;
//   }
//   return console.log(result);
// }
// computeFactorial(5);

// function computeFactorial(num) {
//   var result = 1;
//   for(var i = 2; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }


// factorial with recursion
// function computeFactorial(num) {
//     var result = 0;
//     if(num === 1) {
//         console.log('hitting the base case');
//         return 1;
//     } else {
//         result = num * computeFactorial(num - 1);
//         console.log(`returning ${num} * computeFactorial(${num - 1})`);
//         console.log(result)
//         return result
//     }
// }
// computeFactorial(5);


// loop to recursion
// function logNumbers(start, end) {
//   console.log(`iteratively looping from ${start} until ${end}`);
//   for(var i = start; i <= end; i++) {
//     console.log('hitting index', i);
//   }
// }
// console.log('~~~ logNumbers ~~~')
// logNumbers(1,2);

// function logNumbersRecursively(start, end) {
//   console.log(`recursively looping from ${start} until ${end}`);
//   function recurse(i) {
//     console.log('hitting index', i);
//     if(i < end) {
//       recurse(i + 1);
//     }
//   }
//   recurse(start);
// }
// console.log('~~~ logNumbersRecursively ~~~')
// logNumbersRecursively(1, 3);


// Wrapper Functions
// function wrapperFnLoop(start, end) {
//   function recurse(i) {
//     console.log(`looping from ${start} until ${end}`);
//     if(i < end) {
//       recurse(i + 1);
//     }
//   }
//   recurse(start);
// }

// function MemoFnLoop(i, end) {
//   console.log(`looping from ${i} until ${end}`);
//   if(i < end) {
//     MemoFnLoop(i + 1, end);
//   }
// }
// console.log('~~~ wrapperFnLoop ~~~')
// wrapperFnLoop(1,5);
// console.log('~~~ MemoFnLoop ~~~')
// MemoFnLoop(1, 6);


// Accumulators
// function joinElements(array, joinString) {
//   function recurse(index, resultSoFar) {
//     resultSoFar += array[index];
//     if(index === array.length - 1) {
//       return resultSoFar;
//     } else {
//         var hasil = recurse(index + 1, resultSoFar + joinString);
//         console.log(hasil);
//         return hasil
//     //   return recurse(index + 1, resultSoFar + joinString);
//     }
//   }
//   return recurse(0, '');
// }
// joinElements(['s', 'cr', 't cod', ' :) :)'], 'e');


// iterative loop
// Task: rewrite this function so that it uses a loop rather than recursion
// function joinElements(array, joinString) {
//   function recurse(index, resultSoFar) {
//     resultSoFar += array[index];
//     if(index === array.length - 1) {
//       return resultSoFar;
//     } else {
//       return recurse(index + 1, resultSoFar + joinString);
//     }
//   }
//   return recurse(0, '');
// }
// joinElements(['s', 'cr', 't cod', ' :) :)'], 'e');

// solution
// function joinElements(array, joinString) {
//     let resultSoFar = '';
//     for (let i = 0; i < array.length - 1; i++) {
//         resultSoFar += array[i] + joinString;
//     }
//     return console.log(resultSoFar + array[array.length - 1]);
// }
// joinElements(['s', 'cr', 't cod', ' :) :)'], 'e');


// recursive factorial and memoize
// Task 1: Without peeking, write your own recursive factorial method
// Task 2: Use your memo function from the previous exercise to memoize your factorial method

// solution
// const memoize = (fn) => {
//   let cache = {};
//   return (...args) => {
//     let n = args[0];
//     if (n in cache) {
//       console.log('Fetching from cache', n);
//       return cache[n];
//     } else {
//       console.log('Calculating result', n);
//       let result = fn(n);
//       cache[n] = result;
//       return result;
//     }
//   }
// }

// const factorial = memoize(
//     (x) => {
//         if (x === 0) {
//             return 1;
//         } else {
//             return x * factorial(x - 1);
//         }
//     }
// );
// console.log(factorial(5)); // calculated
// console.log(factorial(5)); // calculated for 6 and cached for 5

