let resizeTimeout;
window.onload = function() {


    //lorsque l'on vient de la page "tier list" et que l'on a cliqué sur le lien d'un anime, on redirige l'utilisateur vers celui-ci
    // let params = new URLSearchParams(document.location.search); //on récupère les paramètres de l'url
    // let animeName = params.get("anime"); //on récupère le nom de l'anime
    // moveToAnimeCard(animeName)

    //animation des cartes
    cardsAnimations(CURRENT_ANIMES_CARDS)
    responsiveLoading()

    //resize event
    window.addEventListener('resize', responsiveResize);

    
    //on retire l'écran l'écran de chargement
    document.querySelector(".loading-screen").style.transform = "scale(0)";
    document.body.removeChild(document.querySelector(".loading-screen"));

    //animation du menu et de ses éléments
    document.querySelector(".menu").classList.add("anim_menu");

    for (let i = 0, t = 1; i<3; i++) {
        let li = document.querySelectorAll(".menu > nav > ul > li")[i];
        li.classList.add("anim-menu-elt");
        li.style.animationDelay = t + "s";
        t += 0.25;
    }

    //animation des lettres du menu
    document.querySelectorAll("a > span").forEach(span => {
        span.classList.add("spinning-letters");
    });

    //animation du formualaire de recherche
    document.querySelector("div.form").classList.add("translate2000");

    search.value = ""

}

function responsiveResize() {
    media1007 = window.matchMedia('screen and (max-width: 1007px)');
    responsiveLoading()
    //update card animations
    clearTimeout(resizeTimeout);
    
    //add animation on resize if device is of computer screen size 
    resizeTimeout = setTimeout(() => {
        if (!media1007.matches) {
            CURRENT_ANIMES_CARDS.forEach(c => {
                c.IndexCard()
                c.SetAnimationAndDelay()
            })
            cardsAnimations(CURRENT_ANIMES_CARDS)
        };
    }, 300);
}

function responsiveLoading() {
    responsiveCardSize()
    
    //mobile
    //on retire l'animation des cartes pour en mettre une autre plus simple
    if (media1007.matches) {
        CURRENT_ANIMES_CARDS.forEach(c => {
            c.RemoveAnimations()
            c.GetCard().classList.add("anim_card")
        })
    }
    //ordinateur
    else {
        //applique le nombre de cartes par lignes par rapport à la largeur de l'écran
        NUMBER_OF_CARDS_IN_ROW = Math.floor(window.innerWidth / (CARD_WIDTH + 20))
        container.style.gridTemplateColumns = `repeat(${NUMBER_OF_CARDS_IN_ROW}, 1fr)`
    }
}

//adapte la taille des cartes par rappport à l'écran lorsque qu'on est en mode tablette out smartphone
function responsiveCardSize() {
    if (media1007.matches) {
        let width = 0.3 * document.documentElement.offsetWidth;
        let height = 1.5 * width;
        CURRENT_ANIMES_CARDS.forEach(c => {
            c.GetCard().style.width = width + "px";
            c.GetCard().style.height = height + "px";
        });
        return;
    }
        CURRENT_ANIMES_CARDS.forEach(c => {
            c.GetCard().style.width = CARD_WIDTH + "px";
            c.GetCard().style.height = CARD_HEIGHT + "px";
    })
}


// function moveToAnimeCard(animeName) {
//     //le paramètre est vide
//     if (animeName === null || typeof animeName === undefined) return
  
//     let animeCard = document.getElementById(`${animeName}`); //la carte de l'anime
  
//     //la carte n'existe pas
//     if (animeCard === null) return
  
//     //on cherche la position de la carte
//     let animePosition = Math.abs(document.body.getBoundingClientRect().top - animeCard.getBoundingClientRect().top)
    
//     /*-on veut reconnaître l'anime qu'on a cliqué donc on va lui rajouter une bordure rouge
//         .on retire la bordure rouge à l'anime qui la possédait
//         .on applique la bordure à l'anime que l'on a cliqué
//     */
//    focusedCards = document.getElementsByClassName('focus-card')
//    focusedCards.forEach((c) => c.classList.remove('focus-card'))
   
//    animeCard.classList.add("focus-card")
  
//     //et on se déplace jusqu'à la location
//     window.scrollTo({
//         top: animePosition,
//         behavior: 'smooth'
//     });
//   }

// /* toutes les fonctionnalités si l'utilisateur est connecté */
// if (typeof kitsune != typeof undefined) {

//     //les fonctions qui permettent de faire apparaître ou disparaître les animes dans la fav-list
//     function favCardApparition(elt) {
//         elt.classList.add('fav-card-animation-apparition')
//         elt.classList.remove('fav-card-animation-disparition')
//         elt.style.display = "block"
//     }
//     function favCardDisparition(elt) {
//         elt.classList.add('fav-card-animation-disparition')
//         elt.classList.remove('fav-card-animation-apparition')
//         setTimeout(() => elt.style.display = "none", 300);
//     }

