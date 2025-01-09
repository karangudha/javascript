// () = parentheses
// [] = brackets
// {} = brecess
//in js array are vector.
// Shallow copy = copies the references to the objects inside the array., not
// the objects themselves.
// deep copy = deep copy the colplete object to the objects. and they do not share
// the same reference pointers.
// In js when we use copy operations for array then  it makes shallow copies.

//Example:
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2[0] = 10;

// console.log(arr1); // [10, 2, 3]
// console.log(arr2); // [10, 2, 3]

const myArr2 = new Array(1, 2, 3);

// console.log(myArr2); // [1, 2, 3]

// Array methods

myArr2.push(6);

// console.log(myArr2); // [1, 2, 3, 6]
// console.log(myArr2);

myArr2.pop();
// console.log(myArr2); //

myArr2.unshift(7); //[7, 1, 2, 3]
myArr2.shift(); // [2, 3]

// console.log(myArr2.includes(3)); 
// console.log(myArr2.indexOf(3)); 
// console.log(myArr2); 

const myArr = [1, 2, 3, 4, 5, 6];

console.log("A ", myArr); // 1, 2, 3, 4, 5, 6

const newArr1 = myArr.slice(2, 5);
console.log(newArr1); // 3, 4, 5
console.log("B ", myArr); // 1, 2, 3, 4, 5, 6

const newArr2 = myArr.splice(2, 5);
console.log(newArr2); // 3, 4, 5, 6

console.log("C ", myArr); // 1, 2

// Interview question : 
    // diffrence b/w slice and splice is in slice last index is not included and 
    // there is no change in original array.
    // But in splice last index is included and it changes the original array and
    // remove the spliced part form original array.

    




