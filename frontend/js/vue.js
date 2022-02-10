
const app = new Vue({
    el: '#app',
    data:  {
        texte1Connexion: "Groupomania le nouveau réseau social pour communiqué entre collègue", 
        texte1Inscription: "Inscrivez vous pour accéder au site web",
        titreSujet: "Titre",
        titreObligatoire: "Obligatoire",
        SujetArticle: "Créer un nouveau sujet",
        linkImg: "../images/icon-left-font-monochrome-black.svg",


        apiLogin: "http://localhost:3000/login",
        apiRegister: "http://localhost:3000/register",

        apiSujetCreate: "http://localhost:3000/sujetCreate",

        apiProfil: "http://localhost:3000/getOneProfil/:id",


        emailLogin: "",
        passwordLogin: "",

        prenom: "",
        nom: "",
        emailRegister: "",
        passwordRegister: "",

        titre: "",
        sujet: "",

        hrefSujet: "sujet.html",
        hrefProfil: "profil.html",
        hrefSuppresion : "deleteCompte.html",
        hrefConnexion: "connexion.html",
        hrefDeconnecter: "connexion.html",

        champ: "",

        

    },
    methods: {
        
        connecter() {
            const emailLogin =  this.emailLogin;
            const passwordLogin =  this.passwordLogin;
            const objetLogin = {emailLogin, passwordLogin};

            fetch (this.apiLogin, {
                method: "POST", 
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(objetLogin)
            })
            .then(res => res.json())
            .then((msgLogin) => {
                console.log(msgLogin);
                if(msgLogin.message) {
                    localStorage.setItem("token", msgLogin.token);
                    localStorage.setItem("userId", msgLogin.id);
                    window.location.href = "accueil.html"
                }
                else {
                    alert("Informations incorrect");
                }
            })
        },

        enregistrer() {
            window.location.href = "inscription.html";
        },

        enregistrerFormulaire() {
            const prenom = this.prenom;
            const nom = this.nom;
            const emailRegister = this.emailRegister;
            const passwordRegister = this.passwordRegister;

            const objetRegister = {prenom, nom, emailRegister, passwordRegister};
            console.log(objetRegister);

            fetch (this.apiRegister, {
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json',
				    'Accept': 'application/json',
                },
                body: JSON.stringify(objetRegister)
            })
            .then((res) => {
                if(res.ok) {
                    window.location.href = "connexion.html"
                }
            })
        },

        envoyerSujet() {

            const userId = localStorage.getItem("userId");
            const titre = this.titre;
            const sujet = this.sujet;

            if(titre == "" || sujet == "") {
                alert("Vous ne pouvez pas envoyé de champs vide")
            }
            else {
                const objetSujet = {titre, sujet, userId};
                fetch (this.apiSujetCreate, {
                    method: "POST", 
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(objetSujet)
                })
                .then((res) => {
                    if(res.ok) {
                       window.location.href = "accueil.html"
                    }
                });
            }
        },

    },
})

const recupArticle = document.querySelector("#articleJs");
fetch("http://localhost:3000/getAllSujet")
.then(res => res.json())
.then((sujet) => {
    if(recupArticle) {
        for(let i=0; i < sujet.length;i++) {
            recupArticle.innerHTML += `<article id="articleSuivant"><p class="infos">Utilisateur: ${sujet[i].userId}</p><h1 class="decoration titreSujet">${sujet[i].titre}</h1>
            <p class="decoration">${sujet[i].sujet}<p class="likes"><i class="fa-solid fa-thumbs-up"></i>${sujet[i].likes}</p>
            <p class="likes"><i class="fa-solid fa-thumbs-down"></i>${sujet[i].disLikes}</p></article>`

        }
    }

})
const userId = localStorage.getItem("userId");
console.log(userId)
fetch(`http://localhost:3000/getOneProfil/${userId}`)
.then(res => res.json())
.then((sujet) => {
    console.log("Affichage du Profil")
    console.log(sujet);
})







