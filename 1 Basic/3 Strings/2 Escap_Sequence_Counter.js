// from the escap sequence counter we will directly use the ` in the middle of the `......sentence.....` ,for that we will use the \.
// \ this is not count in the length


let name1 = `my name is\' madhav`
console.log(name1) 

let name2 = 'my brother\'s name is parth'
console.log(name2)
console.log(name2.length)


let name3 = `i am a\n student.` // after the ise of the \ content goes to the down
console.log(name3) 

let name4 = `i am a\t student.` // add a tab space
console.log(name4)


let name5 = `i am a\r student at saffrony collage.` // write a contect whis is after the \r 
console.log(name5)
