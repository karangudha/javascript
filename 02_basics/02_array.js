const marvel = ["karan", "kumar", "kumawat"];
const places = ["gudha", "gotji", "jjn"];

//places.push(marvel);

//console.log(places); // ["gudha", "gotji", "jjn", ["karan", "kumar", "kumawat"]]
// scense in js array are vector of c++, means it can store any data type, 
// for example array can store array also in it.

// when we use push operation on two array, then one array is as its pushed on one 
// index of other array.

// to merge two array we have other function.

const newArr = places.concat(marvel); // 
//[ 'gudha', 'gotji', 'jjn', 'karan', 'kumar', 'kumawat' ]

const newArrr = marvel.concat(places.concat(marvel)); // 
//[ 'karan', 'kumar', 'kumawat', 'gudha', 'gotji', 'jjn', 'karan', 'kumar', 'kumawat' ]

// concat function return a new array, where as push return the old array.
console.log(newArr);
console.log(newArrr);

// Other method to merge two array

// sperad method, in this method all the element of of all array are treated
// as diffretn element,  and then merge into one new aaray .


const newArr1 = [...marvel, ...places]; // 
[ 'karan', 'kumar', 'kumawat', 'gudha', 'gotji', 'jjn']

console.log(newArr1);


// to check give variable is array or not, we can use isArray function.

console.log(Array.isArray(marvel)); //true
console.log(Array.isArray("karan")); //false

// To converet an string or any itrable object to array, we have function..

const new1 = Array.from("karan"); //['k', 'a', 'r', 'a', 'n']
console.log(new1);

//Important: when we are converting array form object then we have to tell
// whether we have to convert key to array or value to array or both, if we
// didn't discribe it then it will return empty array.

console.log(Array.from({name: "karan"})); // []

let n1= 10
let n2 = 200
let n3 = 300

const new2 = Array.of(n1, n2, n3); //[10, 200, 300]
console.log(new2);

