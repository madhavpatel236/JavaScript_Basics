const user = new Object();
// const user = {}  // same to same meaning

user.name = "madhav";
user.age = 19;
user.email = "madhavpatel236@gmail.com";

console.log(user);



// 2 : we will create an object into the object means nested objects are allowed.
const brother = {
    name : "Parth",
    number : {
        PhoneNumber : 9999222211,
        PhoneNumber1 : 1111111111
    }
}

console.log(brother.number.PhoneNumber);


// ----->>>>>> How to add two or mode objects into one: 

const obj1 = {1:"one" , 2:"Two"}
const obj2 = {3:"Three" , 4:"Four"}
const obj3 = {5:"Five" , 4:"Six"}

// // 1 :  // in this type of methods we will get a object into the object form means this is not make a proper one object which is add the all object into one
// const ans = {obj1 , obj2 , obj3}
// console.log(ans);

// // 2 :
// const ans2 = Object.assign({} , obj1 , obj2 ,obj3) // same problume occure in this as upper method
// console.log(ans);

// //  3 : most widely used method or way
const ans3 = { ...obj1 , ...obj2 , ...obj3}
console.log(ans3);