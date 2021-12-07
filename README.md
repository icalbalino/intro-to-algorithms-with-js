# intro-to-algorithms-with-js

_A Practical Introduction to Algorithms_ by **_Ical Balino_**

Apa itu algoritma? <br>
Mengapa Anda harus peduli? <br>

<p align="justify">
Algoritma adalah langkah-langkah yang Anda ambil untuk memecahkan suatu masalah. <b>You're an engineer, it's your job to solve problems</b>. Ketika kita belajar tentang algoritma, kita mempelajari berbagai teknik untuk memecahkan masalah.
</p>


## Space and Time Complexity

What makes an algorithm fast?

- Space Complexity <br>
    How much **memory** is used?
- Time Complexity <br>
    How many primitive **operations** are executed?

...with respect to input size <br>
...and assuming worst case scenarios

Problem: <br>
Given a list of hotels, return the price range of hotels in a given search result.

Berharap semakin banyak data yang dimiliki, semakin lama waktu yang dibutuhkan untuk mengetahui minimum dan maksimum yang diperlukan untuk rentang tersebut.

However, as our dataset grows, the cost can grow really fast or slow!

As our data grows, how much does our work increase? <br>
How many comparisons were made?

- Approach 1: compare all numbers to one another (n^2) --> name (quadratic), Big-O notation --> <code>O(n^2)</code>
- Approach 2: Track min & max (2n) --> name (linear), Big-O notation --> <code>O(n)</code>
- Approach 3: Sorted List (2) --> name (constant), Big-O notation --> <code>O(1)</code>


### **Big-O Notation**:

<table style="border-collapse: collapse; width:50%; text-align:left;">
    <tr>
        <td></td>
        <td colspan="4">SUPER FAST</td>
        <td>SUPER SLOW</td>
    </tr>
    <tr>
        <th style="border: 1px solid grey; padding: 5px;">Name</th>
        <td style="border: 1px solid grey; padding: 5px;">constant</td>
        <td style="border: 1px solid grey; padding: 5px;">logarithmic</td>
        <td style="border: 1px solid grey; padding: 5px;">linear</td>
        <td style="border: 1px solid grey; padding: 5px;">quadratic</td>
        <td style="border: 1px solid grey; padding: 5px;">exponential</td>
    </tr>
    <tr>
        <th style="border: 1px solid grey; padding: 5px;">Notation</th>
        <td style="border: 1px solid grey; padding: 5px;">O(1)</td>
        <td style="border: 1px solid grey; padding: 5px;">O(logn)</td>
        <td style="border: 1px solid grey; padding: 5px;">O(n)</td>
        <td style="border: 1px solid grey; padding: 5px;">O(n^2)</td>
        <td style="border: 1px solid grey; padding: 5px;">O(k^n)</td>
    </tr>
</table>

<p align="justify">
But what you need to be mindful of is what is <code>n</code>, because you're going to have a lot of different data points in your methods or in your algorithms. And so you want to make sure that you're identifying, like what is the data set that's growing. And if you have more than one data set that has a variable length, you're going to need to take that into consideration.
</p>

<p align="justify">
That's something that when people get started with this, they just assume that <code>n</code> is always going to be the length of the <code>array</code> or <code>n</code> is always going to be a certain input, and it's not necessarily. so you need to really think about how your code is executing and what is changing as your input changes.
</p>


### **Complexity of Common Operations**

<table style="border-collapse: collapse; width:50%; text-align:left;">
    <tr>
        <th style="border: 1px solid grey; padding: 5px;">Complexity</th>
        <th style="border: 1px solid grey; padding: 5px;">Operation</th>
    </tr>
    <tr>
        <td style="border: 1px solid grey; padding: 5px;">O(1)</td>
        <td style="border: 1px solid grey; padding: 5px;">Running a statement</td>
    </tr>
    <tr>
        <td style="border: 1px solid grey; padding: 5px;">O(1)</td>
        <td style="border: 1px solid grey; padding: 5px;">Value look-up on an array, object, variable</td>
    </tr>
    <tr>
        <td style="border: 1px solid grey; padding: 5px;">O(logn)</td>
        <td style="border: 1px solid grey; padding: 5px;">Loop that cuts problem in half every iteration</td>
    </tr>
    <tr>
        <td style="border: 1px solid grey; padding: 5px;">O(n)</td>
        <td style="border: 1px solid grey; padding: 5px;">Looping through the values of an array</td>
    </tr>
    <tr>
        <td style="border: 1px solid grey; padding: 5px;">O(n^2)</td>
        <td style="border: 1px solid grey; padding: 5px;">Double nested loops </td>
    </tr>
    <tr>
        <td style="border: 1px solid grey; padding: 5px;">O(n^3)</td>
        <td style="border: 1px solid grey; padding: 5px;">Triple nested loops</td>
    </tr>
