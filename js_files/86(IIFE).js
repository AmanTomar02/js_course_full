let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(343)
        }, 2000)
    })
}


// let f = async () => {
//     let b = await a()
//     console.log(b)
//     let c = await a()
//     console.log(c)
//     let d = await a()
//     console.log(d)
// }
// F()

// TO SOLVE THIS SHIT OF CREATIGN FUNCTION AGAIN AGAIN 
// WE ARE GOING TO USE IIFE :"immediately invoked function expression "

/*

(
{
    -------code------
}
)()

*/


(async () => {
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
})()

