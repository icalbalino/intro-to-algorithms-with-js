# intro-to-algorithms-with-js

_A Practical Introduction to Algorithms_ by **_Ical Balino_**

Apa itu algoritma? <br>
Mengapa Anda harus peduli? <br>

Algoritma adalah langkah-langkah yang Anda ambil untuk memecahkan suatu masalah. You're an engineer, it's your job to solve problems. Ketika kita belajar tentang algoritma, kita mempelajari berbagai teknik untuk memecahkan masalah.


## Space and Time Complexity

What makes an algorithm fast?

- Space Complexity <br>
    How much **memory** is used?
- Time Complexity <br>
    How many primitive **operations** are executed?

...with respect to input size
...and assuming worst case scenarios

Problem:

Given a list of hotels, return the price range of hotels in a given search result.

Berharap semakin banyak data yang dimiliki, semakin lama waktu yang dibutuhkan untuk mengetahui minimum dan maksimum yang diperlukan untuk rentang tersebut.

However, as our dataset grows, the cost can grow really fast or slow!

As our data grows, how much does our work increase? <br>
How many comparisons were made?

- Approach 1: compare all numbers to one another (n^2) -> name (quadratic), Big-O notation -> O(n^2)
- Approach 2: Track min & max (2n) -> name (linear), Big-O notation -> O(n)
- Approach 3: Sorted List (2) -> name (constant), Big-O notation -> O(1)


**Big-O Notation**:

<br> SUPER FAST ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| SUPER SLOW
<br> +----------------------------------------------------------------------------------+
<br> |Name        |constant     |logarithmic	|linear     |quadratic	|exponential    |
<br> |------------|-------------|---------------|-----------|-----------|---------------|
<br> |Notation    |O(1)         |O(logn)	    |O(n)	    |O(n^2)	    |O(k^n)         |
<br> +----------------------------------------------------------------------------------+

<br> But what you need to be mindful of is what is n, because you're going to have a lot of different data points in your methods or in your algorithms. And so you want to make sure that you're identifying, like what is the data set that's growing. And if you have more than one data set that has a variable length, you're going to need to take that into consideration.

<br> That's something that when people get started with this, they just assume that n is always going to be the length of the array or n is always going to be a certain input, and it's not necessarily. so you need to really think about how your code is executing and what is changing as your input changes.

**Complexity of Common Operations**

<br> +--------------------------------------------------------------+
<br> |Complexity    |Operation                                      |
<br> |--------------|-----------------------------------------------|
<br> |O(1)          |Running a statement                            |
<br> |--------------|-----------------------------------------------|
<br> |O(1)          |Value look-up on an array, object, variable    |
<br> |--------------|-----------------------------------------------|
<br> |O(logn)       |Loop that cuts problem in half every iteration |
<br> |--------------|-----------------------------------------------|
<br> |O(n)	        |Looping through the values of an array         |
<br> |--------------|-----------------------------------------------|
<br> |O(n^2)	    |Double nested loops                            |
<br> |--------------|-----------------------------------------------|
<br> |O(n^3)	    |Triple nested loops                            |
<br> +--------------------------------------------------------------+

**Space Complexity & Review**

<br> "Yeah, so stacks and queues. Those are data structures. And it's all about the space that it takes up in memory, right? So if your algorithm is copying your array a bunch of times and you're making a new array, then in memory you're having like five arrays, and that's you know, a certain amount of space complexity".
<br> "As time complexity, except that instead of the number of operations that are being executed, we're thinking about how much more space are we taking up? So our array for every loop creating a new array".

<br> "So things to think about when you're thinking about space complexity is are you making a new data structure? How often are you doing it? In compared to in comparison to your input, and also with your call stack if you're doing recursion? That's another thing to consider is that that stack is also taking place in memory".

<br> Kompleksitas waktu dari suatu algoritma menandakan total waktu yang dibutuhkan oleh program untuk berjalan sampai selesai. Kompleksitas waktu algoritma paling sering diekspresikan menggunakan the Big O notation.
<br> The Big O notation memberi kita bahasa standar industri untuk membahas kinerja algoritme. Tidak mengetahui cara berbicara bahasa ini dapat membuat Anda menonjol sebagai programmer yang tidak berpengalaman.
<br> The complexity differs depending on the input data, but we tend to weigh the worst-case.

<br> There are other notations that are typically used in academic settings. Learn more [here](https://www.geeksforgeeks.org/analysis-of-algorithms-set-3asymptotic-notations/).
<br> The complexity differs depending on the input data, but we tend to weigh the worst-case.
<br> The Big-O Cheat Sheet [here](https://www.bigocheatsheet.com/)