</table>


### **Space Complexity & Review**

<p align="justify">
"Yeah, so stacks and queues. Those are data structures. And it's all about the space that it takes up in memory, right? So if your algorithm is copying your array a bunch of times and you're making a new array, then in memory you're having like five arrays, and that's you know, a certain amount of space complexity".
</p>

<p align="justify">
"As time complexity, except that instead of the number of operations that are being executed, we're thinking about how much more space are we taking up? So our array for every loop creating a new array".
</p>

<p align="justify">
"So things to think about when you're thinking about space complexity is are you making a new data structure? How often are you doing it? In compared to in comparison to your input, and also with your call stack if you're doing recursion? That's another thing to consider is that that stack is also taking place in memory".
</p>

<p align="justify">
Kompleksitas waktu dari suatu algoritma menandakan total waktu yang dibutuhkan oleh program untuk berjalan sampai selesai. Kompleksitas waktu algoritma paling sering diekspresikan menggunakan the Big O notation.
</p>

<p align="justify">
The Big O notation memberi kita bahasa standar industri untuk membahas kinerja algoritme. Tidak mengetahui cara berbicara bahasa ini dapat membuat Anda menonjol sebagai programmer yang tidak berpengalaman.
</p>

<p align="justify">
The complexity differs depending on the input data, but we tend to weigh the worst-case.
</p>

