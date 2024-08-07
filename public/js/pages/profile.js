import {checkPseudoValidity, checkEmailValidity, checkPasswordValidity, checkPasswordConfirmationValidity } from "../module/form_verification.js";

// les éléments du formulaire
//l'image
const pseudo = document.getElementById('change-pseudo');
const email = document.getElementById('change-email');
const password = document.getElementById('change-password');
const passwordConfirmation = document.getElementById('change-passwordConfirmation');

//les infos de l'utilisateur
const pseudoValue = pseudo.value;
// const emailValue = email.value;
// const passwordValue = password.value;
// const passwordConfirmationValue = pseudo.value;

//les labels
const labelPseudo = document.querySelector("#change-pseudo + label")
const labelEmail = document.querySelector("#change-email + label")
const labelPassword = document.querySelector("#change-password + label")
const labelPasswordConfirmation = document.querySelector("#change-passwordConfirmation + label")

//les messages d'éerreurs
const incorrectPseudo = document.getElementById("pseudo-error")
const incorrectEmail = document.getElementById("email-error")
const incorrectPassword = document.getElementById("password-error")
const incorrectPasswordConfirmation = document.getElementById("passwordConfirmation-error")

//fonctions qui changent le display
const block = elt => elt.style.display = 'block';
const none = elt => elt.style.display = 'none';

//changent l'apparence des éléments du formulaire
const addShakeClass = label => label.classList.add("shake")
const removeShakeClass = label => label.classList.remove("shake")
const addInputErrorClass = input => input.classList.add("input-error")
const removeInputErrorClass = input => input.classList.remove("input-error")
const addlabelErrorClass = label => label.classList.add("label-error")
const removelabelErrorClass = label => label.classList.remove("label-error")

const addAllErrorClass = (label, input) => {
    addShakeClass(label)
    addlabelErrorClass(label)
    addInputErrorClass(input)
}
const removeAllErrorClass = (label, input) => {
    removeShakeClass(label)
    removelabelErrorClass(label)
    removeInputErrorClass(input)
}


const checkPseudo = () => {
    //pseudo incorrect
    console.log(checkPseudoValidity(pseudo), pseudo.value)
    if (!checkPseudoValidity(pseudo)) {
        block(incorrectPseudo)
        addAllErrorClass(labelPseudo, pseudo)
        return
    }

    //pseudo correct
    none(incorrectPseudo)
    removeAllErrorClass(labelPseudo, pseudo)
}

const checkInput = (func, input, errorMessage, label) => {
    //l'input n'est pas valide 
    //on rajoute un argument pour la fonction qui doit comparer les mots de passe
    if (!func(input, password)) {
        block(errorMessage)
        addAllErrorClass(label, input)
        return
    }

    //l'input est valide
    none(errorMessage)
    removeAllErrorClass(label, input)
}


pseudo.addEventListener("blur", checkPseudo)
email.addEventListener("blur", () => checkInput(checkEmailValidity, email, incorrectEmail, labelEmail))
password.addEventListener("blur", () => checkInput(checkPasswordValidity, password, incorrectPassword, labelPassword))
passwordConfirmation.addEventListener("blur", () => checkInput(checkPasswordConfirmationValidity, passwordConfirmation, incorrectPasswordConfirmation, labelPasswordConfirmation))

document.changes.addEventListener("submit", (e) => {
    e.preventDefault()
    if (checkPseudoValidity(pseudo) && checkEmailValidity(email) && checkPasswordValidity(password) && checkPasswordConfirmationValidity(password, passwordConfirmation))
    document.changes.submit();
})

//choix de l'avatar
const logo = document.querySelector("div.user-info--profileImage-logo");
const fileInput = document.querySelector("input[type='file']");

logo.addEventListener("click", () => fileInput.click())

