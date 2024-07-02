episodesSelect(episodesI, 11, 13);
episodesSelect(episodesII, 24, 27);
episodesSelect(episodesIII, 30, 100);


clicMenuThemeGenre(genreText, genreContainer, "reverse-translate-2000 350ms ease-out");
clicMenuThemeGenre(themeText, themeContainer, "reverse-translate2000 350ms ease-out");

genreContainer.addEventListener("click", (e) => menuColorElt(e, genreContainer));
themeContainer.addEventListener("click", (e) => menuColorElt(e, themeContainer));

themeGenre.forEach((elt) => elt.addEventListener("click", selectCategorieSetUp));

genreContainer.addEventListener("click", genreSelect);
themeContainer.addEventListener("click", themeSelect);

function clicMenuThemeGenre(text1, container, animation) {
    function removeThemeGenreContainer(e, container, text) {
        if (!container.contains(e.target) && !text.contains(e.target)) {
            container.style.display = 'none';
            text.classList.remove("menu-li-active");
            document.removeEventListener('click', boundRemoveThemeGenreContainer);
        }
    }
    function boundRemoveThemeGenreContainer(e) {
        removeThemeGenreContainer(e, container, text1);
    }

    text1.addEventListener("click", () => {
        text1.classList.toggle("menu-li-active");
        if (container.style.display =='flex') {
            container.style.animation = animation;
            setTimeout(() => container.style.display = 'none', 350);
        }
        else {
            container.style.display = 'flex';
            if (animation.startsWith('reverse-translate-2000')) {
                container.style.animation = "translate-2000 350ms ease-out";
            }
            else {
                container.style.animation = "translate2000 350ms ease-out";
            }
            
        }
        document.addEventListener("click", boundRemoveThemeGenreContainer);
    });

}



//gère les couleurs lorsque l'on clique sur les genres ou thèmes
function menuColorElt(e, elt) {
   if (e.target != elt && e.target.innerText != '-') e.target.classList.toggle("themeGenre-children-active");
}

function themeGenreContainerLightMode() {
    genreContainer.classList.remove("themeGenre--darkMode"); 
    themeContainer.classList.remove("themeGenre--darkMode");
}

//passe en mode "néon" lors du dark mode
function themeGenreContainerDarkMode() {
    genreContainer.classList.add("themeGenre--darkMode");
    themeContainer.classList.add("themeGenre--darkMode");
}

//fonction qui va trier les animes en fonction des genres et des themes, il les fait disparaître et apparaître en fonction de leur compatibilité
function selectCategorieInitialisation (nb, e) {
    let g;
    let t;
    for (let a = 0; a < cardLength; a++) {
        if (cards[nb].classList.contains(a) == true && fullscreen[a].classList.contains(a) == true) {
            g = tlc(fullscreen[a].children[1].children[0].children[1].children[2]);
            t = tlc(fullscreen[a].children[1].children[0].children[1].children[3]);
        }
    }
    if (getComputedStyle(e).color == "rgb(255, 201, 102)" && (g.includes(tlc(e)) == false && t.includes(tlc(e)) == false)) arrayOfMiracle[nb]++;
    else if (e.classList.contains("themeGenre-children-active") && (g.includes(tlc(e)) == false && t.includes(tlc(e)) == false) && arrayOfMiracle[nb] != 0) arrayOfMiracle[nb]--;
}
function selectCategorieSetUp (e) {
    for (let i = 0; i < cardLength; i++) selectCategorieInitialisation(i, e.target);
    episodesLiRemoveColor();
};

