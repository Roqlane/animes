cards =  document.getElementsByClassName('card');
let cardsBack = document.getElementsByClassName('card-back');

const names = ["akame", "akudama", "aldnoah", "amagi", "angel", "angels_death", "april", "assassination_classroom", "beelzebub", "black_butler", "brynhildr", "bungou", "cautious", "code_geass", "darling", "death_note", "death_parade", "demon_slayer", "destructive_god", "dororo", "elite", "erased", "fate", "fire_force", "food", "free", "fullmetal", "gangsta", "gate", "genome", "go", "goblin_slayer", "grand_blue", "guren", "haikyuu", "horimya", "hxh", "id_invaded", "iwgp", "kabaneri", "kaguya", "kaisen", "kakegurui", "k", "kekkai", "kill", "knights_magic", "konosuba", "kuroko", "mha", "millionaire", "mob", "moriarty", "mushoku", "nanatsu", "nogamenolife", "noragami", "opm", "overlord", "parasyte", "prison", "rettousei", "rezero", "saiki", "sakamoto", "sao", "seraph", "shield", "snk", "stone", "tensura", "tkg", "tpn", "vinland", "youjo_senki", "yuri", "zestiria"];

const titles = ["Fullmetal Alchemist: Brotherhood", "Grand Blue", "Noragami", "My Hero Academia", "No Game No Life", "Tokyo Ghoul", "Re:zero", "One Punch Man", "Overlord", "Tensei Shitara Slime Datta Ken", "Dororo", "Sakamoto desu ga ?", "Darling in the Franxx", "Parasyte", "Erased", "Your lie in April", "Youjo Senki", "The Rising of the Shield Hero", "Prison School", "Fire Force", "Knight's & Magic", "Akame ga KILL!", "K-project", "ID:INVADED", "Kakegurui", "Vinland Saga", "Boku no Tonari ni Ankoku Hakaishin ga Imasu.", "Mahouka Koukou no Rettousei", "Kabaneri of the Iron Fortress", "Bungou Stray Dogs", "Kaguya-sama - Love is War", "Owari no Seraph", "Ikebukuro West Gate Park", "Hunter X Hunter", "Code Geass", "Dr Stone", "Assassination Classroom", "Demon Slayer", "Fate/stay night : Unlimited Blade Works", "Death Note", "Shingeki no kyojin", "Haikyū!!", "Black Butler", "Nanatsu no Taizai", "Free!", "Goblin Slayer", "Kuroko no Basket", "The Millionaire Detective - Balance: Unlimited", "Classroom of the Elite", "Moriarty the Patriot", "Kill la Kill", "Tengen Toppa Gurren-Lagann", "Food Wars", "Kono Subarashii Sekai ni Shukufuku wo!", "Death Parade", "Mob Psycho 100", "Yuri!!! on Ice", "Aldnoah.Zero", "Amagi Brilliant Park", "Angel Beats!", "Beelzebub", "Brynhildr in the Darkness", "Saiki Kusuo no Ψ Nan", "Sword Art Online", "Naka no Hito Genome [Jikkyouchuu]", "The Promised Neverland", "Akudama Drive", "Mushoku Tensei : Isekai Ittara Honki Dasu", "Angels of Death", "Jujutsu Kaisen", "GANGSTA.", "Gate : Jieitai Kanochi nite, Kaku Tatakaeri", "Cautious Hero", "Tales of Zestiria the X", "Kekkai Sensen", "Horimya", "The Quintessential Quintuplets"];


const genres = [
    "Action, Aventure, Fantastique, Drame",
    "Comédie, Slice of Life, Sport",
    "Action, Aventure, Fantastique, Surnaturel",
    "Action, Aventure, Super-héros, Drame",
    "Fantastique, Aventure, Comédie, Jeu",
    "Action, Horreur, Surnaturel, Drame ",
    "Fantasy, Aventure, Drame, Psychologique",
    "Action, Comédie, Super-héros, Parodie",
    "Fantasy, Action, Aventure, Isekai",
    "Fantasy, Isekai, Aventure, Comédie",
    "Action, Aventure, Drame, Surnaturel"
]


const studios = [
    "Bones",
    "Zero-G",
    "Bones",
    "Bones",
    "Madhouse",
    "Studio Pierrot",
    "White Fox",
    "Madhouse, J.C. Staff",
    "Madhouse",
    "Eight Bit",
    "MAPPA, Tezuka Productions"
]

