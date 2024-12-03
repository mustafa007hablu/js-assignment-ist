//Assignment # 1

// problem 1. Create a variable called carName, assign the value Volvo to it.

//let carName = "volvo";


// problem 2. On one single line, declare three variables with the following names and values:

// let firstName = "John", lastName = "Doe", age = 35;

//So What Will Be The 1st Variable Name, Then 2nd Variable Values & 
// 3rd Variable Name And Values Both! 

//let firstName = "John";
//let lastName = "Doe";
//let age = 35; 


// problem 3. Use the correct assignment operator that will 
//result in x being 50 (same as x = x * y). 

//let x = 10;
//let y = 5;
//let z = x * y;
//console.log(z);


// problem 4. Use comments to describe the correct data type of the following variables:

//let length = 16; // data type:  number
//console.log(typeof length);

//let lastName = "Johnson"; // data type: string
//console.log(typeof lastName);

//const x = {
 //  firstName: "John",  
  //  lastName: "Doe"
  //}; 
//console.log(typeof x); // data type  object


// problem 5. Execute the function named myFunction.

//function myFunction() {
//alert("Hello World!");
//}
//myFunction(); // output  Hello World!


// problem 6. Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").

//let person = {Name: "john", Age: 50};
//console.log(person.Name +' is ' + person.Age);
//alert(person.Name +' is ' + person.Age);


// problem 7. The <button> element should do something when someone clicks on it. Try to fix it!

//<button type="button" onclick="myFunction()">Click me </button>


//problem 8  Array related problem

// 1. Alert the number of items in an array, using the correct Array property: 

//const cars = ["Volvo", "Jeep", "Mercedes"];
//const length = cars.length;
//console.log(length); // output:  3
// alert(length); // output: 3

// 2. Change the first item of Brand to "Ford".
//const Brand = ["Volvo", "Jeep", "Mercedes"]; 
//Brand [0] = "Ford";
//console.log(Brand);  // output: [ 'Ford', 'Jeep', 'Mercedes' ]


// problem 9. Math related problem

//1. Use the correct Math method to create a random number.

//let x = Math.random();

//console.log(x);  // output: 0.26531577735268974 different output everytime.

//2. Use the correct Math method to return the largest number of 10 and 20.

//let y = Math.max(5, 10);
//console.log(y); // output: 10

//3. Use the correct Math method to get the square root of 9.

//let z = Math.sqrt(9);
//console.log(z); // output: 3


// problem 10
// 1. Choose the correct comparison operator to alert true, when x is greater than y. 
//x = 10;
//y = 5;

//let x = 10;
//let y = 5;

//if (x > y) {
//   alert('True');
// }  // result: True

//2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

// let age = 18;
//let message;

//age < 18 ? message = "Too young": message = "Old enough";

//console.log(message);




//Assignment # 2

// problem 1. Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.

// function celsiusToFahrenheit(celsius) {
// return ((celsius * 9.0 / 5.0) + 32.0)  ;
//}

//console.log(celsiusToFahrenheit(0)); // 32
//console.log(celsiusToFahrenheit(25)); // 77


//problem 2. Write a function to check if a number is even. The function should take a single argument, which is the number to check.

//function isEven(num) {
// return num % 2 === 0;
//}

//console.log(isEven(4)); 
//console.log(isEven(7));

// problem 3. Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.

//function sum(a, b) {
// return a + b;
//}

//console.log(sum(3, 4)); // 7
//console.log(sum(10, 20)); // 30

//problem 4. Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.

//function findSmallestNum(arr) {
 // return  Math.min.apply(null, arr);
//}

//console.log(findSmallestNum([3, 5, 1, 9])); // 1
//console.log(findSmallestNum([-1, -5, 0, 10])); // -5

// problem 5. Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.

//function countVowels(str) { 
 //let count = str.match(/[aeiou]/gi).length;
  // return count;
  //}
  //console.log(countVowels("hello world")); // 3
  //console.log(countVowels("Javascript")); // 3
  

//problem 6. Write a function to get the first element of an array. The function should take a single argument, which is the array.

//function getFirstElement(arr) {
 // return arr[0];
//}
//console.log(getFirstElement([1, 2, 3])); // 1
//console.log(getFirstElement(["a", "b", "c"])); // "a"

// Problem 7. Write a function to check if an array is empty. The function should take a single argument, which is the array.



//problem 8. Write a function to return the factorial of a number. The function should take a single argument, which is the number.

//function factorialize(num) {
 // if (num === 0 || num === 1) {
  //  return 1;
  //}
  //return num * factorialize (num - 1);
//}

//console.log(factorialize(5)); // 120
//console.log(factorialize(7)); // 5040

// problem - 9  Write a function to reverse a string. The function should take a single argument, which is the string to reverse.

//function reverseString(str) {
 // return str.split('').reverse().join('');
//}

//console.log(reverseString("hello")); // "olleh"
//console.log(reverseString("world")); // "dlrow"


//problem 10. Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.

//function toLowerCase(str) {
 // return str.toLowerCase();
//}

//console.log(toLowerCase("HELLO WORLD")); // "hello world"
//console.log(toLowerCase("JavaScript")); // "javascript"


//problem 11. Write a function to find the length of a string. The function should take a single argument, which is the string.

//function stringLength(str) {
//  return str.length;
//}

//console.log(stringLength("hello")); // 5
//console.log(stringLength("world")); // 5


//problem 12.  Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.

//function mergeArrays(arr1, arr2) {
//  return arr1.concat(arr2);
//}

//console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
//console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]

//problem 13. Write a function to get the last element of an array. The function should take a single argument, which is the array.

//function getLastElement(arr) {
// return arr[2];
//}

//console.log(getLastElement([1, 2, 3])); // 3
//console.log(getLastElement(["a", "b", "c"])); // "c"


//problem 14. Write a function to get the first character of a string. The function should take a single argument, which is the string.

//function getFirstCharacter(str) {
 // return str[0];
//}

//console.log(getFirstCharacter("hello")); // "h"
//console.log(getFirstCharacter("world")); // "w"

// problem 15. Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.