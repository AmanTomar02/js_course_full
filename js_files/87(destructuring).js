// let arr = [3, 4]
// let [a, b] = arr
// console.log(a, b)


// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let [ac, bc, cc, ...rest] = arr1//assinging value to the variable

// console.log(ac, bc, cc, rest)
// // 1 2 3 [ 4, 5, 6, 7, 8, 9 ] OUTPUT



// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let [a, , , , ...rest] = arr1
// console.log(a, rest)




/***********SPREAD SYNTEX ************/

let arr2 = [3, 4, 5, 6, 7, 8]
let obj2 = { ...arr2 }
console.log(obj2)


function sum(v1, v2, v3) {
    return v1 + v2 + v3

}

console.log(sum(...arr2))

let obj = {
    name: "aman",
    age: 12,
    add: "gwalior"
}

console.log({ ...obj, name: "rahul" })