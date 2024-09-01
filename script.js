// JavaScript function to get an array and to read the first element of an array and to Check whether it is prime or not. 

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;  
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true; 
}

function checkFirstElementIsPrime(arr) {
    if (arr.length === 0) return "Array is empty"; 
    const firstElement = arr[0]; 
    return isPrime(firstElement) ? '${firstElement} is a prime number ': '${firstElement} is not a prime number';
}
// Example 
const arr1 = [7, 5, 3, 6, 8, 10]; 
console.log(checkFirstElementIsPrime(arr1)); 



// JavaScript program to find the most frequent item of an array

arr = [ 1, 1, 3, 5, 7, 6, 8, 5, 6, 4, 7, 6, 0, 2, 1, 6, 8, 9, 5,];

arr.sort((a, b) => a - b);
//console.log(arr)
let count = 1,
    max = 0,
    el;

for (let i = 1; i < arr.length; ++i) {
    if (arr[i] === arr[i - 1]) {
        count++;
    } else {
        count = 1;
    }
    if (count > max) {
        max = count;
        el = arr[i];
    }
}
console.log("The most occured element is: " + el);



// JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
}


// JavaScript program to find the sum of squares of the elements of an array

const array = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i] * array[i];
}

console.log("Sum of squares:", sum);