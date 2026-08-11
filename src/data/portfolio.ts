export type Language = 'fr' | 'en';

export const skills = [
  'ReactJS', 'NextJS', 'Angular', 'Ionic', 'VueJS', 'Quasar', 'JavaScript',
  'NodeJS (Express)', 'MongoDB', 'Prisma', 'PostgreSQL', 'Firebase', 'MySQL',
  'HTML', 'CSS', 'Sass', 'Git', 'GitHub', 'GitLab', 'Windows', 'Linux',
];

export const experiences = [
  {
    company: 'Livenexx', location: 'Antananarivo', role: { fr: 'Full Stack Developer', en: 'Full Stack Developer' },
    period: { fr: 'Depuis avril 2023', en: 'Since April 2023' }, current: true,
    projects: [
      { name: 'Snapback', detail: { fr: 'Application web pour la gestion de l’activité quotidienne des techniciens cordistes.', en: 'Web app for rope technicians to manage daily activity.' }, stack: ['Web application development', 'API integration', 'Front-end performance optimization'] },
      { name: 'Pratisoins', detail: { fr: 'Application web pour praticiens et patients : rendez-vous, dossiers médicaux, suivi patient et interactions professionnelles.', en: 'Web app for practitioners and patients: appointments, medical records, patient follow-up and professional interactions.' }, stack: ['ReactJS', 'NodeJS (Express)', 'Prisma', 'MySQL'] },
      { name: 'TL', detail: { fr: 'Application web de gestion des transports.', en: 'Transport management web application.' }, stack: ['Web application development', 'API integration', 'Front-end performance optimization'] },
      { name: 'SIRH', detail: { fr: 'Application web avancée de gestion des ressources humaines, construite intégralement.', en: 'Advanced HR management web app, fully built from the ground up.' }, stack: ['ReactJS', 'NodeJS (Express)', 'Prisma', 'MySQL'] },
    ],
  },
  {
    company: 'Telma', location: 'Antananarivo', role: { fr: 'Stagiaire', en: 'Intern' },
    period: { fr: 'Septembre 2022 — mars 2023', en: 'September 2022 — March 2023' },
    projects: [{ name: 'Mobile Switching Center', detail: { fr: 'Application de supervision d’un centre de commutation mobile pour le suivi en temps réel et la gestion des opérations.', en: 'Mobile switching center supervision application for real-time monitoring and operations management.' }, stack: ['ReactJS', 'NodeJS (Express)', 'MongoDB'] }],
  },
  {
    company: 'Akata Goavana', location: 'Fianarantsoa', role: { fr: 'Développeur', en: 'Developer' },
    period: { fr: 'Septembre 2020 — septembre 2022', en: 'September 2020 — September 2022' },
    projects: [
      { name: 'Web Content Management', detail: { fr: 'Application de gestion de contenu web.', en: 'Web content management application.' }, stack: ['ReactJS', 'NextJS', 'Strapi', 'MySQL'] },
      { name: 'HUBLIVE', detail: { fr: 'Application web de réunion en bureau virtuel. Contribution à l’intégration des maquettes et aux fonctionnalités.', en: 'Virtual-office meeting web app. Contributed to mockup integration and features.' }, stack: ['Angular', 'NodeJS (Express)', 'MongoDB'] },
      { name: 'BOOK', detail: { fr: 'Réseau social web/mobile pour une entreprise média européenne. Contribution aux fonctionnalités.', en: 'Web/mobile social network for a European media company. Contributed features.' }, stack: ['Angular', 'Ionic', 'Capacitor', 'NodeJS', 'Firebase'] },
      { name: 'NX Saga', detail: { fr: 'Thèmes WordPress migrés vers Batflat.', en: 'WordPress themes migrated to Batflat.' }, stack: ['WordPress', 'PHP', 'Batflat'] },
      { name: 'Luxrenting', detail: { fr: 'Plateforme de location de produits de luxe : voitures, yachts et propriétés.', en: 'Luxury product rental platform for cars, yachts and estates.' }, stack: ['Django', 'VueJS', 'PostgreSQL'] },
      { name: 'Koba', detail: { fr: 'Application desktop de gestion et synchronisation du travail et des pauses d’équipe.', en: 'Desktop app for team work, break-time management and synchronization.' }, stack: ['Quasar Electron', 'VueJS', 'NodeJS'] },
    ],
  },
  {
    company: 'Caisse d’épargne de Madagascar', location: 'Antananarivo', role: { fr: 'Stagiaire', en: 'Intern' },
    period: { fr: 'Novembre 2019 — février 2020', en: 'November 2019 — February 2020' },
    projects: [{ name: 'Materials order management', detail: { fr: 'Application de gestion des commandes de matériels.', en: 'Materials order management application.' }, stack: ['TypeScript', 'Angular', 'Oracle'] }],
  },
];

