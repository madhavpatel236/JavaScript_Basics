
// // +++++++++++++++++++++++++++++++++ foreach +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

// // foreach loop cannot return the value sowe can must use the values in this perticular loop. 

// /*  Syntax : 
// Array.foreach ( function ()  {} )
// Array.foreach ( () => {} )
// */


// const names = ["MADHAV" , "PARTH" , "MANTHAN" , "ARJUN"]

// names.forEach( function(val) { 
//     console.log(val);
// } );

// console.log();


// names.forEach( (val) => {     //  here we cannot return the values.
//     console.log(val);
// } );

// console.log();


// names.forEach( (key ,val ,arr) => {     //  here we cannot return the values.
//     console.log(val , val , arr);
// } );

// console.log();


// // here we use the explicite function and then we will use the refrence of the Object directly.
// function printme(item){   // it is a simple function which we can use for the many Objects because this function work only print the values 
//     console.log(`Print ${item}`);
// }

// names.forEach( (printme) => {
//     console.log(printme);
// })




// +++++++++++++++++++++++++++++++++++++ Example +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Array > Objects ===>>> with the help of the foreach

const Data = [
    {
        name : "Madhav",
        age : 19
    },

    {
        name : "Parth",
        age : 24
    },

    {
        name : "Meet",
        age : 20
    }
]


Data.forEach(items => {
    console.log(items);
    console.log(items.age);
    console.log(items.name);
});