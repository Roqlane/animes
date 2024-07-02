
<?php
    session_start();

    $userDefined = isset($_SESSION['pseudo']) && isset($_SESSION['email']) && isset($_SESSION['password']);
	// Récupère les données du formulaire d'inscription
    if ($userDefined) {
        $pseudo = $_SESSION["pseudo"];
        $email = $_SESSION["email"];
        $password = $_SESSION["password"];
         //echo $pseudo . $email . $password;
    }    

?>

<!doctype html>
<html lang="Fr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Animes</title>
        <link rel="shortcut icon" type="image/x-icon" href="../image/favicon.png" />
        <link rel="stylesheet" href="../css/style.css">
    </head>

    <body>
        <!-- le background animé-->
        <section class="glowing">
            <div class="glowing-particules">
                <span style="--i:1;"></span>
                <span style="--i:2;"></span>
                <span style="--i:3;"></span>
            </div>
            <div class="glowing-particules">
                <span style="--i:1;"></span>
                <span style="--i:2;"></span>
                <span style="--i:3;"></span>
            </div>
            <div class="glowing-particules">
                <span style="--i:1;"></span>
                <span style="--i:2;"></span>
                <span style="--i:3;"></span>
            </div>
            <div class="glowing-particules">
                <span style="--i:1;"></span>
                <span style="--i:2;"></span>
                <span style="--i:3;"></span>
            </div>
            <div class="glowing-particules">
                <span style="--i:1;"></span>
                <span style="--i:2;"></span>
                <span style="--i:3;"></span>
            </div>
        </section>

        <!-- l'écran de chargement-->
        <section class="loading-screen">
            <div class="loader-ctr">
                <div class="loader">
                    <div class="dot" style="--i:0;"></div>
                    <div class="dot" style="--i:1;"></div>
                    <div class="dot" style="--i:2;"></div>
                    <div class="dot" style="--i:3;"></div>
                    <div class="dot" style="--i:4;"></div>
                    <div class="dot" style="--i:5;"></div>
                    <div class="dot" style="--i:6;"></div>
                    <div class="dot" style="--i:7;"></div>
                    <div class="dot" style="--i:8;"></div>
                    <div class="dot" style="--i:9;"></div>
                </div>
                <h2>Loading...</h2>
                <div class="loader">
                    <div class="dot" style="--i:0;"></div>
                    <div class="dot" style="--i:1;"></div>
                    <div class="dot" style="--i:2;"></div>
                    <div class="dot" style="--i:3;"></div>
                    <div class="dot" style="--i:4;"></div>
                    <div class="dot" style="--i:5;"></div>
                    <div class="dot" style="--i:6;"></div>
                    <div class="dot" style="--i:7;"></div>
                    <div class="dot" style="--i:8;"></div>
                    <div class="dot" style="--i:9;"></div>
                </div>
            </div>
