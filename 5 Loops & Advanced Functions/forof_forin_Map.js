// +++++++++++++++++++++++++++++++++++++ forof ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const num = [1,2,3,4,5,6]

console.log("Forof----------------------------------------------");
for (const item of num) {
    console.log(item);
}



const greeting = "Hello World!"

for (const greet of greeting) {
    console.log(greet);
}



// NOTE : For the object we cannot go for the forof loop.
const myObj  = {
    name : "Madhav",
    LastName : "Karavadiya",
    age : "19"
}

// for (const data of myObj) {
//     console.log(data);
// }



// +++++++++++++++++++++++++++++++++++++++++++++++ Map ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Map :  

/*
Syntax : 
const variable_Name = array_Name.map(function(){})
const variable_Name = array_Name.map( () => ())
const variable_Name = array_Name.map( () => )
*/

// // map in the Array

console.log("Map -------------------------------------");
const arr = [1,2,3,4,5]
const test = arr.map( (res) => (res+10))
// const test = arr.map( (res) => (res[key]))    // wrong 
console.log(test);

const arrr = [
    {obj : "One" , val : "oo"},
    {obj :"two" , val : "tt"}]
const testt = arrr.map( (res) => (res))
console.log(testt);


const map = new Map()      // Here we intialize the Map() function into the map variable.
map.set('In' , "India")
map.set('Fn' , "France")
map.set('Ge' , "Germeny")
map.set('In' , "India")     // Here we noticed that we will not write a same key and values , and if we write then Map() cannot be executed second time , and it is a order peserve function.

console.log(map);

for (const key in map) {
    console.log(key);
}

// Use Forof in the Map()

// Here we access the values of the Map() with the help of the forof Function
for (const keys of map) {
    console.log(keys);
}

for (const [keys , values] of map) {   // from that we will get both keys and values
    console.log( ` key is ${keys} and value is ${values}`);
}





// ++++++++++++++++++++++++++++++++++++ forin ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Forin loop generally use for the fatching the data from the object but we will also fetch the data from the array


// forrin in objects 
const myObj2  = {
    name : "Madhav",
    LastName : "Karavadiya",
    age : "19"
}

console.log("Forin------------------------------------------------------");
for (const data in myObj2) {
    console.log(data);
}

for (const data in myObj2) {
    console.log(`${data} :- ${myObj2[data]}`);
}


// forin in Array : 

const num1 = [1,2,3,4,5,6,7,8,9]

for (const key in num1) {
    console.log(`keys(index) is : ${[key]}`);
}

for (const key in num1) {
    console.log(` values is ${num1[key]}`);
}


// forin in the Map() :  we cannot use the forin in the map function for the invoking.

const map1 = new Map()     
map1.set('In' , "India")
map1.set('Fn' , "France")
map1.set('Ge' , "Germeny")
map1.set('In' , "India")    


for (const key in map1) {
    console.log(key);
}

