import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
     await prisma.about.deleteMany();
     await prisma.experience.deleteMany();
     await prisma.technoItem.deleteMany()
     await prisma.technoType.deleteMany();
     await prisma.project.deleteMany();
     await prisma.blog.deleteMany();


     // Seed About
     await prisma.about.create({
          data: {
               text1: "Bonjour",
               text2: "Je suis Guillaume",
               text3: "Développeur Web FullStack",
               paragraph:
                    "Je vous accompagne dans vos projets pour sublimer & transformer votre activité avec créativité & expertise.",
          },
     });

     // Seed Experiences
     await prisma.experience.createMany({
          data: [
               {
                    title: "Thales",
                    description: "Ingénieur Logiciel",
                    duration: "10.2022 - 06.2024",
                    place: "Prague - Czech Republic",
                    imageUrl: "/images/thales.png",
                    ctaText: "Voir le projet",
                    ctaLink: "https://ui.aceternity.com/templates",
                    backgroundClassName: "from-violet-500 via-purple-500 to-blue-500",
                    content: `Entre Octobre 2022 et Juin 2024 à Prague, en République Tchèque, j'ai travaillé chez Thales en tant qu'ingénieur logiciel dans le département "biometric & identity solutions". Ma principale mission était de contribuer au développement du Web Enrolment System (WES), une solution innovante sous forme de kiosque en libre-service, permettant le renouvellement de documents d'identité. Ce projet m'a permis d'explorer des technologies de pointe et de collaborer avec une équipe multiculturelle pour apporter des solutions sécurisées et efficaces dans le domaine de l'identité numérique.`,
               },
               {
                    title: "PME Manageur",
                    description: "Développeur FullStack Freelance",
                    duration: "09.2021 - 09.2022",
                    place: "Marseille - France",
                    imageUrl: "/images/pme.png",
                    ctaText: "Voir le projet",
                    ctaLink: "https://ui.aceternity.com/templates",
                    backgroundClassName: "from-orange-500 via-amber-500 to-yellow-500",
                    content: `De Septembre 2021 à Septembre 2022 à Marseille, France, j'ai travaillé en tant que développeur freelance pour PME Manageur. Mon objectif principal était de concevoir et de développer des solutions sur mesure pour optimiser les processus des petites et moyennes entreprises. J'ai créé des outils numériques qui ont permis à mes clients d'améliorer leur efficacité opérationnelle, de rationaliser leurs workflows, et de maximiser leur rentabilité grâce à des technologies adaptées à leurs besoins spécifiques.`,
               },
               {
                    title: "Getup Agency",
                    description: "Développeur PHP & JS",
                    duration: "09.2020 - 06.2021",
                    place: "La Farlède - France",
                    imageUrl: "/images/getup.svg",
                    ctaText: "Voir le projet",
                    ctaLink: "https://ui.aceternity.com/templates",
                    backgroundClassName: "from-green-400 via-emerald-400 to-teal-400",
                    content: `De Septembre 2020 à Juin 2021 à La Farlède, France, j'ai été développeur web chez Getup Agency. Durant cette période, j'ai participé à la création de plusieurs sites vitrine et boutiques en ligne pour divers clients. En utilisant des technologies modernes et des stratégies de design efficaces, j'ai aidé ces entreprises à renforcer leur présence en ligne et à mieux interagir avec leurs clients à travers des plateformes intuitives et performantes.`,
               },
               {
                    title: "Atmosud",
                    description: "Développeur Web Junior",
                    duration: "01.2020 - 06.2021",
                    place: "Marseille - France",
                    imageUrl: "/images/atmosud.png",
                    ctaText: "Voir le projet",
                    ctaLink: "https://ui.aceternity.com/templates",
                    backgroundClassName: "from-sky-500 via-blue-500 to-indigo-500",
                    content: `De Janvier 2020 à Septembre 2020 à Marseille, j'ai travaillé pour Atmosud en tant que développeur web. Ma mission était de développer des interfaces et applications web permettant de centraliser et analyser les données relatives aux différents polluants présents dans l'air. Ce projet m'a permis de contribuer à une meilleure compréhension de la qualité de l'air en Provence-Alpes-Côte d'Azur, tout en m'impliquant dans un domaine à fort impact environnemental.`,
               },
          ],
     });

     // Seed TechnoTypes and TechnoItems
     const frontEnd = await prisma.technoType.create({
          data: {
               name: "Frontend",
               items: {
                    create: [
                         { title: "React", description: "Une bibliothèque JavaScript pour créer des interfaces utilisateur.", imageUrl: "/images/technos/React.svg", link: "https://react.org" },
                         { title: "Next.js", description: "Un framework React pour le rendu côté serveur et la génération de sites statiques.", imageUrl: "/images/technos/Next.svg", link: "" },
                         { title: "Tailwind", description: "Un framework CSS utilitaire pour un développement d'interface utilisateur rapide.", imageUrl: "/images/technos/Tailwind.svg", link: "" },
                         { title: "Aceternity", description: "Une bibliothèque de composants UI basée sur Shadcn, construite avec Next.js et Tailwind CSS.", imageUrl: "/images/technos/Aceternity.png", link: "" },
                         { title: "Angular", description: "Une plateforme pour créer des applications web mobiles et desktop avec TypeScript.", imageUrl: "/images/technos/Angular.svg", link: "" },
                         { title: "Sass", description: "Un langage de préprocesseur CSS qui étend les fonctionnalités de CSS avec des variables, des boucles et plus encore.", imageUrl: "/images/technos/Sass.svg", link: "" },
                         { title: "Shadcn UI", description: "Une collection de composants UI construite avec Radix et Tailwind CSS.", imageUrl: "/images/technos/shadcn.png", link: "" },
                         { title: "TypeScript", description: "Un sur-ensemble de JavaScript qui ajoute des types statiques pour améliorer la robustesse du code.", imageUrl: "/images/technos/TypeScript.svg", link: "" },
                    ],
               },
          },
     });

     const backEnd = await prisma.technoType.create({
          data: {
               name: "Backend",
               items: {
                    create: [
                         { title: "Node.js", description: "Un environnement d'exécution JavaScript basé sur le moteur V8 de Chrome pour créer des applications réseau évolutives.", imageUrl: "/images/technos/Nodejs.svg", link: "" },
                         { title: "Strapi", description: "Un CMS headless open-source pour gérer du contenu et le diffuser partout.", imageUrl: "/images/technos/Strapi.png", link: "" },
                         { title: "PHP", description: "Un langage de script côté serveur populaire utilisé pour le développement web.", imageUrl: "/images/technos/PHP.svg", link: "" },
                         { title: "Symfony", description: "Un framework PHP pour créer des applications web et des API robustes et évolutives.", imageUrl: "/images/technos/Symfony.svg", link: "" },
                         { title: "WordPress", description: "Un système de gestion de contenu (CMS) open-source utilisé pour créer et gérer des sites web.", imageUrl: "/images/technos/Wordpress.svg", link: "" },
                         { title: "Bash", description: "Un langage de scripts utilisé pour automatiser les tâches système et exécuter des commandes sur les systèmes d'exploitation basés sur Unix.", imageUrl: "/images/technos/Linux.svg", link: "" },
                    ],
               },
          },
     });

     const database = await prisma.technoType.create({
          data: {
               name: "Database",
               items: {
                    create: [
                         { title: "PostgreSQL", description: "Un système de base de données relationnelle open-source mettant l'accent sur l'extensibilité et la conformité SQL.", imageUrl: "/images/technos/PostgresSQL.svg", link: "" },
                         { title: "MySQL", description: "Un système de base de données relationnelle populaire et open-source.", imageUrl: "/images/technos/MySQL.svg", link: "" },
                    ],
               },
          },
     });

     const devOps = await prisma.technoType.create({
          data: {
               name: "DevOps",
               items: {
                    create: [
                         { title: "Jenkins", description: "Un serveur d'automatisation open-source qui aide à automatiser les étapes du développement logiciel.", imageUrl: "/images/technos/Jenkins.svg", link: "" },
                         { title: "Nginx", description: "Un serveur web open-source utilisé pour le reverse proxy, la mise en cache, l'équilibrage de charge, et plus encore.", imageUrl: "/images/technos/Nginx.svg", link: "" },
                         { title: "Git", description: "Un système de contrôle de version distribué pour suivre les modifications dans le code source.", imageUrl: "/images/technos/GitLab.svg", link: "" },
                         { title: "AWS", description: "Une plateforme complète de cloud computing proposée par Amazon.", imageUrl: "/images/technos/AWS.svg", link: "" },
                         { title: "Jira", description: "Un outil populaire pour la gestion de projet et le suivi des bugs, souvent utilisé dans les équipes agiles.", imageUrl: "/images/technos/Jira.svg", link: "" },
                    ],
               },
          },
     });

     const design = await prisma.technoType.create({
          data: {
               name: "Design",
               items: {
                    create: [
                         { title: "Figma", description: "Un outil de conception collaboratif pour créer des interfaces utilisateur et des prototypes.", imageUrl: "/images/technos/Figma.svg", link: "" },
                         { title: "Zeplin", description: "Un outil collaboratif pour le design et le développement, facilitant le transfert des conceptions aux développeurs avec des spécifications précises.", imageUrl: "/images/technos/Zeplin.svg", link: "" },
                    ],
               },
          },
     });

     // Seed Projects
     await prisma.project.createMany({
          data: [
               {
                    title: "AC Architecte",
                    description: "dfsughresyoj soeyrgjdfsiuogylhiisdmlgf",
                    imageUrl: "/images/projects/ac/logo-ac.png",
                    coverUrl: undefined,
                    href: "https://ac-architecte.net",
               },
               {
                    title: "JDC Rénovations",
                    description: "lsfdkghkjfdglhiisdmlgf",
                    imageUrl: "/images/projects/jdc/logo-jdc.png",
                    coverUrl: "/images/projects/jdc/bg-jdc.jpg",
                    href: "https:/jdc-renovations.fr",
               },
               {
                    title: "Déco Charpente",
                    description: "dfsughresyoj soeyrgjsfdkghkjfdglhiisdmlgf",
                    imageUrl: "/images/projects/deco/logo-deco.png",
                    coverUrl: "/images/projects/deco/bg-deco.jpg",
                    href: "https:/jdc-renovations.fr",
               },
               {
                    title: "Smartports",
                    description: "dfsughresyoj soeyrgjsfdkghkjfdglhiisdmlgf",
                    imageUrl: "/images/projects/smartports/logo-smartports.png",
                    coverUrl: "/images/projects/smartports/bg-smartports.png",
                    href: "https:/jdc-renovations.fr",
               },
               {
                    title: "AC Architecte",
                    description: "dfsughresyoj soeyrgjdfsiuogylhiisdmlgf",
                    imageUrl: "/images/projects/ac/logo-ac.png",
                    coverUrl: undefined,
                    href: "https://ac-architecte.net",
               },
               {
                    title: "Smartports",
                    description: "dfsughresyoj soeyrgjsfdkghkjfdglhiisdmlgf",
                    imageUrl: "/images/projects/smartports/logo-smartports.png",
                    coverUrl: "/images/projects/smartports/bg-smartports.png",
                    href: "https:/jdc-renovations.fr",
               },
          ],
     });

     await prisma.blog.createMany({
          data: [
               {
                    title: "L'essor de la Blockchain dans la FinTech",
                    slug: "essor-blockchain-fintech",
                    content: `
## Introduction

La technologie **blockchain** transforme la technologie financière en offrant des transactions sécurisées et transparentes. Cette révolution numérique permet aux institutions financières de réduire les coûts de transaction, d'accélérer les délais de règlement et d'améliorer la traçabilité des opérations.

### Applications de la Blockchain en FinTech

- **Paiements transfrontaliers** : Accélération et réduction des coûts.
- **Prêts sans intermédiaires** : Désintermédiation des services financiers.
- **Contrats intelligents automatisés** : Exécution automatique des accords contractuels.

> "La blockchain redéfinit la FinTech en offrant des solutions plus transparentes et sécurisées." 

Cet article explore comment la blockchain redéfinit la FinTech, en se concentrant sur les défis actuels, les innovations majeures, et l'avenir de cette technologie dans un secteur en constante évolution.
                    `,
                    summary: "Un aperçu de la manière dont la blockchain révolutionne l'industrie de la FinTech.",
                    imageUrl: "/blog/crypto.jpg",
                    author: "Guillaume Zehren",
                    published: true,
                    publishedAt: new Date(),
               },
               {
                    title: "L'IA en Santé : Le Futur est Maintenant",
                    slug: "ia-en-sante-futur",
                    content: `
## L'IA Révolutionne la Santé

L'intelligence artificielle fait des progrès significatifs dans la santé, de l'analyse prédictive à la médecine personnalisée. Grâce à l'IA, les médecins peuvent diagnostiquer plus rapidement et plus précisément, et les patients bénéficient de soins adaptés à leurs besoins spécifiques.

### Innovations Clés

1. **Algorithmes d'apprentissage automatique** : Détection précoce des maladies.
2. **Robots chirurgicaux assistés** : Précision accrue dans les opérations.
3. **Systèmes de gestion des données de santé** : Amélioration de la coordination des soins.

L'IA transforme les soins médicaux et pose des défis éthiques importants à surmonter.
                    `,
                    summary: "Explorer le rôle de l'IA dans la santé moderne.",
                    imageUrl: "/blog/aimedic.jpg",
                    author: "Guillaume Zehren",
                    published: true,
                    publishedAt: new Date(),
               },
               {
                    title: "Les Tendances du Développement Web en 2024",
                    slug: "tendances-developpement-web-2024",
                    content: `
## Tendances du Développement Web en 2024

Le développement web évolue constamment, avec de nouvelles technologies et cadres émergents chaque année. En 2024, les tendances majeures incluent :

- **Frameworks émergents** : Next.js et Svelte gagnent en popularité.
- **Progressive Web Apps (PWA)** : Amélioration de l'expérience utilisateur.
- **Accessibilité et UX** : Focus accru sur l'inclusivité des sites web.

### L'Impact de l'IA sur le Web
            
L'intégration de l'IA pour la personnalisation des sites web devient également incontournable. Ce guide explore ces tendances, leurs impacts sur l'industrie, et comment les développeurs peuvent se préparer pour rester compétitifs.
                    `,
                    summary: "Un regard sur les dernières tendances du développement web en 2024.",
                    imageUrl: "/blog/pc.jpg",
                    author: "Guillaume Zehren",
                    published: true,
                    publishedAt: new Date(),
               },
               {
                    title: "Comprendre la Finance Décentralisée (DeFi)",
                    slug: "comprendre-defi",
                    content: `
## Qu'est-ce que la DeFi ?

La finance décentralisée, ou **DeFi**, redéfinit le paysage financier en offrant des alternatives décentralisées à la banque traditionnelle. 

### Avantages de la DeFi

- **Transparence** : Toutes les transactions sont visibles sur la blockchain.
- **Accessibilité** : Services financiers disponibles pour tous, sans intermédiaires.
- **Sécurité des smart contracts** : Exécution automatisée des termes d'un contrat.

> "DeFi pourrait remodeler la finance mondiale à long terme."

Cet article explore les concepts fondamentaux de DeFi, ses avantages et les risques associés.
                    `,
                    summary: "Une introduction au monde de la DeFi.",
                    imageUrl: "/blog/btc.jpg",
                    author: "Guillaume Zehren",
                    published: true,
                    publishedAt: new Date(),
               },
               {
                    title: "L'Impact de l'IA sur le Développement Logiciel",
                    slug: "impact-ia-developpement-logiciel",
                    content: `
## Automatisation du Développement Logiciel

Les outils d'IA deviennent essentiels au développement logiciel, automatisant les tâches et améliorant la qualité du code.

### Principaux Bénéfices

1. **Détection des bugs** : Algorithmes qui identifient et corrigent les erreurs de code.
2. **Optimisation du code** : Amélioration continue basée sur les données d'utilisation.
3. **Prédiction des besoins futurs** : Anticipation des modifications et mises à jour.

Cet article examine comment l'IA influence chaque étape du cycle de développement logiciel et son impact futur.
                    `,
                    summary: "Comment l'IA change le paysage du développement logiciel.",
                    imageUrl: "/blog/aidev.jpg",
                    author: "Guillaume Zehren",
                    published: true,
                    publishedAt: new Date(),
               },
               {
                    title: "Adoption des Cryptomonnaies : À quoi s'attendre en 2024",
                    slug: "adoption-cryptomonnaies-2024",
                    content: `
## L'Adoption des Cryptomonnaies en 2024

Alors que l'adoption des cryptomonnaies continue de croître, il est essentiel de comprendre les principaux moteurs et les perspectives futures.

### Principaux Moteurs de l'Adoption

- **Régulations plus claires** : Facilitation de l'intégration des cryptos dans les systèmes financiers traditionnels.
- **Adoption institutionnelle accrue** : Grandes entreprises et banques adoptent de plus en plus les actifs numériques.
- **Paiements quotidiens** : Utilisation croissante des cryptomonnaies pour les transactions de tous les jours.

> "Les cryptomonnaies ne sont plus seulement des investissements spéculatifs ; elles deviennent des moyens de paiement courants."

Cet article explore les tendances, les défis réglementaires, et l'impact potentiel des monnaies numériques des banques centrales (CBDC) sur l'écosystème des cryptos en 2024.
                    `,
                    summary: "Prédictions sur l'adoption des cryptomonnaies en 2024.",
                    imageUrl: "/blog/adoptbtc.jpg",
                    author: "Guillaume Zehren",
                    published: true,
                    publishedAt: new Date(),
               },
               {
                    title: "Explorer l'Informatique Quantique et son Potentiel",
                    slug: "explorer-informatique-quantique",
                    content: `
## L'Informatique Quantique : Une Révolution en Marche

L'informatique quantique est sur le point de révolutionner le traitement des données et la puissance de calcul.

### Applications Potentielles

- **Cryptographie** : Sécurisation des communications grâce à des méthodes impossibles à casser par des ordinateurs classiques.
- **Optimisation** : Résolution rapide de problèmes complexes d'optimisation dans les domaines industriels.
- **Modélisation moléculaire** : Accélération de la recherche en chimie et en pharmacologie.

> "L'informatique quantique pourrait résoudre en secondes des problèmes que les supercalculateurs actuels mettraient des siècles à traiter."

Cet article explore les principes fondamentaux de l'informatique quantique, ses applications potentielles et les défis techniques à surmonter avant que cette technologie devienne courante.
                    `,
                    summary: "Une plongée profonde dans l'informatique quantique.",
                    imageUrl: "/blog/qutantic.jpg",
                    author: "Guillaume Zehren",
                    published: true,
                    publishedAt: new Date(),
               },
               {
                    title: "L'Avenir de l'Apprentissage Automatique en Cybersécurité",
                    slug: "avenir-apprentissage-automatique-cybersecurite",
                    content: `
## Apprentissage Automatique en Cybersécurité

L'apprentissage automatique joue un rôle crucial dans l'amélioration des mesures de cybersécurité, de la détection des menaces à la réponse.

### Avantages et Défis

- **Détection des menaces** : Identification rapide des anomalies et des schémas suspects.
- **Automatisation de la réponse** : Réduction du temps de réaction face aux cyberattaques.
- **Prédiction des failles** : Anticipation des faiblesses avant qu'elles ne soient exploitées.

> "L'intégration de l'IA en cybersécurité pourrait transformer la défense numérique."

Cet article explore l'intégration de l'apprentissage automatique en cybersécurité, les défis de la gestion des faux positifs, et l'importance d'un cadre éthique robuste.
                    `,
                    summary: "Comment l'apprentissage automatique améliore la cybersécurité.",
                    imageUrl: "/blog/ai.jpg",
                    author: "Guillaume Zehren",
                    published: true,
                    publishedAt: new Date(),
               },
               {
                    title: "Chatbots IA : Révolutionner le Service Client",
                    slug: "chatbots-ia-service-client",
                    content: `
## Les Chatbots IA au Service Client

Les chatbots IA transforment la manière dont les entreprises interagissent avec les clients, offrant un support 24/7.

### Avantages des Chatbots IA

- **Support continu** : Assistance disponible à tout moment sans interruption.
- **Réduction des temps d'attente** : Réponses instantanées aux requêtes courantes.
- **Amélioration de la satisfaction client** : Interaction fluide et personnalisée.

> "Les chatbots IA redéfinissent l'expérience client en automatisant les interactions tout en préservant une touche humaine."

Cet article examine les avantages des chatbots dans le service client, les technologies derrière leur développement, et les défis à surmonter.
                    `,
                    summary: "La montée des chatbots IA dans le service client.",
                    imageUrl: "/blog/chatbot.jpg",
                    author: "Guillaume Zehren",
                    published: true,
                    publishedAt: new Date(),
               },
               {
                    title: "Les NFTs : La Révolution Numérique de la Propriété",
                    slug: "nfts-revolution-numerique-propriete",
                    content: `
## Les NFTs : Redéfinir la Propriété Numérique

Les tokens non fongibles (NFTs) sont apparus comme une nouvelle façon de posséder et d'échanger des actifs numériques.

### Impact des NFTs

- **Art numérique** : Création d'un marché mondial pour les œuvres digitales.
- **Musique** : Nouveaux modèles de monétisation pour les artistes.
- **Biens virtuels** : Économie numérique dans les jeux vidéo et les métavers.

> "Les NFTs permettent la création d'une économie numérique basée sur la rareté et la propriété vérifiée."

Cet article explore les origines des NFTs, leurs impacts sur les industries créatives, et les controverses entourant leur utilisation.
                    `,
                    summary: "Comprendre les NFTs et leur impact sur la propriété numérique.",
                    imageUrl: "/blog/nft.jpg",
                    author: "Guillaume Zehren",
                    published: true,
                    publishedAt: new Date(),
               },
               {
                    title: "Les Meilleurs Langages de Programmation à Apprendre en 2024",
                    slug: "meilleurs-langages-programmation-2024",
                    content: `
## Les Langages de Programmation Incontournables en 2024

Avec l'évolution de la technologie, rester à jour avec les derniers langages de programmation est essentiel pour les développeurs.

### Langages à Surveiller

- **Python** : Toujours dominant pour le développement web et l'IA.
- **JavaScript** : Indispensable pour le développement frontend et backend.
- **Rust** : Connu pour sa sécurité et sa performance.
- **Go** : Croissance rapide dans le développement de systèmes distribués.
- **TypeScript** : Prisé pour sa robustesse dans les grandes applications web.

> "Maîtriser les bons langages en 2024 vous permettra de rester compétitif dans le marché du développement."

Cet article explore les langages les plus en vogue, leurs utilisations, et pourquoi ils devraient figurer sur votre liste de compétences à acquérir.
                    `,
                    summary: "Les meilleurs langages de programmation à apprendre en 2024.",
                    imageUrl: "/blog/langages.jpg",
                    author: "Guillaume Zehren",
                    published: true,
                    publishedAt: new Date(),
               },
               {
                    title: "Edge Computing : La Prochaine Grande Chose",
                    slug: "edge-computing-prochaine-grande-chose",
                    content: `
## Le Potentiel de l'Edge Computing

L'edge computing rapproche le traitement des données de la source, améliorant la vitesse et l'efficacité.

### Avantages de l'Edge Computing

- **Réduction de la latence** : Traitement des données plus proche de leur origine.
- **Optimisation des coûts** : Moins de dépendance aux centres de données centralisés.
- **Applications variées** : Utilisation dans l'IoT, la 5G, et les véhicules autonomes.

> "L'edge computing transforme la manière dont les données sont gérées et utilisées en temps réel."

Cet article examine les avantages de l'edge computing, ses applications et son impact potentiel sur l'architecture des réseaux modernes.
                    `,
                    summary: "Explorer le potentiel de l'edge computing.",
                    imageUrl: "/blog/edgecomputing.jpg",
                    author: "Guillaume Zehren",
                    published: true,
                    publishedAt: new Date(),
               },
               {
                    title: "La Blockchain au-delà des Cryptomonnaies : Applications Réelles",
                    slug: "blockchain-au-dela-des-cryptomonnaies",
                    content: `
## Applications de la Blockchain au-delà des Cryptos

La technologie blockchain va bien au-delà des cryptomonnaies, offrant des solutions dans divers secteurs.

### Applications Pratiques

- **Logistique** : Suivi des produits et transparence des chaînes d'approvisionnement.
- **Santé** : Gestion sécurisée des données médicales.
- **Énergie** : Automatisation des échanges énergétiques via des smart contracts.

> "La blockchain pourrait transformer de nombreux aspects de notre quotidien au-delà du simple échange financier."

Cet article explore ces applications et d'autres, montrant comment la blockchain change divers secteurs.
     `,
                    summary: "Comment la blockchain est utilisée au-delà de la finance.",
                    imageUrl: "/blog/btc2.jpg",
                    author: "Guillaume Zehren",
                    published: true,
                    publishedAt: new Date(),
               },
               {
                    title: "Éthique de l'IA : Défis et Considérations",
                    slug: "ethique-ia-defis",
                    content: `
## Défis Éthiques de l'IA

Alors que la technologie IA progresse, les considérations éthiques deviennent de plus en plus importantes.

### Principaux Enjeux

- **Vie privée** : Gestion des données personnelles et consentement des utilisateurs.
- **Biais algorithmiques** : Risques d'injustices dans la prise de décision automatisée.
- **Impact sur l'emploi** : Substitution des tâches humaines par l'IA.

> "Le développement responsable de l'IA nécessite une prise en compte sérieuse des défis éthiques."

Cet article explore les défis éthiques liés à l'IA, y compris la nécessité de la transparence et de la protection des données.
                    `,
                    summary: "Un regard sur les défis éthiques de l'IA.",
                    imageUrl: "/blog/ethic.jpg",
                    author: "Guillaume Zehren",
                    published: true,
                    publishedAt: new Date(),
               },
               {
                    title: "Les Smart Contracts : L'Avenir des Accords Automatisés",
                    slug: "smart-contracts-avenir",
                    content: `
## Les Smart Contracts : Révolutionner les Accords

Les smart contracts révolutionnent la manière dont les accords sont établis et exécutés, offrant automatisation et sécurité.

### Applications des Smart Contracts

- **Immobilier** : Achat et vente automatisés sans besoin d'intermédiaire.
- **Assurance** : Réclamations traitées automatiquement lorsque des conditions sont remplies.
- **Finance** : Exécution sécurisée des transactions financières.

> "Les smart contracts réduisent les risques de fraude et les coûts de transaction."

Cet article explore les applications des smart contracts et les défis à surmonter pour une adoption plus large.
                    `,
                    summary: "Comprendre les smart contracts et leur impact.",
                    imageUrl: "/blog/pc2.jpg",
                    author: "Guillaume Zehren",
                    published: true,
                    publishedAt: new Date(),
               }
          ],
     });

     console.log("Database seeded successfully!");
}

main()
     .catch((e) => {
          console.error(e);
          process.exit(1);
     })
     .finally(async () => {
          // await prisma.$disconnect();
     });
