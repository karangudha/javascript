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

// javascripit is staticlly typed.

//Reference types (Non primitive)

//Array , Object, Functions

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