/* === main.js === */
/* Language engine, animations, initialization */

/* === main.js === */
/* Language engine, animations, initialization */

// ── TRANSLATIONS (all 3 languages, inlined for reliability) ─────
const T = {
  en: {
    nav: { discover:'For Players', organize:'For Organizers', profile:'Tournaments', contact:'Contact', cta:'Download Free' },
    hero: {
      h1:  'Play Soccer<br><em>Anywhere, Anytime</em>',
      sub: 'Find nearby matches, fill your squad, and hit the field — all from one app.',
    },
    marquee: ['Find a Game Near You','Create a Match in 60 Seconds','5v5 · 6v6 · 7v7','Chill or Competitive','Fill Your Squad Instantly',"Morocco's Football Community",'Tournaments Across Morocco','Track Your Football Identity'],
    how: {
      label:'Simple by design',
      title:'FROM IDEA TO<br>KICKOFF IN MINUTES',
      sub:  'No back-and-forth. No chasing people. Three steps and you\'re on the pitch.',
      s1badge:'Discover', s1t:'Discover a Match',  s1p:'Browse nearby games filtered by level, format and time. Find exactly the game you\'re looking for.',
      s2badge:'Join',     s2t:'Claim Your Spot',   s2p:'View match details, check who\'s playing, and confirm your place in one tap.',
      s3badge:'Play',     s3t:'Show Up & Play',    s3p:'Squad confirmed. Field booked. Everyone notified. You just show up and play.',
      cta:'Get the App',
    },
    pitchcta: {
      eyebrow: 'Join thousands of players',
      title:   'Ready to get on the pitch?',
      sub:     'Find games, join players, and play whenever you want — all in one app.',
    },
    story: {
      label:   'Our Story',
      title:   'Building connections through the beautiful game',
      p1:      'Partido was born from a deep love of football and a desire to make the game more accessible to everyone.',
      p2:      'In Morocco, football is more than just a sport — it\'s part of everyday life, culture, and identity. From local pitches to neighborhoods, the game brings people together.',
      mission: 'Our mission is simple: to connect players, create opportunities to play, and build a stronger, more united football community.',
      cta:     'Join the community',
    },
    tourn: {
      watermark:'TOURNAMENTS',
      badge:'Coming Soon',
      title:'FOOTBALL<br>TOURNAMENTS<br><span style="color:var(--g);">ACROSS MOROCCO</span>',
      sub:  'The biggest youth football competition touring city to city. From Casablanca to Marrakech to Tanger — compete on a national stage.',
      p1:'Cash prizes', p2v:'City-to-City', p2l:'Nationwide competition across Morocco', p3v:'Every Player', p3l:'Medals & certificates for all participants',
      cta:'Register My Team →',
    },
    proof: { p1v:'Fill games faster', p1l:'Find missing players instantly', p2v:'Find games instantly', p2l:'Join games anytime', p3v:'Play & win prizes', p3l:'Tournaments across Morocco', p4v:'100% free', p4l:'No fees, no subscriptions' },
    reviews: {
      label:'What players say', title:'PLAYERS ALREADY<br>LOVE IT',
      r1:'"Finally an app that solves the real problem. No more 50-message WhatsApp threads just to confirm 11 people."',
      r2:'"I moved to a new city and had zero people to play with. Two days after downloading Partido I was in a regular squad."',
      r3:'"The behavior tracking is underrated. I know exactly who I\'m inviting and whether they actually show up."',
    },
    cta: {
      label:'Ready to play?',
      title:'YOUR NEXT<br>MATCH IS<br><span style="color:var(--g);">WAITING</span>',
      sub:  'Download Partido free. Create a match in 60 seconds or find one nearby. Your squad is already out there.',
    },
    contact: {
      label:'Contact', title:'Get in touch', heading:'Get in Touch',
      intro:'Have a question, feedback, a partnership idea, or just want to say hello? We\'d love to hear from you.',
      sub:'Have a question, feedback, or want to partner with us? We\'d love to hear from you.',
      r1t:'Questions about the app', r1p:'Something not working? We\'ll help you out.',
      r2t:'Feedback & suggestions',  r2p:'Your ideas shape the product. Share them.',
      r3t:'Partnerships & business', r3p:'Clubs, brands, or investors — let\'s talk.',
      formtitle:'Send us a message', formsub:'We usually reply within 24 hours.',
      fname:'First name', lname:'Last name',
      email:'Email address', phone:'Phone number', message:'Your message',
      topic:'How can we help?', topicph:'Select a topic...',
      t1:'Question about the app', t2:'Feedback or suggestion',
      t3:'Partnership or business', t4:'Press or media', t5:'Other',
      btn:'Send message', direct:'Or reach us directly at:',
    },
    footer: { privacy:'Privacy', terms:'Terms', contact:'Contact', getapp:'Get the app', tagline:'Connecting players through the beautiful game.', copy:'Copyright © 2026 Partido. All rights reserved.' },
    bridge: { text: 'Or create your own game', join: 'Find & join a game', or: 'OR', create: 'Create your own' },
    org: {
      label:'For Organizers', title:'Run your game, your way',
      sub:'Everything you need to set up, manage, and enjoy your match — from first tap to final whistle.',
      c1badge:'Set Up', c1t:'Set Up Your Game', c1p:'Choose the time, format, level, and all the details before publishing.',
      c2badge:'Manage', c2t:'Manage Your Match', c2p:'Once your game is live, track players, edit details, and manage everything as the organizer.',
      c3badge:'Play', c3t:'Play Your Game', c3p:'Your squad is ready. Just show up and enjoy the game.',
    },
    editorial: {
      label:'Inside Partido', title:'Growing the beautiful game',
      sub:'Stay up to date with Partido\'s latest news, player stories, product updates, and tips for getting the most out of the app.',
      c1tag:'Community', c1t:'Partido is changing how football is played in your city', c1p:'No more endless group chats or last-minute cancellations. Discover how Partido makes it simple to find, organize, and play games — anytime.',
      c2tag:'Tips', c2t:'How to fill your games faster (and better)', c2p:'From choosing the right level to setting the right vibe, learn the small details that make your games fill instantly with the right players.',
      c3tag:'Culture', c3t:'More than football: building real connections', c3p:'Partido is not just about matches — it\'s about people. Meet players, build your network, and become part of a growing football community.',
      c4tag:'Vision', c4t:'Football, reimagined for Morocco\'s next generation', c4p:'From neighborhood pitches to city-wide games, Partido is building a new way to play — more organized, more social, and more accessible.',
      cta:'Keep reading ↗',
    },
    art: {
      back:'Back to home', inside:'Inside Partido',
      community: {
        pagetitle:'Partido is changing how football is played in your city — Partido',
        tag:'Community', title:'Partido is changing how<br>football is played<br>in your city', meta:'Community · 3 min read',
        p1:'For years, organizing a simple football game meant endless messages, last-minute cancellations, and uncertainty about who would actually show up. The experience was fragmented, inefficient, and often frustrating.',
        pull1:'Partido changes that.',
        p2:'By bringing everything into one place, Partido makes it simple to find games, create matches, and connect with players who match your level, your style, and your mindset. No more guessing. No more chaos.',
        p3:'Whether you\'re new to a city, looking to play more regularly, or just tired of unreliable group chats, Partido gives you a structured, seamless way to play football — on your terms.',
        pull2:'But Partido is more than just a tool.',
        p4:'It\'s a growing community of players who care about the game, respect each other\'s time, and want a better way to play. Every match organized, every player who shows up, and every connection made contributes to building a stronger football culture.',
        p5:'From casual games to competitive matches, Partido is redefining how football lives in your city — making it more accessible, more reliable, and more social.',
      },
      tips: {
        pagetitle:'How to fill your games faster (and better) — Partido',
        tag:'Tips', title:'How to fill your games<br>faster (and better)', meta:'Tips · 4 min read',
        p1:'Creating a game is easy. Filling it with the right players — that\'s where it gets interesting.',
        p2:'If you\'ve ever struggled to complete your squad, you\'re not alone. Most games don\'t fail because there aren\'t enough players — they fail because the game isn\'t set up the right way.',
        pull1:'The first key is clarity.',
        p3:'Players decide in seconds whether to join a game. If your match lacks clear information — level, format, duration, or price — most players will simply skip it. A well-defined game builds instant trust.',
        pull2:'The second key is positioning.',
        p4:'A game scheduled at the wrong time or in the wrong location will naturally struggle. Think like a player: after work, nearby, at a convenient hour. Small adjustments can dramatically increase your chances of filling your game.',
        pull3:'The third key is consistency.',
        p5:'Players come back to organizers they trust. If your games are well-organized, start on time, and match expectations, you build a reputation — and that reputation fills your future games faster than anything else.',
        pull4:'And finally, the most important factor: the vibe.',
        p6:'Some players want competitive matches. Others just want to enjoy a relaxed game. When your game clearly reflects the right atmosphere, you attract the right people — and everything becomes easier.',
        p7:'Partido is designed to help you do all of this naturally.',
        p8:'By structuring your games, making them visible to the right players, and removing friction, Partido doesn\'t just help you fill games — it helps you build better ones.',
      },
      culture: {
        pagetitle:'More than football: building real connections — Partido',
        tag:'Culture', title:'More than football:<br>building real connections', meta:'Culture · 3 min read',
        p1:'Football has always been more than just a game.',
        p2:'It\'s about the people you meet, the moments you share, and the stories that stay long after the final whistle. Some of the strongest friendships start on a pitch — between players who didn\'t know each other just an hour before kickoff.',
        p3:'But in today\'s world, those connections don\'t happen as naturally as they used to.',
        p4:'People move cities. Schedules get busy. Groups become closed. And for many players, finding a game is no longer just about football — it\'s about finding people.',
        pull1:'That\'s where Partido changes everything.',
        p5:'Partido is not just designed to help you play. It\'s designed to help you connect.',
        p6:'Every match is an opportunity to meet new players, discover different styles, and be part of a wider football community. Whether you join alone or with friends, you\'re stepping into an environment where everyone shares the same goal: to play.',
        pull2:'Over time, these small interactions turn into something bigger.',
        p7:'Familiar faces. Trusted teammates. New friendships. A network that grows naturally, game after game.',
        pull3:'Because at its core, football is social.',
        p8:'And Partido brings that back — not by forcing it, but by creating the right conditions for it to happen.',
        p9:'More games. More people. More connections.',
        p10:'That\'s what makes it more than football.',
      },
      vision: {
        pagetitle:'Football, reimagined for Morocco\'s next generation — Partido',
        tag:'Vision', title:'Football, reimagined for<br>Morocco\'s next generation', meta:'Vision · 4 min read',
        p1:'Football is everywhere in Morocco.',
        p2:'On every street, in every neighborhood, on every pitch — the game lives through the people. It\'s spontaneous, passionate, and deeply rooted in the culture.',
        p3:'But while the love for football has always been there, the way people organize and experience the game hasn\'t evolved at the same pace.',
        p4:'Too often, playing still depends on who you know, last-minute coordination, and fragmented communication. Great games are missed. Players are left out. And the overall experience remains inconsistent.',
        pull1:'Partido is here to change that.',
        p5:'We believe the next generation of football in Morocco deserves better — better organization, better access, and better experiences.',
        p6:'By bringing structure to how games are created, discovered, and played, Partido transforms something informal into something seamless — without losing the spirit of the game.',
        p7:'From neighborhood matches to city-wide tournaments, Partido creates a new layer on top of football: one that is more connected, more reliable, and more inclusive.',
        pull2:'It\'s not about replacing the culture.',
        p8:'It\'s about elevating it.',
        p9:'Making it easier for anyone to play, anywhere, at any time — while preserving what makes football in Morocco special.',
        p10:'And this is just the beginning.',
        p11:'As the community grows, so does the vision: a unified football ecosystem where players, games, and competitions are all connected through one platform.',
        pull3:'A new standard for how football is played.',
        p12:'Built for Morocco. Designed for the next generation.',
      },
    },
  },

  fr: {
    nav: { discover:'Pour les Joueurs', organize:'Pour les Organisateurs', profile:'Tournois', contact:'Contact', cta:'Télécharger' },
    hero: {
      h1:  'Jouez au Foot<br><em>Partout, À Tout Moment</em>',
      sub: 'Trouvez des matchs à proximité, complétez votre équipe et foncez sur le terrain — le tout depuis une seule appli.',
    },
    marquee: ['Trouve un Match Près de Toi','Crée un Match en 60 Secondes','5c5 · 6c6 · 7c7','Ambiance Détente ou Compétition','Complète ton Équipe Instantanément','La Communauté Football du Maroc','Tournois à Travers le Maroc','Construis ton Identité Football'],
    how: {
      label:'Simple par conception',
      title:'DE L\'IDÉE AU<br>COUP D\'ENVOI EN MINUTES',
      sub:  'Pas d\'allers-retours. Pas de relances. Trois étapes et tu es sur le terrain.',
      s1badge:'Découvrir', s1t:'Découvrir un Match',  s1p:'Définis le format, niveau, date, heure et ambiance. Ton match est en ligne en 30 secondes.',
      s2badge:'Rejoindre', s2t:'Réserver ta Place',   s2p:'Les joueurs de ton niveau voient ton match et demandent à rejoindre. Tu vérifies et approuves.',
      s3badge:'Jouer',     s3t:'Sur le Terrain',      s3p:'Équipe confirmée, terrain réservé. Tout le monde est notifié. Tu n\'as plus qu\'à venir jouer.',
      cta:'Télécharger l\'App',
    },
    pitchcta: {
      eyebrow: 'Rejoins des milliers de joueurs',
      title:   'Prêt à entrer sur le terrain ?',
      sub:     'Trouve des matchs, rejoins des joueurs et joue quand tu veux — tout dans une seule app.',
    },
    story: {
      label:   'Notre Histoire',
      title:   'Créer des liens à travers le beau jeu',
      p1:      'Partido est né d\'un amour profond du football et d\'une volonté de rendre le jeu plus accessible à tous.',
      p2:      'Au Maroc, le football est bien plus qu\'un sport — c\'est une partie de la vie quotidienne, de la culture et de l\'identité. Des terrains locaux aux quartiers, le jeu rassemble les gens.',
      mission: 'Notre mission est simple : connecter les joueurs, créer des opportunités de jouer et bâtir une communauté football plus forte et plus unie.',
      cta:     'Rejoindre la communauté',
    },
    tourn: {
      watermark:'TOURNOIS',
      badge:'Bientôt disponible',
      title:'TOURNOIS DE<br>FOOTBALL<br><span style="color:var(--g);">À TRAVERS LE MAROC</span>',
      sub:  'La plus grande compétition de football jeune itinérante. De Casablanca à Marrakech à Tanger — sur une scène nationale.',
      p1:'Prix en espèces', p2v:'Ville par Ville', p2l:'Compétition nationale à travers le Maroc', p3v:'Chaque Joueur', p3l:'Médailles et certificats pour tous les participants',
      cta:'Inscrire mon Équipe →',
    },
    proof: { p1v:'Complétez votre match en minutes', p1l:'Trouvez les joueurs manquants instantanément', p2v:'Trouvez des matchs instantanément', p2l:'Même si vous jouez seul', p3v:'Jouez pour des prix', p3l:'Participez aux tournois au Maroc', p4v:'100% gratuit', p4l:'Sans frais, sans abonnement' },
    reviews: {
      label:'Ce que disent les joueurs', title:'LES JOUEURS<br>L\'ADORENT DÉJÀ',
      r1:'"Enfin une app qui résout le vrai problème. Fini les 50 messages WhatsApp juste pour confirmer 11 personnes."',
      r2:'"J\'ai déménagé dans une nouvelle ville sans personne à qui jouer. Deux jours après Partido j\'étais dans une équipe régulière."',
      r3:'"Le suivi de comportement est sous-estimé. Je sais exactement qui j\'invite et s\'ils vont vraiment se pointer."',
    },
    cta: {
      label:'Prêt à jouer ?',
      title:'TON PROCHAIN<br>MATCH<br><span style="color:var(--g);">T\'ATTEND</span>',
      sub:  'Télécharge Partido gratuitement. Crée un match en 60 secondes ou trouve-en un. Ton équipe t\'attend.',
    },
    contact: {
      label:'Contact', title:'Contactez-nous', heading:'Contactez-nous',
      intro:'Une question, un retour, ou envie de collaborer ? Nous serions ravis de vous entendre.',
      sub:'Une question, un retour, ou envie de collaborer ? Nous serions ravis de vous entendre.',
      r1t:'Questions sur l\'app',    r1p:'Quelque chose ne marche pas ? On vous aide.',
      r2t:'Retours & suggestions',   r2p:'Vos idées façonnent le produit. Partagez-les.',
      r3t:'Partenariats & business', r3p:'Clubs, marques ou investisseurs — parlons-en.',
      formtitle:'Envoyez-nous un message', formsub:'Nous répondons généralement sous 24h.',
      fname:'Prénom', lname:'Nom de famille',
      email:'Adresse email', phone:'Numéro de téléphone', message:'Votre message',
      topic:'Comment pouvons-nous vous aider ?', topicph:'Choisir un sujet...',
      t1:'Question sur l\'app', t2:'Retour ou suggestion',
      t3:'Partenariat ou business', t4:'Presse ou médias', t5:'Autre',
      btn:'Envoyer le message', direct:'Ou contactez-nous directement à :',
    },
    footer: { privacy:'Confidentialité', terms:'CGU', contact:'Contact', getapp:"Télécharger l'app", tagline:'Connecter les joueurs à travers le beau jeu.', copy:'Copyright © 2026 Partido. Tous droits réservés.' },
    bridge: { text: 'Ou crée ton propre match', join: 'Trouver &amp; rejoindre', or: 'OU', create: 'Créer le mien' },
    org: {
      label:'Pour les Organisateurs', title:'Jouez à votre façon',
      sub:'Tout ce dont vous avez besoin pour créer, gérer et profiter de votre match — du premier tap au coup de sifflet final.',
      c1badge:'Créer', c1t:'Créez votre match', c1p:'Choisissez l\'heure, le format, le niveau et tous les détails avant de publier.',
      c2badge:'Gérer', c2t:'Gérez votre match', c2p:'Une fois votre match en ligne, suivez les joueurs, modifiez les détails et gérez tout en tant qu\'organisateur.',
      c3badge:'Jouer', c3t:'Jouez votre match', c3p:'Votre équipe est prête. Il ne vous reste plus qu\'à venir et profiter du jeu.',
    },
    editorial: {
      label:'Dans Partido', title:'Faire grandir le beau jeu',
      sub:'Restez informé des dernières actualités de Partido, des histoires de joueurs, des mises à jour produit et des conseils pour tirer le meilleur de l\'app.',
      c1tag:'Communauté', c1t:'Partido change la façon de jouer au football dans votre ville', c1p:'Fini les interminables groupes de discussion ou les annulations de dernière minute. Découvrez comment Partido rend simple de trouver, organiser et jouer — à tout moment.',
      c2tag:'Conseils', c2t:'Comment remplir vos matchs plus vite (et mieux)', c2p:'Du bon niveau à la bonne ambiance, apprenez les petits détails qui font que vos matchs se remplissent instantanément avec les bons joueurs.',
      c3tag:'Culture', c3t:'Plus que du football : tisser de vraies connections', c3p:'Partido n\'est pas seulement une question de matchs — c\'est une question de personnes. Rencontrez des joueurs, développez votre réseau et faites partie d\'une communauté football grandissante.',
      c4tag:'Vision', c4t:'Le football, réinventé pour la prochaine génération marocaine', c4p:'Des terrains de quartier aux matchs à l\'échelle de la ville, Partido construit une nouvelle façon de jouer — plus organisée, plus sociale et plus accessible.',
      cta:'Lire la suite ↗',
    },
    art: {
      back:'Retour à l\'accueil', inside:'Dans Partido',
      community: {
        pagetitle:'Partido change la façon de jouer au football dans votre ville — Partido',
        tag:'Communauté', title:'Partido change la façon<br>de jouer au football<br>dans votre ville', meta:'Communauté · 3 min de lecture',
        p1:'Pendant des années, organiser un simple match de football signifiait des messages sans fin, des annulations de dernière minute et l\'incertitude sur qui se présenterait vraiment. L\'expérience était fragmentée, inefficace et souvent frustrante.',
        pull1:'Partido change ça.',
        p2:'En réunissant tout en un seul endroit, Partido rend simple de trouver des matchs, créer des rencontres et se connecter avec des joueurs qui correspondent à votre niveau, votre style et votre état d\'esprit. Fini les devinettes. Fini le chaos.',
        p3:'Que vous soyez nouveau dans une ville, souhaitiez jouer plus régulièrement, ou soyez simplement fatigué des groupes de discussion peu fiables, Partido vous offre une façon structurée et fluide de jouer au football — selon vos conditions.',
        pull2:'Mais Partido est bien plus qu\'un simple outil.',
        p4:'C\'est une communauté grandissante de joueurs qui se soucient du jeu, respectent le temps de chacun et veulent une meilleure façon de jouer. Chaque match organisé, chaque joueur qui se présente et chaque connexion établie contribue à construire une culture football plus forte.',
        p5:'Des matchs informels aux rencontres compétitives, Partido redéfinit la place du football dans votre ville — le rendant plus accessible, plus fiable et plus social.',
      },
      tips: {
        pagetitle:'Comment remplir vos matchs plus vite (et mieux) — Partido',
        tag:'Conseils', title:'Comment remplir vos matchs<br>plus vite (et mieux)', meta:'Conseils · 4 min de lecture',
        p1:'Créer un match, c\'est facile. Le remplir avec les bons joueurs — c\'est là que ça devient intéressant.',
        p2:'Si vous avez déjà eu du mal à compléter votre équipe, vous n\'êtes pas seul. La plupart des matchs n\'échouent pas parce qu\'il n\'y a pas assez de joueurs — ils échouent parce que le match n\'est pas configuré de la bonne façon.',
        pull1:'La première clé, c\'est la clarté.',
        p3:'Les joueurs décident en quelques secondes s\'ils rejoignent un match. Si votre match manque d\'informations claires — niveau, format, durée ou prix — la plupart des joueurs vont simplement passer. Un match bien défini crée une confiance instantanée.',
        pull2:'La deuxième clé, c\'est le positionnement.',
        p4:'Un match prévu au mauvais moment ou au mauvais endroit aura naturellement du mal à se remplir. Pensez comme un joueur : après le travail, à proximité, à une heure pratique. De petits ajustements peuvent augmenter considérablement vos chances de remplir votre match.',
        pull3:'La troisième clé, c\'est la régularité.',
        p5:'Les joueurs reviennent vers les organisateurs en qui ils ont confiance. Si vos matchs sont bien organisés, commencent à l\'heure et correspondent aux attentes, vous bâtissez une réputation — et cette réputation remplit vos futurs matchs plus vite que n\'importe quoi d\'autre.',
        pull4:'Et enfin, le facteur le plus important : l\'ambiance.',
        p6:'Certains joueurs veulent des matchs compétitifs. D\'autres veulent juste profiter d\'un match détendu. Quand votre match reflète clairement la bonne atmosphère, vous attirez les bonnes personnes — et tout devient plus facile.',
        p7:'Partido est conçu pour vous aider à faire tout cela naturellement.',
        p8:'En structurant vos matchs, en les rendant visibles aux bons joueurs et en supprimant les frictions, Partido ne vous aide pas seulement à remplir vos matchs — il vous aide à en créer de meilleurs.',
      },
      culture: {
        pagetitle:'Plus que du football : tisser de vraies connections — Partido',
        tag:'Culture', title:'Plus que du football :<br>tisser de vraies connections', meta:'Culture · 3 min de lecture',
        p1:'Le football a toujours été bien plus qu\'un simple jeu.',
        p2:'C\'est une question de personnes que vous rencontrez, de moments que vous partagez et d\'histoires qui restent longtemps après le coup de sifflet final. Certaines des amitiés les plus fortes commencent sur un terrain — entre des joueurs qui ne se connaissaient pas une heure avant le coup d\'envoi.',
        p3:'Mais dans le monde d\'aujourd\'hui, ces connexions ne se font plus aussi naturellement qu\'avant.',
        p4:'Les gens changent de ville. Les emplois du temps se chargent. Les groupes se ferment. Et pour de nombreux joueurs, trouver un match n\'est plus seulement une question de football — c\'est une question de trouver des gens.',
        pull1:'C\'est là que Partido change tout.',
        p5:'Partido n\'est pas seulement conçu pour vous aider à jouer. Il est conçu pour vous aider à vous connecter.',
        p6:'Chaque match est une opportunité de rencontrer de nouveaux joueurs, de découvrir différents styles et de faire partie d\'une communauté football plus large. Que vous rejoigniez seul ou avec des amis, vous entrez dans un environnement où tout le monde partage le même objectif : jouer.',
        pull2:'Avec le temps, ces petites interactions deviennent quelque chose de plus grand.',
        p7:'Des visages familiers. Des coéquipiers de confiance. De nouvelles amitiés. Un réseau qui grandit naturellement, match après match.',
        pull3:'Parce qu\'à son cœur, le football est social.',
        p8:'Et Partido le ramène — non pas en le forçant, mais en créant les bonnes conditions pour que cela se produise.',
        p9:'Plus de matchs. Plus de personnes. Plus de connexions.',
        p10:'C\'est ce qui en fait plus que du football.',
      },
      vision: {
        pagetitle:'Le football, réinventé pour la prochaine génération marocaine — Partido',
        tag:'Vision', title:'Le football, réinventé pour<br>la prochaine génération<br>marocaine', meta:'Vision · 4 min de lecture',
        p1:'Le football est partout au Maroc.',
        p2:'Dans chaque rue, dans chaque quartier, sur chaque terrain — le jeu vit à travers les gens. C\'est spontané, passionné et profondément ancré dans la culture.',
        p3:'Mais si l\'amour du football a toujours été là, la façon dont les gens organisent et vivent le jeu n\'a pas évolué au même rythme.',
        p4:'Trop souvent, jouer dépend encore de qui vous connaissez, de la coordination de dernière minute et de la communication fragmentée. De bons matchs sont manqués. Des joueurs sont laissés de côté. Et l\'expérience globale reste inconsistante.',
        pull1:'Partido est là pour changer ça.',
        p5:'Nous croyons que la prochaine génération du football au Maroc mérite mieux — une meilleure organisation, un meilleur accès et de meilleures expériences.',
        p6:'En apportant de la structure à la façon dont les matchs sont créés, découverts et joués, Partido transforme quelque chose d\'informel en quelque chose de fluide — sans perdre l\'esprit du jeu.',
        p7:'Des matchs de quartier aux tournois à l\'échelle de la ville, Partido crée une nouvelle couche au-dessus du football : une couche plus connectée, plus fiable et plus inclusive.',
        pull2:'Il ne s\'agit pas de remplacer la culture.',
        p8:'Il s\'agit de l\'élever.',
        p9:'Rendre plus facile pour chacun de jouer, n\'importe où, à tout moment — tout en préservant ce qui rend le football marocain spécial.',
        p10:'Et ce n\'est que le début.',
        p11:'À mesure que la communauté grandit, la vision aussi : un écosystème football unifié où les joueurs, les matchs et les compétitions sont tous connectés via une seule plateforme.',
        pull3:'Un nouveau standard pour la façon dont le football est joué.',
        p12:'Conçu pour le Maroc. Pensé pour la prochaine génération.',
      },
    },
  },

  ar: {
    nav: { discover:'للاعبين', organize:'للمنظمين', profile:'بطولات', contact:'تواصل', cta:'حمّل مجاناً' },
    hero: {
      h1:  'العب كرة القدم<br><em>في أي مكان، في أي وقت</em>',
      sub: 'اعثر على مباريات قريبة، اكمل فريقك، وانزل الملعب — كل شيء من تطبيق واحد.',
    },
    marquee: ['ابحث عن مباراة قريبة منك','أنشئ مباراة في 60 ثانية','5 ضد 5 · 6 ضد 6 · 7 ضد 7','جو ترفيهي أو تنافسي','اكمل فريقك فوراً','مجتمع كرة القدم بالمغرب','بطولات في أرجاء المغرب','ابنِ هويتك الكروية'],
    how: {
      label:'بسيط بطبعه',
      title:'من الفكرة<br>إلى انطلاق المباراة<br>في دقائق',
      sub:  'لا ذهاب وإياب. لا ملاحقة. ثلاث خطوات وأنت على أرض الملعب.',
      s1badge:'اكتشف', s1t:'اكتشف مباراة',   s1p:'تصفح المباريات القريبة مفلترة حسب المستوى والتنسيق والوقت. ابحث عن المباراة المناسبة لك.',
      s2badge:'انضم',  s2t:'احجز مكانك',      s2p:'شاهد تفاصيل المباراة، تحقق من اللاعبين، وأكد انضمامك بنقرة واحدة.',
      s3badge:'العب',  s3t:'احضر والعب',      s3p:'الفريق مكتمل، الملعب محجوز، الجميع مُبلَّغ. ما عليك سوى الحضور واللعب.',
      cta:'حمّل التطبيق',
    },
    pitchcta: {
      eyebrow: 'انضم لآلاف اللاعبين',
      title:   'مستعد لدخول الملعب؟',
      sub:     'ابحث عن المباريات، انضم للاعبين، والعب متى تشاء — كل ذلك في تطبيق واحد.',
    },
    story: {
      label:   'قصتنا',
      title:   'نبني روابط من خلال الجميلة',
      p1:      'وُلد بارتيدو من حب عميق لكرة القدم ورغبة في جعل اللعبة في متناول الجميع.',
      p2:      'في المغرب، كرة القدم أكثر من مجرد رياضة — إنها جزء من الحياة اليومية والثقافة والهوية. من الملاعب المحلية إلى الأحياء، تجمع اللعبة الناس.',
      mission: 'مهمتنا بسيطة: ربط اللاعبين، وخلق فرص للعب، وبناء مجتمع كرة قدم أقوى وأكثر وحدة.',
      cta:     'انضم إلى المجتمع',
    },
    tourn: {
      watermark:'بطولات',
      badge:'قريباً',
      title:'بطولات كرة القدم<br>في <span style="color:var(--g);">أرجاء المغرب</span>',
      sub:  'أكبر منافسة شبابية لكرة القدم تجوب المدن. من الدار البيضاء إلى مراكش إلى طنجة — نافس على المستوى الوطني.',
      p1:'جوائز نقدية', p2v:'مدينة إلى مدينة', p2l:'منافسة وطنية في أرجاء المغرب', p3v:'كل لاعب', p3l:'ميداليات وشهادات لجميع المشاركين',
      cta:'سجّل فريقي ←',
    },
    proof: { p1v:'أكمل مباراتك في دقائق', p1l:'ابحث عن اللاعبين الناقصين فوراً', p2v:'ابحث عن مباريات فوراً', p2l:'حتى لو كنت تلعب بمفردك', p3v:'العب للفوز بجوائز', p3l:'نافس في بطولات عبر المغرب', p4v:'مجاني 100%', p4l:'بدون رسوم أو اشتراكات' },
    reviews: {
      label:'ما يقوله اللاعبون', title:'اللاعبون<br>أحبوه بالفعل',
      r1:'"أخيراً تطبيق يحل المشكلة الحقيقية. انتهت رسائل واتساب الخمسين لتأكيد 11 شخصاً."',
      r2:'"انتقلت لمدينة جديدة ولم أعرف أحداً. بعد يومين من التنزيل كنت في فريق منتظم."',
      r3:'"تتبع السلوك مُقلَّل القيمة. أعرف تماماً من أدعو وإذا كان سيحضر فعلاً."',
    },
    cta: {
      label:'مستعد للعب؟',
      title:'مباراتك القادمة<br>في<br><span style="color:var(--g);">انتظارك</span>',
      sub:  'حمّل بارتيدو مجاناً. أنشئ مباراة في 60 ثانية أو ابحث عن واحدة بالقرب منك. فريقك موجود هناك.',
    },
    contact: {
      label:'تواصل معنا', title:'ابقَ على تواصل', heading:'تواصل معنا',
      intro:'هل لديك سؤال، ملاحظة، أو تريد التعاون معنا؟ يسعدنا سماعك.',
      sub:'هل لديك سؤال، ملاحظة، أو تريد التعاون معنا؟ يسعدنا سماعك.',
      r1t:'أسئلة حول التطبيق',   r1p:'هناك مشكلة؟ سنساعدك.',
      r2t:'ملاحظات واقتراحات',   r2p:'أفكارك تُشكّل المنتج. شاركها معنا.',
      r3t:'شراكات وأعمال',        r3p:'أندية، علامات تجارية، أو مستثمرون — تحدّث معنا.',
      formtitle:'أرسل لنا رسالة', formsub:'نرد عادةً خلال 24 ساعة.',
      fname:'الاسم الأول', lname:'اسم العائلة',
      email:'البريد الإلكتروني', phone:'رقم الهاتف', message:'رسالتك',
      topic:'كيف يمكننا مساعدتك؟', topicph:'اختر موضوعاً...',
      t1:'سؤال حول التطبيق', t2:'ملاحظة أو اقتراح',
      t3:'شراكة أو أعمال', t4:'صحافة أو إعلام', t5:'أخرى',
      btn:'إرسال الرسالة', direct:'أو تواصل معنا مباشرةً على:',
    },
    footer: { privacy:'الخصوصية', terms:'الشروط', contact:'تواصل معنا', getapp:'حمّل التطبيق', tagline:'نربط اللاعبين من خلال الجميلة.', copy:'حقوق النشر © 2026 Partido. جميع الحقوق محفوظة.' },
    bridge: { text: 'أو أنشئ مبارتك الخاصة', join: 'ابحث وانضم', or: 'أو', create: 'أنشئ مبارتك' },
    org: {
      label:'للمنظمين', title:'نظّم مباراتك بطريقتك',
      sub:'كل ما تحتاجه لإعداد مبارياتك وإدارتها والاستمتاع بها — من أول نقرة حتى نهاية المباراة.',
      c1badge:'أعدّ', c1t:'أعدّ مباراتك', c1p:'اختر الوقت والتنسيق والمستوى وجميع التفاصيل قبل النشر.',
      c2badge:'أدِر', c2t:'أدِر مباراتك', c2p:'بمجرد أن تكون مباراتك مباشرة، تتبع اللاعبين وعدّل التفاصيل وأدِر كل شيء كمنظم.',
      c3badge:'العب', c3t:'العب مباراتك', c3p:'فريقك جاهز. ما عليك سوى الحضور والاستمتاع باللعبة.',
    },
    editorial: {
      label:'داخل بارتيدو', title:'نُنمّي الجميلة',
      sub:'ابقَ على اطلاع بأحدث أخبار بارتيدو وقصص اللاعبين وتحديثات المنتج والنصائح للاستفادة القصوى من التطبيق.',
      c1tag:'مجتمع', c1t:'بارتيدو يغيّر طريقة لعب كرة القدم في مدينتك', c1p:'لا مزيد من محادثات المجموعات اللانهائية أو الإلغاءات اللحظية. اكتشف كيف يجعل بارتيدو إيجاد المباريات وتنظيمها واللعب فيها أمرًا بسيطًا — في أي وقت.',
      c2tag:'نصائح', c2t:'كيف تملأ مبارياتك أسرع (وبشكل أفضل)', c2p:'من اختيار المستوى المناسب إلى ضبط الأجواء الصحيحة، تعرّف على التفاصيل الصغيرة التي تجعل مبارياتك تمتلئ فورًا باللاعبين المناسبين.',
      c3tag:'ثقافة', c3t:'أكثر من كرة قدم: بناء علاقات حقيقية', c3p:'بارتيدو ليس فقط عن المباريات — بل عن الناس. التقِ باللاعبين وابنِ شبكتك وكن جزءًا من مجتمع كروي متنامٍ.',
      c4tag:'رؤية', c4t:'كرة القدم من جديد للجيل المغربي القادم', c4p:'من ملاعب الأحياء إلى المباريات على مستوى المدينة، يبني بارتيدو طريقة جديدة للعب — أكثر تنظيمًا واجتماعية وإتاحة.',
      cta:'تابع القراءة ↗',
    },
    art: {
      back:'العودة للرئيسية', inside:'داخل بارتيدو',
      community: {
        pagetitle:'بارتيدو يغيّر طريقة لعب كرة القدم في مدينتك — Partido',
        tag:'مجتمع', title:'بارتيدو يغيّر طريقة<br>لعب كرة القدم<br>في مدينتك', meta:'مجتمع · 3 دقائق للقراءة',
        p1:'لسنوات، كان تنظيم مباراة كرة قدم بسيطة يعني رسائل لا تنتهي وإلغاءات لحظية وعدم اليقين بشأن من سيحضر فعلًا. كانت التجربة مبعثرة وغير فعّالة ومحبطة في كثير من الأحيان.',
        pull1:'بارتيدو يغيّر هذا.',
        p2:'بجمع كل شيء في مكان واحد، يجعل بارتيدو من السهل إيجاد المباريات وإنشاء اللقاءات والتواصل مع لاعبين يتطابقون مع مستواك وأسلوبك وعقليتك. لا مزيد من التخمين. لا مزيد من الفوضى.',
        p3:'سواء كنت جديدًا في مدينة، أو تتطلع إلى اللعب بانتظام أكبر، أو ببساطة تعبت من مجموعات الدردشة غير الموثوقة، يمنحك بارتيدو طريقة منظمة وسلسة للعب كرة القدم — بشروطك أنت.',
        pull2:'لكن بارتيدو أكثر من مجرد أداة.',
        p4:'إنه مجتمع متنامٍ من اللاعبين الذين يهتمون باللعبة ويحترمون وقت بعضهم ويريدون طريقة أفضل للعب. كل مباراة منظمة، وكل لاعب يحضر، وكل تواصل يُقام يساهم في بناء ثقافة كروية أقوى.',
        p5:'من المباريات الترفيهية إلى اللقاءات التنافسية، يعيد بارتيدو تعريف مكانة كرة القدم في مدينتك — جاعلًا إياها أكثر إتاحة وموثوقية واجتماعية.',
      },
      tips: {
        pagetitle:'كيف تملأ مبارياتك أسرع (وبشكل أفضل) — Partido',
        tag:'نصائح', title:'كيف تملأ مبارياتك<br>أسرع (وبشكل أفضل)', meta:'نصائح · 4 دقائق للقراءة',
        p1:'إنشاء مباراة أمر سهل. ملؤها باللاعبين المناسبين — هنا تصبح الأمور مثيرة للاهتمام.',
        p2:'إذا كنت قد عانيت من إكمال فريقك، فأنت لست وحدك. معظم المباريات لا تفشل لأنه لا يوجد لاعبون كافون — بل تفشل لأن المباراة لم تُعدّ بالطريقة الصحيحة.',
        pull1:'المفتاح الأول هو الوضوح.',
        p3:'يقرر اللاعبون في ثوانٍ ما إذا كانوا سينضمون لمباراة. إذا كانت مباراتك تفتقر إلى معلومات واضحة — المستوى والتنسيق والمدة والسعر — فإن معظم اللاعبين سيتخطونها ببساطة. مباراة محددة جيدًا تبني ثقة فورية.',
        pull2:'المفتاح الثاني هو التوقيت والموقع.',
        p4:'مباراة مجدولة في وقت خاطئ أو موقع غير مناسب ستجد صعوبة طبيعية في الامتلاء. فكّر كلاعب: بعد العمل، قريب، في ساعة مريحة. تعديلات صغيرة يمكن أن تزيد فرصك في ملء مباراتك بشكل كبير.',
        pull3:'المفتاح الثالث هو الانتظام.',
        p5:'اللاعبون يعودون إلى المنظمين الذين يثقون بهم. إذا كانت مبارياتك منظمة جيدًا وتبدأ في الوقت المحدد وتتطابق مع التوقعات، فأنت تبني سمعة — وهذه السمعة تملأ مبارياتك المستقبلية أسرع من أي شيء آخر.',
        pull4:'وأخيرًا، العامل الأهم: الأجواء.',
        p6:'بعض اللاعبين يريدون مباريات تنافسية. والبعض الآخر يريد فقط الاستمتاع بمباراة مريحة. عندما تعكس مباراتك بوضوح الجو المناسب، تستقطب الأشخاص المناسبين — ويصبح كل شيء أسهل.',
        p7:'صُمّم بارتيدو لمساعدتك على القيام بكل هذا بشكل طبيعي.',
        p8:'من خلال هيكلة مبارياتك وجعلها مرئية للاعبين المناسبين وإزالة الاحتكاك، لا يساعدك بارتيدو فقط على ملء المباريات — بل يساعدك على بناء مباريات أفضل.',
      },
      culture: {
        pagetitle:'أكثر من كرة قدم: بناء علاقات حقيقية — Partido',
        tag:'ثقافة', title:'أكثر من كرة قدم:<br>بناء علاقات حقيقية', meta:'ثقافة · 3 دقائق للقراءة',
        p1:'كانت كرة القدم دائمًا أكثر من مجرد لعبة.',
        p2:'إنها تتعلق بالأشخاص الذين تلتقي بهم، والحظات التي تشاركها، والقصص التي تبقى طويلًا بعد صافرة النهاية. بعض أقوى الصداقات تبدأ على أرض الملعب — بين لاعبين لم يكونوا يعرفون بعضهم قبل ساعة من بداية المباراة.',
        p3:'لكن في عالم اليوم، هذه الروابط لا تحدث بشكل طبيعي كما كانت من قبل.',
        p4:'الناس ينتقلون بين المدن. تزداد الجداول الزمنية ازدحامًا. تنغلق المجموعات. ولكثير من اللاعبين، إيجاد مباراة لم يعد مجرد أمر يتعلق بكرة القدم — بل يتعلق بإيجاد أشخاص.',
        pull1:'هنا يغيّر بارتيدو كل شيء.',
        p5:'بارتيدو لم يُصمَّم فقط لمساعدتك على اللعب. بل صُمّم لمساعدتك على التواصل.',
        p6:'كل مباراة هي فرصة لمقابلة لاعبين جدد واكتشاف أساليب مختلفة والانتماء إلى مجتمع كروي أوسع. سواء انضممت وحدك أو مع أصدقاء، فأنت تدخل بيئة يشترك فيها الجميع في نفس الهدف: اللعب.',
        pull2:'مع مرور الوقت، تتحول هذه التفاعلات الصغيرة إلى شيء أكبر.',
        p7:'وجوه مألوفة. زملاء فريق موثوقون. صداقات جديدة. شبكة تنمو بشكل طبيعي، مباراة تلو مباراة.',
        pull3:'لأن كرة القدم في جوهرها اجتماعية.',
        p8:'وبارتيدو يعيدها — ليس بإجبار ذلك، بل بخلق الظروف المناسبة ليحدث.',
        p9:'المزيد من المباريات. المزيد من الأشخاص. المزيد من الروابط.',
        p10:'هذا ما يجعلها أكثر من كرة قدم.',
      },
      vision: {
        pagetitle:'كرة القدم من جديد للجيل المغربي القادم — Partido',
        tag:'رؤية', title:'كرة القدم من جديد<br>للجيل المغربي القادم', meta:'رؤية · 4 دقائق للقراءة',
        p1:'كرة القدم في كل مكان بالمغرب.',
        p2:'في كل شارع، في كل حي، على كل ملعب — اللعبة تحيا من خلال الناس. إنها عفوية وشغوفة ومتجذرة في الثقافة.',
        p3:'لكن بينما كان الحب لكرة القدم موجودًا دائمًا، فإن طريقة تنظيم الناس وتجربتهم للعبة لم تتطور بالوتيرة ذاتها.',
        p4:'في كثير من الأحيان، يعتمد اللعب على معرفة الأشخاص المناسبين والتنسيق اللحظي والتواصل المبعثر. مباريات رائعة تُفقد. لاعبون يُستثنون. والتجربة الإجمالية تبقى متقطعة.',
        pull1:'بارتيدو هنا لتغيير ذلك.',
        p5:'نؤمن بأن الجيل القادم من كرة القدم في المغرب يستحق أفضل — تنظيمًا أفضل وإتاحة أفضل وتجارب أفضل.',
        p6:'بإضافة هيكلة إلى كيفية إنشاء المباريات واكتشافها واللعب فيها، يحوّل بارتيدو شيئًا غير رسمي إلى شيء سلس — دون فقدان روح اللعبة.',
        p7:'من مباريات الأحياء إلى البطولات على مستوى المدينة، يخلق بارتيدو طبقة جديدة فوق كرة القدم: طبقة أكثر ترابطًا وموثوقية وشمولية.',
        pull2:'الأمر لا يتعلق باستبدال الثقافة.',
        p8:'بل يتعلق بالارتقاء بها.',
        p9:'جعلها أسهل للجميع للعب، في أي مكان وأي وقت — مع الحفاظ على ما يجعل كرة القدم المغربية مميزة.',
        p10:'وهذا مجرد البداية.',
        p11:'مع نمو المجتمع، تنمو الرؤية: منظومة كروية موحدة حيث اللاعبون والمباريات والمنافسات كلها مرتبطة عبر منصة واحدة.',
        pull3:'معيار جديد لطريقة لعب كرة القدم.',
        p12:'مبني للمغرب. مصمم للجيل القادم.',
      },
    },
  },
};

