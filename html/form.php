<?php
	session_start();

	require "./includes/database.inc.php";

	if (isset($_POST["pseudo"]) && isset($_POST["email"]) && isset($_POST["password"]) && isset($_POST["passwordConfirmation"])) {

		function pseudoVerification() {
			global $db;
			//taille incorrect
			if (4 >= strlen($_POST["pseudo"]) && strlen($_POST["pseudo"]) >= 40) return;

			//vérifie que le pseudo ne soit pas déjà dans la db
			$usernameStatement = $db -> prepare("SELECT pseudo from users_info WHERE pseudo=:pseudo");
			$usernameStatement -> execute([
				"pseudo" => htmlspecialchars($_POST["pseudo"])
			]);
			$username = $usernameStatement -> fetchAll();

			//pseudo déjà pris
			if ($username[0]["pseudo"] != "") return;

			//tout est bon
			global $pseudo;
			$pseudo = $_SESSION["pseudo"] = htmlspecialchars($_POST['pseudo']);
		}

		function emailVerification() {
			$pattern = '/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
			//mauvais format
			if (!preg_match($pattern, $_POST["email"])) return;

			global $email;
			$email = $_SESSION["email"] = htmlspecialchars($_POST['email']);
		}

		function passwordVerification() {
			//mdp de confirmation différent du mdp

			if ($_POST["password"] != $_POST["passwordConfirmation"]) return;

			//taille incorrect
			if (8 > strlen($_POST["password"])) return;

			global $password;
			$password = $_SESSION["password"] = password_hash($_POST['password'], CRYPT_BLOWFISH);
		}	

		pseudoVerification();
		emailVerification();
		passwordVerification();
		
		function setDatabase($pseudo, $password, $email) {
			//sauvegarde les données du formulaire d'inscription dans la base de données
			global $db;
			$userInformation = $db -> prepare("INSERT INTO users_info(pseudo, password, email) VALUES (:pseudo, :password, :email)");
			$userInformation -> execute([
				"pseudo" => $pseudo,
				"password" => $password,
				"email" => $email
			]);

			header("location:./index.php");
		}

		if (isset($pseudo, $email, $password)) setDatabase($pseudo, $password, $email);

	}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" type="image/x-icon" href="../image/favicon.png" />
    <title>Document</title>
	<link rel="stylesheet" href="../css/form.css">
</head>

<?php 
//affiche un formulaire "sombre" => celui avec le background foncé

if (isset($_GET["isDarkMode"])) {
?>
<body>
<?php
}
	//affiche un formulaire "lumieux" => celui en glassmorph
else {
	?>

	<body class='lightMode'>
<?php
}
?>
	<div class="section">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
						<input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
						<label for="reg-log"></label>
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">

							<!-- le formulaire de connexion -->
								<div class="card-front">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Log In</h4>
											<form action="./logs/logform.php" method="post" name='logForm'>
												<?php if(isset($_GET["notchecked"])) echo '<p class="error-message" style="display:block">L\'identifiant et le mot de passe ne correspondent pas</p>' ?>
												<div class="form-group">
													<input type="text" name="pseudo" class="form-style" placeholder="Identifiant" id="logpseudo" autocomplete="off">
													<p id="log-pseudo-error-message" class="error-message">Veuillez renseigner un pseudo valide.</p>
												</div>	
												<div class="form-group mt-2">
													<input type="password" name="password" class="form-style" placeholder="Mot de passe" id="logpass" autocomplete="off">
													<p id="log-pass-error-message" class="error-message">Veuillez renseigner un mot de passe valide.</p>
												</div>
												<input type='submit' id='logSubmit' class="btn mt-4" value="submit"></input>
											</form>
											<!-- Je sais pas quoi faire avec cette ligne là-->
											<p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
										</div>
									</div>
								</div>

								<!-- le formulaire d'inscription -->
								<div class="card-back">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Sign Up</h4>

											<form action="./form.php" method="post" name="registerForm">
												<div class="form-group">
													<input type="text" name="pseudo" class="form-style" placeholder="Identifiant [4-40]" id="signpseudo" autocomplete="off">
													<p id="pseudo-error-message" class="error-message">Le pseudo doit faire entre 4 et 40 caractères.</p>
													<p id="pseudo-error-message2" class="error-message">Ce pseudo est déjà pris.</p>
												</div>	
												<div class="form-group mt-2">
													<input type="email" name="email" class="form-style" placeholder="Email" id="signemail" autocomplete="off">
													<p id="email-error-message" class="error-message">L'e-mail doit respecter ce format: <b>example@domaine.fr</b></p>
												</div>	
												<div class="form-group mt-2">
													<input type="password" name="password" class="form-style" placeholder="Mot de passe [min: 8]" id="signpass" autocomplete="off">
													<p id="password-error-message" class="error-message">Le mot de passe doit faire au moins 8 caractères.</p>
												</div>
												<div class="form-group mt-2">
													<input type="password" name="passwordConfirmation" class="form-style" placeholder="Confirmation du mot de passe" id="signpassconfirmation" autocomplete="off">
													<p id="passwordconfirmation-error-message" class="error-message">Le mot de passe confirmé est différent de l'initial.</p>
												</div>
												<input type='submit' id='signSubmit' class="btn mt-4" value="submit"></input>
											</form>

										</div>
									</div>
								</div>
							</div>

								<!-- les carrés de glace que l'on voit derrière-->
		
								<div class="drops">
								<div class="drop drop-1"></div>
								<div class="drop drop-2"></div>
								<div class="drop drop-3"></div>
								<div class="drop drop-4"></div>
								<div class="drop drop-5"></div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>

<?php
	//met tous les pseudo de la base de données dans une liste javascript pour permmettre de prévenir l'utilisateur de façon intéractive dans le cas où il choisit un pseudo déjà utilisé
	$usernameStatement = $db -> prepare('SELECT pseudo from users_info');
	$usernameStatement -> execute();
	$usernames = $usernameStatement -> fetchAll();
	foreach ($usernames as $username) {
		echo "<div class=usernames style=display:none>" . $username["pseudo"] . "</div>";
	}
?>

<script type="module" src="../js/pages/form.js"></script>
    

</body>
</html>