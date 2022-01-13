const recupButton = document.querySelector(".button");
if(recupButton) {
    recupButton.addEventListener("click", function(){
        const recupAdresseMail = document.querySelector(".modifCompte");
        const recupMdp = document.querySelector(".modifCompte2");
        if(recupAdresseMail.value == "" || recupMdp.value == "") {
            console.log("Aucun compte détecté")
        }
        else {
            window.location.href="profil.html"
        }
    })
}