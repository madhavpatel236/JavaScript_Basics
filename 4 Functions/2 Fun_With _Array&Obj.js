// // ++++++++++++++++++++++++ use a Obj into the Function :  ++++++++++++++++++++++++++++++++++++++++

// // create an obj 
const name = {
    FirstName : "Madhav",
    LastName : "Patel"
}

// // create an function
function hendleObject(any_obj){ // this is like a variable giving style now at the call time we will give the obj_Name 
    console.log(`Firstname is ${any_obj.FirstName} and last name is ${any_obj.LastName}. `);
}

// // calling the function
hendleObject(name);  // At the calling time we will give the function name. 



// // ++++++++++++++++++++++++++ use an Array into the Function : ++++++++++++++++++++++++++++++++++++++++

const myArray = [100,200,300,400,500];

function hendleObj(getArray){
    return getArray[2];
}
// console.log(hendleObj(myArray));
console.log(hendleObj([700,800,900,1000])); // if we give the value at the time of calling then this is in priority at the time of exicution.


