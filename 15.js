// chapter 4 prctice set 

// prob 1

let Name = "amn\""
console.log(Name.length)






// prob 2

let sentence = 'The quick brown fox jump over the lazy dog ';
const word = " foz"
console.log(sentence.includes(word)) //it shows the word prensent in the string

console.log(`the word "${word}" ${sentence.includes(word) ? `is` : `is not`} in the sentence `);




// prb4 

let str = "please give Rs1000"
let amount = Number.parseInt(str.slice("please give Rs".length))
console.log(amount)





// prob 5

let frnd = " deepak"
frnd[4] = "r"
console.log(frnd) // we cant change the charecter of sa string bcz it is imutable 