// ── LANGUAGE ENGINE ─────────────────────────────────────────────
let currentLang = 'en';

// ── STORE BADGE LOCALISATION ─────────────────────────────────────
// Shared icon markup (language-neutral)
const _APPLE_ICON = '<g fill="#fff"><path d="M24.77 20.3a4.95 4.95 0 0 1 2.36-4.15 5.07 5.07 0 0 0-3.99-2.16c-1.68-.18-3.31 1.01-4.17 1.01-.87 0-2.19-.99-3.62-.96a5.31 5.31 0 0 0-4.47 2.73c-1.93 3.34-.49 8.27 1.36 10.97.93 1.33 2.01 2.82 3.44 2.76 1.39-.06 1.92-.89 3.6-.89 1.68 0 2.16.89 3.62.86 1.5-.03 2.44-1.33 3.33-2.67a11.04 11.04 0 0 0 1.53-3.1 4.78 4.78 0 0 1-2.99-4.4z"/><path d="M22.04 12.21a4.87 4.87 0 0 0 1.12-3.49 4.95 4.95 0 0 0-3.2 1.66 4.64 4.64 0 0 0-1.14 3.37 4.09 4.09 0 0 0 3.22-1.54z"/></g>';
const _GPLAY_ICON = '<g transform="translate(10,8) scale(.55)"><path fill="#00d9ff" d="M0 1.13v40.98c0 .72.4 1.12.89.65l22.61-21.14L.89.48C.4.01 0 .41 0 1.13z"/><path fill="#00f076" d="M30.24 17.77L23.5 21.62.89 43.76c.38.39.97.44 1.65.06l30.7-17.69-3-8.36z"/><path fill="#ff3a44" d="M30.24 25.47l3-8.36L.89.48C.51.09-.1.14.01.53L23.5 21.62l6.74 3.85z"/><path fill="#ffbc00" d="M.89.48C.4.01 0 .41 0 1.13l23.5 20.49 6.74-3.85L2.54.08C1.86-.3 1.27-.25.89.48z"/><path fill="#00d9ff" d="M23.5 21.62L.89 43.76c.48.47 1.07.43 1.65.06L33.24 26.2l-3-4.58-6.74 0z" opacity=".2"/><path fill="none" d="M.89.48l32.35 17.7 0 0L.89.48z"/></g>';
const _BADGE_BG_APPLE  = '<rect width="120" height="40" rx="5" fill="#000"/><rect x=".5" y=".5" width="119" height="39" rx="4.5" fill="none" stroke="#a6a6a6" stroke-width="1"/>';
const _BADGE_BG_GOOGLE = '<rect width="135" height="40" rx="5" fill="#000"/><rect x=".5" y=".5" width="134" height="39" rx="4.5" fill="none" stroke="#a6a6a6" stroke-width="1"/>';