const episodes = [
    "64",
    "12",
    "25",
    "+140",
    "12",
    "24",
    "50+",
    "24",
    "40+",
    "50+",
    "24"
]

const synopsis = [
    "Fullmetal Alchemist: Brotherhood suit les frères Edward et Alphonse Elric, qui utilisent l'alchimie pour tenter de ramener leur mère à la vie. La tentative échoue : Edward perd une jambe et un bras, remplacés par des prothèses mécaniques, et Alphonse perd son corps, son âme étant scellée dans une armure. Pour retrouver leurs corps, ils cherchent la Pierre Philosophale, un artefact légendaire. En chemin, ils découvrent les secrets de leur pays, Amestris, et affrontent les homonculus, êtres artificiels incarnant les sept péchés capitaux. La série explore les thèmes du sacrifice, de la morale et de la quête de l'humanité.",
    "Grand Blue suit Iori Kitahara, un étudiant qui emménage chez son oncle pour commencer sa vie universitaire près de l'océan. Il découvre rapidement le club de plongée local, Grand Blue, peuplé de membres excentriques plus intéressés par la fête que par la plongée. Malgré ses réticences initiales, Iori est entraîné dans un tourbillon de beuveries, de nudité impromptue et de situations hilarantes. À travers ces expériences, Iori forge des amitiés inattendues et découvre la beauté de la plongée sous-marine. L'anime mélange comédie exubérante et moments de camaraderie sincère, tout en explorant la vie étudiante et les défis de la transition vers l'âge adulte.",
    "Noragami suit Yato, un dieu mineur autoproclamé \"Dieu de la Livraison\", qui rêve de devenir un dieu vénéré avec des millions de fidèles. Pour ce faire, il accomplit des tâches pour 5 yens, espérant gagner en popularité. Yato rencontre Hiyori Iki, une lycéenne dont l'âme quitte fréquemment son corps après un accident, et Yukine, une âme perdue qui devient son arme divine. Ensemble, ils affrontent les menaces surnaturelles et les autres dieux. La série explore les thèmes de l'identité, de la rédemption et de la lutte pour trouver sa place dans le monde, tout en mêlant action et comédie.",
    "My Hero Academia se déroule dans un monde où presque tout le monde possède des \"Quirks\", des pouvoirs surnaturels. Izuku Midoriya, un jeune garçon né sans Quirk, rêve de devenir un héros comme son idole All Might. Après un incident avec All Might, il reçoit un pouvoir spécial, One For All, et est accepté à l'Académie des Héros U.A. Là, il apprend à maîtriser ses nouvelles capacités tout en affrontant des vilains et des menaces. L'anime explore les défis de la formation des héros, les luttes personnelles, et la dynamique entre les héros en devenir et les vilains menaçants.",
    "No Game No Life suit Sora et Shiro, un frère et une sœur géniaux, connus sous le pseudonyme de \"Blank\" dans le monde des jeux en ligne. Après avoir été défiés et transportés dans un monde parallèle où tout est décidé par des jeux, ils rencontrent le mystérieux dieu des jeux, Tet. Dans ce monde, les conflits sont résolus par des jeux plutôt que par la violence. Sora et Shiro utilisent leur intelligence et leurs compétences exceptionnelles pour défier les règles et les autres puissants joueurs afin de conquérir ce monde et défier Tet lui-même. L'anime est connu pour son style visuel unique, ses intrigues captivantes et ses stratégies de jeu complexes.",
    "Tokyo Ghoul suit Ken Kaneki, un étudiant ordinaire qui devient un hybride après une transplantation d'organes d'une goule, des créatures carnivores qui se cachent parmi les humains. Désormais obligé de vivre en tant que goule, Kaneki lutte pour s'adapter à sa nouvelle vie tout en cachant sa véritable nature. Il découvre un monde caché de goules avec ses propres règles et conflits, tout en étant pourchassé par des enquêteurs humains spécialisés dans l'extermination des goules. L'anime explore les thèmes de l'identité, de la survie et du conflit intérieur entre l'humanité et les instincts de goule.",
    "Re:Zero suit Subaru Natsuki, un adolescent qui est soudainement transporté dans un monde fantastique alors qu'il rentre de l'épicerie. Il découvre qu'il a la capacité de revenir à la vie après la mort, mais au prix de devoir revivre et recommencer chaque fois qu'il meurt. Avec cette capacité, Subaru tente de sauver ses amis et résoudre les mystères entourant ce nouveau monde. En parallèle, il se confronte à des dilemmes moraux, des ennemis puissants, et ses propres faiblesses émotionnelles. L'anime est connu pour ses rebondissements dramatiques, son exploration des thèmes de la désespérance et du courage, et sa profondeur psychologique.",
    "One Punch Man suit Saitama, un super-héros ordinaire qui est devenu incroyablement puissant au point de pouvoir vaincre n'importe quel ennemi d'un seul coup de poing. Malgré ses capacités surhumaines, Saitama est en proie à l'ennui et à la frustration, car il ne trouve aucun adversaire capable de le défier. Cherchant à se faire reconnaître et à trouver un véritable défi, il rejoint l'Association des Héros et s'attaque à des monstres et des criminels tout en cachant son incroyable force. L'anime combine action intense, humour satirique et réflexion sur les tropes des récits de super-héros.",
    "Overlord suit Suzuki Satoru, un joueur d’un jeu de réalité virtuelle massivement multijoueur (DMMORPG) qui se retrouve transporté dans le monde du jeu lorsque les serveurs sont fermés. En tant que personnage qu'il contrôlait, le puissant seigneur des ténèbres Momonga, il découvre que le jeu est devenu réalité et que les PNJ ont acquis une conscience. Avec son armée de créatures et de serviteurs loyaux, Momonga décide de conquérir ce nouveau monde et de découvrir ses mystères. Tout en établissant sa domination, il explore les dynamiques de pouvoir, les politiques et les dangers de ce monde fantastique. L’anime est apprécié pour ses éléments de stratégie, sa construction du monde riche et ses personnages complexes.",
    "Tensura suit Satoru Mikami, un employé de bureau qui se réincarne dans un monde fantastique après avoir été tué dans un accident. Il se réveille sous la forme d'un slime avec des pouvoirs spéciaux, dont la capacité d'absorber les compétences et les attributs des autres créatures. En utilisant ses nouvelles capacités, il établit un territoire pacifique et forme des alliances avec diverses créatures fantastiques. Il devient rapidement une figure influente dans ce monde tout en cherchant à améliorer la vie de ses habitants et à explorer les mystères de sa nouvelle existence. L’anime combine action, aventures et construction du monde, tout en mettant l'accent sur la croissance personnelle du protagoniste.",
    "Dororo se déroule au Japon féodal et suit Hyakkimaru, un jeune guerrier dont le père, un seigneur ambitieux, a sacrifié ses organes et parties du corps pour obtenir un pouvoir démoniaque. Hyakkimaru est abandonné à sa naissance, mais survit grâce à des prothèses et des capacités surnaturelles. En quête de récupérer ses membres et ses organes, il affronte des démons et des créatures malveillantes. En chemin, il rencontre Dororo, un jeune voleur sans famille, qui devient son allié. Ensemble, ils explorent des thèmes de rédemption, de vengeance, et de la lutte contre le destin. L’anime est salué pour son ambiance sombre, sa profondeur émotionnelle et son animation de qualité.",

]

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('click', onCardClick);
}
function onCardClick() {
    this.classList.toggle('flip-card');
}
function cardMove () {
    //apparition droite-gauche
    function tf(c) {
        removeCardsClass(c);
        c.classList.contains("translate2000") != true ? c.classList.add("translate2000"): "";
        c.style.opacity = "0";
    }
    //apparition gauche-droite
    function ts(c) {
        removeCardsClass(c);
        c.classList.contains("translate-2000") != true ? c.classList.add("translate-2000") : "";
        c.style.opacity = "0";
    }
    //disparition gauche-droite
    function rtf(c) {
        removeCardsClass(c);
        c.classList.contains("reverse-translate2000") != true ? c.classList.add("reverse-translate2000") : "";
        c.style.opacity = "1";
    }
    //disparition droite-gauche
    function rts(c) {
        removeCardsClass(c);
        c.classList.contains("reverse-translate-2000") != true ? c.classList.add("reverse-translate-2000") : "";
        c.style.opacity = "1";
    }

    //applique le nombre de cartes par lignes par rapport à la largeur de l'écran
    const NUMBER_OF_CARDS_IN_ARROW = Math.floor(window.innerWidth / 330)
    main.style.gridTemplateColumns = `repeat(${NUMBER_OF_CARDS_IN_ARROW}, 1fr)`

    //on met l'animation aux 2 premières lignes
    for (let i = 0; i < NUMBER_OF_CARDS_IN_ARROW * 2; i++) {
        if (cardsAnimationContainer[i] == undefined) continue;
        removeCardsClass(cardsAnimationContainer[i]);
        cardsAnimationContainer[i].classList.add("anim_card")        
    }

    //taille des éléments
    const HEADER_HEIGHT = document.getElementsByTagName("header")[0].offsetHeight
    const CARD_HEIGHT = 450
    const THIRD_OF_CARD_HEIGHT = CARD_HEIGHT / 3
    
    const scroll_top = dom.scrollTop
    const user_position = dom.clientHeight + scroll_top
    const starter = HEADER_HEIGHT + 2 * CARD_HEIGHT //la position de la 3ème ligne dans le dom
    const starter_row = 3 //la première ligne où on met les animations de translate

    for (let i = NUMBER_OF_CARDS_IN_ARROW * 2; i < cardLength; i++) {
        if (cardsAnimationContainer[i] == undefined) continue;
        const card = cardsAnimationContainer[i];
        const CURRENT_ROW = Math.ceil((i+1) / NUMBER_OF_CARDS_IN_ARROW) //pour que l'animation prenne part, on doit être à la 3e ligne

        const CURRENT_ROW_POSITION = starter + THIRD_OF_CARD_HEIGHT + CARD_HEIGHT * (CURRENT_ROW - starter_row) //position de la ligne de la carte dans le dom et à laquelle on veut que l'animation se déclenche

        //delay
        const MIN_TIME = 50
        const ANIMATION_COEF = MIN_TIME * (i % NUMBER_OF_CARDS_IN_ARROW)
        const MAX_TIME = MIN_TIME * NUMBER_OF_CARDS_IN_ARROW

        //ligne pair
        if (CURRENT_ROW % 2 == 0) {
            //on met le délai par rapport à la position de la carte dans la ligne (1ère carte se trouve tout à gauche)
            typeof card.style.animationDelay != undefined ? card.style.animationDelay = MIN_TIME + ANIMATION_COEF + "ms" : "";
            //on anime la carte
            user_position - THIRD_OF_CARD_HEIGHT > CURRENT_ROW_POSITION ? tf(card) : rtf(card);
            continue;
        }
        //on met le délai par rapport à la position de la carte dans la ligne (1ère carte se trouve tout à droite)
        typeof card.style.animationDelay != undefined ? card.style.animationDelay = MAX_TIME - ANIMATION_COEF + "ms" : "";
        //on anime la carte
        user_position - THIRD_OF_CARD_HEIGHT > CURRENT_ROW_POSITION ? ts(card) : rts(card);
    }
}

