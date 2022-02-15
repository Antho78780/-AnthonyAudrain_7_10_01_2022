
const recupStorage = JSON.parse(sessionStorage.getItem("usersIdToken"));
const recupArticle = document.querySelector("#articleJs");
const users_id = recupStorage[0];


    fetch("http://localhost:3000/getAllSujet")
    .then(res => res.json())
    .then((sujet) => {
        console.log(sujet);
        if(recupArticle) {
            for(let i=0; i < sujet.length;i++) {
                recupArticle.innerHTML += `<article id="articleSuivant"><p class="modifPrenom">${sujet[i].userId}</p><h1 class="decoration titreSujet">${sujet[i].titre}</h1>
                <p class="decoration">${sujet[i].sujet}<p class="likes"><i class="fa-solid fa-thumbs-up"></i>${sujet[i].likes}</p>
                <p class="likes"><i class="fa-solid fa-thumbs-down"></i>${sujet[i].disLikes}</p></article>`

            }
        }

    })