const STORE_SVGS = {
  apple: {
    en: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40">${_BADGE_BG_APPLE}${_APPLE_ICON}<g fill="#fff"><text font-family="SF Pro Text,Helvetica,Arial,sans-serif" font-size="8" x="36" y="15" letter-spacing=".03em">Download on the</text><text font-family="SF Pro Display,Helvetica,Arial,sans-serif" font-size="13" font-weight="600" x="35.5" y="29" letter-spacing="-.02em">App Store</text></g></svg>`,
    fr: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40">${_BADGE_BG_APPLE}${_APPLE_ICON}<g fill="#fff"><text font-family="SF Pro Text,Helvetica,Arial,sans-serif" font-size="6.8" x="76" y="14.5" text-anchor="middle" letter-spacing=".01em">Télécharger dans l'</text><text font-family="SF Pro Display,Helvetica,Arial,sans-serif" font-size="13" font-weight="600" x="76" y="29" text-anchor="middle" letter-spacing="-.02em">App Store</text></g></svg>`,
    ar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40">${_BADGE_BG_APPLE}${_APPLE_ICON}<g fill="#fff"><text font-family="Cairo,Arial,sans-serif" font-size="8" x="76" y="15" text-anchor="middle">متاح على</text><text font-family="SF Pro Display,Helvetica,Arial,sans-serif" font-size="13" font-weight="600" x="76" y="29" text-anchor="middle" letter-spacing="-.02em">App Store</text></g></svg>`,
  },
  google: {
    en: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 40">${_BADGE_BG_GOOGLE}${_GPLAY_ICON}<g fill="#fff"><text font-family="SF Pro Text,Helvetica,Arial,sans-serif" font-size="7.5" x="40" y="13.5" letter-spacing=".06em">GET IT ON</text><text font-family="SF Pro Display,Helvetica,Arial,sans-serif" font-size="13.2" font-weight="600" x="39.5" y="28" letter-spacing="-.01em">Google Play</text></g></svg>`,
    fr: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 40">${_BADGE_BG_GOOGLE}${_GPLAY_ICON}<g fill="#fff"><text font-family="SF Pro Text,Helvetica,Arial,sans-serif" font-size="7.5" x="87" y="13.5" text-anchor="middle" letter-spacing=".05em">DISPONIBLE SUR</text><text font-family="SF Pro Display,Helvetica,Arial,sans-serif" font-size="13.2" font-weight="600" x="87" y="28" text-anchor="middle" letter-spacing="-.01em">Google Play</text></g></svg>`,
    ar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 40">${_BADGE_BG_GOOGLE}${_GPLAY_ICON}<g fill="#fff"><text font-family="Cairo,Arial,sans-serif" font-size="6.8" x="87" y="13" text-anchor="middle">احصل عليه على</text><text font-family="SF Pro Display,Helvetica,Arial,sans-serif" font-size="13.2" font-weight="600" x="87" y="28" text-anchor="middle" letter-spacing="-.01em">Google Play</text></g></svg>`,
  }
};

