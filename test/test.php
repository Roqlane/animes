<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<?php
    if (isset($_POST["password"])) {
        echo CRYPT_SHA256 . CRYPT_SHA256;
        echo $_POST["password"];
        $salt = sodium_randombytes_random16(6);
        echo $_POST["password"] + $salt;
        $cryptedPassword = null;
        $entirecryptedPassword = null;
    }

    ?>
<body>

    <form action="./test.php" method="post">
        <label for="password">password:</label>
        <input type="password" name="password" id="">
        <input type="submit" value="submit">
    </form>
    
</body>
</html>