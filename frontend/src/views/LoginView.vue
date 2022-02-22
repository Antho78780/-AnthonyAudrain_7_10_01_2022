<template>
    <section>
        <div>
          <img src="../assets/icon-left-font-monochrome-black.svg" class="img1">
          <p>{{texte1Connexion}}</p>
        </div>
			<label>
				<form id="formLogin">
					<input  type="email" v-model="emailLogin" placeholder="Addrese email" class="modifChampLogin">
					<input type="password" v-model="passwordLogin" placeholder="Mot de passe" class="modifChampLogin">
				</form>
				<form id="ensembleButton">
					<button type="button" @click="connecter" class="modifButton">Se connecter</button>
					<button type="button" @click="enregistrer" class="modifButton">s'enregistrer</button>
				</form>
				<div class="color">{{emailPasswordError}}</div>
			</label>
    </section>
</template>
<script>
	export default {
		data() {
        return {
            texte1Connexion: "Groupomania le nouveau réseau social pour communiqué entre collègue",
            apiLogin: "http://localhost:3000/users/login",

            emailLogin: "",
            passwordLogin: "",
            infosUsers: [],
            emailPasswordError: "",
        }
    },
    methods: {
        connecter() {
            const emailLogin =  this.emailLogin;
            const passwordLogin =  this.passwordLogin;
            const objetLogin = {emailLogin, passwordLogin};
            console.log(objetLogin)
            

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
                    this.emailPasswordError = "";
                    this.infosUsers.push(user.id, user.token);
                    sessionStorage.setItem("usersIdToken", JSON.stringify(this.infosUsers));
                    window.location.href = "/#/accueil"

                }
                else {
                    console.log(user.error)
                    this.emailPasswordError = user.error
                }
            })
            .catch((err) => {
                console.log(err)
            })
        },
        enregistrer() {
            window.location.href = "/#/register";
        },
    }
	}
</script>
<style >
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
    width: 50%;
    margin: auto;
  }
  .color {
    color: red;
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
    height: 50px;
    margin: 10px;
    width: 300px;
    font-size: 17px;
    
  }

  ::placeholder {
    padding-left: 10px;
    background-color: white;
  }
 
</style>
