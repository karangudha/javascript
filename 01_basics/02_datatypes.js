"use stricit"; //treat all JS code as newer version.

//alert("hello") //we are using node.js, not browser,  so it will show error.

//js autometicaly ignore spaces and it will automatically indendation the code.
//documentation mdn web docs, tc39

let name = "karan"
let age = 18
let isLoggedIn = false

//range of number => 2 to power 53
//string => you can use in single quotes and double quotes, but prefer double quotes
//undefined => value is not defined
//null => it is an empty value
//symbol => it is unique value

//object =>

    //interview question 

    // console.log(typeof undefined ); => undefined
    // console.log(typeof null ); => object
    // console.log(typeof 10 ); => number
    // console.log(typeof "hello" ); => string

//Primitive types:

// 7 types : string, Number, Boolean, null, undefined, Symbol, BigInt.

// javascripit is dynamic typed., means we can hold value of different types of
// data type during runtime. Unlike in java and typescript, we have todeclare
// the data type explicitly.

//Reference types (Non primitive)

//Array , Object, Functions
const places = ["Array", "Object", "Function"];

const obj3 = {
    name: "karan",
    age: 18,
    isLoggedIn: false,
};

let fun = function(){
    console.log("Hello world!");
};

const heroes = ["ironman", "Caption", "Hulk"];
let myObj = {
    name: "karan",
    age: 18,
    isLoggedIn: false
};

const myFunction = function(){
    console.log("Hello world!");
};
let BigInteger;
console.log(typeof BigInteger);

//The data type of all non primitive data type is function.
//Data type of function is object function. 

//+++++++++++++++++ Memory +++++++++++

// Stack memory is used for primitive datatypes and Heap memory is used for Non-primitive datatypes.

//When we take value from stack then we get copy of that value, and when we
//change that value then only copied value is chaneged not the original value.

//Example:

let address = "Gudha";
let anotherAddress = address;

anotherAddress = "Jaipur";

console.log(address); // "Gudha"
console.log(anotherAddress); // "Jaipur"

// for non primitives data types, Heap memory is alloted, and when we 
//take value from non-primitives data types then we get refrence to orginal value
//on heap memory.

//When we change the value then orginal value is updated.

//example:

let obj1 = {
    name: "karan",
    age: 18
};

let obj2 = obj1;

obj2.name = "rahul";

console.log(obj1.name); // rahul 
console.log(obj2.name); // rahul
console.log(obj2.age); // rahul
