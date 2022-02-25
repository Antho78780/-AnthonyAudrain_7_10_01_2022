<template>
    <section>
		<form method="post">
			<p>{{titreSujet}}</p>
			<p class="obligatoire">{{titreObligatoire}}</p>
			<textarea v-model="titre" id="titreForms"></textarea>
			<div>
				<p class="test">{{  SujetArticle }}</p>
				<input @change="changeFile" type="file">
			</div>
				<textarea  v-model="sujet" id="message"></textarea>
		</form>
		<button type="button" class="modifButton" @click="envoyerSujet">Envoyer</button>
    </section>
</template>
<script>
import axios from "axios";
export default {
	data() {
		return {
			titreSujet: "Titre",
			titreObligatoire: "(Obligatoire)",
			SujetArticle: "Créer un nouveau sujet",
			apiPostCreateFile: "http://localhost:3000/post/postCreate/file",
			apiPostCreate: "http://localhost:3000/post/postCreate",
			
			titre: "",
			sujet: "",
			fileSujet: ""
		}
	},
	methods: {
		changeFile(e) {
			this.fileSujet = e.target.files[0];
		},
		envoyerSujet() {
			const recupStorage = JSON.parse(sessionStorage.getItem("usersIdToken"));
			const userId = recupStorage[0]
			const titre = this.titre;
			const sujet = this.sujet;

			const fd = new FormData();
			if(this.fileSujet) {
				const postUser = {titre, sujet, userId};
				console.log(postUser);
				fd.append("imagePost", this.fileSujet, this.fileSujet.name);
				fd.append("postUser", JSON.stringify(postUser));
				axios.post(this.apiPostCreateFile, fd)
				.then((res) =>  {
					if(res.status == 200) {
						window.location.href = "/#/accueil"
					}
					else {
						alert("Il y a une erreur")
					}
				})
			}
			else {
				const postUser = {titre, sujet, userId};
				fetch(this.apiPostCreate, {
					method: "POST",
					headers: {
						"Content-type" : "application/json"
					},
					body: JSON.stringify(postUser)
				})
				.then((res) => {
					if(res.ok) {
						window.location.href = "/#/accueil"
					}
				})
			}
		},
	}
}
</script>
<style>
 body {
    background-color: #b2d1fa;
  }
section {
  margin-top: 5%;
  text-align: center;
}
p {
  font-family: Verdana, Tahoma, sans-serif, Helvetica, sans-serif;
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
.size {
  font-size: 12px;
  color: #AA1414;
}
.obligatoire {
  font-size: 10px;
  color: #F01A1A
}
</style>
