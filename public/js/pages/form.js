import { checkPseudoValidity, checkEmailValidity, checkPasswordValidity, checkPasswordConfirmationValidity } from "../module/form_verification.js";
import { readCookie } from "../module/cookie_handler.js";


//dark or light mode
if (readCookie('mode') == '' || readCookie('mode') == 'dark') document.body.classList.remove("lightMode");
else document.body.classList.add("lightMode")

/* éléments du formulaire */

//le formulaire de connexion
const logPseudo = document.getElementById('logpseudo');
const logPass = document.getElementById('logpass');

//le formulaire d'inscription
const signPseudo = document.getElementById('signpseudo');
const signEmail = document.getElementById('signemail');
const signPass = document.getElementById('signpass');
const signPassConfirmation = document.getElementById('signpassconfirmation');
const signSubmit = document.getElementById('signSubmit');

//fonctions qui changent le display
const block = elt => elt.style.display = 'block';
const none = elt => elt.style.display = 'none';

/* vérification à ce que l'utilisateur fasse pas de conneries */

//ajoute l'encadré roiuge dans le cas d'une erreur ou met une ncdré vert dans le cas contraire
function addInputError(elt) {
    elt.classList.add("input-error");
    elt.classList.remove("input-rightness");
}
function removeInputError(elt) {
    elt.classList.remove("input-error");
    elt.classList.add("input-rightness");
};

//variable permettant de savoir dans quel champ il y a une erreur
let signPseudoChecker;
let signEmailChecker;
let signPassChecker;
let signPassConfirmationChecker;

window.onload = () => {
    signPseudoChecker = checkPseudoValidity(signPseudo);
    signEmailChecker = checkEmailValidity(signEmail);
    signPassChecker = checkPasswordValidity(signPass);
    signPassConfirmationChecker = checkPasswordConfirmationValidity(signPassConfirmation, signPass);
}

const checkPseudo = () => {
    signPseudoChecker = checkPseudoValidity(signPseudo) 
    !signPseudoChecker ? addInputError(signPseudo) : removeInputError(signPseudo);
}

const checkEmail = () => {
    //vérifie si l'email a un format correct
    signEmailChecker = checkEmailValidity(signEmail)
    !signEmailChecker ? addInputError(signEmail): removeInputError(signEmail);
}

const checkPassword = () => {
    //vérifie si le mot de passe a au moins 8 caractères
    signPassChecker = checkPasswordValidity(signPass)
    !signPassChecker ? addInputError(signPass): removeInputError(signPass);
}

const checkPasswordConfirmation = () => {
    //vérifie que le la confirmation soit bien égale au mot de passe
    signPassConfirmationChecker = checkPasswordConfirmationValidity(signPassConfirmation, signPass)
    !signPassConfirmationChecker ? addInputError(signPassConfirmation) : removeInputError(signPassConfirmation);
}

//vérifie le pseudo
signPseudo.addEventListener("input", checkPseudo);
//vérifie l'e-mail
signEmail.addEventListener('input', checkEmail);
//vérifie le mot de passe
signPass.addEventListener('input', checkPassword);
//vérifie la confirmation du mot de passe
signPassConfirmation.addEventListener('input', checkPasswordConfirmation);

//validation du formulaire d'inscription
document.registerForm.addEventListener('submit', e => {
    e.preventDefault();

    //On doit vérifer si les champs ne sont pas vides
    let inputsValuesChecker = signPseudo.value != '' && signEmail.value != '' && signPass.value != '' && signPassConfirmation.value != '';

    //On doit vérifier si toutes les informations rentrées par l'utilisateur sont correctes
    let inputsErrorsChecker = signPassChecker && signEmailChecker && signPseudoChecker && signPassConfirmationChecker;

    //si tout est bon on valide le formulaire 
    //sinon on affiche les messages d'erreurs correspondant à celles commises par l'utilisateur
    inputsValuesChecker && inputsErrorsChecker ? document.registerForm.submit() : inputsErrorsDisplayer();

})

function inputsErrorsDisplayer() {
    const password = document.getElementById("password-error-message");
    const email = document.getElementById("email-error-message");
    const pseudo = document.getElementById("pseudo-error-message");
    const passwordconfirmation = document.getElementById("passwordconfirmation-error-message");

    !signPassChecker ? block(password) : none(password);
    !signEmailChecker ? block(email) : none(email);
    !signPseudoChecker ? block(pseudo) : none(pseudo);
    !signPassConfirmationChecker ? block(passwordconfirmation) : none(passwordconfirmation); 
}
