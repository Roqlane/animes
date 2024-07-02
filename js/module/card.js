class Card {
    constructor(name, title, episode, genres, studio, synopsys) {
        this.name = name;
        this.title = title;
        this.episode = episode;
        this.genres = genres;
        this.studio = studio;
        this.synopsys = synopsys;
    }
    
    Create() {
        const mainContainer = document.querySelector('main.container');
        /** card */
        //create the div that makes the animation
        const animateCardDiv = document.createElement('div');
        animateCardDiv.className = "card--animate anim_card";

        // Create the main card div
        const cardDiv = document.createElement('div');
        cardDiv.className = `card card--${this.name}`;
        cardDiv.id = this.name;

        // Create the card_forward div
        const cardForwardDiv = document.createElement('div');
        cardForwardDiv.className = 'card_forward';

        // Create the strong element for the title
        const titleElement = document.createElement('strong');
        titleElement.textContent = this.title;

        // Create the paragraph element for episodes
        const episodesElement = document.createElement('p');
        episodesElement.textContent = `Episodes: ${this.episode}`;

        // Create the paragraph element for genres
        const genresElement = document.createElement('p');
        genresElement.textContent = `Genres: ${this.genres.join(" - ")}`;

        // Create the paragraph element for studio
        const studioElement = document.createElement('p');
        studioElement.textContent = `Studio: ${this.studio}`;

        // Append the created elements accordingly
        cardForwardDiv.appendChild(titleElement);
        cardForwardDiv.appendChild(episodesElement);
        cardForwardDiv.appendChild(genresElement);
        cardForwardDiv.appendChild(studioElement);

        cardDiv.appendChild(cardForwardDiv);
        animateCardDiv.appendChild(cardDiv)

        mainContainer.appendChild(animateCardDiv);

        
        /** fullscreen card */
        // Create a parent div for the fullscreen elements
        const fullscreenDiv = document.createElement('div');
        fullscreenDiv.className = 'fullscreen';

        // Create the fullscreen-back div
        const fullscreenBackDiv = document.createElement('div');
        fullscreenBackDiv.className = 'fullscreen-back';

        // Create the fullscreen_description div
        const fullscreenDescriptionDiv = document.createElement('div');
        fullscreenDescriptionDiv.className = 'fullscreen_description';

        // Create the fullscreen_description_wrap div
        const fullscreenDescriptionWrapDiv = document.createElement('div');
        fullscreenDescriptionWrapDiv.className = 'fullscreen_description_wrap';

        // Create the trailer_card div
        const trailerCardDiv = document.createElement('div');
        trailerCardDiv.className = 'trailer_card';

        // Create the img element for the trailer card
        const trailerImg = document.createElement('img');
        trailerImg.src = `../image/art/${this.name}_trailer.jpg`;
        trailerImg.alt = '';

        // Append the img to the trailer_card div
        trailerCardDiv.appendChild(trailerImg);

        // Create the play_button div
        const playButtonDiv = document.createElement('div');
        playButtonDiv.className = 'play_button';
        
        // Create the img element for the play button
        const playButtonImg = document.createElement('img');
        playButtonImg.src = '../image/play_button.jpg';
        
        // Append the img to the play_button div
        playButtonDiv.appendChild(playButtonImg);
        
        // Append the play_button div to the trailer_card div
        trailerCardDiv.appendChild(playButtonDiv);
        
        // Create the fullscreen_text div
        const fullscreenTextDiv = document.createElement('div');
        fullscreenTextDiv.className = `fullscreen_text fullscreen--${this.name}`;
        
        // Create the paragraph elements for synopsys
        const SynopsysElement = document.createElement('p');
        SynopsysElement.textContent = `Synopsys: ${this.synopsys}`;
        
        // Append the created elements to the fullscreen_text div
        fullscreenTextDiv.appendChild(titleElement.cloneNode(true));
        fullscreenTextDiv.appendChild(episodesElement.cloneNode(true));
        fullscreenTextDiv.appendChild(genresElement.cloneNode(true));
        fullscreenTextDiv.appendChild(studioElement.cloneNode(true));
        fullscreenTextDiv.appendChild(SynopsysElement);
        
        // Append the trailer_card and fullscreen_text divs to the fullscreen_description_wrap div
        fullscreenDescriptionWrapDiv.appendChild(trailerCardDiv);
        fullscreenDescriptionWrapDiv.appendChild(fullscreenTextDiv);
        
        // Append the fullscreen_description_wrap div to the fullscreen_description div
        fullscreenDescriptionDiv.appendChild(fullscreenDescriptionWrapDiv);
        
        // Append the fullscreen-back div to the fullscreen div
        fullscreenDiv.appendChild(fullscreenBackDiv);
        
        // Append the fullscreen_description div to the fullscreen div
        fullscreenDiv.appendChild(fullscreenDescriptionDiv);
        
        // Insert the fullscreen div next to the main.container element
        mainContainer.parentNode.insertBefore(fullscreenDiv, mainContainer.nextSibling);
    }

    DisplayFullscreenCard() {

    }

    HideFullscreenCard() {

    }

    PlayVideo() {

    }
}

/*
const container = document.getElementById('container');
        const fragment = document.createDocumentFragment();

        // Create and append multiple elements to the fragment
        for (let i = 0; i < 100; i++) {
            const div = document.createElement('div');
            div.className = 'item';
            div.textContent = `Item ${i + 1}`;
            fragment.appendChild(div);
        }

        // Append the fragment to the container
        container.appendChild(fragment);

        // Event delegation: add a single event listener to the container
        container.addEventListener('click', function(event) {
            if (event.target.classList.contains('item')) {
                alert(event.target.textContent);
            }
        });
        */