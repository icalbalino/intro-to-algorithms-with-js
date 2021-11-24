<body style="text-align: justify;">
# intro-to-algorithms-with-js

_A Practical Introduction to Algorithms_ by **_Ical Balino_**

Apa itu algoritma? <br>
Mengapa Anda harus peduli? <br>

Algoritma adalah langkah-langkah yang Anda ambil untuk memecahkan suatu masalah. **You're an engineer, it's your job to solve problems**. Ketika kita belajar tentang algoritma, kita mempelajari berbagai teknik untuk memecahkan masalah.


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

- Approach 1: compare all numbers to one another (n^2) -> name (quadratic), Big-O notation -> O(n^2)
- Approach 2: Track min & max (2n) -> name (linear), Big-O notation -> O(n)
- Approach 3: Sorted List (2) -> name (constant), Big-O notation -> O(1)


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

**But what you need to be mindful of is what is n, because you're going to have a lot of different data points in your methods or in your algorithms. And so you want to make sure that you're identifying, like what is the data set that's growing. And if you have more than one data set that has a variable length, you're going to need to take that into consideration.

**That's something that when people get started with this, they just assume that n is always going to be the length of the array or n is always going to be a certain input, and it's not necessarily. so you need to really think about how your code is executing and what is changing as your input changes.


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

"Yeah, so stacks and queues. Those are data structures. And it's all about the space that it takes up in memory, right? So if your algorithm is copying your array a bunch of times and you're making a new array, then in memory you're having like five arrays, and that's you know, a certain amount of space complexity".

"As time complexity, except that instead of the number of operations that are being executed, we're thinking about how much more space are we taking up? So our array for every loop creating a new array".

"So things to think about when you're thinking about space complexity is are you making a new data structure? How often are you doing it? In compared to in comparison to your input, and also with your call stack if you're doing recursion? That's another thing to consider is that that stack is also taking place in memory".

Kompleksitas waktu dari suatu algoritma menandakan total waktu yang dibutuhkan oleh program untuk berjalan sampai selesai. Kompleksitas waktu algoritma paling sering diekspresikan menggunakan the Big O notation.

The Big O notation memberi kita bahasa standar industri untuk membahas kinerja algoritme. Tidak mengetahui cara berbicara bahasa ini dapat membuat Anda menonjol sebagai programmer yang tidak berpengalaman.

The complexity differs depending on the input data, but we tend to weigh the worst-case.

- There are other notations that are typically used in academic settings. Learn more [here](https://www.geeksforgeeks.org/analysis-of-algorithms-set-3asymptotic-notations/).
- The Big-O Cheat Sheet [here](https://www.bigocheatsheet.com/)

</body>