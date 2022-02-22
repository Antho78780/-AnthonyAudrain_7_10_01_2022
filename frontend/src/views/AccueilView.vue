<template>
   <main id="modifA">
       <img src="../assets/icon-left-font-monochrome-black.svg" class="img1">
      <div id="flex-row">
         <a :href="hrefProfil"  class="modifTitre modifFlex"><p>{{texteProfil}}</p></a>
         <button @click="deconnecter" type="button" class="modifButton2 modifFlex">{{texteDeconnexion}}</button>
      </div>
   </main>
	<section id="section1">
		<h1 class="texte1">{{texteForums}}</h1>
		<a :href="hrefSujet"><p class="texte1">{{texteCreerSujet}}</p></a>
	</section>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
<div v-for="sujet in allSujet" :key="sujet" class="container">
   <div class="row">
      <div class="col-md-12">
         <div id="content" class="content content-full-width">
            <ul class="timeline">
            <li>
                <div class="timeline-time">
                    <span class="date">{{sujet.dateJour}}</span>
                    <span class="time">{{sujet.dateHeure}}</span>
                </div>
                <div class="timeline-body">
                    <div class="timeline-header">
                        <span class="userimage"><img src="" alt=""></span>
                        <p class="username"><a href="javascript:;">{{sujet.auteur}}</a></p>
                        <p class="titreSujet">{{sujet.titre}}</p>
                    </div>
                    <div class="timeline-content">
                        <p>{{sujet.sujet}}</p>
                    </div>
                    <div class="timeline-likes">
                        <div class="stats-right">
                        <span class="stats-text">259 Shares</span>
                        <span class="stats-text">21 Comments</span>
                        </div>
                        <div class="stats">
                        <span class="fa-stack fa-fw stats-icon">
                        <i class="fa fa-circle fa-stack-2x text-danger"></i>
                        <i class="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
                        </span>
                        <span class="fa-stack fa-fw stats-icon">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                        </span>
                        <span class="stats-total">4.3k</span>
                        </div>
                    </div>
                    <div class="timeline-footer">
                        <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
                        <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
                        <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
                    </div>
                    <div class="timeline-comment-box">
                        <div class="input">
                        <form action="">
                            <div class="input-group">
                                <input type="text" class="form-control rounded-corner" placeholder="Entrez votre commentaire...">
                                <span class="input-group-btn p-l-10">
                                <button type="button">Comment</button>
                                </span>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </li>
            </ul>
                  </div>
               </div>
   </div>
</div>
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
            hrefProfil: "/#/profil",
            hrefSujet: "/#/sujet",
            allSujet: [],
         }
         },
         mounted() {
            fetch(this.apiGetAllSujet)
            .then(res => res.json())
            .then((allPost) => {
               for(let post of allPost) {
                  let date = new Date(post.createdAt);
                  const dateJour = date.toLocaleDateString();
                  const dateHeure = date.toLocaleTimeString();
                  fetch(`http://localhost:3000/users/getOneUsers/${post.userId}`)
                     .then(res => res.json())
                     .then((user) => {
                        this.allSujet.push({
                           titre: post.titre,
                           sujet: post.sujet,
                           dateJour: dateJour,
                           dateHeure: dateHeure,
                           auteur: user.prenom
                        })
                     })
               }
            })
         },
         methods: {
            deconnecter() {
               window.location.href = "/#/";
               sessionStorage.removeItem("usersIdToken");
            },
            envoisComments() {
               console.log("ok");
               
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
  .titreSujet {
	display: flex;
	justify-content: center;
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
  #articleJs{
    height: 300px;
    width: 900px;
    background-color: white;
    margin-top: 50px;
    border-radius: 5px;
    margin: auto;
    
  }
  .titreSujet {
    text-align: center;
  }
  a {
    text-decoration: none;
    color: black;
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

  .modifTemp {
  margin-left: 25%;
  font-weight: bold;
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
  body{
    margin-top:20px;
    background:#eee;
}

.timeline {
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: relative
}

.timeline:before {
    content: '';
    position: absolute;
    top: 5px;
    bottom: 5px;
    width: 5px;
    background: #2d353c;
    left: 20%;
    margin-left: -2.5px
}

.timeline>li {
    position: relative;
    min-height: 50px;
    padding: 20px 0
}

.timeline .timeline-time {
    position: absolute;
    left: 0;
    width: 18%;
    text-align: right;
    top: 30px
}

.timeline .timeline-time .date,
.timeline .timeline-time .time {
    display: block;
    font-weight: 600
}

.timeline .timeline-time .date {
    line-height: 16px;
    font-size: 12px
}

.timeline .timeline-time .time {
    line-height: 24px;
    font-size: 20px;
    color: #242a30
}

.timeline .timeline-icon {
    left: 15%;
    position: absolute;
    width: 10%;
    text-align: center;
    top: 40px
}

.timeline .timeline-icon a {
    text-decoration: none;
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 20px;
    background: #d9e0e7;
    line-height: 10px;
    color: #fff;
    font-size: 14px;
    border: 5px solid #2d353c;
    transition: border-color .2s linear
}

.timeline .timeline-body {
    margin-left: 23%;
    margin-right: 17%;
    background: #fff;
    position: relative;
    padding: 20px 25px;
    border-radius: 6px
}

.timeline .timeline-body:before {
    content: '';
    display: block;
    position: absolute;
    border: 10px solid transparent;
    border-right-color: #fff;
    left: -20px;
    top: 20px
}

.timeline .timeline-body>div+div {
    margin-top: 15px
}

.timeline .timeline-body>div+div:last-child {
    margin-bottom: -20px;
    padding-bottom: 20px;
    border-radius: 0 0 6px 6px
}

.timeline img {
    max-width: 100%;
    display: block;
}

.timeline-content {
    letter-spacing: .25px;
    line-height: 18px;
    font-size: 13px
}

.timeline-content:after,
.timeline-content:before {
    content: '';
    display: table;
    clear: both
}

.timeline-title {
    margin-top: 0
}

.timeline-footer {
    background: #fff;
    border-top: 1px solid #e2e7ec;
    padding-top: 15px
}

.timeline-footer a:not(.btn) {
    color: #575d63
}

.timeline-footer a:not(.btn):focus,
.timeline-footer a:not(.btn):hover {
    color: #2d353c
}

.timeline-likes {
    color: #6d767f;
    font-weight: 600;
    font-size: 12px
}

.timeline-likes .stats-right {
    float: right
}

.timeline-likes .stats-total {
    display: inline-block;
    line-height: 20px
}

.timeline-likes .stats-icon {
    float: left;
    margin-right: 5px;
    font-size: 9px
}

.timeline-likes .stats-icon+.stats-icon {
    margin-left: -2px
}

.timeline-likes .stats-text {
    line-height: 20px
}

.timeline-likes .stats-text+.stats-text {
    margin-left: 15px
}

.timeline-comment-box {
    background: #f2f3f4;
    margin-left: -25px;
    margin-right: -25px;
    padding: 20px 25px
}

.timeline-comment-box .user {
    float: left;
    width: 34px;
    height: 34px;
    overflow: hidden;
    border-radius: 30px
}

.timeline-comment-box .user img {
    max-width: 100%;
    max-height: 100%
}

.timeline-comment-box .user+.input {
    margin-left: 44px
}

.text-danger, .text-red {
    color: #ff5b57!important;
}
</style>

