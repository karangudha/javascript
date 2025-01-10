const newObj = new Object() //singleton object

const tinderUser = {}; //litral object
tinderUser.name = "karan"
tinderUser.age = 12

//we can define property of object like above.

// const regularuser = {email : "some@gmail.com", fullname : { userfullName: name: karan, age: 12}}
const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullName: {
            name: "karan",
            age: 12
        }
    }
}


//merging of object

const obj1 = {1 : "2", 2: "a"}
const obj2 = {4 : "2", 5: "a"}

const obj3 = {obj1, obj2}; // {{1 : "2", 2: "a"},{4 : "2", 5: "a"}}
const obj4 = Object.assign({}, obj1, obj2); //{1 : "2", 2: "a", 4 : "2", 5: "a"}

const obj5 = {...obj1, ...obj2}; //{1 : "2", 2: "a", 4 : "2", 5: "a"}

//console.log(obj4);

//const user = [ { name: "k", age: 12 }, { key: 233, place: "pl" } ]
           //[           0           ,           1               ]
const user = [
    {
        name: "k",
        age: 12
    },
    {
        key: 233,
        place: "pl"
    }
]
// console.log(user[1].key); //233
//console.log(Object.keys(user[1])); //[ 'key', 'place' ]
// console.log(Object.keys(user)); //[ '0', '1' ]
// console.log(Object.values(user[0])); //['k', '12']
// console.log(Object.entries(user)); //[ [ '0', { name: 'k', age: 12 } ], [ '1', { key: 233, place: 'pl' } ] ]
// console.log(Object.entries(user[1])); //[ [ 'key', 233 ], [ 'place', 'pl' ] ]

// to check wheter that object contain that property or not.
//console.log(user[0].hasOwnProperty('name')); //true


//Object destructure


const course = {
    coursename : "JS in hindi",
    price: "999",
    courseInstructor: "karan"
}


//when we want distructor an object we can define it as below,
const {price} = course;  
//we can rename it also
const {price : p, coursename : c} = course;  // here 

console.log(p); // 999
console.log(price); //999
console.log(c); //"JS in Hindi"



  