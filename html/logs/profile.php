<?php 
require "../includes/database.inc.php";

session_start();

if (isset($_SESSION["pseudo"]) && isset($_SESSION["password"]) && isset($_SESSION["email"])) {
    //on récupère les variables de session
    $pseudo = $_SESSION["pseudo"];
    $email = $_SESSION["email"];
    $password = $_SESSION["password"];

    //on récupère l'id de l'utilisateur
    $idStatement = $db -> prepare("SELECT id FROM `users_info` WHERE pseudo=:pseudo");
    $idStatement -> execute([
        "pseudo" => $pseudo
    ]);
    $id = $idStatement -> fetchAll();

    //on récupère le nom du fichier de la photo de profil
    $path = "../../image/avatars/file" . $id[0]['id'] . ".";
    $imagesExtensions = ["jpg", "gif", "png", "gif"];
    foreach($imagesExtensions as $extension) {
        if (file_exists($path . $extension)) {
            $image = $path . $extension;
        }
    }
    
    //vérification de la photo de profile
    if (isset($_FILES['avatar']) && $_FILES['avatar']['error'] == 0) {
        $avatar = $_FILES["avatar"];

        //on vérifie la taille du fichier
        if ($avatar["size"] <= 4000000) {
            $file_info = pathinfo($avatar['name']);
            $extension = $file_info['extension'];
            $imagesExtensionAllowed = ["jpg", "gif", "png", "gif"];
            //on vérifie que le fichier soit bien une image
            if (in_array($extension, $imagesExtensionAllowed)) {
                //on sauvegarde l'image
                move_uploaded_file($avatar['tmp_name'], "../../image/avatars/file" . $id[0]['id'] . ".$extension");
            }
            else {
                echo "Le fichier n'est pas une image.";
            }
        }
        else {
            echo "Le fichier est trop lourd: " . $avatar["size"] . " octets > 4000000 octets.";
        }
    }

    //on récupère les informations du formulaire une fois soumis
    if (isset($_POST["change-pseudo"]) && isset($_POST["change-email"]) && isset($_POST["change-password"]) && isset($_POST["change-passwordConfirmation"])) {
        $newPseudo = htmlspecialchars($_POST["change-pseudo"]);
        $newEmail = htmlspecialchars($_POST["change-email"]);
        $newPassword = password_hash($_POST['change-password'], CRYPT_BLOWFISH);

        //on modifie la base de donnée avec les nouvelles informations
        $query = "UPDATE users_info SET pseudo=:pseudo, email=:email, password=:password WHERE id= :id";
        $userInformationUpdate = $db -> prepare($query);
        $userInformationUpdate -> execute([
            "pseudo" => $newPseudo,
            "email" => $newEmail,
            "password" => $newPassword,
            "id" => $id[0]['id']
        ]);
        
        //on met à jour les variables de session
        $pseudo = $newPseudo;
        $email = $newEmail;
        $password = $newPassword;

        header("location:./../index.php");        
    }
    
    
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./../../css/profile.css">
</head>
<body>

    <?php
        if (isset($_SESSION["pseudo"]) && isset($_SESSION["password"]) && isset($_SESSION["email"])) {
    ?>

    <!--les informations de l'utilisateurs -->
    <main>
        <style> .user-info--profileImage-logo { background-image: <?php if ($image != "") echo "url($image)"; ?>; } </style>
        <form action="./profile.php" method="post" name="changes" enctype="multipart/form-data">
        <div class="user-info">
            <div class="user-info--profileImage">
                <div class="user-info--profileImage-logo">
                    <input type="file" name="avatar" id="avatar">
                    <span class="vertical-bar"></span>
                    <span class="horizontal-bar"></span>
                </div>
            </div>
            
            <div class="inputs">
                <div class="input-container user-info--pseudo">
                    <input type="text" name="change-pseudo" id="change-pseudo" value="<?php echo $pseudo; ?>">
                    <label>Pseudo:</label>
                    <span></span>
                    <p class="error-message" id="pseudo-error">Pseudo entre 4 à 40 caractères</p>
                    <p class="error-message" id="pseudo-taken">Ce pseudo est déjà pris</p>
                </div>
                    <div class="input-container user-info--email">
                        <input type="email" name="change-email" id="change-email" value="<?php echo $email; ?>">
                        <label>Email:</label>
                        <span></span>
                        <p class="error-message" id="email-error">Format requis: exemple@gmail.com</p>
                    </div>
                    <div class="input-container user-info--password">
                        <input type="text" name="change-password" id="change-password" placeholder="nouveau mot de passe">
                        <label>Mot de passe:</label>
                        <span></span>
                        <p class="error-message" id="password-error">Doit faire 8 caractères minimum</p>
                    </div>
                    <div class="input-container user-info--passwordConfirmation">
                        <input type="text" name="change-passwordConfirmation" id="change-passwordConfirmation" placeholder="confirmation mot de passe">
                        <label>Confirmer le mot de passe: </label>
                        <span></span>
                        <p class="error-message" id="passwordConfirmation-error">Ne correspond pas au mot de passe</p>
                    </div>
                    <div class="input-container submit">
                        <input type="submit" value="Sauvegarder" id="">
                    </div>
                </div>
            </div>
        </form>
    </main>

    <style>
    
    /*by Mark_Bowley from https://codepen.io/Mark_Bowley/pen/PozwyP */
        
        body {
	background: #00b4ff;
	color: #333;
	font: 100% Lato, Arial, Sans Serif;
	height: 100vh;
	margin: 0;
	padding: 0;
	overflow-x: hidden;
}

#background-wrap {
    bottom: 0;
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
	z-index: -1;
}

/* KEYFRAMES */

@-webkit-keyframes animateBubble {
    0% {
        margin-top: 1000px;
    }
    100% {
        margin-top: -100%;
    }
}

@-moz-keyframes animateBubble {
    0% {
        margin-top: 1000px;
    }
    100% {
        margin-top: -100%;
    }
}

@keyframes animateBubble {
    0% {
        margin-top: 1000px;
    }
    100% {
        margin-top: -100%;
    }
}

@-webkit-keyframes sideWays { 
    0% { 
        margin-left:0px;
    }
    100% { 
        margin-left:50px;
    }
}

@-moz-keyframes sideWays { 
    0% { 
        margin-left:0px;
    }
    100% { 
        margin-left:50px;
    }
}

@keyframes sideWays { 
    0% { 
        margin-left:0px;
    }
    100% { 
        margin-left:50px;
    }
}

/* ANIMATIONS */

.x1 {
    -webkit-animation: animateBubble 25s linear infinite, sideWays 2s ease-in-out infinite alternate;
	-moz-animation: animateBubble 25s linear infinite, sideWays 2s ease-in-out infinite alternate;
	animation: animateBubble 25s linear infinite, sideWays 2s ease-in-out infinite alternate;
	
	left: -5%;
	top: 5%;
	
	-webkit-transform: scale(0.6);
	-moz-transform: scale(0.6);
	transform: scale(0.6);
}

.x2 {
    -webkit-animation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;
	-moz-animation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;
	animation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;
	
	left: 5%;
	top: 80%;
	
	-webkit-transform: scale(0.4);
	-moz-transform: scale(0.4);
	transform: scale(0.4);
}

.x3 {
    -webkit-animation: animateBubble 28s linear infinite, sideWays 2s ease-in-out infinite alternate;
	-moz-animation: animateBubble 28s linear infinite, sideWays 2s ease-in-out infinite alternate;
	animation: animateBubble 28s linear infinite, sideWays 2s ease-in-out infinite alternate;
	
	left: 10%;
	top: 40%;
	
	-webkit-transform: scale(0.7);
	-moz-transform: scale(0.7);
	transform: scale(0.7);
}

.x4 {
    -webkit-animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;
	-moz-animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;
	animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;
	
	left: 20%;
	top: 0;
	
	-webkit-transform: scale(0.3);
	-moz-transform: scale(0.3);
	transform: scale(0.3);
}

.x5 {
    -webkit-animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;
	-moz-animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;
	animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;
	
	left: 30%;
	top: 50%;
	
	-webkit-transform: scale(0.5);
	-moz-transform: scale(0.5);
	transform: scale(0.5);
}

.x6 {
    -webkit-animation: animateBubble 21s linear infinite, sideWays 2s ease-in-out infinite alternate;
	-moz-animation: animateBubble 21s linear infinite, sideWays 2s ease-in-out infinite alternate;
	animation: animateBubble 21s linear infinite, sideWays 2s ease-in-out infinite alternate;
	
	left: 50%;
	top: 0;
	
	-webkit-transform: scale(0.8);
	-moz-transform: scale(0.8);
	transform: scale(0.8);
}

.x7 {
    -webkit-animation: animateBubble 20s linear infinite, sideWays 2s ease-in-out infinite alternate;
	-moz-animation: animateBubble 20s linear infinite, sideWays 2s ease-in-out infinite alternate;
	animation: animateBubble 20s linear infinite, sideWays 2s ease-in-out infinite alternate;
	
	left: 65%;
	top: 70%;
	
	-webkit-transform: scale(0.4);
	-moz-transform: scale(0.4);
	transform: scale(0.4);
}

.x8 {
    -webkit-animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;
	-moz-animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;
	animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;
	
	left: 80%;
	top: 10%;
	
	-webkit-transform: scale(0.3);
	-moz-transform: scale(0.3);
	transform: scale(0.3);
}

.x9 {
    -webkit-animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;
	-moz-animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;
	animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;
	
	left: 90%;
	top: 50%;
	
	-webkit-transform: scale(0.6);
	-moz-transform: scale(0.6);
	transform: scale(0.6);
}

.x10 {
    -webkit-animation: animateBubble 26s linear infinite, sideWays 2s ease-in-out infinite alternate;
	-moz-animation: animateBubble 26s linear infinite, sideWays 2s ease-in-out infinite alternate;
	animation: animateBubble 26s linear infinite, sideWays 2s ease-in-out infinite alternate;
	
	left: 80%;
	top: 80%;
	
	-webkit-transform: scale(0.3);
	-moz-transform: scale(0.3);
	transform: scale(0.3);
}

/* OBJECTS */

.bubble {
    -webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	
    -webkit-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
	-moz-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
	box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
	
    height: 200px;
	position: absolute;
	width: 200px;
}

.bubble:after {
    background: -moz-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%); /* FF3.6+ */
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(255,255,255,0.5)), color-stop(70%,rgba(255,255,255,0))); /* Chrome,Safari4+ */
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* Chrome10+,Safari5.1+ */
    background: -o-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* Opera 12+ */
    background: -ms-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* IE10+ */
    background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	
    -webkit-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
	-moz-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
	box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
	
	content: "";
    height: 180px;
	left: 10px;
	position: absolute;
	width: 180px;
}
    </style>

    <!-- background -->
    <div id="background-wrap">
        <div class="bubble x1"></div>
        <div class="bubble x2"></div>
        <div class="bubble x3"></div>
        <div class="bubble x4"></div>
        <div class="bubble x5"></div>
        <div class="bubble x6"></div>
        <div class="bubble x7"></div>
        <div class="bubble x8"></div>
        <div class="bubble x9"></div>
        <div class="bubble x10"></div>
    </div>
    <?php
        }
        else {
            echo "Vous n'êtes pas connecté, vous ne pouvez pas être là";
        }
    ?>

    <script type="module" src="../../js/pages/profile.js"></script>


    
</body>
</html>