class Anime {
    constructor(name, title, genres, studio, episodes, synopsis) {
        this.name = name
        this.title = title
        this.genres = genres
        this.studio = studio
        this.episodes = episodes
        this.synopsis = synopsis
    }

    CreateCard() {
        const cardContainer = document.createElement('div')
        cardContainer.classList.add('card-container')
    
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
    
        cardContainer.appendChild(cardDiv)
    
        return cardContainer
    }
}

const ANIMES_CARD = []

const NAMES = ["fullmetal", "grand_blue", "noragami", "mha", "nogamenolife", "tkg", "rezero", "opm", "overlord", "tensura", "dororo", "sakamoto", "darling", "parasyte", "erased", "april", "youjo_senki", "shield", "prison", "fire_force", "knights_magic", "akame", "k", "id_invaded", "kakegurui", "vinland", "destructive_god", "rettousei", "kabaneri", "bungou", "kaguya", "seraph", "iwgp", "hxh", "code_geass", "stone", "assassination_classroom", "demon_slayer", "fate", "death_note", "haikyuu", "black_butler", "nanatsu", "free", "goblin_slayer", "kuroko", "millionaire", "elite", "moriarty", "kill", "guren", "food", "konosuba", "death_parade", "mob", "yuri", "aldnoah", "amagi", "angel", "beelzebub", "brynhildr", "saiki", "sao", "genome", "tpn", "akudama", "mushoku", "angels_death","jjk", "gangsta", "gate", "cautious", "zestiria", "kekkai", "horimya", "go"];

const TITLES = ["Fullmetal Alchemist: Brotherhood", "Grand Blue", "Noragami", "My Hero Academia", "No Game No Life", "Tokyo Ghoul", "Re:zero", "One Punch Man", "Overlord", "Tensei Shitara Slime Datta Ken", "Dororo", "Sakamoto desu ga ?", "Darling in the Franxx", "Parasyte", "Erased", "Your lie in April", "Youjo Senki", "The Rising of the Shield Hero", "Prison School", "Fire Force", "Knight's & Magic", "Akame ga KILL!", "K-project", "ID:INVADED", "Kakegurui", 
    "Vinland Saga", "Boku no Tonari ni Ankoku Hakaishin ga Imasu.", "Mahouka Koukou no Rettousei", "Kabaneri of the Iron Fortress", "Bungou Stray Dogs", "Kaguya-sama - Love is War", "Owari no Seraph", "Ikebukuro West Gate Park", "Hunter X Hunter", "Code Geass", "Dr Stone", "Assassination Classroom", "Demon Slayer", "Fate/stay night : Unlimited Blade Works", "Death Note", "Shingeki no kyojin", "Haikyū!!", "Black Butler", "Nanatsu no Taizai", "Free!", "Goblin Slayer", "Kuroko no Basket", "The Millionaire Detective - Balance: Unlimited", "Classroom of the Elite", "Moriarty the Patriot", "Kill la Kill", "Tengen Toppa Gurren-Lagann", "Food Wars", "Kono Subarashii Sekai ni Shukufuku wo!", "Death Parade", "Mob Psycho 100", "Yuri!!! on Ice", "Aldnoah.Zero", "Amagi Brilliant Park", "Angel Beats!", "Beelzebub", "Brynhildr in the Darkness", "Saiki Kusuo no Ψ Nan", "Sword Art Online", "Naka no Hito Genome [Jikkyouchuu]", "The Promised Neverland", "Akudama Drive", "Mushoku Tensei : Isekai Ittara Honki Dasu", "Angels of Death", "Jujutsu Kaisen", "GANGSTA.", "Gate : Jieitai Kanochi nite, Kaku Tatakaeri", "Cautious Hero", "Tales of Zestiria the X", "Kekkai Sensen", "Horimya", "The Quintessential Quintuplets"];


const GENRES = [
    "Action, Aventure, Fantastique, Drame",
    "Comédie, Slice of Life, Sport",
    "Action, Aventure, Fantastique, Surnaturel",
    "Action, Aventure, Super-héros, Drame",
    "Fantastique, Aventure, Comédie, Jeu",
    "Action, Horreur, Surnaturel, Drame ",
    "Fantasy, Aventure, Drame, Psychologique",
    "Action, Comédie, Super-héros, Parodie",
    "Fantasy, Action, Aventure, Isekai",
    "Fantasy, Isekai, Aventure, Comédie",
    "Action, Aventure, Drame, Surnaturel",
    "Comédie, Slice of Life, École",
    "Sci-Fi, Mécha, Romance, Drame",
    "Horreur, Science-fiction, Drame, Thriller",
    "Mystère, Thriller, Drame, Surnaturel",
    "Drame, Romance, Musique",
    "Action, Fantastique, Militaire",
    "Fantasy, Aventure, Isekai, Drame",
    "Comédie, Écchi, Drame, School Life",
    "Action, Supernatural, Sci-Fi",
    "Fantasy, Isekai, Mecha",
    "Action, Aventure, Drame, Fantasy, Sombre",
    "Action, Fantastique, Mystère, Super-pouvoirs",
    "Science-fiction, Mystère, Thriller, Psychologique",
    "Psychological, Thriller, École, Drame",
    "Action, Aventure, Drame, Historique",
    "Comédie, Fantastique, Romance, École",
    "Science-fiction, Fantastique, Action, École, Isekai",
    "Action, Horreur, Post-apocalyptique, Drame, Steampunk"
]


