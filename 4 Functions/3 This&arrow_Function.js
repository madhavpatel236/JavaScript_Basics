// // ++++++++++++++++++++++++++++++ This : +++++++++++++++++++++++++++++++++++++++++++++++++++++++

const user = {
    username : "Madhav",
    number : 972291917712112,

    welcomeMassage : function() {  // this function use to get a value which is outside of the block like {} and in the parent obj/function's variable.
        console.log(`${this.username} welcome to the website.`);
        // console.log(this); 

    } 
}
user.welcomeMassage();
user.username = "Parth";
user.welcomeMassage();

console.log(this);


// // ++++++++++++++++++++++++++++++++++ arrow : +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // Syntax : data_Type variable_Name = () => { ...... }

const arrow = function() {
    console.log("hello");
}
arrow();



const arrow1 = () => {
    console.log('Hello');
} 
arrow1();




const addTwo = (val1 , val2) => {
    return val1 + val2;
}
console.log(addTwo(5,6));

// // single line arrow function : 
const addtwo = (val1,val2) => /* we don't need to write {} for a single line */  /* we don't need to write a return keyword*/ val1 + val2   // here is a implicite function because he we will do not write {} and return keyword.
console.log(addtwo(1,2));         // data_type variable_name = () => ....

const addtwo1 = (val1,val2) => (val1 + val2);    // data_type variable_name = () => ()
console.log(addtwo1(4,3));
// we will understand as a if we write a { } in the function then we will need to write return statement and if we use () then we will not need to write a return statement.


// ++++++++++++++++++++++++++ intersting ++++++++++++++++++++

const newval = () => {name : "Madhav"} // it gives undefined because we don't use => () we only use {}.  so from thet we understand that if we use one line arrow function then we will must use the => () at the return statement
console.log(newval())

const newval1 = () => ({name : "Madhav"}) //  now we wrap a {} into the (). 
console.log(newval1())