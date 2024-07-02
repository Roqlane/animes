<?php
if (isset($_POST['pseudo']) && isset($_POST['password'])) {
    require "../includes/database.inc.php";

    session_start();

    //les données reçues du formulaires de connexion
    $pseudo = htmlspecialchars($_POST['pseudo']);
    $password = $_POST['password'];

    //récupère toutes les données des utilisateurs
    $checkUser = $db -> prepare("SELECT pseudo, email, password from users_info WHERE pseudo=:pseudo");
    $checkUser -> execute([
        "pseudo" => $pseudo
    ]);
    $user = $checkUser -> fetchAll();

    if (!password_verify($password, $user[0]["password"])) $user = null;

    //connecte l'utilisateur
    function connectUser() {
        global $user;
        //redirige vers le formulaire car l'utilisateur n'est pas inscrit
        if (!isset($user[0]["pseudo"], $user[0]["password"], $user[0]["email"])) return header("location:./../form.php?notchecked");

        //attribue toutes les informations de l'utilisateur en cookies de session
        $_SESSION['pseudo'] = $user[0]["pseudo"];
        $_SESSION['password'] = $user[0]["password"];
        $_SESSION['email'] = $user[0]["email"];

        header("location:./../index.php");
    }

    connectUser();
}

?>