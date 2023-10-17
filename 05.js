// pactice set chapter : 01


// Ques_01 : create a variable of type string and try to add a number to it ? 


let a = "aman"
let b = 6
console.log(a + b);


// Q:2 

console.log(typeof (a + b));

// Q:3 

const a1 = {
    name: "Aman",
    class: 12,
    isprincipal: false
}

// Q:4

a1['friends'] = "nigam"
a1['name'] = "Aman Tomar"
console.log(a1) // this will possible

//  no we cant change the const
// a1 = 24 

// Q:5

const dictionary = {
    atrocity: "an act of shocking cruelty",
    atrocity3: "an act of shocking cruelty",
    atrocity1: "an act of shocking cruelty",
    atrocity2: "an act of shocking cruelty",
}
console.log(dictionary['atrocity1'])