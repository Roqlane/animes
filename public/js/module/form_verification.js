const checkPseudoValidity = (pseudoInput) => {
        //vérifie si le pseudo a entre 4 et 40 caractères et n'est pas vide
        return pseudoInput.value !== "" && (pseudoInput.value.length >= 4 && pseudoInput.value.length <= 40)
}

const checkEmailValidity = (emailInput) => {
    //vérifie si l'email a un format correct
    return emailInput.value !== "" 
    && emailInput.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

const checkPasswordValidity = (passwordInput) => {
    //vérifie si le mot de passe a au moins 8 caractères
    return passwordInput.value !== "" && passwordInput.value.length >= 8;
}

const checkPasswordConfirmationValidity = (passwordConfirmationInput, passwordInput) => {
    //vérifie que le la confirmation soit bien égale au mot de passe
    return passwordConfirmationInput.value !== "" && passwordConfirmationInput.value == passwordInput.value;
}




export {checkPseudoValidity, checkEmailValidity, checkPasswordValidity, checkPasswordConfirmationValidity};