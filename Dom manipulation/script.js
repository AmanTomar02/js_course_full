// const mybody = document.body;
// console.log(mybody)

// const box2 = document.getElementById("box2");
// console.log(box2)

// const divs = document.getElementsByTagName('div')
// console.log(divs)

// const divs1 = document.getElementsByTagName('p')
// console.log(divs1)


// const boxes = document.getElementsByClassName('random')
// console.log(boxes)



/**how to modify html */

// const box1= document.getElementById("box1")
// box1.innerHTML= "<h3>hey</h3>"

// how to create element 

const newp = document.createElement('p')
newp.innerText = "hey hello"

const container = document.getElementById("c1")
container.appendChild(newp)