const STUDIOS = [
    "Bones",
    "Zero-G",
    "Bones",
    "Bones",
    "Madhouse",
    "Studio Pierrot",
    "White Fox",
    "Madhouse, J.C. Staff",
    "Madhouse",
    "Eight Bit",
    "MAPPA, Tezuka Productions",
    "Studio Deen",
    "Trigger, A-1 Pictures, CloverWorks",
    "Madhouse",
    "A-1 Pictures",
    "A-1 Pictures",
    "NUT",
    "Kinema Citrus",
    "J.C. Staff",
    "David Production",
    "8bit",
    "White Fox",
    "GoHands",
    "NAZ",
    "MAPPA",
    "WIT Studio, MAPPA",
    "EMT Squared",
    "Madhouse, 8bit",
    "Wit Studio"
]

const EPISODES = [
    "64",
    "12",
    "25",
    "+140",
    "12",
    "24",
    "50+",
    "24",
    "40+",
    "50+",
    "24",
    "12",
    "24",
    "24",
    "12",
    "22",
    "12",
    "38",
    "12",
    "48",
    "13",
    "24",
    "13",
    "13",
    "24",
    "30+",
    "12",
    "39",
    "12"
]

const SYNOPSIS = [
    "Fullmetal Alchemist: Brotherhood suit les frères Edward et Alphonse Elric, qui utilisent l'alchimie pour tenter de ramener leur mère à la vie. La tentative échoue : Edward perd une jambe et un bras, remplacés par des prothèses mécaniques, et Alphonse perd son corps, son âme étant scellée dans une armure. Pour retrouver leurs corps, ils cherchent la Pierre Philosophale, un artefact légendaire. En chemin, ils découvrent les secrets de leur pays, Amestris, et affrontent les homonculus, êtres artificiels incarnant les sept péchés capitaux. La série explore les thèmes du sacrifice, de la morale et de la quête de l'humanité.",
    "Grand Blue suit Iori Kitahara, un étudiant qui emménage chez son oncle pour commencer sa vie universitaire près de l'océan. Il découvre rapidement le club de plongée local, Grand Blue, peuplé de membres excentriques plus intéressés par la fête que par la plongée. Malgré ses réticences initiales, Iori est entraîné dans un tourbillon de beuveries, de nudité impromptue et de situations hilarantes. À travers ces expériences, Iori forge des amitiés inattendues et découvre la beauté de la plongée sous-marine. L'anime mélange comédie exubérante et moments de camaraderie sincère, tout en explorant la vie étudiante et les défis de la transition vers l'âge adulte.",
    "Noragami suit Yato, un dieu mineur autoproclamé \"Dieu de la Livraison\", qui rêve de devenir un dieu vénéré avec des millions de fidèles. Pour ce faire, il accomplit des tâches pour 5 yens, espérant gagner en popularité. Yato rencontre Hiyori Iki, une lycéenne dont l'âme quitte fréquemment son corps après un accident, et Yukine, une âme perdue qui devient son arme divine. Ensemble, ils affrontent les menaces surnaturelles et les autres dieux. La série explore les thèmes de l'identité, de la rédemption et de la lutte pour trouver sa place dans le monde, tout en mêlant action et comédie.",
    "My Hero Academia se déroule dans un monde où presque tout le monde possède des \"Quirks\", des pouvoirs surnaturels. Izuku Midoriya, un jeune garçon né sans Quirk, rêve de devenir un héros comme son idole All Might. Après un incident avec All Might, il reçoit un pouvoir spécial, One For All, et est accepté à l'Académie des Héros U.A. Là, il apprend à maîtriser ses nouvelles capacités tout en affrontant des vilains et des menaces. L'anime explore les défis de la formation des héros, les luttes personnelles, et la dynamique entre les héros en devenir et les vilains menaçants.",
    "No Game No Life suit Sora et Shiro, un frère et une sœur géniaux, connus sous le pseudonyme de \"Blank\" dans le monde des jeux en ligne. Après avoir été défiés et transportés dans un monde parallèle où tout est décidé par des jeux, ils rencontrent le mystérieux dieu des jeux, Tet. Dans ce monde, les conflits sont résolus par des jeux plutôt que par la violence. Sora et Shiro utilisent leur intelligence et leurs compétences exceptionnelles pour défier les règles et les autres puissants joueurs afin de conquérir ce monde et défier Tet lui-même. L'anime est connu pour son style visuel unique, ses intrigues captivantes et ses stratégies de jeu complexes.",
    "Tokyo Ghoul suit Ken Kaneki, un étudiant ordinaire qui devient un hybride après une transplantation d'organes d'une goule, des créatures carnivores qui se cachent parmi les humains. Désormais obligé de vivre en tant que goule, Kaneki lutte pour s'adapter à sa nouvelle vie tout en cachant sa véritable nature. Il découvre un monde caché de goules avec ses propres règles et conflits, tout en étant pourchassé par des enquêteurs humains spécialisés dans l'extermination des goules. L'anime explore les thèmes de l'identité, de la survie et du conflit intérieur entre l'humanité et les instincts de goule.",
    "Re:Zero suit Subaru Natsuki, un adolescent qui est soudainement transporté dans un monde fantastique alors qu'il rentre de l'épicerie. Il découvre qu'il a la capacité de revenir à la vie après la mort, mais au prix de devoir revivre et recommencer chaque fois qu'il meurt. Avec cette capacité, Subaru tente de sauver ses amis et résoudre les mystères entourant ce nouveau monde. En parallèle, il se confronte à des dilemmes moraux, des ennemis puissants, et ses propres faiblesses émotionnelles. L'anime est connu pour ses rebondissements dramatiques, son exploration des thèmes de la désespérance et du courage, et sa profondeur psychologique.",
    "One Punch Man suit Saitama, un super-héros ordinaire qui est devenu incroyablement puissant au point de pouvoir vaincre n'importe quel ennemi d'un seul coup de poing. Malgré ses capacités surhumaines, Saitama est en proie à l'ennui et à la frustration, car il ne trouve aucun adversaire capable de le défier. Cherchant à se faire reconnaître et à trouver un véritable défi, il rejoint l'Association des Héros et s'attaque à des monstres et des criminels tout en cachant son incroyable force. L'anime combine action intense, humour satirique et réflexion sur les tropes des récits de super-héros.",
    "Overlord suit Suzuki Satoru, un joueur d’un jeu de réalité virtuelle massivement multijoueur (DMMORPG) qui se retrouve transporté dans le monde du jeu lorsque les serveurs sont fermés. En tant que personnage qu'il contrôlait, le puissant seigneur des ténèbres Momonga, il découvre que le jeu est devenu réalité et que les PNJ ont acquis une conscience. Avec son armée de créatures et de serviteurs loyaux, Momonga décide de conquérir ce nouveau monde et de découvrir ses mystères. Tout en établissant sa domination, il explore les dynamiques de pouvoir, les politiques et les dangers de ce monde fantastique. L’anime est apprécié pour ses éléments de stratégie, sa construction du monde riche et ses personnages complexes.",
    "Tensura suit Satoru Mikami, un employé de bureau qui se réincarne dans un monde fantastique après avoir été tué dans un accident. Il se réveille sous la forme d'un slime avec des pouvoirs spéciaux, dont la capacité d'absorber les compétences et les attributs des autres créatures. En utilisant ses nouvelles capacités, il établit un territoire pacifique et forme des alliances avec diverses créatures fantastiques. Il devient rapidement une figure influente dans ce monde tout en cherchant à améliorer la vie de ses habitants et à explorer les mystères de sa nouvelle existence. L’anime combine action, aventures et construction du monde, tout en mettant l'accent sur la croissance personnelle du protagoniste.",
    "Dororo se déroule au Japon féodal et suit Hyakkimaru, un jeune guerrier dont le père, un seigneur ambitieux, a sacrifié ses organes et parties du corps pour obtenir un pouvoir démoniaque. Hyakkimaru est abandonné à sa naissance, mais survit grâce à des prothèses et des capacités surnaturelles. En quête de récupérer ses membres et ses organes, il affronte des démons et des créatures malveillantes. En chemin, il rencontre Dororo, un jeune voleur sans famille, qui devient son allié. Ensemble, ils explorent des thèmes de rédemption, de vengeance, et de la lutte contre le destin. L’anime est salué pour son ambiance sombre, sa profondeur émotionnelle et son animation de qualité.",
    "Sakamoto desu ga? suit Sakamoto, un lycéen incroyablement cool, parfait et charismatique, dont les compétences et le style impeccable suscitent l'admiration et l'envie de ses camarades et enseignants. Quelles que soient les situations absurdes ou les tentatives de ses camarades pour le déstabiliser, Sakamoto les surmonte toujours avec grâce et élégance, transformant même les défis en démonstrations de sa perfection. Sa mystérieuse allure et ses talents hors du commun inspirent et influencent ceux qui l'entourent. L'anime explore avec humour les interactions sociales et les excentricités de la vie scolaire, mettant en avant la capacité de Sakamoto à rendre chaque moment extraordinaire.",
    "Darling in the Franxx se déroule dans un futur dystopique où l'humanité est menacée par des créatures géantes appelées Klaxosaurs. Les enfants, élevés dans des plantations, sont formés pour piloter des robots géants appelés Franxx, en paires homme-femme. Hiro, un pilote en disgrâce, rencontre Zero Two, une pilote mystérieuse avec des cornes, connue pour être dangereuse pour ses partenaires. Ensemble, ils forment une équipe unique et puissante, redonnant à Hiro une raison de combattre. À mesure que leur relation se développe, ils découvrent les sombres secrets de leur monde, de leur existence et de la véritable nature des Franxx. L'anime explore des thèmes de l'identité, de l'amour, et de la lutte pour la survie et la liberté.",
    "Parasyte -the maxim- suit Shinichi Izumi, un lycéen ordinaire dont la vie est bouleversée lorsqu'une créature extraterrestre, appelée Parasite, tente de prendre le contrôle de son corps. Le Parasite, nommé Migi, ne réussit qu'à prendre le contrôle de sa main droite, ce qui force les deux à coexister et collaborer. Tandis que d'autres Parasites envahissent la Terre et prennent le contrôle de leurs hôtes humains, souvent avec des conséquences meurtrières, Shinichi et Migi forment une alliance improbable pour survivre. Au fil du temps, Shinichi lutte pour conserver son humanité face à des ennemis de plus en plus redoutables et aux changements en lui-même. L'anime explore les thèmes de l'identité, de la survie, et de la coexistence entre les espèces.",
    "Erased suit Satoru Fujinuma, un mangaka raté de 29 ans, qui possède une capacité surnaturelle appelée \"Revival\" lui permettant de revenir quelques minutes dans le passé pour empêcher des tragédies. Après le meurtre de sa mère, Satoru est projeté 18 ans en arrière, dans son corps d'écolier de 11 ans. Il réalise que les événements sont liés à une série d'enlèvements et de meurtres de ses camarades de classe. Déterminé à changer le passé et sauver les victimes, Satoru utilise ses connaissances d'adulte et ses pouvoirs pour déjouer le tueur en série. L'anime explore des thèmes de rédemption, de justice et de la lutte contre le destin, tout en naviguant entre suspense et émotions poignantes.",
    "Your Lie in April suit Kousei Arima, un prodige du piano qui perd sa capacité à entendre le son de son instrument après la mort de sa mère abusive. Sa vie monochrome change lorsqu'il rencontre Kaori Miyazono, une violoniste extravertie et imprévisible, qui le pousse à retourner sur scène. Kaori, avec son style de jeu libre et passionné, inspire Kousei à redécouvrir la joie de la musique et à surmonter ses traumatismes passés. Leur relation évolue au fil des performances et des défis personnels, révélant des vérités bouleversantes sur l'amour, la douleur et le sacrifice. L'anime explore les thèmes de la guérison émotionnelle, de l'importance des rêves, et de l'impact profond de la musique.",
    "Youjo Senki suit Tanya Degurechaff, un salaryman athée et impitoyable qui se réincarne en tant que jeune fille dans un monde alternatif après avoir défié une entité autoproclamée \"Dieu\". Dans ce nouveau monde en proie à une guerre mondiale semblable à la Première Guerre mondiale, Tanya utilise son esprit stratégique et ses compétences militaires pour monter en grade dans l'armée impériale. Bien que physiquement une enfant, elle est redoutée sur le champ de bataille pour sa brutalité et son efficacité. Déterminée à mener une vie confortable et à échapper à la vengeance de \"Dieu\", Tanya manipule les événements pour sa propre survie. L'anime explore les thèmes de la guerre, de la foi, et de la moralité dans un contexte brutal et magique.",
    "The Rising of the Shield Hero suit Naofumi Iwatani, un otaku ordinaire, transporté dans un monde fantastique en tant que l'un des quatre héros légendaires, chacun équipé d'une arme mythique. Naofumi est le Héros au Bouclier, initialement méprisé et trahi par le royaume, faussement accusé de crimes et laissé sans ressources. Déterminé à prouver sa valeur, il entreprend de se renforcer et de protéger les innocents avec l'aide de ses compagnons fidèles, comme Raphtalia, une esclave demi-humaine qu'il libère. Ensemble, ils affrontent des vagues de monstres destructeurs et dévoilent les vérités cachées de ce monde. L'anime explore des thèmes de résilience, de justice et de rédemption dans un univers imprégné de magie et de combats.",
    "Prison School se déroule à l'académie Hachimitsu, une prestigieuse école de filles qui décide soudainement d'admettre des garçons. Les cinq premiers garçons inscrits, Kiyoshi, Gakuto, Shingo, Andre, et Joe, sont rapidement arrêtés par le conseil clandestin de l'école après avoir été surpris en train d'espionner les filles. Ils sont condamnés à un mois de prison au sein de l'école, où ils subissent des traitements humiliants et sévères. Déterminés à survivre et à s'évader, les garçons élaborent divers plans tout en faisant face à des punitions cruelles et à la domination implacable des membres du conseil clandestin. L'anime mélange comédie burlesque, drame intense et situations absurdes dans un environnement scolaire rigide.",
    "Fire Force se déroule dans un monde où des phénomènes de combustion spontanée transforment les humains en monstres appelés Infernals. Shinra Kusakabe, un jeune pyrokinésiste surnommé \"Devil's Footprints\" pour sa capacité à enflammer ses pieds, rejoint la Special Fire Force Company 8, une unité dédiée à l'extinction des Infernals et à la découverte de la vérité derrière ce phénomène. En équipe avec d'autres pyrokinésistes, Shinra affronte diverses menaces et conspirations tout en cherchant à comprendre les circonstances de l'incendie qui a tué sa famille et lui a valu sa réputation de démon. L'anime explore des thèmes de camaraderie, de courage, et de la quête de la vérité dans un contexte de combats intenses et de mystères surnaturels.",
    "Knight's & Magic suit Tsubasa Kurata, un programmeur et passionné de robots qui meurt dans un accident de voiture et se réincarne dans un monde fantastique en tant que Ernesti \"Eru\" Echevarria, un jeune garçon talentueux en magie. Dans ce nouveau monde, les chevaliers utilisent de gigantesques armures magiques appelées Silhouette Knights pour combattre des monstres. Fasciné par ces machines, Eru aspire à devenir un pilote de Silhouette Knight et à créer ses propres robots. Grâce à ses connaissances de son ancienne vie et à son talent pour la magie, il révolutionne la technologie des Silhouette Knights. L'anime explore son parcours, de son entraînement à ses innovations, dans un univers rempli de magie et de combats de méchas.",
    "Akame ga KILL! suit Tatsumi, un jeune paysan qui arrive dans la capitale en espérant trouver une vie meilleure pour lui et son village. Il découvre rapidement que la capitale est corrompue et pleine de dépravation. Après une série d'événements tragiques, il rejoint le Night Raid, une organisation d'assassins qui lutte contre le gouvernement tyrannique et ses agents puissants. Chaque membre de Night Raid utilise des armes impériales, des artefacts magiques dotés de pouvoirs uniques. Tatsumi se bat aux côtés de ses camarades pour renverser le régime oppressif tout en faisant face à des ennemis redoutables et à des dilemmes moraux. L'anime est connu pour ses scènes de combat intenses, son intrigue sombre, et ses thèmes de lutte contre l'injustice.",
    "K se déroule dans une ville où se côtoient des clans dotés de pouvoirs surnaturels, dirigés par des rois qui possèdent des capacités uniques. L'histoire commence lorsqu'un étudiant, Yashiro Isana, est accusé à tort du meurtre d'un membre d'un clan rival, le Clan des Rouges, dirigé par le puissant roi, Shiro. En réalité, Yashiro est un lycéen ordinaire qui n'a aucun souvenir de cet acte et découvre qu'il possède des pouvoirs cachés. Pour prouver son innocence, il doit naviguer à travers un monde complexe de rivalités entre clans, de conspirations, et de secrets. L'anime est connu pour son intrigue captivante, son riche univers de super-pouvoirs, et ses graphismes distinctifs.",
    "ID se déroule dans un futur proche où la police utilise une technologie avancée pour plonger dans les esprits des criminels et résoudre des affaires complexes. L'histoire suit Sakaido, un détective brillant mais traumatisé, qui entre dans un monde virtuel appelé \"Id Space\" pour traquer des criminels. Chaque Id Space est une manifestation psychologique du criminel, révélant des indices cruciaux pour résoudre les enquêtes. Alors qu'il explore ces mondes mentaux labyrinthiques, Sakaido est confronté à des énigmes psychologiques et à des vérités troublantes sur lui-même. L'anime est acclamé pour son intrigue originale, ses aspects psychologiques profonds, et son exploration des thèmes de la mémoire et de l'identité.",
    "Kakegurui se déroule à Hyakkaou Private Academy, une école élitiste où les jeux de hasard déterminent le statut social des élèves. Les étudiants, en utilisant leur intelligence et leur stratégie, parient de grosses sommes d'argent dans des jeux de société complexes pour grimper dans la hiérarchie scolaire. Yumeko Jabami, une nouvelle élève avec un penchant pour le risque, arrive à l'académie et bouleverse l'ordre établi avec ses compétences de jeu imprévisibles et son enthousiasme pour le danger. L'anime explore les stratégies de jeu, la psychologie des personnages, et les tensions entre les élèves tout en offrant une plongée dans un monde où les enjeux sont extrêmement élevés et les pertes peuvent être dévastatrices.",
    "Vinland Saga se déroule au début du XIe siècle et suit Thorfinn, un jeune guerrier viking avide de vengeance après le meurtre de son père par le chef de guerre Askeladd. Jeune et déterminé, Thorfinn rejoint l'armée d'Askeladd dans l'espoir de le défier en duel un jour. Au fur et à mesure que l'histoire progresse, Thorfinn est confronté aux réalités brutales de la guerre, des conflits internes et des luttes de pouvoir, tout en découvrant les véritables motivations et la complexité des personnages autour de lui. L'anime est salué pour son exploration approfondie des thèmes de la vengeance, du sacrifice, et des conséquences de la guerre, tout en offrant une riche reconstitution historique.",
    "Boku no Tonari ni Ankoku Hakaishin ga Imasu. suit la vie quotidienne de Fuuka, une lycéenne qui découvre que son nouveau voisin, une mystérieuse fille appelée Yūhi, est en réalité un démon seigneur des ténèbres déguisé. Yūhi, qui est venue dans le monde humain pour échapper à ses responsabilités et à ses ennemis, vit incognito tout en essayant de s'adapter à la vie normale. Fuuka se retrouve rapidement mêlée aux mésaventures de Yūhi, et les deux développent une relation complexe mêlant humour et romance. L'anime explore les thèmes de la coexistence entre les mondes, les relations interpersonnelles, et les déboires quotidiens dans un cadre où le fantastique et la vie scolaire se rencontrent.",
    "Mahouka Koukou no Rettousei se déroule dans un monde où la magie est une science codifiée et enseignée dans des écoles spécialisées. L'histoire suit Tatsuya Shiba, un élève de première année à l'Académie de Magie, qui entre dans l'école avec sa sœur cadette Miyuki. Tandis que Miyuki excelle dans l'art magique et est placée dans la section élite des élèves, Tatsuya est classé en tant que \"élève ordinaire\" en raison de ses capacités magiques perçues comme faibles. Cependant, il possède en réalité des compétences exceptionnelles en ingénierie magique et en combat. L'anime explore les défis de Tatsuya pour prouver sa valeur, tout en naviguant dans les intrigues scolaires et les menaces extérieures dans un univers où la magie et la technologie se rejoignent.",
    "Kabaneri of the Iron Fortress se déroule dans un monde post-apocalyptique où l'humanité est menacée par des créatures zombiesques appelées Kabane. Les survivants se réfugient dans des forteresses mobiles appelées \"trains blindés\", protégées par des murs et des canons. L'histoire suit Ikoma, un jeune ingénieur et combattant qui est mordu par un Kabane mais parvient à survivre en développant une méthode pour contrôler son infection. Avec l'aide de Mumei, une mystérieuse et redoutable guerrière, Ikoma lutte pour défendre son train, le Kōtetsujō, tout en cherchant un moyen de sauver l'humanité de l'extinction. L'anime est connu pour ses scènes d'action intenses, son atmosphère sombre et son mélange unique de steampunk et d'horreur.",

]


