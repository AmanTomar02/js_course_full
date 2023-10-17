let id1 = document.getElementById("id1")
console.log(id1)
console.log(id1.matches(".class"))// its false 
console.log(id1.matches(".box"))  // tis true
console.log(sp1.closest(".box"))
console.log(sp1.closest("#sp1"))
console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))