<!DOCTYPE html>
<html lang = "fr">
    <head>
        <title>inscription Groupomania</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=500, initial-scale=1">  
        <link rel="stylesheet"  href="style.css">
    </head>
    <body>
            <section>
                <div>
                    <img src = "images/icon-left-font-monochrome-black.svg">
                    <h1>Inscrivez vous pour accéder au site web</h1>
                </div>
                    <label>
                        <form method="post" id ="formInscription">
                            <input type="text" name="prenom" placeholder="prénom" class="modifChampInscription" id="prenom" value="" required>
                            <input type="text" name="nom" placeholder="nom" class="modifChampInscription" id="nom" value="" required>
                            <input type="email" name="email" placeholder="e-mail" class="modifChampInscription" id="email" value="" required>
                            <input type="password" name="password" placeholder="password" class="modifChampInscription" id="password" value="" required>
                            <input type="submit" name="Suivant" value="Suivant" class="buttonSuivant">
                        </form>
                    </label>
                    <?php
                        $users = "root";
                        $password = "";
                        $db = "users";
                        $serveur = "localhost";
                       
                            $pdo = new PDO("mysql:host=$serveur;dbname=$db", $users, $password);
                      
                        if(isset($_POST['Suivant'])) {
                            $prenom = $_POST['prenom'];
                            $nom = $_POST['nom'];
                            $email = $_POST['email'];
                            $mdp = $_POST['password'];

                            $sql = "INSERT INTO `register`(`prenom`, `nom`, `email`, `mdp`) VALUES ('$prenom','$nom','$email','$mdp')";
                            $query = $pdo->prepare($sql);
                            $query->bindParam("prenom",$prenom);
                            $query->bindParam("nom",$nom);
                            $query->bindParam("email",$email);
                            $query->bindParam("mdp",$mdp);
                            $query->execute();
                            var_dump($_POST);
                        }
                    ?>
            </section>
        </body>
</html>