function updateStoreBadges(lang) {
  const key = STORE_SVGS.apple[lang] ? lang : 'en';
  document.querySelectorAll('.store-badge').forEach(badge => {
    const label = (badge.getAttribute('aria-label') || '').toLowerCase();
    if (label.includes('app store'))        badge.innerHTML = STORE_SVGS.apple[key];
    else if (label.includes('google play')) badge.innerHTML = STORE_SVGS.google[key];
  });
}

function buildMarquee(lang) {
  const items = T[lang].marquee;
  const doubled = [...items, ...items];
  return doubled.map(t =>
    `<span class="mi"><span class="mi-dot"></span>${t}</span>`
  ).join('');
}

function applyLang(lang) {
  currentLang = lang;
  const t = T[lang];
  const html = document.documentElement;

  // Direction + lang attribute
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = key.split('.').reduce((obj, k) => obj?.[k], t);
    if (val !== undefined) el.innerHTML = val;
  });

  // Update placeholder translations
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = key.split('.').reduce((obj, k) => obj?.[k], t);
    if (val !== undefined) el.placeholder = val;
  });

  // Marquee (null-safe: element only exists on index.html)
  const marqueeTrack = document.getElementById('marquee-track');
  if (marqueeTrack) marqueeTrack.innerHTML = buildMarquee(lang);

  // Update active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Page title
  const pageId = document.body && document.body.getAttribute('data-page');
  if (pageId && t.art && t.art[pageId]) {
    document.title = t.art[pageId].pagetitle;
  } else {
    const titles = { en:'Partido Sports — Find Your Game', fr:'Partido Sports — Trouve Ton Match', ar:'بارتيدو — العب كرتك' };
    document.title = titles[lang] || titles.en;
  }

  // Store badges (SVG text is not translatable via data-i18n — swap whole SVG)
  updateStoreBadges(lang);

  // Persist preference
  try { localStorage.setItem('partido_lang', lang); } catch(e) {}
}

