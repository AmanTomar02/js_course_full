let a = [
    "Initialixing Hack tool ",
    "Connecting to facebook",
    "Connecting to server ",
    "Connecting failed. Retrying ",
    "Connecting to server 2",
    "Connection Successfully..",
    "Username IamAman",
    "Trying BruteForce.. ",
    "200k passwords tried ....",
    "Match not found",
    "Another 200k passwords tried ....",
    "Match found",
    "Accessing Account",
    "hack Successfully",


]


const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(true) }, seconds * 1000)
    })
}


const showHack = async (messages) => {
    await sleep(2)
    text.innerHTML = text.innerHTML + messages + "<br>"
}



(async () => {
    for (let i = 0; i < a.length; i++) {
        await showHack(a[i]);
    }
})()
