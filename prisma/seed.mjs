import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
     await prisma.about.deleteMany();
     await prisma.experience.deleteMany();
     await prisma.technoItem.deleteMany()
     await prisma.technoType.deleteMany();
     await prisma.project.deleteMany();


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
