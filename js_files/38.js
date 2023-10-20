// chapter 7 

// prob:1
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"

// prob:3

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "blue"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "blue"

// prob-4
// make all li bg red

Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.background = "yellow";
})