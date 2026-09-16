/* === main.js === */
/* Language engine, animations, initialization */

/* === main.js === */
/* Language engine, animations, initialization */

// ── TRANSLATIONS (all 3 languages, inlined for reliability) ─────
const T = {
  en: {
    nav: { discover:'Join a match', organize:'Find players', profile:'Tournaments', contact:'Contact', cta:'Download Free' },
    store: { comingSoon:'Coming soon on iOS' },
    hero: {
      h1:  'Join Morocco\'s<br><em>Best Football Community</em>',
      sub: "Join a match near you or find the players your squad is missing. Come alone or bring your friends.",
    },
    marquee: ["Find a match near you", "Organize a match in 60 seconds", "Come alone or bring your friends", "Find the players your team is missing"],
    how: {
      "label": "Join a match",
      "title": "Your next match in 3 steps",
      "sub": "Find a match that suits you, reserve your spot and meet the other players on the pitch.",
      "s1badge": "Discover",
      "s1t": "Find your match",
      "s1p": "Browse matches near you and choose by time, skill level and game format.",
      "s2badge": "Join",
      "s2t": "Reserve your spot",
      "s2p": "Check the location, price and available spots, then join the match. You can also reserve spots for your friends.",
      "s3badge": "Play",
      "s3t": "Meet the other players on the pitch",
      "s3p": "Meet the other participants and enjoy the match, whether you come alone or with friends.",
      "cta": "Your turn to play."
},
    pitchcta: {
      "title": "Your next match starts here.",
      "sub": "Join a match or find the players you need. Download Partido for free."
},
    story: {
      "label": "Our story",
      "title": "Football brings us together.",
      "p1": "In Morocco, the desire to play is everywhere. But finding a match or gathering enough players is not always easy.",
      "p2": "Partido was created to make these connections easier: join a match, find the missing players and share a good time on the pitch.",
      "mission": "Less time looking for players. More time playing together."
},
    tourn: {
      "badge": "Coming soon",
      "title": "Football tournaments. Prizes to win.",
      "sub": "Bring your team and take on the challenge. Partido tournaments will arrive city by city, with venues, dates and rewards announced before each event.",
      "prizeTitle": "Play for victory and rewards",
      "prizeBody": "Prizes to compete for, with the prize pool announced for each tournament.",
      "cityTitle": "One city. A new challenge.",
      "cityBody": "Every tournament will have its host city. Follow the announcements to discover the next destinations.",
      "formatTitle": "Intensity on the pitch. Organization around it.",
      "formatBody": "A clear format, an announced schedule and an experience connected to Partido.",
      "league": "Leagues are also being explored to keep the competition going.",
      "follow": "Next cities, next prizes: follow the announcements."
},
    proof: { p1v:'Fill games faster', p1l:'Find missing players instantly', p2v:'Find games instantly', p2l:'Join games anytime', p3v:'Play & win prizes', p3l:'Tournaments across Morocco', p4v:'100% free', p4l:'No fees, no subscriptions' },
    cta: {
      "title": "Ready to play?<br>Make your move.",
      "sub": "Download Partido for free. Join a match or find the players you need."
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
    footer: { privacy:'Privacy', terms:'Terms', contact:'Contact', getapp:'Get the app', explore:'Explore Partido', delete:'Delete account', tagline:'Football brings us together.', copy:'© 2026 Partido, a brand of BBF Ventures. All rights reserved.' },
    bridge: { text: 'Missing a few players?', sub: 'Publish your match and find the players you need.' },
    tp: {
      heroBadge: 'Coming in 2026',
      heroTitle: 'Football<br>Tournaments<br><em>Across Morocco</em>',
      heroSub: 'City-to-city competition. Real prizes. Open to every player, every level, every city.',
      heroCta1: 'Register My Team',
      heroCta2: 'Learn More ↓',
      heroScroll: 'Scroll to explore',
      stat1val: '100K DHS', stat1lbl: 'Prize pool per season',
      stat2val: '6+ Cities', stat2lbl: 'Nationwide competition',
      stat3val: 'All Levels', stat3lbl: 'Open to every player',
      hlLabel: "What's at stake",
      hlTitle: 'Compete.<br>Win. Repeat.',
      hlSub: 'Everything that makes a tournament worth playing — prizes, competition, and a community that lasts beyond the final whistle.',
      c1val: 'Up to <span>100,000 DHS</span>', c1lbl: 'Cash Prizes',
      c1desc: 'Real money. Real competition. Top teams earn cash prizes, medals, and recognition across the Partido community.',
      c2val: '<span>City-to-City</span>', c2lbl: 'National Tour',
      c2desc: 'From Casablanca to Marrakech, Rabat to Tanger — compete in your city then travel for the national finals.',
      c3val: '<span>Open</span> to All', c3lbl: 'Every Player',
      c3desc: "Whether you're a seasoned player or just getting started — individual sign-ups, teams, and squads all welcome.",
      howLabel: 'Simple by design',
      howTitle: 'Register.<br>Play. Win.',
      howSub: 'Three steps from your first tap to lifting the trophy.',
      s1badge: 'Step 1 · Register', s1title: 'Register Your Team',
      s1desc: 'Create your team profile on Partido. Choose your format — 5v5, 6v6, or 7v7 — and enter the upcoming tournament round in your city.',
      s2badge: 'Step 2 · Play', s2title: 'Play Your Matches',
      s2desc: 'Get matched against teams in your city. Full schedule managed through the app. Climb the standings round by round, track every result in real time.',
      s3badge: 'Step 3 · Win', s3title: 'Win Rewards',
      s3desc: 'Top teams advance to city finals — then the national stage. Win cash prizes, medals, and certificates. Every participant gets recognized.',
      ctaBadge: 'Launching 2026',
      ctaTitle: 'Be the<br>First to<br><em>Compete</em>',
      ctaSub: 'Tournaments are launching across Morocco in 2026. Get your team ready — registration opens soon.',
      ctaBtn1: 'Register Interest', ctaBtn2: 'Download the App',
    },
    org: {
      "label": "Find players",
      "title": "Find the players your match is missing.",
      "sub": "Already have a group? Publish your match, list the available spots and let other players join you.",
      "c1badge": "Publish",
      "c1t": "Publish your match",
      "c1p": "Add the pitch, time, skill level and number of available spots.",
      "c2badge": "Gather",
      "c2t": "Bring the players together",
      "c2p": "Invite your friends, share your match and keep track of who joins.",
      "c3badge": "Play",
      "c3t": "Time to play",
      "c3p": "Sort out the final details in the match chat, then meet the participants on the pitch."
},
    editorial: {
      label:'Inside Partido', title:'Growing the beautiful game',
      sub:'Stay up to date with Partido\'s latest news, player stories, product updates, and tips for getting the most out of the app.',
      c1tag:'Community', c1t:'Partido is changing how football is played in your city', c1p: "A look at the app: discover matches, reserve a place, and coordinate with the other players.",
      c2tag:'Tips', c2t:'How to fill your games faster (and better)', c2p: "Choose a clear time, level, and format so players can find a match that suits them.",
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
    terms: {
      label: 'Legal',
      title: 'Terms of Use',
      date: '<strong>Last updated:</strong> April 10, 2026',
      intro: '<p>These Terms of Use govern your access to and use of the Partido mobile application, website, and related services, operated by BBF VENTURES.</p><p>By creating an account, accessing, or using the Service, you agree to be bound by these Terms. Please read them carefully before using Partido.</p>',
      toc: {
        heading: 'Contents', toggle: 'Contents',
        s1:'1. Acceptance of Terms', s2:'2. Eligibility', s3:'3. User Accounts',
        s4:'4. Use of the Service', s5:'5. User Conduct', s6:'6. User Content',
        s7:'7. Limitation of Liability', s8:'8. Indemnification',
        s9:'9. Suspension &amp; Termination', s10:'10. Governing Law',
        s11:'11. Intellectual Property', s12:'12. Disclaimer of Warranties',
        s13:'13. Severability', s14:'14. Entire Agreement', s15:'15. Contact',
      },
      s1: {
        title: '1. Acceptance of Terms',
        body: '<p>Welcome to Partido.</p><p>These Terms of Use ("Terms") govern your access to and use of the Partido mobile application, website, and related services (collectively, the "Service"), operated by BBF VENTURES ("Partido", "we", "us", or "our").</p><p>By creating an account, accessing, or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use the Service.</p><p>If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization.</p><p>You confirm that you have read, understood, and accepted these Terms, as well as our <a href="privacy.html">Privacy Policy</a>.</p><p>We reserve the right to modify these Terms at any time. When we do, we will update the "Last Updated" date. Continued use of the Service after any changes constitutes your acceptance of the updated Terms.</p>',
      },
      s2: {
        title: '2. Eligibility',
        body: '<p>To use the Service, you must be at least <strong>13 years old</strong>.</p><p>If you are between <strong>13 and 18 years old</strong>, you confirm that you have obtained permission from a parent or legal guardian to use the Service, and that they have reviewed and accepted these Terms on your behalf.</p><p>By using the Service, you represent and warrant that:</p><ul><li>You meet the minimum age requirement;</li><li>All information you provide is accurate and truthful;</li><li>You have the legal capacity to enter into these Terms.</li></ul><p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p><p>We reserve the right to suspend or terminate any account if we believe that a user does not meet these eligibility requirements.</p>',
      },
      s3: {
        title: '3. User Accounts',
        body: '<p>To access certain features of the Service, you must create an account.</p><p>You may register using one of the following methods:</p><ul><li>Email address and password (with verification via one-time password (OTP));</li><li>Phone number and password (with OTP verification);</li><li>Third-party authentication providers such as Google, Apple, or Facebook.</li></ul><p>You agree to provide accurate, complete, and up-to-date information when creating your account and to keep this information updated.</p><p>You are solely responsible for:</p><ul><li>Maintaining the confidentiality of your account credentials;</li><li>All activities that occur under your account;</li><li>Ensuring that your login methods are used securely.</li></ul><p>You must not:</p><ul><li>Create an account using false information;</li><li>Impersonate another person;</li><li>Share your account with others.</li></ul><p>We reserve the right to suspend or terminate your account if we suspect any unauthorized use, fraudulent activity, or violation of these Terms.</p><p>You are responsible for any activity conducted through your account, whether or not you have authorized such activity.</p>',
      },
      s4: {
        title: '4. Use of the Service',
        body: '<p>Partido is a digital platform that enables users to connect with other players, create and join sports activities, and communicate with each other.</p><p>Partido <strong>does not organize, manage, supervise, or control any matches, events, or activities</strong>. Users are solely responsible for organizing, participating in, and managing their own activities.</p><p>By using the Service, you acknowledge and agree that:</p><ul><li>Partido acts solely as an intermediary platform that facilitates connections between users;</li><li>Any match, event, or activity is organized independently by users;</li><li>You participate in activities at your own risk.</li></ul><p>Partido does not verify the identity, skill level, behavior, or reliability of users, and does not guarantee the quality, safety, or legality of any activity arranged through the Service.</p><p>You are solely responsible for:</p><ul><li>Your interactions with other users;</li><li>Your physical condition and ability to participate in sports activities;</li><li>Complying with applicable laws and regulations.</li></ul><p>Partido shall not be held liable for:</p><ul><li>Any injury, damage, or loss occurring during or as a result of participation in any activity;</li><li>Any disputes between users;</li><li>Any cancellation, no-show, or misconduct by users.</li></ul><p>Partido does not provide sports facilities, equipment, referees, or insurance.</p><h3>Exception — Official Partido Events</h3><p>From time to time, Partido may organize official tournaments or events ("Official Events").</p><p>Such Official Events will be clearly identified within the Service and may be subject to:</p><ul><li>Specific rules;</li><li>Entry fees;</li><li>Prize conditions;</li><li>Additional safety measures, including insurance coverage where applicable.</li></ul><p>Participation in Official Events may be subject to additional rules and conditions communicated within the Service.</p><p>By registering for or participating in an Official Event, you agree to the following:</p><h3>Event Registration and Participation</h3><ul><li>You are responsible for ensuring that you meet all eligibility requirements for the event;</li><li>Your participation is confirmed only after successful registration and, where applicable, payment of any required entry fee;</li><li>You agree to attend the event as scheduled and to respect other participants and organizers.</li></ul><h3>Fees, Payments, and Refunds</h3><ul><li>Certain Official Events may require payment of an entry fee;</li><li>All applicable fees, payment conditions, and refund policies will be clearly communicated before registration;</li><li>Unless otherwise specified, entry fees may be non-refundable in case of non-attendance (no-show);</li><li>Partido reserves the right to cancel or modify events, in which case refund conditions will be communicated accordingly.</li></ul><h3>Prizes and Rewards</h3><ul><li>Some Official Events may include prizes, rewards, or incentives;</li><li>Prize conditions, eligibility, and distribution will be defined for each event;</li><li>Partido reserves the right to modify or cancel prizes in case of fraud, misconduct, or violation of these Terms.</li></ul><h3>Health, Safety, and Assumption of Risk</h3><ul><li>You acknowledge that participation in sports activities involves inherent risks, including the risk of injury;</li><li>You confirm that you are physically able to participate and assume full responsibility for your health and safety;</li><li>Where applicable, Partido may provide additional safety measures, including insurance coverage, which will be communicated for the relevant event;</li><li>You remain responsible for complying with all applicable rules, instructions, and safety guidelines.</li></ul><h3>User Conduct During Events</h3><ul><li>You agree to behave in a respectful and sportsmanlike manner;</li><li>Any misconduct, including violence, harassment, or cheating, may result in immediate exclusion from the event without refund;</li><li>Partido reserves the right to take appropriate action, including banning users from future events.</li></ul>',
      },
      s5: {
        title: '5. User Conduct and Prohibited Behavior',
        body: '<p>When using the Service, you agree to behave respectfully and responsibly toward other users.</p><p>You agree <strong>not to engage in any of the following prohibited activities</strong>:</p><ul><li>Failing to attend a match or activity without valid reason ("no-show"), especially after confirming participation;</li><li>Engaging in abusive, offensive, or inappropriate behavior, including insults, harassment, or threats;</li><li>Participating in or inciting violence, whether physical or verbal, during or in connection with any activity;</li><li>Creating false accounts, impersonating another person, or providing misleading information;</li><li>Misrepresenting your skill level or other relevant information in a way that negatively affects other users;</li><li>Sending spam, unauthorized advertising, or using the Service for purposes unrelated to sports activities;</li><li>Attempting to cheat, manipulate outcomes, or otherwise undermine fair play;</li><li>Using the Service in any unlawful manner or in violation of applicable laws or regulations.</li></ul><p>You also agree to interact with other users in good faith and to contribute to a positive and respectful community.</p><p>Partido reserves the right, at its sole discretion, to:</p><ul><li>Issue warnings;</li><li>Suspend or restrict access to the Service;</li><li>Permanently terminate accounts.</li></ul><p>Partido may take action without prior notice where necessary to protect the integrity of the Service or the safety of its users.</p>',
      },
      s6: {
        title: '6. User Content',
        body: '<p>You retain ownership of your User Content. By submitting User Content through the Service, you do not transfer ownership to Partido.</p><p>The Service may allow users to create, upload, share, and communicate content, including but not limited to messages, images, videos, audio recordings, location data, profile information, and other materials ("User Content").</p><p>You are solely responsible for any User Content that you create, upload, or share through the Service.</p><p>By using the Service, you agree that:</p><ul><li>Your User Content does not violate any applicable laws or regulations;</li><li>Your User Content does not infringe the rights of any third party, including privacy, intellectual property, or personal rights;</li><li>Your User Content is not abusive, offensive, harmful, or inappropriate.</li></ul><p>Partido does not actively monitor or control User Content and does not guarantee the accuracy, integrity, or quality of any content shared by users.</p><p>Partido shall not be held liable for any User Content or for any consequences arising from the use, sharing, or reliance on such content.</p><p>However, Partido reserves the right, at its sole discretion, to:</p><ul><li>Review, remove, or restrict access to any User Content;</li><li>Suspend or terminate accounts associated with inappropriate or unlawful content, at any time and without prior notice.</li></ul><p>By submitting User Content, you grant Partido a <strong>non-exclusive, royalty-free license</strong> to use, display, and distribute such content solely as necessary to operate and provide the Service. This license ends when you delete your content or your account, unless such content has been shared with other users and they have not deleted it.</p><p>You must have all necessary rights and permissions to share any User Content, including consent from individuals appearing in such content.</p>',
      },
      s7: {
        title: '7. Limitation of Liability',
        body: '<p>To the maximum extent permitted by applicable law, Partido shall not be held liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Service.</p><p>In particular, Partido shall not be liable for:</p><ul><li>Any injury, accident, or physical harm occurring during or as a result of participation in any match or activity arranged through the Service;</li><li>Any disputes, conflicts, or interactions between users;</li><li>Any loss of data, unauthorized access to accounts, or security breaches beyond our reasonable control;</li><li>Any interruption, unavailability, or malfunction of the Service;</li><li>Any financial loss, missed opportunity, or loss of profits resulting from the use of the Service.</li></ul><p>You acknowledge that your use of the Service and participation in any activities is entirely at your own risk.</p><p>Nothing in these Terms shall exclude or limit liability where such limitation is not permitted under applicable law.</p><p>Partido\'s total liability for any claim arising out of or relating to the Service shall not exceed the total amount, if any, paid by the user to Partido during the twelve (12) months preceding the claim.</p>',
      },
      s8: {
        title: '8. Indemnification',
        body: '<p>You agree to defend, indemnify, and hold harmless Partido, its affiliates, and its respective officers, directors, employees, and partners from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in connection with:</p><ul><li>Your use of the Service;</li><li>Your participation in any match, activity, or Official Event;</li><li>Your violation of these Terms;</li><li>Your User Content;</li><li>Your interactions or disputes with other users.</li></ul><p>Partido reserves the right to assume the exclusive defense and control of any matter subject to indemnification, in which case you agree to cooperate fully with such defense.</p>',
      },
      s9: {
        title: '9. Suspension and Termination',
        body: '<p>You may delete your account at any time, directly through the Service, where such functionality is available.</p><p>Upon deletion of your account, your access to the Service will be terminated, and your data will be handled in accordance with our <a href="privacy.html">Privacy Policy</a>.</p><p>Partido reserves the right, at its sole discretion, to suspend, restrict, or terminate your account, with or without prior notice, if:</p><ul><li>You violate these Terms;</li><li>You engage in prohibited behavior;</li><li>Your actions may harm other users, the integrity of the Service, or Partido.</li></ul><p>Partido may also suspend or terminate accounts for operational, security, or legal reasons.</p><p>In case of termination, you may lose access to your account, messages, and any associated data.</p><p>Termination of an account does not limit any rights or remedies available to Partido.</p>',
      },
      s10: {
        title: '10. Governing Law and Dispute Resolution',
        body: '<p>These Terms and your use of the Service shall be governed by and construed in accordance with the laws of the Kingdom of Morocco.</p><p>Any dispute, claim, or controversy arising out of or relating to these Terms or the use of the Service shall be subject to the exclusive jurisdiction of the competent courts of Morocco.</p><p>Notwithstanding the above, Partido reserves the right to seek injunctive or equitable relief in any jurisdiction where necessary to protect its rights or interests.</p><p>If you access or use the Service from outside Morocco, you do so at your own initiative and are responsible for compliance with any applicable local laws.</p>',
      },
      s11: {
        title: '11. Intellectual Property',
        body: '<p>The Service, including its design, features, content, trademarks, and technology, is owned by Partido or its licensors and is protected by applicable intellectual property laws.</p><p>You may not copy, modify, distribute, sell, or exploit any part of the Service without prior written consent from Partido.</p>',
      },
      s12: {
        title: '12. Disclaimer of Warranties',
        body: '<p>The Service is provided "as is" and "as available," without warranties of any kind, whether express or implied.</p><p>Partido does not guarantee that the Service will be uninterrupted, secure, or error-free.</p>',
      },
      s13: {
        title: '13. Severability',
        body: '<p>If any provision of these Terms is found invalid or unenforceable by a competent court, the remaining provisions shall remain in full force and effect.</p>',
      },
      s14: {
        title: '14. Entire Agreement',
        body: '<p>These Terms constitute the entire agreement between you and Partido regarding the Service and supersede any prior agreements or understandings relating to the subject matter herein.</p>',
      },
      s15: {
        title: '15. Contact',
        body: '<p>For any questions regarding these Terms:</p><div class="pp-contact-block"><strong>BBF VENTURES</strong><p><strong>Email:</strong> <a href="mailto:admin@partido.ma">admin@partido.ma</a></p><p class="pp-thanks">We will make reasonable efforts to respond to inquiries in a timely manner.</p></div>',
      },
    },
  },

  fr: {
    nav: { discover:'Rejoindre un match', organize:'Trouver des joueurs', profile:'Tournois', contact:'Contact', cta:'Télécharger' },
    store: { comingSoon:'Bientôt sur iOS' },
    hero: {
      h1: "Rejoignez la meilleure<br><em>communauté foot du Maroc</em>",
      sub: 'Rejoignez un match près de chez vous ou trouvez les joueurs qui manquent à votre équipe. Venez seul ou avec vos amis.',
    },
    marquee: ["Trouvez un match près de chez vous", "Organisez un match en 60 secondes", "Venez seul ou avec vos amis", "Trouvez les joueurs qui manquent à votre équipe"],
    how: {
      "label": "Rejoindre un match",
      "title": "Votre prochain match en 3 étapes",
      "sub": "Trouvez un match qui vous convient, réservez votre place et retrouvez les autres joueurs sur le terrain.",
      "s1badge": "Découvrir",
      "s1t": "Trouvez votre match",
      "s1p": "Parcourez les matchs près de chez vous et choisissez selon l’horaire, le niveau et le format de jeu.",
      "s2badge": "Rejoindre",
      "s2t": "Réservez votre place",
      "s2p": "Consultez le lieu, le prix et les places disponibles, puis rejoignez le match. Vous pouvez aussi réserver pour vos amis.",
      "s3badge": "Jouer",
      "s3t": "Faites connaissance sur le terrain",
      "s3p": "Retrouvez les autres participants et profitez du match, seul ou avec vos amis.",
      "cta": "À vous de jouer."
},
    pitchcta: {
      "title": "Votre prochain match commence ici.",
      "sub": "Rejoignez un match ou trouvez les joueurs qu’il vous manque. Téléchargez Partido gratuitement."
},
    story: {
      "label": "Notre histoire",
      "title": "Le football nous rassemble.",
      "p1": "Au Maroc, l’envie de jouer est partout. Mais trouver un match ou réunir assez de joueurs n’est pas toujours simple.",
      "p2": "Partido est né pour faciliter ces rencontres : rejoindre un match, trouver les participants manquants et partager un bon moment sur le terrain.",
      "mission": "Moins de temps à chercher des joueurs. Plus de temps à jouer ensemble."
},
    tourn: {
      "badge": "Bientôt disponible",
      "title": "Des tournois de foot. Des prix à gagner.",
      "sub": "Réunissez votre équipe et venez relever le défi. Les tournois Partido arriveront ville par ville, avec les lieux, les dates et les récompenses annoncés avant chaque événement.",
      "prizeTitle": "Jouez pour la victoire et les récompenses",
      "prizeBody": "Des prix à décrocher, avec une dotation annoncée pour chaque tournoi.",
      "cityTitle": "Une ville, un nouveau défi",
      "cityBody": "Chaque tournoi aura sa ville d’accueil. Suivez les annonces pour découvrir les prochaines destinations.",
      "formatTitle": "L’intensité sur le terrain. L’organisation autour.",
      "formatBody": "Un format clair, un programme annoncé et une expérience connectée à Partido.",
      "league": "Des ligues sont aussi à l’étude pour prolonger la compétition.",
      "follow": "Prochaines villes, prochains prix : suivez les annonces."
},
    proof: { p1v:'Complétez votre match en minutes', p1l:'Trouvez les joueurs manquants instantanément', p2v:'Trouvez des matchs instantanément', p2l:'Même si vous jouez seul', p3v:'Jouez pour des prix', p3l:'Participez aux tournois au Maroc', p4v:'100% gratuit', p4l:'Sans frais, sans abonnement' },
    cta: {
      "title": "Envie de jouer ?<br>Passez à l’action.",
      "sub": "Téléchargez Partido gratuitement. Rejoignez un match ou trouvez les joueurs qu’il vous manque."
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
    footer: { privacy:'Confidentialité', terms:'CGU', contact:'Contact', getapp:"Télécharger l'app", explore:'Découvrir Partido', delete:'Supprimer mon compte', tagline:'Le foot nous rassemble.', copy:'© 2026 Partido, une marque de BBF Ventures. Tous droits réservés.' },
    bridge: { text: 'Il vous manque des joueurs ?', sub: 'Publiez votre match et trouvez les participants qu’il vous manque.' },
    tp: {
      heroBadge: 'Arrive en 2026',
      heroTitle: 'Tournois de<br>Football<br><em>Partout au Maroc</em>',
      heroSub: 'Compétition ville par ville. Vrais prix. Ouvert à tous les joueurs, tous les niveaux, toutes les villes.',
      heroCta1: 'Inscrire mon équipe',
      heroCta2: 'En savoir plus ↓',
      heroScroll: 'Défiler pour explorer',
      stat1val: '100K DHS', stat1lbl: 'Cagnotte par saison',
      stat2val: '6+ Villes', stat2lbl: 'Compétition nationale',
      stat3val: 'Tous niveaux', stat3lbl: 'Ouvert à tous',
      hlLabel: 'Ce qui est en jeu',
      hlTitle: 'Compétir.<br>Gagner. Recommencer.',
      hlSub: 'Tout ce qui rend un tournoi inoubliable — prix, compétition et une communauté qui dure bien après le coup de sifflet final.',
      c1val: "Jusqu'à <span>100 000 DHS</span>", c1lbl: 'Gains en espèces',
      c1desc: 'Argent réel. Compétition réelle. Les meilleures équipes remportent des prix en espèces, des médailles et une reconnaissance au sein de la communauté Partido.',
      c2val: '<span>Ville par ville</span>', c2lbl: 'Tournée nationale',
      c2desc: 'De Casablanca à Marrakech, de Rabat à Tanger — compétis dans ta ville puis voyage pour les finales nationales.',
      c3val: '<span>Ouvert</span> à tous', c3lbl: 'Tous les joueurs',
      c3desc: "Que tu sois un joueur expérimenté ou débutant — inscriptions individuelles, équipes et squads tous bienvenus.",
      howLabel: 'Simple par conception',
      howTitle: 'Inscris-toi.<br>Joue. Gagne.',
      howSub: "Trois étapes de ta première touche à la levée du trophée.",
      s1badge: 'Étape 1 · Inscription', s1title: 'Inscris ton équipe',
      s1desc: "Crée le profil de ton équipe sur Partido. Choisis ton format — 5v5, 6v6 ou 7v7 — et inscris-toi au prochain tour du tournoi dans ta ville.",
      s2badge: 'Étape 2 · Joue', s2title: 'Joue tes matchs',
      s2desc: "Sois mis en relation avec des équipes de ta ville. Calendrier complet géré via l'appli. Grimpe au classement tour après tour, suis chaque résultat en temps réel.",
      s3badge: 'Étape 3 · Victoire', s3title: 'Remporte tes récompenses',
      s3desc: "Les meilleures équipes avancent vers les finales régionales — puis la scène nationale. Gagne des prix en espèces, des médailles et des certificats. Chaque participant est reconnu.",
      ctaBadge: 'Lancement en 2026',
      ctaTitle: "Sois le<br>Premier à<br><em>Compétir</em>",
      ctaSub: 'Les tournois se lancent à travers le Maroc en 2026. Prépare ton équipe — les inscriptions ouvrent bientôt.',
      ctaBtn1: "Exprimer mon intérêt", ctaBtn2: "Télécharger l'appli",
    },
    org: {
      "label": "Trouver des joueurs",
      "title": "Trouvez les joueurs qui manquent à votre match.",
      "sub": "Vous avez déjà un groupe ? Publiez votre match, indiquez les places disponibles et permettez à d’autres joueurs de vous rejoindre.",
      "c1badge": "Publier",
      "c1t": "Publiez votre match",
      "c1p": "Renseignez le terrain, l’horaire, le niveau et le nombre de places disponibles.",
      "c2badge": "Réunir",
      "c2t": "Réunissez les joueurs",
      "c2p": "Invitez vos amis, partagez votre match et suivez les joueurs qui vous rejoignent.",
      "c3badge": "Jouer",
      "c3t": "Place au match",
      "c3p": "Échangez les derniers détails dans le chat, puis retrouvez les participants sur le terrain."
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
    terms: {
      label: 'Mentions légales',
      title: 'Conditions d\'Utilisation',
      date: '<strong>Dernière mise à jour :</strong> 10.04.2026',
      intro: '<p>Ces Conditions d\'Utilisation régissent votre accès et votre utilisation de l\'application mobile Partido, du site web et des services associés, exploités par BBF VENTURES.</p><p>En créant un compte, en accédant ou en utilisant le Service, vous acceptez d\'être lié par ces Conditions. Veuillez les lire attentivement avant d\'utiliser Partido.</p>',
      toc: {
        heading: 'Sommaire', toggle: 'Sommaire',
        s1:'1. Acceptation des Conditions', s2:'2. Éligibilité', s3:'3. Comptes Utilisateurs',
        s4:'4. Utilisation du Service', s5:'5. Comportement des Utilisateurs', s6:'6. Contenu Utilisateur',
        s7:'7. Limitation de Responsabilité', s8:'8. Indemnisation',
        s9:'9. Suspension &amp; Résiliation', s10:'10. Droit Applicable',
        s11:'11. Propriété Intellectuelle', s12:'12. Exclusion de Garanties',
        s13:'13. Divisibilité', s14:'14. Intégralité de l\'Accord', s15:'15. Contact',
      },
      s1: {
        title: '1. Acceptation des Conditions',
        body: '<p>Bienvenue sur Partido.</p><p>Ces Conditions d\'Utilisation (« Conditions ») régissent votre accès et votre utilisation de l\'application mobile Partido, du site web et des services associés (collectivement, le « Service »), exploités par BBF VENTURES (« Partido », « nous », « notre »).</p><p>En créant un compte, en accédant ou en utilisant le Service, vous acceptez d\'être lié par ces Conditions. Si vous n\'acceptez pas ces Conditions, vous ne devez pas utiliser le Service.</p><p>Si vous utilisez le Service pour le compte d\'une organisation, vous déclarez avoir l\'autorité d\'engager cette organisation.</p><p>Vous confirmez avoir lu, compris et accepté ces Conditions, ainsi que notre <a href="privacy.html">Politique de Confidentialité</a>.</p><p>Nous nous réservons le droit de modifier ces Conditions à tout moment. Lorsque nous le faisons, nous mettrons à jour la date de « Dernière mise à jour ». L\'utilisation continue du Service après toute modification constitue votre acceptation des Conditions mises à jour.</p>',
      },
      s2: {
        title: '2. Éligibilité',
        body: '<p>Pour utiliser le Service, vous devez avoir au moins <strong>13 ans</strong>.</p><p>Si vous avez entre <strong>13 et 18 ans</strong>, vous confirmez avoir obtenu l\'autorisation d\'un parent ou tuteur légal pour utiliser le Service, et qu\'ils ont examiné et accepté ces Conditions en votre nom.</p><p>En utilisant le Service, vous déclarez et garantissez que :</p><ul><li>Vous satisfaisez à l\'exigence d\'âge minimum ;</li><li>Toutes les informations que vous fournissez sont exactes et véridiques ;</li><li>Vous avez la capacité juridique de conclure ces Conditions.</li></ul><p>Vous êtes responsable de la confidentialité de vos identifiants de compte et de toutes les activités effectuées sous votre compte.</p><p>Nous nous réservons le droit de suspendre ou de résilier tout compte si nous estimons qu\'un utilisateur ne satisfait pas à ces conditions d\'éligibilité.</p>',
      },
      s3: {
        title: '3. Comptes Utilisateurs',
        body: '<p>Pour accéder à certaines fonctionnalités du Service, vous devez créer un compte.</p><p>Vous pouvez vous inscrire en utilisant l\'une des méthodes suivantes :</p><ul><li>Adresse e-mail et mot de passe (avec vérification via mot de passe à usage unique (OTP)) ;</li><li>Numéro de téléphone et mot de passe (avec vérification OTP) ;</li><li>Fournisseurs d\'authentification tiers tels que Google, Apple ou Facebook.</li></ul><p>Vous acceptez de fournir des informations exactes, complètes et à jour lors de la création de votre compte et de maintenir ces informations à jour.</p><p>Vous êtes seul responsable de :</p><ul><li>La confidentialité de vos identifiants de compte ;</li><li>Toutes les activités effectuées sous votre compte ;</li><li>L\'utilisation sécurisée de vos méthodes de connexion.</li></ul><p>Vous ne devez pas :</p><ul><li>Créer un compte avec de fausses informations ;</li><li>Usurper l\'identité d\'une autre personne ;</li><li>Partager votre compte avec d\'autres.</li></ul><p>Nous nous réservons le droit de suspendre ou de résilier votre compte si nous soupçonnons une utilisation non autorisée, une activité frauduleuse ou une violation de ces Conditions.</p><p>Vous êtes responsable de toute activité effectuée via votre compte, que vous l\'ayez autorisée ou non.</p>',
      },
      s4: {
        title: '4. Utilisation du Service',
        body: '<p>Partido est une plateforme numérique qui permet aux utilisateurs de se connecter avec d\'autres joueurs, de créer et de rejoindre des activités sportives, et de communiquer entre eux.</p><p>Partido <strong>n\'organise, ne gère, ne supervise ni ne contrôle aucun match, événement ou activité</strong>. Les utilisateurs sont seuls responsables de l\'organisation, de la participation et de la gestion de leurs propres activités.</p><p>En utilisant le Service, vous reconnaissez et acceptez que :</p><ul><li>Partido agit uniquement comme une plateforme intermédiaire facilitant les connexions entre utilisateurs ;</li><li>Tout match, événement ou activité est organisé de manière indépendante par les utilisateurs ;</li><li>Vous participez aux activités à vos propres risques.</li></ul><p>Partido ne vérifie pas l\'identité, le niveau de compétence, le comportement ou la fiabilité des utilisateurs, et ne garantit pas la qualité, la sécurité ou la légalité d\'une activité organisée via le Service.</p><p>Vous êtes seul responsable de :</p><ul><li>Vos interactions avec les autres utilisateurs ;</li><li>Votre condition physique et votre capacité à participer aux activités sportives ;</li><li>Le respect des lois et réglementations applicables.</li></ul><p>Partido ne pourra être tenu responsable de :</p><ul><li>Toute blessure, dommage ou perte survenant lors de ou à la suite d\'une participation à une activité ;</li><li>Tout litige entre utilisateurs ;</li><li>Toute annulation, absence ou mauvais comportement d\'utilisateurs.</li></ul><p>Partido ne fournit pas d\'installations sportives, d\'équipements, d\'arbitres ou d\'assurances.</p><h3>Exception — Événements Officiels Partido</h3><p>Partido peut occasionnellement organiser des tournois ou événements officiels (« Événements Officiels »).</p><p>Ces Événements Officiels seront clairement identifiés dans le Service et peuvent être soumis à :</p><ul><li>Des règles spécifiques ;</li><li>Des frais d\'inscription ;</li><li>Des conditions de prix ;</li><li>Des mesures de sécurité supplémentaires, y compris une couverture d\'assurance le cas échéant.</li></ul><p>La participation aux Événements Officiels peut être soumise à des règles et conditions supplémentaires communiquées dans le Service.</p><p>En vous inscrivant ou en participant à un Événement Officiel, vous acceptez ce qui suit :</p><h3>Inscription et Participation aux Événements</h3><ul><li>Vous êtes responsable de vous assurer que vous satisfaites à toutes les conditions d\'éligibilité pour l\'événement ;</li><li>Votre participation n\'est confirmée qu\'après une inscription réussie et, le cas échéant, le paiement des frais d\'inscription requis ;</li><li>Vous acceptez d\'assister à l\'événement comme prévu et de respecter les autres participants et organisateurs.</li></ul><h3>Frais, Paiements et Remboursements</h3><ul><li>Certains Événements Officiels peuvent nécessiter le paiement de frais d\'inscription ;</li><li>Tous les frais applicables, conditions de paiement et politiques de remboursement seront clairement communiqués avant l\'inscription ;</li><li>Sauf indication contraire, les frais d\'inscription peuvent être non remboursables en cas d\'absence (no-show) ;</li><li>Partido se réserve le droit d\'annuler ou de modifier des événements, auquel cas les conditions de remboursement seront communiquées en conséquence.</li></ul><h3>Prix et Récompenses</h3><ul><li>Certains Événements Officiels peuvent inclure des prix, récompenses ou incitations ;</li><li>Les conditions des prix, l\'éligibilité et la distribution seront définies pour chaque événement ;</li><li>Partido se réserve le droit de modifier ou d\'annuler des prix en cas de fraude, de mauvaise conduite ou de violation de ces Conditions.</li></ul><h3>Santé, Sécurité et Acceptation des Risques</h3><ul><li>Vous reconnaissez que la participation aux activités sportives comporte des risques inhérents, y compris le risque de blessure ;</li><li>Vous confirmez être physiquement capable de participer et assumez l\'entière responsabilité de votre santé et de votre sécurité ;</li><li>Le cas échéant, Partido peut fournir des mesures de sécurité supplémentaires, y compris une couverture d\'assurance, qui seront communiquées pour l\'événement concerné ;</li><li>Vous demeurez responsable du respect de toutes les règles, instructions et consignes de sécurité applicables.</li></ul><h3>Comportement des Utilisateurs lors des Événements</h3><ul><li>Vous acceptez de vous comporter de manière respectueuse et sportive ;</li><li>Tout comportement incorrect, y compris la violence, le harcèlement ou la triche, peut entraîner une exclusion immédiate de l\'événement sans remboursement ;</li><li>Partido se réserve le droit de prendre les mesures appropriées, y compris l\'interdiction d\'utilisateurs lors de futurs événements.</li></ul>',
      },
      s5: {
        title: '5. Comportement des Utilisateurs et Comportements Interdits',
        body: '<p>En utilisant le Service, vous acceptez de vous comporter de manière respectueuse et responsable envers les autres utilisateurs.</p><p>Vous acceptez de <strong>ne pas vous engager dans l\'une des activités interdites suivantes</strong> :</p><ul><li>Ne pas se présenter à un match ou une activité sans raison valable (« no-show »), surtout après avoir confirmé votre participation ;</li><li>Adopter un comportement abusif, offensant ou inapproprié, y compris les insultes, le harcèlement ou les menaces ;</li><li>Participer ou inciter à la violence, qu\'elle soit physique ou verbale, lors d\'une activité ou en lien avec elle ;</li><li>Créer de faux comptes, usurper l\'identité d\'une autre personne ou fournir des informations trompeuses ;</li><li>Déclarer faussement votre niveau de compétence ou d\'autres informations pertinentes d\'une manière qui affecte négativement les autres utilisateurs ;</li><li>Envoyer du spam, de la publicité non autorisée ou utiliser le Service à des fins sans rapport avec les activités sportives ;</li><li>Tenter de tricher, de manipuler les résultats ou de compromettre le fair-play ;</li><li>Utiliser le Service de manière illégale ou en violation des lois et réglementations applicables.</li></ul><p>Vous acceptez également d\'interagir avec les autres utilisateurs de bonne foi et de contribuer à une communauté positive et respectueuse.</p><p>Partido se réserve le droit, à sa seule discrétion, de :</p><ul><li>Émettre des avertissements ;</li><li>Suspendre ou restreindre l\'accès au Service ;</li><li>Résilier définitivement des comptes.</li></ul><p>Partido peut prendre des mesures sans préavis lorsque cela est nécessaire pour protéger l\'intégrité du Service ou la sécurité de ses utilisateurs.</p>',
      },
      s6: {
        title: '6. Contenu Utilisateur',
        body: '<p>Vous conservez la propriété de votre Contenu Utilisateur. En soumettant du Contenu Utilisateur via le Service, vous ne transférez pas la propriété à Partido.</p><p>Le Service peut permettre aux utilisateurs de créer, télécharger, partager et communiquer du contenu, y compris, sans s\'y limiter, des messages, images, vidéos, enregistrements audio, données de localisation, informations de profil et autres matériaux (« Contenu Utilisateur »).</p><p>Vous êtes seul responsable de tout Contenu Utilisateur que vous créez, téléchargez ou partagez via le Service.</p><p>En utilisant le Service, vous acceptez que :</p><ul><li>Votre Contenu Utilisateur ne viole aucune loi ou réglementation applicable ;</li><li>Votre Contenu Utilisateur ne porte pas atteinte aux droits de tiers, y compris les droits à la vie privée, à la propriété intellectuelle ou les droits personnels ;</li><li>Votre Contenu Utilisateur n\'est pas abusif, offensant, nuisible ou inapproprié.</li></ul><p>Partido ne surveille pas activement ni ne contrôle le Contenu Utilisateur et ne garantit pas l\'exactitude, l\'intégrité ou la qualité du contenu partagé par les utilisateurs.</p><p>Partido ne pourra être tenu responsable de tout Contenu Utilisateur ou des conséquences découlant de l\'utilisation, du partage ou de la confiance accordée à ce contenu.</p><p>Cependant, Partido se réserve le droit, à sa seule discrétion, de :</p><ul><li>Examiner, supprimer ou restreindre l\'accès à tout Contenu Utilisateur ;</li><li>Suspendre ou résilier des comptes associés à un contenu inapproprié ou illégal, à tout moment et sans préavis.</li></ul><p>En soumettant du Contenu Utilisateur, vous accordez à Partido une <strong>licence non exclusive et libre de droits</strong> pour utiliser, afficher et distribuer ce contenu dans la seule mesure nécessaire pour exploiter et fournir le Service. Cette licence prend fin lorsque vous supprimez votre contenu ou votre compte, sauf si ce contenu a été partagé avec d\'autres utilisateurs qui ne l\'ont pas supprimé.</p><p>Vous devez disposer de tous les droits et autorisations nécessaires pour partager tout Contenu Utilisateur, y compris le consentement des personnes apparaissant dans ce contenu.</p>',
      },
      s7: {
        title: '7. Limitation de Responsabilité',
        body: '<p>Dans toute la mesure permise par la loi applicable, Partido ne pourra être tenu responsable de tout dommage indirect, accessoire, spécial ou consécutif découlant de ou en lien avec votre utilisation du Service.</p><p>En particulier, Partido ne pourra être tenu responsable de :</p><ul><li>Toute blessure, accident ou dommage corporel survenant lors de ou à la suite d\'une participation à un match ou une activité organisée via le Service ;</li><li>Tout litige, conflit ou interaction entre utilisateurs ;</li><li>Toute perte de données, accès non autorisé aux comptes ou failles de sécurité au-delà de notre contrôle raisonnable ;</li><li>Toute interruption, indisponibilité ou dysfonctionnement du Service ;</li><li>Toute perte financière, occasion manquée ou perte de bénéfices résultant de l\'utilisation du Service.</li></ul><p>Vous reconnaissez que votre utilisation du Service et votre participation à des activités se font entièrement à vos propres risques.</p><p>Rien dans ces Conditions n\'exclut ni ne limite la responsabilité dans les cas où une telle limitation n\'est pas autorisée par la loi applicable.</p><p>La responsabilité totale de Partido pour toute réclamation découlant de ou liée au Service ne pourra excéder le montant total, le cas échéant, payé par l\'utilisateur à Partido au cours des douze (12) mois précédant la réclamation.</p>',
      },
      s8: {
        title: '8. Indemnisation',
        body: '<p>Vous acceptez de défendre, d\'indemniser et de dégager de toute responsabilité Partido, ses affiliés, et leurs dirigeants, administrateurs, employés et partenaires respectifs contre toute réclamation, responsabilité, dommage, perte et dépense (y compris des honoraires d\'avocat raisonnables) découlant de ou en lien avec :</p><ul><li>Votre utilisation du Service ;</li><li>Votre participation à un match, une activité ou un Événement Officiel ;</li><li>Votre violation de ces Conditions ;</li><li>Votre Contenu Utilisateur ;</li><li>Vos interactions ou litiges avec d\'autres utilisateurs.</li></ul><p>Partido se réserve le droit d\'assumer la défense et le contrôle exclusifs de toute question soumise à indemnisation, auquel cas vous acceptez de coopérer pleinement à cette défense.</p>',
      },
      s9: {
        title: '9. Suspension et Résiliation',
        body: '<p>Vous pouvez supprimer votre compte à tout moment, directement via le Service, lorsque cette fonctionnalité est disponible.</p><p>Lors de la suppression de votre compte, votre accès au Service sera résilié, et vos données seront traitées conformément à notre <a href="privacy.html">Politique de Confidentialité</a>.</p><p>Partido se réserve le droit, à sa seule discrétion, de suspendre, restreindre ou résilier votre compte, avec ou sans préavis, si :</p><ul><li>Vous violez ces Conditions ;</li><li>Vous adoptez un comportement interdit ;</li><li>Vos actions peuvent nuire à d\'autres utilisateurs, à l\'intégrité du Service ou à Partido.</li></ul><p>Partido peut également suspendre ou résilier des comptes pour des raisons opérationnelles, de sécurité ou juridiques.</p><p>En cas de résiliation, vous pouvez perdre l\'accès à votre compte, vos messages et toutes les données associées.</p><p>La résiliation d\'un compte ne limite aucun droit ni recours disponible pour Partido.</p>',
      },
      s10: {
        title: '10. Droit Applicable et Résolution des Litiges',
        body: '<p>Ces Conditions et votre utilisation du Service seront régies et interprétées conformément aux lois du Royaume du Maroc.</p><p>Tout litige, réclamation ou différend découlant de ou lié à ces Conditions ou à l\'utilisation du Service sera soumis à la juridiction exclusive des tribunaux compétents du Maroc.</p><p>Nonobstant ce qui précède, Partido se réserve le droit de demander une injonction ou un recours équitable dans toute juridiction où cela est nécessaire pour protéger ses droits ou intérêts.</p><p>Si vous accédez ou utilisez le Service depuis l\'extérieur du Maroc, vous le faites de votre propre initiative et êtes responsable du respect de toute loi locale applicable.</p>',
      },
      s11: {
        title: '11. Propriété Intellectuelle',
        body: '<p>Le Service, y compris sa conception, ses fonctionnalités, son contenu, ses marques et sa technologie, est la propriété de Partido ou de ses concédants de licence et est protégé par les lois applicables sur la propriété intellectuelle.</p><p>Vous ne pouvez pas copier, modifier, distribuer, vendre ou exploiter toute partie du Service sans le consentement écrit préalable de Partido.</p>',
      },
      s12: {
        title: '12. Exclusion de Garanties',
        body: '<p>Le Service est fourni « tel quel » et « selon disponibilité », sans garantie d\'aucune sorte, expresse ou implicite.</p><p>Partido ne garantit pas que le Service sera ininterrompu, sécurisé ou sans erreur.</p>',
      },
      s13: {
        title: '13. Divisibilité',
        body: '<p>Si une disposition de ces Conditions est jugée invalide ou inapplicable par un tribunal compétent, les dispositions restantes demeureront pleinement en vigueur.</p>',
      },
      s14: {
        title: '14. Intégralité de l\'Accord',
        body: '<p>Ces Conditions constituent l\'intégralité de l\'accord entre vous et Partido concernant le Service et remplacent tout accord ou entente antérieur relatif à l\'objet des présentes.</p>',
      },
      s15: {
        title: '15. Contact',
        body: '<p>Pour toute question concernant ces Conditions :</p><div class="pp-contact-block"><strong>BBF VENTURES</strong><p><strong>E-mail :</strong> <a href="mailto:admin@partido.ma">admin@partido.ma</a></p><p class="pp-thanks">Nous ferons des efforts raisonnables pour répondre aux demandes dans les meilleurs délais.</p></div>',
      },
    },
  },

  ar: {
    nav: { discover:'انضم إلى مباراة', organize:'اعثر على لاعبين', profile:'بطولات', contact:'تواصل', cta:'حمّل مجاناً' },
    store: { comingSoon:'قريباً على iOS' },
    hero: {
      h1:  'انضم إلى<br><em>أحسن تجمع لعشاق الكورة في المغرب</em>',
      sub: 'انضم إلى مباراة قريبة منك أو ابحث عن اللاعبين الذين يحتاجهم فريقك. تعال وحدك أو مع أصدقائك.',
    },
    marquee: ["اعثر على مباراة قريبة منك", "نظّم مباراة في 60 ثانية", "تعال وحدك أو مع أصدقائك", "اعثر على اللاعبين الذين ينقصون فريقك"],
    how: {
      "label": "انضم إلى مباراة",
      "title": "مباراتك القادمة في 3 خطوات",
      "sub": "اعثر على مباراة تناسبك، احجز مكانك والتقِ بباقي اللاعبين على أرض الملعب.",
      "s1badge": "اكتشف",
      "s1t": "اعثر على المباراة المناسبة لك",
      "s1p": "تصفّح المباريات القريبة منك واختر حسب الموعد والمستوى وصيغة اللعب.",
      "s2badge": "انضم",
      "s2t": "احجز مكانك",
      "s2p": "اطّلع على المكان والسعر والأماكن المتاحة، ثم انضم إلى المباراة. يمكنك أيضاً حجز أماكن لأصدقائك.",
      "s3badge": "العب",
      "s3t": "تعرّفوا على اللاعبين في الملعب",
      "s3p": "التقوا بالمشاركين الآخرين واستمتعوا بالمباراة، سواء جئتم بمفردكم أو مع أصدقائكم.",
      "cta": "حان دوركم للعب."
},
    pitchcta: {
      "title": "مباراتكم القادمة تبدأ هنا.",
      "sub": "انضمّوا إلى مباراة أو اعثروا على اللاعبين الذين ينقصونكم. حمّلوا بارتيدو مجاناً."
},
    story: {
      "label": "قصتنا",
      "title": "كرة القدم تجمعنا.",
      "p1": "في المغرب، الرغبة في اللعب موجودة في كل مكان. لكن العثور على مباراة أو جمع عدد كافٍ من اللاعبين ليس سهلاً دائماً.",
      "p2": "وُلد بارتيدو لتسهيل هذه اللقاءات: الانضمام إلى مباراة، والعثور على اللاعبين الناقصين، وقضاء وقت ممتع معاً على أرض الملعب.",
      "mission": "وقت أقل في البحث عن لاعبين. ووقت أكثر للعب معاً."
},
    tourn: {
      "badge": "قريباً",
      "title": "بطولات كرة قدم. وجوائز للفوز بها.",
      "sub": "اجمعوا فريقكم واستعدّوا للتحدي. ستصل بطولات بارتيدو إلى المدن تباعاً، مع الإعلان عن الأماكن والمواعيد والجوائز قبل كل بطولة.",
      "prizeTitle": "نافسوا على الفوز والجوائز",
      "prizeBody": "جوائز تنتظركم، مع الإعلان عن قيمتها الإجمالية لكل بطولة.",
      "cityTitle": "مدينة جديدة، تحدٍّ جديد",
      "cityBody": "لكل بطولة مدينتها المضيفة. تابعوا الإعلانات لمعرفة الوجهات القادمة.",
      "formatTitle": "حماس في الملعب. وتنظيم يدعم المنافسة.",
      "formatBody": "نظام واضح، وجدول مُعلن، وتجربة متصلة ببارتيدو.",
      "league": "ندرس أيضاً إطلاق دوريات لتستمر المنافسة.",
      "follow": "المدن القادمة والجوائز الجديدة: تابعوا الإعلانات."
},
    proof: { p1v:'أكمل مباراتك في دقائق', p1l:'ابحث عن اللاعبين الناقصين فوراً', p2v:'ابحث عن مباريات فوراً', p2l:'حتى لو كنت تلعب بمفردك', p3v:'العب للفوز بجوائز', p3l:'نافس في بطولات عبر المغرب', p4v:'مجاني 100%', p4l:'بدون رسوم أو اشتراكات' },
    cta: {
      "title": "هل ترغبون في اللعب؟<br>ابدؤوا الآن.",
      "sub": "حمّلوا بارتيدو مجاناً. انضمّوا إلى مباراة أو اعثروا على اللاعبين الذين ينقصونكم."
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
    footer: { privacy:'الخصوصية', terms:'الشروط', contact:'تواصل معنا', getapp:'حمّل التطبيق', explore:'اكتشف بارتيدو', delete:'حذف الحساب', tagline:'الكرة كتجمعنا.', copy:'© 2026 Partido، علامة تجارية لـ BBF Ventures. جميع الحقوق محفوظة.' },
    bridge: { text: 'ينقصكم لاعبون؟', sub: 'انشروا مباراتكم واعثروا على اللاعبين الذين ينقصونكم.' },
    tp: {
      heroBadge: 'قادم في 2026',
      heroTitle: 'بطولات كرة<br>القدم<br><em>في أرجاء المغرب</em>',
      heroSub: 'منافسة من مدينة إلى مدينة. جوائز حقيقية. مفتوح لجميع اللاعبين، جميع المستويات، جميع المدن.',
      heroCta1: 'سجّل فريقي',
      heroCta2: 'اعرف أكثر ↓',
      heroScroll: 'انتقل للاستكشاف',
      stat1val: '100 ألف درهم', stat1lbl: 'حجم الجوائز في الموسم',
      stat2val: '+6 مدن', stat2lbl: 'منافسة على المستوى الوطني',
      stat3val: 'جميع المستويات', stat3lbl: 'مفتوح لكل لاعب',
      hlLabel: 'ما الذي يمكن كسبه',
      hlTitle: 'تنافس.<br>انتصر. كرّر.',
      hlSub: 'كل ما يجعل بطولة تستحق اللعب — جوائز، منافسة، ومجتمع يدوم ما بعد الصافرة الأخيرة.',
      c1val: 'حتى <span>100,000 درهم</span>', c1lbl: 'جوائز نقدية',
      c1desc: 'أموال حقيقية. منافسة حقيقية. أفضل الفرق تفوز بجوائز نقدية وميداليات وتقدير ضمن مجتمع بارتيدو.',
      c2val: '<span>من مدينة إلى مدينة</span>', c2lbl: 'جولة وطنية',
      c2desc: 'من الدار البيضاء إلى مراكش، من الرباط إلى طنجة — تنافس في مدينتك ثم سافر للنهائيات الوطنية.',
      c3val: '<span>مفتوح</span> للجميع', c3lbl: 'لجميع اللاعبين',
      c3desc: 'سواء كنت لاعباً محترفاً أو مبتدئاً — التسجيل الفردي والفرق والمجموعات جميعها مرحّب بها.',
      howLabel: 'بسيط من حيث التصميم',
      howTitle: 'سجّل.<br>العب. انتصر.',
      howSub: 'ثلاث خطوات من أول لمسة حتى رفع الكأس.',
      s1badge: 'الخطوة 1 · التسجيل', s1title: 'سجّل فريقك',
      s1desc: 'أنشئ ملف فريقك على بارتيدو. اختر تنسيقك — 5 ضد 5، أو 6 ضد 6، أو 7 ضد 7 — وانضم إلى جولة البطولة القادمة في مدينتك.',
      s2badge: 'الخطوة 2 · اللعب', s2title: 'العب مبارياتك',
      s2desc: 'تواجه مع فرق من مدينتك. الجدول الزمني الكامل مُدار عبر التطبيق. تسلّق الترتيب جولة بعد جولة وتابع كل نتيجة في الوقت الفعلي.',
      s3badge: 'الخطوة 3 · الفوز', s3title: 'اربح مكافآتك',
      s3desc: 'أفضل الفرق تتقدم إلى نهائيات المدن ثم المرحلة الوطنية. فُز بجوائز نقدية وميداليات وشهادات. كل مشارك يُحتفى به.',
      ctaBadge: 'الإطلاق في 2026',
      ctaTitle: 'كن<br>الأول في<br><em>المنافسة</em>',
      ctaSub: 'تنطلق البطولات في أرجاء المغرب عام 2026. جهّز فريقك — التسجيل يبدأ قريباً.',
      ctaBtn1: 'سجّل اهتمامك', ctaBtn2: 'حمّل التطبيق',
    },
    org: {
      "label": "اعثر على لاعبين",
      "title": "اعثروا على اللاعبين الذين ينقصون مباراتكم.",
      "sub": "لديكم مجموعة بالفعل؟ انشروا مباراتكم، حدّدوا الأماكن المتاحة ودعوا لاعبين آخرين ينضمون إليكم.",
      "c1badge": "انشروا",
      "c1t": "انشروا مباراتكم",
      "c1p": "حدّدوا الملعب والموعد والمستوى وعدد الأماكن المتاحة.",
      "c2badge": "اجمعوا",
      "c2t": "اجمعوا اللاعبين",
      "c2p": "ادعوا أصدقاءكم، شاركوا مباراتكم وتابعوا من ينضم إليكم.",
      "c3badge": "العبوا",
      "c3t": "حان وقت المباراة",
      "c3p": "نسّقوا التفاصيل الأخيرة في دردشة المباراة، ثم التقوا بالمشاركين على أرض الملعب."
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
    terms: {
      label: 'قانوني',
      title: 'شروط الاستخدام',
      date: '<strong>آخر تحديث:</strong> 10 أبريل 2026',
      intro: '<p>تحكم شروط الاستخدام هذه وصولك إلى تطبيق Partido للهاتف المحمول والموقع الإلكتروني والخدمات ذات الصلة، التي تشغّلها BBF VENTURES، واستخدامك لها.</p><p>بإنشاء حساب أو الوصول إلى الخدمة أو استخدامها، فإنك توافق على الالتزام بهذه الشروط. يُرجى قراءتها بعناية قبل استخدام Partido.</p>',
      toc: {
        heading: 'المحتويات', toggle: 'المحتويات',
        s1:'١. قبول الشروط', s2:'٢. الأهلية', s3:'٣. حسابات المستخدمين',
        s4:'٤. استخدام الخدمة', s5:'٥. سلوك المستخدم', s6:'٦. محتوى المستخدم',
        s7:'٧. تحديد المسؤولية', s8:'٨. التعويض',
        s9:'٩. التعليق والإنهاء', s10:'١٠. القانون الحاكم',
        s11:'١١. الملكية الفكرية', s12:'١٢. إخلاء مسؤولية الضمانات',
        s13:'١٣. قابلية الفصل', s14:'١٤. الاتفاقية الكاملة', s15:'١٥. التواصل',
      },
      s1: {
        title: '١. قبول الشروط',
        body: '<p>مرحباً بك في Partido.</p><p>تحكم شروط الاستخدام هذه («الشروط») وصولك إلى تطبيق Partido للهاتف المحمول والموقع الإلكتروني والخدمات ذات الصلة (مجتمعةً، «الخدمة»)، التي تشغّلها BBF VENTURES («Partido» أو «نحن» أو «لنا»).</p><p>بإنشاء حساب أو الوصول إلى الخدمة أو استخدامها، فإنك توافق على الالتزام بهذه الشروط. إذا لم توافق على هذه الشروط، فيجب عليك عدم استخدام الخدمة.</p><p>إذا كنت تستخدم الخدمة نيابةً عن منظمة، فأنت تُقرّ بأن لديك صلاحية إلزام تلك المنظمة.</p><p>تؤكد أنك قرأت وفهمت وقبلت هذه الشروط، فضلاً عن <a href="privacy.html">سياسة الخصوصية</a> الخاصة بنا.</p><p>نحتفظ بالحق في تعديل هذه الشروط في أي وقت. عند إجراء ذلك، سنحدّث تاريخ «آخر تحديث». يُعدّ استمرار استخدام الخدمة بعد أي تغييرات قبولاً منك للشروط المحدّثة.</p>',
      },
      s2: {
        title: '٢. الأهلية',
        body: '<p>لاستخدام الخدمة، يجب أن يكون عمرك <strong>13 عاماً على الأقل</strong>.</p><p>إذا كان عمرك بين <strong>13 و18 عاماً</strong>، فأنت تؤكد أنك حصلت على إذن من أحد الوالدين أو الوصيّ القانوني لاستخدام الخدمة، وأنهم اطّلعوا على هذه الشروط وقبلوها نيابةً عنك.</p><p>باستخدام الخدمة، تُقرّ وتضمن ما يلي:</p><ul><li>استيفاؤك لشرط الحدّ الأدنى للسن؛</li><li>دقة جميع المعلومات التي تُقدّمها وصحّتها؛</li><li>امتلاكك الأهليةَ القانونية للالتزام بهذه الشروط.</li></ul><p>أنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك وعن جميع الأنشطة التي تجري تحت حسابك.</p><p>نحتفظ بالحق في تعليق أي حساب أو إنهائه إذا اعتقدنا أن المستخدم لا يستوفي متطلبات الأهلية هذه.</p>',
      },
      s3: {
        title: '٣. حسابات المستخدمين',
        body: '<p>للوصول إلى بعض ميزات الخدمة، يجب عليك إنشاء حساب.</p><p>يمكنك التسجيل باستخدام إحدى الطرق التالية:</p><ul><li>عنوان البريد الإلكتروني وكلمة المرور (مع التحقق عبر كلمة مرور لمرة واحدة OTP)؛</li><li>رقم الهاتف وكلمة المرور (مع التحقق عبر OTP)؛</li><li>مزوّدو المصادقة من جهات خارجية مثل Google وApple وFacebook.</li></ul><p>توافق على تقديم معلومات دقيقة وكاملة ومحدَّثة عند إنشاء حسابك والحفاظ على تحديث هذه المعلومات.</p><p>أنت المسؤول الوحيد عن:</p><ul><li>الحفاظ على سرية بيانات اعتماد حسابك؛</li><li>جميع الأنشطة التي تجري تحت حسابك؛</li><li>ضمان استخدام طرق تسجيل الدخول الخاصة بك بأمان.</li></ul><p>يجب عليك عدم:</p><ul><li>إنشاء حساب باستخدام معلومات مزيّفة؛</li><li>انتحال شخصية شخص آخر؛</li><li>مشاركة حسابك مع الآخرين.</li></ul><p>نحتفظ بالحق في تعليق حسابك أو إنهائه إذا اشتبهنا في أي استخدام غير مصرّح به أو نشاط احتيالي أو انتهاك لهذه الشروط.</p><p>أنت مسؤول عن أي نشاط يُجرى من خلال حسابك، سواء أذنت بهذا النشاط أم لا.</p>',
      },
      s4: {
        title: '٤. استخدام الخدمة',
        body: '<p>Partido هي منصة رقمية تُتيح للمستخدمين التواصل مع لاعبين آخرين وإنشاء الأنشطة الرياضية والانضمام إليها والتواصل فيما بينهم.</p><p>لا تُنظّم Partido أي مباريات أو أحداث أو أنشطة <strong>ولا تُدير أو تُشرف عليها أو تتحكم فيها</strong>. يتحمل المستخدمون المسؤولية الكاملة عن تنظيم أنشطتهم الخاصة والمشاركة فيها وإدارتها.</p><p>باستخدام الخدمة، تُقرّ وتوافق على ما يلي:</p><ul><li>تعمل Partido فقط بوصفها منصة وسيطة تُيسّر الروابط بين المستخدمين؛</li><li>أي مباراة أو حدث أو نشاط يُنظَّم بصورة مستقلة من قِبَل المستخدمين؛</li><li>تشارك في الأنشطة على مسؤوليتك الخاصة.</li></ul><p>لا تتحقق Partido من هوية المستخدمين أو مستوى مهاراتهم أو سلوكهم أو موثوقيتهم، ولا تضمن جودة أي نشاط مُنظَّم عبر الخدمة أو سلامته أو مشروعيته.</p><p>أنت المسؤول الوحيد عن:</p><ul><li>تفاعلاتك مع المستخدمين الآخرين؛</li><li>حالتك البدنية وقدرتك على المشاركة في الأنشطة الرياضية؛</li><li>الامتثال للقوانين واللوائح المعمول بها.</li></ul><p>لا تتحمل Partido المسؤولية عن:</p><ul><li>أي إصابة أو ضرر أو خسارة تحدث أثناء المشاركة في أي نشاط أو نتيجة لها؛</li><li>أي نزاعات بين المستخدمين؛</li><li>أي إلغاء أو غياب أو سوء سلوك من قِبَل المستخدمين.</li></ul><p>لا تُوفّر Partido مرافق رياضية أو معدات أو حكاماً أو تأميناً.</p><h3>استثناء — فعاليات Partido الرسمية</h3><p>قد تُنظّم Partido من حين لآخر بطولات أو فعاليات رسمية («الفعاليات الرسمية»).</p><p>ستُحدَّد هذه الفعاليات الرسمية بوضوح داخل الخدمة وقد تخضع لـ:</p><ul><li>قواعد محددة؛</li><li>رسوم تسجيل؛</li><li>شروط الجوائز؛</li><li>تدابير سلامة إضافية، بما في ذلك التغطية التأمينية عند الاقتضاء.</li></ul><p>قد تخضع المشاركة في الفعاليات الرسمية لقواعد وشروط إضافية تُبلَّغ بها داخل الخدمة.</p><p>بالتسجيل في فعالية رسمية أو المشاركة فيها، توافق على ما يلي:</p><h3>التسجيل في الفعاليات والمشاركة فيها</h3><ul><li>أنت مسؤول عن التأكد من استيفائك جميع متطلبات الأهلية للفعالية؛</li><li>لا يتأكد تسجيلك إلا بعد التسجيل الناجح وعند الاقتضاء دفع رسوم الاشتراك المطلوبة؛</li><li>توافق على حضور الفعالية وفق الجدول الزمني المحدد وعلى احترام المشاركين الآخرين والمنظمين.</li></ul><h3>الرسوم والمدفوعات والمبالغ المستردة</h3><ul><li>قد تستلزم بعض الفعاليات الرسمية دفع رسوم تسجيل؛</li><li>ستُبلَّغ بوضوح بجميع الرسوم السارية وشروط الدفع وسياسات الاسترداد قبل التسجيل؛</li><li>ما لم يُنصّ على خلاف ذلك، قد تكون رسوم التسجيل غير قابلة للاسترداد في حالة الغياب (عدم الحضور)؛</li><li>تحتفظ Partido بالحق في إلغاء الفعاليات أو تعديلها، وفي هذه الحالة ستُبلَّغ بشروط الاسترداد وفقاً لذلك.</li></ul><h3>الجوائز والمكافآت</h3><ul><li>قد تشمل بعض الفعاليات الرسمية جوائز أو مكافآت أو حوافز؛</li><li>ستُحدَّد شروط الجوائز والأهلية والتوزيع لكل فعالية؛</li><li>تحتفظ Partido بالحق في تعديل الجوائز أو إلغائها في حالة الاحتيال أو سوء السلوك أو انتهاك هذه الشروط.</li></ul><h3>الصحة والسلامة وتحمّل المخاطر</h3><ul><li>تُقرّ بأن المشاركة في الأنشطة الرياضية تنطوي على مخاطر متأصّلة، بما في ذلك خطر الإصابة؛</li><li>تؤكد أنك قادر جسدياً على المشاركة وتتحمل المسؤولية الكاملة عن صحتك وسلامتك؛</li><li>عند الاقتضاء، قد تُوفّر Partido تدابير سلامة إضافية بما في ذلك التغطية التأمينية، والتي ستُبلَّغ بها للفعالية ذات الصلة؛</li><li>تظل مسؤولاً عن الامتثال لجميع القواعد والتعليمات وإرشادات السلامة المعمول بها.</li></ul><h3>سلوك المستخدم خلال الفعاليات</h3><ul><li>توافق على التصرف بطريقة محترمة وروح رياضية؛</li><li>قد يؤدي أي سوء سلوك، بما في ذلك العنف أو التحرش أو الغش، إلى الاستبعاد الفوري من الفعالية دون استرداد الرسوم؛</li><li>تحتفظ Partido بالحق في اتخاذ الإجراءات المناسبة، بما في ذلك حظر المستخدمين من الفعاليات المستقبلية.</li></ul>',
      },
      s5: {
        title: '٥. سلوك المستخدم والسلوكيات المحظورة',
        body: '<p>عند استخدام الخدمة، توافق على التصرف باحترام ومسؤولية تجاه المستخدمين الآخرين.</p><p>توافق على <strong>عدم الانخراط في أي من الأنشطة المحظورة التالية</strong>:</p><ul><li>التغيب عن مباراة أو نشاط دون عذر مشروع («الغياب»)، خاصةً بعد تأكيد المشاركة؛</li><li>الانخراط في سلوك مسيء أو غير لائق، بما في ذلك الإهانات والتحرش والتهديدات؛</li><li>المشاركة في أعمال العنف أو التحريض عليها، سواء كانت جسدية أو لفظية، أثناء أي نشاط أو في ارتباط به؛</li><li>إنشاء حسابات مزيّفة أو انتحال شخصية شخص آخر أو تقديم معلومات مضلِّلة؛</li><li>تحريف مستوى مهارتك أو غيره من المعلومات ذات الصلة بطريقة تؤثر سلباً على المستخدمين الآخرين؛</li><li>إرسال البريد العشوائي أو الإعلانات غير المصرّح بها أو استخدام الخدمة لأغراض غير ذات صلة بالأنشطة الرياضية؛</li><li>محاولة الغش أو التلاعب بالنتائج أو الإخلال باللعب النظيف؛</li><li>استخدام الخدمة بأي طريقة غير مشروعة أو بما يخالف القوانين واللوائح المعمول بها.</li></ul><p>توافق أيضاً على التفاعل مع المستخدمين الآخرين بحسن نية والمساهمة في مجتمع إيجابي ومحترم.</p><p>تحتفظ Partido بالحق، وفق تقديرها المطلق، في:</p><ul><li>إصدار تحذيرات؛</li><li>تعليق الوصول إلى الخدمة أو تقييده؛</li><li>إنهاء الحسابات نهائياً.</li></ul><p>يجوز لـ Partido اتخاذ إجراءات دون إشعار مسبق عند الضرورة لحماية نزاهة الخدمة أو سلامة مستخدميها.</p>',
      },
      s6: {
        title: '٦. محتوى المستخدم',
        body: '<p>تحتفظ بملكية محتوى المستخدم الخاص بك. بتقديم محتوى المستخدم عبر الخدمة، لا تنقل الملكية إلى Partido.</p><p>قد تُتيح الخدمة للمستخدمين إنشاء المحتوى وتحميله ومشاركته والتواصل بشأنه، بما في ذلك على سبيل المثال لا الحصر الرسائل والصور ومقاطع الفيديو والتسجيلات الصوتية وبيانات الموقع ومعلومات الملف الشخصي وغيرها («محتوى المستخدم»).</p><p>أنت المسؤول الوحيد عن أي محتوى مستخدم تنشئه أو تحمّله أو تشاركه عبر الخدمة.</p><p>باستخدام الخدمة، توافق على ما يلي:</p><ul><li>لا ينتهك محتوى المستخدم الخاص بك أي قوانين أو لوائح معمول بها؛</li><li>لا ينتهك محتوى المستخدم الخاص بك حقوق أي طرف ثالث، بما في ذلك حقوق الخصوصية أو الملكية الفكرية أو الحقوق الشخصية؛</li><li>محتوى المستخدم الخاص بك ليس مسيئاً أو ضاراً أو غير لائق.</li></ul><p>لا تراقب Partido محتوى المستخدم بنشاط أو تتحكم فيه ولا تضمن دقة أي محتوى يشاركه المستخدمون أو نزاهته أو جودته.</p><p>لا تتحمل Partido المسؤولية عن أي محتوى مستخدم أو عن أي عواقب تنشأ عن استخدام هذا المحتوى أو مشاركته أو الاعتماد عليه.</p><p>غير أن Partido تحتفظ بالحق، وفق تقديرها المطلق، في:</p><ul><li>مراجعة أي محتوى مستخدم أو إزالته أو تقييد الوصول إليه؛</li><li>تعليق الحسابات المرتبطة بمحتوى غير لائق أو غير مشروع أو إنهائها في أي وقت ودون إشعار مسبق.</li></ul><p>بتقديم محتوى المستخدم، تمنح Partido <strong>ترخيصاً غير حصري وخالياً من حقوق الملكية</strong> لاستخدام هذا المحتوى وعرضه وتوزيعه فقط بالقدر اللازم لتشغيل الخدمة وتقديمها. ينتهي هذا الترخيص عند حذف محتواك أو حسابك، إلا إذا شارك مستخدمون آخرون هذا المحتوى ولم يحذفوه.</p><p>يجب أن تمتلك جميع الحقوق والأذونات اللازمة لمشاركة أي محتوى مستخدم، بما في ذلك موافقة الأفراد الظاهرين في هذا المحتوى.</p>',
      },
      s7: {
        title: '٧. تحديد المسؤولية',
        body: '<p>بالقدر الأقصى الذي يسمح به القانون المعمول به، لا تتحمل Partido المسؤولية عن أي أضرار غير مباشرة أو عَرَضية أو خاصة أو تبعية تنشأ عن أو في ارتباط باستخدامك للخدمة.</p><p>لا تتحمل Partido على وجه الخصوص المسؤولية عن:</p><ul><li>أي إصابة أو حادث أو ضرر جسدي يحدث أثناء المشاركة في أي مباراة أو نشاط مُرتَّب عبر الخدمة أو نتيجة لها؛</li><li>أي نزاعات أو خلافات أو تفاعلات بين المستخدمين؛</li><li>أي فقدان للبيانات أو وصول غير مصرّح به إلى الحسابات أو خروقات أمنية خارج نطاق سيطرتنا المعقولة؛</li><li>أي انقطاع أو عدم توافر أو خلل في الخدمة؛</li><li>أي خسارة مالية أو فرصة ضائعة أو خسارة في الأرباح تنجم عن استخدام الخدمة.</li></ul><p>تُقرّ بأن استخدامك للخدمة ومشاركتك في أي أنشطة يكون بالكامل على مسؤوليتك الخاصة.</p><p>لا يستثني أي نص في هذه الشروط المسؤولية أو يحدّها في الحالات التي لا يُجيز فيها القانون المعمول به ذلك.</p><p>لا تتجاوز المسؤولية الإجمالية لـ Partido عن أي مطالبة تنشأ عن الخدمة أو تتعلق بها إجمالي المبلغ الذي دفعه المستخدم لـ Partido خلال الاثني عشر (12) شهراً السابقة للمطالبة، إن وُجد.</p>',
      },
      s8: {
        title: '٨. التعويض',
        body: '<p>توافق على الدفاع عن Partido وشركاتها التابعة ومسؤوليها ومدرائها وموظفيها وشركائها المعنيين وتعويضهم وإبراء ذمتهم من أي مطالبات أو التزامات أو أضرار أو خسائر أو مصاريف (بما في ذلك أتعاب محاماة معقولة) تنشأ عن أو في ارتباط بـ:</p><ul><li>استخدامك للخدمة؛</li><li>مشاركتك في أي مباراة أو نشاط أو فعالية رسمية؛</li><li>انتهاكك لهذه الشروط؛</li><li>محتوى المستخدم الخاص بك؛</li><li>تفاعلاتك أو نزاعاتك مع مستخدمين آخرين.</li></ul><p>تحتفظ Partido بالحق في تولّي الدفاع والسيطرة الحصريَّين على أي مسألة تخضع للتعويض، وفي هذه الحالة توافق على التعاون الكامل في هذا الدفاع.</p>',
      },
      s9: {
        title: '٩. التعليق والإنهاء',
        body: '<p>يمكنك حذف حسابك في أي وقت مباشرةً عبر الخدمة، حيثما توفرت هذه الإمكانية.</p><p>عند حذف حسابك، سيُنهى وصولك إلى الخدمة وستُعالَج بياناتك وفقاً لـ <a href="privacy.html">سياسة الخصوصية</a> الخاصة بنا.</p><p>تحتفظ Partido بالحق، وفق تقديرها المطلق، في تعليق حسابك أو تقييده أو إنهائه مع إشعار مسبق أو دونه، إذا:</p><ul><li>انتهكت هذه الشروط؛</li><li>انخرطت في سلوك محظور؛</li><li>كانت أفعالك قد تضر بمستخدمين آخرين أو بنزاهة الخدمة أو بـ Partido.</li></ul><p>قد تُعلّق Partido الحسابات أيضاً أو تُنهيها لأسباب تشغيلية أو أمنية أو قانونية.</p><p>في حالة الإنهاء، قد تفقد الوصول إلى حسابك ورسائلك وأي بيانات مرتبطة.</p><p>لا يُقيّد إنهاء الحساب أي حقوق أو سبل انتصاف متاحة لـ Partido.</p>',
      },
      s10: {
        title: '١٠. القانون الحاكم وتسوية النزاعات',
        body: '<p>تُحكَم هذه الشروط واستخدامك للخدمة وتُفسَّر وفقاً لقوانين المملكة المغربية.</p><p>يخضع أي نزاع أو مطالبة أو خلاف ينشأ عن هذه الشروط أو استخدام الخدمة أو يتعلق بهما للاختصاص القضائي الحصري للمحاكم المختصة في المغرب.</p><p>مع ذلك، تحتفظ Partido بالحق في السعي للحصول على أوامر زجرية أو انتصاف منصفي في أي ولاية قضائية عند الضرورة لحماية حقوقها أو مصالحها.</p><p>إذا وصلت إلى الخدمة أو استخدمتها من خارج المغرب، فإنك تفعل ذلك بمبادرتك الخاصة وتتحمل مسؤولية الامتثال لأي قوانين محلية معمول بها.</p>',
      },
      s11: {
        title: '١١. الملكية الفكرية',
        body: '<p>الخدمة، بما في ذلك تصميمها وميزاتها ومحتواها وعلاماتها التجارية وتقنيتها، مملوكة لـ Partido أو لمانحي ترخيصها ومحمية بموجب قوانين الملكية الفكرية المعمول بها.</p><p>لا يجوز لك نسخ أي جزء من الخدمة أو تعديله أو توزيعه أو بيعه أو استغلاله دون الحصول على موافقة خطية مسبقة من Partido.</p>',
      },
      s12: {
        title: '١٢. إخلاء مسؤولية الضمانات',
        body: '<p>تُقدَّم الخدمة «كما هي» و«حسب الإتاحة»، دون أي ضمانات من أي نوع، صريحة كانت أم ضمنية.</p><p>لا تضمن Partido أن الخدمة ستكون متواصلة أو آمنة أو خالية من الأخطاء.</p>',
      },
      s13: {
        title: '١٣. قابلية الفصل',
        body: '<p>إذا وُجد أن أي حكم من هذه الشروط غير صحيح أو غير قابل للتنفيذ من قِبَل محكمة مختصة، تظل الأحكام المتبقية سارية المفعول بالكامل.</p>',
      },
      s14: {
        title: '١٤. الاتفاقية الكاملة',
        body: '<p>تُشكّل هذه الشروط الاتفاقية الكاملة بينك وبين Partido فيما يتعلق بالخدمة وتحلّ محل أي اتفاقيات أو تفاهمات سابقة تتعلق بالموضوع الوارد فيها.</p>',
      },
      s15: {
        title: '١٥. التواصل',
        body: '<p>لأي استفسارات بشأن هذه الشروط:</p><div class="pp-contact-block"><strong>BBF VENTURES</strong><p><strong>البريد الإلكتروني:</strong> <a href="mailto:admin@partido.ma">admin@partido.ma</a></p><p class="pp-thanks">سنبذل جهوداً معقولة للرد على الاستفسارات في الوقت المناسب.</p></div>',
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

// Official App Store destination shared by all localized badges.
const APP_STORE_URL = 'https://apps.apple.com/app/id6751658726';

function activateAppStoreBadges() {
  if (!APP_STORE_URL) return;
  document.querySelectorAll('[data-app-store]').forEach(placeholder => {
    const a = document.createElement('a');
    a.href = APP_STORE_URL;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'store-badge';
    a.setAttribute('aria-label', 'Download on the App Store');
    placeholder.replaceWith(a);
  });
}

function updateStoreBadges(lang) {
  activateAppStoreBadges();
  const key = STORE_SVGS.apple[lang] ? lang : 'en';
  document.querySelectorAll('.store-badge').forEach(badge => {
    const label = (badge.getAttribute('aria-label') || '').toLowerCase();
    if (label.includes('app store'))        badge.innerHTML = STORE_SVGS.apple[key];
    else if (label.includes('google play')) badge.innerHTML = STORE_SVGS.google[key];
  });
}

// Phone mockups: one image per language and per slot (fallback: fr).
// `stepList` is the hero's match-list screen, perspective-corrected to stand
// upright; `stepDetail` is the match sheet — steps 01 and 02 of "Join a match".
// `orgSetup` / `orgManage` are cards 01 and 02 of "Find players";
// `tournaments` is the single phone of the "Tournaments" section.
const PHONE_MOCKUPS = {
  fr: {
    heroHome:   ['assets/app-mockups/hero-home-fr.webp',        'Écran d\'accueil Partido'],
    heroList:   ['assets/app-mockups/hero-matchlist-fr.webp',   'Écran liste des matchs Partido'],
    stepList:   ['assets/app-mockups/step-matchlist-fr.webp',   'Écran liste des matchs Partido'],
    stepDetail: ['assets/app-mockups/step-matchdetail-fr.webp', 'Fiche d\'un match Partido'],
    orgSetup:   ['assets/app-mockups/org-setup-fr.webp',        'Récapitulatif d\'un match avant publication'],
    orgManage:  ['assets/app-mockups/org-manage-fr.webp',       'Fiche d\'un match vue par l\'organisateur'],
    tournaments: ['assets/app-mockups/tourn-fr.webp',           'Écran Tournois de Partido'],
  },
  en: {
    heroHome:   ['assets/app-mockups/hero-home-en.webp',        'Partido home screen'],
    heroList:   ['assets/app-mockups/hero-matchlist-en.webp',   'Partido match list screen'],
    stepList:   ['assets/app-mockups/step-matchlist-en.webp',   'Partido match list screen'],
    stepDetail: ['assets/app-mockups/step-matchdetail-en.webp', 'Partido match details screen'],
    orgSetup:   ['assets/app-mockups/org-setup-en.webp',        'Match summary before publishing'],
    orgManage:  ['assets/app-mockups/org-manage-en.webp',       'Match details as seen by the organizer'],
    tournaments: ['assets/app-mockups/tourn-en.webp',           'Partido tournaments screen'],
  },
  ar: {
    heroHome:   ['assets/app-mockups/hero-home-ar.webp',        'شاشة بارتيدو الرئيسية'],
    heroList:   ['assets/app-mockups/hero-matchlist-ar.webp',   'شاشة قائمة المباريات في بارتيدو'],
    stepList:   ['assets/app-mockups/step-matchlist-ar.webp',   'شاشة قائمة المباريات في بارتيدو'],
    stepDetail: ['assets/app-mockups/step-matchdetail-ar.webp', 'شاشة تفاصيل المباراة في بارتيدو'],
    orgSetup:   ['assets/app-mockups/org-setup-ar.webp',        'ملخص المباراة قبل النشر'],
    orgManage:  ['assets/app-mockups/org-manage-ar.webp',       'تفاصيل المباراة كما يراها المنظّم'],
    tournaments: ['assets/app-mockups/tourn-ar.webp',           'شاشة البطولات في بارتيدو'],
  },
};

// Where each mockup slot is rendered.
const PHONE_SLOTS = {
  heroHome:   '.hero-phones .hp-back img, .hero-phones-mobile .hp-back img',
  heroList:   '.hero-phones .hp-main img, .hero-phones-mobile .hp-main img',
  stepList:   '.how-step--discover .how-step__mockup img',
  stepDetail: '.how-step--join .how-step__mockup img',
  orgSetup:   '.org-card--setup .org-card__visual .phone img',
  orgManage:  '.org-card--manage .org-card__visual .phone img',
  tournaments: '.tourn-mockup img',
};

function updateHeroPhones(lang) {
  const set = PHONE_MOCKUPS[lang] || PHONE_MOCKUPS.fr;
  Object.keys(PHONE_SLOTS).forEach(slot => {
    const [src, alt] = set[slot];
    document.querySelectorAll(PHONE_SLOTS[slot]).forEach(img => {
      img.src = src; img.alt = alt;
    });
  });
}


// Practical guides: shared landing copy.
T.fr.editorial = {"title": "Bien préparer votre prochain match", "sub": "Des conseils concrets pour rejoindre un match, réunir des joueurs et organiser votre prochaine partie.", "cta": "Lire le guide", "c1t": "Comment trouver un match de football près de chez vous ?", "c1p": "Choisissez un match adapté à votre niveau et préparez votre première rencontre.", "c2t": "Comment trouver les joueurs qui manquent à votre match ?", "c2p": "Annoncez les places disponibles et donnez aux joueurs les informations pour vous rejoindre.", "c3t": "Comment organiser un match de foot entre amis ?", "c3p": "Du terrain au rendez-vous, les points à régler pour profiter du match ensemble."};
T.en.editorial = {"title": "Get ready for your next match", "sub": "Practical advice for joining a match, finding players and organising your next game.", "cta": "Read the guide", "c1t": "How to find a football match near you", "c1p": "Choose a match that suits your level and get ready to meet the other players.", "c2t": "How to find the players missing from your match", "c2p": "Publish the available spots and give players the details they need to join.", "c3t": "How to organise a football match with friends", "c3p": "From booking the pitch to meeting up, get the essentials in place before you play."};
T.ar.editorial = {"title": "استعدّوا لمباراتكم القادمة", "sub": "نصائح عملية للانضمام إلى مباراة، والعثور على لاعبين، وتنظيم مباراة مع الأصدقاء.", "cta": "اقرؤوا الدليل", "c1t": "كيف تجدون مباراة كرة قدم بالقرب منكم؟", "c1p": "اختاروا مباراة تناسب مستواكم واستعدّوا للقاء اللاعبين الآخرين.", "c2t": "كيف تجدون اللاعبين الذين ينقصون مباراتكم؟", "c2p": "أعلنوا عن الأماكن المتاحة ووضّحوا المعلومات التي يحتاجها اللاعبون للانضمام.", "c3t": "كيف تنظّمون مباراة كرة قدم بين الأصدقاء؟", "c3p": "من حجز الملعب إلى اللقاء، رتّبوا الأساسيات لتستمتعوا بالمباراة معاً."};

T.fr.event = {"badge": "Bientôt sur le terrain", "title": "Des tournois de foot. Des prix à gagner.", "intro": "Réunissez votre équipe et venez relever le défi. Les tournois Partido arriveront ville par ville, avec les lieux, les dates et les récompenses annoncés avant chaque événement.", "follow": "Suivre les annonces", "questions": "Vos questions", "spirit": "La victoire se joue ensemble.", "spiritBody": "Des adversaires à affronter, un collectif à faire grandir et des récompenses à aller chercher. Notre ambition : vous faire vivre une compétition préparée avec le soin d’un tournoi pro.", "prize": "Des récompenses à la hauteur du défi", "prizeBody": "Chaque tournoi aura sa propre dotation. Le montant total, la nature des prix et leurs conditions d’attribution seront annoncés avant les inscriptions. Les récompenses varieront selon l’envergure de l’événement.", "city": "Une ville, un nouveau terrain de jeu", "cityBody": "Les tournois se développeront ville par ville, au rythme de la communauté Partido. Aucune destination n’est annoncée pour le moment : chaque événement dévoilera sa ville et son lieu.", "format": "L’intensité du foot. Le soin de l’organisation.", "formatBody": "Un format expliqué, un programme annoncé et des règles claires : nous préparons une expérience compétitive et connectée à Partido. Les modalités de suivi digital seront précisées pour chaque tournoi.", "app": "L’expérience tournoi, dans l’univers Partido", "appBody": "Retrouvez l’esprit des tournois dans l’application et suivez nos réseaux pour les prochaines annonces.", "caption": "Aperçu illustratif de l’application. Les montants et mentions visibles ne constituent pas l’offre d’un tournoi ; seule son annonce précisera les récompenses et les conditions.", "league": "Et demain, des ligues ?", "leagueBody": "Des ligues sont aussi à l’étude pour prolonger la compétition dans le temps. Aucun calendrier n’est annoncé à ce stade.", "faq": "Avant d’entrer sur le terrain", "faqIntro": "Les informations à connaître dès maintenant. Les modalités propres à chaque tournoi seront publiées avec son annonce.", "social": "Ne manquez pas le prochain défi.", "socialBody": "Villes, dates, ouverture des inscriptions et récompenses : retrouvez les annonces sur nos réseaux.", "discover": "Découvrir les tournois Partido", "q0": "Quand et où auront lieu les premiers tournois ?", "a0": "Les dates, les villes et les lieux seront annoncés avant chaque tournoi. Aucune ville ni date n’est confirmée publiquement pour le moment.", "q1": "Comment s’inscrire ?", "a1": "Les modalités et l’ouverture des inscriptions seront annoncées pour chaque événement. Suivez nos réseaux pour savoir quand et comment participer.", "q2": "Peut-on s’inscrire seul ou faut-il une équipe ?", "a2": "Ce point sera précisé dans les conditions de participation de chaque tournoi. Ne considérez pas encore l’inscription individuelle comme disponible.", "q3": "Quels seront les formats et les niveaux ?", "a3": "Le format de jeu, les catégories, les critères de participation et le règlement seront précisés avant les inscriptions.", "q4": "Quels prix pourra-t-on gagner ?", "a4": "La dotation dépendra du tournoi. Sa valeur, la nature des récompenses et leur répartition seront détaillées dans l’annonce de l’événement. Aucun montant unique ne s’applique à tous les tournois.", "q5": "La participation sera-t-elle payante ?", "a5": "Les éventuels frais et les conditions de paiement ou d’annulation seront communiqués avant les inscriptions. La gratuité de l’application ne signifie pas que tous les tournois seront gratuits."};
T.en.event = {"badge": "Coming to the pitch soon", "title": "Football tournaments. Prizes to win.", "intro": "Bring your team and take on the challenge. Partido tournaments will arrive city by city, with venues, dates and rewards announced before each event.", "follow": "Follow the announcements", "questions": "Your questions", "spirit": "Victory is a team effort.", "spiritBody": "Opponents to face, a team to grow and rewards to compete for. Our ambition is to deliver a competition prepared with the care of a professional tournament.", "prize": "Rewards worth competing for", "prizeBody": "Each tournament will have its own prize pool. The total value, types of prizes and award conditions will be announced before registration. Rewards will vary with the scale of the event.", "city": "A new city, a new playing field", "cityBody": "Tournaments will grow city by city alongside the Partido community. No destination is announced yet: each event will reveal its host city and venue.", "format": "The intensity of football. The care of organisation.", "formatBody": "A clear format, an announced programme and clear rules: we are preparing a competitive experience connected to Partido. Digital follow-up arrangements will be explained for each tournament.", "app": "Tournaments in the Partido experience", "appBody": "Discover the spirit of the tournaments in the app and follow our social channels for upcoming announcements.", "caption": "Illustrative app preview. Visible amounts and statements are not a tournament offer; its announcement will specify the rewards and conditions.", "league": "Could leagues come next?", "leagueBody": "Leagues are also being explored to keep the competition going over time. No schedule has been announced yet.", "faq": "Before you step onto the pitch", "faqIntro": "What you can know today. Details specific to each tournament will be published with its announcement.", "social": "Don’t miss the next challenge.", "socialBody": "Cities, dates, registration opening and rewards: follow the announcements on our social channels.", "discover": "Discover Partido tournaments", "q0": "When and where will the first tournaments take place?", "a0": "Dates, cities and venues will be announced before each tournament. No city or date has been publicly confirmed yet.", "q1": "How can I register?", "a1": "Registration arrangements and opening dates will be announced for each event. Follow our social channels to find out when and how to take part.", "q2": "Can I enter alone or do I need a team?", "a2": "Each tournament’s participation terms will explain this. Individual registration should not yet be considered available.", "q3": "What formats and levels will be offered?", "a3": "The playing format, categories, eligibility criteria and rules will be explained before registration.", "q4": "What prizes can players win?", "a4": "The prize pool will depend on the tournament. Its value, types of rewards and allocation will be detailed in the event announcement. No single amount applies to every tournament.", "q5": "Will participation cost anything?", "a5": "Any fees and payment or cancellation terms will be communicated before registration. A free app does not mean that every tournament will be free."};
T.ar.event = {"badge": "قريباً على أرض الملعب", "title": "بطولات كرة قدم. وجوائز للفوز بها.", "intro": "اجمعوا فريقكم واستعدّوا للتحدي. ستصل بطولات بارتيدو إلى المدن تباعاً، مع الإعلان عن الأماكن والمواعيد والجوائز قبل كل بطولة.", "follow": "تابعوا الإعلانات", "questions": "أسئلتكم", "spirit": "الفوز يبدأ بروح الفريق.", "spiritBody": "منافسون تواجهونهم، وفريق تبنونه، وجوائز تتنافسون عليها. طموحنا أن نقدّم لكم منافسة تُحضّر بعناية تضاهي تنظيم بطولة احترافية.", "prize": "جوائز تستحق المنافسة", "prizeBody": "لكل بطولة جوائزها الخاصة. سنعلن عن قيمتها الإجمالية وطبيعتها وشروط توزيعها قبل فتح التسجيل. وستختلف الجوائز بحسب حجم الحدث.", "city": "مدينة جديدة وتحدٍّ جديد", "cityBody": "ستتوسّع البطولات مدينةً بعد مدينة مع نمو مجتمع بارتيدو. لم نعلن عن أي وجهة بعد؛ سيكشف كل حدث عن مدينته وملعبه.", "format": "حماس كرة القدم. وعناية بالتنظيم.", "formatBody": "صيغة واضحة، وبرنامج معلن، وقواعد مفهومة: نُحضّر تجربة تنافسية مرتبطة ببارتيدو. وسنوضّح تفاصيل المتابعة الرقمية الخاصة بكل بطولة.", "app": "تجربة البطولات في عالم بارتيدو", "appBody": "اكتشفوا أجواء البطولات في التطبيق وتابعوا حساباتنا لمعرفة الإعلانات القادمة.", "caption": "معاينة توضيحية للتطبيق. المبالغ والعبارات الظاهرة ليست عرضاً لبطولة؛ إعلان كل بطولة هو الذي سيحدّد الجوائز والشروط.", "league": "وماذا عن الدوريات؟", "leagueBody": "ندرس أيضاً إطلاق دوريات لاستمرار المنافسة على المدى الطويل. لم نعلن عن جدول زمني بعد.", "faq": "قبل دخول الملعب", "faqIntro": "ما يمكنكم معرفته الآن. سننشر تفاصيل كل بطولة مع إعلانها.", "social": "لا تفوّتوا التحدّي القادم.", "socialBody": "المدن والمواعيد وفتح التسجيل والجوائز: تابعوا الإعلانات على حساباتنا.", "discover": "اكتشفوا بطولات بارتيدو", "q0": "متى وأين ستقام البطولات الأولى؟", "a0": "سنعلن عن التواريخ والمدن والملاعب قبل كل بطولة. لم نؤكّد علناً أي مدينة أو موعد حتى الآن.", "q1": "كيف يمكن التسجيل؟", "a1": "سنعلن عن طريقة التسجيل وموعد فتحه لكل حدث. تابعوا حساباتنا لمعرفة متى وكيف يمكن المشاركة.", "q2": "هل يمكن التسجيل بشكل فردي أم يجب تكوين فريق؟", "a2": "ستوضّح شروط المشاركة الخاصة بكل بطولة هذه النقطة. لا تعتبروا التسجيل الفردي متاحاً حالياً.", "q3": "ما صيغ اللعب والمستويات المتاحة؟", "a3": "سنوضّح صيغة اللعب والفئات وشروط الأهلية والقواعد قبل فتح التسجيل.", "q4": "ما الجوائز التي يمكن الفوز بها؟", "a4": "تختلف الجوائز حسب البطولة. سيحدّد إعلان الحدث قيمتها وطبيعتها وطريقة توزيعها. لا يوجد مبلغ واحد ينطبق على جميع البطولات.", "q5": "هل ستكون المشاركة مدفوعة؟", "a5": "سنعلن عن أي رسوم وشروط الدفع أو الإلغاء قبل فتح التسجيل. مجانية التطبيق لا تعني أن جميع البطولات ستكون مجانية."};


Object.assign(T.fr.contact, {"heading": "Parlons foot. Parlons Partido.", "intro": "Une question sur l’application, un tournoi ou une idée de partenariat ? Écrivez-nous.", "formtitle": "Envoyez-nous un message", "formsub": "Nous vous répondrons à l’adresse e-mail indiquée. Tous les champs sont obligatoires.", "name": "Votre nom", "email": "Adresse e-mail", "topic": "Sujet", "message": "Votre message", "t1": "Aide avec l’application", "t2": "Suggestion", "t3": "Partenariat", "t4": "Tournois", "t5": "Autre", "topicph": "Choisissez un sujet", "faq": "Une question sur les tournois ? Consultez la FAQ.", "direct": "Vous préférez nous écrire directement ?", "btn": "Envoyer le message", "messageph": "Expliquez-nous votre demande…", "emailph": "vous@exemple.com", "nameError": "Indiquez votre nom.", "emailError": "Saisissez une adresse e-mail valide.", "topicError": "Choisissez le sujet de votre demande.", "messageError": "Écrivez votre message.", "sending": "Envoi en cours…", "success": "Votre message a bien été envoyé. Nous vous répondrons par e-mail.", "error": "L’envoi n’a pas pu être confirmé. Votre message est conservé ci-dessus. Réessayez ou écrivez à admin@partido.ma.", "invalid": "Vérifiez les champs indiqués avant d’envoyer."});
Object.assign(T.en.contact, {"heading": "Let’s talk football. Let’s talk Partido.", "intro": "A question about the app, a tournament or a partnership idea? Write to us.", "formtitle": "Send us a message", "formsub": "We’ll reply to the email address you provide. All fields are required.", "name": "Your name", "email": "Email address", "topic": "Subject", "message": "Your message", "t1": "App support", "t2": "Suggestion", "t3": "Partnership", "t4": "Tournaments", "t5": "Other", "topicph": "Choose a subject", "faq": "A tournament question? Read the FAQ.", "direct": "Prefer to email us directly?", "btn": "Send message", "messageph": "Tell us how we can help…", "emailph": "you@example.com", "nameError": "Please enter your name.", "emailError": "Enter a valid email address.", "topicError": "Choose a subject for your enquiry.", "messageError": "Please write your message.", "sending": "Sending…", "success": "Your message has been sent. We’ll reply by email.", "error": "We could not confirm delivery. Your message is saved above. Try again or email admin@partido.ma.", "invalid": "Check the highlighted fields before sending."});
Object.assign(T.ar.contact, {"heading": "لنتحدّث عن كرة القدم وبارتيدو.", "intro": "هل لديكم سؤال عن التطبيق أو بطولة، أو فكرة شراكة؟ راسلونا.", "formtitle": "أرسلوا لنا رسالة", "formsub": "سنردّ على عنوان البريد الإلكتروني الذي تقدّمونه. جميع الحقول مطلوبة.", "name": "الاسم", "email": "البريد الإلكتروني", "topic": "الموضوع", "message": "رسالتكم", "t1": "المساعدة في التطبيق", "t2": "اقتراح", "t3": "شراكة", "t4": "البطولات", "t5": "موضوع آخر", "topicph": "اختاروا موضوعاً", "faq": "سؤال عن البطولات؟ اطّلعوا على الأسئلة الشائعة.", "direct": "تفضّلون مراسلتنا مباشرة؟", "btn": "إرسال الرسالة", "messageph": "وضّحوا لنا طلبكم…", "emailph": "you@example.com", "nameError": "يرجى إدخال الاسم.", "emailError": "أدخلوا عنوان بريد إلكتروني صالحاً.", "topicError": "اختاروا موضوع الرسالة.", "messageError": "يرجى كتابة الرسالة.", "sending": "جارٍ الإرسال…", "success": "تم إرسال رسالتكم. سنردّ عليكم عبر البريد الإلكتروني.", "error": "تعذّر تأكيد الإرسال. رسالتكم محفوظة أعلاه. أعيدوا المحاولة أو راسلوا admin@partido.ma.", "invalid": "راجعوا الحقول المشار إليها قبل الإرسال."});

function buildMarquee(lang) {
  const items = T[lang].marquee;
  // Repeat enough sets to keep wide screens filled throughout the loop.
  const doubled = Array.from({ length: 8 }, () => items).flat();
  return doubled.map((t, i) =>
    `<span class="mi"${i >= items.length ? ' aria-hidden="true"' : ''}><span class="mi-dot" aria-hidden="true"></span>${t}</span>`
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

  const legalSuffix = lang === 'en' ? '' : '-' + lang;
  document.querySelectorAll('[data-footer-privacy]').forEach(a => a.href = 'privacy' + legalSuffix + '.html');
  document.querySelectorAll('[data-footer-delete]').forEach(a => a.href = 'delete-account' + legalSuffix + '.html');

  const menuButton = document.querySelector('.nav-burger');
  if (menuButton) menuButton.setAttribute('aria-label', {fr:'Menu de navigation',en:'Navigation menu',ar:'قائمة التنقل'}[lang]);
  if (document.body.classList.contains('tournament-page')) {
    document.querySelector('meta[name="description"]').content = t.event.intro;
  }
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
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
  });

  document.querySelectorAll("[data-guide-link]").forEach(link => {
    const base = link.dataset.guideLink;
    link.href = base + (lang === "fr" ? "" : "-" + lang) + ".html";
  });

  // Shared legal navigation follows the selected language.
  const legalLabels = {fr:['Conditions d’utilisation','Confidentialité','Suppression du compte'],en:['Terms of use','Privacy','Account deletion'],ar:['شروط الاستخدام','الخصوصية','حذف الحساب']};
  document.querySelectorAll('[data-legal-link]').forEach(a => {
    const key = a.dataset.legalLink;
    a.textContent = legalLabels[lang][['terms','privacy','delete'].indexOf(key)];
    a.href = key === 'terms' ? 'terms.html' : (key === 'privacy' ? 'privacy' : 'delete-account') + legalSuffix + '.html';
  });

  // Page title
  const pageId = document.body && document.body.getAttribute('data-page');
  if (document.querySelector('.contact-page')) {
    document.title = {fr:'Contact — Partido',en:'Contact — Partido',ar:'تواصل معنا — بارتيدو'}[lang];
  } else if (document.body.classList.contains('tournament-page')) {
    document.title = t.event.title + ' — Partido';
  } else if (document.body.dataset.guideTitle) {
    document.title = document.body.dataset.guideTitle;
  } else if (pageId && t.art && t.art[pageId]) {
    document.title = t.art[pageId].pagetitle;
  } else if (document.body.dataset.legalPage) {
    document.title = legalLabels[lang][['terms','privacy','delete'].indexOf(document.body.dataset.legalPage)] + ' — Partido';
  } else {
    const titles = { en:'Partido Sports — Find Your Game', fr:'Partido Sports — Trouve Ton Match', ar:'بارتيدو — العب كرتك' };
    document.title = titles[lang] || titles.en;
  }

  // Store badges (SVG text is not translatable via data-i18n — swap whole SVG)
  updateStoreBadges(lang);

  // Hero phone mockups (per-language screenshots)
  updateHeroPhones(lang);

  document.dispatchEvent(new CustomEvent("partido:language", { detail: lang }));

  // Persist preference
  try { localStorage.setItem('partido_lang', lang); } catch(e) {}
}

// Shared responsive navigation: keep one language control and move it into the menu.
(function () {
  const header = document.querySelector('body > nav');
  if (!header) return;
  let burger = header.querySelector('.nav-burger');
  if (!burger) {
    burger = document.createElement('button');
    burger.className = 'nav-burger';
    burger.innerHTML = '<span></span><span></span><span></span>';
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-controls', 'mobile-menu');
  }
  header.append(burger);
  let menu = document.getElementById('mobile-menu');
  if (!menu) {
    menu = document.createElement('div');
    menu.className = 'mobile-menu'; menu.id = 'mobile-menu';
    menu.setAttribute('aria-hidden','true'); menu.inert = true;
    const links = document.createElement('nav'); links.className = 'mobile-menu__nav';
    header.querySelectorAll('.nav-center a').forEach(a => {
      const link = a.cloneNode(true); link.className = 'mobile-menu__link';
      link.removeAttribute('style');
      if (link.getAttribute('href').startsWith('#')) link.setAttribute('data-mobile-scroll','');
      links.append(link);
    });
    menu.append(links); header.after(menu);
  }
  const languages = header.querySelector('.lang-switcher');
  const right = header.querySelector('.nav-right');
  const slot = document.createElement('div'); slot.className = 'mobile-menu__languages';
  menu.append(slot);
  const mq = matchMedia('(max-width: 980px)');
  function placeLanguages() { if (languages) (mq.matches ? slot : right).prepend(languages); }
  mq.addEventListener('change', placeLanguages); placeLanguages();
  document.querySelectorAll('.lang-btn[data-lang="ar"]').forEach(el => el.textContent = 'عربي');
})();

// ── LANGUAGE SWITCHER EVENTS ─────────────────────────────────────
// Pages that have separate per-language HTML files redirect on lang switch.
// All other pages translate in-place via applyLang().
const LANG_PAGE_MAP = {
  "article-culture-ar.html": {"fr": "article-culture.html", "en": "article-culture-en.html", "ar": "article-culture-ar.html"},
  "article-culture-en.html": {"fr": "article-culture.html", "en": "article-culture-en.html", "ar": "article-culture-ar.html"},
  "article-culture.html": {"fr": "article-culture.html", "en": "article-culture-en.html", "ar": "article-culture-ar.html"},
  "article-tips-ar.html": {"fr": "article-tips.html", "en": "article-tips-en.html", "ar": "article-tips-ar.html"},
  "article-tips-en.html": {"fr": "article-tips.html", "en": "article-tips-en.html", "ar": "article-tips-ar.html"},
  "article-tips.html": {"fr": "article-tips.html", "en": "article-tips-en.html", "ar": "article-tips-ar.html"},
  "article-community-ar.html": {"fr": "article-community.html", "en": "article-community-en.html", "ar": "article-community-ar.html"},
  "article-community-en.html": {"fr": "article-community.html", "en": "article-community-en.html", "ar": "article-community-ar.html"},
  "article-community.html": {"fr": "article-community.html", "en": "article-community-en.html", "ar": "article-community-ar.html"},
  'privacy.html':    { en: 'privacy.html',    fr: 'privacy-fr.html', ar: 'privacy-ar.html' },
  'privacy-fr.html': { en: 'privacy.html',    fr: 'privacy-fr.html', ar: 'privacy-ar.html' },
  'privacy-ar.html': { en: 'privacy.html',    fr: 'privacy-fr.html', ar: 'privacy-ar.html' },
};
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    const file = window.location.pathname.split('/').pop() || 'index.html';
    const map  = LANG_PAGE_MAP[file];
    if (map && map[lang] !== file) {
      try { localStorage.setItem('partido_lang', lang); } catch(e) {}
      window.location.href = map[lang];
      return;
    }
    applyLang(lang);
  });
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
  const staticLegalLang = /^(privacy|delete-account)(-fr|-ar)?\.html$/.test(location.pathname.split('/').pop()) ? document.documentElement.lang : null;
  const lang = staticLegalLang || document.body.dataset.guideLang || ((saved && T[saved]) ? saved
    : (T[browserLang] ? browserLang : 'en'));
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
    var direction = document.documentElement.dir === 'rtl' ? 1 : -1;
    track.style.transform = 'translateX(' + (direction * i * (cw + GAP)) + 'px)';
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
      d.setAttribute('aria-current', i === index ? 'true' : 'false');
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
    if (document.documentElement.dir === 'rtl') dx = -dx;
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

  // Recalculate translation when the reading direction changes.
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() { refresh(false); });
  });

  // ── Init
  sizeCards();
  buildDots();
  refresh(false);
})();


// -- MOBILE BURGER MENU --
(function() {
  var burger = document.querySelector('.nav-burger');
  var menu   = document.getElementById('mobile-menu');
  if (!burger || !menu) return;

  var blockedElements = [];
  var previousOverflow = '';
  var header = burger.closest('nav');
  menu.inert = true;

  function openMenu() {
    previousOverflow = document.body.style.overflow;
    var background = Array.from(document.body.children).filter(function(el) {
      return el !== menu && el !== header && el.tagName !== 'SCRIPT';
    });
    background = background.concat(Array.from(header.querySelectorAll('.nav-left > a, .nav-center, .nav-right')));
    blockedElements = background.map(function(el) {
      var state = { element: el, inert: el.inert };
      el.inert = true;
      return state;
    });
    menu.inert = false;
    menu.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    menu.querySelector('a').focus({ preventScroll: true });
  }

  function closeMenu() {
    if (burger.getAttribute('aria-expanded') !== 'true') return;
    blockedElements.forEach(function(state) { state.element.inert = state.inert; });
    blockedElements = [];
    burger.focus({ preventScroll: true });
    menu.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    menu.inert = true;
    document.body.style.overflow = previousOverflow;
  }

  window.matchMedia('(max-width: 980px)').addEventListener('change', function(e) {
    if (!e.matches) closeMenu();
  });

  burger.addEventListener('click', function() {
    var isOpen = burger.getAttribute('aria-expanded') === 'true';
    if (isOpen) closeMenu(); else openMenu();
  });

  // Scroll-target links: close menu first, then scroll after animation completes
  menu.querySelectorAll('a[data-mobile-scroll]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var href = link.getAttribute('href');
      if (!href || href.charAt(0) !== '#') return;
      e.preventDefault();
      closeMenu();
      // Wait for slide-up animation (380ms) before scrolling
      setTimeout(function() {
        var target = document.querySelector(href);
        if (target) {
          var navH = (document.querySelector('nav') || {}).offsetHeight || 70;
          var top  = target.getBoundingClientRect().top + window.pageYOffset - navH - 12;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      }, 400);
    });
  });

  // Page-navigation links (no data-mobile-scroll): just close the menu overlay
  menu.querySelectorAll('a:not([data-mobile-scroll])').forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on overlay click (outside the nav items)
  menu.addEventListener('click', function(e) {
    if (e.target === menu) closeMenu();
  });

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (burger.getAttribute('aria-expanded') !== 'true') return;
    if (e.key === 'Escape') { e.preventDefault(); closeMenu(); return; }
    if (e.key === 'Tab') {
      var targets = [burger].concat(Array.from(menu.querySelectorAll('a[href], button:not([disabled])')));
      var first = targets[0], last = targets[targets.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    }
  });
})();

// Keep the ticker at 28 pixels per second across languages and font changes.
(function () {
  const track = document.getElementById('marquee-track');
  if (!track) return;
  function updateSpeed() {
    track.style.setProperty('--marquee-duration', (track.scrollWidth / 2 / 28) + 's');
  }
  new ResizeObserver(updateSpeed).observe(track);
  document.fonts.ready.then(updateSpeed);
  updateSpeed();
})();

// Mark the current page or the player journey currently being read.
(function () {
  const links = Array.from(document.querySelectorAll('body > nav .nav-center a, .mobile-menu__link'));
  const page = location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const url = new URL(link.href);
    if (!url.hash && url.pathname.split('/').pop() === page) link.setAttribute('aria-current','page');
  });
  if (page !== 'index.html' || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const matching = links.filter(a => new URL(a.href).hash === '#' + entry.target.id);
      matching.forEach(a => entry.isIntersecting ? a.setAttribute('aria-current','location') : a.removeAttribute('aria-current'));
    });
  }, {rootMargin:'-20% 0px -50% 0px'});
  ['for-players','for-organizers'].forEach(id => { const section = document.getElementById(id); if(section) observer.observe(section); });
})();