// ── LANGUAGE SWITCHER EVENTS ─────────────────────────────────────
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// ── SCROLL REVEAL (progressive enhancement) ──────────────────────
if ('IntersectionObserver' in window) {
  document.documentElement.classList.add('js-animations');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 65);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.07 });
  requestAnimationFrame(() => {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => obs.observe(el));
  });
}

// ── NAV SCROLL EFFECT ─────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.querySelector('nav').style.borderBottomColor =
    window.scrollY > 40 ? 'rgba(153,202,60,0.14)' : 'rgba(153,202,60,0.07)';
});

// ── INIT: restore saved language or detect browser preference ─────
(function init() {
  let saved;
  try { saved = localStorage.getItem('partido_lang'); } catch(e) {}
  const browserLang = (navigator.language || '').slice(0,2).toLowerCase();
  const lang = (saved && T[saved]) ? saved
    : (T[browserLang] ? browserLang : 'en');
  applyLang(lang);
})();

// ============================================================
//  SPORTS INTELLIGENCE v4 -- Runtime enhancements
// ============================================================

// -- GALLERY AUTO-SCROLL --
(function() {
  var strip = document.querySelector('.gallery-strip');
  if (!strip) return;
  var items = Array.from(strip.children);
  if (!items.length) return;
  items.forEach(function(item) { strip.appendChild(item.cloneNode(true)); });
  strip.classList.add('js-scroll');
  strip.classList.remove('reveal');
})();

