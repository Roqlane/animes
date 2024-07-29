<?php
	//connexion à la base de données
	try
	{
		global $db;
		$db = new PDO('mysql:host=localhost;dbname=animes;charset=utf8', 'root', 'root');
	}
	catch (Exception $e)
	{
			die('Erreur : ' . $e -> getMessage());
			echo "Rechargez la page";
	}  
?>