// primitives and objects in JS

// primitives data types  :- N N S S B B U

// N :  null
// N :  Number
// S :  String
// S :  Symbol
// B :  Boolean
// B :  BigInt
// U :  undefined

let a = null;
let b = 678;
let c = true;
let d = BigInt(8795) + BigInt(5);
let e = "Aman";
let f = Symbol("I ma symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof d);

// Non-primitives datatype :- object

const item = {
    "harry": true,
    "aman": false,
    "nigam": 57,
    "lovish": undefined,
    "abhay": null
}

console.log(item)
console.log("aman")