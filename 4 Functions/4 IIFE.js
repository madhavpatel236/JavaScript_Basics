// IIFE : Immidiately invoked Function Expression. 
// Syntax : (Function declaration) (Function calling);
// we will use the IIFE because if we need for any perticular function to stop the globle scope pollute then for that perticular function we will use the IIFE

// Normal Function : 
function demo (){
    console.log("Hello User.");
}
demo();

//  Immidiate Function : () ();
( function test(){
    console.log("Simple Functio in the Immidiate function");
    console.log();
}) ();

( () => { 
    console.log("arrow function in the immidiate function");
    console.log();
} ) ();

( (data1) => { 
    console.log(`arrow function with the arguments ${data1}`);
    console.log();
} ) (5);
