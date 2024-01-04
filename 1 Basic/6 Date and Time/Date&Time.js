
let my_Date = new Date();
console.log(typeof my_Date);  // type of the Date is object.
console.log(my_Date);   // this is not fully understandable.
console.log(my_Date.toString());   // with the help of the toString() ,function we will convert into the readble condition as well as as per the indian standerd time.

//  some of the different formate to display the date and time : 
// console.log(my_Date.toDateString()); 
// console.log(my_Date.toLocaleString());
console.log(my_Date.getTime());
console.log(my_Date.getMonth());
console.log(my_Date.getDate());
console.log(my_Date.getDay());

let my_Custome_Date = new Date(2023,9,17);   // yy,mm,dd
let my_Custome_Date2 = new Date("10-23-2023");   //  " mm-dd-yy "
console.log(my_Custome_Date.toDateString());
console.log(my_Custome_Date2.toDateString());

r
let myT = Date.now();   //  from the now() function we will recive output as a many numbers which is the milisecond, means when they arrived.
console.log(myT); // for convert into the second the we will divide the function with the 1000.
console.log(my_Custome_Date.getTime()); // this function mainly use for comare the time , who will arive the first.
