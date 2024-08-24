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
        CURRENT_ANIMES_CARDS.forEach(c => {
            c.IndexCard()
            c.SetAnimationAndDelay()
        })
        cardsAnimations(CURRENT_ANIMES_CARDS)
    }, 300);
}

function responsiveLoading() {
    responsiveCardSize()
    NUMBER_OF_CARDS_IN_ROW = Math.floor(window.innerWidth / CARD_WIDTH)
    if (!media1007.matches) {
        container.style.gridTemplateColumns = `repeat(${NUMBER_OF_CARDS_IN_ROW}, 1fr)`
    }
}

//adapte la taille des cartes par rappport à l'écran lorsque qu'on est en mode tablette out smartphone
function responsiveCardSize() {
    if (media1007.matches) {
        let width = 0.3 * document.documentElement.offsetWidth;
        let height = 1.5 * width;

        HEADER_HEIGHT = 0
        CARD_WIDTH = width <= 150 ? 150 : width; 
        CARD_HEIGHT = height <= 225 ? 225 : height;
        THIRD_OF_CARD_HEIGHT = CARD_HEIGHT / 3

        ANIMES_CARDS.forEach(c => {
            c.GetCard().style.width = width + "px";
            c.GetCard().style.height = height + "px";
        });
        return;
    }
        HEADER_HEIGHT = document.getElementsByTagName("header")[0].offsetHeight
        CARD_HEIGHT = 480
        CARD_WIDTH = 320
        THIRD_OF_CARD_HEIGHT = CARD_HEIGHT / 3
        ANIMES_CARDS.forEach(c => {
            c.GetCard().style.width = 320 + "px";
            c.GetCard().style.height = 480 + "px";
    })
}