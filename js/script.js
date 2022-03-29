const listaEmail = ["pippofranco@gmail.com", "pippobaudo@gmail.com"]
const userSection = document.getElementById("user");
const computerSection = document.getElementById("computer");
const resultSection = document.getElementById("result");
const userLabel = document.getElementById("userlabel");
const computerLabel = document.getElementById("computerlabel");
let valido = false;

document.getElementById("submit").addEventListener("click", emailValidation);


function emailValidation(){
    let userEmail = document.getElementById("email").value;
    for(let i=0; i < listaEmail.length; i++){
        let emailVal = listaEmail[i] + "";
        if(userEmail === emailVal){
            valido = true;
        }
        console.log(valido, userEmail, emailVal)
    }
    if(valido){
        alert("Benvenuto! la email è valida");
        giocoDadi();
    } else{
        alert("L' email non è valida, riprova!")
    }
}

function giocoDadi(){
    let userDice = Math.floor(Math.random() * 6) + 1;
    let computerDice = Math.floor(Math.random() * 6) + 1;
    userLabel.classList.remove("visibility");
    computerLabel.classList.remove("visibility");
    const userCol = document.createElement("div");
    userCol.classList.add("dice");
    userCol.innerHTML = `
        <p>${userDice}</p>
    `;
    userSection.append(userCol);
    console.log(userDice, userSection, userCol)

    const computerCol = document.createElement("div");
    computerCol.classList.add("dice");
    computerCol.innerHTML = `
        <p>${computerDice}</p>
    `;
    computerSection.append(computerCol);
    console.log(computerDice, computerSection, computerCol)

    if(userDice > computerDice){
        const result = document.createElement("div");
        result.innerHTML = `
         <h1> Hai Vinto! Bravo!! </h1>
        `;
        resultSection.append(result);
    } else if(userDice < computerDice){
        const result = document.createElement("div");
        result.innerHTML = `
         <h1> Hai Perso! Riprova!! </h1>
        `;
        resultSection.append(result);
    } else{
        const result = document.createElement("div");
        result.innerHTML = `
         <h1>Parità</h1>
        `;
        resultSection.append(result);
    }
}