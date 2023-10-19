// STONE PAPER  scissors GAME

let user = prompt("s ,p ,c")
let cpuInput = Math.floor(Math.random() * 3)
// console.log(cpuInput)
let cpu = ["s", "p", "c"][cpuInput]

const match = (cpu, user) => {
    if (cpu === user) {
        return "nobady";
    }
    else if (cpu === "S" && user === "P") {
        return "user";
    }
    else if (cpu === "S" && user === "c") {
        return "cpu";
    }
    else if (cpu === "p" && user === "s") {
        return "cpu";
    }
    else if (cpu === "p" && user === "c") {
        return "user";
    }
    else if (cpu === "c" && user === "p") {
        return "cpu";
    }
    else if (cpu === "c" && user === "s") {
        return "user";
    }
}

let result = match(cpu, user)
// console.log(`cpu : ${cpu}  and user :${user} The winner is :${result}`)
document.write(`cpu : ${cpu.toUpperCase()} <br> user : ${user.toUpperCase()} <br> The winner is : ${result.toUpperCase()}`)