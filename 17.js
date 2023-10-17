// Array methods 

let num =[1,2,3,4,5]
let b= num.toString()// now its become string 
console.log(b, typeof b) //1,2,3,4,5 string

let c=num.join("_")
console.log(c , typeof c) //1_2_3_4_5 string

// let r=num.pop()
// console.log(num)
// console.log(r,"it is poped ")
let r=num.push(7)
console.log(num)
console.log(r,"is pushed.")