//create cards 

const fragment = document.createDocumentFragment();

// Event delegation: add a single event listener to the container
// container.addEventListener('click', function(event) {
//     if (event.target.classList.contains('item')) {
//         alert(event.target.textContent);
//     }
// });

//append anime cards to dom
for (let i = 0; i < SYNOPSIS.length; i++) {
    ANIMES_CARD.push(new Anime(NAMES[i], TITLES[i], GENRES[i], STUDIOS[i], EPISODES[i], SYNOPSIS[i]).CreateCard())
}

//shuffle anime cards
for (let i = ANIMES_CARD.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = ANIMES_CARD[i];
    ANIMES_CARD[i] = ANIMES_CARD[j];
    ANIMES_CARD[j] = temp;
}

for (let i = 0; i < ANIMES_CARD.length; i++) {
    const card = ANIMES_CARD[i];
    fragment.appendChild(card)
    card.childNodes[0].addEventListener('click', onCardClick);
}
container.appendChild(fragment);

cards =  document.getElementsByClassName('card');
let cardsBack = document.getElementsByClassName('card-back');

function CreateCard(name, title, genres, episodes, studio, synopsis) {
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card-container')

    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card')

    const cardFront = document.createElement('div')
    cardFront.classList.add('card-front')
    cardFront.classList.add(`card--${name}`)
    cardFront.id = name

    const cardForward = document.createElement('div')
    cardForward.classList.add('card_forward')

    const animeTitle = document.createElement('h4')
    animeTitle.textContent = title

    const cardForwardContent = document.createElement('div')
    cardForwardContent.classList.add('card_forward_content')

    const episodesText = document.createElement('p')
    episodesText.textContent = `Episodes: ${episodes}`

    const genresText = document.createElement('p')
    genresText.textContent = `Genres: ${genres}`

    const studioText = document.createElement('p')
    studioText.textContent = `Studio: ${studio}`

    const cardBack = document.createElement('div')
    cardBack.classList.add('card-back')
    cardBack.classList.add('card-back--' + name)

    const synopsisText = document.createElement('p')
    synopsisText.classList.add('white')
    synopsisText.textContent = synopsis

    cardBack.appendChild(synopsisText)
    
    cardForwardContent.appendChild(episodesText)
    cardForwardContent.appendChild(genresText)
    cardForwardContent.appendChild(studioText)

    cardForward.appendChild(animeTitle)
    cardForward.appendChild(cardForwardContent)

    cardFront.appendChild(cardForward)

    cardDiv.appendChild(cardFront)
    cardDiv.appendChild(cardBack)

    cardContainer.appendChild(cardDiv)

    return cardContainer
}

