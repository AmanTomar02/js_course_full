// practice set  chapter 5
//   p-1

// let arr=[12,3,4,4,5,5,6]
// let a = prompt("entert the number") 
// a=Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// p-2

// let arr = [12, 3, 4, 4, 5, 5, 6]
// let a;
// do {
//     a = prompt("entert the number")
//     a = Number.parseInt(a)
//     arr.push(a)
// } while (a != 0)
// console.log(arr)

// p-3

// let arr = [1, 2, 10, 450, 60, 66, 89, 120]
// let n = arr.filter((x) => {
//     return x % 10 == 0
// })
// console.log(n)


// p-3

// let arr = [1, 2, 10, 450, 60, 66, 89, 120]
// let n = arr.map((x) => {
//     return x*x
// })
// console.log(n)


// p-4

let arr = [1, 2, 3, 4]
let n = arr.reduce((x1, x2) => {
    return x1 * x2
})
console.log(n)
