const listaEmail = ["pippofranco@gmail.com", "pippobaudo@gmail.com"]
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
    } else{
        alert("L' email non è valida, riprova!")
    }
    
}