function onCardClick() {
    this.classList.toggle('flip-card');
}
function cardMove () {
    //apparition droite-gauche
    const tf = (c) => {
        removeCardsClass(c);
        c.classList.contains("translate2000") != true ? c.classList.add("translate2000"): "";
        c.style.opacity = "0";
    }
    //apparition gauche-droite
    const ts = (c) => {
        removeCardsClass(c);
        c.classList.contains("translate-2000") != true ? c.classList.add("translate-2000") : "";
        c.style.opacity = "0";
    }
    //disparition gauche-droite
    const rtf = (c) => {
        removeCardsClass(c);
        c.classList.contains("reverse-translate2000") != true ? c.classList.add("reverse-translate2000") : "";
        c.style.opacity = "1";
    }
    //disparition droite-gauche
    const rts = (c) => {
        removeCardsClass(c);
        c.classList.contains("reverse-translate-2000") != true ? c.classList.add("reverse-translate-2000") : "";
        c.style.opacity = "1";
    }

    //applique le nombre de cartes par lignes par rapport à la largeur de l'écran
    const NUMBER_OF_CARDS_IN_ARROW = Math.floor(window.innerWidth / 320)
    main.style.gridTemplateColumns = `repeat(${NUMBER_OF_CARDS_IN_ARROW}, 1fr)`

    //taille des éléments
    const HEADER_HEIGHT = document.getElementsByTagName("header")[0].offsetHeight
    const CARD_HEIGHT = 480
    const THIRD_OF_CARD_HEIGHT = CARD_HEIGHT / 3
    
    const scroll_top = dom.scrollTop
    const user_position = dom.clientHeight + scroll_top
    const starter = HEADER_HEIGHT + 2 * CARD_HEIGHT //la position de la 3ème ligne dans le dom
    const starter_row = 1 //la première ligne où on met les animations de translate

    for (let i = 0; i < cardLength; i++) {
        const card = ANIMES_CARD[i];
        const CURRENT_ROW = Math.ceil((i) / NUMBER_OF_CARDS_IN_ARROW) //pour que l'animation prenne part, on doit être à la 3e ligne

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
        else {
            //on met le délai par rapport à la position de la carte dans la ligne (1ère carte se trouve tout à droite)
            typeof card.style.animationDelay != undefined ? card.style.animationDelay = MAX_TIME - ANIMATION_COEF + "ms" : "";
            //on anime la carte
            user_position - THIRD_OF_CARD_HEIGHT > CURRENT_ROW_POSITION ? ts(card) : rts(card);
        }
    }
}

