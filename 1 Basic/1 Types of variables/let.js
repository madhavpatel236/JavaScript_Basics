let a = 10;
a = 20;
{
    let a = "madhav"
    console.log(a);
}
console.log(a);

// in let if we change the value of variable in the specific block then this changed value was changed for that perticular block this is not afffect the actual value of the variable.
// here we see that we first give a variable value as a 10 and in the box we give a value "madhav" but in the result we have a "madhav" as well as 10 because in the let, if we can change the value then outside of the block result cannot be affected.
// suppose if we not write a let in the block in the reinitializing then it works as a var.
// but at the time of the reinitializing in the same global level or that specific block then  we will not write again let, if we write a let again then this throw a error