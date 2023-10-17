// chapter 7 

// prob:1
// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "red"

Array.from(document.getElementsByTagName("li")).forEach((Element) => { Element.style.background = "yellow" })