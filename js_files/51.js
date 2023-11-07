// make a digital clock 

let heading = document.getElementById("clock")

setInterval(() => {
    let a = new Date()
    heading.innerHTML = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds()
}, 1000)


