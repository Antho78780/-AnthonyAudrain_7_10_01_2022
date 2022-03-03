<template>
    <section>
		<form method="post">
			<label class="strong">{{titreSujet}}</label>
			<label>
				<input type="text" v-model="titre" id="titreForms">
			</label>
			<div class="modifSujet">
				<label class="strong">{{SujetArticle}}</label>
				<label>
					<input class="modifButtonFichier" @change="changeFile" type="file">
				</label>
				<label>
					<textarea type="text" v-model="sujet" id="message"></textarea>
				</label>
				<button type="button" class="modifButton" @click="envoyerSujet">{{texteEnvoyer}}</button>
			</div>
		</form>
    </section>
</template>
<script>
import axios from "axios";
export default {
	data() {
		return {
			titreSujet: "Titre",
			SujetArticle: "Créer un nouveau sujet",
			apiPostCreateFile: "http://localhost:3000/post/postCreate/file",
			apiPostCreate: "http://localhost:3000/post/postCreate",
			texteEnvoyer: "Envoyer",
			
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
				console.log(this.fileSujet)
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
<style scoped>
	@media all and (max-width:1024px) {
		#titreForms{
			width: 100% !important;
		}

		#message {
			width: 100% !important;
		}

		.modifButton {
			background-color: #1877f2;
			color: white;
			border: none;
			border-radius: 6px;
			padding: 10px;
			margin: 10px;
			transition: 0.5s;
			width: 40% !important;
		}

		section {
			margin-top: 40% !important;
		}
		
	}
	section {
		margin-top: 10%;
		text-align: center;
	}

	#titreForms {
		width: 40%;
		height: 40px;
	}

	#message {
		width: 40%;
		height: 300px;
	}

	.flexSujet {
		display: flex;
		justify-content: center;
	}
	
	.strong{
		font-weight: bold;
	}

	.modifButton {
			background-color: green;
			color: white;
			border: none;
			border-radius: 6px;
			padding: 10px;
			margin: 10px;
			transition: 0.5s;
			width: 10%;
	}

	.modifSujet {
		margin-top: 2%;
	}

	label {
		display: block;
	}
</style>

