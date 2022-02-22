<template>
    <section>
		<form method="post">
			<p>{{titreSujet}}</p>
			<p class="obligatoire">{{titreObligatoire}}</p>
			<textarea v-model="titre" id="titreForms"></textarea>
			<div>
				<p class="test">{{  SujetArticle }}</p>
				<input type="file">
			</div>
				<textarea  v-model="sujet" id="message"></textarea>
		</form>
		<button type="button" class="modifButton" @click="envoyerSujet">Envoyer</button>
    </section>
</template>
<script>
export default {
	data() {
		return {
			titreSujet: "Titre",
			titreObligatoire: "(Obligatoire)",
			SujetArticle: "Créer un nouveau sujet",
			apiSujetCreate: "http://localhost:3000/post/postCreate",
			
			titre: "",
			sujet: "",
		}
	},
	methods: {
		envoyerSujet() {
			const recupStorage = JSON.parse(sessionStorage.getItem("usersIdToken"));
			const userId = recupStorage[0]
			const titre = this.titre;
			const sujet = this.sujet;

			if(titre == "" || sujet == "") {
				alert("Vous ne pouvez pas envoyé de champs vide")
			}
			else {
				const objetSujet = {titre, sujet, userId};
				console.log(objetSujet)
				fetch (this.apiSujetCreate, {
					method: "POST", 
					headers: {
						'Content-Type' : 'application/json'
					},
					body: JSON.stringify(objetSujet)
				})
				.then(res => res.json())
				.then(() => {
						window.location.href= "/#/accueil"
				})
			}
		}
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
