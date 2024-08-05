import { createCookie, readCookie } from "./module/cookie_handler.js";

(function () {
  "use strict";
  //no scrollbar for devices other than computer
  const DOM_SCROLLBAR = document.querySelector(".clickScrollbar");
  if (DOM_SCROLLBAR.style.display == "none") return;

    /* dom elements */
    const DOM_CONTAINER = document.documentElement;
    const DOM_ELEVATOR = document.querySelector(".scrollbar");
    const DOM_LOGIN_ICON = document.getElementById('profile');
    const DOM_ARROW_UP = document.getElementById("arrowUp")
    const DOM_THEME_MODE = document.getElementById("theme-mode");
    const DOM_PARTICLES_CONTAINER = document.querySelector(".glowing");

    /* sizes */
    let boxSize = DOM_CONTAINER.clientHeight;
    let scrollSize = DOM_CONTAINER.scrollHeight; 
    let elevatorSize = 100 * (boxSize / scrollSize);
    DOM_ELEVATOR.style.height = elevatorSize  + "%";
    DOM_ELEVATOR.style.transform = `translate3d(0, ${boxSize * (document.scrollingElement?.scrollTop / scrollSize)}px, 0)`;

    /* listeners */
    window.addEventListener("resize", scrollbarHeight);
    window.addEventListener("scroll", scrollbarHeight);
    //redirect to the login form when the login icon is clicked
    if (DOM_LOGIN_ICON != undefined) DOM_LOGIN_ICON.addEventListener('click', () => document.location = '../html/form.php');
    DOM_THEME_MODE.addEventListener("click", onThemeModeClick);
    DOM_ARROW_UP.addEventListener("click", onArrowUpClick);
    window.addEventListener("scroll", elevatorScroll);
    DOM_SCROLLBAR.addEventListener("click", onScrollbarClick);
    DOM_ELEVATOR.addEventListener("mousedown",onElevatorMousedown, false);

    /* mutation observer */
    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    var observer = new MutationObserver(scrollbarHeight);

    observer.observe(container, {
      subtree: true,
      childList: true,
    });

    /* executed code */
    
    //set the dark mode as default
    if (readCookie('mode') == '' || readCookie('mode') == 'dark') darkMode();

      
    /* functions for listeners */

    function scrollbarHeight () {
      boxSize = DOM_CONTAINER.clientHeight;
      scrollSize = DOM_CONTAINER.scrollHeight;
      elevatorSize = 100 * (boxSize / scrollSize);
      DOM_ELEVATOR.style.height = elevatorSize  + "%";
      DOM_ELEVATOR.style.transform = `translate3d(0, ${boxSize * (document.scrollingElement.scrollTop / scrollSize)}px, 0)`;
    }

    //switch either light or dark mode
    function onThemeModeClick(e) {
      e.preventDefault();
      e.stopPropagation();
      if (readCookie("mode") == "light") {
        darkMode();
        
      }
      else {
        lightMode();

      }

    }

    function darkMode() {
        createCookie("mode", 'dark', 1)
        DOM_THEME_MODE.classList.add("dark-theme");
        
        //change the background
        DOM_PARTICLES_CONTAINER.style.background = "rgb(10, 10, 10)";
        
        //change the cards background 
        cards.forEach((c) => {
          c.classList.add("dark-mode");
        });
        
        //change the fav-list components opacity
        document.getElementById('fav-list-ctr')?.classList.add("dark-mode")
        document.querySelectorAll('.new-anime-card')?.forEach(c => c.classList.add('dark-mode'))
        
        
        themeGenreContainerDarkMode();  
    }

    function lightMode() {
      createCookie("mode", 'light', 1);
        DOM_THEME_MODE.classList.remove("dark-theme");
        //change the background
        DOM_PARTICLES_CONTAINER.style.background = "rgb(200, 200, 200)";
  
        //change the cards background
        cards.forEach((c) => {
          c.classList.remove("dark-mode");
        });         
  
        //change the fav-list components opacity
        document.getElementById('fav-list-ctr')?.classList.remove("dark-mode")
        document.querySelectorAll('.new-anime-card')?.forEach(c => c.classList.remove('dark-mode'))
  
        themeGenreContainerLightMode();
    }
    
    //come back to the top of the page
    function onArrowUpClick (e) {
      e.preventDefault();
      e.stopPropagation();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  //adpate la position de l'elevator par rapport au scroll de la fenêtre
  function elevatorScroll () {
      DOM_ELEVATOR.style.transform = `translate3d(0, ${boxSize * (document.scrollingElement?.scrollTop / scrollSize)}px, 0)`;
      if (DOM_CONTAINER.scrollTop > 150) {
        DOM_ARROW_UP.style.opacity = 1;
        DOM_ARROW_UP.style.transform = "scale(1)";
      } else {
        DOM_ARROW_UP.style.opacity = 0;
        DOM_ARROW_UP.style.transform = "scale(0)";
      }
    }


  //fait scroller la page par rapport à l'endroit où l'on clique sur la scrollbar
  function onScrollbarClick (e) {
      let scroll = scrollSize * (e.offsetY / boxSize);
      window.scrollTo({
          top: scroll,
          behavior: "smooth"
      })
  }
  
  //gère le scroll de la fenêtre en fonction de l'elevator losque l'on le bouge
  function onElevatorMousedown (e) {
    e.preventDefault();
    e.stopPropagation();
    window.addEventListener("mousemove", onElevatorMousemove, false);
    window.addEventListener("mouseup", onElevatorMouseup, false);

  };
    function onElevatorMousemove (e) {
    e.preventDefault();
    e.stopPropagation();
    DOM_CONTAINER.scrollTop = e.clientY * (scrollSize / boxSize);
  };
  function onElevatorMouseup (e) {
    e.preventDefault();
    e.stopPropagation();
    window.removeEventListener("mousemove", onElevatorMousemove);
    window.removeEventListener("mouseup", onElevatorMouseup);
  };
})();