//     function addFavCard(emptyStarContainer, filledStarContainer, newAnimeCard, animeName, i) {
//         //remet l'étoile colorée et ajoute la carte à la fav liste
//         emptyStarContainer.style.opacity = 0
//         filledStarContainer.style.opacity = 1
//         favCardApparition(newAnimeCard)
//         //crée un cookie pour enregistrer le choix
//         createCookie(`anime-fav-${i}`, animeName, 10)
//     }
//     function removeFavCard(emptyStarContainer, filledStarContainer, newAnimeCard, i) {
//         //met l'étoile vide et retire la carte de la fav-list
//         emptyStarContainer.style.opacity = 1
//         filledStarContainer.style.opacity = ""
//         favCardDisparition(newAnimeCard)
//         //supprime le cookie affilié
//         removeCookie(`anime-fav-${i}`)
//     }

// /* création de l'étoile (signifiant que l'utillisateur aime bien l'anime) que l'on mettra en haut à droite des cartes 
//     il y aura 2 étoiles:
//     -Une étoile vide, elle représente le mode par défaut de la carte (non choisie par l'utilisateur)
//     -Une étoile colorée, l'utilisateur aime bien cet anime
// */

//     //le conteneur de la fav-list
//     const newAnimeContainer = document.getElementById('fav-list-ctr-animes');
//     const favListContainer = document.getElementById('fav-list-ctr')
//     const favListContainerCross = document.getElementById("fav-list-ctr-cross")
//     favListContainerCross.addEventListener('click', () => {
//         favListContainer.classList.add("reverse-translate2000")
//         favListContainer.classList.remove("translate2000")
//     });

// /* création des étoiles et de tout ce qui concerne la fav-list*/

//     for(let i = 0; i < CURRENT_ANIMES_CARDS.length; i++) {
//         //création de l'étoile "vide"
//         const emptyStarContainer = document.createElement('div');
//         emptyStarContainer.classList.add('empty-star-container');

//         const emptyStar = document.createElement('img');
//         emptyStar.src = '../image/empty-star.png';
//         emptyStarContainer.appendChild(emptyStar)

//         //création de l'étoile "remplie"
//         const filledStarContainer = document.createElement('div');
//         filledStarContainer.classList.add('filled-star-container');

//         const filledStar = document.createElement('img');
//         filledStar.src = '../image/filled-star.png';
//         filledStarContainer.appendChild(filledStar);

//         //on ajoute ces éléments dans les cartes
//         CURRENT_ANIMES_CARDS[i].GetCard().appendChild(emptyStarContainer)
//         CURRENT_ANIMES_CARDS[i].GetCard().appendChild(filledStarContainer)

//         /*place une miniature de la carte correspondante dans la liste "j'aime" */

//         const animeName = filledStarContainer.parentElement.id

//         // crée une nouvelle carte avec le même cover que l'originelle
//         const newAnimeCard = document.createElement('div');
//         newAnimeCard.style.background = `url(../image/cover/${animeName}.jpg)`
//         newAnimeCard.classList.add("new-anime-card")
//         newAnimeCard.classList.add('fav-card-animation-apparition')

//         //met toutes les nouvelles cartes dans la fav-list
//         newAnimeContainer.appendChild(newAnimeCard);

//         //lorsque l'on clique sur la nouvelle carte, elle nous redirige directement vers la carte originelle
//         newAnimeCard.addEventListener("click", () => moveToAnimeCard(animeName));

//         //petit problème, on a mit un hover qui fait que lorsque l'on clique sur l'étoile, on clique pas sur celle qui est vide mais celle qui est remplie
//         //on va donc créer un boolean de valeur vrai pour dire que le hover est en marche
//         let isHoverFilledStar = true
//         let isStarFilled = false

//         function addOrRemoveCardToFavList(e) {
//             e.stopPropagation();
//             //met l'opacité de l'étoile colorée à 1 (ce bloc ne s'exécute qu'une fois) et ajoute la carte correspondante à l'anime cliqué dans la fav liste
//             if (isHoverFilledStar) {
//                 addFavCard(emptyStarContainer, filledStarContainer, newAnimeCard, animeName, i)
//                 return isHoverFilledStar = false, isStarFilled = true
//             }
//             //remet l'étoile non colorée et retire la carte de la fav liste
//             if (isStarFilled) {
//                 removeFavCard(emptyStarContainer, filledStarContainer, newAnimeCard, i)
//                 return isStarFilled = false        
//             }
//             addFavCard(emptyStarContainer, filledStarContainer, newAnimeCard, animeName, i);
//             return isStarFilled = true
//         }
//         filledStarContainer.addEventListener('click', addOrRemoveCardToFavList);

//         //si des cookies sont définis alors on met les animes correspondant dans la fav-list
//         // const cookieValue = readCookie(`anime-fav-${i}`);
//         // if (cookieValue != null) document.getElementById(cookieValue).children[2].click();
//     }
// }

