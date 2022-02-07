
const recupButton = document.querySelector("#ensembleButton");

if(recupButton) {
    	recupButton[0].addEventListener("click", function(event){
     	event.preventDefault();

		const formLogin = document.querySelector("#formLogin");
		const emailLogin = formLogin[0].value;
		const passwordLogin = formLogin[1].value;

        	const objetLogin = {emailLogin, passwordLogin};
        
		if (objetLogin.emailLogin == "" || objetLogin.passwordLogin == "") {
			console.log("Compte vide");
			alert("Champ non remplis")
		}
		else {
            console.log(objetLogin);
			const apiLogin = fetch(`http://localhost:3000/login`, {
				method : "POST",
				body: JSON.stringify(objetLogin),
				headers: {
					'content-type' : 'application/json',
					'Accept' : 'application/json',
                    'Authorization' : "Bearer"
				}
			})
			apiLogin
			.then((res) => {
				console.log(res);
				if(res.ok) {
				    ///window.location.href ="accueil.html";
				}
				else {
					console.log("Compte incorrect");
					alert("compte incorrect");
				}
			})
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
        
        function validEmail() {
            const verifEmail = emailRegister;
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
        const firstName = informationRegister[0].value;
        const name = informationRegister[1].value;
        const emailRegister = informationRegister[2].value;
        const passwordRegister = informationRegister[3].value; 

        const objetRegister = {firstName, name, emailRegister, passwordRegister};

        if(validEmail() && validPrenom() && validNom() && password != "") {
            
            console.log(objetRegister);
            const apiRegister = fetch(`http://localhost:3000/register`, {
                method: "POST",
                body: JSON.stringify(objetRegister),
                    headers: {
                        'content-type' : 'application/json',
                        'Accept' : 'application/json'
                    }
            });
            console.log("Page suivante")
            ///window.location.href="accueil.html"///
        }
        else if(validEmail() == false || validPrenom() == false || validPrenom() == false) {
            alert("Un ou plusieurs champ incorrect")
        }
    })

}





