function media(anime, f, isTrailer) {    
    //DOMcontent creation
    const media = document.createElement('div');
    const video = document.createElement('video');
    const source = document.createElement("source");

    const containerLoader = document.createElement("div");
    const svgLoading = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const pathLoading = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const animateTransformLoading = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
    /*
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
    <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
  </path>
</svg>
  */

    const controls = document.createElement("div");

    const barre = document.createElement("div");
    const barreCover = document.createElement("div");
    const barreFill = document.createElement("div");
    const barreOrb = document.createElement("div");

    const buttons = document.createElement("div");

    const buttonsLeft = document.createElement("div");
    const playButton = document.createElement("button");
    const svgPlay = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const playPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

    const volumeArea = document.createElement("div");
    const volumeIcon = document.createElement("button");
    const svgVolume = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const pathVolume = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const volumePanel = document.createElement("div");
    const volumeSlider = document.createElement("div");
    const volumeSliderWhite = document.createElement("div");
    const volumeSliderHandle = document.createElement("div");

    const videoTimer = document.createElement("div");
    const currentTimeElt = document.createElement("span");
    const separator = document.createElement("span");
    const videoDurationElt = document.createElement("span");

    const fullscreenButton = document.createElement("button");
    const fullscreenCircle = document.createElement("div");
    const svgFullscreen = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const g2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const g3 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const g4 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const g1Path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const g2Path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const g3Path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const g4Path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    const miniature = document.createElement("div");
    const miniatureButton = document.createElement("div");
    const svgMiniature = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const miniaturePath = document.createElementNS("http://www.w3.org/2000/svg", "path");

    //define the class css
    media.classList.add("media");
    controls.classList.add("controls");

    containerLoader.classList.add("loader");

    barre.classList.add("barre");
    barreCover.classList.add("barre--cover");
    barreFill.classList.add("barre--fill");
    barreOrb.classList.add("orb");

    buttons.classList.add("buttons");
    buttonsLeft.classList.add("buttons-left");
    playButton.classList.add("play-button");

    volumeArea.classList.add("volume-area");
    volumeIcon.classList.add("volume-icon");
    volumePanel.classList.add("volume-panel");
    volumeSlider.classList.add("volume-slider");
    volumeSliderWhite.classList.add("volume-slider--white");
    volumeSliderHandle.classList.add("volume-slider--handle", "orb");

    videoTimer.classList.add("video-timer");
    currentTimeElt.classList.add("current-time");
    videoDurationElt.classList.add("video-duration");

    fullscreenButton.classList.add("fullscreen-button");
    fullscreenCircle.classList.add("fullscreen-button-circle");
    g1.classList.add("fullscreen-button-corner-1");
    g2.classList.add("fullscreen-button-corner-2");
    g3.classList.add("fullscreen-button-corner-3");
    g4.classList.add("fullscreen-button-corner-4");

    miniature.classList.add('miniature');
    miniatureButton.classList.add('miniature-button');

    //define attributs and some innerHTML
    media.setAttribute('tabindex', -1);

    video.setAttribute("width", "100%");
    video.setAttribute("height", "280");
    if (isTrailer) {
        miniature.style.backgroundImage = `url(../image/art/${anime}_trailer2.jpg)`; //z
        source.setAttribute("src", `../video/trailer/${anime}_trailer.mp4`); //z
    } else {
        miniature.style.backgroundImage = `url(../image/art/${anime}_opening.jpg)`; //z
        source.setAttribute("src", `../video/opening/${anime}_opening.mp4`); //z
    }
    source.setAttribute("type", "video/mp4");

    [svgFullscreen, svgPlay, svgVolume, svgMiniature, svgLoading].forEach((svg) => {
        svg.setAttribute("height", "100%");
        svg.setAttribute("version", "1.1");
        svg.setAttribute("viewBox", "0 0 36 36");
        svg.setAttribute("width", "100%");
    })

    svgLoading.setAttribute("viewBox", "0 0 100 100");
    svgLoading.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    svgLoading.setAttribute("x", "0px");
    svgLoading.setAttribute("y", "0px");
    svgLoading.setAttribute("enable-background", "new 0 0 0 0");
    svgLoading.setAttribute("xml:space", "preserve");
    pathLoading.setAttribute("d", "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50");
    animateTransformLoading.setAttribute("attributeName", "transform");
    animateTransformLoading.setAttribute("type", "rotate");
    animateTransformLoading.setAttribute("dur", "1s");
    animateTransformLoading.setAttribute("from", "0 50 50");
    animateTransformLoading.setAttribute("to", "360 50 50");
    animateTransformLoading.setAttribute("repeatCount", "indefinite");

    playPath.setAttribute("d", "M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z");

    pathVolume.setAttribute("d", "M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z");
    pathVolume.setAttribute("data-state", "volume fort");

    g1Path.setAttribute("d", "m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z");
    g2Path.setAttribute("d", "m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z");
    g3Path.setAttribute("d", "m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z");
    g4Path.setAttribute("d", "M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z");

    miniaturePath.setAttribute("d", "M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z");

    currentTimeElt.innerHTML = "0:00";
    separator.innerHTML = "/";
    videoDurationElt.innerHTML = "0:00";

    //append the created DOMelements to the DOM
    f.appendChild(media); //z

    media.appendChild(miniature);
    miniature.appendChild(miniatureButton);
    miniatureButton.appendChild(svgMiniature);
    svgMiniature.appendChild(miniaturePath);

    media.appendChild(video);
    video.appendChild(source);

    media.appendChild(controls);
    controls.appendChild(barre);
    barre.appendChild(barreCover);
    barreCover.appendChild(barreFill);
    barreFill.appendChild(barreOrb);

    controls.appendChild(buttons);
    buttons.appendChild(buttonsLeft);
    buttonsLeft.appendChild(playButton);
    playButton.appendChild(svgPlay);
    svgPlay.appendChild(playPath);

    buttonsLeft.appendChild(volumeArea);
    volumeArea.appendChild(volumeIcon);
    volumeIcon.appendChild(svgVolume);
    svgVolume.appendChild(pathVolume);
    volumeArea.appendChild(volumePanel);
    volumePanel.appendChild(volumeSlider);
    volumeSlider.appendChild(volumeSliderWhite);
    volumeSliderWhite.appendChild(volumeSliderHandle);

    buttonsLeft.appendChild(videoTimer);
    videoTimer.appendChild(currentTimeElt);
    videoTimer.appendChild(separator);
    videoTimer.appendChild(videoDurationElt);

    buttons.appendChild(fullscreenButton);
    fullscreenButton.appendChild(fullscreenCircle);
    fullscreenButton.appendChild(svgFullscreen);
    svgFullscreen.appendChild(g1);
    g1.appendChild(g1Path);
    svgFullscreen.appendChild(g2);
    g2.appendChild(g2Path);
    svgFullscreen.appendChild(g3);
    g3.appendChild(g3Path);
    svgFullscreen.appendChild(g4);
    g4.appendChild(g4Path);

    media.appendChild(containerLoader);
    containerLoader.appendChild(svgLoading);
    svgLoading.appendChild(pathLoading);
    pathLoading.appendChild(animateTransformLoading);

    if (isTrailer) {
        media.classList.add("trailer");
        media.style.display = "flex";
        //on crée une croix qui permettra de supprimer la video du trailer
         croix = document.createElement("div");
         svgCroix = document.createElementNS("http://www.w3.org/2000/svg", "svg");
         croixPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

        croix.classList.add("croix-ctr");
        svgCroix.classList.add('svg-croix');
        croixPath.classList.add("path-croix");

        svgCroix.setAttribute("height", "100%");
        svgCroix.setAttribute("version", "1.1");
        svgCroix.setAttribute("viewBox", "0 0 36 36");
        svgCroix.setAttribute("width", "100%");

        croixPath.setAttribute("d", "M2 2 L4 0 L30 28 L28 30 M2 28 L28 0 L30 2 L4 30");

        media.appendChild(croix);
        croix.appendChild(svgCroix);
        svgCroix.appendChild(croixPath);

        function hideVideo() {
            f.removeChild(media); //trailer removed
            video.pause(); //trailer paused
        }
        function hideFullscreen () {
            f.parentElement.style.display = "none"; //remove fullscreen
            if (f.children[1] != undefined) f.children[1].children[1].pause(); //opening paused
            if (f.children[2] != undefined) f.children[2].children[1].pause(); //trailer paused
        }
        
        const hideVideoOrFullscreen = () => media1007.matches ? hideFullscreen() : hideVideo();
        function fonctionCroix() {
            croix.removeEventListener("click", hideVideoOrFullscreen);
            croix.addEventListener("click", hideVideoOrFullscreen);
        }
        fonctionCroix();
        window.addEventListener("resize", fonctionCroix);
    }

    //all events attached to the loader
    const containerLoaderDisplayBlock = () => containerLoader.style.display = "block";
    const containerLoaderDisplayNone = () => containerLoader.style.display = "none";

    video.addEventListener("waiting",containerLoaderDisplayBlock);
    video.addEventListener("seeking", containerLoaderDisplayBlock);
    video.addEventListener("seeked", containerLoaderDisplayNone);
    video.addEventListener("loadedmetadata", containerLoaderDisplayNone);
    video.addEventListener("timeupdate", containerLoaderDisplayNone);
    video.addEventListener("ended", containerLoaderDisplayNone);

    //define some sizes
    let sliderWidth = volumeSlider.offsetWidth;
    let volumeSliderWhiteWidth = volumeSliderWhite.offsetWidth;
    let widthAround = media.offsetWidth / 52;

    //play the video when the first buttonPlay is clicked
    miniatureButton.addEventListener("click", () => {
        video.play();
        isTrailer ? miniature.classList.add("miniature-disparition-right") : miniature.classList.add("miniature-disparition-left");
        sliderWidth = volumeSlider.offsetWidth;
        volumeSliderWhiteWidth = volumeSliderWhite.offsetWidth;
        widthAround = media.offsetWidth / 52; 
        
        //volume par défault
        volumeSliderWhite.style.width = (sliderWidth / 2) + "px";
        video.volume = 0.5;
        

        someResponsiveElt();
        setTimeout(() => {
            miniature.style.display = 'none';
        }, 2000);
    })

    //remove the default controls and make visible ours
    video.removeAttribute('controls');
    controls.style.visibility = "visible";

    //responsive about the after and before of the controls element
    function someResponsiveElt() {
        controls.style.width = media.offsetWidth - (2 * widthAround) + "px";
        fullscreenButton.style.setProperty("--right-controls-width", widthAround + "px");
        playButton.style.setProperty("--left-controls-width", widthAround + "px");
        controls.style.transform = `translate3d(${widthAround}, 0, 0)`;
        sliderWidth = volumeSlider.offsetWidth;
    }
    someResponsiveElt();
    window.addEventListener("resize", someResponsiveElt);

    //wait for metadata to load and then execute the code following
    video.addEventListener("loadedmetadata", () => {

        //function which is in charge of change the state of the video and its playbutton
        function playStopVideo() {
            if (video.paused) {
                playPath.setAttribute("d", "M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z");
                video.play();
            } else {
                playPath.setAttribute("d", "M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z");
                video.pause();
            }
        }
        playButton.addEventListener("click", playStopVideo);

        //met en plein écran
        function inFullscreen() {
            if (document.fullscreenElement) {
                g1Path.setAttribute('d', "m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z");
                g2Path.setAttribute('d', "m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z");
                g3Path.setAttribute('d', "m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z");
                g4Path.setAttribute('d', "M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z");
                document.exitFullscreen();
            } else {
                g1Path.setAttribute('d', "m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z");
                g2Path.setAttribute('d', "m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z");
                g3Path.setAttribute('d', "m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z");
                g4Path.setAttribute('d', "m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z");
                media.requestFullscreen();
            }
        }
        fullscreenButton.addEventListener("click", inFullscreen);

        //change le playbutton sous une flèche en forme de cercle
        function replay() {
            if (video.currentTime == video.duration) {
                video.pause();
                playPath.setAttribute("d", "M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z");
                playButton.setAttribute("state", "replay");
                clearTimeout(timer1);
            }
            //change la forme du playbutton comme si qu'il était en pause, si on a bougé le moment actuel de la vidéo
            if ((playButton.getAttribute("state") == "replay" || video.paused) && video.currentTime !== video.duration) {
                playPath.setAttribute("d", "M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z");
            }
        }

        /*____________________________le volume___________________________*/
        //on va décaler le video-timer dès que l'on passera la souris sur le volume-icon
        function volumeIconMouseLeave(e) {
                e.stopPropagation();
                e.preventDefault();
                volumePanel.style.transform = `scale(0)`;
                    volumePanel.style.opacity = 0;
                    videoTimer.style.transform = "translate3d(0, 0, 0)";
                volumeSliderHandle.style.width = 0 + "px";
        }
        volumeArea.addEventListener("mouseleave", volumeIconMouseLeave);

        function volumeIconMouseEnter(e) {
            e.stopPropagation();
            e.preventDefault();
            volumePanel.style.transform = `scale(1)`;
                volumePanel.style.opacity = 1;
                videoTimer.style.transform = "translate3d(55px, 0, 0)";
            volumeSliderHandle.style.width = 7.5 + "px";
        }
        volumeArea.addEventListener("mouseenter", volumeIconMouseEnter);
        media.addEventListener("mouseenter", volumeIconMouseEnter);



        //lorsque l'on clique sur l'icon volume
        //ça coupe ou remet le son par rapport à l'état d'origine
        function volumeIconState() {

            sliderWidth = volumeSlider.offsetWidth;
            volumeSliderWhiteWidth = volumeSliderWhite.offsetWidth;

            if (volumeSliderWhiteWidth == 0) {
                pathVolume.setAttribute("d", "m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z");
                pathVolume.setAttribute("data-state", "volume coupé");
            } else if (volumeSliderWhiteWidth > 0 && volumeSliderWhiteWidth < (sliderWidth / 2)) {
                pathVolume.setAttribute("d", "M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z");
                pathVolume.setAttribute("data-state", "volume faible");
            } else {
                pathVolume.setAttribute("d", 'M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z');
                pathVolume.setAttribute("data-state", "volume fort");
            }
        }

        //fonction qui coupe le son
        function volumeCut() {
            if (pathVolume.getAttribute("data-state") == "volume coupé") {
                video.volume = 0;
            }
        }

        //et maintenant on va gérer le son
        //d'abord on clique sur le slider
        function onSliderMouseDown(e) {
            e.stopPropagation();
            e.preventDefault();
            if (e.target !== volumeSliderHandle) {
                volumeSliderWhite.style.width = e.offsetX + "px";
                video.volume = e.offsetX / 100 * (100 / 55);
                volumeIconState();
                volumeCut();
            }
            volumeArea.addEventListener("mousemove", onSliderMouseMove);
            volumeArea.addEventListener("mouseup", onSliderMouseUp);

            window.addEventListener("mouseup", onSliderMouseUp);
        }
        volumeSlider.addEventListener("mousedown", onSliderMouseDown);
        volumePanel.addEventListener("mousedown", onSliderMouseDown);

        //et maintenant le son évolue lorsque l'on bouge le curseur
        function onSliderMouseMove(e) {
            e.stopPropagation();
            e.preventDefault();
            volumeIconState();
            volumeCut();

            let sliderWhiteWidth = e.clientX - volumeSlider.getBoundingClientRect().left;

            if (e.target !== volumeIcon && e.target !== svgVolume && e.target !== pathVolume) {
                volumeSliderWhite.style.width = sliderWhiteWidth + "px";
                if (e.offsetX > volumeSlider.offsetWidth) {
                    volumeSliderWhite.style.width = volumeSlider.offsetWidth + "px";
                }
                if (sliderWhiteWidth > 0) {
                    video.volume = (sliderWhiteWidth / 100) * (100 / 55);
                }
            } else if (e.target == volumeIcon || e.target == svgVolume || e.target == pathVolume) {
                volumeSliderWhite.style.width = 0 + "px";
            }
            volumeArea.removeEventListener("mouseleave", volumeIconMouseLeave);
            media.removeEventListener("mouseleave", volumeIconMouseLeave);
        }

        //lorsque que l'on relache la souris on supprime les événements du slider pour qu'il ne bouge plus lors du mouvement de la souris
        //on remet l'événement mouseleave sur le média qui a été supprimé
        function onSliderMouseUp(e) {
            e.stopPropagation();
            e.preventDefault();
            volumeArea.removeEventListener("mousemove", onSliderMouseMove);
            volumeArea.removeEventListener("mousedown", onSliderMouseDown);
            volumeArea.addEventListener("mouseleave", volumeIconMouseLeave);
        }

        //on clique sur l'icon volume, ce qui coupera le son ou le remettra
        function volumeIconClicked() {
            if (pathVolume.getAttribute("data-state") != "volume coupé") {
                pathVolume.setAttribute("d", "m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z");
                pathVolume.setAttribute("data-state", "volume coupé");
                volumeCut();
            } else if (pathVolume.getAttribute("data-state") == "volume coupé") {
                volumeIconState();
                video.volume = volumeSliderWhiteWidth / 100 * (100 / 55)
            }
        }
        volumeIcon.addEventListener("click", volumeIconClicked);

        /**/

        //met le plein écran lors du double clic, pause ou play lors du clic
        video.addEventListener("dblclick", inFullscreen);
        video.addEventListener("click", playStopVideo);

        /* gestion de l'affichage du temps de la vidéo ainsi ce que doit faire le lecteur en fonction de celui-ci */

        //on affiche le temps total de la vidéo
        let calcTotalMin = Math.floor(video.duration / 60);
        let calcTotalSec = Math.floor(video.duration - calcTotalMin * 60);

        let totalMin = calcTotalMin < 10 && video.duration >= 600 ? "0" + calcTotalMin : calcTotalMin;
        let totalSec = calcTotalSec < 10 ? "0" + calcTotalSec : calcTotalSec;

        videoDurationElt.innerHTML = totalMin + ":" + totalSec;

        //on affiche le temps actuelle de la vidéo    
        function onTimeUpdate() {
            let calcMin = Math.floor(video.currentTime / 60);
            let calcSec = Math.floor(video.currentTime - calcMin * 60);

            let min = calcMin < 10 && video.duration >= 600 ? "0" + calcMin : calcMin;
            let sec = calcSec < 10 ? "0" + calcSec : calcSec;

            currentTimeElt.innerHTML = min + ":" + sec;

            //on change la taille de la barre rouge en fonction du temps actuelle de l vidéo
            let barreWidth = barre.offsetWidth * (video.currentTime / video.duration);
            barreFill.style.width = barreWidth + "px";

            //on met la video en pause pour que lorsque l'on réappuiera dessus, la vidéo se relance
            replay();

            //on change l'état actuel du bouton play en fonction de l'état de la vidéo
            if (video.paused) {
                playButton.setAttribute("state", "pause");
            } else {
                playButton.setAttribute("state", "play");
            }
        }
        video.addEventListener("timeupdate", onTimeUpdate);

        /**/

        /*la barre de la vidéo*/

        //on met une met une barre clair lorsque l'on passe la souris sur la barre de la vidéo
        function barreCoverWidth(e) {
            e.stopPropagation();
            e.preventDefault();
            barreCover.style.width = e.offsetX + "px";
            barre.addEventListener("mouseleave", onBarreMouseLeave)
        }
        barre.addEventListener("mousemove", barreCoverWidth)

        function onBarreMouseLeave() {
            barreCover.style.width = 0 + "px";
        }

        //on change l'endroit de la vidéo par rapport au clic sur la barre

        function onBarreMouseDown (e) {
            e.stopPropagation();
            e.preventDefault();
            if (e.target !== barreOrb) {
                barreFill.style.width = e.offsetX + "px";
                video.currentTime = (e.offsetX / barre.clientWidth) * video.duration;
            }
            window.addEventListener("mousemove", onBarreMouseMove);
            window.addEventListener("mouseup", onBarreMouseUp);
        }
        barre.addEventListener("mousedown", onBarreMouseDown);

        function onBarreMouseMove (e) {
            e.stopPropagation()
            e.preventDefault();
            barreOrb.style.transform = "scale(1)";
            barreOrb.style.opacity = 1;
            video.pause();
            if (e.offsetX >= 0 && e.clientX <= barre.clientWidth) {
                barreFill.style.width = barre.clientWidth * video.currentTime / video.duration + "px";
                video.currentTime = (e.clientX / barre.clientWidth) * video.duration;
            }
            if (e.clientX > barre.clientWidth) {
                barreFill.style.width = barre.clientWidth + "px";
            }
        }

        function onBarreMouseUp (e) {
            e.stopPropagation()
            e.preventDefault();
            barreOrb.style.transform = "scale(0)";
            barreOrb.style.opacity = 0;
            window.removeEventListener("mousemove", onBarreMouseMove);
            window.removeEventListener("mouseup", onBarreMouseUp);
        }

        /**/
        
        //l'utilsateur passe la souris sur le média et au bout de 3 secondes (s'il ne bouge plus):
        //si la vidéo est en mode lecture ou si le curseur n'est pas sur les controls
        //alors faire disparaître les controls
        //sinon si la vidéo est pause ou si l'utilsateur bouge la souris:
        //faire appraître les controls et remettre à zéro le compte à rebours

        let timer1; // le timer des 3 secondes

        //on clique sur la video
        function onVideoClick () {
            controlsApparition();
            if (!video.paused) { //la video est joué, on lance le timer
                clearTimeout(timer1); //le clear c au cas où il y en aurait plusieurs de lancés déjà
                timer1 = setTimeout(controlsDisparition, 3000);
            } else { //sinon la video est en pause on clear et on affiche les controls
                clearTimeout(timer1);
                controlsApparition();
            }                    
        }
        video.addEventListener("click", onVideoClick);
        video.addEventListener("play", onVideoClick);

        let scaleDisparition;
        function controlsDisparition() {
            clearTimeout(scaleDisparition);
            scaleDisparition = setTimeout(() => {
                    controls.style.transform = "scale(0)";
                }, 500);
                controls.style.opacity = "0";
                media.style.cursor = "none";

                if(isTrailer) {
                    croix.style.transform = "scale(0)";
                }
            }

        function controlsApparition () {
            controls.style.transform = "scale(1)";
            controls.style.opacity = "1";
            media.style.cursor = "default";

            if(isTrailer) {
                croix.style.transform = "scale(1)";
            }
        }

        //si la vidéo est joué, on fait disparaître les controls lorsque que l'on fait passer la souris hors du player
        function mediaMouseleave () {
            if (!video.paused) {
                controlsDisparition();
                clearTimeout(timer1);
            }
        }

        //si la vidéo est joué, on met le timer en route lorsque l'on passe la souris sur le lecteur
        function mouseEnter () {
            controlsApparition();
            if (!video.paused) {
                timer1 = setTimeout(controlsDisparition, 3000);
            }
        }

        //on bouge la souris sur le media, ce qui fait apparaître les controls 
        function mediaMouseMove () {
            controlsApparition();
            clearTimeout(timer1); // le mousemove execute le code dès que la souris bouge, pour éviter quelques centaines de timer qui se lancent en meme temps, on les clear d'abord
            if (!video.paused) {
                timer1 = setTimeout(controlsDisparition, 3000);
            } else {
                clearTimeout(timer1);
            }
        }
        
        media.addEventListener("mousemove", mediaMouseMove);
        media.addEventListener("mouseleave", mediaMouseleave);
        media.addEventListener("mouseenter", mouseEnter);

        //les événements relatifs aux touches de clavier
        function keydown (e) {
            controlsApparition();
            let widthDown = volumeSliderWhiteWidth;
            let widthUp = volumeSliderWhiteWidth;
            switch (e.key.toUpperCase()) {
                case "K":
                    playStopVideo();
                    break;
                case "ARROWRIGHT":
                    video.currentTime <= video.duration - 5 ? 
                    video.currentTime += 5:
                    video.currentTime = video.duration;
                    break;
                case "ARROWLEFT":
                    video.currentTime >= 5 ?
                    video.currentTime -= 5:
                    video.currentTime = 0;
                    replay();
                    break;
                case "ARROWUP":
                    if (document.fullscreenElement) {
                        if (video.volume <= 0.95) {
                            video.volume += 0.05;
                            widthUp += 2.5;
                            volumeSliderWhite.style.width = widthUp + "px";
                            volumeIconState();
                        } else {
                            video.volume = 1;
                        }   
                        break;
                    }
                case "ARROWDOWN":
                    if (document.fullscreenElement) {
                        if (video.volume >= 0.05) {
                            video.volume -= 0.05,
                            widthDown -= 2.5;
                        volumeSliderWhite.style.width = widthDown + "px";
                            volumeIconState();
                        } else {
                            volumeSliderWhite.style.width = 0 + "px";
                            volumeIconState();
                            volumeCut();
                        }
                        break;
                    }
                case "F":
                    inFullscreen();
                    break;
                default: 
                    controlsApparition();
            }
        }

        media.addEventListener("blur", ()=> {
            window.removeEventListener("keydown", keydown);
        })

        media.addEventListener("focus", () => {
            window.addEventListener('keydown', keydown);
        })
    })
}

