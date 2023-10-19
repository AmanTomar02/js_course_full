let arrjoke = [`What do you call a boomerang that wont come back ?
A stick`,

    `Where would you find an elephant
The same place you lost her`,

    `What is a cats favorite color?
Purrr-ple`,

    `What song does a cat like best?
Three Blind Mice`,

    `Where did the school kittens go for their field trip?
To the mew-seum`,

    `What kind of kitten works for the Red Cross?
A first-aid kit`]
console.log("The length of arr of joke ", arrjoke.length)

let num = Math.floor(Math.random() * arrjoke.length - 1) + 1
console.log(num)
document.write("This joke is for you ...!<br></br>", arrjoke[num])
document.body.style.backgroundColor="rgb(190, 204, 250)"