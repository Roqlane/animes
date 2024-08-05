let genreText = document.getElementById("genre");
let themeText = document.getElementById("theme");
let genreContainer = document.getElementsByClassName("genre")[0];
let themeContainer = document.getElementsByClassName("genre")[1];


let episodes = document.querySelector(".has-children").children[0];
let episodesChild = document.querySelectorAll(".sous-menu > li");
let episodesContainer = document.querySelector(".sous-menu")


let genreChild = document.querySelectorAll(".genre")[0].querySelectorAll("p");
let themeChild = document.querySelectorAll(".genre")[1].querySelectorAll("p");


const search = document.querySelector("div.form input");

let sortingActivated = false;
let sortedByAsc = true;


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

function listEquals(card1, card2) {
    if (card2.length !== card1.length) return false;
    let i = 0;
    let isEqual = true;
    while (isEqual && i < card1.length) {
        if (card1[i].name !== card2[i].name) isEqual = false
        i++
    }
    return isEqual
}

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

function onClickMenuGenresStudioComponent(e) {
    if (e.target == genreContainer || e.target == themeContainer) return
    let word = e.target.innerText.toLowerCase()
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
            setTimeout(() => container.style.display = 'none', 300);
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



//filters cards according to the menu choices
function applyFilter(e) {
    let word = e.target.innerText.toLowerCase()
    if (word == '-') return

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
        const card = ANIMES_CARDS[nb]

        //the user clicked on genres or studios
        if (genresStudiosFilterClicked) {
            let g = card.GetGenres().toLowerCase(); //anime genres
            let t = card.GetStudios().toLowerCase(); // anime studios

            const includedInCard = g.includes(word) || t.includes(word)
            const filterActivated = e.target.classList.contains("themeGenre-children-active")

            if (filterActivated && !includedInCard) histogram[nb]++;
            else if (!filterActivated && !includedInCard && histogram[nb] != 0) histogram[nb]--;

        }
        //the user clicked on an episode range
        //increment the histogram elements if a card does not contain one of the filter
        else if (episodesFilterClicked) {
            episodesActivated.forEach((li2) => {
                let ep = parseInt(card.GetEpisodes()) //anime episodes
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

        //if the histogram elements are equal to 0, it means that all the filters match with the card
        if (histogram[nb] == 0) {
            newCardsInDom.push(ANIMES_CARDS[nb])
        }
    } 
    updateDomCards(newFragment, newCardsInDom) 
    if (sortingActivated) {
        sortCardsByEpisodes();
    }
}

//fait le tri entre les genres que veut l'utilisateurs et les cartes qui correspondent
function filtersSelect(e) {
    if (e.target == genreContainer || e.target == themeContainer || e.target == episodesContainer) return
    applyFilter(e);
}; 

/* SORT BY EPISODES */

//s'occupe de ranger les cartes au nombre croissant d'épisodes au 1er clic et au nombre décroissant d'épisodes au 2e clic
function sortCardsByEpisodes () {
        //range les cartes dans l'ordre qui convient
        let newCardsInDom = [];
        let newFragment = new Fragment();
        let order = CURRENT_ANIMES_CARDS.sort(compare);
        order.forEach(e => newCardsInDom.push(e));  
        updateDomCards(newFragment, newCardsInDom)
}

//fait le tri entre le nombre d'épisodes que possèdent les cartes et les ranges dans l'orde correspondant
const compare = (card1, card2) => {
    const episodeValue = (card) => Number(card.GetEpisodes());
    const select = (v1, v2) => v1 !== "" && v2 !== "" ? v1 - v2 : v1.toString().localeCompare(v2);
    return select(episodeValue(sortedByAsc ? card1 : card2), episodeValue(sortedByAsc ? card2 : card1));
};   

function onClickEpisodes() {
    sortingActivated = true
    if (episodes.style.color == "rgb(255, 170, 193)") {
        sortingActivated = false
        sortedByAsc = false
        episodes.style.color = ""
    }
    if (sortingActivated) {
        //change la couleur du texte episodes
        if (episodes.style.color == "") {
            episodes.style.color = "rgb(170, 235, 255)"
            sortedByAsc = true
        }
        else if (episodes.style.color == "rgb(170, 235, 255)") {
            episodes.style.color = "rgb(255, 170, 193)"
            sortedByAsc = false
        }
        sortCardsByEpisodes()
    }

}

function episodesClickEvent() {
    if (!media1007.matches && isEpisodesEventAdded == false) {
        episodes.addEventListener("click", onClickEpisodes);
        isEpisodesEventAdded = true;
        return;
    }
    episodes.removeEventListener("click", onClickEpisodes);
    isEpisodesEventAdded = false;
}
let isEpisodesEventAdded = false;
episodesClickEvent();
window.addEventListener("resize", episodesClickEvent);


/* SEARCH Feature */

//action de la barre de recherche: on recherche si ce que l'utilisateur a écrit se trouve quelque part dans les titres des animes
search.addEventListener("input", (e) => {
    let value = e.target.value.toLowerCase(); //ce que l'on cherche 

    const newCardsInDom = []
    const newFragment = new Fragment()

    for (let i = 0; i < ANIMES_CARDS.length; i++) {
        const card = ANIMES_CARDS[i];
        const title = card.GetTitle().toLowerCase()
        
        const valueMatchesWithTitle = title.includes(value)

        if (valueMatchesWithTitle && histogram[i] == 0) {
            newCardsInDom.push(ANIMES_CARDS[i])
        }
    }
    if (!listEquals(CURRENT_ANIMES_CARDS, newCardsInDom)) updateDomCards(newFragment, newCardsInDom)
    //on lance l'easter egg ou on le retire
    value === "black clover" ? BlackClover() : removeBlackClover();
    //si l'anime qu'a recherché l'utilisateur est introuvable, le fond de l'input est alors en rouge
    container.childElementCount == 0 && value != "black clover" ? search.style.background = "linear-gradient(to left, rgb(245, 12, 183), rgb(255, 71, 81))" : search.style.background = "transparent";
    
});


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
let  isMenuEventAdded = false;
function responsiveMenu() {
    if (media1007.matches) {
        document.querySelectorAll(".hover").forEach(h => h.classList.remove("hover"))
        if (!isMenuEventAdded) {
            isMenuEventAdded = true; 
            //responsive menu
            document.querySelector("#menu-icon").addEventListener("click", () => document.querySelector(".menu").classList.toggle("menu-responsive"));
            //toggle sous-menu animation
            episodes.addEventListener("click", () => document.querySelector("ul.sous-menu").classList.toggle("sous-menu-animation"));
    
        }
    }
    else {
        document.querySelectorAll(".T").forEach(T => T.classList.add("hover"))
    }
}
responsiveMenu();
window.addEventListener("resize", responsiveMenu);