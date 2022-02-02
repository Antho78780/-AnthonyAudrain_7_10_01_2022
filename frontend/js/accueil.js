
const recupButton = document.querySelector("#ensembleButton");

if(recupButton) {
    recupButton[0].addEventListener("click", function(event){
        event.preventDefault();
        const formLogin = document.querySelector("#formLogin");
        if(formLogin[0].value == "" || formLogin[1].value == "") {
            console.log("Aucun compte détecté")
            alert("Champ non remplis")
        }
        else {
            console.log(formLogin[0].value);
            console.log(formLogin[1].value);
            
            const tableauLogin = [formLogin[0].value, formLogin[1].value];
            console.log(tableauLogin);
            const apiLogin = fetch(`http://localhost:3000/login`, {
                method : "POST",
                body: JSON.stringify(tableauLogin),
                    headers: {
                        'content-type' : 'application/json',
                        'Accept' : 'application/json'
                    }
            })
            apiLogin
            .then((res) => {
                if(res.ok) {
                    console.log("ok")
                    window.location.href ="accueil.html";
                }
                else {
                    alert("Mot de passe incorrect")
                }
            })
            console.log("Page suivante")
            ///window.location.href="accueil.html"
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

        const tableauRegister = [firstName, name, email, password];
        console.log(tableauRegister);

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
        if(validEmail() && validPrenom() && validNom() && password != "") {
            
            const apiRegister = fetch(`http://localhost:3000/register`, {
                method: "POST",
                body: JSON.stringify(tableauRegister),
                    headers: {
                        'content-type' : 'application/json',
                        'Accept' : 'application/json'
                    }
            });
            apiRegister
            .then((req) => {
                console.log(req)
            })
            console.log("Page suivante")
            ///window.location.href="accueil.html"///
        }
        else if (validEmail()  && validPrenom() && validNom() && password == ""){
            alert("champs incorrects");
        }
        else {
            alert("Champs Incorrects")
        }

    })

}