function responsiveLoading() {
    //mobile
    //on retire l'animation des cartes pour en mettre une autre plus simple
    if (media1007) {
        window.removeEventListener("scroll", cardMove)
        window.removeEventListener("resize", cardMove)
        cardsAnimationContainer.forEach(c => {
            removeCardsClass(c)
            c.classList.add("anim_card")
        })
    }

    //ordinateur
    //on met l'animation des cartes
    if (!media1007.matches) {
        cardMove();
        window.removeEventListener("scroll", cardMove);
        window.addEventListener("scroll", cardMove);
    }
}
       
window.onload = function() {
    //lorsque l'on vient de la page "tier list" et que l'on a cliqué sur le lien d'un anime, on redirige l'utilisateur vers celui-ci
    let params = new URLSearchParams(document.location.search); //on récupère les paramètres de l'url
    let animeName = params.get("anime"); //on récupère le nom de l'anime
    moveToAnimeCard(animeName)

    //animation des cartes
    responsiveLoading()
    window.addEventListener("resize", responsiveLoading)

    
    //on retire l'écran l'écran de chargement
    document.querySelector(".loading-screen").style.transform = "scale(0)";
    document.body.removeChild(document.querySelector(".loading-screen"));

    //animation du menu et de ses éléments
    document.querySelector(".menu").classList.add("anim_menu");

    for (let i = 0, t = 1; i<4; i++) {
        let li = document.querySelectorAll(".menu > nav > ul > li")[i];
        li.classList.add("anim-menu-elt");
        li.style.animationDelay = t + "s";
        t += 0.25;
    }

    //animation des lettres du menu
    document.querySelectorAll("a > span").forEach(span => {
        span.classList.add("spinning-letters");
    });

    //animation du formualaire de recherche
    document.querySelector("div.form").classList.add("translate2000");

}