export const copy = {
  fr: {
    nav: { about: 'Profil', skills: 'Expertise', experience: 'Parcours', projects: 'Projets', education: 'Formation', contact: 'Contact' },
    heroKicker: 'Ingénieur logiciel · Antananarivo, Madagascar',
    heroTitle: 'Des systèmes complexes, rendus lisibles.',
    heroText: 'Je transforme les besoins opérationnels en applications web fiables, performantes et pensées pour durer.',
    viewWork: 'Explorer le parcours', contactMe: 'Parlons de votre projet', available: 'Disponible pour échanger',
    profileLabel: '01 / Profil', profileTitle: 'Un regard produit, une rigueur d’ingénieur.',
    profileText: 'Ingénieur en informatique avec plus de 5 ans d’expérience en développement Full Stack, je possède une expertise approfondie en JavaScript et en architecture d’applications web. Je contribue à des solutions innovantes qui améliorent la performance, l’efficacité opérationnelle et l’expérience utilisateur. Rigoureux et orienté résultats.',
    skillsLabel: '02 / Expertise', skillsTitle: 'Une boîte à outils construite sur le terrain.',
    experienceLabel: '03 / Expérience', experienceTitle: 'Des produits qui répondent au réel.', projects: 'projets',
    educationLabel: '04 / Formation', educationTitle: 'Les fondamentaux, puis la pratique.',
    languagesLabel: 'Langues', languagesTitle: 'Travailler au-delà des frontières.', french: 'Français', english: 'Anglais',
    contactLabel: '05 / Contact', contactTitle: 'Construisons quelque chose d’utile.', contactText: 'Une idée, un produit à structurer ou un système à faire évoluer ? Écrivez-moi directement.',
    name: 'Nom', email: 'Adresse email', message: 'Votre message', send: 'Préparer le message', mailNote: 'Le formulaire prépare votre client email. Aucune livraison automatique n’est configurée pour le moment.',
    required: 'Ce champ est requis.', invalidEmail: 'Entrez une adresse email valide.', emailDirect: 'Écrire un email', phone: 'Appeler', download: 'Télécharger le CV', open: 'Ouvrir le CV', footer: 'Conçu avec précision depuis Antananarivo.', birth: '16 janvier 1997', address: 'Lot III 35 AG Andavamamba, Antananarivo 101, Madagascar',
  },
  en: {
    nav: { about: 'Profile', skills: 'Expertise', experience: 'Journey', projects: 'Projects', education: 'Education', contact: 'Contact' },
    heroKicker: 'Software engineer · Antananarivo, Madagascar',
    heroTitle: 'Complex systems, made legible.',
    heroText: 'I turn operational needs into reliable, performant web applications built to last.',
    viewWork: 'Explore the journey', contactMe: 'Let’s discuss your project', available: 'Open to conversations',
    profileLabel: '01 / Profile', profileTitle: 'Product thinking, engineering rigour.',
    profileText: 'Computer engineer with more than 5 years of Full Stack development experience, with deep expertise in JavaScript and web application architecture. I contribute to innovative solutions that improve performance, operational efficiency and user experience. Rigorous and results-oriented.',
    skillsLabel: '02 / Expertise', skillsTitle: 'A toolkit built in the field.',
    experienceLabel: '03 / Experience', experienceTitle: 'Products that answer real needs.', projects: 'projects',
    educationLabel: '04 / Education', educationTitle: 'Fundamentals, then practice.',
    languagesLabel: 'Languages', languagesTitle: 'Work beyond borders.', french: 'French', english: 'English',
    contactLabel: '05 / Contact', contactTitle: 'Let’s build something useful.', contactText: 'An idea, a product to structure, or a system to evolve? Write to me directly.',
    name: 'Name', email: 'Email address', message: 'Your message', send: 'Prepare message', mailNote: 'The form prepares your email client. No automatic delivery is configured yet.',
    required: 'This field is required.', invalidEmail: 'Enter a valid email address.', emailDirect: 'Write an email', phone: 'Call', download: 'Download CV', open: 'Open CV', footer: 'Built with precision from Antananarivo.', birth: 'January 16, 1997', address: 'Lot III 35 AG Andavamamba, Antananarivo 101, Madagascar',
  },
} as const;

export type Copy = typeof copy.fr | typeof copy.en;