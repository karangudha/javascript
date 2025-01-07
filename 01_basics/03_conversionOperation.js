let score = "abc";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof (score));

console.log(valueInNumber);

// To convert datatype we use first letter capital of that datatype, ususally data type 
// datatype is in small letter. 

// issue : when we convert string into number, then it will converted but it will show, 
// NaN => not an number.

// Number(null) => 0
//Number("karan123") => NaN
//Number(true) => 1
//Number(123) => 123

let isLoggedIn = "kara "

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn); // true

// Boolean() function converts any non-zero value to true and zero to false.

// ******************************** Operations ********************************

let str1 = "karan"
let str2 = " kumar"

let str3 = str1 + str2;
console.log(str3);

console.log(1 + "2");

console.log(1 + 2 + "2");

//if we do ,  first number and then string and add them then, all the number sum up and form string with string.
