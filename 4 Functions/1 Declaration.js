// // function function_Name(){

// //  }  function_Name();

// (1) :
function name(){
    console.log("M");
    console.log("a");
    console.log("d");
    console.log("h");
    console.log("a");
    console.log("v");
}
name();


// (2) :
function add(num1 , num2){
    return num1 + num2 ;
}
console.log(add(4,5));


// (3) : 
function add(num1 , num2){
    console.log(num1 + num2) ;
}
addEventListener(6,7);
// const result = add(6,5);
// console.log("Result : " , result);


// function add(num1 , num2){
//     console.log(num1 + num2) ;
// }
// add(6,"5");


// function add(num1 , num2){
//     console.log(num1 + num2) ;
// }
// add(6,'Madhav');



// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// function loginUserMassage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMassage("Madhav"));
// console.log(loginUserMassage());



// function check(num1){
//         return num1 ;
//     }
//     console.log(check(600,700,800));   // if we have only one perameter need and if we give more then two paramether then only one parameter will be go into the function


// function check(...num1) {   //  if we use the Spread method then we will get all the given value in the one array 
//         return num1 ;
//     }
//     console.log(check(600,700,800,900));   


// function check(val1,val2, ...num1){  // herre first 2 values are save in the val1 and val2 and after that all the values save into the  array because of the array
//         return num1 ;
//     }
//     console.log(check(600,700,800,900));   



// // +++++++++++++++++++++++++++++++++++ Intresting ++++++++++++++++++++++++++++++++++++++++++++++++



// num(5); // at the time of direct use of the function we will call at any space or line (upper side also) 
// function num(num1) {
//     return num1;
// }

// test(5); // when we will save the function in the variable then we will not call the upper side of the declaration wmust call the after the declaration because we will call the variable always after the declaration.
// const test = function num(num1) {
//     return num1;
// }

