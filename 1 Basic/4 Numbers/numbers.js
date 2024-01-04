let num1 =20;
console.log(num1);

let num2 = new Number(2000000);
console.log(num2);
console.log(typeof num2); // from the use of Number() function we will see that the type of the data will convert into the object type not into the number type

console.log(num2.toString());  // Now our value is converted into the string and now we will use the all string function property like length.
console.log(num2.toString().length); 

console.log(num2.toFixed(2));  

let num3 = 23.7630;

console.log(num3.toPrecision(3)); // it is directyly round of the numbers. now it os converted into the strings

console.log(num2.toLocaleString());