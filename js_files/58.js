//Promise API

let p1 = new Promise((res, rej) => {
    setTimeout(() => {
        // res("value 1")
        rej("error value 1")
    }, 1000)
})
let p2 = new Promise((res, rej) => {
    setTimeout(() => {
        // res("value 2")
        rej("value error")
    }, 2000)
})
let p3 = new Promise((res, rej) => {
    setTimeout(() => {
        res("value 3")
    }, 3000)
})


// p1.then((value) => {
//     console.log(value);
// })
// p2.then((value) => {
//     console.log(value);
// })
// p3.then((value) => {
//     console.log(value);
// })



// method -1
// promise.all : 
/*OUTPUT

value 1
value 2
value 3

*/

// let promise_all = Promise.all([p1, p2, p3])
// promise_all.then((value) => {
//     console.log(value);
// })

// method - 2
// promise.allSetteld : 
/* OUTPUT
[ 
  { status: 'fulfilled', value: 'value 1' },
  { status: 'rejected', reason: 'value error' },
  { status: 'fulfilled', value: 'value 3' }
]
*/

// let promise_all = Promise.allSettled([p1, p2, p3])
// promise_all.then((value) => {
//     console.log(value);
// })

// method - 3
// promise.race

// output : value 1 

// let promise_all = Promise.race([p1, p2, p3])
// promise_all.then((value) => {
//     console.log(value);
// })

// method - 4
// promise.any


// let promise_all = Promise.any([p1, p2, p3])
// promise_all.then((value) => {
//     console.log(value);
// })



// method - 4
// promise.resolve


let promise_all = Promise.resolve("value 3")
promise_all.then((value) => {
    console.log(value);
})
