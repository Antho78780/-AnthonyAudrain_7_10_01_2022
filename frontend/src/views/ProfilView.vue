<template>
    <section id="app">
            <h1 class="modifFlex">Bienvenue {{user.prenom}}</h1>
            <p><strong>Prenom: </strong>{{user.prenom}} </p>
            <p><strong>Nom: </strong>{{user.nom}}</p>
            <p><strong>Email: </strong>{{user.email}}</p>
			<div>
				<p><strong>Met à jour ta photo de profil</strong></p>
				<input type="file" @change="ajoutPhoto">
			</div>
            <button @click="suppresion" type="button" class="modifButton">{{titreSuppresionCompte}}</button>
        </section>
</template>
<script>
    export default {
        data() {
            return {
                titreSuppresionCompte: "Suppresion de mon compte",
                user: "",
            }  
        },
		mounted() {
			const idUserssessionStorage = JSON.parse(sessionStorage.getItem("usersIdToken"));
			const users_id = idUserssessionStorage[0];
			fetch(`http://localhost:3000/users/getOneUsers/${users_id}`)
			.then(res => res.json())
			.then((data) => {
				console.log(data)
				this.user = data;
			})
		},

		methods: {
			suppresion() {
				const idUserssessionStorage = JSON.parse(sessionStorage.getItem("usersIdToken"));
				const users_id = idUserssessionStorage[0];
				fetch(`http://localhost:3000/deleteUsers/${users_id}`, {
					method: "DELETE",
					headers: {
						'Content-Type' : 'application/json'
					}
				})
				.then((res) => {
						if(res.ok) {
							alert("Votre compte à été supprimé")
							sessionStorage.removeItem("usersIdToken");
							window.location.href = "/#/login";
						}
					})
			},
			ajoutPhoto() {
			}
		}
    }
</script>
<style>
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
</style>
