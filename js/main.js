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
    footer: { privacy:'Privacy', terms:'Terms', contact:'Contact', getapp:'Get the app', tagline:'Connecting players through the beautiful game.', copy:'© 2026 Partido, a brand of BBF Ventures. All rights reserved.' },
    bridge: { text: 'Or create your own game' },
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
        body: '<p>To use the Service, you must be at least <strong>14 years old</strong>.</p><p>If you are between <strong>14 and 18 years old</strong>, you confirm that you have obtained permission from a parent or legal guardian to use the Service, and that they have reviewed and accepted these Terms on your behalf.</p><p>By using the Service, you represent and warrant that:</p><ul><li>You meet the minimum age requirement;</li><li>All information you provide is accurate and truthful;</li><li>You have the legal capacity to enter into these Terms.</li></ul><p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p><p>We reserve the right to suspend or terminate any account if we believe that a user does not meet these eligibility requirements.</p>',
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
    nav: { discover:'Pour les Joueurs', organize:'Pour les Organisateurs', profile:'Tournois', contact:'Contact', cta:'Télécharger' },
    hero: {
      h1:  'Jouez au Foot<br><em>Partout, À Tout Moment</em>',
      sub: 'Trouvez des matchs à proximité, complétez votre équipe et foncez sur le terrain — le tout depuis une seule appli.',
    },
    marquee: ['Trouve un Match Près de Toi','Crée un Match en 60 Secondes','5v5 · 6v6 · 7v7','Ambiance Détente ou Compétition','Complète ton Équipe Instantanément','La Communauté Football du Maroc','Tournois à Travers le Maroc','Construis ton Identité Football'],
    how: {
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
    footer: { privacy:'Confidentialité', terms:'CGU', contact:'Contact', getapp:"Télécharger l'app", tagline:'Connecter les joueurs à travers le beau jeu.', copy:'© 2026 Partido, une marque de BBF Ventures. Tous droits réservés.' },
    bridge: { text: 'Ou crée ton propre match' },
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
        body: '<p>Pour utiliser le Service, vous devez avoir au moins <strong>14 ans</strong>.</p><p>Si vous avez entre <strong>14 et 18 ans</strong>, vous confirmez avoir obtenu l\'autorisation d\'un parent ou tuteur légal pour utiliser le Service, et qu\'ils ont examiné et accepté ces Conditions en votre nom.</p><p>En utilisant le Service, vous déclarez et garantissez que :</p><ul><li>Vous satisfaisez à l\'exigence d\'âge minimum ;</li><li>Toutes les informations que vous fournissez sont exactes et véridiques ;</li><li>Vous avez la capacité juridique de conclure ces Conditions.</li></ul><p>Vous êtes responsable de la confidentialité de vos identifiants de compte et de toutes les activités effectuées sous votre compte.</p><p>Nous nous réservons le droit de suspendre ou de résilier tout compte si nous estimons qu\'un utilisateur ne satisfait pas à ces conditions d\'éligibilité.</p>',
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
    nav: { discover:'للاعبين', organize:'للمنظمين', profile:'بطولات', contact:'تواصل', cta:'حمّل مجاناً' },
    hero: {
      h1:  'العب كرة القدم<br><em>في أي مكان، في أي وقت</em>',
      sub: 'اعثر على مباريات قريبة، اكمل فريقك، وانزل الملعب — كل شيء من تطبيق واحد.',
    },
    marquee: ['ابحث عن مباراة قريبة منك','أنشئ مباراة في 60 ثانية','5 ضد 5 · 6 ضد 6 · 7 ضد 7','جو ترفيهي أو تنافسي','اكمل فريقك فوراً','مجتمع كرة القدم بالمغرب','بطولات في أرجاء المغرب','ابنِ هويتك الكروية'],
    how: {
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
    footer: { privacy:'الخصوصية', terms:'الشروط', contact:'تواصل معنا', getapp:'حمّل التطبيق', tagline:'نربط اللاعبين من خلال الجميلة.', copy:'© 2026 Partido، علامة تجارية لـ BBF Ventures. جميع الحقوق محفوظة.' },
    bridge: { text: 'أو أنشئ مبارتك الخاصة' },
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
        body: '<p>لاستخدام الخدمة، يجب أن يكون عمرك <strong>14 عاماً على الأقل</strong>.</p><p>إذا كان عمرك بين <strong>14 و18 عاماً</strong>، فأنت تؤكد أنك حصلت على إذن من أحد الوالدين أو الوصيّ القانوني لاستخدام الخدمة، وأنهم اطّلعوا على هذه الشروط وقبلوها نيابةً عنك.</p><p>باستخدام الخدمة، تُقرّ وتضمن ما يلي:</p><ul><li>استيفاؤك لشرط الحدّ الأدنى للسن؛</li><li>دقة جميع المعلومات التي تُقدّمها وصحّتها؛</li><li>امتلاكك الأهليةَ القانونية للالتزام بهذه الشروط.</li></ul><p>أنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك وعن جميع الأنشطة التي تجري تحت حسابك.</p><p>نحتفظ بالحق في تعليق أي حساب أو إنهائه إذا اعتقدنا أن المستخدم لا يستوفي متطلبات الأهلية هذه.</p>',
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
// Pages that have separate per-language HTML files redirect on lang switch.
// All other pages translate in-place via applyLang().
const LANG_PAGE_MAP = {
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


// -- MOBILE BURGER MENU --
(function() {
  var burger = document.querySelector('.nav-burger');
  var menu   = document.getElementById('mobile-menu');
  if (!burger || !menu) return;

  function openMenu() {
    menu.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

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
    if (e.key === 'Escape') closeMenu();
  });
})();
