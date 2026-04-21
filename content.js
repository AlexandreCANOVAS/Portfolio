// Modifie uniquement ce fichier pour mettre à jour ton portfolio.
// Tu peux ajouter/supprimer des éléments dans les tableaux (skills, projects, certifications, contactLinks, etc.).

window.PORTFOLIO_CONTENT = {
  hero: {
    eyebrow: "Portfolio Alternance IT",
    name: "Alexandre Canovas",
    title: "Alternant IT | Support Utilisateur, Systèmes & Réseaux",
    profileImage: "assets/profile/IMG_0948.JPG",
    profileAlt: "Photo de profil d'Alexandre Canovas",
    pitch:
      "Admis au CESI (rentrée 2026), je recherche une alternance pour intervenir sur le support utilisateurs, la maintenance des postes et les opérations systèmes/réseaux de premier niveau. Disponible dès septembre 2026 (Toulouse et périphérie)."
  },

  goal:
    "Rejoindre une équipe IT en alternance pour contribuer concrètement au support quotidien, progresser sur les environnements systèmes/réseaux et devenir un technicien fiable et opérationnel.",
  about: {
    text:
      "Issu de la sécurité privée, j'ai développé des réflexes utiles en IT : gestion d'incidents, communication claire, respect des procédures et sens des priorités. En reconversion informatique, je consolide mes bases en support utilisateur, maintenance Windows, Linux et diagnostic réseau.",
    qualities: ["Gestion d'incidents", "Rigueur opérationnelle", "Analyse", "Autonomie", "Sens du service"]
  },
  whyMe:
    "Je peux apporter un cadre de travail sérieux, une bonne gestion de la pression et une vraie posture de service utilisateur. Aujourd'hui en montée en compétences, je m'investis pour être rapidement efficace sur des missions de support, de maintenance et de diagnostic en environnement professionnel.",
  skills: [
    {
      title: "Support & systèmes (bases en apprentissage)",
      items: [
        "Compréhension des notions de support utilisateur niveau 1",
        "Apprentissage de l'installation et configuration de Windows",
        "Découverte de Linux (navigation en ligne de commande, commandes de base)",
        "Initiation au diagnostic de problèmes matériels et logiciels"
      ]
    },
    {
      title: "Réseaux (notions fondamentales)",
      items: [
        "Compréhension des bases de l'adressage IP et sous-réseaux",
        "Notions de fonctionnement TCP/IP",
        "Découverte des services DNS et DHCP",
        "Premières notions de diagnostic réseau simple"
      ]
    },
    {
      title: "Développement & logique informatique",
      items: [
        "Bases en HTML / CSS / JavaScript",
        "Découverte de Node.js et de la logique événementielle",
        "Notions de PHP et MySQL",
        "Création de pages web simples et responsives"
      ]
    },
    {
      title: "Outils & environnement",
      items: [
        "Utilisation de Git et GitHub (bases)",
        "Premières commandes PowerShell",
        "Apprentissage de la documentation technique et de la structuration de projets"
      ]
    }
  ],
  projects: [
    {
      title: "Atelier maintenance PC",
      description: "Projet pratique de maintenance poste client orienté diagnostic et dépannage matériel.",
      problem: "Renforcer les réflexes techniques sur le diagnostic de pannes matérielles en environnement poste utilisateur.",
      solution: "Réalisation d'ateliers de montage/démontage, vérifications composants et procédures de diagnostic structurées.",
      skillsDeveloped: "Diagnostic matériel, méthodologie de dépannage Windows et documentation d'intervention.",
      technologies: ["Diagnostic matériel", "Windows", "Documentation"],
      image: "assets/projects/IMG_4436.jpeg"
    },
    {
      title: "Bot Discord - Automatisation",
      description: "Développement d'un bot pour automatiser des commandes et organiser les interactions utilisateurs.",
      problem: "Les interactions manuelles répétitives sur le serveur ralentissaient la gestion et créaient des incohérences.",
      solution: "Création d'un bot d'automatisation pour centraliser des commandes, fluidifier les interactions et structurer les actions événementielles.",
      skillsDeveloped: "Automatisation, logique événementielle, maintenance applicative et amélioration de la fiabilité opérationnelle.",
      technologies: ["JavaScript", "Node.js", "Discord API"],
      image: "assets/projects/Capture d’écran 2026-02-19 164153.png",
      github: "https://github.com/AlexandreCANOVAS/BOT-WOLF-V2-RDR"
    },
    {
      title: "Application web FiveM",
      description: "Développement d'outils web et scripts serveur pour améliorer l'expérience utilisateur en environnement FiveM.",
      problem: "Besoins de fonctionnalités personnalisées pour fluidifier l'interaction joueur et l'administration d'un serveur FiveM.",
      solution: "Création et intégration de scripts/fonctionnalités serveur avec interface web dédiée et gestion des données.",
      skillsDeveloped: "Analyse fonctionnelle, développement full-stack, structuration base de données et itérations de maintenance.",
      technologies: ["HTML", "CSS", "TypeScript", "MongoDB", "MySQL"],
      image: "assets/projects/Capture d’écran 2026-02-23 025057.png",
      github: "https://github.com/AlexandreCANOVAS/SITE-BOT-RP"
    },
    {
      title: "Site web gestion de planning",
      description: "Application web pour organiser les plannings, calculer les heures et centraliser les fiches employés.",
      problem: "Gestion manuelle des plannings avec risque d'erreurs sur les heures et manque de visibilité globale.",
      solution: "Conception d'une interface de gestion permettant la création de plannings et le calcul automatique des heures.",
      skillsDeveloped: "Conception d'interface métier, logique de calcul, gestion des données RH et maintenance applicative.",
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
      href: "tel:0612345678"
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
