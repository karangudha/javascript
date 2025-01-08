let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleString('Us', {
    calendar: "long"
}));
// console.log(myDate.toDateString());
// console.log(typeof myDate);

let myCreated = new Date(2023, 13, 23);
//console.log(myCreated.toDateString());
console.log(myDate.getSeconds());

