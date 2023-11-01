
// +++++++++++++++++++++++++++++++++++++ filter +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* Syntex : 
Arrays.filter( () => () )
Arrays.filter( () => )
Arrays.filter( function(){} ) */


// // filter function return the values and from save the filter values in the variable we can fetch this values at any where.

const num = [1,2,3,4,5,6,7,8,9]

// const test = num.filter ( (item) => item < 5 )
const test = num.filter ( function(item)  {
    return item < 5
})
console.log(test);




// +++++++++++++++++++++++++++++++++++ Example +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const liberary = [
    {
        book : "one" , PubliceingYear : 1994
    },
    {
        book : "two" , PubliceingYear : 1932
    },
    {
        book : "three" , PubliceingYear : 2000
    },
    {
        book : "four" , PubliceingYear : 1999
    },
    {
        book : "five" , PubliceingYear : 2004
    },
    {
        book : "six" , PubliceingYear : 1974
    },
    {
        book : "seven" , PubliceingYear : 2020
    },
    {
        book : "Eight" , PubliceingYear : 2016
    },
    {
        book : "nine" , PubliceingYear : 1974
    },
    {
        book : "ten" , PubliceingYear : 2000
    }
]

const find = liberary.filter( (bk) => (bk.PubliceingYear === 2000) )
console.log(find);

const find2 = liberary.filter( (bk) => (bk.book === "two") )
console.log(find2)

const find3 = liberary.filter( (bk) => (bk.PubliceingYear === 2000 && bk.book === "ten") )
console.log(find3)