//affichera toutes les cartes possédant ce mot
function selectCategorie(word) {
    if (word != "-" && word.length < 20) for (let nb = 0; nb < cardLength; nb++) {
        let g = tlc(fullscreen[nb].children[1].children[0].children[1].children[2]); //anime genres
        let t = tlc(fullscreen[nb].children[1].children[0].children[1].children[3]); // anime themes
        if ((g.includes(word) === true || t.includes(word) === true) && arrayOfMiracle[nb] == 0) cardsApparition(cardsAnimationContainer[nb]);
        else if ((g.includes(word) === false || t.includes(word) === false) && arrayOfMiracle[nb] == 0) cardsApparition(cardsAnimationContainer[nb]);
        else cardsDisparition(cardsAnimationContainer[nb]);    
    }
}

//fait le tri entre les genres que veut l'utilisateurs et les cartes qui correspondent
function genreSelect(e) {
    cardsRemoveAnimation ();
    selectCategorie(e.target.innerText.toLowerCase());
    inputTextDeleter();
};

//fait le tri entre quels thèmes veut l'utilisateur et les cartes qui correspondent aux thèmes
function themeSelect(e) {
    cardsRemoveAnimation ();
    selectCategorie(e.target.innerText.toLowerCase());
    inputTextDeleter();
};  

//met la couleur des thèmes et des genres à l'initiale comme il n'y a plus de tri de leur côté
function colorCategoriesNone () {
    genreChild.forEach((g) => g.classList.remove("themeGenre-children-active"));
    themeChild.forEach((t) => t.classList.remove("themeGenre-children-active"));
} 


//s'occupe de ranger les cartes au nombre croissant d'épisodes au 1er clic et au nombre décroissant d'épisodes au 2e clic
class triEpisodes {
    constructor() {
        this.arrangement;
    }

