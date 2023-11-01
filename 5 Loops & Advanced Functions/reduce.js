
// ++++++++++++++++++++++++++++++++++++++ Reduce +++++++++++++++++++++++++++++++++++++++++++++++++++++++=

/* Syntax : 
    Data_Type variable_Name = Array_Name.reduce( (prevalues, currrValues) => () ,prevalues )
    Data_Type variable_Name = Array_Name.reduce( (prevalues, currrValues) =>   ,prevalues )
    Data_Type variable_Name = Array_Name.reduce( function(prevalues, currrValues) {} , preValues )


*/ 

const num = [1,2,3]

const demo = num.reduce((preValues , currValues) => ( preValues + currValues ) , 0)  // pre=0 (I) 0+1=1(pre) ,(II) 1+2=3(pre) ,(III) 3+3=6(pre)  
console.log(demo);


// // undrestaning will panding
const num1 = [1,[2,3]]

const demo1 = num1.reduce((preValues , currValues) => ( preValues + currValues ) , 0)  // pre=0 (I) 5+1=6(pre) ,(II) 6+2=8(pre)  ,(III) 8+3=11(pre)  , (IV) pre=0  0+2 =2(pre)  (v) 2+3=5(pre) 
console.log(demo1);



// ++++++++++++++++++++++++++++++++++++++ Example ++++++++++++++++++++++++++++++++++++++++++++++++++++++++=


const ShoppingCart =[
    {
        item : "Mobile",
        price : 20000
    },
    
    {
        item : "ipad",
        price : 50000
    },
    {
        item : "Laptop",
        price : 90000
    },
    {
        item : "Shoes",
        price : 5000
    },
    {
        item : "Hadphone",
        price : 2000
    },
    {
        item : "T-Shirt",
        price : 2000
    },
    {
        item : "Cover",
        price : 100
    }
]

const total = ShoppingCart.reduce( ( preValue , itemVal ) => (preValue + itemVal.price) ,0)
console.log(total);