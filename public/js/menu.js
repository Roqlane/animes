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
let episodesContainer = document.querySelector(".sous-menu")


let genreChild = document.querySelectorAll(".genre")[0].querySelectorAll("p");
let themeChild = document.querySelectorAll(".genre")[1].querySelectorAll("p");


const search = document.querySelector("div.form input");


let histogram = [];
for (let i =0; i<CURRENT_ANIMES_CARDS.length; i++) {
    histogram.push(0);
}

clicMenuThemeGenre(genreText, genreContainer, "reverse-translate-2000 350ms ease-out");
clicMenuThemeGenre(themeText, themeContainer, "reverse-translate2000 350ms ease-out");

genreContainer.addEventListener("click", onClickMenuGenresStudioComponent);
themeContainer.addEventListener("click", onClickMenuGenresStudioComponent);

genreContainer.addEventListener("click", filtersSelect);
themeContainer.addEventListener("click", filtersSelect);
episodesContainer.addEventListener('click', filtersSelect)



function updateDomCards(newFragment, newCardsInDom) {
    CURRENT_ANIMES_CARDS = newCardsInDom;
    //recreate the dom based on the new list
    fragment.RemoveDomFragment(container);
    newFragment.CreateDomFragment(container, newCardsInDom);
    fragment = newFragment;
    //update scroll animation
    window.removeEventListener('scroll', windowScrollListener)  
    windowScrollListener = () => cardsAnimations(newCardsInDom)
    window.addEventListener('scroll', windowScrollListener)
    cardsAnimations(newCardsInDom)
}

function tlc (elt) {
    return elt.innerText.toLowerCase();
}

function onClickMenuGenresStudioComponent(e) {
    if (e.target == genreContainer || e.target == themeContainer) return
    let word = tlc(e.target)
    if (word == '-') return

    e.target.classList.toggle("themeGenre-children-active");
}


//display the menu containers
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



function themeGenreContainerLightMode() {
    genreContainer.classList.remove("themeGenre--darkMode"); 
    themeContainer.classList.remove("themeGenre--darkMode");
}

function themeGenreContainerDarkMode() {
    genreContainer.classList.add("themeGenre--darkMode");
    themeContainer.classList.add("themeGenre--darkMode");
}



//affichera toutes les cartes possédant ce mot
function applyFilter(e) {
    if (e.target == genreContainer || e.target == themeContainer || e.target == episodesContainer) return
    let word = tlc(e.target)
    if (word == '-') return
    inputTextDeleter()

    const genresStudiosFilterClicked = e.target.classList.contains("genresStudiosChildren")
    const episodesFilterClicked = e.target.classList.contains("episodesChildren")
    
    if (episodesFilterClicked) e.target.classList.toggle('episodes-children-active')

    const episodesActivated = document.querySelectorAll('.episodes-children-active').length == 0 ? [e.target] : document.querySelectorAll('.episodes-children-active');

    if (!genresStudiosFilterClicked) {
        episodesActivated.forEach((li2) => {
                if (li2 !== e.target ) {
                    li2.classList.remove("episodes-children-active")
                };
            })
    }

    let newCardsInDom = [];
    let newFragment = new Fragment();

    //filter the card that contains the activated filters
    for (let nb = 0; nb < ANIMES_CARDS.length; nb++) {
        const cardContainer = ANIMES_CARDS[nb].GetCard()

        //the user clicked on genres or studios
        if (genresStudiosFilterClicked) {
            let g = tlc(cardContainer.children[0].children[0].children[0].children[1].children[1]); //anime genres
            let t = tlc(cardContainer.children[0].children[0].children[0].children[1].children[2]); // anime studios

            const includedInCard = g.includes(word) || t.includes(word)
            const filterActivated = e.target.classList.contains("themeGenre-children-active")

            if (filterActivated && !includedInCard) histogram[nb]++;
            else if (!filterActivated && !includedInCard && histogram[nb] != 0) histogram[nb]--;

        }
        //the user clicked on an episode range
        else if (episodesFilterClicked) {
            //tous les éléments du sous-menu sauf le cliqué ont leur couleur réinitialisée
            if (episodesActivated.length == 0) episodesActivated.push(e.target)
            episodesActivated.forEach((li2) => {
                let ep = parseInt(cardContainer.children[0].children[0].children[0].children[1].children[0].innerText.substring(10).replace(/[^\d+]/g, '')) //anime episodes
                let range = li2.innerText.split('-')
                const filterActivated = li2.classList.contains("episodes-children-active")
                if (range.length == 2) {
                    const min = parseInt(range[0])
                    const max = parseInt(range[1])
                    const withinRange = min <= ep && max >= ep
                    if (!withinRange && filterActivated) histogram[nb]++;
                    else if (!withinRange && !filterActivated && histogram[nb] != 0) histogram[nb]--;
                }
                else {
                    const n = parseInt(range[0])
                    const withinRange = n < ep
                    if (!withinRange && filterActivated) histogram[nb]++;
                    else if (!withinRange && !filterActivated && histogram[nb] != 0) histogram[nb]--;
                }
            })
            
        }

        //increment the histogram elements if a card does not contain one of the filter
    
        //if the histogram elements are equal to 0, it means that all the filters match with the card
        if (histogram[nb] == 0) {
            newCardsInDom.push(ANIMES_CARDS[nb])
        }
    } 
    console.table(histogram)
    updateDomCards(newFragment, newCardsInDom) 
}

function episodeFilter(e, cardContainer, nb) {
    
}

//fait le tri entre les genres que veut l'utilisateurs et les cartes qui correspondent
function filtersSelect(e) {
    inputTextDeleter();
    applyFilter(e);
}; 

/* SORT BY EPISODES */

//s'occupe de ranger les cartes au nombre croissant d'épisodes au 1er clic et au nombre décroissant d'épisodes au 2e clic
class triEpisodes {
    constructor() {
        this.arrangement;
    }

        arrangement (e) {
                e.stopPropagation();
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
                        e.preventDefault();
                        e.stopPropagation();
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
                        e.preventDefault();
                        e.stopPropagation();
                        if (e.offsetY > 0 && e.offsetY >= 20) {
                            $whiteLine.height(e.clientY); //la ligne clanche "suit" le curseur
                            $whiteLine.css("opacity", e.clientY / $line.height() + 0.15); //on gère son opacité en fonction de sa taille
                        }
                        //on indique que l'on peut lacher lorsque la ligne blanche a atteint la taille suffisante
                        $whiteLine.height() >= screenHeight - 30 ? $whiteLine.css("boxShadow", "0 0 20px rgb(255, 255, 255), 0 0 40px rgb(255, 255, 255), 0 0 80px rgb(255, 255, 255)") : $whiteLine.css("box-shadow", "none");
                    }
            
                    function onWindowMouseup (e) {
                        e.preventDefault();
                        e.stopPropagation();
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
            cardsAnimationContainer = document.querySelectorAll("div.card--animate");
            cardsAnimations();
            window.addEventListener("scroll", cardsAnimations); 
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


/* SEARCH Feature */

//action de la barre de recherche: on recherche si ce que l'utilisateur a écrit se trouve quelque part dans les titres des animes
search.addEventListener("input", (e) => {
    let value = e.target.value; //ce que l'on cherche 
    if (value === "") { //si le formulaire est vide
        cardsAnimationContainer.forEach((c) => cardsApparition(c)); //on fait apparaître toutes les cartes
        window.addEventListener("scroll", cardsAnimations); //et on remet les apparitions continuelles des cartes lors du scroll
    }
    if (value !== "") { //si le formulaire est rempli
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