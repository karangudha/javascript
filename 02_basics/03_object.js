// Singleton :- when we declear objects using constructor, then that object is singlton
// means that object have only one instance through out the application.
// object.create ... like this we create singleton object.
// Object literals, another type to delecare object, in this multiple instance of object may present.
//

const mySym = Symbol("aree");
const myObj = {
    name: "karan",
    class: "12",
    "roll no": "23",
    [mySym] : "wer",
};
// console.log(myObj.name);
// console.log(myObj["roll no"]);
// console.log(myObj[mySym]);

// Important: to make a symbole as a key in object, we have to write it into bracket
//  and to access value of that symbol.

// When we have key name with space (ex. roll no )then we are not able to access it by using dot 
// operator , so we use bracket and write name of key in the bracket.
// Bcz in js key is treated as string, and when we have name of key with space,
// then we declear it as "string", and to access it we use bracket in which we insert string (["string"]).



console.log(myObj);
//console.log(typeof myObj[mySym]);

myObj.name = "ravi;" // name changes to ravi
//Object.freeze(myObj); // after freezing the value, we cant make fruther changes in it.

myObj.name = "rahul;" //ravi..  not changed.


//console.log(myObj["name"]);
myObj.greeting = function(){
    console.log("Hello js User"); 
}
myObj.greeting1 = function(){
    console.log(`Hello js User ${this.name}`);
}
// when we want to print or use object property then we have to convert
// string into baktics and then we can use property of object using $ sign and
// this pointer.
console.log(myObj.greeting()); //hello js user
console.log(myObj.greeting1()); //hello js user rahul

