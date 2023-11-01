let arr1 = [23,54,13,2,87,543,9];
let arr2 = [123,154,113,12,187,1543,19];

console.log(typeof arr1);   // type : object.

arr1.push(111);   //  add the element at the start.
console.log(arr1);

arr1.pop(111);   // remove the element at the last.
console.log(arr1);

arr1.shift();   // remove the element at the start.
console.log(arr1);

arr1.unshift(111);  // add the values at the start.
console.log(arr1);


console.log(arr1.includes(121));  // for the chack the values.
console.log(arr1.indexOf(13));  // for finding the index of that perticular element.


let new_arr = arr1.concat(arr2);  // from the concat method main array cannot be change.
console.log(new_arr);

let new_arr2 = [...arr1, ...arr2];   // this is called {spread} function.
console.log(new_arr2);


console.log(Array.from("madhav"));  //  converted into the array
console.log(Array.from({name : "madhav"}));  // intersting because if we use this type of functions then we must define that how we create an array means with values only or with key and values.

let score = 100;
let score1 = 200;
let score2 = 300;

console.log(Array.of(score , score1 , score2));