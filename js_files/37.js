let id1 = document.getElementById("id1")
// console.log(id1)


/********* .matches ********/ 
// NOTE: it only check if element matchs the given css selector 

// console.log(id1.matches(".class"))// its false
// console.log(id1.matches(".box"))  // tis true


/********* .closest ********/
// NOTE: it only check nearest ancestor matches the given css selector 

// console.log(sp1.closest(".box"))
// console.log(sp1.closest("#sp1"))


/********* .contains ********/

// NOTE: it return true if element-A is inside element-B 

console.log(id1.contains(sp1)) //true
console.log(id2.contains(sp1)) //flase
console.log(sp1.contains(sp1))  //true