// -- FLOATING BADGES ON SHOWCASE PHONES --
(function() {
  if (window.matchMedia('(max-width:1024px)').matches) return;
  var cfg = [
    { pos: 'tl', live: true,  label: 'Live match',   value: '<em>9</em>/12 spots filled' },
    { pos: 'br', live: false, label: 'Match detail',  value: 'Level: <em>Advanced</em>' },
    { pos: 'tl', live: false, label: 'Upcoming',      value: '<em>3</em> games this week' },
    { pos: 'br', live: true,  label: 'Reliability',   value: '<em>98%</em> show-up rate' },
  ];
  var phones = Array.from(document.querySelectorAll('.showcase .phone-solo, .showcase.flip .phone-solo'));
  phones.forEach(function(phone, i) {
    if (i >= cfg.length) return;
    var c = cfg[i];
    var wrap = phone.parentElement;
    wrap.style.position = 'relative';
    var badge = document.createElement('div');
    badge.className = 'phone-badge badge-' + c.pos;
    badge.innerHTML =
      (c.live
        ? '<div class="pb-live"><div class="pb-dot"></div><div class="pb-label">' + c.label + '</div></div>'
        : '<div class="pb-label">' + c.label + '</div>') +
      '<div class="pb-value">' + c.value + '</div>';
    wrap.appendChild(badge);
  });
})();

