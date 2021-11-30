// A: Implement linear search.
function linearSearch(list, item) { }
linearSearch([2, 6, 7, 90, 103], 90);
// TASK: Implement binary search.
function binarySearch(list, item) { }
binarySearch([2, 6, 7, 90, 103], 90);


// linear search
function linear(list, item) {
    let i = -1;
    list.forEach((listelement, index) => {
        if (listelement === item) {
            i = index;
        } else {
            return i;
        }
    });
    console.log('linear search : ')
    return console.log(`ada di index ke - [${i}]`);
}
linear([2, 6, 7, 90, 103], 90);


// binary search
function binary(list, item) {
    // [2, 6, 7, 90, 103], 90
    var min = 0, max = list.length - 1, temp;
    while (min <= max) {
        temp = Math.floor((min + max) / 2);
        if (list[temp] === item) {
            console.log('binary search : ')
            return console.log(`array list (${list[temp]}) ada di index ke - [${temp}]!`)
        } else { 
            if (list[temp] < item) {
                min = temp + 1;
            } else {
                max = temp - 1;
            }
        }
    }
    return console.log(-1);
}
binary([2, 6, 7, 90, 103], 90)
