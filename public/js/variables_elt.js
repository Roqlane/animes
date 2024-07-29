//les medias
let media1500 = window.matchMedia('screen and (min-width: 1240px) and (max-width: 1500px)'); //ne peut plus contenir une rangée de 5
let media1240 = window.matchMedia('screen and (min-width: 1007px) and (max-width: 1240px)'); //ne peut plus contenir une rangée de 4
let media1007 = window.matchMedia('screen and (max-width: 1007px)'); //n'est plus considéré comme un ordinateur

const main = document.getElementsByClassName("container")[0];  
let cards = document.querySelectorAll("div.card");
let cardLength = cards.length;
const animesDescription = document.querySelectorAll(".card_forward");

let animesTitle = ["fullmetal", "grand_blue", "noragami", "mha", "nogamenolife", "tkg", "rezero", "opm", "overlord", "tensura", "dororo",
"sakamoto", "darling", "parasyte", "erased", "april", "youjo_senki", "shield", "prison", "fire_force", "knights_magic", "akame", "k",
"id_invaded", "kakegurui", "vinland", "destructive_god", "rettousei", "kabaneri", "bungou", "kaguya", "seraph", "iwgp", "hxh", "code_geass",
"stone", "assassination_classroom", "demon_slayer", "fate", "death_note", "snk", "haikyuu", "black_butler", "nanatsu", "free", "goblin_slayer",
"kuroko", "millionaire", "elite", "moriarty", "kill", "guren", "food", "konosuba", "death_parade", "mob", "yuri", "aldnoah",
"amagi", "angel", "beelzebub", "brynhildr", "saiki", "sao", "genome", "tpn", "akudama", "mushoku", "angels_death", "kaisen", "gangsta",
"gate", "cautious", "zestiria", "kekkai", "horimya", "go"];

const play_button = document.getElementsByClassName("play_button");

let fullscreen = document.getElementsByClassName("fullscreen");
const fullscreenBack = document.getElementsByClassName("fullscreen-back");
const fullscreenDescription = document.getElementsByClassName("fullscreen_description");

let cardsAnimationContainer = document.querySelectorAll("div.card--animate");

const dom = document.documentElement;



function cardsRemoveAnimation () {
  cardsAnimationContainer.forEach(cardsRemoveClassAnimation);
  window.removeEventListener("scroll", cardMove);
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
