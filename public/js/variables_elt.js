


function cardsRemoveAnimation () {
  cardsAnimationContainer.forEach(cardsRemoveClassAnimation);
  window.removeEventListener("scroll", cardAnimation);
};
function cardsRemoveClassAnimation(c) {
  c.style.animationDelay = "0ms";
  c.classList.remove("translate2000");
  c.classList.remove("translate-2000");
  c.classList.remove("reverse-translate2000");
  c.classList.remove("reverse-translate-2000");
}

function cardsApparition (c) {
  main.appendChild(c);
  c.classList.add("anim_card");
}
function cardsDisparition (c) {
  if (c.parentNode != null) {
    main.removeChild(c);
  }
}

function removeCardsClass (c) {
  c.classList.remove("reverse-translate2000");
  c.classList.remove("reverse-translate-2000")
  c.classList.remove("translate2000");
  c.classList.remove("translate-2000");
  c.classList.remove("anim_card");
}

function boucle(fn) {
  for (let i = 0; i < cardLength; i++) {
      fn(i);
  }
}

function moveToAnimeCard(animeName) {
  //le paramètre est vide
  if (animeName === null || typeof animeName === undefined) return

  let animeCard = document.getElementById(`${animeName}`); //la carte de l'anime

  //la carte n'existe pas
  if (animeCard === null) return

  //on cherche la position de la carte
  let animePosition = Math.abs(document.body.getBoundingClientRect().top - animeCard.getBoundingClientRect().top)
  
  /*-on veut reconnaître l'anime qu'on a cliqué donc on va lui rajouter une bordure rouge
      .on retire la bordure rouge à l'anime qui la possédait
      .on applique la bordure à l'anime que l'on a cliqué
  */
 focusedCards = document.getElementsByClassName('focus-card')
 focusedCards.forEach((c) => c.classList.remove('focus-card'))
 
 animeCard.classList.add("focus-card")

  //et on se déplace jusqu'à la location
  window.scrollTo({
      top: animePosition,
      behavior: 'smooth'
  });
}