// -- PROOF BAR COUNTER ANIMATION --
(function() {
  var counters = Array.from(document.querySelectorAll('.proof-num'));
  if (!counters.length) return;
  var data = counters.map(function(el) {
    var raw = el.textContent.trim();
    if (!/[0-9]/.test(raw)) return null; // skip non-numeric elements
    var num = parseFloat(raw.replace(/[^0-9.]/g, '')) || 0;
    var prefix = (raw.match(/^[^0-9]*/) || [''])[0];
    var suffix = (raw.match(/[^0-9.]+$/) || [''])[0];
    return { el: el, num: num, prefix: prefix, suffix: suffix };
  }).filter(Boolean);
  var animated = false;
  function runCounters() {
    if (animated) return; animated = true;
    var duration = 1800; var start = performance.now();
    function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
    function tick(now) {
      var t = Math.min((now - start) / duration, 1); var e = easeOut(t);
      data.forEach(function(d) {
        var v = d.num * e;
        var display = (d.num === Math.floor(d.num)) ? Math.floor(v) : v.toFixed(1);
        d.el.textContent = d.prefix + display + d.suffix;
      });
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  var bar = document.querySelector('.proof-bar');
  if (!bar) return;
  var obs = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) { runCounters(); obs.disconnect(); }
  }, { threshold: 0.3 });
  obs.observe(bar);
})();

