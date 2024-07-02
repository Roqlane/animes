import {getPseudoAlreadyTaken} from "../module/get_usernames_taken.js";
import { pseudoNotTaken, checkPseudoValidity, checkEmailValidity, checkPasswordValidity, checkPasswordConfirmationValidity } from "../module/form_verification.js";
getPseudoAlreadyTaken();

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

/* vérification à ce que l'utilisateur face pas de conneries */

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
let isPseudoNotTaken;
let signPseudoChecker;
let signEmailChecker;
let signPassChecker;
let signPassConfirmationChecker;

const checkPseudo = () => {
    isPseudoNotTaken = pseudoNotTaken(signPseudo);
    signPseudoChecker = checkPseudoValidity(signPseudo);

   //le pseudo est incorrect
    if (!signPseudoChecker) {
        addInputError(signPseudo);
        return;
    }

    //le pseudo est correct
    removeInputError(signPseudo)

    /*vérifie si le pseudo est dèjà pris*/
    const pseudoTaken = document.getElementById("pseudo-error-message2");

    //le pseudo est pris
    if (!isPseudoNotTaken) {
        block(pseudoTaken)
        addInputError(signPseudo)
        return
    }
    //le pseudo n'est pas pris
    removeInputError(signPseudo)
    none(pseudoTaken);
}

const checkEmail = () => {
    //vérifie si l'email a un format correct
    signEmailChecker = checkEmailValidity(signEmail)
    !signEmailChecker ?
    addInputError(signEmail):
    removeInputError(signEmail)
}

const checkPassword = () => {
    //vérifie si le mot de passe a au moins 8 caractères
    signPassChecker = checkPasswordValidity(signPass)
    !signPassChecker ?
    addInputError(signPass):
    removeInputError(signPass)
}

const checkPasswordConfirmation = () => {
    //vérifie que le la confirmation soit bien égale au mot de passe
    signPassConfirmationChecker = checkPasswordConfirmationValidity(signPassConfirmation, signPass);
    !signPassConfirmationChecker ?
        addInputError(signPassConfirmation) :
        removeInputError(signPassConfirmation);
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
    let inputsValuesChecker = signPseudo.value != '' && signEmail.value != '' && signPass.value != '' && signPassConfirmation.value != '' ?
    true : false;

    //On doit vérifier si toutes les informations rentrées par l'utilisateur sont correctes
    let inputsErrorsChecker = signPassChecker && signEmailChecker && signPseudoChecker && isPseudoNotTaken && signPassConfirmationChecker ?
    true : false;

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

/*formulaire de connexion */

//le formulaire de connexion est-il bien rempli
let pseudoInput, passInput;
function logFormChecker(e) {
    e.preventDefault()
    pseudoInput = logPseudo.value
    passInput = logPass.value
    if (pseudoInput === passInput === "" || pseudoInput.length < 4 || passInput.length < 8) {
        block(document.getElementById("log-pseudo-error-message"))
        block(document.getElementById("log-pass-error-message"))
        return
    }
    document.logForm.submit();
}

document.logForm.addEventListener("submit", e => logFormChecker(e))

//exportation de certaines fonctions qui peuvent être utilisées sur d'autres pages
export { getPseudoAlreadyTaken }