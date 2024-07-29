let genreText = document.getElementById("genre");
let themeText = document.getElementById("theme");
let genreContainer = document.getElementsByClassName("genre")[0];
let themeContainer = document.getElementsByClassName("genre")[1];


let sousMenuChild = document.querySelectorAll("ul.sous-menu li");
let episodes = document.querySelector(".has-children").children[0];
let episodesI = document.querySelectorAll(".sous-menu li")[0];
let episodesII = document.querySelectorAll(".sous-menu li")[1];
let episodesIII = document.querySelectorAll(".sous-menu li")[2];
let episodesChild = document.querySelectorAll(".sous-menu > li");


let genreChild = document.querySelectorAll(".genre")[0].querySelectorAll("p");
let themeChild = document.querySelectorAll(".genre")[1].querySelectorAll("p");

let themeGenre = document.querySelectorAll("div.genre > p");

function tlc (elt) {
    return elt.innerText.toLowerCase();
}


let arrayOfMiracle = [];
function resetArray () {
    arrayOfMiracle = [];
    for (let i =0; i<cardLength; i++) {
        arrayOfMiracle.push(0);
    }
}
resetArray();

const search = document.querySelector("div.form input");