// -- SCROLL PARALLAX ON SHOWCASE PHONES --
(function() {
  if (window.matchMedia('(max-width:1024px)').matches) return;
  var phones = Array.from(document.querySelectorAll('.showcase .phone-solo'));
  var ticking = false;
  window.addEventListener('scroll', function() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function() {
      phones.forEach(function(phone) {
        var rect = phone.getBoundingClientRect();
        var mid = rect.top + rect.height / 2;
        var offset = (mid - window.innerHeight / 2) * 0.045;
        phone.style.transform = 'translateY(' + offset.toFixed(1) + 'px)';
      });
      ticking = false;
    });
  }, { passive: true });
})();

// -- STAGGERED REVEAL DELAY FOR CARD GROUPS --
(function() {
  var groups = [
    { sel: '.feat-grid .fc',           delay: 80  },
    { sel: '.steps-row .step',         delay: 100 },
    { sel: '.rev-grid .rv',            delay: 90  },
    { sel: '.proof-inner .proof-stat', delay: 70  },
  ];
  groups.forEach(function(g) {
    document.querySelectorAll(g.sel).forEach(function(el, i) {
      el.style.transitionDelay = (i * g.delay) + 'ms';
    });
  });
})();

// -- EDITORIAL CAROUSEL --
(function() {
  var carousel  = document.querySelector('.editorial-carousel');
  var track     = document.querySelector('.editorial-track');
  if (!track || !carousel) return;
  var cards     = Array.from(track.querySelectorAll('.ed-card'));
  if (cards.length < 2) return;

  var dotsWrap  = document.querySelector('.ed-dots');
  var prevBtn   = document.querySelector('.ed-arrow--prev');
  var nextBtn   = document.querySelector('.ed-arrow--next');
  var GAP       = 20;
  var index     = 0;
  var resizeTid;

  // ── Responsive: how many cards are visible at current viewport width
  function visibleCount() {
    var w = window.innerWidth;
    if (w <= 580)  return 1;
    if (w <= 768)  return 2;
    if (w <= 1100) return 3;
    return 4;
  }

  // ── Total scrollable positions (0 … maxIndex)
  function maxIndex() {
    return Math.max(0, cards.length - visibleCount());
  }

  // ── Set every card's pixel width so N fit exactly in the content area.
  //    Must use flex shorthand (not width) — flex-basis always wins in flexbox.
  //    Must subtract carousel padding — offsetWidth includes it.
  function sizeCards() {
    var n   = visibleCount();
    var cs  = window.getComputedStyle(carousel);
    var w   = carousel.offsetWidth
              - parseFloat(cs.paddingLeft  || 0)
              - parseFloat(cs.paddingRight || 0);
    var cw  = Math.floor((w - GAP * (n - 1)) / n);
    cards.forEach(function(c) { c.style.flex = '0 0 ' + cw + 'px'; });
  }

  // ── Move the track (suppress animation when called with animate=false)
  function moveTo(i, animate) {
    if (animate === false) track.style.transition = 'none';
    var cw = cards[0].offsetWidth;
    track.style.transform = 'translateX(-' + (i * (cw + GAP)) + 'px)';
    if (animate === false) {
      track.offsetWidth; // force reflow
      track.style.transition = '';
    }
  }

  // ── Rebuild dot buttons whenever card count or visible count changes
  function buildDots() {
    if (!dotsWrap) return;
    var total = maxIndex() + 1;
    if (total <= 1) { dotsWrap.innerHTML = ''; dotsWrap.style.display = 'none'; return; }
    dotsWrap.style.display = 'flex';
    dotsWrap.innerHTML = '';
    for (var i = 0; i <= maxIndex(); i++) {
      var btn = document.createElement('button');
      btn.className  = 'ed-dot' + (i === index ? ' active' : '');
      btn.setAttribute('aria-label', 'Go to article ' + (i + 1));
      btn.dataset.i  = i;
      btn.addEventListener('click', function() {
        index = +this.dataset.i;
        refresh();
      });
      dotsWrap.appendChild(btn);
    }
  }

  // ── Sync dots highlight
  function syncDots() {
    if (!dotsWrap) return;
    dotsWrap.querySelectorAll('.ed-dot').forEach(function(d, i) {
      d.classList.toggle('active', i === index);
    });
  }

  // ── Sync arrow disabled states
  function syncArrows() {
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index >= maxIndex();
  }

  // ── Full refresh after any state change
  function refresh(animate) {
    moveTo(index, animate);
    syncDots();
    syncArrows();
  }

  // ── Arrow clicks
  if (prevBtn) prevBtn.addEventListener('click', function() {
    if (index > 0) { index--; refresh(); }
  });
  if (nextBtn) nextBtn.addEventListener('click', function() {
    if (index < maxIndex()) { index++; refresh(); }
  });

  // ── Touch / swipe support
  var txStart = 0, tyStart = 0, swiping = false;
  track.addEventListener('touchstart', function(e) {
    txStart  = e.touches[0].clientX;
    tyStart  = e.touches[0].clientY;
    swiping  = false;
  }, { passive: true });
  track.addEventListener('touchmove', function(e) {
    if (Math.abs(e.touches[0].clientX - txStart) > Math.abs(e.touches[0].clientY - tyStart)) {
      swiping = true;
    }
  }, { passive: true });
  track.addEventListener('touchend', function(e) {
    if (!swiping) return;
    var dx = txStart - e.changedTouches[0].clientX;
    if (Math.abs(dx) < 40) return;
    if (dx > 0 && index < maxIndex()) { index++; refresh(); }
    if (dx < 0 && index > 0)          { index--; refresh(); }
  }, { passive: true });

  // ── Resize: re-size cards, clamp index, rebuild dots
  window.addEventListener('resize', function() {
    clearTimeout(resizeTid);
    resizeTid = setTimeout(function() {
      sizeCards();
      if (index > maxIndex()) index = maxIndex();
      buildDots();
      refresh(false);
    }, 100);
  });

  // ── Language switch: direction stays LTR for both locales (only text changes)
  //    Re-run refresh so arrow states stay correct
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() { refresh(false); });
  });

  // ── Init
  sizeCards();
  buildDots();
  refresh(false);
})();
