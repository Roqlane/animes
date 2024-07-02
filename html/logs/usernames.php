<?php
require "../includes/database.inc.php";

// if (!isset($_SESSION["pseudo"], $_SESSION["password"], $_SESSION["email"])) {
//     header("location:./../index.php");
// }

$usernamesStatement = $db -> prepare("SELECT pseudo from users_info");
$usernamesStatement -> execute();
$usernames = $usernamesStatement -> fetchAll();

foreach ($usernames as $key => $username) {
    echo $usernames[$key]["pseudo"] . " ";
}

?>