function responsiveLoading() {
    //mobile
    //on retire l'animation des cartes pour en mettre une autre plus simple
    if (media1007) {
        window.removeEventListener("scroll", cardMove)
        window.removeEventListener("resize", cardMove)
        cardsAnimationContainer.forEach(c => {
            removeCardsClass(c)
            c.classList.add("anim_card")
        })
    }

    //ordinateur
    //on met l'animation des cartes
    if (!media1007.matches) {
        cardMove();
        window.removeEventListener("scroll", cardMove);
        window.addEventListener("scroll", cardMove);
    }
}
       
window.onload = function() {
    //lorsque l'on vient de la page "tier list" et que l'on a cliqué sur le lien d'un anime, on redirige l'utilisateur vers celui-ci
    let params = new URLSearchParams(document.location.search); //on récupère les paramètres de l'url
    let animeName = params.get("anime"); //on récupère le nom de l'anime
    moveToAnimeCard(animeName)

    //animation des cartes
    responsiveLoading()
    window.addEventListener("resize", responsiveLoading)

    
    //on retire l'écran l'écran de chargement
    document.querySelector(".loading-screen").style.transform = "scale(0)";
    document.body.removeChild(document.querySelector(".loading-screen"));

    //animation du menu et de ses éléments
    document.querySelector(".menu").classList.add("anim_menu");

    for (let i = 0, t = 1; i<4; i++) {
        let li = document.querySelectorAll(".menu > nav > ul > li")[i];
        li.classList.add("anim-menu-elt");
        li.style.animationDelay = t + "s";
        t += 0.25;
    }

    //animation des lettres du menu
    document.querySelectorAll("a > span").forEach(span => {
        span.classList.add("spinning-letters");
    });

    document.querySelector("div.form").classList.add("translate2000");

}

