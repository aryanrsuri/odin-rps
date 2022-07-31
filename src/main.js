const options = ["rock", "paper", "scissors"];
async function game() {
    for (let i=0; i < 5; i++) {
        try {
            round();
        } catch(Error) {
            console.error(Error);
        }

    }
}

async function computerResponse() {
    let ran = Math.floor(Math.random() * 4);

    return options[ran];
}

async function playerResponse() {
    let resp = prompt("Rock, paper, or scissors?: \n");

    return resp;
}

async function round(computerResponse, playerResponse) {
    let CPU = await computerResponse();
    let PRU = await playerResponse();
}

async function test() {
    let PR = await computerResponse();
    let CPU = await computerResponse();
    console.log(PR, CPU);
    if (PR == CPU) {
        return "It's a tie!"
    }

    console.log("test called");
}

(async () => {await test();})();