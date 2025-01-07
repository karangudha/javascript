console.log("2" > 1);
//here two diffrent data type are compared, it is not a good practice to compare like this.

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//these will give diffrent output bcz comiler converting null to number bcz if this
//it will give diffrent output.

// so avoid comparing null from number.

console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined == 0);

//avoid this also.

console.log("2" === 0); //false bcz one is string and another is number.

//here === operator is used for compare diffrent data type, it will not convert the datatype.
