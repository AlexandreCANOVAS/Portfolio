// Modifie uniquement ce fichier pour mettre à jour ton portfolio.
// Tu peux ajouter/supprimer des éléments dans les tableaux (skills, projects, certifications, contactLinks, etc.).

window.PORTFOLIO_CONTENT = {
  hero: {
    eyebrow: "Alternance IT - CESI 2026",
    name: "Alexandre Canovas",
    title: "Futur technicien systèmes & réseaux en alternance - orienté support IT et résolution d'incidents.",
    profileImage: "assets/profile/IMG_0948.JPG",
    profileAlt: "Photo de profil d'Alexandre Canovas",
    pitch:
      "Admis au CESI (rentrée 2026), je recherche une alternance pour prendre en charge le support utilisateur de premier niveau, la maintenance des postes et les incidents courants systèmes/réseaux. Disponible dès septembre 2026 à Toulouse et périphérie."
  },

  goal:
    "Mon objectif est d'intégrer une entreprise en alternance afin de devenir rapidement opérationnel en support IT et de contribuer efficacement aux équipes techniques.",
  about: {
    text:
      "Mon parcours en sécurité privée m'a appris à gérer les incidents, garder mon sang-froid et appliquer des procédures avec rigueur. Aujourd'hui, j'applique ces réflexes dans mes projets IT: diagnostic, résolution de problèmes, documentation et amélioration continue, avec une orientation claire vers le support utilisateur en entreprise.",
    qualities: ["Gestion d'incidents", "Rigueur", "Sens du service", "Communication claire", "Fiabilité"]
  },
  whyMe:
    "Ce que je peux apporter dès maintenant: une posture professionnelle, une bonne gestion des priorités, une communication utilisateur claire et un vrai sérieux d'exécution. Je suis junior, mais déjà dans une logique d'application concrète et de contribution utile à une équipe technique.",
  skills: [
    {
      title: "Support & systèmes (bases solides en progression)",
      items: [
        "Support utilisateur niveau 1 (mise en pratique sur projets personnels)",
        "Installation et configuration Windows (cas concrets de maintenance)",
        "Linux: navigation en ligne de commande (bases)",
        "Diagnostic de premiers incidents matériels et logiciels avec méthode"
      ]
    },
    {
      title: "Réseaux (notions fondamentales)",
      items: [
        "Adressage IP et sous-réseaux (bases)",
        "Compréhension du fonctionnement TCP/IP",
        "DNS / DHCP (notions)",
        "Premiers diagnostics réseau simples"
      ]
    },
    {
      title: "Développement & logique informatique",
      items: [
        "HTML / CSS / JavaScript (bases pratiques)",
        "Node.js et logique événementielle (mise en application sur bot)",
        "Notions de PHP et MySQL",
        "Création de pages web responsives"
      ]
    },
    {
      title: "Outils & environnement",
      items: [
        "Utilisation de Git et GitHub (bases)",
        "Premières commandes PowerShell",
        "Documentation technique simple et structurée"
      ]
    }
  ],
  projects: [
    {
      title: "Atelier maintenance PC",
      description: "Projet pratique de maintenance poste client. Impact: amélioration de ma rapidité de diagnostic et de ma méthode d'intervention sur incidents matériels courants. Ce projet m'a permis de structurer une démarche de diagnostic directement utile sur des missions support IT.",
      problem: "Renforcer les réflexes techniques sur le diagnostic de pannes matérielles en environnement poste utilisateur.",
      solution: "Réalisation d'ateliers de montage/démontage, vérifications composants et procédures de diagnostic structurées.",
      skillsDeveloped: "Diagnostic matériel, méthodologie de dépannage Windows et documentation d'intervention.",
      technologies: ["Diagnostic matériel", "Windows", "Documentation"],
      image: "assets/projects/IMG_4436.jpeg"
    },
    {
      title: "Diagnostic réseau PowerShell",
      description: "Script PowerShell de diagnostic réseau pour automatiser les vérifications de connectivité. Impact: gain de temps sur les contrôles de premier niveau et meilleure fiabilité du diagnostic. Ce type d'outil permet de gagner du temps lors du diagnostic de pannes réseau et d'automatiser les premières vérifications en support utilisateur. Ce projet m'a permis d'appliquer l'automatisation à un cas concret de support IT.",
      problem: "Les vérifications réseau de base réalisées manuellement sont répétitives et peuvent entraîner des oublis lors du diagnostic.",
      solution: "Création d'un script PowerShell qui centralise des tests de connectivité et fournit un résultat clair pour orienter le dépannage.",
      skillsDeveloped: "PowerShell appliqué, logique de diagnostic réseau, automatisation de tâches support et structuration de sortie technique.",
      technologies: ["PowerShell", "Réseaux", "Diagnostic"],
      image: "assets/projects/exemple-sortie.png",
      github: "https://github.com/AlexandreCANOVAS/diagnostic-reseau-powershell"
    },
    {
      title: "Bot Discord - Automatisation",
      description: "Automatisation de commandes pour réduire les actions manuelles. Impact: interactions plus fluides et gestion plus stable côté utilisateurs. Ce projet m'a permis de comprendre la gestion des événements et l'automatisation, compétences utiles dans des environnements IT avec tâches répétitives.",
      problem: "Les interactions manuelles répétitives sur le serveur ralentissaient la gestion et créaient des incohérences.",
      solution: "Création d'un bot d'automatisation pour centraliser des commandes, fluidifier les interactions et structurer les actions événementielles.",
      skillsDeveloped: "JavaScript backend, logique événementielle, maintenance et corrections progressives.",
      technologies: ["JavaScript", "Node.js", "Discord API"],
      image: "assets/projects/Capture d’écran 2026-02-19 164153.png",
      github: "https://github.com/AlexandreCANOVAS/BOT-WOLF-V2-RDR"
    },
    {
      title: "Application web FiveM",
      description: "Développement de fonctionnalités web liées à un environnement serveur. Impact: meilleure organisation des interactions et des opérations côté communauté. Ce projet m'a permis de relier besoins utilisateurs et développement technique, avec une approche orientée service.",
      problem: "Besoins de fonctionnalités personnalisées pour fluidifier l'interaction joueur et l'administration d'un serveur FiveM.",
      solution: "Création et intégration de scripts/fonctionnalités serveur avec interface web dédiée et gestion des données.",
      skillsDeveloped: "Développement web full-stack junior, logique métier et structure de base de données.",
      technologies: ["HTML", "CSS", "TypeScript", "MongoDB", "MySQL"],
      image: "assets/projects/Capture d’écran 2026-02-23 025057.png",
      github: "https://github.com/AlexandreCANOVAS/SITE-BOT-RP"
    },
    {
      title: "Site web gestion de planning",
      description: "Application de planification avec calcul des heures. Impact: réduction des erreurs manuelles et meilleure visibilité pour l'organisation. Ce projet m'a permis de comprendre l'importance d'outils simples et fiables pour les équipes opérationnelles.",
      problem: "Gestion manuelle des plannings avec risque d'erreurs sur les heures et manque de visibilité globale.",
      solution: "Conception d'une interface de gestion permettant la création de plannings et le calcul automatique des heures.",
      skillsDeveloped: "Conception d'interface métier, logique de calcul et structuration des données.",
      technologies: ["JavaScript", "CSS", "Blade", "PHP", "MySQL"],
      image: "assets/projects/IMG_2223 (1).jpg",
      github: "https://github.com/AlexandreCANOVAS/planning-app"
    }
  ],
  certifications: [

    {
      title: "Gestionnaire en maintenance et support informatique CESI (en cours)",
      description: "Formation Bac+2 orientée support, administration et réseau.",
      image: "",
      pdf: ""
    },

     {
      title: "Cisco Networking Academy - Notions de base du matériel informatique",
      description: "Apprendre les bases du matériel informatique et découvrir les composants des PC, des ordinateurs portables et des terminaux mobiles",
      image: "assets/certifications/Computer_Hardware_Basics_certificate_alexandre-canovas111-gmail-com_05d8107f-70da-4a8b-96e9-e75f55ee0222.pdf",
      pdf: "assets/certifications/Computer_Hardware_Basics_certificate_alexandre-canovas111-gmail-com_05d8107f-70da-4a8b-96e9-e75f55ee0222.pdf"
    },
    {
      title: "Certificat de réussite HTML & CSS",
      description: "Base de programmation HTML & CSS",
      image: "assets/certifications/assets/certifications/4f0b79b2-0f15-41dd-ac16-49e231839e14.pdf",
      pdf: "assets/certifications/4f0b79b2-0f15-41dd-ac16-49e231839e14.pdf"
    },

    {
      title: "BAC STI2D option systèmes d'information et numérique",
      description: "",
      image: "assets/certifications/Attestation.pdf",
      pdf: "assets/certifications/Attestation.pdf"
    },
   
    
  ],
  
  contactLinks: [
    {
      label: "Téléphone",
      text: "07 81 35 47 12",
      href: "tel:+33781354712"
    },
    {
      label: "Email",
      text: "alexandre.canovas111@gmail.com",
      href: "mailto:alexandre.canovas111@gmail.com"
    },
    {
      label: "LinkedIn",
      text: "linkedin.com/in/alexandre-canovas",
      href: "https://www.linkedin.com/in/alexandre-canovas"
    },
    {
      label: "GitHub",
      text: "github.com/AlexandreCANOVAS",
      href: "https://github.com/AlexandreCANOVAS"
    }
  ]
};
