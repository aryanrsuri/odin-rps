const options = ["rock", "paper", "scissors"];
async function game() {

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
    switch (CPU) {
       case '' 
    }    
}