        arrangement (e) {
                e.stopPropagation();
                cardsRemoveAnimation();
                colorCategoriesNone();
                resetArray();
                episodesLiRemoveColor();
                inputTextDeleter();

                /*on fait apparaître l'animation*/

                const $whiteLine = $("#line-white"); //le slash que l'utilisateur va faire
                const $line = $("#line"); //le conteneur de toute la ligne du slash (avec les pointilé et la ligne guide)
                const $dottedLine = $("#line-dotted"); //les pointillés
                const $epLoaderCtr = $(".loading-episodes_order"); //animations container
                const $ring = $(".ring"); //circles container
                const $ringFirst = $("#ring-first"); //first circle container
                const $ringSecond = $("#ring-second"); //second circle container

                $epLoaderCtr.css({
                    transform: "scale(1)",
                    background: "rgb(0, 24, 4)"
                });
                $line.css("opacity", 1);
                $ring.css("filter", "none");
                $ringFirst.removeClass("giri1");
                $ringSecond.removeClass("giri2");

                //range les cartes dans l'ordre qui convient
                setTimeout( () => {
                    cardsAnimationContainer.forEach(() => {
                        let order = Array.from(cardsAnimationContainer).sort(compare(this.asc = !this.asc));
                        order.forEach(e => main.appendChild(e));  
                    });

                //déclenche l'animation de chargement
                (function () {    
                    $dottedLine.css("display", "flex");

                    const screenHeight = document.documentElement.clientHeight;

                    function onLineMousedown (e) {
                        eventDefault(e);
                        let start = 0.06605019815059446 * screenHeight; //la marge maximal où l'utilisateur peut cliqué pour faire la slash
                        
                        //l'utilisateur clique sur le début de la ligne de pointillés
                        if (e.offsetY > 0 && e.offsetY <= start) {
                            $line.on("mousemove", onLineMousemove); //on bouge la souris, ce qui fait apparaître la ligne blanche
                            $(window).on("mouseup", onWindowMouseup); //lorsque l'on relache la souris, la ligne se réinitialise
                            $dottedLine.css("display", "none"); //on fait disparaître la ligne de pointillés
                        }
    
                    } 
                    $line.on("mousedown", onLineMousedown);
            
                    function onLineMousemove (e) {
                        eventDefault(e);
                        if (e.offsetY > 0 && e.offsetY >= 20) {
                            $whiteLine.height(e.clientY); //la ligne clanche "suit" le curseur
                            $whiteLine.css("opacity", e.clientY / $line.height() + 0.15); //on gère son opacité en fonction de sa taille
                        }
                        //on indique que l'on peut lacher lorsque la ligne blanche a atteint la taille suffisante
                        $whiteLine.height() >= screenHeight - 30 ? $whiteLine.css("boxShadow", "0 0 20px rgb(255, 255, 255), 0 0 40px rgb(255, 255, 255), 0 0 80px rgb(255, 255, 255)") : $whiteLine.css("box-shadow", "none");
                    }
            
                    function onWindowMouseup (e) {
                        eventDefault(e);
                        //lorsque l'utilisateur a relaché la souris après qu'il ait fait le slash (la ligne blanche prend prend presque toute la hauteur de l'écran)
                        if ($whiteLine.height() >= screenHeight - 30) {
                            $epLoaderCtr.css("background", "transparent"); //le fond devient transparent
                            $whiteLine.height($line.height()); //la ligne blanche prend toute la hauteur de l'écran
                            $ringFirst.addClass("giri1"); //disparition du cercle de gauche
                            $ringSecond.addClass("giri2"); //disparition du cercle de droite
                            $ring.css("filter", "url(#wavy-without-animate)"); //on met un effet aux background des 2 cercles
                            //la ligne blanche disparaît
                            $whiteLine.css({
                                opacity: 0,
                                height: 0,
                                boxShadow: "none"
                            });
                            $line.css("opacity", 0); //ainsi que son conteneur
                            //on fait disparaître le conteneur total après que l'animation ait été effectuée
                            setTimeout(() => {
                                $epLoaderCtr.css("transform", "scale(0)");
                            }, 3000);
                        } else {
                            //la ligne blanche revient à son état initiale
                            $whiteLine.css({
                                height: 0,
                                opacity: 0
                            });
                            $dottedLine.css("display", "flex") //la ligne de pointillés réapparaît
                        }
                        $line.off("mousemove", onLineMousemove);
                        $(window).off("mouseup", onWindowMouseup);
                    }
                })();  
            //réinitialise toutes les cartes
            cards = document.querySelectorAll("div.card");
            themeGenre.forEach(elt => {
                elt.removeEventListener("click", selectCategorieSetUp);
                elt.addEventListener("click", selectCategorieSetUp);
            })
            cardsAnimationContainer = document.querySelectorAll("div.card--animate");
            cardMove();
            window.addEventListener("scroll", cardMove); 
            }, 1000);

            //fait le tri entre le nombre d'épisodes que possèdent les cartes et les ranges dans l'orde correspondant
            const compare = (asc) => (card1, card2) => {
                asc ? episodes.style.color = "rgb(170, 235, 255)": episodes.style.color = "rgb(255, 170, 193)";
                const episodeValue = (card) => Number(card.children[0].children[0].children[1].innerText.substring(10));
                const select = (v1, v2) => v1 !== "" && v2 !== "" ? v1 - v2 : v1.toString().localeCompare(v2);
                return select(episodeValue(asc ? card1 : card2), episodeValue(asc ? card2 : card1));
            };   
        }
}

