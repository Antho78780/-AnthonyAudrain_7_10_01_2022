
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

        infosUsers: [],


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
            .then((user) => {
                if(user.message) {
                    console.log(user);
                    this.infosUsers.push(user.prenom, user.nom, user.email, user.id, user.token);
                    localStorage.setItem("InfosUsers", JSON.stringify(this.infosUsers));

                    window.location.href="accueil.html"
                    
                }
                else {
                    alert("Informations incorrect");
                }
            })
        },
        deconnecter () {
            localStorage.removeItem("InfosUsers");
            window.location.href="connexion.html"
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

            const infosUsersSujet = JSON.parse(localStorage.getItem("InfosUsers"));
            console.log(infosUsersSujet);
            const prenomSujet = infosUsersSujet[0];
            const nomSujet = infosUsersSujet[1];
            const emailSujet = infosUsersSujet[2];
            const userIdSujet = infosUsersSujet[3];
            const titre = this.titre;
            const sujet = this.sujet;

            if(titre == "" || sujet == "") {
                alert("Vous ne pouvez pas envoyé de champs vide")
            }
            else {
                const objetSujet = {titre, sujet, prenomSujet, nomSujet, emailSujet, userIdSujet };
                fetch (this.apiSujetCreate, {
                    method: "POST", 
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(objetSujet)
                })
                .then((res) => {
                    if(res.ok) {
                       window.location.href ="accueil.html"
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
        console.log(sujet);
        for(let i=0; i < sujet.length;i++) {
            recupArticle.innerHTML += `<article id="articleSuivant"><p class="infos">${sujet[i].prenom}</p><h1 class="decoration titreSujet">${sujet[i].titre}</h1>
            <p class="decoration">${sujet[i].sujet}<p class="likes"><i class="fa-solid fa-thumbs-up"></i>${sujet[i].likes}</p>
            <p class="likes"><i class="fa-solid fa-thumbs-down"></i>${sujet[i].disLikes}</p></article>`

        }
    }

})





