<template>
    <section>
        <div>
            <img src="../assets/icon-left-font-monochrome-black.svg" class="img1">
            <h1>{{texte1Inscription}}</h1>
        </div>
            <label>
                <form method="post" id ="formInscription">
                    <input type="text" v-model="prenom" placeholder="prénom" class="modifChampInscription">
                    <input type="text" v-model="nom" placeholder="nom" class="modifChampInscription">
                    <input type="email" v-model="emailRegister" placeholder="e-mail" class="modifChampInscription">
                    <input type="password" v-model="passwordRegister" placeholder="password" class="modifChampInscription">
                    <button @click="enregistrerFormulaire" type="button" class="buttonSuivant">Valider</button>
                </form>
            </label>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                texte1Inscription: "Inscrivez vous pour accéder au site web",
                apiRegister: "http://localhost:3000/users/register",

                prenom: "",
                nom: "",
                emailRegister: "",
                passwordRegister: "",
            }
        },
        methods: {
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
                        window.location.href = "/#/"
                    }
                })
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
    .img1 {
        width: 300px;
        height: 110px;
    }
</style>


   