<!-- glowing particles of the loading screen
            <div class="particules-ctr">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div> -->
        </section>

        <!-- les éléments de l'animation lorsque l'on range les animes par leur ordre d'épisodes-->
        <div class="loading-episodes_order" style="transform: scale(0)">
            <div id="ring-first" class="ring">
                <div class="circle"></div>
            </div>
            <div id="line">
                <div id="line-white"></div>
                <div id="line-dotted" style="display: none">
                    <div id="line-guide"></div>
                    <span style="--i:1;"></span>
                    <span style="--i:2;"></span>
                    <span style="--i:3;"></span>
                    <span style="--i:4;"></span>
                    <span style="--i:5;"></span>
                    <span style="--i:6;"></span>
                    <span style="--i:7;"></span>
                    <span style="--i:8;"></span>
                    <span style="--i:9;"></span>
                    <span style="--i:10;"></span>
                    <span style="--i:11;"></span>
                    <span style="--i:12;"></span>
                    <span style="--i:13;"></span>
                    <span style="--i:14;"></span>
                    <span style="--i:15;"></span>
                    <span style="--i:16;"></span>
                    <span style="--i:17;"></span>
                    <span style="--i:18;"></span>
                    <span style="--i:19;"></span>
                </div>
            </div>
            <div id="ring-second" class="ring">
                <div class="circle"></div>
            </div>
            <svg id="ring">
                <filter id="wavy">
                    <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="5" seed="2">
                        <animate attributeName="baseFrequency" dur="60s" values="0.02;0.005;0.02" repeatCount="indefinite"></animate>
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="50"></feDisplacementMap>
                </filter>
                <filter id="wavy-without-animate">
                    <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="5" seed="2">
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="50"></feDisplacementMap>
                </filter>
            </svg>
        </div> 
        
        <!-- la barre de scroll-->
        <div class="scrollbar"></div>
        <div class="clickScrollbar"></div>

        <?php if ($userDefined) {
            ?>
            
        <!-- le conteneur de la fav-list-->
        <section id="fav-list-ctr" class="reverse-translate2000">
            <?php echo '<h2 > Yahallo ' . $pseudo . '!!!</h2>';?>

            <div id="fav-list-ctr-animes"></div>
            <div id="fav-list-ctr-cross">
                <svg height="100%" width="100%" version="1.1" viewbox='0 0 36 36'>
                    <path d="M2 2 L4 0 L30 28 L28 30 M2 28 L28 0 L30 2 L4 30"></path>
                </svg>
            </div>
        </section>
        
        <?php
        }
        ?>

        <div id="icon-ctr">
            <?php
            //si l'utilisateur est connecté 
            if ($userDefined) {
            ?>
            <!-- l'icon  avec le masque de renard -->
            <div id="kitsune"><img src="../image/kitsune.png" alt="kitsune" srcset="" width="100%" height="100%"></div>
            <script>
                const kitsune = document.getElementById("kitsune")
                const favListContainer = document.getElementById("fav-list-ctr")
                kitsune?.addEventListener('click', () => {
                    favListContainer.classList.remove("reverse-translate2000")
                    favListContainer.classList.add("translate2000")
                })
            </script>
                
            <!--l'icon de déconnexion-->
            <div id="logout" class="title-container">
                <img src="../image/logout_button.png"alt="déconnexion" srcset="" width="100%" height="100%">
                <p>déconnexion</p>
            </div>
            <script>
                const logout = document.getElementById("logout")
                logout?.addEventListener('click', () => document.location = "./logs/logout.php")
            </script>

            <!--l'icon de profile-->
            <div id="user-profile" class="title-container">
                <img src="../image/profile.png" title="profile" alt="profile" srcset="" width="100%" height="100%">
                <p style="right:0; ">profile</p>
            </div>
            <script>
                const userProfile = document.getElementById("user-profile")
                userProfile.addEventListener("click", () => document.location = "./logs/profile.php")
            </script>

            <?php
            }
            //sinon on affiche l'icon profile pour se rediriger vers le formulaire
            else {
            ?>

            <div id="profile">
                <img src="../image/svg/profile.png" alt="profile" srcset="">
            </div>

            <?php }?>

            <!-- le logo lune qui permet de changer le mode du site-->
            <div id="theme-mode">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="moon" x="0px" y="0px" width="100%" viewBox="0 0 500 500" xml:space="preserve">
                    <g>
                        <path d="M380.525,337.291c-135.427,0-245.302-109.773-245.302-245.302c0-32.502,6.338-63.575,17.991-91.988    C63.372,36.286,0,124.39,0,227.315c0,135.427,109.875,245.302,245.302,245.302c102.923,0,191.029-63.472,227.316-153.315    C444.201,330.954,413.129,337.291,380.525,337.291z"/>
                    </g>
                </svg>
            </div>

            <!-- la flèche qui permet de revenir en haut de la page-->
            <div id="arrowUp">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="up" x="0px" y="0px" width="100%" viewBox="0 0 500 500" xml:space="preserve">
                    <g>
                        <path d="M437.2,178.7c12.8,12.8,12.8,33.4,0,46.2c-6.4,6.4-14.7,9.6-23.1,9.6s-16.7-3.2-23.1-9.6L277.7,111.5v345.8   c0,18-14.6,32.7-32.7,32.7s-32.7-14.6-32.7-32.7V111.5L99,224.9c-12.8,12.8-33.4,12.8-46.2,0s-12.8-33.4,0-46.2L221.9,9.6   C228,3.4,236.3,0,245,0c8.7,0,17,3.4,23.1,9.6L437.2,178.7z"/>
                    </g>
                </svg>
            </div>    
        </div>

        <!-- l'icon burger qui permet d'accéder au menu lorsuqe le site est en responsive-->
        <div id="menu-icon">
            <svg>
                <defs>
                  <filter id="gooeyness">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooeyness" />
                    <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
                  </filter>
                </defs>
              </svg>
                <div class="plate plate2" onclick="this.classList.toggle('active')">
                  <svg class="burger" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                    <path class="line line1" d="M 50,65 H 70 C 70,65 75,65.198488 75,70.762712 C 75,73.779026 74.368822,78.389831 66.525424,78.389831 C 22.092231,78.389831 -18.644068,-30.508475 -18.644068,-30.508475" />
                    <path class="line line2" d="M 50,35 H 70 C 70,35 81.355932,35.300135 81.355932,25.635593 C 81.355932,20.906215 78.841706,14.830508 72.881356,14.830508 C 35.648232,14.830508 -30.508475,84.322034 -30.508475,84.322034" />
                    <path class="line line3" d="M 50,50 H 30 C 30,50 12.288136,47.749959 12.288136,60.169492 C 12.288136,67.738339 16.712974,73.305085 40.677966,73.305085 C 73.791674,73.305085 108.47458,-19.915254 108.47458,-19.915254" />
                    <path class="line line4" d="M 50,50 H 70 C 70,50 81.779661,50.277128 81.779661,36.607372 C 81.779661,28.952694 77.941689,25 69.067797,25 C 39.95532,25 -16.949153,119.91525 -16.949153,119.91525" />
                    <path class="line line5" d="M 50,65 H 30 C 30,65 17.79661,64.618439 17.79661,74.152543 C 17.79661,80.667556 25.093813,81.355932 38.559322,81.355932 C 89.504001,81.355932 135.59322,-21.186441 135.59322,-21.186441" />
                    <path class="line line6" d="M 50,35 H 30 C 30,35 16.525424,35.528154 16.525424,24.152542 C 16.525424,17.535987 22.597755,13.559322 39.40678,13.559322 C 80.617882,13.559322 94.067797,111.01695 94.067797,111.01695" />
                  </svg>
                  <svg class="x" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                    <path class="line" d="M 34,32 L 66,68" />
                    <path class="line" d="M 66,32 L 34,68" />
                  </svg>
                </div>              
        </div>

        <!-- le menu du site-->
        <header class="menu">
            <img srcset="../image/anime_background-1150.png 1150w,
                        ../image/anime_background-1450.png 1450w,
                        ../image/anime_background.png 1600w"
                 sizes="(max-width: 1150px) 1150px,
                 (max-width: 1450px) 1450px,
                 1600px"
                 src="../image/anime_background.png" alt="bannière">
            <nav>
                <ul>
                    <li><a href="#" id="genre" class="hover">
                        <span>G</span>
                        <span>e</span>
                        <span>n</span>
                        <span>r</span>
                        <span>e</span>
                        <span>s</span>
                    </a></li>
                    <li><a href="#" id="theme" class="hover">
                        <span>T</span>
                        <span>h</span>
                        <span>è</span>
                        <span>m</span>
                        <span>e</span>
                        <span>s</span>
                    </a></li>
                    <li class="has-children hover"><a href="#" id="episodes" class="hover">
                        <span>É</span>
                        <span>p</span>
                        <span>i</span>
                        <span>s</span>
                        <span>o</span>
                        <span>d</span>
                        <span>e</span>
                        <span>s</span>
                    </a>
                        <ul class="sous-menu">
                            <li class="hover">11-13</li>
                            <li class="hover">24-27</li>
                            <li class="hover">27+</li>
                        </ul>
                    </li>
                    <li><a href="./tierList.html" target="_blank" id="tierList" class="hover">
                        <span>T</span>
                        <span>i</span>
                        <span>e</span>
                        <span>r</span>

                        <span>L</span>
                        <span>i</span>
                        <span>s</span>
                        <span>t</span>
                    </a></li>
                    <div class="form">
                        <input type="text" name="" id="" placeholder="search an anime">
                    </div>
                </ul>
            </nav>      
        </header>

        <div class="genre" style="display: none;">
            <p>Action</p>
            <b>-</b>
            <p>Aventure</p>
            <b>-</b>
            <p>Comédie</p>
            <b>-</b>
            <p>Drame</p>
            <b>-</b>
            <p>Fantasy</p>
            <b>-</b>
            <p>Jeux</p>
            <b>-</b>
            <p>Mystère</p>
            <b>-</b>
            <p>Psychologique</p>
            <b>-</b>
            <p>Science-fiction</p>
            <b>-</b>
            <p>Surnaturel</p>
            <b>-</b>
            <p>Thriller</p>
            <b>-</b>
            <p>School Life</p>
        </div>
        
    <div class="menu_aside">
        <div class="genre theme" style="display: none;">
            <p>Combats</p>
            <b>-</b>
            <p>Monstres</p>
            <b>-</b>
            <p>Démons</p>
            <b>-</b>
            <p>Sport</p>
            <b>-</b>
            <p>école</p>
            <b>-</b>
            <p>Isekai</p>
            <b>-</b>
            <p>Militaire</p>
            <b>-</b>
            <p>Magie</p>
            <b>-</b>
            <p>Vengeance</p>
            <b>-</b>
            <p>Guerre</p>
            <b>-</b>
            <p>Super Pouvoirs</p>
            <b>-</b>
            <p>Mecha</p>
        </div>
    </div>
    <script>
        document.querySelectorAll(".genre p").forEach(p => p.classList.add("hover"));
        document.querySelectorAll(".hover").forEach(p => p.classList.add("T"));
    </script>

        <!-- le contenu du site: les animes-->
        <main class="container">
            
        <div class="card-container">
            <div class="card">
                <div class="card-front card--fullmetal 0" id="fullmetal">
                    <div class="card_forward 0">
                        <strong>Fullmetal Alchemist: Brotherhood</strong>
                        <p>Episodes: 64</p>
                        <p>Genres: Action - Aventure - Comédie - Drame - Fantasy - Psychologique - Surnaturel - Thriller</p>
                        <p>Tier: A</p>
                    </div>
                </div>
                <div class="card-back card-back--fullmetal">
                    <p>Synopsis: meow meow meow meow meow meow meow meow</p>
                </div>
            </div>
        </div>

            

            

            <!-- <div class="card card--grand_blue" id="grand_blue">
                <div class="card_forward">
                    <strong>Grand Blue</strong>
                    <p>Episodes: 12</p>
                    <p>Genres: Comédie - Ecchi - School Life - Slice of Life</p>
                    <p>Tier: S</p>
                </div>
            </div>

            <div class="card card--noragami" id="noragami">
                <div class="card_forward">
                    <strong>Noragami</strong>
                    <p>Episodes: 24</p>
                    <p>Genres: Action - Aventure - Comédie - Fantastique - Fantasy - Shônen - Surnaturel</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--mha" id="mha">
                <div class="card_forward">
                    <strong>My Hero Academia</strong>
                    <p>Episodes: 88</p>
                    <p>Genres: Action - Comédie - School Life - Surnaturel</p>
                    <p>Tier: S</p>
                </div>
            </div>

            <div class="card card--nogamenolife" id="nogamenolife">
                <div class="card_forward">
                    <strong>No Game No Life</strong>
                    <p>Episodes: 12</p>
                    <p>Genres: Aventure - Comédie - Ecchi - Fantastique - Fantasy</p>
                    <p>Tier: A</p>
                </div>
            </div>

            
            
            <div class="card card--tkg" id="tkg">
                <div class="card_forward">
                    <strong>Tokyo Ghoul</strong>
                    <p>Episodes: 24</p>
                    <p>Genres: Action - Drame - Horreur - Mature - Mystère - Psychologique - Surnaturel</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--rezero" id="rezero">
                <div class="card_forward">
                    <strong>Re:zero</strong>
                    <p>Episodes: 51</p>
                    <p>Genres: Comédie - Drame - Fantasy - Psychologique - Romance - Thriller</p>
                    <p>Tier: A</p>
                </div>
            </div>      

            <div class="card card--opm" id="opm">
                <div class="card_forward">
                    <strong>One Punch Man</strong>
                    <p>Episodes: 24</p>
                    <p>Genres: Action - Comédie - Science-fiction - Seinen - Surnaturel</p>
                    <p>Tier: S</p>
                </div>
            </div>

            <div class="card card--overlord" id="overlord">
                <div class="card_forward">
                    <strong>Overlord</strong>
                    <p>Episodes: 39</p>
                    <p>Genres: Action - Aventure - Fantasy - Science-fiction - Seinen</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--tensura" id="tensura">
                <div class="card_forward">
                    <strong>Tensei Shitara Slime Datta Ken</strong>
                    <p>Episodes: 36</p>
                    <p>Genres: Action - Aventure - Comédie - Drame - Fantasy - Seinen</p>
                    <p>Tier: S</p>
                </div>
            </div>

            <div class="card card--dororo" id="dororo">
                <div class="card_forward">
                    <strong>Dororo</strong>
                    <p>Episodes: 24</p>
                    <p>Genres: Action - Aventure - Fantastique - Historique - Surnaturel</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--sakamoto" id="sakamoto">
                <div class="card_forward">
                    <strong>Sakamoto desu ga ?</strong>
                    <p>Episodes: 12</p>
                    <p>Genres: Comédie - School Life</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--darling" id="darling">
                <div class="card_forward">
                    <strong>Darling in the Franxx</strong>
                    <p>Episodes: 24</p>
                    <p>Genres: Action - Drame - Psychologique - Romance - Science-fiction - Surnaturel</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--parasyte" id="parasyte">
                <div class="card_forward">
                    <strong>Parasyte</strong>
                    <p>Episodes: 24</p>
                    <p>Genres: Action - Drame - Horreur / Épouvante - Psychologique - Romance - School Life - Science-fiction</p>
                    <p>Tier: A</p>
                </div>
            </div>
            
            <div class="card card--erased" id="erased">
                <div class="card_forward">
                    <strong>Erased</strong>
                    <p>Episodes: 12</p>
                    <p>Genres: Drame - Mature - Mystère - Psychologique - Romance - Slice of Life - Surnaturel - Tragique</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--april" id="april">
                <div class="card_forward">
                    <strong>Your lie in April</strong>
                    <p>Episodes: 24</p>
                    <p>Genres: Drame - Romance - Slice of Life</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--youjo_senki" id="youjo_senki">
                <div class="card_forward">
                    <strong>Youjo Senki</strong>
                    <p>Episodes: 12</p>
                    <p>Genres: Action - Fantastique - Mature</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--shield" id="shield">
                <div class="card_forward">
                    <strong>The Rising of the Shield Hero</strong>
                    <p>Episodes: 25</p>
                    <p>Genres: Action - Aventure - Drame - Fantasy - Psychologique - Romance</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--prison" id="prison">
                <div class="card_forward">
                    <strong>Prison School</strong>
                    <p>Episodes: 12</p>
                    <p>Genres: Comédie - Ecchi - Romance - School Life - Seinen</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--fire_force" id="fire_force">
                <div class="card_forward">
                    <strong>Fire Force</strong>
                    <p>Episodes: 48</p>
                    <p>Genres: Action - Comédie - Drame - Science-fiction - Shônen - Surnaturel</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--knights_magic" id="knights_magic">
                <div class="card_forward">
                    <strong>Knight's & Magic</strong>
                    <p>Episodes: 13</p>
                    <p>Genres: Action - Comédie - Fantasy - Romance</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--akame" id="akame">
                <div class="card_forward">
                    <strong>Akame ga KILL!</strong>
                    <p>Episodes: 24</p>
                    <p>Genres: Action - Aventure - Comédie - Drame - Fantasy - Psychologique - Romance - Thriller</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--k" id="k">
                <div class="card_forward">
                    <strong>K-project</strong>
                    <p>Episodes: 26</p>
                    <p>Genres: Action - Comédie - Drame - Fantasy - Mystère - Surnaturel</p>
                    <p>Tier: S</p>
                </div>
            </div>

            <div class="card card--id_invaded" id="id_invaded">
                <div class="card_forward">
                    <strong>ID:INVADED</strong>
                    <p>Episodes: 13</p>
                    <p>Genres: Drame - Mystère - Psychologique - Science-fiction - Thriller</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--kakegurui" id="kakegurui">
                <div class="card_forward">
                    <strong>Kakegurui</strong>
                    <p>Episodes: 24</p>
                    <p>Genres: Action - Drame - Ecchi - Horreur / Épouvante - Mystère - Psychologique - School Life</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--vinland" id="vinland">
                <div class="card_forward">
                    <strong>Vinland Saga</strong>
                    <p>Episodes: 24</p>
                    <p>Genres: Action - Aventure - Drame - Historique</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--destructive_god" id="destructive_god">
                <div class="card_forward">
                    <strong>Boku no Tonari ni Ankoku Hakaishin ga Imasu.</strong>
                    <p>Episodes: 12</p>
                    <p>Genres: Comédie - Romance - School Life - Slice of Life</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--rettousei" id="rettousei">
                <div class="card_forward">
                    <strong>Mahouka Koukou no Rettousei</strong>
                    <p>Episodes: 38</p>
                    <p>Genres: Action - Comédie - Romance - School Life - Science-fiction - Shônen - Surnaturel</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--kabaneri" id="kabaneri">
                <div class="card_forward">
                    <strong>Kabaneri of the Iron Fortress</strong>
                    <p>Episodes: 12</p>
                    <p>Genres: Action - Drame - Horreur / Épouvante - Mystère - Psychologique - Surnaturel</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--bungou" id="bungou">
                <div class="card_forward">
                    <strong>Bungou Stray Dogs</strong>
                    <p>Episodes: 36</p>
                    <p>Genres: Mystère - Seinen - Surnaturel</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--kaguya" id="kaguya">
                <div class="card_forward">
                    <strong>Kaguya-sama - Love is War</strong>
                    <p>Episodes: 24</p>
                    <p>Genres: Comédie - Drame - Romance - School Life - Seinen</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--seraph" id="seraph">
                <div class="card_forward">
                    <strong>Owari no Seraph</strong>
                    <p>Episodes: 24</p>
                    <p>Genres: Action - Drame - Fantastique - Shônen - Surnaturel</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--iwgp" id="iwgp">
                <div class="card_forward">
                    <strong>Ikebukuro West Gate Park</strong>
                    <p>Episodes: 12</p>
                    <p>Genres: Drame - Mystère</p>
                    <p>Tier: B</p>
                </div>
            </div>
            
            <div class="card card--hxh" id="hxh">
                <div class="card_forward">
                    <strong>Hunter X Hunter</strong>
                    <p>Episodes: 148</p>
                    <p>Genres: Aventure - Comédie - Drame - Fantasy - Shônen - Surnaturel - Thriller - Tournois</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--code_geass" id="code_geass">
                <div class="card_forward">
                    <strong>Code Geass</strong>
                    <p>Episodes: 50</p>
                    <p>Genres: Action - Drame - Psychologique - Romance - Science-fiction - Surnaturel - Thriller</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--stone" id="stone">
                <div class="card_forward">
                    <strong>Dr Stone</strong>
                    <p>Episodes: 24</p>
                    <p>Genres: Action - Aventure - Drame - Fantastique - Science-fiction - Shônen</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--assassination_classroom" id="assassination_classroom">
                <div class="card_forward">
                    <strong>Assassination Classroom</strong>
                    <p>Episodes: 47</p>
                    <p>Genres: Action - Comédie - Drame - Surnaturel</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--demon_slayer" id="demon_slayer">
                <div class="card_forward">
                    <strong>Demon Slayer</strong>
                    <p>Episodes: 26</p>
                    <p>Genres: Aventure - Fantastique - Historique - Surnaturel</p>
                    <p>Tier: S</p>
                </div>
            </div>

            <div class="card card--fate" id="fate">
                <div class="card_forward">
                    <strong>Fate/stay night : Unlimited Blade Works</strong>
                    <p>Episodes: 25</p>
                    <p>Genres: Action - Drame - Fantasy - Psychologique - Romance - Surnaturel</p>
                    <p>Tier: S</p>
                </div>
            </div>
            
            <div class="card card--death_note" id="death_note">
                <div class="card_forward">
                    <strong>Death Note</strong>
                    <p>Episodes: 37</p>
                    <p>Genres: Drame - Fantastique - Mystère - Psychologique - Surnaturel - Thriller</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--snk" id="snk">
                <div class="card_forward">
                    <strong>Shingeki no kyojin</strong>
                    <p>Episodes: 75</p>
                    <p>Genres: Action - Drame - Horreur / Épouvante - Mystère - Psychologique - Shônen - Surnaturel - Thriller</p>
                    <p>Tier: GOD</p>
                </div>
            </div>

            <div class="card card--haikyuu" id="haikyuu">
                <div class="card_forward">
                    <strong>Haikyū!!</strong>
                    <p>Episodes: 75</p>
                    <p>Genres: Action - Comédie - Shônen - Tournois</p>
                    <p>Tier: S</p>
                </div>
            </div>

            <div class="card card--black_butler" id="black_butler">
                <div class="card_forward">
                    <strong>Black Butler</strong>
                    <p>Episodes: 75</p>
                    <p>Genres: Drame - Surnaturel</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--nanatsu" id="nanatsu">
                <div class="card_forward">
                    <strong>Nanatsu no Taizai</strong>
                    <p>Episodes: 96</p>
                    <p>Genres: Action - Aventure - Comédie - Fantasy - Romance - Shônen - Surnaturel</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--free" id="free">
                <div class="card_forward">
                    <strong>Free!</strong>
                    <p>Episodes: 37</p>
                    <p>Genres: School Life - Slice of Life</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--goblin_slayer" id="goblin_slayer">
                <div class="card_forward">
                    <strong>Goblin Slayer</strong>
                    <p>Episodes: 12</p>
                    <p>Genres: Action - Aventure - Drame - Fantasy - Psychologique</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--kuroko" id="kuroko">
                <div class="card_forward">
                    <strong>Kuroko no Basket</strong>
                    <p>Episodes: 75</p>
                    <p>Genres: Comédie - Drame - Shônen - Tournois</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--millionaire" id="millionaire">
                <div class="card_forward">
                    <strong>The Millionaire Detective - Balance: Unlimited</strong>
                    <p>Episodes: 11</p>
                    <p>Genres: Drame - Mystère - Thriller</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--elite" id="elite">
                <div class="card_forward">
                    <strong>Classroom of the Elite</strong>
                    <p>Episodes: 12</p>
                    <p>Genres: Comédie - Drame - School Life - Slice of Life</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--moriarty" id="moriarty">
                <div class="card_forward">
                    <strong>Moriarty the Patriot</strong>
                    <p>Episodes: 23</p>
                    <p>Genres: Biographique - Drame - Historique - Mystère</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--kill" id="kill">
                <div class="card_forward">
                    <strong>Kill la Kill</strong>
                    <p>Episodes: 24</p>
                    <p>Genres: Action - Comédie - Drame - Ecchi - Fantastique - Fantasy - School Life - Science-fiction</p>
                    <p>Tier: A</p>
                </div>
            </div>


            <div class="card card--guren" id="guren">
                <div class="card_forward">
                    <strong>Tengen Toppa Gurren-Lagann</strong>
                    <p>Episodes: 27</p>
                    <p>Genres: Action - Aventure - Comédie - Drame - Romance - Science-fiction</p>
                    <p>Tier: C</p>
                </div>
            </div>

            <div class="card card--food" id="food">
                <div class="card_forward">
                    <strong>Food Wars</strong>
                    <p>Episodes: 73</p>
                    <p>Genres: Comédie - Ecchi - Romance - School Life</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--konosuba" id="konosuba">
                <div class="card_forward">
                    <strong>Kono Subarashii Sekai ni Shukufuku wo!</strong>
                    <p>Episodes: 30</p>
                    <p>Genres: Aventure - Comédie - Fantasy - Surnaturel</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--death_parade" id="death_parade">
                <div class="card_forward">
                    <strong>Death Parade</strong>
                    <p>Episodes: 12</p>
                    <p>Genres: Drame - Mystère - Psychologique</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--mob" id="mob">
                <div class="card_forward">
                    <strong>Mob Psycho 100</strong>
                    <p>Episodes: 24</p>
                    <p>Genres: Action - Comédie - Romance - School Life - Surnaturel</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--yuri" id="yuri">
                <div class="card_forward">
                    <strong>Yuri!!! on Ice</strong>
                    <p>Episodes: 12</p>
                    <p>Genres: Comédie - Drame - Slice of Life - Tournois</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--aldnoah" id="aldnoah">
                <div class="card_forward">
                    <strong>Aldnoah.Zero</strong>
                    <p>Episodes: 24</p>
                    <p>Genres: Action - Science-fiction</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--amagi" id="amagi">
                <div class="card_forward">
                    <strong>Amagi Brilliant Park</strong>
                    <p>Episodes: 13</p>
                    <p>Genres: Comédie - Drame - Fantasy</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--angel" id="angel">
                <div class="card_forward">
                    <strong>Angel Beats!</strong>
                    <p>Episodes: 13</p>
                    <p>Genres: Action - Comédie - Drame - Fantasy - School Life - Science-fiction - Surnaturel</p>
                    <p>Tier: C</p>
                </div>
            </div>

            <div class="card card--beelzebub" id="beelzebub">
                <div class="card_forward">
                    <strong>Beelzebub</strong>
                    <p>Episodes: 60</p>
                    <p>Genres: Action - Comédie - Shônen - Surnaturel</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--brynhildr" id="brynhildr">
                <div class="card_forward">
                    <strong>Brynhildr in the Darkness</strong>
                    <p>Episodes: 13</p>
                    <p>Genres: Action - Drame - Ecchi - Fantasy - Mystère - Psychologique - Romance - School Life - Science-fiction - Seinen</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--saiki" id="saiki">
                <div class="card_forward">
                    <strong>Saiki Kusuo no Ψ Nan</strong>
                    <p>Episodes: 54</p>
                    <p>Genres: Comédie - School Life - Science-fiction - Slice of Life - Surnaturel</p>
                    <p>Tier: A</p>
                </div>
            </div>

            <div class="card card--sao" id="sao">
                <div class="card_forward">
                    <strong>Sword Art Online</strong>
                    <p>Episodes: 108</p>
                    <p>Genres: Action - Drame - Fantasy - Romance - Science-fiction</p>
                    <p>Tier: C</p>
                </div>
            </div>

            <div class="card card--genome" id="genome">
                <div class="card_forward">
                    <strong>Naka no Hito Genome [Jikkyouchuu]</strong>
                    <p>Episodes: 12</p>
                    <p>Genres: Action - Aventure - Drame - Mystère - Psychologique - Romance - Shônen - Surnaturel</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--tpn" id="tpn">
                <div class="card_forward">
                    <strong>The Promised Neverland</strong>
                    <p>Episodes: 24</p>
                    <p>Genres: Aventure - Drame - Horreur - Mystère - Surnaturel</p>
                    <p>Tier: S</p>
                </div>
            </div>

            <div class="card card--akudama" id="akudama">
                <div class="card_forward">
                    <strong>Akudama Drive</strong>
                    <p>Episodes: 12</p>
                    <p>Genres: Aventure - Drame - Horreur - Mystère - Surnaturel</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--mushoku" id="mushoku">
                <div class="card_forward">
                    <strong>Mushoku Tensei : Isekai Ittara Honki Dasu</strong>
                    <p>Episodes: 11</p>
                    <p>Genres: Action - Aventure - Comédie - Drame - Ecchi - Fantasy - Romance - Seinen</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--angels_death" id="angels_death">
                <div class="card_forward">
                    <strong>Angels of Death</strong>
                    <p>Episodes: 12</p>
                    <p>Genres: Action - Drame - Horreur / Épouvante - Josei - Mystère - Psychologique - Thriller</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--kaisen" id="kaisen">
                <div class="card_forward">
                    <strong>Jujutsu Kaisen</strong>
                    <p>Episodes: 24</p>
                    <p>Genres: Action - Aventure - Drame - Fantastique - Mystère - School Life - Surnaturel - Tragique</p>
                    <p>Tier: S</p>
                </div>
            </div>

            <div class="card card--gangsta" id="gangsta">
                <div class="card_forward">
                    <strong>GANGSTA.</strong>
                    <p>Episodes: 12</p>
                    <p>Genres: Action - Drame - Mature - Psychologique - Tragique</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--gate" id="gate">
                <div class="card_forward">
                    <strong>Gate : Jieitai Kanochi nite, Kaku Tatakaeri</strong>
                    <p>Episodes: 24</p>
                    <p>Genres: Action - Aventure - Fantasy - Seinen</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--cautious" id="cautious">
                <div class="card_forward">
                    <strong>Cautious Hero</strong>
                    <p>Episodes: 12</p>
                    <p>Genres: Action - Aventure - Comédie - Fantasy</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--zestiria" id="zestiria">
                <div class="card_forward">
                    <strong>Tales of Zestiria the X</strong>
                    <p>Episodes: 25</p>
                    <p>Genres: Drame - Fantasy - Surnaturel</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--kekkai" id="kekkai">
                <div class="card_forward">
                    <strong>Kekkai Sensen</strong>
                    <p>Episodes: 24</p>
                    <p>Genres: Action - Aventure - Comédie - Drame - Fantasy - Science-fiction - Seinen - Surnaturel</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--horimya" id="horimya">
                <div class="card_forward">
                    <strong>Horimya</strong>
                    <p>Episodes: 13</p>
                    <p>Genres: Comédie - Romance - School Life - Shônen - Slice of Life</p>
                    <p>Tier: B</p>
                </div>
            </div>

            <div class="card card--go" id="go">
                <div class="card_forward">
                    <strong>the quintessential quintuplets</strong>
                    <p>Episodes: 24</p>
                    <p>Genres: Comédie - Romance - School Life</p>
                    <p>Tier: S</p>
                </div>
            </div> -->

        </main>
        
        <!--La partie des cartes développées-->

        <div class="fullscreen">
            <div class="fullscreen-back"></div>
            <div class="fullscreen_description">

                <div class="fullscreen_description_wrap">
                    <div class="trailer_card">
                        <img src="../image/art/fullmetal_trailer.jpg">
                        <div class="play_button">
                            <img src="../image/play_button.jpg">
                        </div>
                    </div>

                    <div class="fullscreen_text fullscreen--fullmetal">
                        <strong>Fullmetal Alchemist: Brotherhood</strong>
                        <p>Episodes: 64</p>
                        <p>Genres: Action - Aventure - Comédie - Drame - Fantasy - Psychologique - Surnaturel - Thriller</p>
                        <p>Thèmes: Alchimie - Militaire - Steampunk</p>
                        <p>Synopsis: Edward Elric et son frère Alphonse Elric sont de jeunes Alchimistes. En tentant de ramener leur mère à la vie, ils ont payé un lourd tribut, et ils tentent désormais de récupérer ce qu'ils ont perdu. Pour cela, Edward est devenu Alchimiste d'État : le Fullmetal Alchemist. Mais au cours de leurs recherches, bien des épreuves attendent les deux frères et des êtres étranges : les Homonculus, les poursuivent.</p>
                        <p>Tier: A</p>
                    </div>
                </div>
                
            </div>
        </div>

        <div class="fullscreen ">
            <div class="fullscreen-back"></div>
            <div class="fullscreen_description">

                <div class="fullscreen_description_wrap">
                    <div class="trailer_card">
                        <img src="../image/art/grand_blue_trailer.jpg">
                        <div class="play_button">
                            <img src="../image/play_button.jpg">
                        </div>
                    </div>

                    <div class="fullscreen_text fullscreen--grand_blue">
                        <strong>Grand Blue</strong>
                        <p>Episodes: 12</p>
                        <p>Genres: Comédie - Ecchi - School Life - Slice of Life</p>
                        <p>Thèmes: Ecole - Quotidien</p>
                        <p>Synopsis: L'histoire se centre sur Kitahara Iori qui vient de déménager de son plein gré dans la ville côtière d'Izu. Durant son temps libre, il travaille dans la boutique de plongée de son oncle où des étudiants à l'université, passionnés de plongée, y traînent.   Il découvre qu'à l'université on passe plus de temps à draguer les filles et à s'amuser avec ses amis plutôt qu'à étudier. Ainsi, un nouveau chapitre de sa vie s'est ouvert, rempli de plongée avec de jolies femmes.</p>
                        <p>Tier: S</p>
                    </div>
                </div>

            </div>
            </div>

        
            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/noragami_trailer.jpg">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>
                        
                        <div class="fullscreen_text fullscreen--noragami">
                            <strong>Noragami</strong>
                            <p>Episodes: 2 saisons de 12 épsiodes</p>
                            <p>Genres: Action - Aventure - Comédie - Fantastique - Fantasy - Shônen - Surnaturel</p>
                            <p>Thèmes: Combats - Dieux / Déesses - Monstres</p>
                            <p>Synopsis: Yato est un dieu mineur dont le rêve est de devenir la divinité la plus vénérée du pays, avec son propre temple et ses cérémonies. Pour ce faire, il exauce n'importe quelle demande contre une rémunération de 5 yens.Au cours de l'une de ses missions, il manque de se faire écraser par un bus qu'il évite grâce à une lycéenne, Hiyori Iki. N'ayant pu éviter le véhicule, la jeune fille verra alors son âme se séparer de son corps lorsqu'elle s'endort. Refusant de rester dans cet état, Hiyori demandera à Yato de l'aider à retrouver son état originel. En attendant de trouver une solution, sa condition va lui permettre de découvrir un autre univers collé au sien, qui est aussi fascinant que dangereux : le monde des esprits.</p>
                            <p>Tier: B</p>
                        </div>
                    </div>
                    
                </div>
            </div>

        <div class="fullscreen">
            <div class="fullscreen-back"></div>
            <div class="fullscreen_description">

                <div class="fullscreen_description_wrap">
                    <div class="trailer_card">
                        <img src="../image/art/mha_trailer.jpg">
                        <div class="play_button">
                            <img src="../image/play_button.jpg">
                        </div>
                    </div>

                    <div class="fullscreen_text fullscreen--mha">
                        <strong>My Hero Academia</strong>
                        <p>Episodes: 1 saison de 13 épsiodes + 3 saisons de 25 épisodes</p>
                        <p>Genres: Action - Comédie - School Life - Surnaturel</p>
                        <p>Thèmes: Combats - Ecole - Super-héros - Super pouvoirs</p>                            
                        <p>Synopsis: Dans un monde où 80 % de la population possède un super‑pouvoir appelé alter, les héros font partie de la vie quotidienne. Et les super‑vilains aussi ! Face à eux se dresse l'invincible All Might, le plus puissant des héros ! Le jeune Izuku Midoriya en est un fan absolu. Il n'a qu'un rêve : entrer à la Hero Academia pour suivre les traces de son idole. Le problème, c'est qu'il fait partie des 20 % qui n'ont aucun pouvoir... Son destin est bouleversé le jour où sa route croise celle d'All Might en personne ! Ce dernier lui offre une chance inespérée de voir son rêve se réaliser. Pour Izuku, le parcours du combattant ne fait que commencer !</p>        
                        <p>Tier: S</p>
                    </div>
                </div>

            </div>
        </div>

        <div class="fullscreen">
            <div class="fullscreen-back"></div>
            <div class="fullscreen_description">

                <div class="fullscreen_description_wrap">
                    <div class="trailer_card">
                        <img src="../image/art/nogamenolife_trailer.jpg">
                        <div class="play_button">
                            <img src="../image/play_button.jpg">
                        </div>
                    </div>

                    <div class="fullscreen_text fullscreen--nogamenolife">
                        <strong>No Game No Life</strong>
                        <p>Episodes: 12</span></p>
                        <p>Genres: Aventure - Comédie - Ecchi - Fantastique - Fantasy</p>
                        <p>Thèmes: Autre monde - Jeux - Otaku</p>                          
                        <p>Synopsis: Sora et Shiro sont deux frère et sœur qui ont une vision du monde réel, qui se résume à un jeu guère intéressant. Ensemble, ils forment un duo de joueurs invaincus, véritable légende urbaine. Un jour, un garçon se qualifiant de "Dieu" les transporte dans un monde fantastique, où il a interdit toute forme de violence entre les 16 races différentes y vivant. À la place, toute décision ou conflit est réglé par le jeu. Les deux adolescents y sont convoqués car ils pourraient bien être les sauveurs de l'humanité, la race Imanity qui, classée dernière parmi les 16 races, se retrouve confinée dans leur seule et unique cité restante.</p>        
                        <p>Tier: A</p>
                    </div>
                </div>

            </div>
        </div>

        <div class="fullscreen">
            <div class="fullscreen-back"></div>
            <div class="fullscreen_description">

                <div class="fullscreen_description_wrap">
                    <div class="trailer_card">
                        <img src="../image/art/tkg_trailer.jpg">
                        <div class="play_button">
                            <img src="../image/play_button.jpg">
                        </div>
                    </div>

                    <div class="fullscreen_text fullscreen--tkg">
                        <strong>Tokyo Ghoul</strong>
                        <p>Episodes: 2 saisons de 12 épisodes + Tokyo Ghoul:Re </p>
                        <p>Genres: Action - Drame - Horreur - Mature - Mystère - Psychologique - Surnaturel</p>
                        <p>Thèmes: Gore - Monstres</p>
                        <p>Synopsis: Plusieurs cadavres mutilés ont été retrouvés par la police qui recherche vainement un coupable. Quelques spécialistes évoquent les goules, créatures monstrueuses qui chassent les humains pour les manger. Kaneki Ken, jeune homme de 18 ans étudiant à l'université, ne se préoccupe pas plus que ça de ces incidents, mais la réalité va le rattraper ! En effet, la jolie fille pour laquelle il a eu le coup de foudre dans un café et avec qui il sort n'est autre que la goule qui sévit dans le quartier ! Celle-ci tente de le dévorer et lui broie l'abdomen, mais elle est achevée par la chute de poutres en métal d'un chantier avant d'avoir pu mettre son sinistre dessein à exécution. Les médecins qui retrouvent Kaneki à moitié mort ne trouvent pas d'autre moyen pour le sauver que de transplanter les organes du monstre dans son corps ! Après son opération, le jeune homme constate avec horreur qu'il se transforme petit à petit en goule...</span></p>
                        <p>Tier: B</p>
                    </div>
                </div>

            </div>
        </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/rezero_trailer.jpg"/>
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--rezero">
                            <strong>Re:zero</strong>
                            <p>Episodes: 2 saisons de 26 épisodes</p>
                            <p>Genres: Comédie - Drame - Fantasy - Psychologique - Romance - Thriller</p>
                            <p>Thèmes: Autre monde - Combats - Voyage temporel</p>
                            <p>Synopsis: Un jour un jeune homme nommé Natsuki Subaru, à la sortie d'une supérette, est transporté dans un monde parallèle sans aucune explication. En essayant de comprendre pour quoi il se trouve ici, Subaru est attaqué par une bande de brigands mais est sauvé par une jeune fille : Emilia. Pour la remercier de l'aide qu'elle lui a fourni, il décide à son tour de l'aider à retrouver une voleuse qui lui a dérobé quelque chose. Un beau jour, Emilia et Subaru sont attaqués et tués par une mystérieuse personne. Cependant, Subaru se réveille au lieu et au jour où il est arrivé dans ce monde. C'est à ce moment-là qu'il se rend compte qu'il peut retourner dans le passé après être mort. Pour échapper à son funeste destin, Subaru décide d'utiliser son pouvoir pour sauver Emilia et pour se sauver lui-même.</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                 </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/opm_trailer" alt=""/>
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                    <div class="fullscreen_text fullscreen--opm">
                        <strong>One Punch Man</strong>
                        <p>Episodes: 2 saisons de 12 épisodes</p>
                        <p>Genres: Action - Comédie - Science-fiction - Seinen - Surnaturel</p>
                        <p>Thèmes: Aliens / Extra-terrestres - Arts martiaux - Combats - Cyborgs - Monstres - Parodie - Super-héros - Super pouvoirs</span></p>
                        <p>Synopsis: Saitama est un homme tout ce qu'il y a de plus banal, du moins, en apparence. En effet, malgré sa carrure, plutôt frêle, c'est un super-héros redoutablement efficace puisqu'il terrasse tous ses ennemis en un seul coup ! Malheureusement, cette puissance colossale est un problème pour Saitama, qui s'ennuie, et cherche désespérément un adversaire à sa mesure.</p>
                        <p>Tier: S</p>
                    </div>
                </div>

                </div>
            </div>

        
            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/overlord_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                    <div class="fullscreen_text fullscreen--overlord">
                        <strong>Overlord</strong>
                        <p>Episodes: 3 saisons de 13 épisodes</p>
                        <p>Genres: Action - Aventure - Fantasy - Science-fiction - Seinen</p>
                        <p>Thèmes: Autre monde - Combats - Jeux - Monde virtuel</p>
                        <p>Synopsis: L'histoire débute dans un jeu qui se nomme Yggdrasil, le jeu le plus populaire du moment. Cependant ce dernier décide de fermer ses serveurs à minuit. Nous suivons alors un joueur sous le pseudonyme de Momonga. Ce dernier est le chef de la guilde et décide, tout seul, d'attendre jusqu'à la fermeture du jeu. Problème, alors que minuit vient de passer, notre cher Momonga est toujours dans le jeu. C'est alors qu'il remarque rapidement que ce n'est plus le jeu auquel il passait ses journées. Les commandes du jeux n'existent plus et les PNJ sont devenus des êtres ayant des sentiments et une existence qui leur sont propres. Bien que désorienté, Momonga prend rapidement les choses en main et décide de faire de son nom une légende grâce à ses Gardiens de niveaux.</p>
                        <p>Tier: A</p>
                    </div>
                </div>
                    
                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/tensura_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                    <div class="fullscreen_text fullscreen--tensura">
                        <strong>Tensei Shitara Slime Datta Ken</strong>
                        <p>Episodes: 2 saisons de 24 et 12 épisodes</span></p>
                        <p>Genres: Action - Aventure - Comédie - Drame - Fantasy - Seinen</span></p>
                        <p>Thèmes: Autre monde - Monstres - Réincarnation</span></p>
                        <p>Synopsis: Satoru, employé de bureau lambda, se fait assassiner par un criminel en pleine rue. Son histoire aurait dû s'arrêter là, mais il se retrouve soudain réincarné dans un autre monde sous la forme d'un Slime, le monstre le plus faible du bestiaire fantastique. Son nouveau corps est équipé de deux compétences uniques : « Prédateur », lui permettant de récupérer les aptitudes de ses adversaires, et « Grand sage », grâce à laquelle il acquiert une compréhension aigüe de son environnement. Mais même muni de ces armes, ses chances de survie semblent encore limitées...</p>
                        <p>Tier: S</p>
                    </div>
                </div>

                </div>
            </div>

    
            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/dororo_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                    <div class="fullscreen_text fullscreen--dororo">
                        <strong>Dororo</strong>
                        <p>Episodes: 24</p>
                        <p>Genres: Action - Aventure - Fantastique - Historique - Surnaturel</p>
                        <p>Thèmes: Démons - Handicap - Histoire - Samouraïs - Vengeance</p>
                        <p>Synopsis: Hyakkimaru est infirme : 48 parties de son corps ont été vendues à autant de démons avant sa naissance. Rafistolé par un chirurgien compatissant, adolescent, il se découvre d'étranges pouvoirs psychiques. Accompagné de Dororo, un petit voleur espiègle, il arpente le Japon à la recherche d'un endroit où vivre en paix... affrontant au passage esprits et forces obscures.</p>
                        <p>Tier: B</p>
                    </div>
                </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/sakamoto_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                    <div class="fullscreen_text fullscreen--sakamoto">
                        <strong>Sakamoto desu ga ?</strong>
                        <p>Episodes: 12</p>
                        <p>Genres: Comédie - School Life</p>
                        <p>Thèmes: Ecole - Parodie</span></p>
                        <p>Synopsis: Sakamoto, en première année, est l'élève le plus cool de son lycée, ce qui le rend très populaire auprès des jeunes filles. Les garçons, quant à eux, le jalousent et rêvent de lui faire "payer son arrogance". Pour cela, tout est bon : intimidations, tentative d'humiliation, etc... Mais rien de cela ne fonctionne sur Sakamoto qui, en plus, se sort de toutes les situations en devenant toujours plus cool.</p>
                        <p>Tier: B</p>
                    </div>
                </div>

                </div>
            </div>


            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/darling_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--darling">
                            <strong>Darling in the Franxx</strong>
                            <p>Episodes: 24</p>
                            <p>Genres: Action - Drame - Psychologique - Romance - Science-fiction - Surnaturel</p>
                            <p>Thèmes: Adolescence - Amour - Dystopie - Démons - Mechas - Militaire - Robots - Triangle amoureux</p>
                            <p>Synopsis: L'histoire se déroule dans un univers où la Terre n'est plus qu'un immense désert balayé par les vents. Pour survivre, les humains ont bâti des écosystèmes mobiles et immenses, protégés par un dôme et baptisés "Plantation". Mais ces structures, sont régulièrement menacées par les Kyôryû (Klaxosaur) des créatures extrêmement dangereuses attirées par les matières forées par les Plantations. Les FRANXX, unités mobiles contrôlées par deux pilotes, sont les seules armes efficaces contre les Kyôryû. Malheureusement, elles sont rares car les pilotes, toujours un homme et une femme, doivent être parfaitement synchronisés pour les contrôler. Hiro, ou Code 016, a été entraîné pour devenir pilote au sein de la Plantation 13. Il n'a cependant jamais pu se coordonner avec sa partenaire et a perdu tout espoir. Jusqu'au jour où il croise Zero Two, une étrange jeune fille avec laquelle il est capable de piloter.</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>


            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/parasyte_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--parasyte">
                            <strong>Parasyte</strong>
                            <p>Episodes: 24</p>
                            <p>Genres: Action - Drame - Horreur / Épouvante - Psychologique - Romance - School Life - Science-fiction</p>
                            <p>Thèmes: Aliens / Extra-terrestres - Combats - Crime - Gore - Guerre - Scientifique</p>
                            <p>Synopsis: Jusqu'à ce jour où de mystérieuses sphères, abritant d'étranges parasites, se répandent un peu partout sur Terre. Rapidement, les entités prennent possession de certains habitants. Nul ne sait d'où elles viennent, mais ce qui semble certain, c'est qu'elles sont là pour débarrasser le monde de l'espèce humaine. Shinichi, jeune lycéen, est un « hôte » dont le cerveau a miraculeusement été épargné : et pour cause, Migi, son parasite, a pris possession de son bras droit ! Ce cas exceptionnel va déboucher sur une singulière cohabitation. Car au-delà de la fusion physique opérée entre Migi et Shinichi, qui partagent désormais le même corps et la même vie, va se développer un lien d'attachement particulier où les deux êtres vont apprendre chacun l'un de l'autre. Alors que Shinichi se découvre doté d'incroyables facultés physiques, il prend aussi conscience de la menace qui plane sur ses proches... et sur l'humanité tout entière.</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/erased_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--erased">
                            <strong>Erased</strong>
                            <p>Episodes: 12</p>
                            <p>Genres: Drame - Mature - Mystère - Psychologique - Romance - Slice of Life - Surnaturel - Tragique</p>
                            <p>Thèmes: Crime - Nostalgie - Police - Voyage temporel</p>
                            <p>2006. Aspirant mangaka dont la carrière peine à décoller, Satoru Fujinuma travaille comme livreur de pizzas pour joindre les deux bouts. Effacé et peu enclin à s'ouvrir aux autres, il observe le monde qui l'entoure sans vraiment y prendre part. Pourtant, Satoru possède un don exceptionnel : à chaque fois qu'un incident ou une tragédie se déroule près de lui, il est projeté quelques minutes dans le passé pour empêcher l'inévitable avant qu'il se produise... Cette anomalie de l'espace-temps lui vaut un séjour à l'hôpital le jour où, pour rattraper le conducteur d'un camion fou, il est percuté par un autre véhicule de plein fouet. Après l'accident, petit à petit, les souvenirs effacés de l'enfance traumatisante de Satoru resurgissent...</p>        
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/april_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--april">
                            <strong>Your lie in April</strong>
                            <p>Episodes: 24</p>
                            <p>Genres:Drame - Romance - Slice of Life</p>
                            <p>Thèmes: Amitié - Ecole - Musique - Quotidien</p>
                            <p>Arima Kosei est un véritable prodige du piano : enfant, il dominait tous ses rivaux lors des concours et s'était déjà fait un nom dans le domaine musical. Mais, après la mort de sa mère, il sombre dans une forte dépression qui l'amène à être dégoûté de son propre instrument. Deux ans après le drame, continuant de considérer sa vie comme insipide, Arima se contente de vivre sa vie sans réel but... jusqu'à ce qu'il rencontre Miyazono Kaori, jeune violoniste extravertie qui, elle aussi, semble exceller dans son art...</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/youjo_senki_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--youjo_senki">
                            <strong>Youjo Senki</strong>
                            <p>Episodes: 12</p>
                            <p>Genres: Action - Fantastique - Mature</p>
                            <p>Thèmes: Autre monde - Dieux / Déesses - Gender Bender - Guerre - Magie - Militaire - Réincarnation</p>
                            <p>Dans ce monde où la guerre fait rage, Tanya Degurechaff, une jeune fille sans pitié et fine stratège, se retrouve à la tête d'une armée. Dans sa vie précédente, Tanya était en réalité un salarié qui s'est vu réincarner dans ce nouveau corps comme punition après avoir enrager "Dieu". À présent, Tanya souhaite plus que tout devenir la personne la plus puissante au sein de l'armée impériale des mages.</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/shield_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--shield">
                            <strong>The Rising of the Shield Hero</strong>
                            <p>Episodes: 25</p>
                            <p>Genres: Action - Aventure - Drame - Fantasy - Psychologique - Romance</p>
                            <p>Thèmes: Autre monde - Magie - Monstres - Vengeance</p>
                            <p>Naofumi se voit un jour invoqué dans un monde fantastique avec trois autres personnes afin de devenir les héros de ce monde. Dès leur arrivée, chacun se retrouve équipé d'une des quatre armes légendaires où Naofumi hérite d'un simple bouclier considéré comme le plus inutile des quatre équipements. En raison de son manque de charisme, Naofumi finit malheureusement avec une seule coéquipière tandis que les autres en avaient plusieurs. Et comme si cela ne suffisait pas, lors du deuxième jour, il a été trahi, accusé à tort et volé par ladite partenaire. Méprisé de tous, du roi aux paysans, le jeune homme ne pense désormais plus qu'à se venger !</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/prison_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--prison">
                            <strong>Prison School</strong>
                            <p>Episodes: 12</p>
                            <p>Genres: Comédie - Ecchi - Romance - School Life - Seinen</p>
                            <p>Thèmes: Ecole - Harem - Prison</p>
                            <p>Le lycée Hachimitsu est réputé pour être un des plus sévères du pays. Jusqu'à cette année, il était réservé aux filles, mais les garçons y sont désormais autorisés. Seulement, comme c'est l'année-test, ils ne sont que cinq dans tout l'établissement ! Kiyoshi est l'un d'eux. Il est particulièrement timide mais cherche à discuter avec des filles. Dès le premier jour, il fait connaissance avec Chiyo car la jeune fille est amatrice de sumo, tout comme lui. Mais à peine ont-ils lié amitié que ses quatre camarades garçons décident d'aller espionner les filles aux bains ! Kiyoshi acceptera-il de les accompagner, au risque de perdre la confiance de son amie ?</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>


            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/fire_force_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--fire_force">
                            <strong>Fire Force</strong>
                            <p>Episodes: 2 saisons de 24 épisodes</p>
                            <p>Genres: Action - Comédie - Drame - Science-fiction - Shônen - Surnaturel</p>
                            <p>Thèmes: Armée, démons, exorcisme, pompiers, religion</p>
                            <p>Suite à un phénomène inexplicable et surnaturel, certaines personnes se consument dans les flammes et s'attaquent à l'humanité. Pour faire face à ce danger, des brigades ont été mises sur pied : les Fire Brigade of Flames. Shinra Kusakabe, qui possède des compétences quelque peu particulières, est sur le point d'intégrer la huitième brigade !</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/knights_magic_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--knights_magic">
                            <strong>Knight's & Magic</strong>
                            <p>Episodes: 13</p>
                            <p>Genres: Action - Comédie - Fantasy - Romance</p>
                            <p>Thèmes: Autre monde - Guerre - Magie - Mechas - Médiéval - Réincarnation</p>
                            <p>Suite à un tragique accident de voiture, un jeune otaku fan de mecha meurt puis se réincarne dans le corps d'Ernesti Echevalier, surnommé Eru, tout en conservant ses souvenirs de sa vie antérieure. Peu à peu, Eru découvre qu'il est dans un autre monde et décide de travailler dur pour devenir pilote de Silhouette Knight, des armes humanoïdes qui le font rêver.</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/akame_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--akame">
                            <strong>Akame ga KILL!</strong>
                            <p>Episodes: 13</p>
                            <p>Genres: Action - Aventure - Comédie - Drame - Fantasy - Psychologique - Romance - Thriller</p>
                            <p>Thèmes: Assassinat - Combats - Gore - Organisations secrètes - Politique</p>
                            <p>Tatsumi, jeune combattant, se rendait à la capitale dans l'optique de sauver son village. Mais, naïf, il se fait dérober tout ce qu'il possède par une mystérieuse jeune fille et se retrouve sans un sou. Heureusement, une autre jeune fille, une noble, propose de l'accueillir chez elle pendant quelque temps. Cependant, la poisse semble coller à la peau de Tatsumi quand un groupe d'assassins débarque pour s'en prendre à sa protectrice... qui n'est pas aussi innocente qu'elle en a l'air.</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/k_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--k">
                            <strong>K-project</strong>
                            <p>Episodes: 2 saisons de 13 épisodes</p>
                            <p>Genres: Action - Comédie - Drame - Fantasy - Mystère - Surnaturel</p>
                            <p>Thèmes: Magie - Super pouvoirs</p>
                            <p>Yashiro Isana, surnommé Shirô, est un étudiant plutôt banal. Bien qu'il n'ait pas d'ami proche, il est très populaire sur le campus de Ashinaka High School, où il étudie, ce qui lui permet de manger gratuitement régulièrement. En effet, il a prit l'habitude de demander un peu de leur bento à ses camarades, qui se prêtent volontiers au jeu. En bref, Shirô est un étudiant comblé dans l'un des plus beaux campus du Japon. Mais cette tranquillité n'est que de courte durée. Alors qu'il a été envoyé faire une course dans Tôkyô par Kukuri, une de ses camarades de classe, Shirô se retrouve ciblé par un étrange groupe qui semble vouloir sa peau ! Et ce ne sont visiblement pas les seuls. Shirô ne comprend pas ce qu'il lui arrive jusqu'à ce qu'une étrange vidéo soit diffusée. Une vidéo où on le voit assassiner quelqu'un, avant de se donner le titre de "Septième Roi".</p>
                            <p>Tier: S</p>     
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/id_invaded_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--id_invaded">
                            <strong>ID:INVADED</strong>
                            <p>Episodes: 13</p>
                            <p>Genres: Drame - Mystère - Psychologique - Science-fiction - Thriller</p>
                            <p>Thèmes: Enquête</p>
                            <p>Sakaido, brillant détective, est la clé de voûte d'une unité spécialisée dans la traque et l'arrestation de tueurs en série. Son rôle est crucial, puisqu'il explore le subconscient des criminels au moyen d'une technologie révolutionnaire. Akihito Narihisago est le pendant de Sakaido dans le monde réel, mais il est très différent de son alter ego. À commencer par le fait qu'il ait lui-même déjà tué.</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/kakegurui_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--kakegurui">
                            <strong>Gambling School</strong>
                            <p>Episodes: 2 saisons de 12 épisodes</p>
                            <p>Genres: Action - Drame - Ecchi - Horreur / Épouvante - Mystère - Psychologique - School Life</p>
                            <p>Thèmes: Ecole - Jeu d'argent - Jeux</p>
                            <p>L'Académie privée de Hyakkaou est un établissement pour les personnes privilégiées un peu particulier. Quand vous êtes les enfants des plus riches des riches, ce n'est pas votre prouesse athlétique ou la sagesse des livres qui vous maintient tout en haut. C'est votre don pour les jeux d'argent. Quelle meilleure façon de perfectionner ses compétences qu'avec un programme rigoureux de jeu ? Dans l'Académie privée de Hyakkaou, les gagnants vivent comme des rois alors que les perdants sont condamnés à devenir des animaux de compagnie. L'histoire se centre sur Yumeko Jabami, une mystérieuse étudiante récemment transférée qui a plus d'un tour dans son sac, et de Suzui, un élève persécuté par Mary Saotome, une élève sadique qui prend un malin plaisir à détruire tous ses adversaires.</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/vinland_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--vinland">
                            <strong>Vinland Saga</strong>
                            <p>Episodes: 24</p>
                            <p>Genres: Action - Aventure - Drame - Historique</p>
                            <p>Thèmes: Combats - Histoire - Vengeance</p>
                            <p>Thorfinn est le fils de l'un des plus grands guerriers Vikings, mais quand son père est tué au combat par le chef mercenaire Askeladd, il jure de se venger. Thorfinn rejoint alors le groupe d'Askeladd pour le défier en duel. Cependant, il se retrouve pris au milieu d'une guerre pour la couronne d'Angleterre.</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/destructive_god_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--destructive_god">
                            <strong>Boku no Tonari ni Ankoku Hakaishin ga Imasu.</strong>
                            <p>Episodes: 12</p>
                            <p>Genres: Comédie - Romance - School Life - Slice of Life</p>
                            <p>Thèmes: Amitié - Ecole - Quotidien</p>
                            <p>L'histoire se centre sur Seri Koyuki, un lycéen ordinaire qui fait tout son possible pour éviter les personnes étranges. Malheureusement, il devient, malgré lui, ami avec l'excentrique Kabuto Hanadori. Cette personne, atteinte du syndrome chūnibyō, pense être un chevalier et que son cache-œil sert à sceller son sombre alter-égo : Michael Offenbarung Dunkelheit, un dieu de la destruction. Ainsi commence la vie de lycéen bien remplie de Seri, entouré de personnes plus déjantées les unes que les autres.</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/rettousei_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--rettousei">
                            <strong>Mahouka Koukou no Rettousei</strong>
                            <p>Episodes: 2 saisons de 26 et 12 épisodes</p>
                            <p>Genres: Comédie - Romance - School Life - Slice of Life</p>
                            <p>Thèmes: Combats - Cyber - Ecole - Magie</p>
                            <p>La "Magie" que nous connaissons n'est issue ni des légendes, ni des contes de fées. Elle est devenue une réelle technologie depuis près d'un siècle. Plusieurs pays de ce monde s'opposent dans une course à la formation de "Magiciens". Tatsuya Shiba est un étudiant sans capacités magiques inscrit au Premier Lycée de Magie; il y étudie avec sa sœur Miyuki, qui se trouve être la meilleure élève parmi les première années.</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/kabaneri_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--kabaneri">
                            <strong>Kabaneri of the Iron Fortress</strong>
                            <p>Episodes: 12</p>
                            <p>Genres: Action - Drame - Horreur / Épouvante - Mystère - Psychologique - Surnaturel</p>
                            <p>Thèmes: Combats - Monstres - Mort - Post-apocalyptique - Steampunk</p>
                            <p>L'histoire se déroule dans un monde chaotique où les humains tentent tant bien que mal de survivre face à une menace grandissante : les Kabane. Ces derniers, dont le cœur est en acier, dévorent tous les humains qu'ils croisent. Afin de se préserver de cette menace, les populations se sont réfugiées dans d'immenses forteresses baptisées stations, reliées entre elle par des trains blindés, les Hayajiro. Ikoma, qui a autrefois fuit face aux Kabane, vit désormais dans l'une de ces forteresses. Mais, à présent, il a la ferme intention de lutter pour survivre.</p>
                            <p>Tier: A</p>
                        </div>
                    </div> 

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/bungou_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--bungou">
                            <strong>Bungou Stray Dogs</strong>
                            <p>Episodes: 3 saisons de 12 épisodes</p>
                            <p>Genres: Mystère - Seinen - Surnaturel</p>
                            <p>Thèmes: Détective - Super pouvoirs</p>
                            <p>Atsushi Nakajima vient d'être exclu de son orphelinat, maintenant il n'a aucun endroit où aller et aucune nourriture. Tandis qu'il se tient près d'une rivière, étant sur le point de mourir de faim, il sauve un homme faisant une tentative de suicide. Cet homme est Osamu Dazai, lui et son partenaire Kunikida sont les membres d'une agence policière très spéciale. Ils possèdent des pouvoirs surnaturels et traitent les cas d'affaires qui sont trop dangereux pour la police ou l'armée.</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/kaguya_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--kaguya">
                            <strong>Kaguya-sama - Love is War</strong>
                            <p>Episodes: 2 saisons de 12 épisodes</p>
                            <p>Genres: Comédie - Drame - Romance - School Life - Seinen</p>
                            <p>Thèmes: Adolescence - Amour - Ecole</p>
                            <p>Kaguya Shinomiya, vice-présidente du conseil des élèves ne voit pas l'amour comme tout le monde. Pour elle, c'est un combat qu'elle doit livrer avec la personne dont elle est amoureuse, Miyuki Shirogane, qui n'est autre que le président du conseil des élèves et qui partage une vision de l'amour assez similaire. Bien que tous les deux éprouvent des sentiments réciproques, leur orgueil fait que le premier qui osera se déclarer devra alors se soumettre à l'autre...</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/seraph_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--seraph">
                            <strong>Owari no Seraph</strong>
                            <p>Episodes: 2 saisons de 12 épisodes</p>
                            <p>Genres: Action - Drame - Fantastique - Shônen - Surnaturel</p>
                            <p>Thèmes: Démons - Famille - Post-apocalyptique - Vampires</p>
                            <p>Un jour, un mystérieux virus décime chaque humain de plus de 13 ans. Au même moment, les vampires ont émergé et asservis les enfants, seuls survivants de l'épidémie. L'histoire nous entraîne au côté de Yûichirô Hyakuya, un esclave chargé de donner son sang à des aristocrates. Ayant perdu son frère lors de son évasion, Yûichirô se promet de tuer tous les vampires, et pour cela, il rejoint la résistance pour délivrer les esclaves.</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/iwgp_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--iwgp">
                            <strong>Ikebukuro West Gate Park</strong>
                            <p>Episodes: 12</p>
                            <p>Genres: Drame - Mystère</p>
                            <p>Thèmes: Délinquance - Enquête - Société</p>
                            <p>Bienvenue à Ikebukuro West Gate Park. Un square ouvert aux aventuriers urbains, à la sortie ouest de la gare d'lkebukuro. C'est là que Makoto et ses amis ont établi leur QG. Makoto a dix-neuf ans, et c'est un trouble shooter, un "solutionneur d'embrouilles". Des embrouilles, il n'en manque pas dans ce quartier où se rencontrent gamins à la dérive, yakuzas, filles perdues et clandestins dans le Japon de l'envers. Avec pour seules armes son énergie et sa débrouillardise, Makoto résout les énigmes, vient en aide à ceux qui sont dans la détresse, et tente de ramener la paix dans les rues menacées par une sanglante guerre des gangs.</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/hxh_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--hxh">
                            <strong>Hunter X Hunter</strong>
                            <p>Episodes: 148</p>
                            <p>Genres: Aventure - Comédie - Drame - Fantasy - Shônen - Surnaturel - Thriller - Tournois</p>
                            <p>Thèmes: Combats - Crime - Gore - Jeux - Super pouvoirs</p>
                            <p>Le jeune Gon vit sur une petite île avec sa tante. Abandonné par son père qui est un Hunter, à la fois un aventurier et un chasseur de primes, Gon décide à l'âge de 12 ans de partir pour devenir un Hunter. Cela ne sera pas chose aisée, il devra passer une suite de tests et examens en compagnie de milliers d'autres prétendants au titre de Hunter. Il sera aidé par de nouvelles connaissances qui aspirent au même but que lui, telles que Kurapika, Leorio et Killua.</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/code_geass_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--code_geass">
                            <strong>Code Geass</strong>
                            <p>Episodes: 2 saisons de 25 épisodes</p>
                            <p>Genres: Action - Drame - Psychologique - Romance - Science-fiction - Surnaturel - Thriller</p>
                            <p>Thèmes: Ecole - Guerre - Mechas - Militaire - Politique - Pouvoirs psychiques - Univers alternatif - Vengeance</p>
                            <p>Le 10 juin 2010 du calendrier impérial, le Nouvel Empire de Britannia a écrasé les forces japonaises et a conquis le pays en moins d'un mois grâce à ses mechas nommés Knightmare. Le Japon a perdu sa liberté et a été renommé Zone 11 tandis que les japonais ont perdu leur identité et sont appelés "Elevens". Ces derniers sont forcés de vivre dans des ghettos tandis que les colons britanniens occupent la majeure partie du territoire. Pourtant, des mouvements rebelles naissent et les nationalistes japonais continuent la lutte pour l'indépendance. Un jeune homme nommé Lelouch s'est juré de détruire l'empire de Britannia depuis que son père, l'empereur lui-même, n'a rien fait pour pourchasser les terroristes qui ont tué sa mère et estropié sa jeune sœur. Sept ans plus tard, lors d'une altercation entre les deux camps, il rencontre un groupe de rebelles Elevens qui ont volé un secret militaire : une mystérieuse jeune fille. En entrant en contact avec elle, Lelouch obtient le Geass, un pouvoir qui lui permet de contrôler la pensée de toutes les personnes qui croisent son regard, mais qui ne fonctionne qu'une seule fois sur chacune d'elles. Grâce à ce pouvoir, Lelouch va pouvoir mener le combat qu'il a toujours voulu contre Brittania et poursuivre ses deux rêves : venger sa mère et créer un monde où sa sœur pourra vivre en paix.</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/stone_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--stone">
                            <strong>Dr Stone</strong>
                            <p>Episodes: 2 saisons</p>
                            <p>Genres: Action - Aventure - Drame - Fantastique - Science-fiction - Shônen</p>
                            <p>Thèmes: Post-apocalyptique - Scientifique - Voyage temporel</p>
                            <p>Un jour, une lumière brillante apparaît subitement dans le ciel pétrifiant en une fraction de seconde l'humanité entière. Des millénaires plus tard, Taiju parvient à briser son enveloppe de pierre et découvre un monde où le genre humain a disparu de la surface de la terre. Avec son ami Senku, ils décident de récréer la civilisation à partir de zéro !</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/assassination_classroom_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--assassination_classroom">
                            <strong>Assassination Classroom</strong>
                            <p>Episodes: 2 saisons de 22 et 25 épisodes</p>
                            <p>Genres: Action - Comédie - Drame - Surnaturel</p>
                            <p>Thèmes: Assassinat - Ecole</p>
                            <p>La planète Terre est en sursis ! Après avoir partiellement détruit la Lune, un être étrange et surpuissant a décrété que si personne ne parvenait à le tuer dans l'année à venir, la planète subirait le même sort que son satellite. Durant ce laps de temps, il a également exigé d'être nommé professeur de la classe 3-E du lycée Kunugigaoka, aussi connue sous le nom de "Class End", la classe des cas désespérés. Les étudiants sont donc les mieux placés pour tuer cet étrange professeur, baptisé Koro-sensei, et ainsi empocher la somme astronomique de 10 milliards de yens. L'ennui, c'est que la majorité des lycéens de cette classe manquent cruellement de confiance en eux, écrasés par un système qui ne leur convient pas.</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/demon_slayer_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--demon_slayer">
                            <strong>Demon Slayer</strong>
                            <p>Episodes: 26</p>
                            <p>Genres: Aventure - Fantastique - Historique - Surnaturel</p>
                            <p>Thèmes: Combats - démon - épéiste - famille</p>
                            <p>Depuis les temps anciens, il existe des rumeurs concernant des démons mangeurs d'hommes qui se cachent dans les bois. Pour cette raison, les citadins locaux ne s'y aventurent jamais la nuit. La légende raconte aussi qu'un tueur de démons déambule la nuit, chassant ces démons assoiffés de sang. Pour le jeune Tanjirou, ces rumeurs vont bientôt devenir sa dure réalité ...  Depuis la mort de son père, Tanjirou a pris sur lui pour subvenir aux besoins de sa famille. Malgré cette tragédie, ils réussissent à trouver un peu de bonheur au quotidien. Cependant, ce peu de bonheur se retrouve détruit le jour où Tanjirou découvre que sa famille s'est faite massacrer et que la seule survivante, sa sœur Nezuko, est devenue un démon. À sa grande surprise, Nezuko montre encore des signes d'émotion et de pensées humaines. Ainsi, commence la dure tâche de Tanjirou, celle de combattre les démons et de faire redevenir sa sœur humaine.</p>
                            <p>Tier: S</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/fate_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--fate">
                            <strong>Fate/stay night : Unlimited Blade Works</strong>
                            <p>Episodes: 25</p>
                            <p>Genres: Action - Drame - Fantasy - Psychologique - Romance - Surnaturel</p>
                            <p>Thèmes: Combats - Magie - Mythologie</p>
                            <p>Shirô Emiya est le fils adoptif de Kiritsugu Emiya, un mage ayant déjà participé à la "Guerre du Saint Graal". Cette guerre oppose 7 mages et 7 Servants, des "âmes héroïques" ramenés à la vie le temps des combats. 10 ans après son père, Shirô participera à une nouvelle guerre entre mages, accompagné du Servant de classe Saber.</p>
                            <p>Tier: S</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/death_note_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--death_note">
                            <strong>Death Note</strong>
                            <p>Episodes: 37</p>
                            <p>Genres: Drame - Fantastique - Mystère - Psychologique - Surnaturel - Thriller</p>
                            <p>Thèmes: Crime - Détective - Justice - Mort - Police - Shinigami</p>
                            <p>Light Yagami, un jeune étudiant surdoué, ramasse un jour le "Death Note", un carnet tenu auparavant par un shinigami (Dieu de la mort), Ryuk, qui apparemment s'ennuyait dans son monde. Il suffit d'écrire le nom d'une personne dans ce carnet, et celle-ci meurt (selon certaines conditions que le shinigami expliquera à Light lors de leur rencontre). C'est ainsi qu'avec le "Death Note" entre les mains, Light décide de débarrasser la planète de tous les criminels pour en faire un monde juste, un monde parfait. Cependant, qui est-il pour juger les gens ? Il devient donc le pire criminel recherché de toute la planète...</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/snk_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--snk">
                            <strong>Attack on Titan</strong>
                            <p>Episodes: 4 saisons de 25, 12, 22, 16 épisodes</p>
                            <p>Genres: Action - Drame - Horreur / Épouvante - Mystère - Psychologique - Shônen - Surnaturel - Thriller</p>
                            <p>Thèmes: Gore - Militaire - Post-apocalyptique - Steampunk</p>
                            <p>Il y a 107 ans, les Titans ont presque exterminé la race humaine. Ces Titans mesurent principalement une dizaine de mètres et ils se nourrissent d'humains. Les humains ayant survécus à cette extermination ont construit une cité fortifiée avec des murs d'enceinte de 50 mètres de haut pour pouvoir se protéger des Titans. Pendant 100 ans les humains ont connu la paix. Eren est un jeune garçon qui rêve de sortir de la ville pour explorer le monde extérieur. Il mène une vie paisible avec ses parents et sa sœur Mikasa dans le district de Shiganshina. Mais un jour de l'année 845, un Titan de plus de 60 mètres de haut apparaît. Il démolit une partie du mur du district de Shiganshina et provoque une invasion de Titans. Eren verra sa mère se faire dévorer sous ses yeux sans rien pouvoir faire. Il décidera après ces événements traumatisants de s'engager dans les forces militaires de la ville avec pour but d'exterminer tous les Titans qui existent.</p>
                            <p>Tier: GOD</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/haikyuu_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--haikyuu">
                            <strong>Haikyū!!</strong>
                            <p>Episodes: 3 saisons de 25 épisodes</p>
                            <p>Genres: Action - Comédie - Shônen - Tournois</p>
                            <p>Thèmes: Ecole - Sport - Volley-ball</p>
                            <p>Shôyô Hinata, surnommé Shô, aime plus que tout jouer au volley-ball et ce, malgré sa petite taille. Malheureusement, suite à une sévère défaite, son club de collège a été dissous, tous les membres étant partis. Mais Shô est bien décidé à jouer de nouveau et choisit son futur lycée en fonction de son ambition. Il intègre donc le lycée Karasuno, où a joué son idole, le Petit Géant, tout en espérant faire aussi bien que lui.</p>
                            <p>Tier: S</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/black_butler_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--black_butler">
                            <strong>Black Butler</strong>
                            <p>Episodes: 3 saisons de 25 épisodes</p>
                            <p>Genres: Drame - Surnaturel</p>
                            <p>Thèmes: Anges - Démons - Détective - Gore - Histoire - Shinigami - Vengeance</p>
                            <p>Lorsqu'on le regarde au début, ce manoir perdu dans la campagne de Londres parait tout à fait normal. Mais ce manoir est habité par des personnes pour le moins étranges : Ciel Phantomhive (Funtomhive) jeune maître de 12 ans, industriel hors-pair à la tête de la famille la plus redoutée de l'Angleterre ; un majordome démoniaque, Sebastian Michaelis, doué pour les tâches ménagères comme pour les arts-martiaux ; un maître d'hôtel, Tanaka, qui ne sait rien faire d'autre que boire du saké et dire "oh oh oh" ; un cuisinier aux plats douteux, Bard, ne sachant cuisiner sa viande qu'au lance-flammes ; une servante, May Lin, tellement maladroite qu'elle pourrait vous tuer sans le vouloir ; et un jardinier, Finnian, à la force surhumaine, qui se croit à démolition land qui ne sait donc entretenir un jardin qu'en le dévastant. Et lorsque tout ce petit monde a affaire à des personnages aussi peu recommandable que Jack L'éventreur, forcément, ça fait tâche...</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/nanatsu_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--nanatsu">
                            <strong>Nanatsu no Taizai</strong>
                            <p>Episodes: 4 saisons de 24 épisodes</p>
                            <p>Genres: Action - Aventure - Comédie - Fantasy - Romance - Shônen - Surnaturel</p>
                            <p>Thèmes: Combats - Démons - Magie</p>
                            <p>Les "Seven Deadly Sins" sont un groupe de chevaliers qui ont conspiré pour renverser le royaume de Britannia. Ils ont été éradiqués par les Chevaliers Sacrés, cependant certaines rumeurs laissent prétendre qu'ils sont toujours en vie. Dix ans plus tard, les Chevaliers Sacrés ont fait un coup d'état, emprisonnant le Roi pour devenir les nouveaux dirigeants tyranniques du Royaume. Elizabeth, la troisième fille du Roi, passe ses journées à la recherche des "Seven Deadly Sins", les seules personnes capables de récupérer le Royaume des mains de ces tyrans. Durant ses recherches, elle perd conscience dans la taverne de Meliodas, un jeune garçon parcourant le monde en compagnie de son cochon. Rapidement, Elizabeth va se rendre compte que Meliodas n'est pas qu'un simple propriétaire de taverne, mais une personne à la puissance démesurée.</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/free_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--free">
                            <strong>Free!</strong>
                            <p>Episodes: 2 saisons de 12 épisodes + 1 saisons de 13 épisodes</p>
                            <p>Genres: School Life - Slice of Life</p>
                            <p>Thèmes: Amitié - Club - Ecole - Sport</p>
                            <p>Free ! nous immerge dans le monde de la natation et nous conte l'histoire de Haruka Nanase, un passionné de natation. En primaire, il intègre le club de natation et fait la connaissance de Makoto Tachibana, Nagisa Hazuki et Rin Matsuoka. Peu avant qu'ils ne soient diplômés, le groupe remporte un tournoi de natation. Par la suite le groupe s'est séparé, chacun ayant intégré un collège différent. Haruka mène une vie paisible et intègre un peu plus tard le lycée Iwatobi. Sa vie semble presque banale jusqu'au jour où Rin, parti à l'étranger pour perfectionner ses techniques de nage, revient au Japon et le défie dans un match de natation. Ce dernier, subjugué par la maîtrise et la puissance de son ancien ami, qui n'est plus celui qu'il avait connu enfant, est écrasé par cette force insoupçonnée, et perd le match.   Malgré tout, Rin reste profondément insatisfait de sa victoire, persuadé qu'il n'a pas réellement gagné, et rejoint le club de natation de son lycée pour défier à nouveau ses anciens camarades. Ceux-ci vont fonder leur propre club de natation avec un quatrième membre, Rei Ryugazaki (qui ne sait pas nager...) A eux quatre, ils fondent le club de natation du lycée Iwatobi, où amour de la nage et amitié s'entremêleront.</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/goblin_slayer_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--goblin_slayer">
                            <strong>Goblin Slayer</strong>
                            <p>Episodes: 12</p>
                            <p>Genres: Action - Aventure - Drame - Fantasy - Psychologique</p>
                            <p>Thèmes: Combats - Démons - Elfe - Gore - Monstres</p>
                            <p>Une jeune prêtresse vient de former son premier groupe d'aventuriers, cependant ils se trouvent rapidement dans une situation dangereuse. Attaqués par une troupe de gobelins, ils se font sauver par le "Goblin Slayer", une personne qui voue sa vie à l'extermination des gobelins, et par n'importe quel moyen.</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/kuroko_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--kuroko">
                            <strong>Kuroko no Basket</strong>
                            <p>Episodes: 3 saison de 25 épisodes</p>
                            <p>Genres: Comédie - Drame - Shônen - Tournois</p>
                            <p>Thèmes: Basketball - Ecole - Sport</p>
                            <p>La Génération Miracle, la fameuse équipe du collège Teikou composée de cinq génies. Une légende raconte qu'un sixième membre fantôme aurait fait partie de cette équipe, un membre que les cinq autres respectaient et considéraient comme leur supérieur. C'est la rentrée des classes au lycée Seirin et le club de basket compte désormais dans ses rangs Taiga Kagami, joueur impulsif et prometteur revenu d'Amérique, qui rêve d'écraser la Génération Miracle et devenir le numéro 1 du Japon, et Kuroko Tetsuya, garçon très effacé que personne ne remarque et peu doué pour le basket. Ce dernier aurait pourtant fait partie de la fameuse équipe de Teikou, à la grande surprise de tout le monde. Très vite, Kuroko s'intéressera à Kagami et décidera de l'aider à devenir le meilleur du Japon...</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/millionaire_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--millionaire">
                            <strong>The Millionaire Detective - Balance: Unlimited</strong>
                            <p>Episodes: 11</p>
                            <p>Genres: Drame - Mystère - Thriller</p>
                            <p>Thèmes: Crime - Enquête</p>
                            <p>L'histoire se centre sur Daisuke Kanbe, un millionnaire résolvant des affaires de manière non conventionnelle. Dans ce cadre, il se retrouve affecté à l'unité opérationnelle des crimes modernes, une unité créée pour éloigner les officiers problématiques des autres. C'est ainsi qu'il fait la rencontre de Haru Kato, son nouveau partenaire. Alors qu'ils doivent travailler ensemble, Kato repousse Kanbe car il ne partage sa vision des choses. Pendant ce temps, de mystérieux incidents se produisent. Comment ces personnes que tout semble opposer vont réussir à résoudre des affaires ?</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/elite_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--elite">
                            <strong>Classroom of the Elite</strong>
                            <p>Episodes: 12</p>
                            <p>Genres: Comédie - Drame - School Life - Slice of Life</p>
                            <p>Thèmes: Ecole - Quotidien</p>
                            <p>L'histoire prend place dans le lycée Kōdo Ikusei, une école prestigieuse dotée d'installations ultramodernes où 100% des étudiants vont ensuite à l'université ou entrent dans la vie active. Les élèves ont une liberté totale, ils peuvent avoir la coupe de cheveux qu'ils désirent et apporter n'importe quel bien personnel dans l'établissement. Kōdo Ikusei est comme le paradis, mais seulement en apparence, en effet seulement les étudiants avec de bons résultats reçoivent ce genre de traitement. Dans cette école, chaque mois, selon les notes et le comportement d'une classe, celle-ci se voit attribuer un nombre de points en conséquence. Ces points permettent l'achat en tout genre au sein de l'école (nourriture, jeux, consoles, ...). De plus chaque groupe est classé en fonction du nombre de points reçus. Kiyotaka Ayanokōji est un élève de la classe D, regroupant les pires élèves de l'établissement, ceux avec les résultats les plus mauvais. Pour une certaine raison, Kiyotaka a été négligent durant les examens d'entrée et a donc été placé dans cette fameuse classe. Après avoir rencontré Suzune Horikita et Kikyō Kushida, deux élèves de sa classe, Kiyotaka Ayanokōji et ses nouvelles camarades décident ensemble de coopérer afin d'améliorer les notes de leur classe et essayeront d'atteindre les classes supérieures.</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/moriarty_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--moriarty">
                            <strong>Moriarty the Patriot</strong>
                            <p>Episodes: 2 saison de 11 et 12 épisodes</p>
                            <p>Genres: Biographique - Drame - Historique - Mystère</p>
                            <p>Thèmes: Assassinat</p>
                            <p>Deux frères orphelins sont accueillis dans la famille Moriarty, grâce aux ambitions cachées du fils aîné Moriarty, Albert. Ce dernier abhorre l'aristocratie à laquelle il appartient et le système social qui régit la société britannique. Albert a vu en l'aîné l'intelligence et le charisme dont il avait besoin pour accomplir son rêve de nettoyer la société de ces "êtres inutiles et sales". Albert propose de leur offrir sa richesse et son influence à condition que les garçons mettent leur intelligence au service de son rêve. 13 ans plus tard, à côté de leurs activités officielles, les frères Moriarty sont devenus des "conseillers privés". Avec William à leur tête, ils aident les gens du peuple, victimes d'injustices, à se venger des riches qui les ont fait souffrir. Leur sanction est impitoyable, car la punition qu'ils infligent n'est autre que...la mort !</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/kill_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--kill">
                            <strong>Kill la Kill</strong>
                            <p>Episodes: 24</p>
                            <p>Genres: Action - Comédie - Drame - Ecchi - Fantastique - Fantasy - School Life - Science-fiction</p>
                            <p>Thèmes: Assassinat - Combats - Ecole - Super pouvoirs - Vengeance</p>
                            <p>L'académie Honnōji, un lycée dans lequel règne la peur et la terreur. Celui ci est gouverné par le redoutable conseil des élèves, qui ont la particularité d'utiliser des uniformes Goku. Ces derniers leurs permettent d'être plus fort que n'importe qui, et d'écraser quiconque se dresse sur leur route. Ryūko Matoi est une fille qui transporte avec elle une moitié de ciseaux géant, et recherche le possesseur de l'autre moitié qui s'avère être l'assassin de son père. Dans le but de trouver le meurtrier, Ryūko rentre dans l'académie Honnōji pour y défier Satsuki Kiryūin, la présidente du conseil des élèves...</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/guren_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--guren">
                            <strong>Tengen Toppa Gurren-Lagann</strong>
                            <p>Episodes: 27</p>
                            <p>Genres: Action - Aventure - Comédie - Drame - Romance - Science-fiction</p>
                            <p>Thèmes: Assassinat - Combats - Ecole - Super pouvoirs - Vengeance</p>
                            <p>Simon vit dans un petit village souterrain. Jour après jour, il fore le sol sans relâche et sans se poser de question, après tout, il n'est bon qu'à ça... Kamina, son grand frère spirituel, est un grand voyou casse-cou et arrogant qui rêve d'atteindre une "surface" dont il est le seul à croire en l'existence. Pourtant un jour, suite à un terrible tremblement de terre le plafond du village s'effondre laissant apparaître le ciel. Un terrible robot descend alors dans le village et dit vouloir exterminer tous les habitants. Une fille du nom de Yoko, originaire du village voisin, débarque de nulle part bombardant l'ennemi et demande aux deux garçons de se mettre à l'abri... Ce que Kamina refuse de faire, décidant d'utiliser le dernier trésor que Simon à déterrer pour vaincre le robot : une espèce tête en métal. L'objet se révélant être doté de fabuleux pouvoirs, Kamina, Simon et Yoko parviennent à exploser le robot et s'échappent des sous-sols de la terre par la même occasion. Ce qu'ils découvrent à la surface est un monde dévasté dans lequel les êtres humains sont chassés tels du bétail par une autre race, les beastmen. Nos trois héros décident alors de former un groupe, la Gurren Brigade, pour mettre fin à l'oppression des beastmen et offrir ainsi à l'humanité une vie sous le soleil.</p>
                            <p>Tier: C</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/food_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--food">
                            <strong>Food Wars</strong>
                            <p>Episodes: les 4 saisons se divise en 24-13-(12-12)-12 épisodes</p>
                            <p>Genres: Comédie - Ecchi - Romance - School Life</p>
                            <p>Thèmes: Ecole - Gastronomie</p>
                            <p>Sôma Yukihira, 15 ans, rêve de surpasser son père Jôichirô, cuisinier de talent, et de reprendre le petit restaurant familial. Pour lui, son avenir est tout tracé : dès qu'il terminera sa dernière année de collège, il s'investira à plein temps dans le restaurant. Malheureusement, son père en décide autrement lorsqu'il accepte un travail à New York, dans un grand hôtel. Avant de partir, il oriente Sôma vers un prestigieux lycée, qui forme les meilleurs cuisiniers du Japon. Mais l'établissement est réputé extrêmement difficile et seuls 10% des élèves réussissent à y obtenir un diplôme. Mais Sôma, motivé par son père, a bien l'intention de faire partie des meilleurs.</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/konosuba_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--konosuba">
                            <strong>Kono Subarashii Sekai ni Shukufuku wo!</strong>
                            <p>Episodes: 3 saisons de 10 épisodes</p>
                            <p>Genres: Aventure - Comédie - Fantasy - Surnaturel</p>
                            <p>Thèmes: Autre monde - Combats - Dieux / Déesses - Démons - Parodie</p>
                            <p>La vie de Satou Kazuma, un hikikomori aimant les jeux, se termine bien trop tôt, dû à un accident de la route... Alors que ce dernier est décédé, une déesse nommée Aqua apparaît devant lui et lui propose de se réincarner dans l'au delà, prenant l'aspect d'un monde fantastique de jeu vidéo. Après s'être bien adapté à ce monde et vivant avec une petite équipe dont fait partie la déesse Aqua, une magicienne du nom de Megumin et une paladin masochiste, Kazuma est chargé d'une mission : vaincre le roi-démon. Cependant, en raison de l'incapacité de son groupe à réussir des quêtes, ce dernier va très vite renoncer à cette idée et tenter de profiter de ce monde si parfait à ses yeux. Malheureusement pour lui, leurs chemins vont très vite croiser ceux des généraux du roi démon, et c'est ainsi que les galères vont commencer.</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/death_parade_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--death_parade">
                            <strong>Death Parade</strong>
                            <p>Episodes: 12</p>
                            <p>Genres: Drame - Mystère - Psychologique</p>
                            <p>Thèmes: Jeux - Mort</p>
                            <p>L'histoire débute avec l'arrivée de deux personnages, Takashi et Machiko, dans un bar étrange. Ils ne se souviennent même pas comment ils sont arrivés ici, et le maître des lieux, Decim, ne répond quasiment pas à leurs questions, leur imposant de jouer à un jeu. N'ayant pas d'autre choix, les voici entraînés dans une suite d'événements inattendus qui devraient révéler leur vraie nature que Decim jugera en conséquence. "Bienvenue au Quindecim".</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/mob_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--mob">
                            <strong>Mob psycho 100</strong>
                            <p>Episodes: 2 saisons de 12 épisodes</p>
                            <p>Genres: Action - Comédie - Romance - School Life - Surnaturel</p>
                            <p>Thèmes: Jeux - Mort</p>
                            <p>L'histoire suit Kageyama Shigeo un élève de quatrième, possédant des pouvoirs psychiques. Il peut plier et soulever n'importe quel objet avec son esprit. Cependant, il s'est lentement refusé d'exercer ses capacités en public car sa trop grande puissance peut infliger des conséquences négatives aux humains "normaux". Aujourd'hui, la seule et unique chose qu'il désire est de devenir ami avec une fille de son lycée : Tsubomi. Avec son mentor, qui ne possède aucun pouvoir, il continue de vivre paisiblement en essayant de réaliser son but.</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/yuri_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--yuri">
                            <strong>Yuri!!! on Ice</strong>
                            <p>Episodes: 12</p>
                            <p>Genres: Comédie - Drame - Slice of Life - Tournois</p>
                            <p>Thèmes: Patinage artistique - Quotidien - Sport</p>
                            <p>Alors qu'il participe à une compétition particulièrement importante, Yûri Katsuki, talentueux patineur japonais, est écrasé par la pression et voit s'envoler toute chance de victoire. De retour chez lui, à Kyushu, il s'enferme chez ses parents, ne sachant plus très bien s'il doit continuer à patiner ou tout abandonner. Mais les choses changent lorsque le célèbre patineur russe Victor Nikiforov, son idole, se présente chez lui avec la ferme intention de l'entraîner.</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/aldnoah_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--aldnoah">
                            <strong>Aldnoah.Zero</strong>
                            <p>Episodes: 2 saisons de 12 épisodes</p>
                            <p>Genres: Action - Science-fiction</p>
                            <p>Thèmes: Guerre - Mechas</p>
                            <p>En 1972, un étrange portail fonctionnant à base d'Aldnoah et menant à la planète Mars fut découvert sur la Lune. Cette découverte marqua le début de l'installation humaine sur cette planète, notamment grâce à Rayregalia Vers Rayvers, qui se vit confier les secrets de l'Aldnoah. Un secret et un pouvoir transmis à ses descendants. Quelques années plus tard, Mars et la Terre entrent en conflit, provoquant la destruction du portail lunaire et d'une partie du satellite en 1999. Ce phénomène, connu sous le nom de Heaven Fall, mis temporairement fin au conflit. Mais celui-ci est réanimé une quinzaine d'années plus tard lorsque la princesse martienne Asseylum Vers Allusia est victime d'un complot au cours d'une visite diplomatique sur Terre.</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/amagi_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--amagi">
                            <strong>Amagi Brilliant Park</strong>
                            <p>Episodes: 13</p>
                            <p>Genres: Comédie - Drame - Fantasy</p>
                            <p>Thèmes: Magie</p>
                            <p>Seiya Kanie est un lycéen un peu prétentieux mais aussi très solitaire, qui se retrouve du jour au lendemain propulsé à la tête d'un parc à thème : Amagi Brilliant Park. Ce dernier est au bord de la faillite et doit impérativement avoir accueilli 500 000 visiteurs avant le 31 juillet. Le problème, c'est que le parc n'attire plus grand monde et certaines infrastructures sont à l'abandon. Seiya, épaulé par Izusu Sento, va alors tenter de redresser la situation, mais il n'a plus que 3 mois pour attirer les 250 000 visiteurs manquants.</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/angel_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--angel">
                            <strong>Angel Beats!</strong>
                            <p>Episodes: 13</p>
                            <p>Genres: Action - Comédie - Drame - Fantasy - School Life - Science-fiction - Surnaturel</p>
                            <p>Thèmes: Ecole - Filles et pistolets - Mort - Musique - Organisations secrètes</p>
                            <p>Dans le monde de l'au-delà existe un lieu, un immense campus, où sont envoyés les adolescents après leur décès. C'est là que se réveille Yuzuru Otonashi après son trépas, mais il n'a pas vraiment le temps de comprendre ce qui lui arrive qu'il est subitement pris dans un feu croisé entre les membres de la Shinda Sekai Sensen (SSS) et Tenshi. Plus tard, Yuri Nakamura, leader du SSS, lui explique que le groupe se rebelle contre le dieu qui leur a imposé une vie vide de sens. C'est pourquoi Tenshi est leur ennemie jurée. Mais Yuzuru, qui n'a aucun souvenir de sa vie sur Terre, a l'intuition que la jeune fille n'est pas une envoyée de Dieu.</p>
                            <p>Tier: C</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/beelzebub_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--beelzebub">
                            <strong>Beelzebub</strong>
                            <p>Episodes: 60</p>
                            <p>Genres: Action - Comédie - Shônen - Surnaturel</p>
                            <p>Thèmes: Combats - Démons - Ecole</p>
                            <p>Le lycée Ishiyama est un établissement entièrement fréquenté par des délinquants, où la violence et l'anarchie régnent. Cependant, il y a une règle universellement reconnue : ne pas croiser l'étudiant de première année Tatsumi Oga, le combattant le plus vicieux d'Ishiyama. Un jour, Oga est au bord d'une rivière lorsqu'il rencontre un homme qui descend la rivière. Après l'avoir récupéré, l'homme s'ouvre en deux pour révéler un bébé, qui rampe sur le dos d'Oga. Bien qu'il ne le sache pas encore, ce bébé se nomme Kaiser de Emperana Beelzebub IV, ou «Baby Beel» pour faire plus court, le fils du Seigneur des Démons! Comme si trouver le futur Seigneur des enfers ne suffisait pas, Oga est aussi confrontée à Hildegard, la servante démoniaque de Beel. Ensemble, ils vont tenter d'élever Baby Beel, bien qu'ils soient entourés de délinquants juvéniles et de puissants démons.</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/brynhildr_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--brynhildr">
                            <strong>Brynhildr in the Darkness</strong>
                            <p>Episodes: 13</p>
                            <p>Genres: Action - Drame - Ecchi - Fantasy - Mystère - Psychologique - Romance - School Life - Science-fiction - Seinen</p>
                            <p>Thèmes: Aliens / Extra-terrestres - Super pouvoirs</p>
                            <p>Lorsqu'il n'était qu'un charmant bambin, Ryota Murakami passait le plus clair de son temps en compagnie de Kuroneko, sa meilleure amie et confidente.
                            Cette charmante et adorable fillette qui ne le laissait pas indifférent, était passionnée par les sciences et plus particulièrement par l'astronomie.
                            Elle croyait fermement à l'existence des extra-terrestres et désirerait plus que tout prouver à Ryota que ces derniers vivaient quelque part dans notre galaxie.
                            Embarqué dans une périlleuse randonnée avec sa meilleure amie, Ryota fait une chute mortelle au bord d'une falaise mais est sauvé in-extrémis par Kuroneko.
                            Malheureusement, la chute sera fatale pour la fillette et celle-ci décèdera de ses blessures.
                            Ce jour funeste restera à jamais gravé dans la mémoire de Ryota qui décidera de poursuivre les rêves de Kuroneko afin d'honorer sa mémoire.
                            
                            Depuis ce tragique accident, de l'eau a coulé sous les ponts et Ryota est devenu un adolescent particulièrement studieux et intelligent.
                            Il a intégré le club d'astronomie de son lycée afin de pouvoir contempler les cieux et ainsi guetter le moindre signal qui annoncerait la venue d'extra-terrestres.
                            Mais son quotidien bascule le jour où une étudiante étrangère est transférée dans sa classe.
                            Cette dernière s'appelle Kuroha Neko et ressemble étrangement à Kuroneko.
                            Intrigué par cette forte ressemblance physique, Ryota s'intéressera fortement à cette mystérieuse étudiante.
                            C'est d'ailleurs dans l'unique but de percer l'identité de Kuroha Neko qu'il décidera de s'immiscer dans sa vie !
                            En tentant d'en apprendre davantage sur cette dernière, Ryota découvrira son terrible secret.
                            Ce même secret bouleversera à jamais sa vie...</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/saiki_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--saiki">
                            <strong>Saiki Kusuo no Ψ Nan</strong>
                            <p>Episodes: 2 saisons de 24 épisodes et la dernière, je sais pas qu'est ce qu'ils ont fumé mais ils ont eu la flemme de continuer ils en ont fait que 6 épisodes</p>
                            <p>Genres: Comédie - School Life - Science-fiction - Slice of Life - Surnaturel</p>
                            <p>Thèmes: Ecole - Quotidien</p>
                            <p>Kusuo Saiki est un étudiant de 16 ans qui possède plusieurs dons surnaturels, dont la télépathie et la télékinésie. Des pouvoirs dont n'importe qui rêverait, mais qui cause à notre héros un certain nombres de problèmes... Kusuo tente malgré tout de mener une vie normale.</p>
                            <p>Tier: A</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/sao_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--sao">
                            <strong>Sword Art Online</strong>
                            <p>Episodes: 1 saison de 25, 2 saisons de 24, 2 saisons de 12 et une saison de 11 épisodes  </p>
                            <p>Genres: Action - Drame - Fantasy - Romance - Science-fiction</p>
                            <p>Thèmes: Combats - Jeux vidéo - Monde virtuel</p>
                            <p>En 2022, l'humanité a réussi à créer une réalité virtuelle. Grâce à un casque, les humains peuvent se plonger entièrement dans le monde virtuel en étant comme déconnectés de la réalité, et Sword Art Online est le premier MMORPG a utiliser ce système. Mais voila que le premier jour de jeu, 10 000 personnes se retrouvent piégées dans cette réalité virtuelle par son créateur : Akihiko Kayaba. Le seul moyen d'en sortir est de finir le jeu. Mais ce ne sera pas facile de sortir de ce monde virtuel puisque si un joueur perd la partie, il meurt également dans la vraie vie. Kirito décide alors de partir à la conquête du jeu en solo, avec pour avantage le fait de faire partie des 1 000 ex-bêta-testeurs, mais arrivera-t-il à terminer les 99 donjons et leurs boss ?</p>
                            <p>Tier: C</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/genome_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--genome">
                            <strong>Naka no Hito Genome [Jikkyouchuu]</strong>
                            <p>Episodes: 12</p>
                            <p>Genres: Action - Aventure - Drame - Mystère - Psychologique - Romance - Shônen - Surnaturel</p>
                            <p>Thèmes: Jeux - Survival game</p>
                            <p>Akatsuki Iride est une personne très populaire dans la communauté du jeux vidéo. Un jour, il débloque un contenu caché dans un mystérieux jeu gratuit appelé "Nakanohito Genome" et découvre qu'il s'agit d'un jeu vidéo dans la vraie vie. Peu de temps après, il se réveille et se rend compte qu'il a été kidnappé et amené dans un endroit étrange en compagnie d'autres personnes. Chacune de ces personnes sont spécialisées dans différents genres de jeux. Une étrange personne à tête de lama les rassemble après le premier niveau pour leur expliquer comment le jeu va fonctionner. Ainsi, ils vont découvrir qu'ils ont atterri dans un survival game où ils vont devoir mettre leur vie en jeu pour pouvoir survivre. Vont-ils réussir à terminer ce jeu et retrouver leur liberté ?</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/tpn_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--tpn">
                            <strong>The Promised Neverland</strong>
                            <p>Episodes: 2 saisons de 12 épisodes</p>
                            <p>Genres: Aventure - Drame - Horreur - Mystère - Surnaturel</p>
                            <p>Thèmes: Famille - Monstres</p>
                            <p>Emma et ses amis, tous orphelins, ont été placés dans un établissement spécialisé lorsqu'ils étaient tout jeune. Bien que leur liberté soit limitée et que les règles soient parfois un peu strictes, ils mènent une vie agréable tous ensemble et la femme qui s'occupe d'eux est généreuse. Cependant, une question anime Emma et tous les autres : pourquoi n'ont-ils pas le droit de sortir de l'orphelinat ?</p>
                            <p>Tier: S</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/akudama_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--akudama">
                            <strong>Akudama Drive</strong>
                            <p>Episodes: 12</p>
                            <p>Genres: Aventure - Drame - Horreur - Mystère - Surnaturel</p>
                            <p>Thèmes: Crime</p>
                            <p>Kanto et Kansai, deux régions adjacentes, se sont autrefois déchirées à l'occasion d'une guerre particulièrement violente. Le conflit prit fin lorsqu'une bombe fût lâchée sur Kansai, créant un dôme infranchissable autour de la région. Désormais, le seul moyen de quitter les lieux est d'emprunter le Shinkansen, devenu un objet sacré et révéré à Kansai. Coupée du monde, affaiblie par la guerre, la région de Kansai est progressivement devenue une zone de non-droit où les criminels, surnommés Akudama, prolifèrent. Un jour, alors qu'elle est au commissariat à la suite d'une erreur judiciaire, une citoyenne ordinaire est entrainée bien malgré elle par un groupe d'Akudama. Leur but ? Attaquer le Shinkansen et récupérer un coffre-fort qui s'y trouve.</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/mushoku_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--mushoku">
                            <strong>Mushoku Tensei : Isekai Ittara Honki Dasu</strong>
                            <p>Episodes: 11</p>
                            <p>Genres: Action - Aventure - Comédie - Drame - Ecchi - Fantasy - Romance - Seinen</p>
                            <p>Thèmes: Autre monde - Harem - Magie - Réincarnation</p>
                            <p>L'histoire nous entraîne dans le quotidien d'un NEET qui vient d'être chassé de chez ses parents. Ayant le moral au plus bas, il pense au suicide. Jusqu'au jour où il aperçoit une ancienne camarade de classe sur le point de se faire renverser. D'un geste héroïque, il la pousse et se fait renverser à sa place. Suite à ça, il meurt puis se retrouve réincarné dans un monde fantaisiste. Il se réincarne dans le corps d'un enfant du nom de Rudeus Greyrat. Il est le fils d'un épéiste nommé Paul Greyrat et d'une ancienne aventurière nommée Zenith Greyrat. Bien décidé à faire quelque chose de sa nouvelle vie en tant que Rudeus, il va essayer de devenir le plus grand magicien de l'histoire.</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/angels_death_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--angels_death">
                            <strong>Angels of Death</strong>
                            <p>Episodes: 12</p>
                            <p>Genres: Action - Drame - Horreur / Épouvante - Josei - Mystère - Psychologique - Thriller</p>
                            <p>Thèmes: Survival game</p>
                            <p>Rachel Gardner est une enfant de 13 ans qui se réveille dans le sous-sol d'un immense immeuble abandonné sans aucun souvenir de ce qu'il s'est passé. En cherchant une sortie, elle rencontre Zack, un mystérieux tueur en série muni d'une faux et bandé de la tête aux pieds. Suite à cette rencontre Rachel lui demande de la tuer, ce dernier accepte à une seule condition : qu'elle l'aide à sortir de cet endroit. Tous les deux ont alors décidé de s'associer pour trouver une issue...</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/kaisen_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--kaisen">
                            <strong>Jujutsu Kaisen</strong>
                            <p>Episodes: 24</p>
                            <p>Genres: Action - Aventure - Drame - Fantastique - Mystère - School Life - Surnaturel - Tragique</p>
                            <p>Thèmes: Ecole - Magie - Organisations secrètes - Paranormal - Yōkai</p>
                            <p>Dans la majorité des cas, ce sont les sentiments négatifs des êtres humains qui sont en cause. Souffrance, regrets, humiliation : leur accumulation dans un même endroit provoque des malédictions souvent fatales... C'est ce que va découvrir à ses dépens Yuji Itadori, lycéen et membre du club de spiritisme. Il ne croit pas aux fantômes, mais sa force physique hors du commun est un précieux atout pour les missions du groupe... jusqu'à ce que l'une d'elles tourne mal. La relique qu'ils dénichent, le doigt sectionné d'une créature millénaire, attire les monstres ! Le jeune homme n'hésite pas une seconde : il avale la relique pour conjurer le mauvais sort ! Le voilà possédé par Ryomen Sukuna, le célèbre démon à deux visages. Contre toute attente, Yuji réussit à reprendre le contrôle de son corps. C'est du jamais vu ! Malgré tout, il est condamné à mort par l'organisation des exorcistes... Une sentence qui ne pourra être repoussée qu'à une seule condition : trouver et ingérer tous les doigts de Sukuna afin d'éliminer la menace une fois pour toutes. Et pour ça, l'adolescent va devoir s'initier à l'art occulte et mystérieux de l'exorcisme !</p>
                            <p>Tier: S</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/gangsta_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--gangsta">
                            <strong>GANGSTA.</strong>
                            <p>Episodes: 12</p>
                            <p>Genres: Action - Drame - Mature - Psychologique - Tragique</p>
                            <p>Thèmes: Mafia</p>
                            <p>Un jour, Alex, une prostituée parmi tant d'autres, croise la route des Benriya (services en tous genres) ou, en d'autres termes, des hommes à tout faire du nom de Worick (Warwick) et Nicolas. Ils exécuteront n'importe quelle tâche tant que le prix y sera : réparations, livraison, escorte ainsi que nettoyage en tout genre...</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/gate_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--gate">
                            <strong>Gate : Jieitai Kanochi nite, Kaku Tatakaeri</strong>
                            <p>Episodes: 2 saisons de 12 épisodes</p>
                            <p>Genres: Action - Aventure - Fantasy - Seinen</p>
                            <p>Thèmes: Autre monde - Guerre - Militaire - Otaku - Politique</p>
                            <p>Un jour, un portail nommé Gate s'ouvre sur la Terre en plein centre de Tokyo. Ce portail reliant deux monde mène à une attaque sanglante de l'autre monde sur la Terre. Dans cette agitation, nous suivons l'otaku et militaire par la même occasion nommé Youji Itami. Ce dernier, abandonne sa convention pour venir en aide à un policier et pour mener à bien l'évacuation des survivants. Après que l'armée ait vaincu l'attaque surprise de l'autre monde, Youji est récompensé pour sa bravoure et son héroïsme et est promu second lieutenant de l'armée. Quelques mois plus tard, le gouvernement Japonais décide d'explorer le monde parallèle pour se protéger et anticiper une quelque seconde attaque. Après avoir passé la porte, nous suivrons l'unité de reconnaissance de Youji qui fait connaissance avec les habitants de ce monde et de ses problèmes.</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/cautious_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--cautious">
                            <strong>Cautious Hero</strong>
                            <p>Episodes: 12</p>
                            <p>Genres: Action - Aventure - Comédie - Fantasy</p>
                            <p>Thèmes: Autre monde - Jeux vidéo - Monstres</p>
                            <p>Un jour, Alex, une prostituée parmi tant d'autres, croise la route des Benriya (services en tous genres) ou, en d'autres termes, des hommes à tout faire du nom de Worick (Warwick) et Nicolas. Ils exécuteront n'importe quelle tâche tant que le prix y sera : réparations, livraison, escorte ainsi que nettoyage en tout genre...</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/zestiria_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--zestiria">
                            <strong>Tales of Zestiria the X</strong>
                            <p>Episodes: 2 saisons de 12 épisodes et 13 épisodes</p>
                            <p>Genres: Drame - Fantasy - Surnaturel</p>
                            <p>Thèmes: Magie - Voyage</p>
                            <p>L'histoire se déroule dans un monde peuplé d'humains et d'êtres "divins", les Tenzokus. Ces derniers, qui sont invisibles pour la plupart des êtres humains, ont la capacité d'accorder leur bénédiction aux villes et villages et sont donc vénérés comme des dieux. Toutefois, au fils du temps, certains Tenzokus ont perdus foi en l'humanité et se sont retirés, laissant la malveillance s'installer dans le cœur des hommes. Sorey, un humain élevé par des Tenzokus, arrive un jour dans le monde des humains et découvre que tout y est très différent par rapport à son village d'origine. Il va alors devenir le Doushi (Berger), afin de purifier ce monde et vaincre la source de ce chaos : le Seigneur des Calamités.</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/kekkai_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--kekkai">
                            <strong>Kekkai Sensen</strong>
                            <p>Episodes: 2 saisons de 12 épisodes</p>
                            <p>Genres: Action - Aventure - Comédie - Drame - Fantasy - Science-fiction - Seinen - Surnaturel</p>
                            <p>Thèmes: Aliens / Extra-terrestres - Super pouvoirs - Vampires</p>
                            <p>Il y a trois ans, une brèche séparant la planète Terre du monde des morts s'est ouverte en plein milieu de la ville de New York, piégeant ainsi ses habitants et par la même occasion des créatures venant d'autres dimensions dans une bulle impénétrable. Après avoir été détruite et reconstruit la ville de New York est rebaptisée Hellsalem's Lot, où l'ordinaire côtoie l'extraordinaire, et où certains humains peu scrupuleux exploite ces nouvelles capacités pour leur profit. Alors que les humains et démons cohabitent depuis des années dans un monde en proie au chaos et à la folie, un groupe menace de percer la bulle et déverser le chaos d'Hellsalem sur la terre entière. Pour empêcher un tel désastre de se produire, un groupe de surhommes, les mystérieux supers agents de Libra (Klaus Rineberts, la femme loup-garou Frau Jane et le majordome momie Gilbert), sera envoyé pour arrêter cette menace.</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/horimya_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--horimya">
                            <strong>Horimya</strong>
                            <p>Episodes: 13</p>
                            <p>Genres: Comédie - Romance - School Life - Shônen - Slice of Life</p>
                            <p>Thèmes: Amitié - Amour - Ecole - Quotidien</p>
                            <p>Bien qu'admirée à l'école pour sa gentillesse et ses prouesses académiques, Kyôko Hori est cependant différente chez elle. Avec ses parents souvent absents pour travailler, Hori doit s'occuper de son jeune frère et faire le ménage, l'empêchant ainsi de se socialiser en dehors de l'école. Izumi Miyamura, un camarade de classe d'Hori, est considéré comme un otaku maussade avec ses grandes lunettes, ses longs cheveux et sa nature timide et calme. Cependant, il est en réalité une personne gentille et serviable possédant neuf piercings cachés derrière ses longs cheveux et un tatouage le long du dos et de l'épaule gauche. Un jour, Hori et Miyamura se croisent en dehors de l'école par pur hasard. Comment ces deux personnes vont réagir en découvrant la face cachée de l'autre ?</p>
                            <p>Tier: B</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fullscreen">
                <div class="fullscreen-back"></div>
                <div class="fullscreen_description">

                    <div class="fullscreen_description_wrap">
                        <div class="trailer_card">
                            <img src="../image/art/go_trailer.jpg" alt="">
                            <div class="play_button">
                                <img src="../image/play_button.jpg">
                            </div>
                        </div>

                        <div class="fullscreen_text fullscreen--go">
                            <strong>the quintessential quintuplets</strong>
                            <p>Episodes: 2 saisons de 12 épisodes</p>
                            <p>Genres: Comédie - Romance - School Life</p>
                            <p>Thèmes: Harem</p>
                            <p>Une chose est sûre, le jeune mangaka Negi Haruba sait comment tenir son public en haleine ! Car dès les premières pages, on découvre le héros, Fûtarô, en compagnie d'une jeune fille en robe de mariée qui est... l'une des cinq sœurs Nakano ! Alors, qui de Ichika, Nino, Miku, Yotsuba ou de Itsuki le jeune professeur particulier va-t-il épouser ? Le secret sera gardé jusqu'au bout car aussi différentes soient elles, aucune des cinq turbulentes jumelles ne semble apprécier ce jeune professeur particulier qui leur est imposé ! Chacune à leur manière, elles font tout pour l'empêcher de donner ses cours. Et les voilà engagées dans un hilarant jeu du chat et de la souris qui obligera Fûtarô à trouver des stratégies à la mesure de leurs extravagances afin de les convaincre d'étudier !</p>
                            <p>Tier: S</p>
                        </div>
                    </div>

                </div>
            </div>

            <script>
                let start = Date.now()
            </script>

            <script src="../node_modules/jquery/dist/jquery.min.js"></script> 
            
            <script src="../js/card.js"></script>
            <script src="../js/variables_elt.js"></script>
            <script src="../js/variables_menu.js"></script>  
            <script src="../js/menu.js"></script> 
            <script type="module" src="../js/scrollbar_and_buttons.js"></script>
            <script src="../js/video.js"></script> 
            <script src="../js/main.js" defer></script>   

            <script>
                let end = Date.now()
                console.log(end - start + "ms");
            </script>


            <!--
            <script src="../dist/polyfill.bundle.js"></script>             
            <script src="../dist/app.bundle.js"></script>
            -->
    </body>
</html>