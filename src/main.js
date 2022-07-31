const options = ["rock", "paper", "scissors"];
const box = document.getElementById("resp");
async function game() {
        try {
            let resp = await round()
            console.log(resp)
            box.innerHTML = resp;
        } catch(Err) {
            console.error(Err);
        }
}

function computerResponse() {
    let ran = Math.floor(Math.random() * 4);

    return options[ran];
}

async function playerResponse() {
    let resp = prompt("Rock, paper, or scissors?: ");

    return resp.trim().toLowerCase();
}

async function round() {
    const CR = computerResponse();
    const PR = await playerResponse();
    console.log(CR,PR);
    if (CR === PR) {
        return Promise.resolve("It's a tie!")
    }
    const DISCR = CR+PR;
    switch(DISCR) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            return Promise.resolve(`Computer wins with the move: ${CR} \nyour move was ${PR}`)
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            return `You win with the move: ${PR} !`
        default:
            return Promise.reject(Error)
    }

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

(async () => {
    await game();
})();