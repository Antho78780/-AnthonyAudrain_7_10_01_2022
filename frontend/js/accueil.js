const recupButton = document.querySelector(".modifButton");

if(recupButton) {
    recupButton.addEventListener("click", function(){
        const recupAdresseMail = document.querySelector(".modifAdresseMail");
        const recupMdp = document.querySelector(".modifMdp");
        if(recupAdresseMail.value == "" || recupMdp.value == "") {
            console.log("Aucun compte détecté")
        }
        else {
            console.log(recupAdresseMail.value);
            console.log(recupMdp.value);
            console.log("page suivante")
         
            window.location.href="profil.html"
        }
    })
    const creationCompte = document.querySelector(".inscription");
    creationCompte.addEventListener("click", function() {
        console.log(creationCompte);
        window.location.href="inscription.html"
        
    })
}

const informationRegister = document.querySelectorAll(".inscription2");
const buttonSuivant = document.querySelector(".buttonSuivant");

for(let i=0;i<informationRegister.length;i++) {
    buttonSuivant.addEventListener("click", function() {
        console.log(informationRegister[i].value)
    })
}


