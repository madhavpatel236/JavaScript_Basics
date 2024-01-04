console.log(Math);  // Type of the math function is object.

console.log(Math.abs(-4));  // converted negative values into the positive
console.log(Math.round(3.8));  // round of the values
console.log(Math.round(3.4));

console.log(Math.ceil(4.3)); // mark a ceil(high) value
console.log(Math.floor(4.3)); // mark a floor value

console.log(Math.min(4,3,76,34,76)); 
console.log(Math.max(4,3,76,34,76)); 


console.log(Math.random());  // From the Math.random() Function we will generate a random number between the 0-1 

//  suppose for generating the random number between 1-10 then,
console.log((Math.random() *10)+1);

// now suppose we will generate a number between 10 and 20 then,
const min =10;
const max =20;

console.log( Math.floor( (Math.random() * (max - min +1)) + min ) );  // (max - min +1)) denotes the range of the random generator values and after that we write a +min means start from that element in our case we start with the 10 and our range is 111 so we will go atlast 20.
