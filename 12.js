let marks =
{
    aman: 99,
    rohit: 77,
    love: 88,
    son: 99
}

// for (i = 0; i < Object.keys(marks).length; i++) {
//     console.log("The marks of " + Object.keys(marks)[i] + " are  " + marks[Object.keys(marks)[i]])
// }

// *** using for in loop ***//
for (let key in marks) {
    console.log("The marks of " + key + " are  " + marks[key])
}

// let cn = 4
// let i
// while (i!=cn) {
//     console.log("try again....")
//     i = prompt("enter the number ")
// }
// console.log("you have entered a correct number ....")


// problem 4

const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4;
}

console.log(mean(4, 3, 4, 5))