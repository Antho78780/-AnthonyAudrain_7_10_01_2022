<template>
    <section>
        <div>
            <img src="../assets/icon-left-font-monochrome-black.svg" class="logoGroupomania" alt="logo de l'entreprise groupomania">
            <p>{{texteConnexion}}</p>
        </div>
        <label>
        <form id="formLogin">
            <input  type="email" v-model="emailLogin" placeholder="Addrese email" class="modifChampLogin">
            <input type="password" v-model="passwordLogin" placeholder="Mot de passe" class="modifChampLogin">
        </form>
        <form id="ensembleButton">
            <button type="button" @click="connecter" class="modifButton">{{texteSeConnecter}}</button>
            <button type="button" @click="enregistrer" class="modifButton">{{texteEnregistrer}}</button>
        </form>
        <div class="colorError">{{emailPasswordError}}</div>
        </label>
    </section>
</template>
<script>
	export default {
		data() {
        return {
            texteConnexion: "Groupomania le nouveau réseau social pour communiqué entre collègue",
            apiLogin: "http://localhost:3000/users/login",

            emailLogin: "",
            passwordLogin: "",
            infosUsers: [],
            emailPasswordError: "",
            texteSeConnecter: "Se connecter",
            texteEnregistrer: "S'enregistrer"
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
                    this.infosUsers.push(user.id, user.token);
                    sessionStorage.setItem("usersIdToken", JSON.stringify(this.infosUsers));
                    window.location.href = "/#/accueil"

                }
                else {
                    console.log(user)
                    this.emailPasswordError = user.error
                }
            })
        },
        enregistrer() {
            window.location.href = "/#/register";
        },
    }
	}
</script>
<style scoped>
    @media all and (max-width: 1024px)  {
        .logoGroupomania{
            width: 70% !important;

        }

        section {
            margin-top: 40% !important;
        }
    }
    section {
        text-align: center;
        margin-top: 10%;
        
    }

    #formLogin {
        width: 100%;
        margin: auto;
    }

    .colorError {
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
        width: 40%;
    }

    .modifButton:hover {
        background-color: blue;
    }

    .modifChampLogin {
        border: 1px solid #dddfe2;
        border-radius: 5px;
        height: 50px;
        margin: 10px;
        width: 70%;
        font-size: 17px;  
    }
    
    .logoGroupomania{
        width: 20%;
    }
</style>