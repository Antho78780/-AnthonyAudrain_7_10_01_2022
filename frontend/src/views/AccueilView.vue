<template>
    <main id="modifA">
            <img class="img1" :src="linkImg">
            <div id="flex-row">
                <a :href="hrefProfil"  class="modifTitre modifFlex"><p>{{texteProfil}}</p></a>
                <button @click="deconnecter" type="button" class="modifButton2 modifFlex">{{texteDeconnexion}}</button>
            </div>
      </main>
        <section id="section1">
            <h1 class="texte1">{{texteForums}}</h1>
            <a :href="hrefSujet"><p class="texte1">{{texteCreerSujet}}</p></a>
        </section>
        <article v-for-key="sujet in allSujet" id="articleJs">
                <h1 class="decoration titreSujet">{{sujet.titre}}</h1>
                <p class="modifPrenom">{{sujet.auteur}}</p>
                <p class="decoration">{{sujet.sujet}}</p>
                <div id="flex">
                    <textarea  class="modifText" placeholder="Ecrivez un commentaire"></textarea>
                    <p class="modifTemp">Créer le: {{sujet.date}} </p>
                </div>
            <!----
            <button type="button" class="modifButton mbutton">Supprimé le sujet</button>
            -->
        </article>
</template>
<script>
    export default {
        data() {
            return {
                apiGetAllSujet: "http://localhost:3000/post/getAllPost",
                texteCreerSujet : "Créer un nouveau sujet",
                texteDeconnexion: "Déconnexion",
                texteForums: "Forums",
                texteProfil : "Profil",
                hrefProfil: "profil.html",
                hrefSujet: "sujet.html",
                linkImg: "../images/icon-left-font-monochrome-black.svg",
                allSujet: [],
            }
        },
        mounted() {
            fetch(this.apiGetAllSujet)
            .then(res => res.json())
            .then((allPost) => {
                for(let post of allPost) {
                    let date = new Date(post.createdAt);
                    const datePost = date.toLocaleDateString() + " à " + date.toLocaleTimeString();
                    fetch(`http://localhost:3000/users/getOneUsers/${post.userId}`)
                    .then(res => res.json())
                    .then((user) => {
                        this.allSujet.push({
                            titre: post.titre,
                            sujet: post.sujet,
                            date: datePost,
                            auteur: user.prenom
                        })
                    })
                }
            })
        },
        methods: {
            deconnecter() {
                window.location.href = "connexion.html";
                sessionStorage.removeItem("usersIdToken");
            },
            envoisComments() {
                console.log("ok");
                
            }
        }
    }
</script>
<style scoped>
    body {
  background-color: #b2d1fa;
}
p {
  font-family: Verdana, Tahoma, sans-serif, Helvetica, sans-serif;
}
section {
  margin-top: 5%;
  text-align: center;
}
#formLogin {
  width: 20%;
  margin: auto;
}
#ensembleButton {
  display: flex;
  justify-content: center;
}
.modifButton {
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px;
  margin: 10px;
  transition: 0.5s;
  width: 200px;
}
.modifButton:hover {
  background-color: blue;
}
.modifChampLogin {
  border: 1px solid #dddfe2;
  border-radius: 5px;
  height: 40px;
  margin: 10px;
  width: 300px;
  font-size: 17px;
}

::placeholder {
  padding-left: 10px;
  background-color: white;
}
#formInscription {
  margin-top: 10%;
  width: 20%;
  margin: auto;
}
.modifChampInscription {
  margin: 10px;
  height: 30px;
  border: 1px solid gainsboro;
  border-radius: 5px;
  width: 200px;
  font-size: 15px;
}
.buttonSuivant {
  width: 210px;
  margin-left: 10px;
  margin-top: 20px;
  padding: 5px;
  border-radius: 5px;
  background-color: #0095f6;
  border: 0px;
  color: white;
  transition: 0.5s;
}
.buttonSuivant:hover {
  background-color: #1877f2;
}
.modifTitre {
  color: black;
  text-decoration: none;
  
  
}
#accueil {
  width: 1600px;
  margin: auto;
}
#modifA {
  display: flex;
  justify-content: space-between;
  background-color: #0056b3;
  display: flex;
  height: 100px;

  
}
#section1 {
  display: flex;
  justify-content:space-around;
  height: 100px;
  width: 1600px;
  margin: auto;
  margin-top: 20px;
}
.img1 {
  width: 300px;
  height: 110px;
  
}
#titreForms {
 width: 40%;
 height: 40px;
}
#message {
  width: 40%;
  height: 300px;
  margin: auto;

}
#articleJs{
  height: 300px;
  width: 900px;
  background-color: white;
  margin-top: 50px;
  border-radius: 5px;
  margin: auto;
  
}
.decoration {
  color: black;
  width: 100%;
  margin-left: 15px;
}
.titreSujet {
  text-align: center;
}
a {
  text-decoration: none;
  color: black;
}
#background {
  background-color: #b2d1fa;
}
.size {
  font-size: 12px;
  color: #AA1414;
}
.likes {
  text-align: right;
  margin-right: 30px;
}
i {
  font-family: FontAwesome;
  margin: 5px;
}
.modifButton2 {
  border: none;
  background-color: #0056b3;
  font-size: 17px;
  height: 10px;
  margin-top: 15px;
}
.infos {
  padding-left: 15px;
  padding-top: 5px;
  background-color: #00FFFF;
  height: 50px;
} 
.modifPrenom {
  background-color: #b2d1fa;
  width: 150px;
  height: 40px;
  border-radius: 5px;
  margin-left: 5px;
}
#flex-row {
  display: flex;
}
.modifFlex {
 padding: 40px;
 font-weight: bold;
}
.mbutton {
  margin-left: 70%;
  margin-top: 10%;
}
.color {
  color: #F01A1A;
  font-size: 20px;
  font-weight: bold;
}
.modifTemp {
 margin-left: 25%;
 font-weight: bold;
}
.obligatoire {
  font-size: 10px;
  color: #F01A1A
}
#flex {
  display: flex;
  margin-top: 15%;
}
.modifText {
  width: 34%;
  height: 35px;
  border: 1px solid #0056b3;
  margin-left: 5px;
}
</style>
