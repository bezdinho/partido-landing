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
  const titles = { en:'Partido Sports — Find Your Game', fr:'Partido Sports — Trouve Ton Match', ar:'بارتيدو — العب كرتك' };
  document.title = titles[lang];

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
