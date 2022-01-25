const recupButton = document.querySelector("#ensembleButton");

if(recupButton) {
    recupButton[0].addEventListener("click", function(event){
        event.preventDefault();
        const formLogin = document.querySelector("#formLogin");
        if(formLogin[0].value == "" || formLogin[1].value == "") {
            console.log("Aucun compte détecté")
        }
        else {
            console.log(formLogin[0].value);
            console.log(formLogin[1].value);
            console.log("page suivante")
         
            /**window.location.href="accueil2.html"**/
        }
    })
    recupButton[1].addEventListener("click", function() {
        window.location.href="inscription.html"
    })
}

const informationRegister = document.querySelector("#formInscription");
const buttonSuivant = document.querySelector(".buttonSuivant");
if(buttonSuivant) {
    buttonSuivant.addEventListener("click", function(event) {
        event.preventDefault();
        const firstName = informationRegister[0].value;
        const name = informationRegister[1].value;
        const email = informationRegister[2].value;
        const password = informationRegister[3].value; 

        const tableauFormulaire = [firstName, name, email, password];
        console.log(tableauFormulaire);

        function validEmail() {
            const verifEmail = email;
            if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(verifEmail)) {
                return true;
            }else {
                return false;
            };
        }
        function validPrenom() {
            const verifPrenom = firstName;
            if(/^[A-Za-z]{3,15}$/.test(verifPrenom)) {
                return true;
            }else {
                return false;
                
            }; 
        }
        function validNom() {
            const verifNom = name;
            if(/^[A-Za-z]{3,15}$/.test(verifNom)) {
                return true;
            }else {
                return false;
                
            }; 
        }
        if(validEmail() && validPrenom() && validNom()) {
            console.log("page suivante");
            window.location.href="accueil2.html"
        }
        else if (validEmail() == false || validPrenom() == false || validNom() == false){
            alert("champs incorrects");
        }

    })

}

