
const user = {
    name : "madhav",
    age : 19,
    location : "jamjodhpur",
    email : "madhanpatel236@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday" , "saturday"]
}

// console.log(user.email);
// Object.freeze(user);   // from the freeze property we will freeze the changes of the perticular object's elements.
// user.email = "kalavadiyamadhav@gmail.com";
// console.log(user.email);


console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty("lastName"));  // check the key(Property) is present or not. 

