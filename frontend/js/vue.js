const app = new Vue({
    el: '#app',
    data:  {
        texte1Connexion: "Groupomania le nouveau réseau social pour communiqué entre collègue", 
        texte1Inscription: "Inscrivez vous pour accéder au site web",
        titreSujet: "Titre",
        titreObligatoire: "Obligatoire",
        SujetArticle: "Sujet",
        linkImg: "./images/icon-left-font-monochrome-black.svg",
    },
    methods: {
        buttonConnecter() {
            
            const emailLogin =  document.getElementById("idLogin").value;
            const passwordLogin =  document.getElementById("idPassword").value;
            const objetLogin = {emailLogin, passwordLogin};

            fetch (`http://localhost:3000/login`, {
                method: "POST", 
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(objetLogin)
            })
            .then((res) => {
                if(res.ok) {
                    window.location.href = "accueil.html";
                }
            })
        },
        buttonEnregistrer() {
            window.location.href = "inscription.html";
        },
        buttonEnregistrerFormulaire() {
            const prenom = document.getElementById("prenom").value;
            const nom = document.getElementById("nom").value;
            const emailRegister = document.getElementById("email").value;
            const passwordRegister = document.getElementById("password").value;

            const objetRegister = {prenom, nom, emailRegister, passwordRegister};
            console.log(objetRegister);

            fetch (`http://localhost:3000/register`, {
                method: "POST", 
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(objetRegister)
            })
            .then((req) => {
                console.log(req);
            })
        },
        buttonEnvoyer() {
            const titre = document.getElementById("titreForms").value;
            const sujet = document.getElementById("message").value;
            const objetSujet = {titre, sujet};
            console.log(objetSujet);

            fetch (`http://localhost:3000/login/sujetCreate`, {
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
            })
        },
    }
})
const apiAllSujet = fetch("http://localhost:3000/login/getAllSujet");
const recupArticle2 =  document.querySelector("#article2");
apiAllSujet
.then(res => res.json())
.then((sujet) => {
    console.log("Affichage de tout les sujets")
    console.log(sujet);
    for(let i =0; i<sujet.length;i++) {
       if(recupArticle2) {
            recupArticle2.innerHTML += `<article id="article2"><a href="/sujet.html?${sujet[i].id}">
            <h1 class="decoration">${sujet[i].titre}</h1><p class="decoration">${sujet[i].sujet}</p></a></article`
       }
    }
})
const apiOneSujet = fetch("http://localhost:3000/login/getOneSujet");
apiOneSujet
.then(res => res.json())
.then((sujet) => {
    console.log("Affichage du sujet")
    console.log(sujet);
})


