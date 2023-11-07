//  local storage
// localStorage.setItem("name", "aman")

let key = prompt("enter the key ")
let value = prompt("enter the value ")

localStorage.setItem(key, value)

console.log(`key : ${key} and value : ${localStorage.getItem(key)}`)