//adapte la taille des cartes par rappport à l'écran lorsque qu'on est en mode tablette out smartphone
function cardSizeResponsiveMobile() {
    if (media1007.matches) {
        let width = 0.3 * dom.offsetWidth;
        let height = 1.5 * width;
        cardsAnimationContainer.forEach(c => {
            c.style.width = width + "px";
            c.style.height = height + "px";
        });
        return;
    }
    cardsAnimationContainer.forEach(c => {
        c.style.width = 320 + "px";
        c.style.height = 480 + "px";
    });
}
cardSizeResponsiveMobile();
window.addEventListener("resize", cardSizeResponsiveMobile);

/* toutes les fonctionnalités si l'utilisateur est connecté */
if (typeof kitsune != typeof undefined) {

    //les fonctions qui permettent de faire apparaître ou disparaître les animes dans la fav-list
    function favCardApparition(elt) {
        elt.classList.add('fav-card-animation-apparition')
        elt.classList.remove('fav-card-animation-disparition')
        elt.style.display = "block"
    }
    function favCardDisparition(elt) {
        elt.classList.add('fav-card-animation-disparition')
        elt.classList.remove('fav-card-animation-apparition')
        setTimeout(() => elt.style.display = "none", 300);
    }

    function addFavCard(emptyStarContainer, filledStarContainer, newAnimeCard, animeName, i) {
        //remet l'étoile colorée et ajoute la carte à la fav liste
        emptyStarContainer.style.opacity = 0
        filledStarContainer.style.opacity = 1
        favCardApparition(newAnimeCard)
        //crée un cookie pour enregistrer le choix
        createCookie(`anime-fav-${i}`, animeName, 10)
    }
    function removeFavCard(emptyStarContainer, filledStarContainer, newAnimeCard, i) {
        //met l'étoile vide et retire la carte de la fav-list
        emptyStarContainer.style.opacity = 1
        filledStarContainer.style.opacity = ""
        favCardDisparition(newAnimeCard)
        //supprime le cookie affilié
        removeCookie(`anime-fav-${i}`)
    }

/* création de l'étoile (signifiant que l'utillisateur aime bien l'anime) que l'on mettra en haut à droite des cartes 
    il y aura 2 étoiles:
    -Une étoile vide, elle représente le mode par défaut de la carte (non choisie par l'utilisateur)
    -Une étoile colorée, l'utilisateur aime bien cet anime
*/

    //le conteneur de la fav-list
    const newAnimeContainer = document.getElementById('fav-list-ctr-animes');
    const favListContainer = document.getElementById('fav-list-ctr')
    const favListContainerCross = document.getElementById("fav-list-ctr-cross")
    favListContainerCross.addEventListener('click', () => {
        favListContainer.classList.add("reverse-translate2000")
        favListContainer.classList.remove("translate2000")
    });

/* création des étoiles et de tout ce qui concerne la fav-list*/

    for(let i = 0; i < cardLength; i++) {
        //création de l'étoile "vide"
        const emptyStarContainer = document.createElement('div');
        emptyStarContainer.classList.add('empty-star-container');

        const emptyStar = document.createElement('img');
        emptyStar.src = '../image/empty-star.png';
        emptyStarContainer.appendChild(emptyStar)

        //création de l'étoile "remplie"
        const filledStarContainer = document.createElement('div');
        filledStarContainer.classList.add('filled-star-container');

        const filledStar = document.createElement('img');
        filledStar.src = '../image/filled-star.png';
        filledStarContainer.appendChild(filledStar);

        //on ajoute ces éléments dans les cartes
        cards[i].appendChild(emptyStarContainer)
        cards[i].appendChild(filledStarContainer)

        /*place une miniature de la carte correspondante dans la liste "j'aime" */

        const animeName = filledStarContainer.parentElement.id

        // crée une nouvelle carte avec le même cover que l'originelle
        const newAnimeCard = document.createElement('div');
        newAnimeCard.style.background = `url(../image/cover/${animeName}.jpg)`
        newAnimeCard.classList.add("new-anime-card")
        newAnimeCard.classList.add('fav-card-animation-apparition')

        //met toutes les nouvelles cartes dans la fav-list
        newAnimeContainer.appendChild(newAnimeCard);

        //lorsque l'on clique sur la nouvelle carte, elle nous redirige directement vers la carte originelle
        newAnimeCard.addEventListener("click", () => moveToAnimeCard(animeName));

        //petit problème, on a mit un hover qui fait que lorsque l'on clique sur l'étoile, on clique pas sur celle qui est vide mais celle qui est remplie
        //on va donc créer un boolean de valeur vrai pour dire que le hover est en marche
        let isHoverFilledStar = true
        let isStarFilled = false

        function addOrRemoveCardToFavList(e) {
            e.stopPropagation();
            //met l'opacité de l'étoile colorée à 1 (ce bloc ne s'exécute qu'une fois) et ajoute la carte correspondante à l'anime cliqué dans la fav liste
            if (isHoverFilledStar) {
                addFavCard(emptyStarContainer, filledStarContainer, newAnimeCard, animeName, i)
                return isHoverFilledStar = false, isStarFilled = true
            }
            //remet l'étoile non colorée et retire la carte de la fav liste
            if (isStarFilled) {
                removeFavCard(emptyStarContainer, filledStarContainer, newAnimeCard, i)
                return isStarFilled = false        
            }
            addFavCard(emptyStarContainer, filledStarContainer, newAnimeCard, animeName, i);
            return isStarFilled = true
        }
        filledStarContainer.addEventListener('click', addOrRemoveCardToFavList);

        //si des cookies sont définis alors on met les animes correspondant dans la fav-list
        // const cookieValue = readCookie(`anime-fav-${i}`);
        // if (cookieValue != null) document.getElementById(cookieValue).children[2].click();
    }
}