- There are other notations that are typically used in academic settings. Learn more [here](https://www.geeksforgeeks.org/analysis-of-algorithms-set-3asymptotic-notations/).
- The Big-O Cheat Sheet [here](https://www.bigocheatsheet.com/)


## Optimization with Caching
- sorting
- caching with memoization

    Memoization is a type of caching as well. The difference between memoization and the breadcrumbs method is that the value that we're getting to cache, so we read an array at `i` and save that into our breadcrumbs object, is not the result of a function.

    If you're caching the result is a function we call that **memoization**. Caching really in the simplest form in a job environment is saving something into an `object` or an `array`.

    Memoization: caching the value that a function returns.

    ```

        const factorial = (n) => {
            // Calculations: n * (n-1) * (n-2) * ... (2) * (1)
            return factorial;
        }
        
        factorial(35);
        factorial(36); // factorial(36) = factorial(35) * 36;
    
    ```


## Recursion

Recursion is simply when a function calls itself; however it doesn't stop there.

Why Recursion?

Elegant solutions to keep your code D.R.Y. Expected CS knowledge. <br>
which is contrasted with W.E.T, which stands for "we enjoy typing" or "write everything twice".

### **Call Stack Game**

**The Rules**
```

    var callMe = function() {
        callMe();
        callMe();
        callMe('anytime');
    };

```

1. Push **_called_** Fn on stack.
2. Execute Fn body.

    until... <br>
    ... another fn is called:
    - Pause the current execution and start at step 1.
    
    ... a return is hit:
    - Pop the current Fn off the stack.
    - Resume executing the previous Fn.

```

    var tracker = 0;
    var callMe = function() {
        tracker++
        if (tracker === 3) {
            return 'loops!';
        }
        callMe('anytime');
    };

```

### **Looping with Recursion**

1. Recursion in 4 Steps

    - Identify base case(s). <br>
       The typical recipe for recursion is to identify your base case, which is when do you want your loop to stop. Like that's the condition of loop. And that's your base case.
    - Identify recursive case(s). <br>
        The recursive case is the work that you want to do, So we need to identify that recursive case and we need to make sure that each time we call our recursion we're getting closer to our base case. Because otherwise, we never meet our base case, we're going to loop forever.
    - Return where appropriate.
    - Write procedures for each case that bring you closer to the base case(s). <br> <br>

    ```

        var callMyself = function() {
            if() {
                // base case
                return;
            } else {
                // recursive case
                callMyself();
            }
            return;
        };

    ```

    Get really familiar with translating loops into recursion and recursion into loops, that's the goal. Because loops are easy to reason about recursion, is just a loop. How do we put those two things together that's what we're doing.

2. Looping
3. Factorial with a Loop and Recursion
4. Loop to Recursion
5. Recursions .vs Loops 

    Recursion can always be implemented as a loop, but in some situations, believe it or not, it is simpler to use recursion.

    **Tail-Call Optimization**

    [ES6](https://262.ecma-international.org/6.0/#sec-tail-position-calls) offers TCO, which allows some functions to be called without growing the call stack. Read more [here](https://2ality.com/2015/06/tail-call-optimization.html) and [here](https://www.integralist.co.uk/posts/js-recursion.html).

### Common Patterns For Recursion

- Wrapper Functions
- Accumulators

## Divide & Conquer

Divide dan Conquer adalah teknik rekursif untuk memecahkan problem yang lebih besar menjadi subproblems, dan melakukan pekerjaan pada masing-masing submasalah tersebut untuk mencapai beberapa tujuan, beberapa solusi. So a classic example of a divide and conquer algorithm is ` binary search `.

**Binary Search**, Search for a value in a sorted array by cutting the side of the search area in half. <br>
**Linear Search**, Search for a value in an array by checking each value in order.

Recursive calls to a subset of the problem

0. Recognize base case
1. Divide: Break problem down during each call
2. Conquer: Do work on each subset
3. Combine: Solutions

Divide and Conquer it's a recursive algorithm. We're always going to be working on subproblems.

### Sorting Types

1. Comparison sorts
    - **Naive Sorts** <br>
        Keep looping and comparing values until the list is sorted.

        ` naive sorts ` are going to be quadratic time, we're going to compare everything to everything at some point or you're going to imagine that these are going to have two loops involved.

        - **Bubble Sort** <br>
            Loop through an array, comparing adjacent indices and swapping the greater value to the end.
        - **Insertion Sort**
        - **Selection Sort** <br>
            Which you basically take an empty or another empty array and then you choose or where you choose the biggest one or you actually could choose the smallest one and then you push it into that array and then you choose the next smallest one you push it to that array and then it builds a new array with the sorted values.

    - **Divide & Conquer Sorts** <br>
        Recursively divide lists and sort smaller parts of list until entire list is sorted.

        The best you can do is ` n log n `, and that's what these **divide and conquer** algorithms where we are. We have to look at everything but we don't have to compare everything to everything else to sort it, where these `naive sorts` that's the basis of them.

        Mergesort and Quicksort are a little harder to reason about because we are going to be recursively handling the sort.

        - **Mergesort** <br>
            Recursively merge sorted sub-lists. The merge with merge sort we take sorted lists, so we have to start with a sorted lists and then we sort two sorted lists.

            1. **Concept: Merging Lists** <br>
                The merge step takes two sorted lists and merges them into 1 sorted list.

            2. **Concept: Merge Sort** <br>
                Step 1: Divide input array into **'n'** single element subarrays <br>
                Step 2: Repeatedly merge subarrays and sort on each merge

            3. **Pseudocode: Merge Sort** <br>
                - mergeSort(list) <br>
                    base case: `if` `list.length < 2`, `return` <br>
                    break the `list` into halves L & R <br>
                    `Lsorted = mergeSort(L)` <br>
                    `Rsorted = mergeSort(R)` <br>
                    `return merge(Lsorted, Rsorted)`

            4. **Pseudocode: Merge** <br>
                - mergeSort(list) <br>
                    1 initialize `n` to the length of the list <br>
                    2 base case is `if` `n < 2`, just `return` <br>
                    3 initialize `mid` to `n/2` <br>
                    4 `left = left` slice of `array` to `mid - 1` <br>
                    5 `right = right` slice of `array mid` to `n - 1` <br>
                    6 `mergeSort(left)` <br>
                    7 `mergeSort(right)` <br>
                    8 `merge(left, right)`

            5. **Simplified Analysis: O(n*logn)** <br>
                ( 1, 2, 3 ) --> constant <br>
                ( 4, 5 ) --> N/A <br>
                ( 6, 7 ) --> n/2 <br>
                ( 8 ) --> linear 
            
            Tip: Recursion ` [O(log(n))] ` to divide the list, and the linear portion ` [O(n)] ` to merge the list together again causes the sorting algorithm to have ` O(n*log(n)) ` time complexity.

        - **Quiksort**

2. [Comparison Sorting Algorithms Animation](http://rebootjeff.github.io/comparisonsort/)

## Greedy Algorithms

**Greedy Approach** : <br>
Greedy algorithms which is given a choice, they're always make the locally optimal choice without considering the big picture!

**Brute Force Approach** : <br>
Calculate every single combination possible and keep track of the minimum.
