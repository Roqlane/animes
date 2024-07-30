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
        this.forwardAnimation = null
        this.backwardAnimation = null
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
        const ARROW_INDEX =  Math.floor(this.index / NUMBER_OF_CARDS_IN_ROW)
        ARROW_INDEX % 2 == 0 ? this.cardContainer.setAttribute("even", "") : this.cardContainer.setAttribute("odd", "")
    }

    SetAnimationAndDelay() {
        const MIN_TIME = 50
        const MAX_TIME = MIN_TIME * NUMBER_OF_CARDS_IN_ROW
        const ANIMATION_COEF = MIN_TIME * (this.index % NUMBER_OF_CARDS_IN_ROW)
        if (this.cardContainer.hasAttribute("even")) {
            this.cardContainer.style.animationDelay = MIN_TIME + ANIMATION_COEF + "ms"
            this.forwardAnimation = "translate2000"
            this.backwardAnimation = "reverse-translate2000"
        }
        else {
            this.cardContainer.style.animationDelay = MAX_TIME - ANIMATION_COEF + "ms"
            this.forwardAnimation = "translate-2000"
            this.backwardAnimation = "reverse-translate-2000"
        }
        this.Disappear()
    }

    Appear() {
        if (!this.cardContainer.classList.contains(this.forwardAnimation)) this.cardContainer.classList.add(this.forwardAnimation)
        if (this.cardContainer.classList.contains(this.backwardAnimation)) this.cardContainer.classList.remove(this.backwardAnimation)
        this.cardContainer.style.opacity = "0"
    }

    Disappear() {
        if (this.cardContainer.classList.contains(this.forwardAnimation)) this.cardContainer.classList.remove(this.forwardAnimation)
        if (!this.cardContainer.classList.contains(this.backwardAnimation)) this.cardContainer.classList.add(this.backwardAnimation)
        this.cardContainer.style.opacity = "1"
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
    card.SetAnimationAndDelay()

    fragment.appendChild(card.GetCard())
}

//add fragment
container.appendChild(fragment)

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

//add card animation on scroll
window.addEventListener('scroll', cardAnimation)

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

function cardAnimation () {
    
    const scroll_top = document.documentElement.scrollTop
    const user_position = document.documentElement.clientHeight + scroll_top    
    
    const CURRENT_ROW = Math.round((user_position + HEADER_HEIGHT - 2*THIRD_OF_CARD_HEIGHT) / CARD_HEIGHT)
    

    let i = 0
    while (i < ANIMES_CARDS.length && i < CURRENT_ROW * NUMBER_OF_CARDS_IN_ROW) {
        
        ANIMES_CARDS[i].Appear()
        i++
    }
    while (i < ANIMES_CARDS.length) {
        ANIMES_CARDS[i].Disappear()
        i++
    }


}
