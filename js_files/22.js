let num = Math.floor(Math.random() * (10 - 1) + 1)
console.log(num)// random number  

let x = prompt("enter the number") // user number 
x = Number.parseInt(x)
console.log(x)
let chance = 0;
while (x != num) {
    // if (x == num){
    //     console.log("EQUAL")
    // }
    if (x > num) {
        console.log("Your number is greater than the orignal number. ")
    }

    else {
        console.log("Your number is smaller than the orignal number .")
    }
    x = prompt("enter the number")
    chance++
}
console.log("you win....")
console.log("you have taken ", chance, " chance to guess the orignal naumber ...")