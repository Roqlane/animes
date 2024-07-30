class Card {
    constructor(name, title, genres, studio, episodes, synopsis) {
        this.name = name
        this.title = title
        this.genres = genres
        this.studio = studio
        this.episodes = episodes
        this.synopsis = synopsis
        this.cardContainer = null
        this.index = null
    }

    GetCard() {
        if (this.cardContainer != null) return this.cardContainer
    }

    GetIndex() {
        if (this.index != null) return this.index
    }

    SetIndex(value) {
        this.index = value
    }

    CreateCard() {
        //create card structure and add the appropriate classes
        this.cardContainer = document.createElement('div')
        this.cardContainer.classList.add('card-container')
    
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card')
    
        const cardFront = document.createElement('div')
        cardFront.classList.add('card-front')
        cardFront.classList.add(`card--${this.name}`)
        cardFront.id = this.name
    
        const cardForward = document.createElement('div')
        cardForward.classList.add('card_forward')
    
        const animeTitle = document.createElement('h4')
        animeTitle.textContent = this.title
    
        const cardForwardContent = document.createElement('div')
        cardForwardContent.classList.add('card_forward_content')
    
        const episodesText = document.createElement('p')
        episodesText.textContent = `Episodes: ${this.episodes}`
    
        const genresText = document.createElement('p')
        genresText.textContent = `Genres: ${this.genres}`
    
        const studioText = document.createElement('p')
        studioText.textContent = `Studio: ${this.studio}`
    
        const cardBack = document.createElement('div')
        cardBack.classList.add('card-back')
        cardBack.classList.add('card-back--' + this.name)
    
        const synopsisText = document.createElement('p')
        synopsisText.classList.add('white')
        synopsisText.textContent = this.synopsis
    
        cardBack.appendChild(synopsisText)
        
        cardForwardContent.appendChild(episodesText)
        cardForwardContent.appendChild(genresText)
        cardForwardContent.appendChild(studioText)
    
        cardForward.appendChild(animeTitle)
        cardForward.appendChild(cardForwardContent)
    
        cardFront.appendChild(cardForward)
    
        cardDiv.appendChild(cardFront)
        cardDiv.appendChild(cardBack)
    
        this.cardContainer.appendChild(cardDiv)


    }

    IndexCard() {
        if (window.matchMedia('screen and (max-width: 1007px)').matches || this.index == null) return
        //index the card container wether it is inside an odd or even row for card animation
        const ARROW_INDEX =  Math.floor(this.index / NUMBER_OF_CARDS_IN_ARROW)
        ARROW_INDEX % 2 == 0 ? this.cardContainer.setAttribute("even", "") : this.cardContainer.setAttribute("odd", "")
    }

    PutCardsOutOfTheScreen() {
        if (window.matchMedia('screen and (max-width: 1007px)').matches) return
        if (this.cardContainer.hasAttribute("even")) {
           this.cardContainer.classList.add("translate-2000")     
        }
        else {
            this.cardContainer.classList.add("translate2000")
        }   
    }


}



//create cards 
const fragment = document.createDocumentFragment();


//append anime cards to dom
for (let i = 0; i < SYNOPSIS.length; i++) {
    const card = new Card(NAMES[i], TITLES[i], GENRES[i], STUDIOS[i], EPISODES[i], SYNOPSIS[i])
    card.CreateCard()
    card.SetIndex(i)
    ANIMES_CARDS.push(card)
}

//shuffle anime cards
shuffleCards()

//add card
for (let i = 0; i < ANIMES_CARDS.length; i++) {
    const card = ANIMES_CARDS[i];

    //set card animation
    card.IndexCard()
    card.PutCardsOutOfTheScreen()

    fragment.appendChild(card.GetCard())
}

//add fragment
window.addEventListener("load", () => container.appendChild(fragment))

// Event delegation: add a single event listener to the container
container.addEventListener('click', function(event) {
    //flip the card
    var targetElement = event.target;
    while (!targetElement.classList.contains("card")) {
        targetElement = targetElement.parentElement
    }

    targetElement.classList.toggle('flip-card')

    //allow overflow on back card text
    if (targetElement.classList.contains('flip-card')) {
        targetElement.children[1].children[0].style.overflow = "scroll"
    }
    else {
        targetElement.children[1].children[0].style.overflow = "hidden"
    }
});

function shuffleCards() {
    for (let i = ANIMES_CARDS.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = ANIMES_CARDS[i];
        ANIMES_CARDS[i] = ANIMES_CARDS[j];
        ANIMES_CARDS[i].SetIndex(i)
        ANIMES_CARDS[j] = temp;
        ANIMES_CARDS[j].SetIndex(j)
    }
}

function cardAnimation (animeCards) {
    //apparition droite-gauche
    const tf = (c) => {
        removeCardsClass(c);
        !c.classList.contains("translate2000") ? c.classList.add("translate2000"): "";
        c.style.opacity = "0";
    }
    //apparition gauche-droite
    const ts = (c) => {
        removeCardsClass(c);
        !c.classList.contains("translate-2000") ? c.classList.add("translate-2000") : "";
        c.style.opacity = "0";
    }
    //disparition gauche-droite
    const rtf = (c) => {
        removeCardsClass(c);
        !c.classList.contains("reverse-translate2000") ? c.classList.add("reverse-translate2000") : "";
        c.style.opacity = "1";
    }
    //disparition droite-gauche
    const rts = (c) => {
        removeCardsClass(c);
        !c.classList.contains("reverse-translate-2000") ? c.classList.add("reverse-translate-2000") : "";
        c.style.opacity = "1";
    }


    

    
    const scroll_top = dom.scrollTop
    const user_position = dom.clientHeight + scroll_top
    const starter = HEADER_HEIGHT //la position de la 3ème ligne dans le dom
    const starter_row = 1 //la première ligne où on met les animations de translate

    for (let i = 0; i < animeCards.length; i++) {
        const card = animeCards[i];
        const CURRENT_ROW = Math.ceil((i) / NUMBER_OF_CARDS_IN_ARROW)

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
        }
        //ligne impair
        else {
            //on met le délai par rapport à la position de la carte dans la ligne (1ère carte se trouve tout à droite)
            typeof card.style.animationDelay != undefined ? card.style.animationDelay = MAX_TIME - ANIMATION_COEF + "ms" : "";
            //on anime la carte
            user_position - THIRD_OF_CARD_HEIGHT > CURRENT_ROW_POSITION ? ts(card) : rts(card);
        }
    }
}