function synopsisSize(elt) {
    //adapte la taille des lettres lorsque ça déborde
    string4 = elt.children[1].children[0].children[1].children[4];
    if (string4.offsetHeight >= 300) string4.parentElement.classList.add("sl-ft-1");
    else if (string4.offsetHeight >= 240) string4.parentElement.classList.add("sl-ft-11");
}
//on va attribuer la classe "white" aux éléments des descriptions pour que ça détruise un peu moins les yeux 
function addClassFullscreenText (n) {
        const span = '<span class="white">';
        const text = fullscreen[n].children[1].children[0].children[1];

        const string1 = text.children[1];
        const episodesNb = string1.textContent.substring(0,9);
        const episodesContent = string1.textContent.substring(9);
        string1.innerHTML = `${episodesNb} ${span} ${episodesContent}</span>`;

        const string2 = text.children[2];
        const genres = string2.textContent.substring(0,7);
        const genresContent = string2.textContent.substring(7);
        string2.innerHTML = `${genres} ${span} ${genresContent}</span>`;

        const string3 = text.children[3];
        const themes = string3.textContent.substring(0,7);
        const themesContent = string3.textContent.substring(7);
        string3.innerHTML = `${themes} ${span} ${themesContent}</span>`;

        const string4 = text.children[4];
        const synopsis = "Synopsis:";
        const synopsisContent = string4.textContent;
        string4.innerHTML = `${synopsis} ${span} ${synopsisContent}</span>`;

        const string5 = text.children[5];
        string5.classList.add("tier");
        const tier = string5.innerText.substring(6, 7);
        switch (tier) {
            case "S":
                string5.style.color = "rgb(230, 59, 139)";
                break;
            case "A":
                string5.style.color = "rgb(252, 196, 76)";
                break;
            case "B":
                string5.style.color = "rgb(87, 117, 250)";
                break;
            case "C":
                string5.style.color = "#6de81c";
                break;
            default: 
                string5.style.color = "#f5f771";
        }
        //lorsque l'on passe le curseur sur le synopsys on le voit en entier si jamais il débordait
        const sysnopsysApparition = () => text.style.zIndex = 10000;
        string4.removeEventListener("mouseenter", sysnopsysApparition);
        string4.addEventListener("mouseenter", sysnopsysApparition);
        //à l'inverse lorsque le curseur n'y est plus, le surplus disparaît
        const sysnopsysDisparition = () => text.style.zIndex = 1;
        string4.removeEventListener("mouseleave", sysnopsysDisparition);
        string4.addEventListener("mouseleave", sysnopsysDisparition);

        //adapte la taille de l'image qui contient le bouton vers le trailer
        trailerCardize(fullscreen[n].children[1].children[0].children[0]); 
        window.addEventListener("resize", () => trailerCardize(fullscreen[n].children[1].children[0].children[0]));
}
boucle(addClassFullscreenText);

