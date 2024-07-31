class Fragment {
    constructor() {
        this.fragment = document.createDocumentFragment()
    }

    CreateDomFragment(container, animesCards) {
        for (let i = 0; i < animesCards.length; i++) {
            const card = animesCards[i];
        
            //set card animation
            card.Update(i)
        
            this.fragment.appendChild(card.GetCard())
        }

        container.appendChild(this.fragment)
    }
    
    RemoveDomFragment(container) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

}
