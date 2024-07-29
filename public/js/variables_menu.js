let genreText = document.getElementById("genre");
let themeText = document.getElementById("theme");
let genreContainer = document.getElementsByClassName("genre")[0];
let themeContainer = document.getElementsByClassName("genre")[1];

let categorieGenre = {
    a: genreContainer.children[0],
    b: genreContainer.children[1],
    c: genreContainer.children[2],
    d: genreContainer.children[3],
    e: genreContainer.children[4],
    f: genreContainer.children[5],
    g: genreContainer.children[6],
    h: genreContainer.children[7],
    i: genreContainer.children[8],
    j: genreContainer.children[9],
    k: genreContainer.children[10],
    l: genreContainer.children[11],
    m: genreContainer.children[12],
    n: genreContainer.children[13],
    o: genreContainer.children[14],
    p: genreContainer.children[15],
    q: genreContainer.children[16],
    r: genreContainer.children[17],
    s: genreContainer.children[18],
    t: genreContainer.children[19],
    u: genreContainer.children[20],
    v: genreContainer.children[21],
    w: genreContainer.children[22],
    x: genreContainer.children[23],
    y: genreContainer.children[24],
    z: genreContainer.children[25],
    aa: genreContainer.children[26]
};

let categorieTheme = {
    a: themeContainer.children[0],
    b: themeContainer.children[1],
    c: themeContainer.children[2],
    d: themeContainer.children[3],
    e: themeContainer.children[4],
    f: themeContainer.children[5],
    g: themeContainer.children[6],
    h: themeContainer.children[7],
    i: themeContainer.children[8],
    j: themeContainer.children[9],
    k: themeContainer.children[10],
    l: themeContainer.children[11],
    m: themeContainer.children[12],
    n: themeContainer.children[13],
    o: themeContainer.children[14],
    p: themeContainer.children[15],
    q: themeContainer.children[16],
    r: themeContainer.children[17],
    s: themeContainer.children[18],
    t: themeContainer.children[19],
    u: themeContainer.children[20],
    v: themeContainer.children[21],
    w: themeContainer.children[22],
    x: themeContainer.children[23],
    y: themeContainer.children[24],
};

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
