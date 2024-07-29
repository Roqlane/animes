const pseudoNotTaken = (pseudoInput) => {
    /*vérifie si le pseudo est dèjà pris*/
    //la liste de pseudo est vide
    if (usernamesList.length == 0) return true

    //parcours tous les pseudo en rechercher d'un doublon
    let usernameNotTaken = true
    usernamesList.forEach(name => {
        if (pseudoInput.value == name) usernameNotTaken = false;
    });

    return usernameNotTaken
}


const checkPseudoValidity = (pseudoInput) => {
        //vérifie si le pseudo a entre 4 et 40 caractères
        let isPseudoCorrect = pseudoInput.value.length >= 4 && pseudoInput.value.length <= 40
        
        //le pseudo est incorrect
         if (!isPseudoCorrect) return false;  

         //le pseudo est correct
         return true;
}

const checkEmailValidity = (emailInput) => {
    //vérifie si l'email a un format correct
    let emailMatch = emailInput.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    
    //le mail est incorrect
    if (!emailMatch) return false

    //le mail est correct
    return true
}

const checkPasswordValidity = (passwordInput) => {
    //vérifie si le mot de passe a au moins 8 caractères
    let passMatch = passwordInput.value.length >= 8;

    //le mot de passe est incorrect
    if (!passMatch) return false;

    //le mot de passe est correct
    return true;
}

const checkPasswordConfirmationValidity = (passwordConfirmationInput, passwordInput) => {
    //vérifie que le la confirmation soit bien égale au mot de passe
    let passConfirmationMatch = passwordConfirmationInput.value == passwordInput.value;

    //le mot de passe de confirmation diffère avec le mot de passe
    if (!passConfirmationMatch) return false;

    //le mot de passe de confirmation est le même que le mot de passe
    return true
}




export {pseudoNotTaken, checkPseudoValidity, checkEmailValidity, checkPasswordValidity, checkPasswordConfirmationValidity};