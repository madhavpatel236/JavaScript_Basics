let num = [1,23,43,12,5,98,25]

// slice : in the slice function main array will not be change.
let newNum = num.slice(4)
// let newNum = num.slice(2,6)
console.log(newNum);
console.log(`original array is ${num}`);
// in the slice method we will cut the array.
// in this method the original araay will not be change


// splice : in the splice function main array will be change.
num.splice(3, 2 ,200 , 300 , 400 , 500 , 600 , 700 , 800) // here 3 is denote as the from the 3rd index we will delete and replace(new values) the values from the main array and second value which is 2 is denote the how many item will be removed.
console.log(num);

num.splice(3 ,200 , 300 , 400 , 500 , 600 , 700 , 800)
console.log(num)

let delete_element = num.splice(3, 2 ,200 , 300 , 400 , 500 , 600 , 700 , 800) // for store the deleted values.
console.log(delete_element);

// in splice method we will cut the specific values and replace them from the new values which is write in this method.
// in this method we can change the amin array.
// we will also print the deleted element