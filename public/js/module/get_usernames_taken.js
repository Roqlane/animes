//on récupère les pseudos déjà utlisé
export function getPseudoAlreadyTaken() {
    window.usernamesList = [];

    let xhttp = new XMLHttpRequest;
    xhttp.open("GET", "http://localhost/projet_anime/html/logs/usernames.php", true);
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState != 4 && xhttp.status != 200) return
        usernamesList = xhttp.responseText.split(" ")
        usernamesList.filter(names => names != "")
    }
    xhttp.send();
}

