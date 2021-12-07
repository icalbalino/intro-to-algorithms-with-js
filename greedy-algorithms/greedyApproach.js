/** 
You are the banker in Monopoly with your 
family who has lost many of the game 
pieces so you only have bills in these 
denominations: 

$5 $10 $25

You need only pay out your family in the 
least number of bills possible so you don't 
run out before the game is over. 
Write a function that calculates the 
least number of bills required for any given 
dollar amount that is divisible by 5.
*/

// Write a function, makeChange, that returns an integer 
// that represents the least number of coins that add up 
// to an amount where the amount is always divisible by 5.

// coin values: 5, 10, 25
// input amount: 40 , output # of coins: 3 (25, 10, 5)
// input amount: 35, output # of coins: 2 (25, 10) 

// solution
// const makeChange = (coins, amount) => {
//     coins.sort((a, b) => b - a);
//     let coinTotal = 0;
//     let i = 0;
//     while (amount > 0) {
//         if (coins[i] <= amount) {
//             amount -= coins[i];
//             coinTotal++;
//         } else {
//             i++;
//         }
//     }
//     return coinTotal;
// };
// console.log(makeChange([5, 10, 25], 50));


// Would these values work with your greedy solution?
// coin values: 1, 6, 10
// input: 12
// console.log(makeChange([1, 6, 10], 12));


/* 
Greedy Approach:
Always subtract the largest coin possible from the current amount.
*/

// solution brute force
let recursionCounter = 0;
const coins = [10, 6, 1];

const makeChange = (value, i) => {
    recursionCounter++;
    console.log(`${recursionCounter}: calling ${value} at ${i}`)
    if (value === 0) return 0;
    let minCoins;
    coins.forEach((coin, i) => {
        if (value - coin >= 0) {
            let currMinCoins = makeChange(value - coin, i);
            if(minCoins === undefined || currMinCoins < minCoins) {
                minCoins = currMinCoins;
            }
        }
    });
    return minCoins + 1;
};
console.log(makeChange(12));
