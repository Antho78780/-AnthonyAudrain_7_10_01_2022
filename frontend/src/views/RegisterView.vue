<template>
    <section>
        <div>
            <img src="../assets/icon-left-font-monochrome-black.svg" class="logoGroupomania">
            <h1>{{texte1Inscription}}</h1>
        </div>
            <label>
                <form method="post" id ="formInscription">
                    <input type="text" v-model="prenom" placeholder="prénom" class="modifChampInscription">
                    <input type="text" v-model="nom" placeholder="nom" class="modifChampInscription">
                    <input type="email" v-model="emailRegister" placeholder="e-mail" class="modifChampInscription">
                    <input type="password" v-model="passwordRegister" placeholder="password" class="modifChampInscription">
                    <button @click="enregistrerFormulaire" type="button" class="buttonSuivant">{{texteValider}}</button>
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
                texteValider: "Valider"
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
<style scoped>
    @media all and (max-width: 1024px) {
        .modifChampInscription{
            width: 100% !important;
        }

        #formInscription{
            width: 50% !important;
        }

        .logoGroupomania{
        width: 70%  !important;
        }

        section{
            margin-top: 40% !important;
        }
    }
    section {
        margin-top: 10%;
        text-align: center;
        width: 100%;
    }

    #formInscription {
        width: 35%;
        margin: auto;
    }

    .modifChampInscription {
        margin: 10px;
        height: 40px;
        border: 1px solid gainsboro;
        border-radius: 5px;
        width: 70%;
        font-size: 15px;
    }

    .buttonSuivant {
        width: 70%;
        margin-top: 20px;
        padding: 5px;
        border-radius: 5px;
        background-color: #0095f6;
        border: none;
        color: white;
        transition: 0.5s;
    }

    .buttonSuivant:hover {
        background-color: #1877f2;
    }
    
    .logoGroupomania{
        width: 20%;
    }
</style>


   