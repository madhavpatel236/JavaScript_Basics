// map :  in the map function we will change the array element by performing some task but main array cannot be change. 

// let arr = [1,2,3,4,45,40,398,2]
// let x;
// arr.map((x)=>{
//     x = x+1
//     console.log(x);
// })
// console.log(arr);

// let arr = [1,2,3,4,45,40,398,2]
// let x;
// let a = arr.map((x)=>{
//     console.log(x);
//     return x + 1
// })
// console.log(a);


// let arr = [1,2,3,4,45,40,398,2]
// console.log("main array : " ,arr)
// let make_function = (value)=>{
//     return value+1
// }
// let a = arr.map(make_function)
// console.log(a);



// // Filter : in filter we will check the given condition and if whatever vakues mathch that condition the that will be write, this is also not change the orginal array
// let arr = [1,2,3,4]
// let x;
// let  a = arr.filter(( x1 )=>{
//     return x1<3
// })
// console.log(a);


// Reduce : reduce method was perform the given task and after that they give a specific value not the array.
// reduce function has a two or more arguments.
// in reduce function our given operation was do with all the members.
let arr = [1,2,3,4]
let x;
let  a = arr.reduce(( x1 , x2 )=>{
    return x1+x2
})
console.log(a);