//adapte la taille de l'image avant d'avoir le trailer
function trailerCardize(elt) {
    let eltWidth = 0.22850270595309682 * dom.offsetWidth;
    if (elt != null) {
        elt.style.width = eltWidth + "px";
    } 
}



//adapte la taille des cartes par rappport à l'écran lorsque qu'on est en mode tablette out smartphone
function cardSizeResponsiveMobile() {
    if (media1007.matches) {
        let width = 0.3 * dom.offsetWidth;
        let height = 1.5 * width;
        cardsAnimationContainer.forEach(c => {
            c.style.width = width + "px";
            c.style.height = height + "px";
        });
        return;
    }
    cardsAnimationContainer.forEach(c => {
        c.style.width = 300 + "px";
        c.style.height = 450 + "px";
    });
    return;
}
cardSizeResponsiveMobile();
window.addEventListener("resize", cardSizeResponsiveMobile);

/* toutes les fonctionnalités si l'utilisateur est connecté */
if (typeof kitsune != typeof undefined) {

    //les fonctions qui permettent de faire apparaître ou disparaître les animes dans la fav-list
    function favCardApparition(elt) {
        elt.classList.add('fav-card-animation-apparition')
        elt.classList.remove('fav-card-animation-disparition')
        elt.style.display = "block"
    }
    function favCardDisparition(elt) {
        elt.classList.add('fav-card-animation-disparition')
        elt.classList.remove('fav-card-animation-apparition')
        setTimeout(() => elt.style.display = "none", 300);
    }

    function addFavCard(emptyStarContainer, filledStarContainer, newAnimeCard, animeName, i) {
        //remet l'étoile colorée et ajoute la carte à la fav liste
        emptyStarContainer.style.opacity = 0
        filledStarContainer.style.opacity = 1
        favCardApparition(newAnimeCard)
        //crée un cookie pour enregistrer le choix
        createCookie(`anime-fav-${i}`, animeName, 10)
    }
    function removeFavCard(emptyStarContainer, filledStarContainer, newAnimeCard, i) {
        //met l'étoile vide et retire la carte de la fav-list
        emptyStarContainer.style.opacity = 1
        filledStarContainer.style.opacity = ""
        favCardDisparition(newAnimeCard)
        //supprime le cookie affilié
        removeCookie(`anime-fav-${i}`)
    }

/* création de l'étoile (signifiant que l'utillisateur aime bien l'anime) que l'on mettra en haut à droite des cartes 
    il y aura 2 étoiles:
    -Une étoile vide, elle représente le mode par défaut de la carte (non choisie par l'utilisateur)
    -Une étoile colorée, l'utilisateur aime bien cet anime
*/

    //le conteneur de la fav-list
    const newAnimeContainer = document.getElementById('fav-list-ctr-animes');
    const favListContainer = document.getElementById('fav-list-ctr')
    const favListContainerCross = document.getElementById("fav-list-ctr-cross")
    favListContainerCross.addEventListener('click', () => {
        favListContainer.classList.add("reverse-translate2000")
        favListContainer.classList.remove("translate2000")
    });

/* création des étoiles et de tout ce qui concerne la fav-list*/

    for(let i = 0; i < cardLength; i++) {
        //création de l'étoile "vide"
        const emptyStarContainer = document.createElement('div');
        emptyStarContainer.classList.add('empty-star-container');

        const emptyStar = document.createElement('img');
        emptyStar.src = '../image/empty-star.png';
        emptyStarContainer.appendChild(emptyStar)

        //création de l'étoile "remplie"
        const filledStarContainer = document.createElement('div');
        filledStarContainer.classList.add('filled-star-container');

        const filledStar = document.createElement('img');
        filledStar.src = '../image/filled-star.png';
        filledStarContainer.appendChild(filledStar);

        //on ajoute ces éléments dans les cartes
        cards[i].appendChild(emptyStarContainer)
        cards[i].appendChild(filledStarContainer)

        /*place une miniature de la carte correspondante dans la liste "j'aime" */

        const animeName = filledStarContainer.parentElement.id

        // crée une nouvelle carte avec le même cover que l'originelle
        const newAnimeCard = document.createElement('div');
        newAnimeCard.style.background = `url(../image/cover/${animeName}.jpg)`
        newAnimeCard.classList.add("new-anime-card")
        newAnimeCard.classList.add('fav-card-animation-apparition')

        //met toutes les nouvelles cartes dans la fav-list
        newAnimeContainer.appendChild(newAnimeCard);

        //lorsque l'on clique sur la nouvelle carte, elle nous redirige directement vers la carte originelle
        newAnimeCard.addEventListener("click", () => moveToAnimeCard(animeName));

        //petit problème, on a mit un hover qui fait que lorsque l'on clique sur l'étoile, on clique pas sur celle qui est vide mais celle qui est remplie
        //on va donc créer un boolean de valeur vrai pour dire que le hover est en marche
        let isHoverFilledStar = true
        let isStarFilled = false

        function addOrRemoveCardToFavList(e) {
            e.stopPropagation();
            //met l'opacité de l'étoile colorée à 1 (ce bloc ne s'exécute qu'une fois) et ajoute la carte correspondante à l'anime cliqué dans la fav liste
            if (isHoverFilledStar) {
                addFavCard(emptyStarContainer, filledStarContainer, newAnimeCard, animeName, i)
                return isHoverFilledStar = false, isStarFilled = true
            }
            //remet l'étoile non colorée et retire la carte de la fav liste
            if (isStarFilled) {
                removeFavCard(emptyStarContainer, filledStarContainer, newAnimeCard, i)
                return isStarFilled = false        
            }
            addFavCard(emptyStarContainer, filledStarContainer, newAnimeCard, animeName, i);
            return isStarFilled = true
        }
        filledStarContainer.addEventListener('click', addOrRemoveCardToFavList);

        //si des cookies sont définis alors on met les animes correspondant dans la fav-list
        // const cookieValue = readCookie(`anime-fav-${i}`);
        // if (cookieValue != null) document.getElementById(cookieValue).children[2].click();
    }
}