const order = new triEpisodes();
(function() {
    "use strict";
    function episodesClickEvent() {
        if (!media1007.matches && isEventAdded == false) {
            episodes.addEventListener("click", order.arrangement);
            isEventAdded = true;
            return;
        }
        episodes.removeEventListener("click", order.arrangement);
        isEventAdded = false;
        return;
    }
    let isEventAdded = false;
    episodesClickEvent();
    window.addEventListener("resize", episodesClickEvent);
})();
//gère la couleur des li de la catégorie "Episodes" et s'occupe de trier les cartes en fonction de quel élément est cliqué
function episodesSelect (ep, v1, v2) {
    ep.addEventListener("click", (e) => {        
        e.stopPropagation();
        colorCategoriesNone(); //retire la couleur de catégories genres et themes sélectionnées
        cardsRemoveAnimation (); //retire l'animation des cartes sur les latéraux
        inputTextDeleter();
       
        e.target.classList.toggle("episodes-children-active"); //met l'élément de couleur noir
        //tous les éléments du sous-menu sauf le cliqué ont leur couleur réinitialisée
        episodesChild.forEach((li2) => {
            if (li2.classList.contains("episodes-children-active") && li2 !== e.target ) li2.classList.remove("episodes-children-active");
        })
       
        for (let i = 0; i<cardLength; i++) {
           let n = Number(cards[i].children[0].children[1].innerText.substring(10)); //le nombre d'épisodes
            n >= v1 && n <= v2 ? cardsApparition(cardsAnimationContainer[i]) : e.target.classList.contains("episodes-children-active") ? cardsDisparition(cardsAnimationContainer[i]) : cardsApparition(cardsAnimationContainer[i]);
        }
    })
}
//supprime la couleur des li de la catégorie "épisodes"
function episodesLiRemoveColor() {
    episodesChild.forEach(li => li.classList.remove("episodes-children-active"));
 }
//action de la barre de recherche: on recherche si ce que l'utilisateur a écrit se trouve quelque part dans les titres des animes
search.addEventListener("input", (e) => {
    episodesLiRemoveColor(); //retire la couleur de la tranche sélectionnée du sous-menu
    colorCategoriesNone(); //retire les couleurs des catégories sélectionnées
    let value = e.target.value; //ce que l'on cherche 
    if (value === "") { //si le formulaire est vide
        cardsAnimationContainer.forEach((c) => cardsApparition(c)); //on fait apparaître toutes les cartes
        window.addEventListener("scroll", cardMove); //et on remet les apparitions continuelles des cartes lors du scroll
    }
    if (value !== "") { //si le formulaire est rempli
        cardsRemoveAnimation(); //on retire les animations aux cartes (celles lors du scroll)
        //et on fait apparaître les animes qui correspondent à la recherche
        cardsAnimationContainer.forEach((c) => c.children[0].children[0].textContent.toString().toLowerCase().indexOf(value.toLowerCase()) !== -1 ? cardsApparition(c): cardsDisparition(c));
    }
    //on lance l'easter egg ou on le retire
    value === "Black Clover" ? BlackClover() : removeBlackClover();
    //si l'anime qu'a recherché l'utilisateur est introuvable, le fond de l'input est alors en rouge
    main.childElementCount == 0 && value != "Black Clover" ? search.style.background = "linear-gradient(to left, rgb(245, 12, 183), rgb(255, 71, 81))" : search.style.background = "transparent";
});

//supprime le texte de l'input
function inputTextDeleter() {
    search.value = "";
}

/*easter egg*/
function BlackClover() {
    search.classList.add("easterEgg");
    window.addEventListener("keydown", redirect);
}
function removeBlackClover() {
    search.classList.remove("easterEgg");
    window.removeEventListener("keydown", redirect);
}
function redirect(e) {
    if (e.key == "Enter") window.location = "../html/black_clover.html";
};

/* MENU RESPONSIF */
function responsiveMenu() {
    media1007.matches ? document.querySelectorAll(".hover").forEach(h => h.classList.remove("hover")) : document.querySelectorAll(".T").forEach(T => T.classList.add("hover"));
    if (media1007.matches && isEventAdded == false) {
        isEventAdded = true; 
        //responsive menu
        document.querySelector("#menu-icon").addEventListener("click", () => document.querySelector(".menu").classList.toggle("menu-responsive"));
        //toggle sous-menu animation
        episodes.addEventListener("click", () => document.querySelector("ul.sous-menu").classList.toggle("sous-menu-animation"));
    }
}
let isEventAdded = false;
responsiveMenu();
window.addEventListener("resize", responsiveMenu);