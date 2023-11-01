// // const user = { }  // Example or syntax of creating the object.

// const user = {
//     name : "madhav",
//     age : 19,
//     location : "jamjodhpur",
//     email : "madhanpatel236@gmail.com",
//     isLoggedIn : false,
//     lastLoginDays : ["monday" , "saturday"]
// }

// //---->>>>>>> ways to invoke the property which is present into the Object.
// console.log(user.email);
// console.log(user["email"]);



// // ---->>>>>> now suppose we intialize the symbol so how we will add into the object.

const MySym = Symbol("key1");

const user1 = {
    name : "madhav",
    [MySym] : "parth",
    age : 19,
    location : "jamjodhpur",
    email : "madhanpatel236@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday" , "saturday"]
}

console.log(typeof user1[MySym]);



