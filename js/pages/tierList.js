$(window).on("load",() => {
    //remove the loading screen
    $("#loading").css("transform", "scale(0)");
    //make emerge the header
    $("header").addClass("header-emergence");
    
    /*jquery variables*/
    const $letters = $("#letters");
    const $mentions = $("#mentions");
    const $letterC = $("#letters-C");
    const $honorables = $("#honorables");
    const $arrowLeft = $(".arrowLeft");
    const $arrowRight = $(".arrowRight");
    const $tierS = $(".S-tier");
    const $tierA = $(".A-tier");
    const $tierB = $(".B-tier");
    const $tierC = $(".C-tier");
    const $tierCAnimes = $("#tier-C--animes");
    /*javascript variables*/
    let animesTitle = ["demon_slayer", "fate", "go", "haikyuu", "k", "kaisen", "mha", "opm", "tensura", "tpn", "grand_blue", "hxh",
    "kabaneri", "kill", "konosuba", "kuroko", "mob", "nanatsu", "nogamenolife", "overlord", "parasyte", "prison", "rettousei", "rezero",
    "saiki", "stone", "vinland", "akame", "april", "assassination_classroom", "beelzebub", "black_butler", "bungou", "code_geass", "darling", "death_note",
    "death_parade", "elite", "erased", "food", "fullmetal", "free", "akudama", "aldnoah", "amagi", "angels_death", "brynhildr", "cautious", "destructive_god",
    "dororo", "fire_force", "gansgta", "gate", "genome", "goblin_slayer", "horimya", "id_invaded", "iwgp", "kaguya", "kakegurui", "kekkai", "knights_magic",
    "millionaire", "moriarty", "mushoku", "noragami", "sakamoto", "seraph", "shield", "tkg", "youjo_senki", "yuri", "zestiria"];

    const dom = document.documentElement;
    const arrowLeft = document.querySelectorAll(".arrowLeft");
    const arrowRight = document.querySelectorAll(".arrowRight");
    const tierS = document.querySelectorAll(".S-tier");
    const tierA = document.querySelectorAll(".A-tier");
    const tierB = document.querySelectorAll(".B-tier");
    
    //on clique sur la flèche gauche et les cartes défileront vers la gauche
    

    function arrowClicker (isLeft, nb) {
        //the container of the animes
        const animesContainer = document.querySelectorAll(`.animes`)[nb];
        const animesContainerWidth = animesContainer.offsetWidth;
        let animesContainerTotalWidth = 0;
        //child of the animes container
        const animes = animesContainer.children;
        const length = animes.length;

        //increment the animesContainerWidth
        for (let i = 4; i<length; i++) animesContainerTotalWidth += animes[i].offsetWidth + 20;

        //right position of the last child
        const $position = !isLeft ? $(`.animes:eq(${nb}) div:last`).position().left : $(`.animes:eq(${nb}) div:first`).position().left;
        
        //la largeur de chacun des carrés
        squareWidth = document.querySelector('.S-tier').offsetWidth;
        !isLeft ?
            $position >= animesContainerWidth ? translateSize[nb] -= squareWidth : translateSize[nb] = -((animesContainerTotalWidth - animesContainerWidth) / 2) - 20
            :
            $position < -squareWidth ? translateSize[nb] += squareWidth : translateSize[nb] = (animesContainerTotalWidth - animesContainerWidth) / 2;

        for (let i = 4; i < length; i++) animes[i].style.transform = `translate3d(${translateSize[nb]}px, 0, 0)`;
    }

    let translateSize = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
        arrowLeft[i].addEventListener("click", () => { arrowClicker( true, i); });
        arrowRight[i].addEventListener("click", () => { arrowClicker( false, i); });
    }

    animesTitle.forEach(elt => {
        //container of the comments
        const cc = document.createElement("div");
        cc.classList.add("comments-container");
        //child of this container
        const div = document.createElement("div");
        div.classList.add(`card-${elt}`);

        cc.appendChild(div)
        document.querySelector("#tier-list").insertAdjacentElement("beforebegin", cc);

        const $cc = $(`.card-${elt}`).parent();
        const divComments = document.querySelector(`.card-${elt}`);
        const $anime = $(`.animes .${elt}`);
        const $animeImg = $(`.animes .${elt} img`);

        $anime.on("mouseenter", () => {
            $animeImg.addClass("fretille");
            $animeImg.removeClass("jump");
            $animeImg.on("mouseleave", () => {
                $animeImg.removeClass("fretille");
                $animeImg.addClass("jump");
            })
        })

        $anime.on("click", () => {
            $cc.css("display", "grid");
            $animeImg.removeClass("fretille");
            $animeImg.removeClass("jump");
            $animeImg.addClass("rotateY180");
            $anime.off("mouseenter");
            $anime.off("mouseleave");
        })

        $cc.on("click", (e) => {
            if (e.target != divComments) $cc.css("display", "none");
        })

             VanillaTilt.init(divComments, {
                 max: 25,
                 speed: 400
         });


    });

    const tierC = document.querySelector("#tier-C")
    const letters = document.querySelector("#tier-C #letters");
    const animes = document.querySelector("#tier-C--animes");
    function responsiveSectionC() {
        tierC.style.height = 0.5772699939867709 * dom.offsetWidth + "px";
        letters.style.height = 0.10523150932050511 * dom.offsetWidth +"px";
        animes.style.height = 0.3668069753457607 * dom.offsetWidth +"px";
    }
    responsiveSectionC();
    window.addEventListener('resize', responsiveSectionC);

    //fait appratître les lettres de la section C
    let scrollValue = dom.offsetHeight - dom.clientHeight - animes.offsetHeight - letters.offsetHeight;
    if (dom.scrollTop >= scrollValue) $letters.addClass("animation-C-letters");
    //fait apparaître les animes de la section C
    if (dom.scrollTop >= scrollValue) $tierCAnimes.addClass("C-card-animation");
    $(window).on('scroll', () => {
        if (dom.scrollTop >= scrollValue) $letters.addClass("animation-C-letters");
        if (dom.scrollTop >= scrollValue) $tierCAnimes.addClass("C-card-animation");
    });

             //crée un lien vers la description de l'anime dans l'index.php
             animesTitle.forEach(word => {
               const lien = document.createElement("a");
               lien.href = `../html/index.php?anime=${word}`;
               lien.target = "_blank";
               lien.textContent = lien.href;
               lien.classList.add("lien");
               document.querySelector(`.card-${word}`).appendChild(lien);
           });

           ["snk", "angel", "guren", "sao"].forEach(word => {
               document.querySelector(`.${word}`).addEventListener("click", () => {
                   window.open(`../html/index.php#${word}`, " _blank");
               });
           });

        //comme le background de la partie tier C ne semble pas se lancer automatiquement, on va le faire nous mêmes
        document.querySelectorAll('video').forEach(v => {
            v.addEventListener('loadedmetadata', () => {
                v.play();
                })
            }) 
   
});  
